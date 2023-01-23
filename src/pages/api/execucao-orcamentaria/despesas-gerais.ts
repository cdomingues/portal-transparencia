import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type Row = {
  id: number;
  ano: string;
  idunidade: string;
  iddespesa: string;
  despesa: string;
  idfonterecurso: string;
  fonterecurso: string;
  funcionalprogramatica: string;
  idfuncao: string;
  funcao: string;
  idsubfuncao: string;
  subfuncao: string;
  idprograma: string;
  programa: string;
  valorinicial: number;
  valoratualizado: number;
};

export type BudgetGeneralExpenseData = {
  rows: Row[];
  count: number;
  years: Number[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BudgetGeneralExpenseData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const year = req.query.ano;

  const count = await database().count("id as count").from("DESPESAS_ORC");

  const expenses = await database
    .select("*")
    .from("DESPESAS_ORC")
    .where("ano", "=", year || moment().year())
    .orderBy("id", "desc");

  const years = await database.raw(
    "SELECT DISTINCT ano FROM DESPESAS_ORC order by ano desc"
  );

  console.log({ years });

  return res.status(200).json({
    count: Number(count[0].count),
    rows: expenses,
    years: years.map(({ ano }: { ano: number }) => ano),
  });
}
