import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type TotalizerRevenueData = {
  valor: number;
  valorPrevisto: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TotalizerRevenueData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const startOfYear = moment().subtract(1, "year").startOf("year").toDate();
  const endOfYear = moment(startOfYear).add(1, "year").startOf("year").toDate();

  const sum = await database()
    .sum("valor as valor")
    .from("RECEITAS")
    .where("data", ">=", startOfYear)
    .andWhere("data", "<=", endOfYear);

  const amountProvided = await database()
    .sum("valor as valor")
    .from("RECEITAS_ORC")
    .where("ano", ">=", moment().subtract(1, "year").year())
    .andWhere("ano", "<", moment().year());

  return res.status(200).json({
    valor: Number(sum[0].valor),
    valorPrevisto: Number(amountProvided[0].valor),
  });
}
