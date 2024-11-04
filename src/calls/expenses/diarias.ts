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
 
  "index": number;
  "ano": number;
  "mes": number;
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
      "https://dadosadm.mogidascruzes.sp.gov.br/lista_diaria"
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=a8fdc20d-7236-4302-8630-738ccf60ba4b",
    
    );

    const rows: AdvertisingResponse[] = response.data || [];
    
    


    const mappingRows = rows?.map((row: AdvertisingResponse) => {

      const periodo_permanenciaArray = row["periodo_permanencia"].split(':');
    let horas = parseInt(periodo_permanenciaArray[0], 10);
    let minutos = parseInt(periodo_permanenciaArray[1], 10);
    let periodo_permanenciaString = `${horas} horas`;
  if (minutos > 0) {
    periodo_permanenciaString += ` e ${minutos} minutos`;
  }

      return {
        index: row?.["index"],
        ano: row?.["ano"],
        mes:String(row["mes"]),
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

    return { advertisings: mappingRows, years: ["2020","2021", "2022", "2023","2024"] };
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
       "https://dadosadm.mogidascruzes.sp.gov.br/api/diarias"
       
    );

    const rows: AdvertisingResponse[] = response.data || [];

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
      "https://dadosadm.mogidascruzes.sp.gov.br/api/diarias",
      
    );

    const rows: AdvertisingResponse[] = response.data || [];

    const year = 2024;

    let months = moment().year(year).endOf("year").month() + 1;

    const graphs = [];

    let acamulatedAmount = 0;

    for (let index = 1; index <= months; index++) {
      const filteredRows = rows.filter(
        (row) =>
          moment(row?.["mes"]).month() + 1 === index &&
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
