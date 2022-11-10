import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type Row = {
  numero: string;
  modalidade: string;
  integracao: string;
  objeto: string;
  datapublicacao: string;
  dataabertura: string;
  datavencimento: string;
  veiculopublicacao: string;
  nro: string;
  ano: number;
  linkdownload?: string;
};

export type ExpensesBiddingData = {
  rows: Row[];
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExpensesBiddingData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const count = await database().count("id as count").from("LICITACOES");

  const bidding = await database
    .select()
    .from("LICITACOES")
    .orderBy("datapublicacao", "desc");

  return res.status(200).json({
    count: Number(count[0].count),
    rows: bidding,
  });
}
