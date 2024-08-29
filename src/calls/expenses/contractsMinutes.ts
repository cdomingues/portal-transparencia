import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import moneyFormatter from "../../utils/moneyFormatter";

export const getContracts = async (years?: number) => {
  try {
    let nextPage = "https://dadosadm.mogidascruzes.sp.gov.br/api/contratos_atas";
    let allResults: any[] = [];
    let allYears: number[] = [];

    
    while (nextPage) {
      const response = await axios.get(nextPage, {
        params: {
          ano: years,
        },
      });

      const { results, next, years: responseYears } = response.data;

      allResults = allResults.concat(results);
      if (responseYears) {
        allYears = allYears.concat(responseYears.map(({ ano }: { ano: number }) => ano));
      }
      nextPage = next;
    }

    const mappingRows = allResults.map((row) => {
      return {
        ...row,
        valor: moneyFormatter(Number(row.valor)),
        id_contrato : row.id_contrato,
        valorAditado: moneyFormatter(Number(row.valor_aditado)),
        data_inicio:  moment(row.data_inicio).format("DD/MM/YYYY"),
        data_termino:  moment(new Date(row.data_termino)).format("DD/MM/YYYY"),
        
      };
    });

    return { contracts: mappingRows, years: [...new Set(allYears)] }; // Remove duplicatas
  } catch (error) {
    console.error("Error fetching contracts:", error);
    throw error;
  }
};


export const getAtas = async (years?: number) => {
  try {
    let nextPage = "https://dadosadm.mogidascruzes.sp.gov.br/api/contratos_atas?tipo=ATA";
    let allResults: any[] = [];
    let allYears: number[] = [];

    while (nextPage) {
      const response = await axios.get(nextPage, {
        params: {
          ano: years,
        },
      });

      const { results, next, years: responseYears } = response.data;

      allResults = allResults.concat(results);
      if (responseYears) {
        allYears = allYears.concat(responseYears.map(({ ano }: { ano: number }) => ano));
      }
      nextPage = next;
    }

    const mappingRows = allResults.map((row) => {
      return {
        ...row,
        valor: moneyFormatter(Number(row.valor)),
        id_contrato : row.id_contrato,
        valorAditado: moneyFormatter(Number(row.valor_aditado)),
        dataInicio: row.data_inicio  ? moment(row.data_inicio).format("DD/MM/YYYY HH:mm"): "",
        dataTermino: row.data_termino
          ? moment(row.data_termino).format("DD/MM/YYYY HH:mm")
          : "",
      };
    });

    return { contracts: mappingRows, years: [...new Set(allYears)] }; // Remove duplicatas
  } catch (error) {
    console.error("Error fetching contracts:", error);
    throw error;
  }
};