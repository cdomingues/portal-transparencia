import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { CovidRevenuesData } from "../../pages/api/covid/receitas";
import moneyFormatter from "../../utils/moneyFormatter";

export const getRevenues = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/covid/receitas`);

    const revenues: CovidRevenuesData[] = response.data;
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

    return { revenues: mappingData };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { revenues: [] };
  }
};

export const getGraph = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/graficos/covid/receitas`);
    const graph = {
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
    return { chart: graph };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { chart: { data: [] } };
  }
};

export const getChartYears = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/covid/receitas-anos`
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
    return { chart: { data: [] } };
  }
};
