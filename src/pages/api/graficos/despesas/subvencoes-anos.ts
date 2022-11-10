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

  const graphs = [];

  for (const year of years) {
    const expenseAmount = await database()
      .sum("valorliquidado as valor")
      .from("V1_DESPESA")
      .where("ano", year)
      .whereIn("programa", program)
      .whereIn("unidadeorc", unityOrc);

    graphs.push({
      name: "Subvenções e Terceiro Setor",
      ano: year,
      valor: Number(expenseAmount[0].valor || 0),
    });
  }

  return res.status(200).json(graphs);
}
