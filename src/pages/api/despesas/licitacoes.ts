import moment from "moment";
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
  years: Number[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExpensesBiddingData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const year = req.query.ano;

  const count = await database().count("id as count").from("LICITACOES");

  const bidding = await database
    .select()
    .from("LICITACOES")
    .where("ano", "=", year || moment().year())
    .orderBy("datapublicacao", "desc");

  const years = await database.raw(
    "SELECT DISTINCT ano FROM LICITACOES order by ano desc"
  );

  return res.status(200).json({
    count: Number(count[0].count),
    rows: bidding,
    years: years.map(({ ano }: { ano: number }) => ano),
  });
}
