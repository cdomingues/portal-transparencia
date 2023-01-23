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

  const unityOrc = [
    "02.07.01 - SME",
    "02.08.01 - SMEL",
    "02.11.01 - FMS",
    "02.12.02 - FMAS",
    "02.12.03 - FMDCA",
    "02.16.01 - SMCT",
  ];

  const program = [
    "1000 - EDUCA MOGI",
    "1001 - PRIMEIROS PASSOS",
    "3001 - MOGI ACOLHEDORA",
    "3002 - CULTURA",
    "3003 - ESPORTE",
    "3100 - SAÚDE",
  ];

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
      .whereIn("programa", program)
      .whereIn("unidadeorc", unityOrc);

    acamulatedAmount += Number(expenseAmount[0].valor || 0);

    graphs.push({
      name: "Subvenções acumulado",
      ano: year,
      mes: index,
      valor: Number(expenseAmount[0].valor || 0),
      data: `${index}/${year}`,
      valorAcumulado: acamulatedAmount,
    });
  }

  return res.status(200).json(graphs);
}
