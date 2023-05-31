import axios from "axios";
import { baseUrl } from "../../config";
import {
  barChartConfig,
  lineChartConfig,
  TRequestChartData,
  TRequestChartYearData,
} from "../../config/defaultChartConfig";
import { ExtrabudgetaryRevenueData } from "../../pages/api/extraorcamentario/receitas";
import moneyFormatter from "../../utils/moneyFormatter";

export const getRevenues = async (year?: number) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/extraorcamentario/receitas`,
      {
        params: {
          ano: year,
        },
      }
    );

    const {
      revenues,
      years,
    }: { revenues: ExtrabudgetaryRevenueData[]; years: Number[] } =
      response.data;

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

    return { revenues: mappingData, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(
        `Error on get ${url}, data: ${error.response?.data}`
      );
    }
    return { revenues: [], years: [] };
  }
};

export const getChartYear = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/extraorcamentario/receitas-anos`
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

    return { chartYear: config };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(
        `Error on get ${url}, data: ${error.response?.data}`
      );
    }
    return { chartYear: { datasets: [] } };
  }
};

export const getChart = async (year?: number) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/extraorcamentario/receitas`,
      {
        params: {
          ano: year,
        },
      }
    );

    const config = {
      labels: response.data.map(({ data }: TRequestChartYearData) => data),
      datasets: [
        {
          ...lineChartConfig,
          label: "Valor Acumulado",
          data: response.data.map(
            ({ valorAcumulado }: TRequestChartYearData) => valorAcumulado
          ),
          yAxisID: "y1",
        },
        {
          ...barChartConfig,
          label: "Valor",
          data: response.data.map(({ valor }: TRequestChartYearData) => valor),
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
    return { chart: { datasets: [] } };
  }
};
