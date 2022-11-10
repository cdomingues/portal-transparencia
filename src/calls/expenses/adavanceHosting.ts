import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { ExpensesHostingData } from "../../pages/api/despesas/adiantamento-hospedagem";
import moneyFormatter from "../../utils/moneyFormatter";

export const getAdvances = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/despesas/adiantamento-hospedagem`
    );
    const { rows }: ExpensesHostingData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        data: row.data ? moment(row.data).format("DD/MM/YYYY hh:mm") : "",
        empenho: moneyFormatter(Number(row.empenho)),
        pago: moneyFormatter(Number(row.pago)),
        liquidado: moneyFormatter(Number(row.liquidado)),
      };
    });

    return { advances: mappingRows };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { advances: [] };
  }
};

export const getChartYear = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/despesas/adiantamento-hospedagem-anos`
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
      `${baseUrl}/api/graficos/despesas/adiantamento-hospedagem`
    );
    const columnLine = {
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

    return { chart: columnLine };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }

    return { chart: { data: [] } };
  }
};
