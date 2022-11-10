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

export type BudgetExpenseFinesData = {
  rows: Row[];
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BudgetExpenseFinesData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const program = [
    "0040 - SUPORTE ADMINISTRATIVO",
    "0027 - MELHORIA DA MOBILIDADE URBANA E SEGURANÇA VIÁRIA",
  ];

  const unity = [
    "02.10.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.10.02 - FUNDO MUNICIPAL DE MOBILIDADE URBANA-FMMU",
  ];

  const lastYear = moment().subtract(1, "year").startOf("year").toDate();

  const count = await database()
    .count("id as count")
    .from("DESP_EMPENHO")
    .whereIn("unidadeorc", unity)
    .whereIn("programa", program)
    .where("fonterecurso", "03.410.0000 - TRÂNSITO - SINALIZAÇÃO")
    .where("subfuncao", "452 - SERVIÇOS URBANOS");
  // .where("data", ">=", lastYear);

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
    .whereIn("unidadeorc", unity)
    .whereIn("programa", program)
    .where("fonterecurso", "03.410.0000 - TRÂNSITO - SINALIZAÇÃO")
    .where("subfuncao", "452 - SERVIÇOS URBANOS")
    // .where("data", ">=", lastYear)
    .from("DESP_EMPENHO")
    .orderBy("data", "desc");

  return res.status(200).json({
    count: Number(count[0].count),
    rows: expenses,
  });
}
