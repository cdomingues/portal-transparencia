import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type Row = {
  tipo: string;
  numero: string;
  situacao: string;
  licitacao: string;
  modalidade: string;
  processo: string;
  datainicio: string;
  datatermino: string;
  valor: string;
  valorAditado: string;
  quantidadeAdivitos: number;
  fornecedor: string;
  grupo: string;
  objeto: string;
};

export type ExpensesContractData = {
  rows: Row[];
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExpensesContractData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }
  const initialDate = moment().startOf("year");
  const count = await database().count("integracao as count").from("CONTRATOS");

  const contracts = await database
    .select(
      "*",
      "valortotal as valor",
      "valoraditado as valorAditado",
      "qtdeaditivos as quantidadeAdivitos"
    )
    .from("CONTRATOS")
    .where("datainicio", ">=", initialDate.toDate())
    .orderBy("datainicio", "desc");

  return res.status(200).json({
    count: Number(count[0].count),
    rows: contracts,
  });
}
