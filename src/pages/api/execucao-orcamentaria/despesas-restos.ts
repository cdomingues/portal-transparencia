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

export type BudgetExpenseRemainsData = {
  rows: Row[];
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BudgetExpenseRemainsData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }
  //TODO: VERIFY DATA
  const program = [
    "0000 - OPERAÇÕES ESPECIAIS",
    "0010 - FUNÇÕES DE GABINETE",
    "0014 - ACESSO A MORADIA ADEQUADA",
    "0020 - DESENVOLVIMENTO ECONÔMICO, GERAÇÃO DE POSTOS DE TR",
    "0021 - ACESSO, QUALIDADE, INOVAÇÃO E TECNOLOGIA NA EDUCAÇ",
    "0025 - PROMOÇÃO DO ESPORTE, LAZER E QUALIDADE DE VIDA",
    "0026 - DESENVOLVIMENTO URBANO SUSTENTÁVEL",
    "0027 - MELHORIA DA MOBILIDADE URBANA E SEGURANÇA VIÁRIA",
    "0028 - PROMOÇÃO, PROTEÇÃO E RECUPERAÇÃO DA SAÚDE NO ÂMBIT",
    "0029 - ASSISTÊNCIA PARA TODOS",
    "0030 - SERVIÇOS URBANOS",
    "0031 - PREVENÇÃO E PROTEÇÃO ÀS VITIMAS DE VIOLÊNCIA",
    "0032 - MODERNIZAÇÃO E DESENVOLVIMENTO DA AGROPECUÁRIA DE",
    "0033 - DESENVOLVIMENTO, PROMOÇÃO E FOMENTO DA CULTURA, TU",
    "0275 - PROTEÇÃO AO MEIO AMBIENTE",
    '0034 - PROTEÇÃO AO MEIO AMBIENTE ("MOGI MAIS VERDE")',
    "0035 - DESENVOLVIMENTO HUMANO  E TECNOLOGIA DA INFORMAÇÃO",
    "0040 - SUPORTE ADMINISTRATIVO",
  ];

  const unity = [
    "02.01.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.01.02 - COORDENADORIA DE COMUNICAÇÃO",
    "02.01.05 - OUVIDORIA GERAL MUNICIPAL",
    "02.01.06 - FUNDO SOCIAL DE SOLIDARIEDADE",
    "02.01.07 - CONTROLADORIA GERAL DO MUNICÍPIO",
    "02.02.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.02.02 - COORDENADORIA DE HABITAÇÃO",
    "02.03.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.04.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.05.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.06.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.07.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.07.03 - DEPARTAMENTO DE EDUCAÇÃO NÃO FORMAL",
    "02.07.04 - DEPARTAMENTO DE ALIMENTAÇÃO ESCOLAR",
    "02.08.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.09.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.09.02 - FUNDO DE ILUMINAÇÃO PÚBLICA",
    "02.10.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.10.02 - FUNDO MUNICIPAL DE MOBILIDADE URBANA-FMMU",
    "02.11.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.11.02 - FUNDO MUNICIPAL DE SAÚDE",
    "02.12.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS - SEMAS",
    "02.12.02 - FUNDO MUNICIPAL DE ASSISTÊNCIA SOCIAL - FMAS",
    "02.13.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.14.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.14.02 - COORDENADORIA DA GUARDA MUNICIPAL",
    "02.15.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS - SMAGR",
    "02.16.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS - SMC",
    "02.16.02 - COORDENADORIA DO TURISMO",
    "02.17.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS - SMVMA",
    "02.18.01 - GABIENTE E DEMAIS UNIDADES EXECUTORAS - SMGP",
    "02.18.02 - COORD GESTÃO DOS RECURSOS HUMANOS",
    "02.18.03 - COORDENADORIA DA ESCOLA DE GOVERNO E GESTÃO",
  ];

  const currentYear = moment().subtract(1, "year").startOf("year").toDate();

  const count = await database()
    .count("id as count")
    .from("DESP_EMPENHO")
    .whereIn("programa", program)
    .whereIn("unidadeorc", unity)
    .where("data", ">=", currentYear);

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
    .orderBy("data", "desc")
    .where("data", ">=", currentYear);

  return res.status(200).json({
    count: Number(count[0].count),
    rows: expenses,
  });
}
