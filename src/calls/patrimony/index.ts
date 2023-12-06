import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { PatrimonyData } from "../../pages/api/patrimonio";
import moneyFormatter from "../../utils/moneyFormatter";

export const getPatrimonies = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/patrimonio`);
    const { rows }: PatrimonyData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        dataaquisicao: row.dataaquisicao
          ? moment(row.dataaquisicao).format("DD/MM/YYYY hh:mm")
          : "",
        valoraquisicao: moneyFormatter(Number(row.valoraquisicao)),
      };
    });

    return { patrimonies: mappingRows };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(
        `Error on get ${url}, data: ${error.response?.data}`
      );
    }

    return { patrimonies: [] };
  }
};
