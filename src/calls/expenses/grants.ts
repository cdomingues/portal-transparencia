import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import {
  barChartConfig,
  lineChartConfig,
  TRequestChartData,
  TRequestChartYearData,
} from "../../config/defaultChartConfig";
import { ExpenseGrantsData } from "../../pages/api/despesas/subvencoes";
import moneyFormatter from "../../utils/moneyFormatter";

export const getGrants = async (year?: number) => {
  try {
    const response = await axios.get(`${baseUrl}/api/despesas/subvencoes`, {
      params: {
        ano: year,
      },
    });

    const { rows, years }: ExpenseGrantsData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        data: row.data ? moment(row.data).format("DD/MM/YYYY hh:mm") : "",
        empenho: moneyFormatter(Number(row.empenho)),
        pago: moneyFormatter(Number(row.pago)),
        liquidado: moneyFormatter(Number(row.liquidado)),
      };
    });

    return { grants: mappingRows, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(
        `Error on get ${url}, data: ${error.response?.data}`
      );
    }

    return { grants: [], years: [] };
  }
};

export const getChartYear = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/despesas/subvencoes-anos`
    );

    const config = {
      labels: response.data.map(({ ano }: TRequestChartData) => ano),
      datasets: [
        {
          ...barChartConfig,
          data: response.data.map(({ valor }: TRequestChartData) => valor),
          yAxisID: "y",
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
      `${baseUrl}/api/graficos/despesas/subvencoes`,
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
