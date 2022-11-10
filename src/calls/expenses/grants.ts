import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { ExpenseGrantsData } from "../../pages/api/despesas/subvencoes";
import moneyFormatter from "../../utils/moneyFormatter";

export const getGrants = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/despesas/subvencoes`);
    const { rows }: ExpenseGrantsData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        data: row.data ? moment(row.data).format("DD/MM/YYYY hh:mm") : "",
        empenho: moneyFormatter(Number(row.empenho)),
        pago: moneyFormatter(Number(row.pago)),
        liquidado: moneyFormatter(Number(row.liquidado)),
      };
    });

    return { grants: mappingRows };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }

    return { grants: [] };
  }
};

export const getChartYear = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/despesas/subvencoes-anos`
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
      `${baseUrl}/api/graficos/despesas/subvencoes`
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
