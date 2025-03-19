/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import {
  Flex,
  Box,
  useColorModeValue,
  Text,
  Center,
  Square,
  Stack,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  VStack,
  Link,
} from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { IconRight } from "react-day-picker";
import { isMobile } from "react-device-detect";
import { BiBell } from "react-icons/bi";
import Image from "next/image";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import seta from "../../assets/images/icones/Icones_Home Portal Transparencia__botao abre.svg";
import Diretriz_orcamentaria from "../../assets/images/icones/diretriz_orcamentaria.svg";
import CardHorizon from "../CardHorizon";
import IconeOrcamento from "../../assets/images/icones/orcamento_home.svg";
import IconeServidores from '../../assets/images/icones/servidores_home.svg'
import IconeAdmMunicipal from '../../assets/images/icones/adm_municipal_home.svg'
import IconeSocial from '../../assets/images/icones/controle social_home.svg'
import IconePortais from '../../assets/images/icones/portais_home.svg'
import IconePlanejamento from '../../assets/images/icones/planejamento_home.svg'
import IconesGovernoAberto from '../../assets/images/icones/governo_aberto_home.svg'
import IconeContratos from '../../assets/images/icones/3925398-budget-money-stocks-icon_111548.svg'
import FolhaPagamento from '../../assets/images/icones/folha_de_pagamento.svg'
import CargosSalarios from '../../assets/images/icones/folha de pagamento__cargos e salarios.svg'
import Diarias from '../../assets/images/icones/folha de pagamento__adiantamentos e hospedagem.svg'
import Viagens from '../../assets/images/icones/folha de pagamento__passagens e locomoção.svg'
import IconeRadar from '../../assets/images/icones/Home_botoes_radares_red.svg'
import IconeVeiculo from '../../assets/images/icones/vehicle_icon.svg'
import IconeGlobo from '../../assets/images/icones/icone_globo_Red.svg'
import IconeOnibus from '../../assets/images/icones/icone_onibus_red.svg'
import IconeMap from '../../assets/images/icones/icone_map_red.svg'
import IconeSsocial from '../../assets/images/icones/icones_ssocial_red.svg'
import IconeOS from '../../assets/images/icones/icones_barra lateral__patrimonio.svg'
import IconeLeis from '../../assets/images/icones/LAI__protocolo geral.svg'
import IconeLeisDecretos from '../../assets/images/icones/leis_e_decretos.svg'


import Perfil_municipio from "../../assets/images/icones/icones_barra lateral__perfil do municipio.svg";
import Ciclo_orcamentario from "../../assets/images/icones/icones_barra lateral__ciclo orcamentario.svg";
import Gestao_orcamentaria from "../../assets/images/icones/icones_barra lateral__gestão orcamentaria.svg";
import Gestao_orcamentaria_covid from "../../assets/images/icones/icones_barra lateral__gestão orcamentaria covid.svg";
import Gestao_orcamentaria_outros from "../../assets/images/icones/icones_barra lateral__gestão orcamentaria outros.svg";
import Gestao_extra_orcamentaria from "../../assets/images/icones/icones_barra lateral__gestão extra orcamentaria.svg";
import Acordos_termos from "../../assets/images/icones/icones_barra lateral__acordos e termos.svg";
import Compras_publicas from "../../assets/images/icones/icones_barra lateral__compras publicas.svg";
import Gestao_de_pessoas from "../../assets/images/icones/icones_barra lateral__gestao de pessoas.svg";
import Patrimonio from "../../assets/images/icones/icones_barra lateral__patrimonio.svg";
import Controle_de_obras from "../../assets/images/icones/portal_de_obras_red.svg";
import Controle_de_radares from "../../assets/images/icones/Home_botoes_radares.svg";
import Agenda_aberta from "../../assets/images/icones/icones_barra lateral__agenda aberta.svg";
import Convenios_transferencias from "../../assets/images/icones/terceiro setor__convenios.svg";
import Leis_decretos_portarias from "../../assets/images/icones/Home_botoes_leisedecretos.svg";
import Acesso_a_informacao from "../../assets/images/icones/LAI__acesso a informação.svg";
import Ouvidoria from "../../assets/images/icones/ouvidoria_Red.svg";
import Instituto_autarquia from "../../assets/images/icones/icones_barra lateral__institutos e autarquias.svg";
import Perguntas_frequentes from "../../assets/images/icones/icones_barra lateral__perguntas frequentes.svg";
import Ultimas_noticias from "../../assets/images/icones/icones_barra lateral__ultimas noticias.svg";
import Plano_municipal_educacao from "../../assets/images/icones/plano_plurianual.svg";
import Plano_municipal_saude from "../../assets/images/icones/Home_botoes_planosaude.svg";
import Mapa_do_site from "../../assets/images/icones/icones_barra lateral__mapa do site.svg";
import promae from "../../assets/images/icones/relatorio_resumido.svg"
import { FaMoneyBillWave } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi"
import CustomAccordion from "../CustomAccordion";
import { useState } from "react";
import AccordionMenuItem from "../MenuAcordion";
import { AiOutlineGlobal } from "react-icons/ai";



function CardHome() {
  const [isExpanded, setIsExpanded] = useState(false);
  const titulo = "O que é a Lei de Acesso à Informação (LAI)?"; 
  const columnLayout = () => {
    if (window.innerWidth <= 480) {
      return "1fr";
    } else if (window.innerWidth <= 768) {
      return "1fr 1fr";
    } else {
      return "repeat(3, 1fr)";
    }
  };

  const templateColumns = columnLayout();

  const menuItemCicloOrcamentario = {
    title: "Ciclo Orçamentário",
    imageURL: Ciclo_orcamentario.src, // Substitua pelo caminho correto
   
    link: "/ciclo-orcamentario",
    backgroundColor: "blue.500",
    showExtraLinks: true,
    extraLinks: [
      { label: "Ciclo Orçamentário - Início", url: "/ciclo-orcamentario/" },
      { label: "Plano Plurianual", url: "/ciclo-orcamentario/plurianual" },
      { label: "Diretrizes Orçamentárias", url: "/ciclo-orcamentario/diretrizes-orcamentarias" },
      { label: "Lei Orcamentária Anual", url: "/ciclo-orcamentario/lei-orcamentaria-anual" },
      { label: "Relatório de Gestão Fiscal", url: "/ciclo-orcamentario/relatorio-gestao-fiscal" },
      { label: "Relatório Resumido", url: "/ciclo-orcamentario/relatorio-resumido" },
      { label: "Balanços Anuais", url: "/ciclo-orcamentario/balancos-anuais" },
      { label: "Pareceres do Tribunal", url: "/ciclo-orcamentario/pareceres-do-tribunal" },
      { label: "Aprovação de Contas pelo Legislativo", url: "http://www.cmmc.com.br/paginas/contas_do_executivo_municipal/" },
      { label: "Prestação de Contas à CMMC", url: "/ciclo-orcamentario/prestacao-de-contas" },
      { label: "Desonerações/ Renúncia de Receita", url: "/ciclo-orcamentario/desoneracoes-renuncias" },
    ],
  };

  const menuItemExecucacoOrcamentaria =  {
    title: "Execução Orçamentária",
    imageURL: Gestao_orcamentaria.src,
        link: "/gestao-orcamentaria",
    backgroundColor: "blue.500",
    showExtraLinks: true,
    extraLinks: [
      { label: "Execução  Orçamentária- Início", url: "/gestao-orcamentaria/" },
      { label: "Receitas Gerais", url: "/gestao-orcamentaria/receitas" },
      {
        label: "Emendas Parlamentares",
        url: "/gestao-orcamentaria/receitas/receitas-emendas",
      },
      
      {
        label: "Despesas Gerais",
        url: "/gestao-orcamentaria/despesas/despesas-gerais",
      },
      {
        label: "Emendas Parlamentares",
        url: "/gestao-orcamentaria/despesas/despesas-emendas",
      },
      
      {
        label: "Propaganda e Publicidade",
        url: "/gestao-orcamentaria/despesas/propaganda",
      },
      {
        label: "Subvenções e Terceiro Setor",
        url: "/gestao-orcamentaria/despesas/subvencoes",
      },
      {
        label: "Adiantamentos",
        url: "/gestao-orcamentaria/despesas/adiantamentos",
      },
      {
        label: "Restos a Pagar",
        url: "/gestao-orcamentaria/despesas/despesas-restos",
      },
      {
        label: "Ordem Cronológica de Pagamentos",
        url: "/gestao-orcamentaria/despesas/pagamentos",
      },
      
      {
        label: "Divida ativa",
        url: "/gestao-orcamentaria/divida-ativa",
      },
      {
        label: "Incentivos Fiscais",
        url: "/gestao-orcamentaria/incentivos-fiscais",
      },
      {
        label: "Fundos Municipais",
        url: "/gestao-orcamentaria/despesas/fundos-municipais",
      },
    ],
  }

const menuItemExecucacaoExtra = {
  title: "Execução Extra Orçamentária",
  imageURL: Gestao_extra_orcamentaria.src,
  link: "/gestao-extra-orcamentaria",
  backgroundColor: "blue.500",
  showExtraLinks: true,
  extraLinks: [
    {
      label: "Execução Extra Orçamentária - Início",
      url: "/gestao-extra-orcamentaria/",
    },
    {
      label: "Receitas Extra Orçamentárias",
      url: "/gestao-extra-orcamentaria/receitas",
    },
    {
      label: "Despesas Extra Orçamentárias",
      url: "/gestao-extra-orcamentaria/despesas",
    },
  ],

}

const menuItemConvenios = {
  title: "Convênios e Transferências",
  imageURL: Convenios_transferencias.src,
  link: "/link2",
  backgroundColor: "blue.500",
  showExtraLinks: true,
  extraLinks: [
    { label: "Convênios e Transferências - Início", url: "/convenios-transferencias/" },
   // {label: "Contratos de Gestão",url: "/convenios-transferencias/contratos-gestao",},
    { label: "Recebidos", url: "/convenios-transferencias/recebidos" },
    //{ label: "Repasses", url: "/convenios-transferencias/repasses" },
  ],
}
const menuPromae = {
  title: "PROMAE",
  imageURL: promae.src,
  link: "/promae",
  backgroundColor: "blue.500",
  showExtraLinks: true,
  extraLinks: [],
}

const menuItemCovid = {
  title: "Execução Orçamentária Covid 19",
  imageURL: Gestao_orcamentaria_covid.src,
  link: "/gestao-orcamentaria-covid",
  backgroundColor: "blue.500",
  showExtraLinks: true,
  extraLinks: [
    { label: "Execução Orçamentária Covid 19 - Início", url: "covid/" },
    { label: "Receitas", url: "covid/receitas" },
    { label: "Despesas", url: "covid/despesas" },
    { label: "Compras COVID-19", url: "http://covid19.pmmc.com.br/" },
    
  ],
}

const menuItemPagamento = {
  title: "Consulta de Fornecedores a Pagamentos",
  imageURL: Gestao_extra_orcamentaria.src,
  description: "Descrição 3",
  link: "http://consultacompras.pmmc.com.br/pagamento-fornecedor",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [
    {
      label: "Consulta de Fornecedores a Pagamentos",
      url: "http://consultacompras.pmmc.com.br/pagamento-fornecedor",
    },
   
  ],
}

const menuItemContratos =  {
  title: "Contratos e Atas ",
  imageURL: Acordos_termos.src,
  //description: "Descrição 1",
  link: "/contratos-atas",
  backgroundColor: "blue.500",
  showExtraLinks: true,
  extraLinks: [
    {
      label: "Contratos, Contratos de Gestão e Atas  - Início",
      url: "/contratos/",
    },
    
  { label: "Contratos", 
    url: "/contratos-atas/contratos" 
  },
  { label: "Contratos de Gestão", 
    url: "/contratos-atas/contratos-gestao" 
  },

  { label: "Atas", 
    url: "/contratos-atas/atas" 
  },
 
  { label: "Relação dos Gestores de contratos encerrados", 
    url: "/contratos-atas/relacao-fiscais-encerrados" 
  },
  { label: "Relação dos Gestores de contratos vigentes", 
    url: "/contratos-atas/relacao-fiscais-vigentes" 
  },
  ],
}
const  menuAcordos = {
  title: "Acordos e Termos",
      imageURL: Acordos_termos.src,
      description: "Descrição 1",
      link: "/acordos-termos",
      backgroundColor: "white",
      showExtraLinks: true,
      extraLinks: [
       
        {
          label: "Acordo de Cooperação",
          url: "/acordos-termos/acordo-de-cooperacao",
        },
        {
          label: "Termo de Colaboração",
          url: "/acordos-termos/termo-de-colaboracao",
        },
        { label: "Termo de Fomento", 
        url: "/acordos-termos/termo-de-fomento" 
      },
     
      ],

}

const menuItemLicitacoes = {
  title: "Compras Públicas",
  imageURL: Compras_publicas.src,
 // description: "Descrição 2",
  link: "/compras-publicas",
  backgroundColor: "blue.500",
  showExtraLinks: true,
  extraLinks: [
    { label: "Compras Públicas - Início", url: "/compras-publicas/" },
    { label: "Licitações", url: "/compras-publicas/licitacoes" },
    { label: "Licitações Portal Antigo", url: "https://licitacao-mgcon.mogidascruzes.sp.gov.br/" },
    {
      label: "Pregão Eletrônico",
      url: "/compras-publicas/pregao-eletronico",
    },
    {
      label: "Cadastro de Fornecedor",
      url: "/compras-publicas/cadastro-fornecedor",
    },
    {
      label: "Portal Nacional de Contratações Públicas",
      url: "https://pncp.gov.br/app/editais?q=&status=recebendo_proposta&pagina=1",
    },
  ],
}

const menuGestaoPessoas = {
  title: "Folha de Pagamento ",
  imageURL: FolhaPagamento.src,
 // description: "Descrição 2",
  link: "/gestao-de-pessoas/folha-pagamento",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuCargosSalarios = {
  title: "Cargos e Salários ",
  imageURL: CargosSalarios.src,
 // description: "Descrição 2",
  link: "/gestao-de-pessoas/cargos-e-salarios",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuCargaHoraria= {
  title: "Carga Horária ",
  imageURL: CargosSalarios.src,
 // description: "Descrição 2",
  link: "/gestao-de-pessoas/carga-horaria",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuDiarias= {
  title: "Diárias ",
  imageURL: Diarias.src,
 // description: "Descrição 2",
  link: "/gestao-de-pessoas/diarias-viagens",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuViagens= {
  title: "Adiantamento e Hospedagem",
  imageURL: Viagens.src,
 // description: "Descrição 2",
  link: "/gestao-de-pessoas/adiantamento-hospedagem",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuConcursoPublico= {
  title: "Concurso Público ",
  imageURL: FolhaPagamento.src,
 // description: "Descrição 2",
  link: "/gestao-de-pessoas/concurso-publico",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuEstruturaOrg= {
  title: "Estrutura Organizacional ",
  imageURL: FolhaPagamento.src,
 // description: "Descrição 2",
  link: "http://leismunicipa.is/0ji28",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuPerfil= {
  title: "Perfil do Município",
  imageURL: Perfil_municipio.src,
 // description: "Descrição 2",
  link: "/perfil-do-municipio",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuMapadoSite= {
  title: "Mapa do Site",
  imageURL: Mapa_do_site.src,
 // description: "Descrição 2",
  link: "/mapa-do-site",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuFeiras= {
  title: "Feiras, Mercado Municipal e Mercado do Produto",
  imageURL: Mapa_do_site.src,
 // description: "Descrição 2",
  link: "/permissionarios",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuAutarquias = {
  title: "Instituto e Autarquias",
  imageURL: Instituto_autarquia.src,
  description: "Descrição 3",
  link: "/instituto-autarquia",
  backgroundColor: "blue.500",
  showExtraLinks: true,
  extraLinks: [
    {
      label: "Instituto e Autarquias - Início",
      url: "/instituto-autarquia/",
    },
    {
      label: "Transparência SEMAE",
      url: "http://www.transparenciasemae.pmmc.com.br/",
    },
    {
      label: "Transparência IPREM",
      url: "https://iprem.mogidascruzes.sp.gov.br/?page_id=1542",
    },
  ],
}

const menuPatrimonio= {
  title: "Patrimônio",
  imageURL: Patrimonio.src,
 // description: "Descrição 2",
  link: "/permissionarios",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuPerguntasFrequentes= {
  title: "Perguntas Frequentes",
  imageURL: Perguntas_frequentes.src,
 // description: "Descrição 2",
  link: "/perguntas-frequentes",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuEquipamentos= {
  title: "Relação de Unidades e Equipamentos",
  imageURL: FolhaPagamento.src,
 // description: "Descrição 2",
  link: "https://www.mogidascruzes.sp.gov.br/unidades-e-equipamentos/todos-os-assuntos",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuRadares= {
  title: "Controle de Radares",
  imageURL: IconeRadar.src,
 // description: "Descrição 2",
  link: "/controle-de-radares",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuAgenda= {
  title: "Agenda Aberta",
  imageURL: Agenda_aberta.src,
 // description: "Descrição 2",
  link: "/agenda-aberta",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [ {
    label: "Prefeita - Mara Bertaiolli",
    url: "/agenda-aberta/agenda-prefeita",
  },
  {
    label: "Vice Prefeito - Teo Cusatis",
    url: "/agenda-aberta/agenda-viceprefeito",
  }, 
],
}

const menuVeiculosOficiais= {
  title: "Veículos oficiais",
  imageURL: IconeVeiculo.src,
 // description: "Descrição 2",
  link: "/veiculos-oficiais",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuOSs= {
  title: "Organizações Sociais",
  imageURL: IconeOS.src,
 // description: "Descrição 2",
  link: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude-e-bem-estar/organizacoes-sociais",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuConselhos= {
  title: "Conselhos municipais",
  imageURL: IconeOS.src,
 // description: "Descrição 2",
  link: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude-e-bem-estar/organizacoes-sociais",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [
    { label: "Abastecimento", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-abastecimento-de-alimentos-e-bens-de-consumo/institucional" },
  { label: "Alimentação Escolar", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-alimentacao-escolar/institucional" },
  { label: "Assistência Social", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-assistencia-social/institucional" },
  { label: "Cidade", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-da-cidade/institucional" },
  { label: "Criança e Adolescente", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-dos-direitos-da-crianca-e-do-adolescente/institucional" },
  { label: "Cultura", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-cultura/institucional" },
  { label: "Desenvolvimento Rural", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-desenvolvimento-rural/institucional" },
  { label: "Desporto", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-do-desporto/institucional" },
  { label: "Educação", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-educacao/institucional" },
  { label: "Fundeb", url: "https://www.mogidascruzes.sp.gov.br/pagina/fundo-de-manutencao-e-desenvolvimento-da-educacao-basica/institucional" },
  { label: "Idoso", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-do-idoso/institucional" },
  { label: "Igualdade Racial", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-promocao-da-igualdade-racial/institucional" },
  { label: "Inovação e Tecnologia", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-inovacao-e-tecnologia/institucional" },
  { label: "Meio Ambiente", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-mogiano-de-meio-ambiente/institucional" },
  { label: "Mobilidade Urbana", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-mobilidade-urbana/institucional" },
  { label: "Mulher", url: "/pagina/conselho-da-mulher/institucional" },
  { label: "Parcerias Público-Privadas", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-gestor-de-parcerias-publico-privadas/institucional" },
  { label: "Patrimônio Histórico", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-preservacao-do-patrimonio-historico-cultural-e-artistico/institucional" },
  { label: "Pessoa com Deficiência", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-para-assuntos-da-pessoa-com-deficiencia/institucional" },
  { label: "Políticas Sobre Drogas", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-politicas-sobre-drogas/institucional" },
  { label: "Saúde", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-saude/institucional" },
  { label: "Segurança Alimentar", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-seguranca-alimentar/institucional" },
  { label: "Segurança Pública", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-seguranca-publica/institucional" },
  { label: "Turismo", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-de-turismo/institucional" },
  { label: "Tutelar", url: "https://www.mogidascruzes.sp.gov.br/pagina/conselho-tutelar/institucional" }
  ],
}



const menuPortalObras= {
  title: "Portal de Obras",
  imageURL:Controle_de_obras.src,
 // description: "Descrição 2",
  link: "/controle-de-obras",
  backgroundColor: "blue.500",
  showExtraLinks: true,
  extraLinks: [ { label: "Pesquise Obras", url: "/controle-de-obras/pesquisar-obras" },
    { label: "Versão Antiga", url: "/controle-de-obras/obras-publicas" },
],
}

const menuVisuas= {
  title: "VISUAS - Visor do Sistema Único de Assistência Social",
  imageURL: IconeSsocial.src,
  link: "https://visuas.mogidascruzes.sp.gov.br/",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [ ],
}

const menuGeomogi= {
  title: "GeoMogi",
  imageURL: IconeGlobo.src,
  link: "https://geomogi.mogidascruzes.sp.gov.br/",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [ ],
}

const menuOnibusMunicipais= {
  title: "Ônibus municipais",
  imageURL: IconeOnibus.src,
  link: "https://geomogi.mogidascruzes.sp.gov.br/",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [ ],
}
const menuOuvidoria= {
  title: "Ouvidoria - Colab",
  imageURL: Ouvidoria.src,
  link: "https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/colab",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [ ],
}

const menuAgendaCidade= {
  title: "Agenda da Cidade",
  imageURL: Agenda_aberta.src,
  link: "https://www.mogidascruzes.sp.gov.br/agenda-da-cidade/atracoes",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [ ],
}

const menuPontosTuristicos= {
  title: "Pontos Turísticos",
  imageURL: IconeMap.src,
  link: "https://www.mogidascruzes.sp.gov.br/pontos-turisticos/todos-os-assuntos",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [ ],
}

const menuRelatorioGestao= {
  title: "Relatórios de Gestão",
  imageURL: promae.src,
 // description: "Descrição 2",
  link: "/relatorio-gestao",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}
 
const menuPlanosMunicipais= {
  title: "Planos Municipais",
  imageURL: Plano_municipal_educacao.src,
 // description: "Descrição 2",
  link: "/planos-municipais",
  backgroundColor: "blue.500",
  showExtraLinks: true,
  extraLinks: [
    { label: "Plano Municipal de Saúde", url: "planos-municipais/plano-municipal-saude" },
    { label: "Plano Municipal de Educação", url: "planos-municipais/plano-municipal-educacao" },
    { label: "Planos Municipais Diversos", url: "planos-municipais/plano-municipal-diversos" },
],
}

const menuPoliticaseProgramas= {
  title: "Políticas e Programas",
  imageURL: Plano_municipal_educacao.src,
 // description: "Descrição 2",
  link: "/politicas-programas",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [
   
],
}

const menuLGPD = {
  title: "LGPD",
  imageURL: IconeLeis.src,
 // description: "Descrição 2",
  link: "/leis-decretos-portarias/lgpd",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [
   
],
}

const menuGovernoAberto = {
  title: "Governo Aberto",
  imageURL: IconeLeis.src,
 // description: "Descrição 2",
  link: "/governo-aberto",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [
    {label: "Governo Aberto - Início", url:"/governo-aberto/"},
        {label: "BORALAI", url:"/governo-aberto/boralai"},
        { label: "LIGA - Laboratório de Inovação em Governo Aberto", url: "https://liga.sp.gov.br/" },
        {label: "Prestação de Contas Simplificada", url:"/governo-aberto/prestacao-contas"},
        {label: "Portas de Participação Cidadã", url:"/governo-aberto/participacao-cidada"},
],
}

const menuGovernoDigital = {
  title: "Governo Digital",
  imageURL: IconeLeis.src,
 // description: "Descrição 2",
  link: "/governo-digital",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}

const menuDiarioOficial = {
  title: "Diário Oficial",
  imageURL: IconeLeis.src,
 // description: "Descrição 2",
  link: "#",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [],
}
const menuLai = {
  title: "LAI - Lei de Acesso à Informação",
  imageURL: IconeLeis.src,
 // description: "Descrição 2",
  link: "/acesso-a-informacao",
  backgroundColor: "blue.500",
  showExtraLinks: true,
  extraLinks: [ {
    label: "LAI - Lei de Acesso à Informação - Início",
    url: "/acesso-a-informacao/",
  },
  {
    label: "Solicitar Acesso à Informação",
    url: "/acesso-a-informacao/acesso-informacao",
  },
  {
    label: "Relatório de Demandas LAI",
    url: "/acesso-a-informacao/relatorio-demanda",
  },
  {
    label: "Acompanhe os dados genéricos dos pedidos",
    url: "https://mogidascruzes.1doc.com.br/b.php?pg=wp/wp&itd=3&ss=5",
  },
  {
    label: "Painel de Acompanhamento da LAI 2023",
    url: "https://app.powerbi.com/view?r=eyJrIjoiY2ZmODAzZDUtMDE2YS00ZWYzLWJhZGQtMWE4Nzc3OWQyMDgxIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
  },
  {
    label: "Painel de Acompanhamento da LAI2024",
    url: "https://app.powerbi.com/view?r=eyJrIjoiY2RiMWYxZWQtN2NlOS00NTNjLTkyMGEtZmNiOWVhMmYzNTJiIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
  },
],
}

const menuLeisDecretos = {
  title: "Leis, Decretos e Portarias",
  imageURL: IconeLeis.src,
 // description: "Descrição 2",
  link: "/leis-decretos-portarias",
  backgroundColor: "blue.500",
  showExtraLinks: false,
  extraLinks: [
    {
      label: "Leis, Decretos e Portarias - Início",
      url: "/leis-decretos-portarias/",
    },
    {
      label: "Leis e Decretos Municipais",
      url: "/leis-decretos-portarias/protocolo-geral",
    },
    {
      label: "Portarias",
      url: "https://ged.mogidascruzes.sp.gov.br/weblink7/Browse.aspx",
    },

  ],
}


  return (
   <> 
     <Accordion allowToggle>
      <AccordionItem border="2px solid black" borderRadius="md" mx='80px' boxShadow="lg">
        <h2>
          <AccordionButton  >
          <Box flex="1" textAlign="left" fontWeight="bold" display="flex" alignItems="center" gap={8} fontSize='20px' _expanded={{ filter: "invert(1)" }}>
           <Image  
           src={IconeOrcamento} 
           width={70} 
           alt="" 
          
           />    ORÇAMENTO
            </Box>
            <AccordionIcon _expanded={{ color: "white" }} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={8}>
          <Grid
            templateColumns={templateColumns}
            gap={10}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
           <AccordionMenuItem  {...menuItemCicloOrcamentario} />
           <AccordionMenuItem {...menuItemExecucacoOrcamentaria} />
           <AccordionMenuItem {...menuItemExecucacaoExtra} />
            
          </Grid>

          <Grid
            templateColumns={templateColumns}
            gap={10}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          > 
          <AccordionMenuItem {...menuItemCovid} />
          <AccordionMenuItem {...menuItemConvenios} />
          <AccordionMenuItem {...menuItemPagamento} />
          </Grid>

          <Grid
            templateColumns={templateColumns}
            gap={10}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          > 
          <AccordionMenuItem {...menuPromae} />
         
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    
{/* ***************Acordion servidores********************** */}

<Accordion allowToggle>
      <AccordionItem border="2px solid black" borderRadius="md" mx='80px' boxShadow="lg" >
        <h2>
          <AccordionButton  >
          <Box flex="1" textAlign="left" fontWeight="bold" display="flex" alignItems="center" gap={8} fontSize='20px' _expanded={{ filter: "invert(1)" }}>
           <Image  
           src={IconeContratos} 
           width={70} 
           alt="" 
          
           />   CONTRATOS E LICITAÇÕES
            </Box>
            <AccordionIcon _expanded={{ color: "white" }} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
            <AccordionMenuItem {...menuItemContratos} />
            <AccordionMenuItem {...menuItemLicitacoes} />
            <AccordionMenuItem {...menuAcordos} />
            
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>


    
<Accordion allowToggle >
      <AccordionItem border="2px solid black" borderRadius="md" mx='80px' boxShadow="lg">
        <h2>
          <AccordionButton  >
          <Box flex="1" textAlign="left" fontWeight="bold" display="flex" alignItems="center" gap={8} fontSize='20px' _expanded={{ filter: "invert(1)" }}>
           <Image  
           src={IconeServidores} 
           width={70} 
           alt="" 
          
           />    SERVIDORES
            </Box>
            <AccordionIcon _expanded={{ color: "white" }} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
            mb='15px'
          >
           <AccordionMenuItem {...menuGestaoPessoas} />
           <AccordionMenuItem {...menuCargosSalarios} />
           <AccordionMenuItem {...menuCargaHoraria} />
            
          </Grid>

          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
           <AccordionMenuItem {...menuDiarias} />
           <AccordionMenuItem {...menuViagens} />
           <AccordionMenuItem {...menuConcursoPublico} />
            
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>

    {/* ***************Acordion adm publica********************** */}
<Accordion allowToggle>
      <AccordionItem border="2px solid black" borderRadius="md" mx='80px' boxShadow="lg">
        <h2>
          <AccordionButton  >
          <Box flex="1" textAlign="left" fontWeight="bold" display="flex" alignItems="center" gap={8} fontSize='20px' _expanded={{ filter: "invert(1)" }}>
           <Image  
           src={IconeAdmMunicipal} 
           width={70} 
           alt="" 
          
           />    ADMINISTRAÇÃO MUNICIPAL
            </Box>
            <AccordionIcon _expanded={{ color: "white" }} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
             mb='15px'
          >
          <AccordionMenuItem {...menuEstruturaOrg} />
          <AccordionMenuItem {...menuPerfil}/>
          <AccordionMenuItem {...menuMapadoSite}/>
            
          </Grid>

          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
             mb='15px'
          >
          <AccordionMenuItem {...menuFeiras} />
          <AccordionMenuItem {...menuAutarquias}/>
          <AccordionMenuItem {...menuPatrimonio}/>
            
          </Grid>

          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
             mb='15px'
          >
          <AccordionMenuItem {...menuPerguntasFrequentes} />
          <AccordionMenuItem {...menuEquipamentos}/>
            
          </Grid>

        </AccordionPanel>
      </AccordionItem>
    </Accordion>

     {/* ***************Acordion adm publica********************** */}
<Accordion allowToggle>
      <AccordionItem border="2px solid black" borderRadius="md" mx='80px' boxShadow="lg">
        <h2>
          <AccordionButton  >
          <Box flex="1" textAlign="left" fontWeight="bold" display="flex" alignItems="center" gap={8} fontSize='20px' _expanded={{ filter: "invert(1)" }}>
           <Image  
           src={IconeSocial} 
           width={70} 
           alt="" 
          
           />    CONTROLE SOCIAL
            </Box>
            <AccordionIcon _expanded={{ color: "white" }} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
           <AccordionMenuItem {...menuRadares} />
          <AccordionMenuItem {...menuAgenda}/>
          <AccordionMenuItem {...menuVeiculosOficiais}/>
            
          </Grid>

          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
           <AccordionMenuItem {...menuOSs} />
          <AccordionMenuItem {...menuConselhos}/>
            
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>

     {/* ***************Acordion apps e portais********************** */}
<Accordion allowToggle>
      <AccordionItem border="2px solid black" borderRadius="md" mx='80px' boxShadow="lg">
        <h2>
          <AccordionButton  >
          <Box flex="1" textAlign="left" fontWeight="bold" display="flex" alignItems="center" gap={8} fontSize='20px' _expanded={{ filter: "invert(1)" }}>
           <Image  
           src={IconePortais} 
           width={70} 
           alt="" 
          
           />   APLICATIVOS E PORTAIS
            </Box>
            <AccordionIcon _expanded={{ color: "white" }} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
            <AccordionMenuItem {...menuPortalObras} />
          <AccordionMenuItem {...menuVisuas}/>
          <AccordionMenuItem {...menuGeomogi}/>
            
          </Grid>

          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
            <AccordionMenuItem {...menuOnibusMunicipais} />
          <AccordionMenuItem {...menuOuvidoria}/>
          <AccordionMenuItem {...menuAgendaCidade}/>
            
          </Grid>

          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
            <AccordionMenuItem {...menuPontosTuristicos} />
         
            
          </Grid>

        </AccordionPanel>
      </AccordionItem>
    </Accordion>

      {/* ***************Acordion apps e portais********************** */}
<Accordion allowToggle>
      <AccordionItem border="2px solid black" borderRadius="md" mx='80px'boxShadow="lg">
        <h2>
          <AccordionButton  >
          <Box flex="1" textAlign="left" fontWeight="bold" display="flex" alignItems="center" gap={8} fontSize='20px' _expanded={{ filter: "invert(1)" }}>
           <Image  
           src={IconePlanejamento} 
           width={70} 
           alt="" 
          
           />   PLANEJAMENTO E PRESTAÇÃO DE CONTAS  
            </Box>
            <AccordionIcon _expanded={{ color: "white" }} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
          <AccordionMenuItem {...menuRelatorioGestao} />
          <AccordionMenuItem {...menuPlanosMunicipais} />
          <AccordionMenuItem {...menuPoliticaseProgramas} />
            
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>

    {/* ***************Acordion apps e portais********************** */}
<Accordion allowToggle>
      <AccordionItem border="2px solid black" borderRadius="md" mx='80px' boxShadow="lg">
        <h2>
          <AccordionButton  >
          <Box flex="1" textAlign="left" fontWeight="bold" display="flex" alignItems="center" gap={8} fontSize='20px' _expanded={{ filter: "invert(1)" }}>
           <Image  
           src={IconesGovernoAberto} 
           width={70} 
           alt="" 
          
           />    
INICIATIVAS DE GOVERNO ABERTO            
            </Box>
            <AccordionIcon _expanded={{ color: "white" }} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
        <AccordionMenuItem {...menuLGPD}/>
        <AccordionMenuItem {...menuGovernoAberto}/>
        <AccordionMenuItem {...menuGovernoDigital}/>
            
          </Grid>
          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
        <AccordionMenuItem {...menuDiarioOficial}/>
        
            
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>

     {/* ***************Acordion leis e decretos********************** */}
<Accordion allowToggle>
      <AccordionItem border="2px solid black" borderRadius="md" mx='80px' boxShadow="lg">
        <h2>
          <AccordionButton  >
          <Box flex="1" textAlign="left" fontWeight="bold" display="flex" alignItems="center" gap={8} fontSize='20px' _expanded={{ filter: "invert(1)" }}>
           <Image  
           src={IconeLeisDecretos} 
           width={70} 
           alt="" 
          
           />    
LEIS E DECRETOS        
            </Box>
            <AccordionIcon _expanded={{ color: "white" }} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid
            templateColumns={templateColumns}
            gap={4}
            width={isMobile ? "100%" : "80%"}
            maxWidth={"1280px"}
            margin="0 auto"
            padding="0 15px"
          >
        <AccordionMenuItem {...menuLai}/>
        <AccordionMenuItem {...menuLeisDecretos}/>
       
            
          </Grid>
       
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    
    </>
  );
}

export default CardHome;
