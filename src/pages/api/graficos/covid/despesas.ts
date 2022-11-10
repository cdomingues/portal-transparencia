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
      .from("V2_DESP_EMPENHO")
      .whereLike("fonterecurso", "%COVID%")
      .where("ano", year)
      .where("mes", index);

    acamulatedAmount += Number(expenseAmount[0].valor || 0);

    graphs.push({
      name: `Despesas Covid - ${year}`,
      ano: year,
      mes: index,
      valor: Number(expenseAmount[0].valor || 0),
      data: `${index}/${year}`,
      valorAcumulado: acamulatedAmount,
    });
  }

  return res.status(200).json(graphs);
}
