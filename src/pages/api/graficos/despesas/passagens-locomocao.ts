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
      .sum("valorliquidado as valor")
      .from("V1_DESPESA")
      .where("cnpj_cpf_favorecido", "14.211.195/0001-23")
      .where("ano", year)
      .where("mes", index)
      .whereIn("programa", [
        "3002 - CULTURA",
        "2002 - APRIMORAMENTO DA GESTÃO PÚBLICA",
        "2007 - MOBILIDADE URBANA",
      ]);
    acamulatedAmount += Number(expenseAmount[0].valor || 0);

    graphs.push({
      name: "Passagens locomoção acumulado",
      ano: year,
      mes: index,
      valor: Number(expenseAmount[0].valor || 0),
      data: `${index}/${year}`,
      valorAcumulado: acamulatedAmount,
    });
  }

  return res.status(200).json(graphs);
}
