import { FiHome, FiThermometer } from "react-icons/fi";
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
import { contentContractManagement } from "../pages/terceiro-setor/contratos-gestao/screen";
import { contentConvenants } from "../pages/terceiro-setor/convenios/screen";
import { contentTransfers } from "../pages/terceiro-setor/repasses/screen";
import { contentAgreementColaborator } from "../pages/acordos-termos/acordo-de-colaboracao/screen";
import { contentPlanMultiannual } from "../pages/zzOld_ciclo-orcamentario/plurianual/screen";
import { contentGuidelines } from "../pages/zzOld_ciclo-orcamentario/diretrizes-orcamentarias/screen";
import { contentLawBudget } from "../pages/zzOld_ciclo-orcamentario/lei-orcamentaria-anual/screen";
import { contentRepostManagementSupervisor } from "../pages/zzOld_ciclo-orcamentario/relatorio-de-gestao-fiscal/screen";
import { contentPublicWorks } from "../pages/ciclo-orcamentario/obras-publicas/screen";
import { contentPublicServants } from "../pages/ciclo-orcamentario/servidores-publicos-estagiarios/screen";
import { contentPROMAE } from "../pages/ciclo-orcamentario/promae/screen";
import { contentRevenue } from "../pages/gestao-orcamentaria/orcamentarias/receitas/screen";
import { contentContractsAndAtas } from "../pages/gestao-orcamentaria-outros/outros/contratos-atas/screen";
import { contentBids } from "../pages/compras-publicas/licitacoes/screen";

import { contentAdvancesAndAccommodation } from "../pages/gestao-de-pessoas/adiantamento-hospedagem/screen";
import { contentRecipesAmendments } from "../pages/gestao-orcamentaria/orcamentarias/receitas/receitas-emendas/screen";
import { contentGeneralCosts } from "../pages/gestao-orcamentaria/orcamentarias/despesas/despesas-gerais/screen";
import { contentExpensesRemains } from "../pages/gestao-orcamentaria/orcamentarias/despesas/despesas-restos/screen";
import { contentTrafficFines } from "../pages/gestao-orcamentaria/orcamentarias/receitas/multa-transito/screen";
import { contentExpensesParliamentaryAmendments } from "../pages/gestao-orcamentaria/orcamentarias/despesas/despesas-emendas/screen";
import { contentExtrabudgetExpenses } from "../pages/zzOld_orcamento-municipal/extraorcamentario/despesas/screen";
import { contentExtrabudgetRevenues } from "../pages/zzOld_orcamento-municipal/extraorcamentario/receitas/screen";
import { contentCovidRecipes } from "../pages/zzOld_orcamento-municipal/covid/receitas/screen";
import { contentCovidExpenses } from "../pages/zzOld_orcamento-municipal/covid/despesas/screen";
import { contentReportExtrabudget } from "../pages/ciclo-orcamentario/relatorio-resumido/screen";
import { contentAnnualBalance } from "../pages/contas/balancos-anuais/screen";
import { contentCourtOpinions } from "../pages/contas/pareceres-tribunal/screen";
import { contentPatrimony } from "../pages/patrimonio/screen";
import { contentOtherInformations } from "../pages/ultimas-noticias/screen";
import { contentSearchConstructions } from "../pages/controle-de-obras/pesquisar-obras/screen";
import { contentAbout } from "../pages/sobre-portal/screen";
import { pointRadial } from "d3";

const publicRoutes: IPublicRoute[] = [
  {
    name: "Início",
    path: "/",
    icon: FiHome,
    group: undefined,
    ...contentInitial,
  },
  {
    name: "Sobre o Portal",
    icon: AiOutlineProfile,
    path: "/sobre-portal",
    group: undefined,
    ...contentAbout,
  },
  {
    name: "Perfil do Municipio",
    icon: AiOutlineProfile,
    path: "/perfil-do-municipio",
    group: undefined,
    ...contentMunicipalityProfile,
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
        name: "Relatório de Gestão Fiscal",
        path: "relatorio-gestao-fiscal",
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
    ],
  },
  {
    name: "Gestão Orçamentária",
    path: "/gestao-orcamentaria",
    element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Receitas Orçamentárias",
        path: "orcamentarias",
        icon: AiFillCaretRight,
        subgroup: true,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Gerais",
        path: "orcamentarias/receitas",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Emendas Parlamentares",
        path: "orcamentarias/receitas/receitas-emendas",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Multas de Trânsito",
        path: "orcamentarias/receitas/multa-transito",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Despesas Orçamentárias",
        path: "orcamentarias",
        icon: AiFillCaretRight,
        subgroup: true,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Gerais",
        path: "orcamentarias/despesas/despesas-gerais",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Emendas Parlamentares",
        path: "orcamentarias/despesas/despesas-emendas",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Multas de Trânsito",
        path: "orcamentarias/despesas/despesas-multas-transito",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria",
        name: "Restos a Pagar",
        path: "orcamentarias/despesas/despesas-restos",
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
    name: "Gestão Orçamentária - Outros",
    path: "/gestao-orcamentaria-outros",
    element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/gestao-orcamentaria-outros",
        name: "Contratos e Atas",
        path: "/outros/contratos-atas",
        icon: AiFillCaretRight,
      },

      {
        defaultPath: "/gestao-orcamentaria-outros",
        name: "Propaganda e Publicidade",
        path: "outros/propaganda",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-orcamentaria-outros",
        name: "Subvenções",
        path: "outros/subvencoes",
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
        name: " ",
        path: "receitas",
        icon: AiFillCaretRight,
        subgroup: true,
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
    name: "Acordos e Termos",
    path: "/acordos-termos",
    element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/acordos-termos",
        name: "Acordo de Colaboração",
        path: "acordo-de-colaboracao",
        icon: AiFillCaretRight,
        subgroup: false,
      },
      {
        defaultPath: "/acordos-termos",
        name: "Termo de Colaboração",
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
    ],
  },
  {
    name: "Prestação de Contas",
    path: "/nivel1",
    element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/nivel1",
        name: "Balanço Anual",
        path: "/nivel2",
        icon: AiOutlineGlobal,
        group: [
          {
            defaultPath: "/nivel1",
            name: "Receitas",
            path: "/nivel2/nivel3",
            icon: AiOutlineAudit,
            subgroup: true,
            group: [
              {
                defaultPath: "/nivel1",
                name: "Nivel4",
                path: "/nivel2/nivel3/nivel4",
                icon: AiOutlineTable,
              },
            ],
          },
          {
            defaultPath: "/nivel1",
            name: "Parecer Tribunal",
            path: "/nivel2/nivel3",
            icon: AiOutlineAudit,
            subgroup: true,
            group: [
              {
                defaultPath: "/nivel1",
                name: "Nivel4",
                path: "/nivel2/nivel3/nivel4",
                icon: AiOutlineTable,
              },
            ],
          },
        ],
      },
      {
        defaultPath: "/nivel1",
        name: "Demonstrativos",
        path: "/nivel2",
        icon: AiOutlineGlobal,
        group: [
          {
            defaultPath: "/nivel1",
            name: "Contabil",
            path: "/nivel2/nivel3",
            icon: AiOutlineAudit,
            subgroup: true,
            group: [
              {
                defaultPath: "/nivel1",
                name: "Nivel4",
                path: "/nivel2/nivel3/nivel4",
                icon: AiOutlineTable,
              },
            ],
          },
          {
            defaultPath: "/nivel1",
            name: "Despesas",
            path: "/nivel2/nivel3",
            icon: AiOutlineAudit,
            subgroup: true,
            group: [
              {
                defaultPath: "/nivel1",
                name: "Nivel4",
                path: "/nivel2/nivel3/nivel4",
                icon: AiOutlineTable,
              },
            ],
          },
        ],
      },
      {
        defaultPath: "/nivel1",
        name: "Incentivos Fiscais",
        path: "/nivel2",
        icon: AiOutlineGlobal,
        group: [
          {
            defaultPath: "/transparencia",
            name: "Promae",
            path: "/promae",
            icon: AiOutlineAudit,
            subgroup: false,
          },
          {
            defaultPath: "/nivel1",
            name: "Nivel 3",
            path: "/nivel2/nivel3",
            icon: AiOutlineAudit,
            subgroup: true,
            group: [
              {
                defaultPath: "/nivel1",
                name: "Nivel4",
                path: "/nivel2/nivel3/nivel4",
                icon: AiOutlineTable,
              },
            ],
          },
        ],
      },
    ],
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
        defaultPath: "/compras-publicas",
        name: "Gerais",
        path: "/licitacoes",
        icon: AiFillCaretRight,
      },

      {
        name: "Pregão Eletrônico",
        path: "/pregao-eletronico",
        icon: AiFillCaretRight,
        link: "https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/pregao-eletronico",
      },
      {
        name: "Cadastro de Fornecedor",
        path: "/cadastro-fornecedor",
        icon: AiFillCaretRight,
        link: "https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/cadastro-de-fornecedor",
      },
    ],
  },

  {
    name: "Gestão de Pessoas",
    path: "/gestao-de-pessoas",
    element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/gestao-de-pessoas",
        name: "Folha de Pagamento",
        path: "/folha-pagamento",
        icon: AiFillCaretRight,
        subgroup: true,
      },
      {
        defaultPath: "/gestao-de-pessoas",
        name: "Folha de Pagamento",
        path: "/folha-pagamento",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-de-pessoas",
        name: "Passagens e Locomoção",
        path: "/passagem-locomocao",
        icon: AiFillCaretRight,
        subgroup: true,
      },
      {
        defaultPath: "/gestao-de-pessoas",
        name: "Passagens e Locomoção",
        path: "/passagem-locomocao",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-de-pessoas",
        name: "Adiantamento e Hospedagem",
        path: "/adiantamento-hospedagem",
        icon: AiFillCaretRight,
        subgroup: true,
      },
      {
        defaultPath: "/gestao-de-pessoas",
        name: "Adiantamento e Hospedagem",
        path: "/adiantamento-hospedagem",
        icon: AiFillCaretRight,
      },
      {
        defaultPath: "/gestao-de-pessoas",
        name: "Cargos e Salarios",
        path: "/cargos-e-salarios",
        icon: AiFillCaretRight,
        subgroup: true,
      },
      {
        defaultPath: "/gestao-de-pessoas",
        name: "Cargo e Salarios",
        path: "/cargos-e-salarios",
        icon: AiFillCaretRight,
      },
    ],
  },
  {
    name: "Patrimônio",
    path: "/patrimonio",
    element: <div></div>,
    icon: BsFileText,
    group: [
      {
        defaultPath: "/patrimonio",
        name: "Patrimônio",
        path: " ",
        icon: AiFillCaretRight,
        subgroup: false,
      },
    ],
  },
  {
    name: "Portal de Obras",
    icon: BsBricks,
    path: "/controle-de-obras",
    group: [
      {
        name: "Início",
        path: "/inicio",
        defaultPath: "/controle-de-obras",
        icon: AiOutlineHome,
        ...contentConstructionsControl,
      },
      {
        name: "Sobre as Obras",
        path: "/sobre-as-obras",
        defaultPath: "/controle-de-obras",
        icon: AiOutlineInfoCircle,
        ...contentAboutConstructions,
      },
      {
        name: "Pesquise Obras",
        path: "/pesquisar-obras",
        defaultPath: "/controle-de-obras",
        icon: AiOutlineSearch,
        ...contentSearchConstructions,
      },
    ],
  },
  {
    name: "Controle de Radares",
    icon: BsCameraVideo,
    path: "/controle-de-radares",
    group: undefined,
    ...contentRadarsControl,
  },
  {
    name: "Agenda Aberta",
    path: "/agenda-aberta",
    icon: AiOutlineAppstore,
    group: [
      {
        defaultPath: "/agenda-aberta",
        name: "Prefeito",
        path: "/agenda-prefeito",
        icon: AiOutlineProfile,
        ...contentMayorAgenda,
      },
      {
        defaultPath: "/agenda-aberta",
        name: "Co Prefeita",
        path: "/agenda-coprefeita",
        icon: AiOutlineProfile,
        ...contentMayorAgenda,
      },
    ],
  },
  {
    name: "Terceiro Setor",
    path: "/terceiro-setor",
    element: <div></div>,
    icon: BiBriefcaseAlt,
    group: [
      {
        defaultPath: "/terceiro-setor",
        name: "Contratos de Gestão",
        path: "/contratos-gestao",
        icon: AiOutlineTable,
        ...contentContractManagement,
      },
      {
        defaultPath: "/terceiro-setor",
        name: "Convênios",
        path: "/convenios",
        icon: AiOutlineTable,
        ...contentConvenants,
      },
      {
        defaultPath: "/terceiro-setor",
        name: "Repasses",
        path: "/repasses",
        icon: AiOutlineTable,
        ...contentTransfers,
      },
    ],
  },
  {
    name: "Transparência Pública",
    path: "/transparencia",
    icon: AiOutlineAppstore,
    group: [
      {
        defaultPath: "/transparencia",
        name: "Plano Plurianual",
        path: "/plurianual",
        icon: AiOutlineProfile,
        ...contentPlanMultiannual,
      },
      {
        defaultPath: "/transparencia",
        name: "Diretrizes Orçamentárias",
        path: "/diretrizes-orcamentarias",
        icon: AiOutlineProfile,
        ...contentGuidelines,
      },
      {
        defaultPath: "/transparencia",
        name: "Lei orçamentária Anual",
        path: "/lei-orcamentaria-anual",
        icon: AiOutlineProfile,
        ...contentLawBudget,
      },

      {
        defaultPath: "/transparencia",
        name: "Relatório Resumido",
        path: "/relatorio-resumido",
        icon: AiOutlineProfile,
      },

      {
        defaultPath: "/transparencia",
        name: "Relatório de gestão fiscal",
        path: "/relatorio-gestao-fiscal",
        icon: AiOutlineProfile,
      },

      {
        defaultPath: "/transparencia",
        name: "Balanços Anuais",
        path: "/balancos-anuais",
        icon: AiOutlineProfile,
      },

      {
        defaultPath: "/transparencia",
        name: "Pareceres do Tribunal",
        path: "/pareceres-do-tribunal",
        icon: AiOutlineProfile,
      },

      {
        defaultPath: "/transparencia",
        name: "Obras Públicas",
        path: "/obras-publicas",
        icon: AiOutlineProfile,
        ...contentPublicWorks,
      },
      {
        defaultPath: "/transparencia",
        name: "Servidores Públicos e Estágiarios",
        path: "/servidores-publicos-estagiarios",
        icon: AiOutlineProfile,
        ...contentPublicServants,
      },
      {
        defaultPath: "/transparencia",
        name: "PROMAE",
        path: "/promae",
        icon: AiOutlineProfile,
        ...contentPROMAE,
      },
    ],
  },
  {
    name: "LAI - Lei de Acesso a Informação",
    path: "/acesso-a-informacao",
    icon: AiOutlineSolution,
    group: [
      {
        name: "Protocolo Geral",
        path: "/protocolo-geral",
        icon: AiOutlineProfile,
        link: "https://servicossmar.mogidascruzes.sp.gov.br/falacidadao/#!/demanda",
      },
      {
        name: "Acesso a Informação LAI",
        path: "/acesso-informacao",
        icon: AiOutlineProfile,
        link: "https://mogidascruzes.1doc.com.br/b.php?pg=wp/detalhes&itd=3",
      },
      {
        name: "Relatório de Demandas LAI",
        path: "/relatori-demanda",
        icon: AiOutlineProfile,
        link: "https://mogidascruzes.1doc.com.br/b.php?pg=o/transparencia",
      },
    ],
  },

  {
    name: "Institutos e Autarquias",
    path: "/institutos-autarquias",
    icon: AiOutlineSolution,
    group: [
      {
        name: "Transparência SEMAE",
        path: "/transparencia-semae",
        icon: AiOutlineProfile,
        link: "http://www.transparenciasemae.pmmc.com.br/",
      },
      {
        name: "Transparência IPREM",
        path: "/transparencia-iprem",
        icon: AiOutlineProfile,
        link: "http://www.iprem.pmmc.com.br/?page_id=1542",
      },
    ],
  },

  {
    name: "Perguntas Frequentes",
    path: "/perguntas-frequentes",
    icon: AiOutlineAudit,
    ...contentAbout,
  },

  {
    name: "Últimas Noticias",
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
