import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../database";

export type Data = {
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

  const years = [
    moment().subtract(5, "years").year(),
    moment().subtract(4, "years").year(),
    moment().subtract(3, "years").year(),
    moment().subtract(2, "years").year(),
    moment().subtract(1, "years").year(),
    moment().year(),
  ];

  const graphs = [];

  for (const year of years) {
    const expenseAmount = await database()
      .sum("valorliquidado as valor")
      .from("V1_DESPESA")
      .where("ano", year)
      .where("tipolicitacao", "CONCORRENCIA")
      .where("programa", "2001 - CIDADE INTELIGENTE");

    graphs.push({
      name: "Publicidade e Propaganda",
      ano: year,
      valor: Number(expenseAmount[0].valor || 0),
    });
  }

  return res.status(200).json(graphs);
}
