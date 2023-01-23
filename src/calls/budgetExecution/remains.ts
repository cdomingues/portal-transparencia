import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { BudgetExpenseRemainsData } from "../../pages/api/execucao-orcamentaria/despesas-restos";
import moneyFormatter from "../../utils/moneyFormatter";

export const getRemainders = async (year?: number) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/execucao-orcamentaria/despesas-restos`,
      {
        params: {
          ano: year,
        },
      }
    );
    const { rows, years }: BudgetExpenseRemainsData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        data: row.data ? moment(row.data).format("DD/MM/YYYY hh:mm") : "",
        empenho: moneyFormatter(Number(row.empenho)),
        pago: moneyFormatter(Number(row.pago)),
        liquidado: moneyFormatter(Number(row.liquidado)),
      };
    });
    return { remainders: mappingRows, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { remainders: [], years: [] };
  }
};

export const getChart = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/execucao-orcamentaria/despesas-resto`
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
