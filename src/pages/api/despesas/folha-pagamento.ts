import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type Row = {
  matricula: string;
  nome: string;
  cargo: string;
  situacao: string;
  dataadmissao: string;
  dataexoneracao: string;
  secretaria: string;
  ano: number;
  mes: string;
  salariobase: string;
  bruto: string;
  liquido: string;
  desconto: string;
};

export type ExpensesPayrollData = {
  rows: Row[];
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExpensesPayrollData>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const count = await database().count("id as count").from("FOLHAPAGAMENTO");

  const payroll = await database
    .select()
    .from("FOLHAPAGAMENTO")
    .orderBy("id", "desc");

  return res.status(200).json({
    count: Number(count[0].count),
    rows: payroll,
  });
}
