import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { ExpensesBiddingData } from "../../pages/api/despesas/licitacoes";

export const getBiddings = async (year?: number) => {
  try {
    const response = await axios.get(`${baseUrl}/api/despesas/licitacoes`, {
      params: {
        ano: year,
      },
    });
    const { rows, years }: ExpensesBiddingData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        datapublicacao: row.datapublicacao
          ? moment(row.datapublicacao).format("DD/MM/YYYY hh:mm")
          : "",
        dataabertura: row.dataabertura
          ? moment(row.dataabertura).format("DD/MM/YYYY hh:mm")
          : "",
      };
    });

    return { biddings: mappingRows, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(
        `Error on get ${url}, data: ${error.response?.data}`
      );
    }
    return { biddings: [], years: [] };
  }
};
