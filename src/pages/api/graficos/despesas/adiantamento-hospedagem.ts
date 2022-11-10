import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../database";

export type GraphRevenueData = {
  name: string;
  ano: number;
  mes: number;
  valor: number;
  data: string;
  valorAcumulado: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GraphRevenueData[]>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const year = moment().year();
  const month = moment().month() + 1;

  const graphs = [];

  let acamulatedAmount = 0;

  for (let index = 1; index <= month; index++) {
    const expenseAmount = await database()
      .sum("valorliquidado as valor")
      .from("V1_DESPESA")
      .where("ano", year)
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
      .where("mes", index);

    acamulatedAmount += Number(expenseAmount[0].valor || 0);

    graphs.push({
      name: `Adiantamento e Hospedagem - ${year}`,
      ano: year,
      mes: index,
      valor: Number(expenseAmount[0].valor || 0),
      data: `${index}/${year}`,
      valorAcumulado: acamulatedAmount,
    });
  }

  return res.status(200).json(graphs);
}
