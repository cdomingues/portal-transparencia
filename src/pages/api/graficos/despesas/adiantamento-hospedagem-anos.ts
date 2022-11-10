import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../database";
import moneyFormatter from "../../../../utils/moneyFormatter";

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
      .where("tipolicitacao", "DISPENSA")
      .whereIn("programa", [
        "2000 - MOGI EFICIENTE",
        "2005 - NOSSA TERRA",
        "1000 - EDUCA MOGI",
        "4000 - EMPREGO E RENDA",
        "2002 - APRIMORAMENTO DA GESTÃO PÚBLICA",
        "3100 - SAÚDE",
        "3003 - ESPORTE",
        "3001 - MOGI ACOLHEDORA",
        "3000 - REDUÇÃO DE POBREZA",
        "2003 - HABITAÇÃO",
        "3004 - SEGURANÇA",
        "4000 - EMPREGO E RENDA",
        "2004 - INFRAESTRUTURA",
      ]);

    graphs.push({
      name: "Adiantamento e Hospedagem",
      ano: year,
      valor: Number(expenseAmount[0].valor || 0),
    });
  }

  return res.status(200).json(graphs);
}
