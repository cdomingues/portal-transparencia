import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../database";

export type PayrollData = {
  name: string;
  ano: number;
  mes: number;
  valor: number;
  data: string;
  valorAcumulado: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PayrollData[]>
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
    const expenseAmount = await database()
      .sum("valorliquidado as valor")
      .from("V1_DESPESA")
      .where("ano", year)
      .where("mes", index)
      .where("tipolicitacao", "CONCORRENCIA")
      .where("programa", "2001 - CIDADE INTELIGENTE");
    acamulatedAmount += Number(expenseAmount[0].valor || 0);

    graphs.push({
      name: "Propaganda acumulado",
      ano: year,
      mes: index,
      valor: Number(expenseAmount[0].valor || 0),
      data: `${index}/${year}`,
      valorAcumulado: acamulatedAmount,
    });
  }

  return res.status(200).json(graphs);
}
