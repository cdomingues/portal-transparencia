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

export type BudgetExpenseAmendmentsData = {
  rows: Row[];
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BudgetExpenseAmendmentsData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }
  //TODO: VERIFY DATA
  const program = [
    "1001 - PRIMEIROS PASSOS",
    "2004 - INFRAESTRUTURA",
    "3001 - MOGI ACOLHEDORA",
    "3100 - SAÚDE",
  ];

  const unity = [
    "02.03.01 - SMPU",
    "02.11.01 - FMS",
    "02.12.02 - FMAS",
    "02.19.01 - SMIU",
  ];

  const count = await database()
    .count("id as count")
    .from("DESP_EMPENHO")
    .whereIn("programa", program)
    .whereIn("unidadeorc", unity);

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
    .whereIn("programa", program)
    .whereIn("unidadeorc", unity)
    .orderBy("data", "desc");

  return res.status(200).json({
    count: Number(count[0].count),
    rows: expenses,
  });
}
