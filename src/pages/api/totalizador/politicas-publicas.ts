import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";

export type PublicPolicyData = {
  valor: number;
  funcao: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PublicPolicyData[]>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const year = moment().year();

  const health = await database()
    .sum("valorliquidado as valor")
    .from("V1_DESPESA")
    .where("funcao", "10 - SAÚDE")
    .where("ano", year);

  const security = await database()
    .sum("valorliquidado as valor")
    .from("V1_DESPESA")
    .where("funcao", "06 - SEGURANÇA PÚBLICA")
    .where("ano", year);

  const education = await database()
    .sum("valorliquidado as valor")
    .from("V1_DESPESA")
    .where("funcao", "12 - EDUCAÇÃO")
    .where("ano", year);

  const socialAssistance = await database()
    .sum("valorliquidado as valor")
    .from("V1_DESPESA")
    .where("funcao", "08 - ASSISTÊNCIA SOCIAL")
    .where("ano", year);

  const policies = [
    {
      funcao: "Aplicação em Saúde",
      valor: Number(health[0].valor),
    },
    {
      funcao: "Aplicação em Segurança",
      valor: Number(security[0].valor),
    },
    {
      funcao: "Aplicação em Educação",
      valor: Number(education[0].valor),
    },
    {
      funcao: "Aplicação em Assistência Social",
      valor: Number(socialAssistance[0].valor),
    },
  ];

  return res.status(200).json(policies);
}
