import axios from "axios";
import { baseUrl } from "../../config";
import {
  barChartConfig,
  TRequestChartData,
} from "../../config/defaultChartConfig";
import { BudgetRevenueAmendmentsData } from "../../pages/api/execucao-orcamentaria/receitas-emendas";
import moneyFormatter from "../../utils/moneyFormatter";
import moment from "moment";

type Emendas = {
  _id: number;
  
  n_emenda: number;
  ano: number;
  trimestre: string;
  autor: string;
  partido: string;
  orgao_concedente: string;
  esfera: string;
  modalidade: string;
  categoria: string;
  valor_previsto_emenda: number;
  valor_realizado: number;
  objeto: string;
  funcao_governo: string;
  envio_camara: string;
  deliberacao_camara: string;
  secretaria_resp: string;
  situacao: string;
  publicacao_edital: string;
  link_acesso: string;
  modalidade_licitacao: string;
  decisao_autoridade: string;
  contrato_assinado: string;
  valor_finalizado: string;
  empresa_contratada: string;
  cnpj: string;
}


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
     "https://dadosadm.mogidascruzes.sp.gov.br/api/emendas",
      {
        
        params: {
          q: year,
        },
      }
    );

    const rows = response.data || [];

    
          
    const mappingData: any = rows?.map((row: Emendas) => {
      return {

        _id: row?.["_id"],
       // id_emenda: row?.["id_emenda"],
       // n_emenda: row?.["n_emenda"],
        ano: row?.["ano"],
        trimestre: row?.["trimestre"],
        autor: row?.["autor"],
        partido: row?.["partido"],
        orgao_concedente: row?.["orgao_concedente"],
        esfera: row?.["esfera"],
        modalidade: row?.["modalidade"],
        categoria: row?.["categoria"],
        valor_previsto_emenda: moneyFormatter(
          Number(row?.["valor_previsto_emenda"])
        ),
       valor_realizado: moneyFormatter(
        Number(row?.["valor_realizado"])
      ),
       
        objeto: row?.["objeto"],
        funcao_governo: row?.["funcao_governo"],
        envio_camara: row?.["envio_camara"],
        deliberacao_camara: row?.["deliberacao_camara"],
        secretaria_resp: row?.["secretaria_resp"],
        situacao: row?.["situacao"],
        publicacao_edital: row?.["publicacao_edital"],
        link_acesso: row?.["link_acesso"],
        modalidade_licitacao: row?.["modalidade_licitacao"],
        decisao_autoridade: row?.["decisao_autoridade"],
        contrato_assinado: row?.["contrato_assinado"],
        valor_finalizado: row?.["valor_finalizado"],
        empresa_contratada: row?.["empresa_contratada"],
        cnpj: row?.["cnpj"],
       
        
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
      "https://dadosadm.mogidascruzes.sp.gov.br/api/emendas",
      
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
