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

export type BudgetGeneralExpenseData = {
  rows: Row[];
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BudgetGeneralExpenseData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const count = await database().count("id as count").from("DESP_EMPENHO");

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
    .where("data", ">=", moment().subtract(1, "year").startOf("year").toDate())
    .orderBy("data", "desc");

  return res.status(200).json({
    count: Number(count[0].count),
    rows: expenses,
  });
}
