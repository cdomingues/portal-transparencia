import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../database";

type Data = {
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

  const graphs = [];
  const years = [
    moment().subtract(5, "years").year(),
    moment().subtract(4, "years").year(),
    moment().subtract(3, "years").year(),
    moment().subtract(2, "years").year(),
    moment().subtract(1, "years").year(),
    moment().year(),
  ];

  const program = [
    "0040 - SUPORTE ADMINISTRATIVO",
    "0027 - MELHORIA DA MOBILIDADE URBANA E SEGURANÇA VIÁRIA",
  ];

  const unity = [
    "02.10.01 - GABINETE E DEMAIS UNIDADES EXECUTORAS",
    "02.10.02 - FUNDO MUNICIPAL DE MOBILIDADE URBANA-FMMU",
  ];

  for (const year of years) {
    const revenue = await database()
      .sum("valoratualizado as valor")
      .from("DESPESAS_ORC")
      .whereIn("unidade", unity)
      .whereIn("programa", program)
      .where("fonterecurso", "03.410.0000 - TRÂNSITO - SINALIZAÇÃO")
      .where("subfuncao", "452 - SERVIÇOS URBANOS")
      .where("ano", year);

    graphs.push({
      name: "Despesas Multas Trânsito",
      ano: year,
      valor: Number(revenue[0].valor || 0),
    });
  }

  return res.status(200).json(graphs);
}
