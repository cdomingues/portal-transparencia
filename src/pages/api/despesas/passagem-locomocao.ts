import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type Row = {
  numero: string;
  modalidade: string;
  cpfcnpj: string;
  fornecedor: string;
  ano: number;
  data: string;
  empenho: string;
  liquidado: string;
  pago: string;
  programa: string;
  unidade: string;
};

export type ExpensesPassageData = {
  rows: Row[];
  count: number;
  years: Number[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExpensesPassageData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const year = req.query.ano;

  const count = await database()
    .count("id as count")
    .from("DESP_EMPENHO")
    .where("cnpj_cpf_favorecido", "14.211.195/0001-23")
    .whereIn("programa", [
      "3002 - CULTURA",
      "2002 - APRIMORAMENTO DA GESTÃO PÚBLICA",
      "2007 - MOBILIDADE URBANA",
    ]);

  const expenses = await database
    .select(
      "*",
      "tipolicitacao as modalidade",
      "cnpj_cpf_favorecido as cpfcnpj",
      "favorecido as fornecedor",
      "numerolicitacao as numero",
      "valor_ori as empenho",
      "valor_atu as liquidado",
      "valor_anu as pago",
      "unidadeorc as unidade"
    )
    .from("DESP_EMPENHO")
    .where("cnpj_cpf_favorecido", "14.211.195/0001-23")
    .whereIn("programa", [
      "3002 - CULTURA",
      "2002 - APRIMORAMENTO DA GESTÃO PÚBLICA",
      "2007 - MOBILIDADE URBANA",
    ])
    .where("ano", "=", year || moment().year())
    .orderBy("data", "desc");

  const years = await database.raw(
    "SELECT DISTINCT ano FROM DESP_EMPENHO order by ano desc"
  );

  return res.status(200).json({
    count: Number(count[0].count),
    rows: expenses,
    years: years.map(({ ano }: { ano: number }) => ano),
  });
}
