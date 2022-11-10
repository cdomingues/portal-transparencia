import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../database";

export type Row = {
  chapa: string;
  incorporacao: string;
  tipo: string;
  descricao: string;
  dataaquisicao: string;
  situacao: string;
  valoraquisicao: string;
  fornecedor: string;
};

export type PatrimonyData = {
  rows: Row[];
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PatrimonyData>
) {
  //TODO: ADICIONAR PAGINAÇÃO
  if (req.method !== "GET") {
    return res.status(404);
  }
  const startOfYear = moment().subtract(1, "year").startOf("year").toDate();

  const count = await database()
    .count("chapa as count")
    .from("PATRIMONIO")
    .where("dataaquisicao", ">=", startOfYear);

  const revenues = await database
    .select()
    .from("PATRIMONIO")
    .where("dataaquisicao", ">=", startOfYear)
    .orderBy("dataaquisicao", "desc");

  return res.status(200).json({
    count: Number(count[0].count),
    rows: revenues,
  });
}
