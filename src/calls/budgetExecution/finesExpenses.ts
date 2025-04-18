import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import {
  barChartConfig,
  TRequestChartData,
} from "../../config/defaultChartConfig";
import { BudgetExpenseFinesData } from "../../pages/api/execucao-orcamentaria/despesas-multas-transito";
import moneyFormatter from "../../utils/moneyFormatter";

export const getFinesExpenses = async (year?: number) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/execucao-orcamentaria/despesas-multas-transito`,
      {
        params: {
          ano: year,
        },
      }
    );
    const { rows, years }: BudgetExpenseFinesData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        data: row.data ? moment(row.data).format("DD/MM/YYYY hh:mm") : "",
        empenho: moneyFormatter(Number(row.empenho)),
        pago: moneyFormatter(Number(row.pago)),
        liquidado: moneyFormatter(Number(row.liquidado)),
      };
    });

    return { fines: mappingRows, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(
        `Error on get ${url}, data: ${error.response?.data}`
      );
    }
    return { fines: [], years: [] };
  }
};

export const getChart = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/execucao-orcamentaria/despesas-multas-transito`
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
    return { chart: { data: [] } };
  }
};
