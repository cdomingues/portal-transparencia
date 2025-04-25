import axios from "axios";
import moment from "moment";
import moneyFormatter from "../../utils/moneyFormatter";

export const getDiarias = async (year: number = 2025) => {
  let currentPage = 1;
  let allResults: any[] = [];
  let hasNext = true;

  const baseURL =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
      : ""; // usa vazio no cliente para manter `/api/...`

  try {
    while (hasNext) {
      const url = `${baseURL}/api/despesas?year=${year}&page=${currentPage}`;
      const response = await axios.get(url);
      const data = response.data;

      allResults = allResults.concat(data.results);
      hasNext = data.next !== null;
      currentPage++;
    }

    return { contracts: allResults };
  } catch (error) {
    console.error("Erro ao buscar despesas:", error);
    throw error;
  }
};



