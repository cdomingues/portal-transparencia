import axios from "axios";
import { baseUrl } from "../../config";
import {
  barChartConfig,
  TRequestChartData,
} from "../../config/defaultChartConfig";
import { BudgetRevenueFinesData } from "../../pages/api/execucao-orcamentaria/receitas-multas-transito";
import moneyFormatter from "../../utils/moneyFormatter";

export const getFinesRevenues = async (year?: number) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/execucao-orcamentaria/receitas-multas-transito`,
      {
        params: {
          ano: year,
        },
      }
    );

    const {
      revenues,
      years,
    }: { revenues: BudgetRevenueFinesData[]; years: Number[] } = response.data;
    const mappingData: any = revenues.map((revenue) => {
      return {
        ...revenue,
        janeiro: moneyFormatter(revenue.janeiro),
        fevereiro: moneyFormatter(revenue.fevereiro),
        marco: moneyFormatter(revenue.marco),
        abril: moneyFormatter(revenue.abril),
        maio: moneyFormatter(revenue.maio),
        junho: moneyFormatter(revenue.junho),
        julho: moneyFormatter(revenue.julho),
        agosto: moneyFormatter(revenue.agosto),
        setembro: moneyFormatter(revenue.setembro),
        outubro: moneyFormatter(revenue.outubro),
        novembro: moneyFormatter(revenue.novembro),
        dezembro: moneyFormatter(revenue.dezembro),
        totalArrecadado: moneyFormatter(revenue.totalArrecadado),
      };
    });

    return { revenues: mappingData, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(
        `Error on get ${url}, data: ${error.response?.data}`
      );
    }

    return { revenues: [], years: [] };
  }
};

export const getChart = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/execucao-orcamentaria/receitas-multas-transito`
    );

    const config = {
      labels: response.data.map(({ ano }: TRequestChartData) => ano.toString()),
      datasets: [
        {
          ...barChartConfig,
          data: response.data.map(({ valor }: TRequestChartData) => valor),
        },
      ],
    };

    return { chart: config };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(
        `Error on get ${url}, data: ${error.response?.data}`
      );
    }
    return { chart: { datasets: [] } };
  }
};
