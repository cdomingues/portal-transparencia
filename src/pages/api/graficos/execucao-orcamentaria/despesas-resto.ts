import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../database";

type Data = {
  name: string;
  ano: number;
  valor: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const graphs = [];
  const years = [
    moment().subtract(5, "years").year(),
    moment().subtract(4, "years").year(),
    moment().subtract(3, "years").year(),
    moment().subtract(2, "years").year(),
    moment().subtract(1, "years").year(),
    moment().year(),
  ];

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

  for (const year of years) {
    const revenue = await database()
      .sum("valoratualizado as valor")
      .from("DESPESAS_ORC")
      .whereIn("programa", program)
      .whereIn("unidade", unity)
      .where("ano", year);

    graphs.push({
      name: "Despesas Restos à pagar",
      ano: year,
      valor: Number(revenue[0].valor || 0),
    });
  }

  return res.status(200).json(graphs);
}
