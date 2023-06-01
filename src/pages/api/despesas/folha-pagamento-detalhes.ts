// import type { NextApiRequest, NextApiResponse } from "next";
// import database from "../../../database";

// export type Row = {
//   Matricula: string;
//   Ano: number;
//   Mes: string;
//   Descricao: string;
//   Valor: string;
//   salario: string;
//   base: string;
// };

// export type PayrollData = {
//   rows: Row[];
//   count: number;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<PayrollData>
// ) {
//   if (req.method !== "POST") {
//     return res.status(404);
//   }

//   const { Ano, Mes, Matricula } = req.body;

//   const yearFilter = Ano ? { Ano } : {};
//   const monthFilter = Mes ? { Mes } : {};
//   const enrollmentFilter = Matricula ? { Matricula } : {};

//   const count = await database()
//     .count("Matricula as count")
//     .from("BASE_FOLHA_VERBAS")
//     .where({
//       ...yearFilter,
//       ...monthFilter,
//       ...enrollmentFilter,
//     });

//   const payroll = await database
//     .select()
//     .from("BASE_FOLHA_VERBAS")
//     .where({
//       ...yearFilter,
//       ...monthFilter,
//       ...enrollmentFilter,
//     })
//     .orderBy("Matricula", "desc");

//   return res.status(200).json({
//     count: Number(count[0].count),
//     rows: payroll,
//   });
// }

//O codigo abaixo esta funcionando, mas nao esta filtrando por nome, cargo e matricula
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type Row = {
  Matricula: string;
  Ano: number;
  Mes: string;
  Descricao: string;
  Valor: string;
  salario: string;
  base: string;
};

export type PayrollData = {
  rows: Row[];
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PayrollData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: 'Method not allowed. Only POST is accepted.' });
  }

  // Valores fixos para Matricula, Ano e Mes
  const Matricula = "07434/4";
  const Ano = 2023;
  const Mes = 4;

  const yearFilter = { Ano };
  const monthFilter = { Mes };
  const enrollmentFilter = { Matricula };

  try {
    const count = await database()
      .count("Matricula as count")
      .from("BASE_FOLHA_VERBAS")
      .where({
        ...yearFilter,
        ...monthFilter,
        ...enrollmentFilter,
      });

    const payroll = await database
      .select()
      .from("BASE_FOLHA_VERBAS")
      .where({
        ...yearFilter,
        ...monthFilter,
        ...enrollmentFilter,
      })
      .orderBy("Matricula", "desc");

    return res.status(200).json({
      count: Number(count[0].count),
      rows: payroll,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An unexpected error occurred.' });
  }
}

// import type { NextApiRequest, NextApiResponse } from "next";
// import database from "../../../database";

// export type Row = {
//   Matricula: string;
//   Ano: number;
//   Mes: string;
//   Descricao: string;
//   Valor: string;
//   salario: string;
//   base: string;
// };

// export type PayrollData = {
//   rows: Row[];
//   count: number;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<PayrollData>
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: 'Method not allowed. Only POST is accepted.' });
//   }

//   // Use os valores do corpo da solicitação em vez de valores fixos
//   const { Ano, Mes, Matricula } = req.body;

//   const yearFilter = { Ano };
//   const monthFilter = { Mes };
//   const enrollmentFilter = { Matricula };

//   try {
//     const count = await database()
//       .count("Matricula as count")
//       .from("BASE_FOLHA_VERBAS")
//       .where({
//         ...yearFilter,
//         ...monthFilter,
//         ...enrollmentFilter,
//       });

//     const payroll = await database
//       .select()
//       .from("BASE_FOLHA_VERBAS")
//       .where({
//         ...yearFilter,
//         ...monthFilter,
//         ...enrollmentFilter,
//       })
//       .orderBy("Matricula", "desc");

//     return res.status(200).json({
//       count: Number(count[0].count),
//       rows: payroll,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'An unexpected error occurred.' });
//   }
// }
