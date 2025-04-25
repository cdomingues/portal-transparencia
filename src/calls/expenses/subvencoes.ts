import axios from "axios";
import moment from "moment";

export const getDespesasSubvencoes = async (year?: number) => {
  try {
    let allResults: any[] = [];
    let nextPage = year 
      ? `https://dadosadm.mogidascruzes.sp.gov.br/api/despesas?exercicio_empenho=${year}`
      : `https://dadosadm.mogidascruzes.sp.gov.br/api/despesas`;

    // Fetch all pages for the specific year
    while (nextPage) {
      const response = await axios.get(nextPage);
      const { results, next } = response.data;
      
      // Filter by elemento during fetch
      const filtered = results.filter((row: any) => 
        row.elemento === "3.3.50.43.00 - SUBVENÇÕES SOCIAIS"
      );
      
      allResults = [...allResults, ...filtered];
      nextPage = next;
    }

    // Format the results
    return { 
      contracts: allResults.map((row: any) => ({
        ...row,
        vlr_empenho: "R$" + row.vlr_empenho,
        dataAbertura: row.dataAbertura ? moment(row.dataAbertura).format("DD/MM/YYYY") : "",
        publicacaoInicio: row.publicacaoInicio ? moment(row.publicacaoInicio).format("DD/MM/YYYY") : "",
        publicacaoFim: row.publicacaoFim ? moment(row.publicacaoFim).format("DD/MM/YYYY") : "",
        complemento: row.complemento || "não informado"
      }))
    };
  } catch (error) {
    console.error("Error fetching contracts:", error);
    throw error;
  }
};