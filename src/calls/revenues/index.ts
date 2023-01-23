import axios from "axios";
import { baseUrl } from "../../config";
import { RevenuesData } from "../../pages/api/receitas";
import moneyFormatter from "../../utils/moneyFormatter";

export const getRevenues = async (year?: number) => {
  try {
    const response = await axios.get(`${baseUrl}/api/receitas`, {
      params: {
        ano: year,
      },
    });

    const revenues: RevenuesData[] = response.data.revenues;
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

    return { revenues: mappingData, years: response.data.years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { revenues: [], years: [] };
  }
};

export const getChartYears = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/graficos/receitas-anos`);
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
    return {
      chartYear: {
        data: [],
      },
    };
  }
};

export const getChart = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/graficos/receitas`);
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
    return {
      chart: {
        data: [],
      },
    };
  }
};
