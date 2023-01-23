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

export type ExpensesHostingData = {
  rows: Row[];
  count: number;
  years: Number[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExpensesHostingData>
) {
  //TODO: AVERIGUAR RETORNO
  if (req.method !== "GET") {
    return res.status(404);
  }

  const year = req.query.ano;

  const count = await database()
    .count("id as count")
    .from("DESP_EMPENHO")
    .where("tipolicitacao", "DISPENSA")
    .whereIn("programa", [
      "2000 - MOGI EFICIENTE",
      "2005 - NOSSA TERRA",
      "1000 - EDUCA MOGI",
      "4000 - EMPREGO E RENDA",
      "2002 - APRIMORAMENTO DA GESTÃO PÚBLICA",
      "3100 - SAÚDE",
      "3003 - ESPORTE",
      "3001 - MOGI ACOLHEDORA",
      "3000 - REDUÇÃO DE POBREZA",
      "2003 - HABITAÇÃO",
      "3004 - SEGURANÇA",
      "4000 - EMPREGO E RENDA",
      "2004 - INFRAESTRUTURA",
    ]);

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
    .whereIn("programa", [
      "2000 - MOGI EFICIENTE",
      "2005 - NOSSA TERRA",
      "1000 - EDUCA MOGI",
      "4000 - EMPREGO E RENDA",
      "2002 - APRIMORAMENTO DA GESTÃO PÚBLICA",
      "3100 - SAÚDE",
      "3003 - ESPORTE",
      "3001 - MOGI ACOLHEDORA",
      "3000 - REDUÇÃO DE POBREZA",
      "2003 - HABITAÇÃO",
      "3004 - SEGURANÇA",
      "4000 - EMPREGO E RENDA",
      "2004 - INFRAESTRUTURA",
    ])
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
