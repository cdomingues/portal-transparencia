
import axios from "axios";
import { baseUrl } from "../../config";
import {
  barChartConfig,
  TRequestChartData,
} from "../../config/defaultChartConfig";
import { BudgetRevenueAmendmentsData } from "../../pages/api/execucao-orcamentaria/receitas-emendas";
import moneyFormatter from "../../utils/moneyFormatter";
import moment from "moment";




export const getAmendmentRevenues = async (year?: number) => {
  const years = [
    moment().subtract(5, "years").year(),
    moment().subtract(4, "years").year(),
    moment().subtract(3, "years").year(),
    moment().subtract(2, "years").year(),
    moment().subtract(1, "years").year(),
    moment().year(),
  ];

  try {
    const response = await axios.get(
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=b9f57b82-5671-4b52-9585-08470e2ed9d9",
     "https://dadosadm.mogidascruzes.sp.gov.br/api/lista_emendas",
      {
        
        params: {
          q: year,
        },
      }
    );

    const rows = response.data || [];

    
          
    const mappingData: any = rows?.map((row: { [x: string]: any; }) => {
      
    
      return {
        

       //id_emenda: row?.["id"],
        id: row?.["id"],
        n_emenda: row?.["n_emenda"],
        ano: row?.["ano"],
        trimestre: row?.["trimestre"],
        esfera_descricao: row?.["esfera_descricao"],
        categoria_descricao: row?.["categoria_descricao"],
        valor_previsto_emenda: moneyFormatter(
          Number(row?.["valor_previsto_emenda"])
        ),
        valor_realizado: moneyFormatter(
          Number(row?.["valor_realizado"])
        ),
        objeto: row?.["objeto"],
        envio_camara: row?.["envio_camara"],
        deliberacao_camara: row?.["deliberacao_camara"],
        publicacao_edital: row?.["publicacao_edital"],
        link_acesso: row?.["link_acesso"],
        decisao_autoridade: row?.["decisao_autoridade"],
        contrato_assinado: row?.["contrato_assinado"],
        data_contrato_assinado: row?.["data_contrato_assinado"],
        valor_finalizado: row?.["valor_finalizado"],
        cnpj: row?.["cnpj"],
        empresa_contratada: row?.["empresa_contratada"],
        informacoes_gerais: row?.["informacoes_gerais"],
        desc_politico: row?.["desc_politico"] ?? undefined,
        partido_politico: row?.["partido_politico"],
        desc_orgao: row?.["desc_orgao"],
        desc_modalidade: row?.["desc_modalidade"],
        secretaria: row?.["secretaria"],
        desc_licitacao: row?.["desc_licitacao"],
        
        
      };
    });

    return { revenues: mappingData, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(`Error on get ${url}, data: ${error.response?.data}`);
    }
    return { revenues: [], years };
  }
};

export const getChart = async () => {
  try {
    const response = await axios.get(
      "https://dadosadm.mogidascruzes.sp.gov.br/api/lista_emendas",
      
    );

    const rows = response.data || [];

    const graphs = [];
    const years = [
      moment().subtract(5, "years").year(),
      moment().subtract(4, "years").year(),
      moment().subtract(3, "years").year(),
      moment().subtract(2, "years").year(),
      moment().subtract(1, "years").year(),
      moment().year(),
    ];

    for (const year of years) {
      const filteredByYear = rows?.filter((row: any) => row?.ano == year);

      const sum = filteredByYear.reduce((acumulador: any, item: any) => {
        return acumulador + item?.valor_previsto_emenda;
      }, 0);

      graphs.push({
        name: "Receitas Últimos 5 anos",
        ano: year,
        valor: sum,
      });
    }

    const config = {
      labels: graphs.map(({ ano }: TRequestChartData) => ano.toString()),
      datasets: [
        {
          ...barChartConfig,
          data: graphs.map(({ valor }: TRequestChartData) => valor),
        },
      ],
    };

    return { chart: config };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(`Error on get ${url}, data: ${error.response?.data}`);
    }
    return { chart: { datasets: [] } };
  }
};
