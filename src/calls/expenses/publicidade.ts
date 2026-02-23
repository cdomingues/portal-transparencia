import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import moneyFormatter from "../../utils/moneyFormatter";


export const getDiarias = async (years?: number) => {
  try {
    let nextPage: string | null = "https://dadosadm.mogidascruzes.sp.gov.br/api/despesa_publicidade";
    let allResults: any[] = [];

    while (nextPage) {
      // Corrige se vier com http:// ou hhttps://
      nextPage = nextPage
        .replace(/^http:\/\//i, "https://")
        .replace(/^hhttps:/i, "https:");

      const response: any = await axios.get(nextPage);
      const { results, next } = response.data;

      allResults = allResults.concat(results);
      nextPage = next;
    }

    const mappingRows = allResults.map((row) => ({
      ...row,
      data_movto: moment(row.data_movto).format("DD/MM/YYYY"),
      vlr_empenho: moneyFormatter(Number(row.vlr_empenho)),
      complemento: row.complemento || "não informado",
    }));

    return { contracts: mappingRows };
  } catch (error) {
    console.error("Error fetching contracts:", error);
    throw error;
  }
};
