import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { ExpensesBiddingData } from "../../pages/api/despesas/licitacoes";

export const getBiddings = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/despesas/licitacoes`);
    const { rows }: ExpensesBiddingData = response.data;

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

    return { biddings: mappingRows };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { biddings: [] };
  }
};
