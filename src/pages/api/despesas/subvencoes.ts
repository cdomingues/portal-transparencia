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

export type ExpenseGrantsData = {
  rows: Row[];
  count: number;
  years: Number[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExpenseGrantsData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const year = req.query.ano;

  const unityOrc = [
    "02.07.01 - SME",
    "02.08.01 - SMEL",
    "02.11.01 - FMS",
    "02.12.02 - FMAS",
    "02.12.03 - FMDCA",
    "02.16.01 - SMCT",
  ];

  const program = [
    "1000 - EDUCA MOGI",
    "1001 - PRIMEIROS PASSOS",
    "3001 - MOGI ACOLHEDORA",
    "3002 - CULTURA",
    "3003 - ESPORTE",
    "3100 - SAÚDE",
  ];

  const count = await database()
    .count("id as count")
    .from("DESP_EMPENHO")
    .where("tipolicitacao", "DISPENSA")
    .whereIn("programa", program)
    .whereIn("unidadeorc", unityOrc);

  const hosting = await database
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
    .where("tipolicitacao", "DISPENSA")
    .whereIn("programa", program)
    .whereIn("unidadeorc", unityOrc)
    .where("ano", "=", year || moment().year())
    .orderBy("data", "desc");

  const years = await database.raw(
    "SELECT DISTINCT ano FROM DESP_EMPENHO order by ano desc"
  );

  return res.status(200).json({
    count: Number(count[0].count),
    rows: hosting,
    years: years.map(({ ano }: { ano: number }) => ano),
  });
}
