import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import moneyFormatter from "../../utils/moneyFormatter";
import { objetos_licitacao } from "../../utils/objetos_licitacao"; 

export const getDiarias = async (years?: number) => {
  try {
    const url = "https://dadosadm.mogidascruzes.sp.gov.br/api/despesas?exercicio_empenho=2025";
    const response = await axios.get(url);

    const { results } = response.data;

    const mappingRows = results.map((row: any) => {
      return {
        ...row,
        vlr_empenho: row.vlr_empenho ? "R$" + row.vlr_empenho : "R$ 0,00",
        dataAbertura: row.dataAbertura ? moment(row.dataAbertura).format("DD/MM/YYYY") : "Data não informada",
        publicacaoInicio: row.publicacaoInicio ? moment(row.publicacaoInicio).format("DD/MM/YYYY") : "Data não informada",
        publicacaoFim: row.publicacaoFim ? moment(row.publicacaoFim).format("DD/MM/YYYY") : "Data não informada",
        complemento: row.complemento || "não informado"
      };
    });

    return { contracts: mappingRows };
  } catch (error) {
    console.error("Error fetching contracts:", error);
    throw error;
  }
};
