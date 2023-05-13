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
} from "react-icons/ai";
import { BiBriefcaseAlt, BiMoney } from "react-icons/bi";
import { BsBricks, BsCameraVideo, BsFileText } from "react-icons/bs";
import { IPublicRoute } from "../types";
import { contentInitial } from "../pages/screen";
import { contentMunicipalityProfile } from "../pages/perfil-do-municipio/screen";
import { contentConstructionsControl } from "../pages/controle-de-obras/inicio/screen";
import { contentAboutConstructions } from "../pages/controle-de-obras/sobre-as-obras/screen";
import { contentSearchConstructions } from "../pages/controle-de-obras/pesquisar-obras/screen";
import { contentOpenedConstructions } from "../pages/controle-de-obras/obras-abertas/screen";
import { contentRadarsControl } from "../pages/controle-de-radares/screen";
import { contentMayorAgenda } from "../pages/agenda-aberta/agenda-prefeito/screen";
import { contentContractManagement } from "../pages/terceiro-setor/contratos-gestao/screen";
import { contentConvenants } from "../pages/terceiro-setor/convenios/screen";
import { contentTransfers } from "../pages/terceiro-setor/repasses/screen";
import { contentTermsColaborator } from "../pages/acordos-termos/termo-de-colaboracao/screen";
import { contentTermsForment } from "../pages/acordos-termos/termo-de-fomento/screen";
import { contentAgreementColaborator } from "../pages/acordos-termos/acordo-de-colaboracao/screen";
import { contentPlanMultiannual } from "../pages/transparencia/plurianual/screen";
import { contentGuidelines } from "../pages/transparencia/diretrizes-orcamentarias/screen";
import { contentLawBudget } from "../pages/transparencia/lei-orcamentaria-anual/screen";
import { contentRepostManagementSupervisor } from "../pages/transparencia/relatorio-de-gestao-fiscal/screen";
import { contentPublicWorks } from "../pages/transparencia/obras-publicas/screen";
import { contentPublicServants } from "../pages/transparencia/servidores-publicos-estagiarios/screen";
import { contentPROMAE } from "../pages/transparencia/promae/screen";

const publicRoutes: IPublicRoute[] = [
  {
    name: "Início",
    path: "/",
    icon: FiHome,
    group: undefined,
    ...contentInitial
  },
  {
    name: "Perfil do Municipio",
    icon: AiOutlineProfile,
    path: "/perfil-do-municipio",
    group: undefined,
    ...contentMunicipalityProfile,
  },
  {
    name: "Controle de Obras",
    icon: BsBricks,
    path: "/controle-de-obras",
    group: [
      {
        name: "Início",
        path: "/inicio",
        defaultPath:"/controle-de-obras",
        icon: AiOutlineHome,
        ...contentConstructionsControl
      },
      {
        name: "Sobre as Obras",
        path: "/sobre-as-obras",
        defaultPath:"/controle-de-obras",
        icon: AiOutlineInfoCircle,
        ...contentAboutConstructions
      },
      {
        name: "Pesquise Obras",
        path: "/pesquisar-obras",
        defaultPath:"/controle-de-obras",
        icon: AiOutlineSearch,
        ...contentSearchConstructions
      },
      {
        name: "Obras Abertas",
        path: "/obras-abertas",
        defaultPath:"/controle-de-obras",
        icon: AiOutlineTool,
        ...contentOpenedConstructions
      },
      // {
      //   name: "Obra",
      //   path: "/construcao",
      //   icon: AiOutlineTool,

      // },
    ],
  },
  {
    name: "Controle de Radares",
    icon: BsCameraVideo,
    path: "/controle-de-radares",
    group: undefined,
    ...contentRadarsControl
  },
  {
    name: "Agenda Aberta",
    path: "/agenda-aberta",
    icon: AiOutlineAppstore,
    group: [
      {
        defaultPath: "/agenda-aberta",
        name: "Prefeito - Caio Cunha",
        path: "/agenda-caio",
        icon: AiOutlineProfile,
        ...contentMayorAgenda
      },
      {
        defaultPath: "/agenda-aberta",
        name: "Prefeito",
        path: "/agenda-prefeito",
        icon: AiOutlineProfile,
        ...contentMayorAgenda
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
        ...contentContractManagement
      },
      {
        defaultPath: "/terceiro-setor",
        name: "Convênios",
        path: "/convenios",
        icon: AiOutlineTable,
        ...contentConvenants
      },
      {
        defaultPath: "/terceiro-setor",
        name: "Repasses",
        path: "/repasses",
        icon: AiOutlineTable,
        ...contentTransfers
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
        name: "Termo de Colaboração",
        path: "/termo-de-colaboracao",
        icon: AiOutlineTable,
        ...contentTermsColaborator
      },
      {
        defaultPath: "/acordos-termos",
        name: "Termo de Fomento",
        path: "/termo-de-fomento",
        icon: AiOutlineTable,
        ...contentTermsForment
      },
      {
        defaultPath: "/acordos-termos",
        name: "Acordo de Colaboração",
        path: "/acordo-de-colaboracao",
        icon: AiOutlineTable,
        ...contentAgreementColaborator
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
        ...contentPlanMultiannual
      },
      {
        defaultPath: "/transparencia",
        name: "Diretrizes Orçamentárias",
        path: "/diretrizes-orcamentarias",
        icon: AiOutlineProfile,
        ...contentGuidelines
      },
      {
        defaultPath: "/transparencia",
        name: "Lei orçamentária Anual",
        path: "/lei-orcamentaria-anual",
        icon: AiOutlineProfile,
        ...contentLawBudget
      },
      {
        defaultPath: "/transparencia",
        name: "Relatório de Gestão Fiscal",
        path: "/relatorio-de-gestao-fiscal",
        icon: AiOutlineProfile,
        ...contentRepostManagementSupervisor
      },
      {
        defaultPath: "/transparencia",
        name: "Obras Públicas",
        path: "/obras-publicas",
        icon: AiOutlineProfile,
        ...contentPublicWorks
      },
      {
        defaultPath: "/transparencia",
        name: "Servidores Públicos e Estágiarios",
        path: "/servidores-publicos-estagiarios",
        icon: AiOutlineProfile,
        ...contentPublicServants
      },
      {
        defaultPath: "/transparencia",
        name: "PROMAE",
        path: "/promae",
        icon: AiOutlineProfile,
        ...contentPROMAE
      },
    ],
  },
  {
    name: "Receitas",
    path: "/receitas",
    icon: BiMoney,
  },
  {
    name: "Despesas",
    path: "/despesas",
    icon: AiOutlineContainer,
    group: [
      {
        defaultPath: "/despesas",
        name: "Contratos e Atas",
        path: "/contratos-atas",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/despesas",
        name: "Licitações",
        path: "/licitacoes",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/despesas",
        name: "Folha de Pagamento",
        path: "/folha-pagamento",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/despesas",
        name: "Passagens e Locomoção",
        path: "/passagem-locomocao",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/despesas",
        name: "Adiantamentos e Hospedagem",
        path: "/adiantamento-hospedagem",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/despesas",
        name: "Gastos com publicidade",
        path: "/propaganda",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/despesas",
        name: "Subvenções",
        path: "/subvencoes",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/despesas",
        name: "Obras Públicas",
        path: "/obras-publicas",
        icon: AiOutlineProfile,
        link: "http://www.transparencia.pmmc.com.br/obras-publicas",
      },
      {
        defaultPath: "/despesas",
        name: "Diárias",
        path: "/diarias",
        icon: AiOutlineProfile,
        link: "http://www.transparencia.pmmc.com.br/funcionalismopublico/salarios?pagina=diarias",
      },
    ],
  },
  {
    name: "Execução Orçamentária",
    path: "/execucao-orcamentaria",
    icon: AiOutlineDollar,
    group: [
      {
        defaultPath: "/execucao-orcamentaria",
        name: "Receitas Emendas Parlamentares",
        path: "/receitas-emendas",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/execucao-orcamentaria",
        name: "Receitas Multas Trânsito",
        path: "/receitas-multas-transito",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/execucao-orcamentaria",
        name: "Despesas Gerais",
        path: "/despesas-gerais",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/execucao-orcamentaria",
        name: "Despesas - Restos à Pagar",
        path: "/despesas-restos",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/execucao-orcamentaria",
        name: "Despesas Multas Trânsito",
        path: "/despesas-multas-transito",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/execucao-orcamentaria",
        name: "Despesas Emendas Parlamentares",
        path: "/despesas-emendas",
        icon: AiOutlineTable,
      },
    ],
  },
  {
    name: "Extraorçamentário",
    path: "/extraorcamentario",
    element: <div></div>,
    icon: AiOutlineException,
    group: [
      {
        defaultPath: "/extraorcamentario",
        name: "Despesas",
        path: "/despesas",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/extraorcamentario",
        name: "Receitas",
        path: "/receitas",
        icon: AiOutlineTable,
      },
    ],
  },
  {
    name: "Covid-19",
    path: "/covid",
    icon: FiThermometer,
    group: [
      {
        defaultPath: "/covid",
        name: "Receitas Covid",
        path: "/receitas",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/covid",
        name: "Despesas Covid",
        path: "/despesas",
        icon: AiOutlineTable,
      },
      {
        defaultPath: "/covid",
        name: "Compras Covid",
        path: "/compras",
        icon: AiOutlineProfile,
        link: "http://covid19.pmmc.com.br/",
      },
    ],
  },
  {
    name: "Relatório Resumido da Execução Orçamentária",
    path: "/transparencia/relatorio-resumido",
    icon: AiOutlineFileDone,
    link: "",
  },
  {
    name: "Prestação de Conta Anual",
    path: "/contas",
    icon: AiOutlineFileText,
    group: [
      {
        name: "Balanços Anuais",
        path: "/balancos-anuais",
        icon: AiOutlineProfile,
        link: "",
      },
      {
        name: "Pareceres do Tribunal",
        path: "/pareceres-tribunal",
        icon: AiOutlineProfile,
        link: "",
      },
    ],
  },
  {
    name: "Patrimônio",
    path: "/patrimonio",
    icon: AiOutlineShop,
  },
  {
    name: "Publicações",
    path: "/publicacoes",
    icon: AiOutlineSnippets,
    group: [
      {
        name: "Compras e Contratações",
        path: "/compras-contratacoes",
        icon: AiOutlineProfile,
        link: "http://licitacao-mgcon.mogidascruzes.sp.gov.br/",
      },
      {
        name: "Arquivos Contratos e Convênios",
        path: "/arquivos-contratos-convenios",
        icon: AiOutlineProfile,
        link: "http://ged.pmmc.com.br/weblink7/Browse.aspx",
      },
      {
        name: "Leis, Decretos e Portarias",
        path: "/leis-decretos-portarias",
        icon: AiOutlineProfile,
        link: "http://ged.pmmc.com.br/weblink7/Browse.aspx",
      },
      {
        name: "Plano Diretor",
        path: "/plano-diretor",
        icon: AiOutlineProfile,
        link: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-planejamento-e-urbanismo/plano-diretor-vigente",
      },
      {
        name: "Cargo e Salários",
        path: "/cargo-salarios",
        icon: AiOutlineProfile,
        link: "http://www.transparencia.pmmc.com.br/funcionalismopublico/salarios?pagina=cargosesalarios#cargos",
      },
      {
        name: "PROMAE - Incentivos Fiscais",
        path: "/incentivos-fiscais",
        icon: AiOutlineProfile,
        link: "http://www.transparencia.pmmc.com.br/promae-incentivos-fiscais",
      },
    ],
  },
  {
    name: "Acesso Direto",
    path: "/acesso-direto",
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
      {
        name: "Pregão Eletrônico",
        path: "/pregao-eletronico",
        icon: AiOutlineProfile,
        link: "https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/pregao-eletronico",
      },
      {
        name: "Cadastro de Fornecedor",
        path: "/cadastro-fornecedor",
        icon: AiOutlineProfile,
        link: "https://www.mogidascruzes.sp.gov.br/servico/alvara-certidoes-e-licencas/cadastro-de-fornecedor",
      },
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
      {
        name: "Perguntas Frequentes",
        path: "/perguntas-frequentes",
        icon: AiOutlineProfile,
        link: "https://www.mogidascruzes.sp.gov.br/pagina/chefia-de-gabinete/perguntasfrequentes",
      },
    ],
  },
];

export default publicRoutes;
