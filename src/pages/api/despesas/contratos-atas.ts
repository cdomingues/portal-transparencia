import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type Row = {
  id: string;
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
  id_contrato: string;
};

export type ExpensesContractData = {
  rows: Row[];
  count: number;
  years: Number[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExpensesContractData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const year = req.query.ano || moment().year();

  const from = moment().year(Number(year)).startOf("year").toDate();

  const to = moment()
    .year(Number(year))
    .endOf("year")
    .subtract(3, "hours")
    .toDate();

  const count = await database().count("integracao as count").from("CONTRATOS");

  const contracts = await database
    .select(
      "*",
      "valortotal as valor",
      "valoraditado as valorAditado",
      "qtdeaditivos as quantidadeAdivitos",
      
    )
    .from("CONTRATOS")
    .whereBetween("datainicio", [from, to])
    .orderBy("datainicio", "desc");

  const years = await database.raw(
    "SELECT DISTINCT YEAR(datainicio) as ano FROM CONTRATOS order by ano desc"
  );

  return res.status(200).json({
    count: Number(count[0].count),
    rows: contracts,
    years: years.map(({ ano }: { ano: number }) => ano),
  });
}
