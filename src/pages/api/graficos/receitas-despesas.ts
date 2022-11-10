import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type GraphExpenseRevenueData = {
  name: string;
  ano: number;
  mes: number;
  valor: number;
  data: string;
  valorAcumulado: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GraphExpenseRevenueData[]>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const year = moment().year();
  const month = moment().month() + 1;
  //TODO: PEGAR VALORES DOS ULTIMOS 5 ANOS , AGRUPAR POR ANO RECEITAS X DESPESAS.

  const graphs = [];

  let expenseAcumulatedAmount = 0;
  let revenueAcumulatedAmount = 0;

  for (let index = 1; index <= month; index++) {
    const expenseAmount = await database()
      .sum("valorliquidado as valor")
      .from("V1_DESPESA")
      .where("ano", ">=", year)
      .where("mes", index);

    expenseAcumulatedAmount += Number(expenseAmount[0].valor || 0);

    const revenueAmount = await database()
      .sum("valor as valor")
      .from("V1_RECEITAS")
      .where("ano", year)
      .where("mes", index);

    revenueAcumulatedAmount += Number(revenueAmount[0].valor || 0);

    graphs.push(
      {
        name: `Arrecadações - ${year}`,
        ano: year,
        mes: index,
        valor: Number(revenueAmount[0].valor || 0),
        data: `${index}/${year}`,
        valorAcumulado: revenueAcumulatedAmount,
      },
      {
        name: `Despesas e Investimentos - ${year}`,
        ano: year,
        mes: index,
        valor: Number(expenseAmount[0].valor || 0),
        data: `${index}/${year}`,
        valorAcumulado: expenseAcumulatedAmount,
      }
    );
  }

  return res.status(200).json(graphs);
}
