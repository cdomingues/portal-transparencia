import axios from "axios";
import { baseUrl } from "../../config";
import {
  barChartConfig,
  TRequestChartData,
} from "../../config/defaultChartConfig";
import { BudgetRevenueAmendmentsData } from "../../pages/api/execucao-orcamentaria/receitas-emendas";
import moneyFormatter from "../../utils/moneyFormatter";
import moment from "moment";

export const getAmendmentRevenues = async (year?: number) => {
  const years = [
    moment().subtract(5, "years").year(),
    moment().subtract(4, "years").year(),
    moment().subtract(3, "years").year(),
    moment().subtract(2, "years").year(),
    moment().subtract(1, "years").year(),
    moment().year(),
  ];

  try {
    const response = await axios.get(
      "http://192.168.1.118/api/3/action/datastore_search?resource_id=b9f57b82-5671-4b52-9585-08470e2ed9d9",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
        params: {
          q: year,
        },
      }
    );

    const rows = response.data?.result?.records || [];

    const mappingData: any = rows.map((row: any) => {
      return {
        ...row,
        valor_previsto_emenda: moneyFormatter(row?.valor_previsto_emenda),
        valor_realizado: moneyFormatter(row?.valor_realizado),
      };
    });

    return { revenues: mappingData, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(`Error on get ${url}, data: ${error.response?.data}`);
    }
    return { revenues: [], years };
  }
};

export const getChart = async () => {
  try {
    const response = await axios.get(
      "http://192.168.1.118/api/3/action/datastore_search?resource_id=b9f57b82-5671-4b52-9585-08470e2ed9d9",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
      }
    );

    const rows = response.data?.result?.records || [];

    const graphs = [];
    const years = [
      moment().subtract(5, "years").year(),
      moment().subtract(4, "years").year(),
      moment().subtract(3, "years").year(),
      moment().subtract(2, "years").year(),
      moment().subtract(1, "years").year(),
      moment().year(),
    ];

    for (const year of years) {
      const filteredByYear = rows?.filter((row: any) => row?.ano == year);

      const sum = filteredByYear.reduce((acumulador: any, item: any) => {
        return acumulador + item?.valor_previsto_emenda;
      }, 0);

      graphs.push({
        name: "Receitas Últimos 5 anos",
        ano: year,
        valor: sum,
      });
    }

    const config = {
      labels: graphs.map(({ ano }: TRequestChartData) => ano.toString()),
      datasets: [
        {
          ...barChartConfig,
          data: graphs.map(({ valor }: TRequestChartData) => valor),
        },
      ],
    };

    return { chart: config };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(`Error on get ${url}, data: ${error.response?.data}`);
    }
    return { chart: { datasets: [] } };
  }
};
