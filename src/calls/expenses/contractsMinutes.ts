import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { ExpensesContractData } from "../../pages/api/despesas/contratos-atas";
import moneyFormatter from "../../utils/moneyFormatter";

export const getContracts = async (year?: number) => {
  try {
    const response = await axios.get(`${baseUrl}/api/despesas/contratos-atas`, {
      params: {
        ano: year,
      },
    });

    const { rows, years }: ExpensesContractData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        valor: moneyFormatter(Number(row.valor)),
        valorAditado: moneyFormatter(Number(row.valorAditado)),
        datainicio: row.datainicio
          ? moment(row.datainicio).format("DD/MM/YYYY hh:mm")
          : "",
        datatermino: row.datatermino
          ? moment(row.datatermino).format("DD/MM/YYYY hh:mm")
          : "",
      };
    });

    return { contracts: mappingRows, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(
        `Error on get ${url}, data: ${error.response?.data}`
      );
    }
    return { contracts: [], years: [] };
  }
};
