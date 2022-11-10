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

export type CovidExpensesData = {
  rows: Row[];
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CovidExpensesData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const filter = [
    "02.312.8620 - ENFRENTAMENTO COVID-19-RESOLUÇÃO SS 86/2020",
    "05.312.0361 - CENTROS ATENDIMENTO P/ENFRET. COVID-19-PORT.361/21",
    "05.312.1787 - HABILITAÇÃO UTI COVID-19 HMMC - PORTARIA 1787/2020",
    "05.312.1857 - ENFRENTAMENTO COVID-19-ESC.PÚBLICAS RBE-PORT.1857",
    "05.312.2237 - PORTARIA 2237/2021 - TRATAMENTO COVID-19",
    "05.312.3389 - ENFRENTAMENTO COVID19-EQ.ODONTO-PORT.3389/2020",
    "05.312.3393 - ENFRENTAMENTO COVID19-INFORM.ESF/EA-PORT.3393/2020",
    "05.312.3617 - PORT.3617/2021-REC.COVID19-INCR.ASSIST.FARMACEUTIC",
    "05.312.5516 - MEDICAMENTOS SAÚDE MENTAL-COVID-PORT.2516/20",
    "05.312.5797 - ENFRENTAMENTO CORONAVÍRUS - PORTARIA 1797/2020",
  ];
  const year = moment().year();

  const count = await database()
    .count("idunidade as count")
    .from("V1_DESPESA")
    .where("ano", year)
    .whereIn("fonterecurso", filter);

  const expenses = await database
    .select(
      "*",
      "tipolicitacao as modalidade",
      "cnpj_cpf_favorecido as cpfcnpj",
      "favorecido as fornecedor",
      "iddespesa as numero",
      "valorempenhado as empenho",
      "valorliquidado as liquidado",
      "valorpago as pago",
      "unidadeorc as unidade"
    )
    .from("V1_DESPESA")
    .whereIn("fonterecurso", filter)
    .where("ano", year)
    .orderBy("mes", "desc");

  return res.status(200).json({
    count: Number(count[0].count),
    rows: expenses,
  });
}
