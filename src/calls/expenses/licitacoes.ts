import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import moneyFormatter from "../../utils/moneyFormatter";
import { objetos_licitacao } from "../../utils/objetos_licitacao"; 

export const getLicitacoes = async (years?: number) => {
  try {
    let nextPage = "https://dadosadm.mogidascruzes.sp.gov.br/api/licitacoes/";
    let allResults: any[] = [];
    let allYears: number[] = [];

    while (nextPage) {
      const response = await axios.get(nextPage, {
        params: {
          ano: years,
        },
      });

      const { results, next, years: responseYears } = response.data;

      allResults = allResults.concat(results);
      if (responseYears) {
        allYears = allYears.concat(responseYears.map(({ ano }: { ano: number }) => ano));
      }
      nextPage = next;
    }

    const mappingRows = allResults.map((row) => {
      const getSituacaoText = (situacao: string | undefined) => {
        switch (situacao) {
          case 'P':
            return 'Publicada';
          case 'S':
            return 'Suspensa';
          default:
            return 'Desconhecida'; // Valor padrão para quando situacao não é reconhecida
        }
      };
      
      const getTipoText = (id_tipolicitacao: any) => {
        switch (id_tipolicitacao) {
          case 2:
            return 'Pregão Presencial';
          case 3:
            return 'Tomada de Preços';
          case 4:
            return 'Concorrência';
          case 5:
            return 'Leilão';
          case 7:
            return 'Chamada Pública';
          case 8:
            return 'Chamamento Público';
          case 9:
            return 'Pré-Qualificação';
          case 10:
            return 'Convite';
          case 11:
            return 'Dispensa/Inexigibilidade';
          case 12:
            return 'Chamamento Público - Saúde';
          case 13:
            return 'Chamamento Público - Esportes';
          case 14:
            return 'Chamamento Público - Verde e Meio Ambiente';
          case 15:
            return 'Chamada Pública - Saúde';
          case 16:
            return 'Chamamento Público - Educação';
          case 17:
            return 'Pregão Eletrônico';
          case 18:
            return 'Credenciamento';
          case 20:
            return 'Audiência Pública - Saúde';
          case 21:
            return 'CONCURSO';
          case 27:
            return 'PROCESSO SELETIVO';
          default:
            return 'Desconhecido'; // Valor padrão para quando tipo não é reconhecido
        }
      };

      const objetoLicitacao = objetos_licitacao.find(
        (objeto) => objeto.id_objeto === row.id_objeto
      );

      return {
        ...row,
        situacao: getSituacaoText(row?.situacao),
        dataAbertura: moment(row.data_inicio).format("DD/MM/YYYY"),
        publicacaoInicio: moment(row.publicacaoInicio).format("DD/MM/YYYY"),
        publicacaoFim: moment(row.publicacaoFim).format("DD/MM/YYYY"),
        id_tipolicitacao: getTipoText(row?.id_tipolicitacao) ,
        id_objeto: objetoLicitacao?.descricao || "não informado",
        complemento: row.complemento || " não informado"};
    });

    return { contracts: mappingRows, years: [...new Set(allYears)] }; // Remove duplicatas
  } catch (error) {
    console.error("Error fetching contracts:", error);
    throw error;
  }
};
