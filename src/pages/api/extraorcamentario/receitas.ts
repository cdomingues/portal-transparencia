import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database";
import _ from "lodash";

export type ExtrabudgetaryRevenueData = {
  receita: string;
  janeiro: number;
  fevereiro: number;
  marco: number;
  abril: number;
  maio: number;
  junho: number;
  julho: number;
  agosto: number;
  setembro: number;
  outubro: number;
  novembro: number;
  dezembro: number;
  totalArrecadado: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExtrabudgetaryRevenueData[]>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const revenues = await database
    .select()
    .from("RECEITAS_EXTRA")
    .where("data", ">=", moment().startOf("year").toDate())
    .orderBy("data", "desc");

  const revenuesGrouped = groupRevenue(revenues);
  return res.status(200).json(revenuesGrouped);
}

const groupRevenue = (revenues: Array<any>) => {
  const mappingRevenues = revenues.map((revenue) => {
    return {
      receita: revenue.receita,
      mes: moment(revenue.data).month(),
      valor: revenue.valor,
    };
  });
  const revenueGrouped = _.groupBy(mappingRevenues, "receita");

  const revenueGroupedByMonths: any = [];
  Object.keys(revenueGrouped).forEach(function (key, index) {
    const currentGroup = revenueGrouped[key];
    let groupRevenue: any = {
      receita: key,
      janeiro: 0,
      fevereiro: 0,
      marco: 0,
      abril: 0,
      maio: 0,
      junho: 0,
      julho: 0,
      agosto: 0,
      setembro: 0,
      outubro: 0,
      novembro: 0,
      dezembro: 0,
      totalArrecadado: 0,
      ano: moment().year(),
    };

    for (let index = 0; index <= 11; index++) {
      const monthTranslator: any = {
        "0": "janeiro",
        "1": "fevereiro",
        "2": "marco",
        "3": "abril",
        "4": "maio",
        "5": "junho",
        "6": "julho",
        "7": "agosto",
        "8": "setembro",
        "9": "outubro",
        "10": "novembro",
        "11": "dezembro",
      };

      const currentMonth: any = monthTranslator[String(index)];

      const filteredByMonth = currentGroup.filter(
        (group) => group.mes === index
      );

      if (filteredByMonth.length === 0) {
        groupRevenue[currentMonth] = 0;
        continue;
      }

      let totalAmount = 0;
      for (const group of filteredByMonth) {
        const amount = totalAmount + Number(group.valor || 0);
        totalAmount = Number(amount.toFixed(2));
      }

      groupRevenue[currentMonth] = totalAmount;

      const total = Number(groupRevenue.totalArrecadado) + totalAmount;
      groupRevenue.totalArrecadado = Number(total.toFixed(2));
    }
    revenueGroupedByMonths.push(groupRevenue);
  });
  return revenueGroupedByMonths as ExtrabudgetaryRevenueData[];
};
