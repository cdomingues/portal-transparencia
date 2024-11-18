import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import moneyFormatter from "../../utils/moneyFormatter";
import { objetos_licitacao } from "../../utils/objetos_licitacao"; 

export const getDiarias = async (years?: number) => {
  try {
    let nextPage = "https://dadosadm.mogidascruzes.sp.gov.br/api/despesas";
    let allResults: any[] = [];
    let allYears: number[] = [];

    while (nextPage) {
      const response = await axios.get(nextPage);

      const { results, next } = response.data;

      allResults = allResults.concat(results);

      nextPage = next;
    }

    // Filtra os resultados onde o campo 'vinculo' começa com '08'
    const filteredResults = allResults.filter((row) => row.vinculo && row.vinculo.startsWith("08"));

    const mappingRows = filteredResults.map((row) => {
      return {
        ...row,
        vlr_empenho: "R$" + row.vlr_empenho,
        dataAbertura: moment(row.dataAbertura).format("DD/MM/YYYY"),
        publicacaoInicio: moment(row.publicacaoInicio).format("DD/MM/YYYY"),
        publicacaoFim: moment(row.publicacaoFim).format("DD/MM/YYYY"),
        complemento: row.complemento || "não informado"
      };
    });

    return { contracts: mappingRows }; // Retorna os resultados filtrados e mapeados
  } catch (error) {
    console.error("Error fetching contracts:", error);
    throw error;
  }
};
