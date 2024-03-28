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
  ano: number;
  _id: number;
  index: number;
  competencia: string;
  campanha: string;
  veiculo_divulgacao: string;
  tipo_servico: string;
  fornecedor: string | null;
  agencia_contratada: string;
  data_inicio: string;
  data_termino: string;
  valor_total_veiculacao: number;
  honorario_agencia_veiculacao: number;
  honorario_agencia_producao: number | null | string;
  data_pagamento: string;
  rank: number; 
};

export const getdvertisings = async (year?: number) => {
  try {
    const response = await axios.get(
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=fde32aaa-b073-4311-8d21-b86af17a973f",
      "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=42791083-d0db-4481-b8be-cfdf85e15c0a",
      
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
        params: {
          q: year,
          limit: 4000,
        },
      }
    );

    const rows: AdvertisingResponse[] = response.data?.result?.records || [];

    const mappingRows = rows?.map((row: AdvertisingResponse) => {
      return {
        _id: row?.["_id"],
        ano: row?.["ano"],
        competencia: row?.["competencia"].split("-")[1],
        campanha: row?.["campanha"],
        veiculo_divulgacao: row?.["veiculo_divulgacao"],
        tipo_servico: row?.["tipo_servico"],
        fornecedor: row?.["fornecedor"],
        agencia_contratada: row?.["agencia_contratada"],
        data_inicio:
          row.data_inicio &&
          moment(row?.["data_inicio"]).format("DD/MM/YYYY "),
        data_termino:
          row.data_termino &&
          moment(row?.data_termino).format("DD/MM/YYYY"),
        valor_total_veiculacao: moneyFormatter(
          Number(row?.["valor_total_veiculacao"])
        ),
        honorario_agencia_veiculacao: moneyFormatter(
          Number(row?.["honorario_agencia_veiculacao"])
        ),
        honorario_agencia_producao: moneyFormatter(
          Number(row?.["honorario_agencia_producao"])
        ),
        rank: row?.rank || "",
        data_pagamento: row?.data_pagamento.split(" ")[0]
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
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=a8fdc20d-7236-4302-8630-738ccf60ba4b&limit=4000",
        "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=42791083-d0db-4481-b8be-cfdf85e15c0a&limit=4000",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
      }
    );

    const rows: AdvertisingResponse[] = response.data?.result?.records || [];

    const years = [
   //   moment().subtract(5, "years").year(),
     // moment().subtract(4, "years").year(),
      moment().subtract(3, "years").year(),
      moment().subtract(2, "years").year(),
      moment().subtract(1, "years").year(),
      //moment().year(),
    ];

    const graphs = [];

    for (const year of years) {
      const filteredRows = rows.filter((row) => row["ano"] == year);


      const sum = filteredRows.reduce((acumulador, item) => {
        return acumulador + item.valor_total_veiculacao;
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
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=03146785-57db-4207-8924-85c492e8b9a8",
      "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=42791083-d0db-4481-b8be-cfdf85e15c0a&limit=4000",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
      }
    );

    const rows: AdvertisingResponse[] = response.data?.result?.records || [];

    const year = 2023;

    let months = moment().year(year).endOf("year").month() + 1;

    const graphs = [];

    let acamulatedAmount = 0;

    for (let index = 1; index <= months; index++) {
      const filteredRows = rows.filter(
        (row) =>
          moment(row?.data_inicio).month() + 1 === index &&
          row?.ano === year
      );

      const sum = filteredRows.reduce((acumulador, item) => {
        return acumulador + item.valor_total_veiculacao;
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
