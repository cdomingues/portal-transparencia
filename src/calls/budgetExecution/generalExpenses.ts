import axios from "axios";
import { baseUrl } from "../../config";
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
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { expenses: [], years: [] };
  }
};

export const getChart = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/execucao-orcamentaria/despesas`
    );
    const config = {
      data: response.data,
      xField: "ano",
      yField: "valor",
      seriesField: "",
      legend: false,
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      maxColumnWidth: 35,
    };
    return { chart: config };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { chart: { data: [] } };
  }
};
