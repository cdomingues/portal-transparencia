import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { CovidExpensesData } from "../../pages/api/covid/despesas";
import moneyFormatter from "../../utils/moneyFormatter";

export const getExpenses = async (year?: number) => {
  try {
    const response = await axios.get(`${baseUrl}/api/covid/despesas`, {
      params: {
        ano: year,
      },
    });
    const { rows, years }: CovidExpensesData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        data: row.data ? moment(row.data).format("DD/MM/YYYY hh:mm") : "",
        empenho: moneyFormatter(Number(row.empenho)),
        pago: moneyFormatter(Number(row.pago)),
        liquidado: moneyFormatter(Number(row.liquidado)),
      };
    });

    return { rows: mappingRows, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { rows: [], years: [] };
  }
};

export const getGraph = async (year?: number) => {
  try {
    const response = await axios.get(`${baseUrl}/api/graficos/covid/despesas`, {
      params: {
        ano: year,
      },
    });

    const graph = {
      labels: response.data.map(({ data }: any) => data),
      datasets: [
        {
          type: 'line',
          label: 'Valor Acumulado',
          data: response.data.map(({ valorAcumulado }: any) => valorAcumulado),
          backgroundColor: "#fac534",
          borderColor: "#fac534A0",
          yAxisID: "y1",
        },
        {
          type: 'bar',
          label: 'Valor',
          data: response.data.map(({ valor }: any) => valor),
          backgroundColor: "#1E90FFA0",
          borderColor: "#1E90FF",
          borderWidth: 2,
          yAxisID: "y",
        }
      ]
    }

    return { chart: graph };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { chart: { datasets: [] } };
  }
};

export const getChartYears = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/covid/despesas-anos`
    );

    const config = {
      labels: response.data.map(({ ano }: any) => ano?.toString()),
      datasets: [
        {
          data: response.data.map(({ valor }: any) => valor),
          backgroundColor: "#1E90FFA0",
          borderColor: "#1E90FF",
          borderWidth: 2,
        },
      ],
    };

    return { chartYear: config };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { chartYear: { datasets: [] } };
  }
};

export default {
  getChartYears,
  getGraph,
  getExpenses,
};
