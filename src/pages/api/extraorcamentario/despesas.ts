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
  naturezadespesa: string;
};

export type ExtrabudgetaryExpensesData = {
  rows: Row[];
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExtrabudgetaryExpensesData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const naturalExpense = [
    "1.1.3.8.1.09.00.001 - SALARIO MATERNIDADE INSS",
    "2.1.8.8.1.01.02.001 - INSS VENCIMENTOS E VANTAGENS",
    "2.1.8.8.1.01.02.002 - INSS EMPREITEIRAS",
    "2.1.8.8.1.01.02.003 - INSS OUTROS",
    "2.1.8.8.1.01.02.004 - INSS AUTONOMOS",
    "2.1.8.8.1.01.02.005 - SÃO PAULO PREVIDÊNCIA - SPPREV",
    "2.1.8.8.1.01.02.006 - IPREM MUNICÍPIO DE SÃO PAULO",
    "2.1.8.8.1.01.03.010 - IPREM",
    "2.1.8.8.1.01.03.022 - ASSOC. GUARDAS MUNIC. EST. S. PAULO",
    "2.1.8.8.1.01.05.001 - IPTU - INDENIZAÇÕES E RESTITUIÇÕES (F)",
    "2.1.8.8.1.01.05.002 - ISS - INDENIZAÇÕES E RESTITUIÇÕES (F)",
    "2.1.8.8.1.01.05.004 - INDENIZAÇÕES E RESTITUIÇÕES RECEITAS DIVERSAS",
    "2.1.8.8.1.01.10.004 - AÇÃO DE ALIMENTOS",
    "2.1.8.8.1.01.10.005 - ORDEM JUDICIAL - FOLHA",
    "2.1.8.8.1.01.10.007 - PENHORA DE DÍVIDAS ALIMENTARES TSTRO20604382017504",
    "2.1.8.8.1.01.10.008 - PENHORA DÍV ALIMENT.TSTRO20604382017504 COM 07/22",
    "2.1.8.8.1.01.10.009 - AÇÃO DE ALIMENTOS COMUNICADO TCSP 007/2022",
    "2.1.8.8.1.01.11.008 - SAMED",
    "2.1.8.8.1.01.11.009 - MOGIDONTO ASSIST. ODONTOL. S/C LTDA.",
    "2.1.8.8.1.01.11.012 - SAMED/IPREM - SEMAE",
    "2.1.8.8.1.01.13.007 - SINTAP",
    "2.1.8.8.1.01.13.008 - SINTAP - MOGIDONTO",
    "2.1.8.8.1.01.13.009 - A.G.C.M.M.C - ASSOC. GUARDAS MUNIC. M. CRUZES",
    "2.1.8.8.1.01.13.012 - AOPP - ASSOC. OFICIAIS, PRAÇAS E PENSIONISTAS",
    "2.1.8.8.1.01.13.013 - ASSOCIAÇÃO DOS FISCAIS DO MUNICÍPIO DE MOGI DAS C.",
    "2.1.8.8.1.01.15.016 - CEF - EMPRESTIMOS",
    "2.1.8.8.1.01.15.017 - BANESPA - EMPRESTIMO",
    "2.1.8.8.1.01.15.017 - NÃO UTILIZAR BANESPA - EMPRESTIMO",
    "2.1.8.8.1.01.15.021 - EMPRESTIMO - BANCO DO BRASIL",
    "2.1.8.8.1.01.15.025 - BANCO DAYCOVAL S/A",
    "2.1.8.8.1.01.15.028 - BRADESCO EMPRÉSTIMO CONSIGNADOS",
    "2.1.8.8.1.01.15.029 - SANTANDER - CONSIGNADOS - COMUNICADO TCSP 007/2022",
    "2.1.8.8.1.01.99.006 - ASMMC",
    "2.1.8.8.1.03.01.016 - DEP. JUD. PROCESSO 0001585-61.2013.8.26..0219",
    "2.1.8.8.1.03.01.037 - DEP. JUD. IRANYLDA - PROC. JUD. 0015105-19.2019.8.",
    "2.1.8.8.1.03.01.039 - DEP. JUD. IRANYLDA PROC. 1000316-68.2017.5.02.0050",
    "2.1.8.8.1.03.01.040 - DEP. JUD. PROC 0001585-61.2013.8.26.0219 COM 07/22",
    "2.1.8.8.1.04.01.002 - GARANTIAS DIVERSAS",
    "2.1.8.8.1.04.03.026 - HONORÁRIOS ADVOCATÍCIOS - PREF",
    "2.1.8.8.1.04.03.027 - RECEITA DE DIVIDA ATIVA - HONORÁRIOS ADVOCATÍCIOS",
    "2.1.8.8.1.04.03.028 - HONORÁRIOS ADVOCATÍCIOS - PROCESSOS CÍVEIS",
    "2.1.8.8.1.04.03.029 - HONORÁRIOS ADVOCATÍCIOS - PROCESSOS TRABALHISTAS",
    "2.1.8.8.1.04.03.031 - REMUNERAÇÃO - DA CONTA CORRENTE DO HONORÁRIOS",
    "2.1.8.8.1.04.03.032 - HONORÁRIOS ADVOCATÍCIOS-PREF COMUNIC TCSP 07/2022",
    "2.1.8.8.1.04.03.034 - HONORÁRIOS ADVOC.-PROC. CIVÍS-COM TCSP 07/2022",
    "2.1.8.8.1.04.03.035 - HONORÁRIOS ADVOC.-PROC. TRAB - COM TCSP 07/2022",
    "2.1.8.8.1.04.03.037 - HONORÁRIOS REMUNERAÇÃO C/C - COMUNIC. TCSP 07/2022",
    "2.1.8.8.3.01.02.001 - INSS VENCIMENTOS E VANTAGENS",
    "2.1.8.8.3.01.02.002 - INSS EMPREITEIRAS",
    "2.1.8.8.3.01.02.003 - INSS OUTROS",
    "2.1.8.8.3.01.02.004 - INSS AUTONOMOS",
    "2.1.8.8.3.01.02.005 - SÃO PAULO PREVIDÊNCIA - SPPREV",
    "2.1.8.8.3.01.02.006 - IPREM MUNICÍPIO DE SÃO PAULO",
    "3.5.1.1.2.02.00.000 - REPASSE CONCEDIDO",
  ];

  const count = await database()
    .count("id as count")
    .from("DESP_EMPENHO_EXTRA")
    .whereIn("naturezadespesa", naturalExpense);

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
    .from("DESP_EMPENHO_EXTRA")
    .whereIn("naturezadespesa", naturalExpense)
    .orderBy("data", "desc");

  return res.status(200).json({
    count: Number(count[0].count),
    rows: expenses,
  });
}
