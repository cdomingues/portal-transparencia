import axios from "axios";
import moment from "moment";
import moneyFormatter from "../../utils/moneyFormatter";

export const getDiarias = async (year: number = 2025) => {
  const baseApiUrl = `https://dadosadm.mogidascruzes.sp.gov.br/api/despesas?exercicio_empenho=${year}`;
  let url = baseApiUrl;
  let allResults: any[] = [];

  try {
    while (url) {
      
      const response = await axios.get(url);
      const data = response.data;

      allResults = allResults.concat(data.results);
      url = data.next; // próxima página
    }

    const mappingRows = allResults.map((row: any) => {
      return {
        ...row,
        vlr_empenho: row.vlr_empenho ? moneyFormatter(Number(row.vlr_empenho)) : "R$ 0,00",
        dataAbertura: row.dataAbertura ? moment(row.dataAbertura).format("DD/MM/YYYY") : "Data não informada",
        publicacaoInicio: row.publicacaoInicio ? moment(row.publicacaoInicio).format("DD/MM/YYYY") : "Data não informada",
        publicacaoFim: row.publicacaoFim ? moment(row.publicacaoFim).format("DD/MM/YYYY") : "Data não informada",
        complemento: row.complemento || "não informado"
      };
    });

    return { contracts: mappingRows };
  } catch (error) {
    console.error("Erro ao buscar dados das despesas:", error);
    throw error;
  }
};

