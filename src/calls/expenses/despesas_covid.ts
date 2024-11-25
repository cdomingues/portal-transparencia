import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import moneyFormatter from "../../utils/moneyFormatter";
import { objetos_licitacao } from "../../utils/objetos_licitacao"; 

export const getDespesasCovid = async (years?: number) => {
  try {
    let nextPage = "https://dadosadm.mogidascruzes.sp.gov.br/api/despesas";
    let allResults: any[] = [];
    const filter = [
      "02.312.8620 - ENFRENTAMENTO COVID-19-RESOLUÇÃO SS 86/2020",
      "05.312.0361 - CENTROS ATENDIMENTO P/ENFRET. COVID-19-PORT.361/21",
      "05.312.1787 - HABILITAÇÃO UTI COVID-19 HMMC - PORTARIA 1787/2020",
      "05.312.1857 - ENFRENTAMENTO COVID-19-ESC.PÚBLICAS RBE-PORT.1857",
      "05.312.2237 - PORTARIA 2237/2021 - TRATAMENTO COVID-19",
      "05.312.3389 - ENFRENTAMENTO COVID19-EQ.ODONTO-PORT.3389/2020",
      "05.312.3393 - ENFRENTAMENTO COVID19-INFORM.ESF/EA-PORT.3393/2020",
      "05.312.3617 - PORT.3617/2021-REC.COVID19-INCR.ASSIST.FARMACEUTIC",
      "05.312.5516 - MEDICAMENTOS SAÚDE MENTAL-COVID-PORT.2516/20",
      "05.312.5797 - ENFRENTAMENTO CORONAVÍRUS - PORTARIA 1797/2020",
    ];

    while (nextPage) {
      const response = await axios.get(nextPage);
      const { results, next } = response.data;

      allResults = allResults.concat(results);
      nextPage = next;
    }

    const mappingRows = allResults.map((row) => ({
      ...row,
      vlr_empenho: "R$" + row.vlr_empenho,
      dataAbertura: moment(row.dataAbertura).format("DD/MM/YYYY"),
      publicacaoInicio: moment(row.publicacaoInicio).format("DD/MM/YYYY"),
      publicacaoFim: moment(row.publicacaoFim).format("DD/MM/YYYY"),
      complemento: row.complemento || "não informado",
    }));

    // Filtra os dados baseados no campo `vinculo`
    const filteredRows = mappingRows.filter((row) =>
      filter.includes(row.vinculo)
    );

    return { contracts: filteredRows };
  } catch (error) {
    console.error("Error fetching contracts:", error);
    throw error;
  }
};

