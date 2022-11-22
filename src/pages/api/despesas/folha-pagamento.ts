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
  if (req.method !== "POST") {
    return res.status(404);
  }
  const { ano, mes, nome, cargo, matricula } = req.body;
  console.log({ ano, mes, nome, cargo, matricula });

  const yearFilter = ano ? { ano } : {};
  const monthFilter = mes ? { mes } : {};
  const nameFilter = nome ? { nome } : {};
  const roleFilter = cargo ? { cargo } : {};
  const enrollmentFilter = matricula ? { matricula } : {};

  const count = await database()
    .count("id as count")
    .from("FOLHAPAGAMENTO")
    .where({
      ...yearFilter,
      ...monthFilter,
      ...nameFilter,
      ...roleFilter,
      ...enrollmentFilter,
    });

  const payroll = await database
    .select()
    .from("FOLHAPAGAMENTO")
    .where({
      ...yearFilter,
      ...monthFilter,
      ...nameFilter,
      ...roleFilter,
      ...enrollmentFilter,
    })
    .orderBy("id", "desc");

  return res.status(200).json({
    count: Number(count[0].count),
    rows: payroll,
  });
}
