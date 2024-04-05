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
  "_id": number;
 // id: number;
  "ano": number;
  "mês": number;
  "rgf": string;
  "nome": string;
  //"Tipo de Serviço": string;
  "total_r": number;
  "destino": string;
  "motivo_deslocamento": string;
  "periodo_permanencia": string;
  "inteira": number;
  "meia": number;
  
};

export const getdvertisings = async (year?: number) => {
  try {
    const response = await axios.get(
      "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=d936c56b-e152-4a98-80db-59ee0803f576",
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=a8fdc20d-7236-4302-8630-738ccf60ba4b",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
        params: {
          q: year,
          limit: 3000,
        },
      }
    );

    const rows: AdvertisingResponse[] = response.data?.result?.records || [];
    
    


    const mappingRows = rows?.map((row: AdvertisingResponse) => {

      const periodo_permanenciaArray = row["periodo_permanencia"].split(':');
    let horas = parseInt(periodo_permanenciaArray[0], 10);
    let minutos = parseInt(periodo_permanenciaArray[1], 10);
    let periodo_permanenciaString = `${horas} horas`;
  if (minutos > 0) {
    periodo_permanenciaString += ` e ${minutos} minutos`;
  }

      return {
        id: row?.["_id"],
        ano: row?.["ano"],
        mes:row["mês"],
        rgf: row?.["rgf"],
        nome: row?.["nome"],
        //total: row?.["total_r"],
        total: moneyFormatter(
          Number(row?.["total_r"])
        ),
        destino: row?.["destino"],
        motivo: row?.["motivo_deslocamento"],
        periodo_permanencia: periodo_permanenciaString,
        inteira: row?.["inteira"],
        meia: row?.["meia"],
       
      };
    });

    return { advertisings: mappingRows, years: ["2020","2021", "2022", "2023"] };
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
      "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=a8fdc20d-7236-4302-8630-738ccf60ba4b&limit=4000",
        //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=a8fdc20d-7236-4302-8630-738ccf60ba4b",
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
        return acumulador + item["total_r"];
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
      "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=a8fdc20d-7236-4302-8630-738ccf60ba4b&limit=4000",
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
          moment(row?.["mês"]).month() + 1 === index &&
          row?.["ano"] === year
      );

      const sum = filteredRows.reduce((acumulador, item) => {
        return acumulador + item["total_r"];
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
