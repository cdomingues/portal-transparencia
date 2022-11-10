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

  //TODO: VERIFY DATA
  const program = [
    "1001 - PRIMEIROS PASSOS",
    "2004 - INFRAESTRUTURA",
    "3001 - MOGI ACOLHEDORA",
    "3100 - SAÚDE",
  ];

  const unity = [
    "02.03.01 - SMPU",
    "02.11.01 - FMS",
    "02.12.02 - FMAS",
    "02.19.01 - SMIU",
  ];

  for (const year of years) {
    const revenue = await database()
      .sum("valoratualizado as valor")
      .from("DESPESAS_ORC")
      .whereIn("programa", program)
      .whereIn("unidade", unity)
      .where("ano", year);

    graphs.push({
      name: "Despesas Emendas Parlamentares",
      ano: year,
      valor: Number(revenue[0].valor || 0),
    });
  }

  return res.status(200).json(graphs);
}
