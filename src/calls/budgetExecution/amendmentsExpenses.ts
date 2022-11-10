import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { BudgetExpenseAmendmentsData } from "../../pages/api/execucao-orcamentaria/despesas-emendas";
import moneyFormatter from "../../utils/moneyFormatter";

export const getExpenses = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/execucao-orcamentaria/despesas-emendas`
    );
    const { rows }: BudgetExpenseAmendmentsData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        data: row.data ? moment(row.data).format("DD/MM/YYYY hh:mm") : "",
        empenho: moneyFormatter(Number(row.empenho)),
        pago: moneyFormatter(Number(row.pago)),
        liquidado: moneyFormatter(Number(row.liquidado)),
      };
    });

    return { expenses: mappingRows };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { expenses: [] };
  }
};

export const getChart = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/execucao-orcamentaria/despesas-emendas`
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
