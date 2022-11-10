import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../database";

type Data = {
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

  const graphs = [];
  const years = [
    moment().subtract(5, "years").year(),
    moment().subtract(4, "years").year(),
    moment().subtract(3, "years").year(),
    moment().subtract(2, "years").year(),
    moment().subtract(1, "years").year(),
    moment().year(),
  ];

  for (const year of years) {
    const revenue = await database()
      .sum("valor as valor")
      .from("RECEITAS_ORC")
      .whereLike("receita", "%Trânsito%")
      .where("ano", year);

    graphs.push({
      name: "Receitas Multas Transito",
      ano: year,
      valor: Number(revenue[0].valor || 0),
    });
  }

  return res.status(200).json(graphs);
}
