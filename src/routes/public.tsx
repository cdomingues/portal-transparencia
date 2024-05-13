import { FiHome, FiThermometer } from "react-icons/fi";
//import { FaSomeIcon } from 'react-icons/fa';
import {
  AiOutlineTable,
  AiOutlineContainer,
  AiOutlineProfile,
  AiOutlineSnippets,
  AiOutlineSolution,
  AiOutlineShop,
  AiOutlineFileDone,
  AiOutlineFileText,
  AiOutlineAppstore,
  AiOutlineException,
  AiOutlineDollar,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineSearch,
  AiOutlineTool,
  AiOutlineGlobal,
  AiOutlineAudit,
  AiOutlineSwap,
  AiFillTag,
  AiFillCaretRight,
  AiFillCaretDown,
  
} from "react-icons/ai";
import { BiBall, BiBriefcaseAlt, BiMoney } from "react-icons/bi";
import {
  BsArrow90DegRight,
  BsArrowDownLeftSquare,
  BsBricks,
  BsCameraVideo,
  BsFileText,
} from "react-icons/bs";
import { IPublicRoute } from "../types";
import { contentInitial } from "../pages/screen";
import { contentMunicipalityProfile } from "../pages/perfil-do-municipio/screen";
import { contentConstructionsControl } from "../pages/controle-de-obras/inicio";
import { contentAboutConstructions } from "../pages/controle-de-obras/sobre-as-obras";
import { contentRadarsControl } from "../pages/controle-de-radares/screen";
import { contentMayorAgenda } from "../pages/agenda-aberta/agenda-prefeito/screen";
import { contentContractManagement } from "../pages/convenios-transferencias/contratos-gestao/screen";

// import { contentAgreementColaborator } from "../pages/acordos-termos/acordo-de-colaboracao/screen";

import { contentPublicWorks } from "../pages/controle-de-obras/obras-publicas/screen";
import { contentPublicServants } from "../pages/ciclo-orcamentario/servidores-publicos-estagiarios/screen";
//import { contentPROMAE } from "../pages/ciclo-orcamentario/promae/screen";
import { contentRevenue } from "../pages/gestao-orcamentaria/receitas/screen";
import { contentContractsAndAtas } from "../pages/gestao-orcamentaria-outros/contratos-atas/screen";
import { contentBids } from "../pages/compras-publicas/licitacoes/screen";

import { contentAdvancesAndAccommodation } from "../pages/gestao-de-pessoas/adiantamento-hospedagem/screen";
import { contentRecipesAmendments } from "../pages/gestao-orcamentaria/receitas/receitas-emendas/screen";
import { contentGeneralCosts } from "../pages/gestao-orcamentaria/despesas/despesas-gerais/screen";
import { contentExpensesRemains } from "../pages/gestao-orcamentaria/despesas/despesas-restos/screen";
import { contentTrafficFines } from "../pages/gestao-orcamentaria/receitas/multa-transito/screen";
import { contentExpensesParliamentaryAmendments } from "../pages/gestao-orcamentaria/despesas/despesas-emendas/screen";

import { contentReportExtrabudget } from "../pages/ciclo-orcamentario/relatorio-resumido/screen";
import { contentAnnualBalance } from "../pages/contas/balancos-anuais/screen";
import { contentCourtOpinions } from "../pages/contas/pareceres-tribunal/screen";
import { contentPatrimony } from "../pages/patrimonio/screen";
import { contentOtherInformations } from "../pages/ultimas-noticias/screen";
import { contentSearchConstructions } from "../pages/controle-de-obras/pesquisar-obras/screen";
import { contentAbout } from "../pages/sobre-portal/screen";
import { pointRadial } from "d3";
import perfil_municipio from '../assets/images/icones/icones_barra lateral__perfil do municipio.svg'
import React from "react";

const custom_perfil_municipio = () => (
  <div>
  {perfil_municipio}
    
  </div>
);

let publicRoutes: IPublicRoute[] = [
  {
    name: "Início",
    path: "/",
    icon: FiHome,
    group: undefined,
    ...contentInitial,
  },
  
  {
    name: "Perfil do Municipio",
    icon:  BsFileText,
    path: "/perfil-do-municipio",
    group: undefined,
    ...contentMunicipalityProfile,
  },
  {
    name: "Portal de Obras",
    icon: BsBricks,
    path: "/controle-de-obras",
    group: [
      {
        name: "Início",
        path: "inicio",
        //defaultPath: "/controle-de-obras",
        icon: AiOutlineHome,
        ...contentConstructionsControl,
      },
      {
        name: "Sobre as Obras",
        path: "sobre-as-obras",
        //defaultPath: "/controle-de-obras",
        icon: AiOutlineInfoCircle,
        ...contentAboutConstructions,
      },
      {
        name: "Pesquise Obras",
        path: "pesquisar-obras",
        //defaultPath: "/controle-de-obras",
        icon: AiOutlineSearch,
        ...contentSearchConstructions,
      },
    ],
  },
  {
    name: "Agenda Aberta",
    path: "/agenda-aberta",
    icon: AiOutlineAppstore,
    group: [
      {    
        defaultPath: "/agenda-aberta",
        name: "Prefeito - Caio Cunha",
        path: "agenda-prefeito",
        icon: AiOutlineProfile,
        ...contentMayorAgenda,
      },
      {
        defaultPath: "/agenda-aberta",
        name: "Co-Prefeita - Priscila Yamagami",
        path: "agenda-coprefeita",
        icon: AiOutlineProfile,
        ...contentMayorAgenda,
      },
      {
        defaultPath: "/agenda-aberta",
        name: "Demais Autoridades",
        path: "agenda-secretarios",
        icon: AiOutlineProfile,
        ...contentMayorAgenda,
      },
      
    ],
  },

  {
    name: "Pagamentos a fornecedores",
    path: "/pagamento-fornecedor" ,
    icon: AiOutlineProfile,
    group: undefined,
  },

  {
    name: "Ciclo Orcamentário",
    path: "/ciclo-orcamentario",
    element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/ciclo-orcamentario",
        name: "Plano Plurianual",
        path: "plurianual",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/ciclo-orcamentario",
        name: "Diretrizes Orçamentárias",
        path: "diretrizes-orcamentarias",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/ciclo-orcamentario",
        name: "Lei Orcamentária Anual",
        path: "lei-orcamentaria-anual",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/ciclo-orcamentario",
        name: "Relatório de Gestão Fiscal",
        path: "relatorio-gestao-fiscal",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/ciclo-orcamentario",
        name: "Relatório Resumido",
        path: "relatorio-resumido",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/ciclo-orcamentario",
        name: "Balanços Anuais",
        path: "balancos-anuais",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/ciclo-orcamentario",
        name: "Pareceres do Tribunal",
        path: "pareceres-do-tribunal",
        icon: AiFillCaretRight,
      },
      {
          //defaultPath: "/ciclo-orcamentario",
          name: "Aprovação de Contas pelo Legislativo",
          path: "contas-executivo",    
          link: "http://www.cmmc.com.br/paginas/contas_do_executivo_municipal/ ",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/ciclo-orcamentario",
        name: "Prestação de Contas à CMMC",
        path: "/prestacao-de-contas",
        icon: AiFillCaretRight,
      },
      
      
    ],
  },


  {
    name: "Gestão Orçamentária",
    path: "/gestao-orcamentaria",
    element: <div></div>,
    icon: BsFileText,
    group: [
      
      {
       // defaultPath: "/gestao-orcamentaria",
        name: "Receitas",
        path: "gestao-orcamentaria/receitas",
        icon: AiFillCaretDown,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Gerais",
        path: "receitas",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Emendas Parlamentares",
        path: "receitas/receitas-emendas",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Multas de Trânsito",
        path: "receitas/multa-transito",
        icon: AiFillCaretRight,
      },
      
       {
        // defaultPath: "/gestao-orcamentaria",
         name: "Despesas",
         path: "gestao-orcamentaria/despesas",
         icon: AiFillCaretDown,
       },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Gerais",
        path: "despesas/despesas-gerais",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Emendas Parlamentares",
        path: "despesas/despesas-emendas",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Multas de Trânsito",
        path: "despesas/despesas-multas-transito",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Restos a Pagar",
        path: "despesas/despesas-restos",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Pagamentos",
        path: "despesas/pagamentos",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Subvenções e Terceiro Setor",
        path: "despesas/subvencoes",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Gastos com publicidade",
        path: "despesas/propaganda",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Divida Ativa",
        path: "/divida-ativa",
        icon: AiFillCaretRight,
      },
    ],
  },

  


  {
    name: "Gestão Orcamentária - Covid-19",
    path: "/gestao-orcamentaria-covid",
    element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/gestao-orcamentaria-covid",
        name: "Receitas",
        path: "covid/receitas",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria-covid",
        name: "Despesas",
        path: "covid/despesas",
        icon: AiFillCaretRight,
      },
    ],
  },

  {
    name: "Gestão Extra Orçamentária",
    path: "/gestao-extra-orcamentaria",
    element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/gestao-extra-orcamentaria",
        name: "Receitas Extra Orçamentárias",
        path: "receitas",
        icon: AiFillCaretRight,
        subgroup: false,
      },


      {
        defaultPath: "/gestao-extra-orcamentaria",
        name: "Despesas Extra Orçamentárias",
        path: "despesas",
        icon: AiFillCaretRight,
        subgroup: false,
      },
    ],
  },
  {
    name: "Promae",
    path: "/promae",
    icon: BsFileText,
    group: undefined,
  },
  
  {
    name: "Controle de Radares",
    icon: BsCameraVideo,
    path: "/controle-de-radares",
    group: undefined,
    ...contentRadarsControl,
  },


  {
    name: "Compras Públicas",
    path: "/compras-publicas",
    element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/compras-publicas",
        name: "Licitações",
        path: "licitacoes",
        icon: AiFillCaretRight,
        subgroup: true,
      },

      {
        defaultPath: "https://licitacao-mgcon.mogidascruzes.sp.gov.br/",
        name: "Licitações Portal Antigo",
        path: "https://licitacao-mgcon.mogidascruzes.sp.gov.br/",
        icon: AiFillCaretRight,
        subgroup: true,
      },
     

      {
        name: "Pregão Eletrônico",
        path: "pregao-eletronico",
        icon: AiFillCaretRight,
        link: "https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/pregao-eletronico",
      },
      {
        name: "Cadastro de Fornecedor",
        path: "cadastro-fornecedor",
        icon: AiFillCaretRight,
        link: "https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/cadastro-de-fornecedor",
      },
    ],
  },

  {
    name: "Gestão de Pessoas",
    path: "/gestao-de-pessoas",
    //element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/gestao-de-pessoas",
        name: "Folha de Pagamento",
        path: "folha-pagamento",
        icon: AiFillCaretRight,
        subgroup: false,
      },

      {
        defaultPath: "/gestao-de-pessoas",
        name: "Passagens e locomoção",
        path: "passagens-locomocao",
        icon: AiFillCaretRight,
        subgroup: false,
      },

      {
        defaultPath: "/gestao-de-pessoas",
        name: "Adiantamento e Hospedagem",
        path: "adiantamento-hospedagem",
        icon: AiFillCaretRight,
        subgroup: false,
      },

      {
        defaultPath: "/gestao-de-pessoas",
        name: "Cargos e Salarios",
        path: "cargos-e-salarios",
        icon: AiFillCaretRight,
        subgroup: false,
      },
      {
        defaultPath: "/gestao-de-pessoas",
        name: "Estrutura Organizacional",
        path: "estrutura-organizacional",
        icon: AiFillCaretRight,
        link: "http://leismunicipa.is/0ji28",
      },
      
      {
        defaultPath: "/gestao-de-pessoas",
        name: "Carga Horária",
        path: "carga-horaria",
        icon: AiFillCaretRight,
        subgroup: false,
      },

      {
        defaultPath: "/gestao-de-pessoas",
        name: "Concurso Público",
        path: "concurso-publico",
        icon: AiFillCaretRight,
        subgroup: false,
      },

      {
        defaultPath: "/gestao-de-pessoas",
        name: "Diárias e Viagens",
        path: "diarias-viagens",
        icon: AiFillCaretRight,
        subgroup: false,
      },
    ],
  },
  {
    name: "Patrimônio",
    path: "/patrimonio",
    element: <div></div>,
    icon: BsFileText,
    group: undefined
  },
  {
    name: "Contratos, Termos e Atas de registro de preços",
    path: "/acordos-termos",
    element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/acordos-termos",
        name: "Acordo de Cooperação",
        path: "acordo-de-cooperacao",
        icon: AiFillCaretRight,
        subgroup: false,
      },
      {
        defaultPath: "/acordos-termos",
        name: "Termo de Parceria",
        path: "termo-de-colaboracao",
        icon: AiFillCaretRight,
        subgroup: false,
      },
      {
        defaultPath: "/acordos-termos",
        name: "Termo de Fomento",
        path: "termo-de-fomento",
        icon: AiFillCaretRight,
        subgroup: false,
      },
      {
        defaultPath: "/acordos-termos",
        name: "Contratos gestão",
        path: "contratos-gestao",
        icon: AiFillCaretRight,
        subgroup: false,
      },
      {
        defaultPath: "/acordos-termos",
        name: "Contratos e Atas",
        path: "contratos-atas",
        icon: AiFillCaretRight,
        subgroup: false,
      },
    ],
  },

  {
    name: "Convênios e Transferências",
    path: "/convenios-transferencias",
    element: <div></div>,
    icon: BiBriefcaseAlt,
    group: [
      {
        defaultPath: "/convenios-transferencias",
        name: "Contratos de Gestão",
        path: "contratos-gestao",
        icon: AiOutlineTable,
        ...contentContractManagement,
      },
      {
        defaultPath: "/convenios-transferencias",
        name: "Recebidos",
        path: "recebidos",
        icon: AiOutlineTable,

      },
      {
        defaultPath: "/convenios-transferencias",
        name: "Repasses",
        path: "repasses",
        icon: AiOutlineTable,

      },
    ],
  },

  {
    name: "Leis, Decretos e Portarias",
    path: "leis-decretos-portarias",
    icon: AiOutlineSolution,
    group: [
      {
        name: "Leis Municipais",
        path: "protocolo-geral",
        icon: AiOutlineProfile,
        link: "https://leismunicipais.com.br/prefeitura/sp/mogi-das-cruzes",
      },
      {
        name: "Decretos e Portarias",
        path: "/leis-decretos-portarias",
        icon: AiOutlineProfile,
        link: "/leis-decretos-portarias/decretos-portarias",
      },
      {
        defaultPath: "/leis-decretos-portarias",
        name: "LGPD",
        path: "lgpd ",
        icon: AiOutlineProfile,
        //link: "lgpd",
      },
    ],
  },

  {
    name: "Governo Aberto",
    path: "/governo-aberto",
    link:"/governo-aberto",
    icon: AiOutlineAudit,
    ...contentOtherInformations,
  },

  {
    name: "Institutos e Autarquias",
    path: "/instituto-autarquia",
    icon: AiOutlineSolution,
    group: [
      {
        name: "Transparência SEMAE",
        path: "transparencia-semae",
        icon: AiOutlineProfile,
        link: "http://www.transparenciasemae.pmmc.com.br/",
      },
      {
        name: "Transparência IPREM",
        path: "transparencia-iprem",
        icon: AiOutlineProfile,
        link: "http://www.iprem.pmmc.com.br/?page_id=1542",
      },
    ],
  },

  {
    name: "Ouvidoria",
    path: "/ouvidoria",
    icon: AiOutlineAudit,
    group: undefined,
  },

  {
    name: "Perguntas Frequentes",
    path: "/perguntas-frequentes",
    icon: AiOutlineAudit,
    ...contentAbout,
  },
  {
    name: "LAI - Lei de Acesso à Informação",
    path: "acesso-a-informacao",
    icon: AiOutlineSolution,
    group: [
      
      {
        name: "Acesso a Informação LAI",
        path: "acesso-informacao",
        icon: AiOutlineProfile,
        link: "https://mogidascruzes.1doc.com.br/b.php?pg=wp/detalhes&itd=3",
      },
      {
        name: "Relatório de Demandas LAI",
        path: "relatorio-demanda",
        icon: AiOutlineProfile,
        link: "https://mogidascruzes.1doc.com.br/b.php?pg=o/transparencia",
      },
      {
        name: "Dashboard da LAI",
        path: "https://app.powerbi.com/view?r=eyJrIjoiY2ZmODAzZDUtMDE2YS00ZWYzLWJhZGQtMWE4Nzc3OWQyMDgxIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
        icon: AiOutlineProfile,
        link: "https://app.powerbi.com/view?r=eyJrIjoiY2ZmODAzZDUtMDE2YS00ZWYzLWJhZGQtMWE4Nzc3OWQyMDgxIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
      },
    ],
  },



  
  {
    name: "Plano Municipal de Educação",
    path: "/plano-municipal-educacao",
    icon: AiOutlineAudit,
    ...contentOtherInformations,
  },
  {
    name: "Plano Municipal de Saúde",
    path: "/plano-municipal-saude",
    icon: AiOutlineSolution,
    group: [
      {
        defaultPath: "/plano-municipal-saude",
        name: "Plano Municipal de Saúde",
        path: "plano-municipal-saude",
        icon: AiOutlineProfile,
        
      },
      {
        defaultPath: "/plano-municipal-saude",

        name: "Serviços de Saúde",
        path: "servicos-saude",

        icon: AiOutlineProfile,
        
      },
      {
        defaultPath: "/plano-municipal-saude",

        name: "Medicamentos",
        path: "medicamentos",
 
        icon: AiOutlineProfile,
        
      },
      
    ],
  },
  {
    name: "VISUAS – Visor do Sistema Único de Assistência Social",
    path: "/visuas",
    link:"/visuas",
    icon: AiOutlineAudit,
    ...contentOtherInformations,
  },
  {
    name: "Dados Abertos",
    path: "/dados-abertos",
    link:"https://dados.mogidascruzes.sp.gov.br/ ",
    icon: AiOutlineAudit,
    ...contentOtherInformations,
  },
  {
    name: "Últimas Notícias",
    path: "/ultimas-noticias",
    icon: AiOutlineAudit,
    ...contentOtherInformations,
  },
  
  {
    name: "Mapa do Site",
    path: "/mapa-do-site",
    icon: AiOutlineGlobal,
    group: undefined,
  },
  {
    name: "Portal Antigo",
    path: "/portal-antigo",
    icon: AiOutlineGlobal,
    group: undefined,
  },
  // {
  //   name: "Nivel 1",
  //   path: "/nivel1",
  //   element: <div></div>,
  //   icon: BsFileText,
  //   group: [
  //     {
  //       defaultPath: "/nivel1",
  //       name: "Nivel 2",
  //       path: "/nivel2",
  //       icon: AiOutlineGlobal,
  //       group: [
  //         {
  //           defaultPath: "/nivel1",
  //           name: "Nivel 3 - Link",
  //           path: "/nivel2/nivel3",
  //           icon: AiOutlineAudit,
  //           subgroup: false,
  //         },
  //         {
  //           defaultPath: "/nivel1",
  //           name: "Nivel 3",
  //           path: "/nivel2/nivel3",
  //           icon: AiOutlineAudit,
  //           subgroup: true,
  //           group: [
  //             {
  //               defaultPath: "/nivel1",
  //               name: "Nivel4",
  //               path: "/nivel2/nivel3/nivel4",
  //               icon: AiOutlineTable,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];




export default publicRoutes;