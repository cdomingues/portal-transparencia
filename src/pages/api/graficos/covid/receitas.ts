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

  const year = Number(req.query.ano) || moment().year();

  const currentYear = moment().year();

  let month = moment().month() + 1;

  if (year !== currentYear) {
    month = moment().year(year).endOf("year").month() + 1;
  }

  const graphs = [];
  let acamulatedAmount = 0;

  for (let index = 1; index <= month; index++) {
    const revenueAmount = await database()
      .sum("valor as valor")
      .from("V1_RECEITAS")
      .whereLike("receita", "%COVID%")
      .where("ano", year)
      .where("mes", index);

    acamulatedAmount += Number(revenueAmount[0].valor || 0);

    graphs.push({
      name: `Receitas Covid - ${year}`,
      ano: year,
      mes: index,
      valor: Number(revenueAmount[0].valor || 0),
      data: `${index}/${year}`,
      valorAcumulado: acamulatedAmount,
    });
  }

  return res.status(200).json(graphs);
}
