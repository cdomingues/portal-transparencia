import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type TotalizerExpenseData = {
  valor: number;
  valorPrevisto: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TotalizerExpenseData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const year = moment().year();

  const sum = await database()
    .sum("valorliquidado as valor")
    .from("V1_DESPESA")
    .where("ano", ">=", year);

  const amountProvided = await database()
    .sum("valoratualizado as valor")
    .from("DESPESAS_ORC")
    .where("ano", ">=", year);

  return res.status(200).json({
    valor: Number(sum[0].valor),
    valorPrevisto: Number(amountProvided[0].valor),
  });
}
