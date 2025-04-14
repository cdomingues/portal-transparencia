import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import moneyFormatter from "../../utils/moneyFormatter";
import { objetos_licitacao } from "../../utils/objetos_licitacao"; 

export const getDiarias = async (years?: number) => {
  try {
    let nextPage = "https://dadosadm.mogidascruzes.sp.gov.br/api/despesas";
    const url = "https://dadosadm.mogidascruzes.sp.gov.br/api/despesas?exercicio_empenho=2025";
    const response = await axios.get(url);

    const { results } = response.data;

     

    // Filtra os resultados onde o campo 'vinculo' começa com '08'
    const filteredResults = results.filter((row: { vinculo: string; }) => row.vinculo && row.vinculo.startsWith("08"));

    const mappingRows = filteredResults.map((row: any) => {
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
