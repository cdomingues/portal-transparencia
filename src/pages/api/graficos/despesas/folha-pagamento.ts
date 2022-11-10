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

  const year = moment().year();
  const month = moment().month() + 1;

  const graphs = [];
  let acamulatedAmount = 0;

  for (let index = 1; index <= month; index++) {
    const expenseAmount = await database()
      .sum("bruto as valor")
      .from("V1_FOLHAPAGAMENTO")
      .where("ano", ">=", year)
      .where("mes", index);

    acamulatedAmount += Number(expenseAmount[0].valor || 0);

    graphs.push({
      name: "Folha de Pagamento",
      ano: year,
      mes: index,
      valor: Number(expenseAmount[0].valor || 0),
      data: `${index}/${year}`,
      valorAcumulado: acamulatedAmount,
    });
  }

  return res.status(200).json(graphs);
}
