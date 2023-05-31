import axios from "axios";
import { baseUrl } from "../../config";
import { barChartConfig } from "../../config/defaultChartConfig";
import { BudgetGeneralExpenseData } from "../../pages/api/execucao-orcamentaria/despesas-gerais";
import moneyFormatter from "../../utils/moneyFormatter";

export const getGeneralExpenses = async (year?: number) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/execucao-orcamentaria/despesas-gerais`,
      {
        params: {
          ano: year,
        },
      }
    );
    const { rows, years }: BudgetGeneralExpenseData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        valorinicial: moneyFormatter(Number(row.valorinicial)),
        valoratualizado: moneyFormatter(Number(row.valoratualizado)),
      };
    });

    return { expenses: mappingRows, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(
        `Error on get ${url}, data: ${error.response?.data}`
      );
    }
    return { expenses: [], years: [] };
  }
};

export type TChartData = {
  name: string;
  ano: number;
  valor: number;
};

export const getChart = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/execucao-orcamentaria/despesas`
    );

    const config = {
      labels: response.data.map(({ ano }: TChartData) => ano),
      datasets: [
        {
          ...barChartConfig,
          data: response.data.map(({ valor }: TChartData) => valor),
          yAxisID: "y",
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
    return { chart: { data: [] } };
  }
};
