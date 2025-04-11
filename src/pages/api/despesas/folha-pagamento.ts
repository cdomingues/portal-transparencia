import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type Row = {
  matricula: string;
  nome: string;
  cargo: string;
  situacao: string;
  salariobase: string;
  dataadmissao: string;
  dataexoneracao: string;
  tipocontrato: string;
  secretaria: string;
  localtrabalho: string;
  ano: number;
  mes: string;
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

  const yearFilter = ano ? { ano } : {};
  const monthFilter = mes ? { mes } : {};
 
  const enrollmentFilter = matricula ? { matricula } : {};

  if (nome) {
    const count = await database()
      .count("id as count")
      .from("FOLHAPAGAMENTO")
      .where({
        ...yearFilter,
        ...monthFilter,
     
        ...enrollmentFilter,
      })
      .whereILike("nome", `%${nome}%`)
 ;

    const payroll = await database
      .select()
      .from("FOLHAPAGAMENTO")
      .where({
        ...yearFilter,
        ...monthFilter,
   
        ...enrollmentFilter,
      })
      .whereILike("nome", `%${nome}%`)
      .orderBy("nome", "asc");

    return res.status(200).json({
      count: Number(count[0].count),
      rows: payroll,
    });
  }

  if (cargo) {
    const count = await database()
      .count("id as count")
      .from("FOLHAPAGAMENTO")
      .where({
        ...yearFilter,
        ...monthFilter,
     
        ...enrollmentFilter,
      })
      .whereILike("cargo", `%${cargo}%`)
 ;

    const payroll = await database
      .select()
      .from("FOLHAPAGAMENTO")
      .where({
        ...yearFilter,
        ...monthFilter,
   
        ...enrollmentFilter,
      })
      .whereILike("cargo", `%${cargo}%`)
      .orderBy("nome", "asc");

    return res.status(200).json({
      count: Number(count[0].count),
      rows: payroll,
    });
  }

  const count = await database()
    .count("id as count")
    .from("FOLHAPAGAMENTO")
    .where({
      ...yearFilter,
      ...monthFilter,
      ...enrollmentFilter,
    });

  const payroll = await database
    .select()
    .from("FOLHAPAGAMENTO")
    .where({
      ...yearFilter,
      ...monthFilter,
      ...enrollmentFilter,
    })
    .orderBy("nome", "asc");

  return res.status(200).json({
    count: Number(count[0].count),
    rows: payroll,
  });
}
// import type { NextApiRequest, NextApiResponse } from "next";
// import database from "../../../database";

// export type Row = {
//   matricula: string;
//   nome: string;
//   cargo: string;
//   situacao: string;
//   dataadmissao: string;
//   dataexoneracao: string;
//   secretaria: string;
//   ano: number;
//   mes: string;
//   salariobase: string;
//   bruto: string;
//   liquido: string;
//   desconto: string;
// };

// export type ExpensesPayrollData = {
//   rows: Row[];
//   count: number;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ExpensesPayrollData>
// ) {
//   if (req.method !== "POST") {
//     return res.status(404);
//   }

//   const { ano, mes, nome, cargo, matricula } = req.body;
//   const yearFilter = ano ? { ano } : {};
//   const monthFilter = mes ? { mes } : {};

//   // Criar Construtor de Consultas
//   const query = database().from("FOLHAPAGAMENTO");

//   // Aplicar Filtros de Ano e Mês
//   query.where({ ...yearFilter, ...monthFilter });

//   // Aplicar Pesquisa Aproximada ou Correspondência Exata para Cargo e Matrícula
//   if (cargo) {
//     query.orWhere((builder) => {
//       builder.where("cargo", cargo).orWhere("cargo", "ILIKE", `%${cargo}%`);
//     });
//   }

//   if (matricula) {
//     query.orWhere((builder) => {
//       builder.where("matricula", matricula).orWhere("matricula", "ILIKE", `%${matricula}%`);
//     });
//   }

//   // Aplicar Pesquisa Aproximada para Nome
//   if (nome) {
//     query.where("nome", "ILIKE", `%${nome}%`);
//   }

//   // Contar os Resultados
//   const countResult = await query.clone().count("id as count") as unknown as { count: number }[];
//   const count = Array.isArray(countResult) && countResult.length > 0 ? Number(countResult[0].count) : 0;

//   // Obter os Dados da Folha de Pagamento
//   const payroll = await query.orderBy("id", "desc");

//   return res.status(200).json({
//     count: count,
//     rows: payroll,
//   });
// }
