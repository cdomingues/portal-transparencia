import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import {
  barChartConfig,
  lineChartConfig,
  TRequestChartData,
  TRequestChartYearData,
} from "../../config/defaultChartConfig";
import moneyFormatter from "../../utils/moneyFormatter";

type AdvertisingResponse = {
  _id: number;
  id: number;
  ano: number;
  Competência: Date;
  Campanha: string;
  "Veículo de divulgação": string;
  "Tipo de Serviço": string;
  Fornecedor: string;
  "Agência Contratada": string;
  "Data de Início": Date;
  "Data de Término": Date;
  "Valor total da Veiculação": number;
  "Honorário Agência Veiculação": number;
  "Honorário Agência Produção": number;
  rank: number;
};

export const getdvertisings = async (year?: number) => {
  try {
    const response = await axios.get(
      //"http://192.168.1.118/api/3/action/datastore_search?resource_id=03146785-57db-4207-8924-85c492e8b9a8",
      "http://192.168.1.118/api/3/action/datastore_search?resource_id=a8fdc20d-7236-4302-8630-738ccf60ba4b",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
        params: {
          q: year,
          limit: 1000,
        },
      }
    );

    const rows: AdvertisingResponse[] = response.data?.result?.records || [];

    const mappingRows = rows?.map((row: AdvertisingResponse) => {
      return {
        id: row?.["id"],
        ano: row?.["ano"],
        competencia:
          row["Competência"] &&
          moment(row?.["Competência"]).format("DD/MM/YYYY hh:mm"),
        campanha: row?.["Campanha"],
        veiculo_divulgacao: row?.["Veículo de divulgação"],
        tipo_servico: row?.["Tipo de Serviço"],
        fornecedor: row?.["Fornecedor"],
        agencia_contratada: row?.["Agência Contratada"],
        data_inicio:
          row["Data de Início"] &&
          moment(row?.["Data de Início"]).format("DD/MM/YYYY hh:mm"),
        data_termino:
          row["Data de Término"] &&
          moment(row?.["Data de Término"]).format("DD/MM/YYYY hh:mm"),
        valor_total_veiculacao: moneyFormatter(
          Number(row?.["Valor total da Veiculação"])
        ),
        honorario_agencia_veiculacao: moneyFormatter(
          Number(row?.["Honorário Agência Veiculação"])
        ),
        honorario_agencia_producao: moneyFormatter(
          Number(row?.["Honorário Agência Produção"])
        ),
        rank: row?.["rank"] || "",
      };
    });

    return { advertisings: mappingRows, years: ["2021", "2022", "2023"] };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(`Error on get ${url}, data: ${error.response?.data}`);
    }
    return { advertisings: [], years: [] };
  }
};

export const getChartYear = async () => {
  try {
    const response = await axios.get(
      //"http://192.168.1.118/api/3/action/datastore_search?resource_id=03146785-57db-4207-8924-85c492e8b9a8",
      "http://192.168.1.118/api/3/action/datastore_search?resource_id=a8fdc20d-7236-4302-8630-738ccf60ba4b",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
      }
    );

    const rows: AdvertisingResponse[] = response.data?.result?.records || [];

    const years = [
      moment().subtract(5, "years").year(),
      moment().subtract(4, "years").year(),
      moment().subtract(3, "years").year(),
      moment().subtract(2, "years").year(),
      moment().subtract(1, "years").year(),
      moment().year(),
    ];

    const graphs = [];

    for (const year of years) {
      const filteredRows = rows.filter((row) => row["ano"] == year);

      const sum = filteredRows.reduce((acumulador, item) => {
        return acumulador + item["Valor total da Veiculação"];
      }, 0);

      graphs.push({
        name: "Publicidade e Propaganda",
        ano: year,
        valor: Number(sum),
      });
    }

    const config = {
      labels: graphs.map(({ ano }: TRequestChartData) => ano),
      datasets: [
        {
          ...barChartConfig,
          data: graphs.map(({ valor }: TRequestChartData) => valor),
          yAxisID: "y",
        },
      ],
    };

    return { chartYear: config };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(`Error on get ${url}, data: ${error.response?.data}`);
    }
    return { chartYear: { datasets: [] } };
  }
};

export const getChart = async (year?: number) => {
  try {
    const response = await axios.get(
      //"http://192.168.1.118/api/3/action/datastore_search?resource_id=03146785-57db-4207-8924-85c492e8b9a8",
      "http://192.168.1.118/api/3/action/datastore_search?resource_id=a8fdc20d-7236-4302-8630-738ccf60ba4b",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
      }
    );

    const rows: AdvertisingResponse[] = response.data?.result?.records || [];

    const year = 2022;

    let months = moment().year(year).endOf("year").month() + 1;

    const graphs = [];

    let acamulatedAmount = 0;

    for (let index = 1; index <= months; index++) {
      const filteredRows = rows.filter(
        (row) =>
          moment(row?.["Data de Início"]).month() + 1 === index &&
          row?.["ano"] === year
      );

      const sum = filteredRows.reduce((acumulador, item) => {
        return acumulador + item["Valor total da Veiculação"];
      }, 0);

      acamulatedAmount += Number(sum) || 0;

      graphs.push({
        name: `${index}/${year}`,
        ano: year,
        mes: index,
        valor: Number(sum),
        data: `${index}/${year}`,
        valorAcumulado: acamulatedAmount,
      });
    }

    const config = {
      labels: graphs.map(({ data }: TRequestChartYearData) => data),
      datasets: [
        {
          ...lineChartConfig,
          label: "Valor Acumulado",
          data: graphs.map(
            ({ valorAcumulado }: TRequestChartYearData) => valorAcumulado
          ),
          yAxisID: "y1",
        },
        {
          ...barChartConfig,
          label: "Valor",
          data: graphs.map(({ valor }: TRequestChartYearData) => valor),
          yAxisID: "y",
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
