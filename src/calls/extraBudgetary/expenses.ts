import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { ExtrabudgetaryExpensesData } from "../../pages/api/extraorcamentario/despesas";
import moneyFormatter from "../../utils/moneyFormatter";

export const getExpenses = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/extraorcamentario/despesas`
    );
    const { rows }: ExtrabudgetaryExpensesData = response.data;

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

export const getChartYears = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/extraorcamentario/despesas-anos`
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
    return { chartYear: config };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { chartYear: { data: [] } };
  }
};

export const getChart = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/extraorcamentario/despesas`
    );
    const chartConfig = {
      data: [response.data, response.data],
      xField: "data",
      yField: ["valor", "valorAcumulado"],
      geometryOptions: [
        {
          geometry: "column",
          pattern: {
            type: "line",
          },
        },
        {
          geometry: "line",
          lineStyle: {
            lineWidth: 2,
          },
        },
      ],
    };
    return { chart: chartConfig };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { chart: { data: [] } };
  }
};
