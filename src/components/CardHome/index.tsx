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
import Controle_de_obras from "../../assets/images/icones/Home_botoes_obras.svg";
import Controle_de_radares from "../../assets/images/icones/Home_botoes_radares.svg";
import Agenda_aberta from "../../assets/images/icones/icones_barra lateral__agenda aberta.svg";
import Convenios_transferencias from "../../assets/images/icones/Home_botoes_conveniosetransferencias.svg";
import Leis_decretos_portarias from "../../assets/images/icones/Home_botoes_leisedecretos.svg";
import Acesso_a_informacao from "../../assets/images/icones/LAI__acesso a informação.svg";
import Ouvidoria from "../../assets/images/icones/Home_botoes_ouvidoria.svg";
import Instituto_autarquia from "../../assets/images/icones/icones_barra lateral__institutos e autarquias.svg";
import Perguntas_frequentes from "../../assets/images/icones/icones_barra lateral__perguntas frequentes.svg";
import Ultimas_noticias from "../../assets/images/icones/icones_barra lateral__ultimas noticias.svg";
import Plano_municipal_educacao from "../../assets/images/icones/Home_botoes_planoeducacao.svg";
import Plano_municipal_saude from "../../assets/images/icones/Home_botoes_planosaude.svg";
import Mapa_do_site from "../../assets/images/icones/icones_barra lateral__mapa do site.svg";
import promae from "../../assets/images/icones/relatorio_resumido.svg"
import Video from "../Videos";

function CardHome() {
  const url_video = "https://www.youtube.com/embed/F4kk9FqoRHw?list=PLr6uMRVxi5CZDYEttIUVaIzsm07L7qI6a";
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


  const cardData = [
    {
      title: "Perfil do Município",
      imageURL: Perfil_municipio.src,
      description: "Descrição 1",
      link: "/perfil-do-municipio",
      backgroundColor: "transparent",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Portal de Obras",
      imageURL: Controle_de_obras.src,
      description: "Descrição 3",
      link: "/controle-de-obras",
      backgroundColor: "green",
      showExtraLinks: true,
      extraLinks: [
        { label: "Portal de Obras", url: "/controle-de-obras/inicio" },
        { label: "Pesquise Obras", url: "/controle-de-obras/pesquisar-obras" },
        { label: "Versão Antiga", url: "/controle-de-obras/obras-publicas" },
      ],
    },

    {
      title: "Agenda Aberta",
      imageURL: Agenda_aberta.src,
      description: "Descrição 3",
      link: "/agenda-aberta",
      backgroundColor: "green",
      showExtraLinks: true,
      extraLinks: [
        {
          label: "Agenda Aberta - Início",
          url: "/agenda-aberta/",
        },
        {
          label: "Prefeito - Caio Cunha",
          url: "/agenda-aberta/agenda-prefeito",
        },
        {
          label: "Vice Prefeita - Priscila Yamagami",
          url: "/agenda-aberta/agenda-coprefeita",
        }, 
        {
          label: "Chefe de Gabinete - Gabriel Bastianelli",
          url: "/agenda-aberta/agenda-chefe-gabinete",
        }, 
        {
          label: "Demais Autoridades",
          url: "/agenda-aberta/agenda-secretarios",
        }, 
      ],
    },

    {
      title: "Pagamentos a Fornecedores",
      imageURL: Gestao_extra_orcamentaria.src,
      description: "Descrição 3",
      link: "http://consultacompras.pmmc.com.br/pagamento-fornecedor",
      backgroundColor: "green",
      showExtraLinks: false,
      extraLinks: [
        {
          label: "Receitas Extra Orçamentárias",
          url: "/gestao-extra-orcamentaria/receitas",
        },
        {
          label: "Despesas Extra Orçamentárias",
          url: "/gestao-extra-orcamentaria/despesas",
        },
      ],
    },

    {
      title: "Ciclo Orçamentário",
      imageURL: Ciclo_orcamentario.src,
      description: "Descrição 2",
      link: "/ciclo-orcamentario",
      backgroundColor: "blue",
      showExtraLinks: true,
      extraLinks: [
        { label: "Ciclo Orçamentário - Início", url: "/ciclo-orcamentario/" },  
        { label: "Plano Plurianual", url: "/ciclo-orcamentario/plurianual" },
        {
          label: "Diretrizes Orçamentárias",
          url: "/ciclo-orcamentario/diretrizes-orcamentarias",
        },
        {
          label: "Lei Orcamentária Anual",
          url: "/ciclo-orcamentario/lei-orcamentaria-anual",
        },
        {
          label: "Relatório de Gestão Fiscal",
          url: "/ciclo-orcamentario/relatorio-gestao-fiscal",
        },
        {
          label: "Relatório Resumido",
          url: "/ciclo-orcamentario/relatorio-resumido",
        },
        {
          label: "Balanços Anuais",
          url: "/ciclo-orcamentario/balancos-anuais",
        },
        {
          label: "Pareceres do Tribunal",
          url: "/ciclo-orcamentario/pareceres-do-tribunal",
        },
        {
          label: "Aprovação de Contas pelo Legislativo",
          url: "http://www.cmmc.com.br/paginas/contas_do_executivo_municipal/ ",
        },
        {
          label: "Prestação de Contas à CMMC",
          url: "/ciclo-orcamentario/prestacao-de-contas ",
        },
        {
          label: "Desonerações/ Renúncia de Receita",
          url: "/ciclo-orcamentario/desoneracoes-renuncias",
        },
      ],
    },

    {
      title: "Gestão Orçamentária",
      imageURL: Gestao_orcamentaria.src,
      description: "Descrição 3",
      link: "/gestao-orcamentaria",
      backgroundColor: "transparent",
      showExtraLinks: true,
      extraLinks: [
        { label: "Gestão  Orçamentária- Início", url: "/gestao-orcamentaria/" },
        { label: "Receitas Gerais", url: "/gestao-orcamentaria/receitas" },
        {
          label: "Emendas Parlamentares",
          url: "/gestao-orcamentaria/receitas/receitas-emendas",
        },
        {
          label: "Multas de Trânsito",
          url: "/gestao-orcamentaria/receitas/multa-transito",
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
          label: "Multas de Trânsito",
          url: "/gestao-orcamentaria/despesas/despesas-multas-transito",
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
          label: "Restos a Pagar",
          url: "/gestao-orcamentaria/despesas/despesas-restos",
        },
        {
          label: "Pagamentos",
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
      ],
    },


    {
      title: "Gestão Orçamentária - Covid-19",
      imageURL: Gestao_orcamentaria_covid.src,
      description: "Descrição 1",
      link: "/gestao-orcamentaria-covid",
      backgroundColor: "white",
      showExtraLinks: true,
      extraLinks: [
        { label: "Gestão Orçamentária - Covid-19 - Início", url: "covid/" },
        { label: "Receitas", url: "covid/receitas" },
        { label: "Despesas", url: "covid/despesas" },
      ],
    },

    {
      title: "Gestão Extra Orçamentária",
      imageURL: Gestao_extra_orcamentaria.src,
      description: "Descrição 3",
      link: "/gestao-extra-orcamentaria",
      backgroundColor: "green",
      showExtraLinks: true,
      extraLinks: [
        {
          label: "Gestão Extra Orçamentária - Início",
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
    },
    
    {
      title: "Promae",
      imageURL: promae.src,
      description: "Descrição 3",
      link: "/promae",
      backgroundColor: "green",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },


    {
      title: "Controle de Radares",
      imageURL: Controle_de_radares.src,
      description: "Descrição 2",
      link: "/controle-de-radares",
      backgroundColor: "blue",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },

    {
      title: "Compras Públicas",
      imageURL: Compras_publicas.src,
      description: "Descrição 2",
      link: "/compras-publicas",
      backgroundColor: "blue",
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
    },

    {
      title: "Gestão de Pessoas",
      imageURL: Gestao_de_pessoas.src,
      description: "Descrição 3",
      link: "/gestao-de-pessoas",
      backgroundColor: "green",
      showExtraLinks: true,
      extraLinks: [
        {
          label: "Gestão de Pessoas - Início",
          url: "/gestao-de-pessoas/",
        },
        {
          label: "Folha de Pagamento",
          url: "/gestao-de-pessoas/folha-pagamento",
        },
        {
          label: "Passagens e locomoção",
          url: "/gestao-de-pessoas/passagens-locomocao",
        },
        {
          label: "Adiantamento e Hospedagem",
          url: "/gestao-de-pessoas/adiantamento-hospedagem",
        },
        {
          label: "Cargos e Salarios",
          url: "/gestao-de-pessoas/cargos-e-salarios",
        },
        {
          label: "Estrutura Organizacional",
          url: "/gestao-de-pessoas/estrutura-organizacional",
        },
        { 
          label: "Carga Horária", 
          url: "/gestao-de-pessoas/carga-horaria" },
        {
          label: "Concurso Público",
          url: "/gestao-de-pessoas/concurso-publico",
        },
        {
          label: "Diárias e Viagens",
          url: "/gestao-de-pessoas/diarias-viagens",
        },
      ],
    },

    {
      title: "Patrimônio",
      imageURL: Patrimonio.src,
      description: "Descrição 2",
      link: "/patrimonio",
      backgroundColor: "blue",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },

    {
      title: "Contratos, Termos e Atas de registro de preços",
      imageURL: Acordos_termos.src,
      description: "Descrição 1",
      link: "/acordos-termos",
      backgroundColor: "white",
      showExtraLinks: true,
      extraLinks: [
        {
          label: "Acordos e Termos - Início",
          url: "/acordos-termos/",
        },
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
      { label: "Contratos e Atas", 
        url: "/acordos-termos/contratos-atas" 
      },
      { label: "Contratos Gestão", 
        url: "/acordos-termos/contratos-gestao" 
      },
      { label: "Relação dos Gestores de contratos encerrados", 
        url: "/acordos-termos/relacao-fiscais-encerrados" 
      },
      { label: "Relação dos Gestores de contratos vigentes", 
        url: "/acordos-termos/relacao-fiscais-vigentes" 
      },
      ],
    },

    {
      title: "Convênios e Transferências",
      imageURL: Convenios_transferencias.src,
      description: "/convenios-transferencias",
      link: "/link2",
      backgroundColor: "blue",
      showExtraLinks: true,
      extraLinks: [
        { label: "Convênios e Transferências - Início", url: "/convenios-transferencias/" },
        {
          label: "Contratos de Gestão",
          url: "/convenios-transferencias/contratos-gestao",
        },
        { label: "Recebidos", url: "/convenios-transferencias/recebidos" },
        { label: "Repasses", url: "/convenios-transferencias/repasses" },
      ],
    },

    {
      title: "Leis, Decretos e Portarias",
      imageURL: Leis_decretos_portarias.src,
      description: "Descrição 3",
      link: "/leis-decretos-portarias",
      backgroundColor: "green",
      showExtraLinks: true,
      extraLinks: [
        {
          label: "Leis, Decretos e Portarias - Início",
          url: "/leis-decretos-portarias/",
        },
        {
          label: "Leis Municipais",
          url: "/leis-decretos-portarias/protocolo-geral",
        },
        {
          label: "Decretos e Portarias",
          url: "https://ged.mogidascruzes.sp.gov.br/weblink7/Browse.aspx",
        },
        { label: "LGPD", url: "/leis-decretos-portarias/lgpd" },
      ],
    },

    {
      title: "Instituto e Autarquias",
      imageURL: Instituto_autarquia.src,
      description: "Descrição 3",
      link: "/instituto-autarquia",
      backgroundColor: "green",
      showExtraLinks: true,
      extraLinks: [
        {
          label: "Instituto e Autarquias - Início",
          url: "/instituto-autarquia/",
        },
        {
          label: "Transparência SEMAE",
          url: "/instituto-autarquia/transparencia-semae",
        },
        {
          label: "Transparência IPREM",
          url: "/instituto-autarquia/transparencia-iprem",
        },
      ],
    },

    {
      title: "Ouvidoria",
      imageURL: Ouvidoria.src,
      description: "Descrição 3",
      link: "/ouvidoria",
      backgroundColor: "green",
      showExtraLinks: false,
      extraLinks: [
        { label: "Pesquisa de Satisfação", url: "/pesquisa-de-satisfacao" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },

    {
      title: "Perguntas Frequentes",
      imageURL: Perguntas_frequentes.src,
      description: "Descrição 2",
      link: "/perguntas-frequentes",
      backgroundColor: "blue",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },

    {
      title: "LAI - Lei de Acesso à Informação",
      imageURL: Leis_decretos_portarias.src,
      description: "Descrição 2",
      link: "/acesso-a-informacao",
      backgroundColor: "blue",
      showExtraLinks: true,
      extraLinks: [
        {
          label: "LAI - Lei de Acesso à Informação - Início",
          url: "/acesso-a-informacao/",
        },
        {
          label: "Acesso a Informação LAI",
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
          label: "Painel de acompanhamento 2023",
          url: "https://app.powerbi.com/view?r=eyJrIjoiY2ZmODAzZDUtMDE2YS00ZWYzLWJhZGQtMWE4Nzc3OWQyMDgxIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
        },
      ],
    },

    {
      title: "Governo Aberto",
      imageURL: Leis_decretos_portarias.src,
      description: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-transparencia-e-dados-abertos/governo-aberto",
      link: "https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-transparencia-e-dados-abertos/governo-aberto",
      backgroundColor: "blue",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },


    {
      title: "Plano Municipal de Educação",
      imageURL: Plano_municipal_educacao.src,
      description: "Descrição 2",
      link: "/plano-municipal-educacao",
      backgroundColor: "blue",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },

    {
      title: "Plano Municipal de Saúde",
      imageURL: Plano_municipal_saude.src,
      description: "Descrição 3",
      link: "/plano-municipal-saude",
      backgroundColor: "green",
      showExtraLinks: true,
      extraLinks: [
        {
          label: "Plano Municipal de Saúde - Início",
          url: "/plano-municipal-saude/",
        },
        {
          label: "Plano Municipal de Saúde",
          url: "/plano-municipal-saude/plano-municipal-saude",
        },
        {
          label: "Serviços de Saúde",
          url: "/plano-municipal-saude/servicos-saude",
        },
        { label: "Medicamentos", url: "/plano-municipal-saude/medicamentos" },
      ],
    },


    {
      title: "Visuas - Visor do Sistema Único de Assistência Social",
      imageURL: Plano_municipal_educacao.src,
      description: "Descrição 2",
      link: "https://visuas.mogidascruzes.sp.gov.br/",
      backgroundColor: "blue",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },

    {
      title: "Governo Digital",
      imageURL: Plano_municipal_educacao.src,
      description: "Descrição 2",
      link: "/governo-digital",
      backgroundColor: "blue",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },

    {
      title: "Dados Abertos",
      imageURL: Plano_municipal_educacao.src,
      description: "Descrição 2",
      link: "https://dados.mogidascruzes.sp.gov.br/",
      backgroundColor: "blue",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },

   
    {
      title: "Relatórios de Gestão",
      imageURL: Ultimas_noticias.src,
      description: "Descrição 3",
      link: "/relatorio-gestao",
      backgroundColor: "green",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Políticas e Programas",
      imageURL: Ultimas_noticias.src,
      description: "Descrição 3",
      link: "/politicas-programas",
      backgroundColor: "green",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
   
    {
      title: "Veículos Oficiais",
      imageURL: Ultimas_noticias.src,
      description: "Descrição 3",
      link: "/veiculos-oficiais",
      backgroundColor: "green",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },

    {
      title: "Mapa do Site",
      imageURL: Mapa_do_site.src,
      description: "Descrição 3",
      link: "/mapa-do-site",
      backgroundColor: "green",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },

    {
      title: "Portal Antigo",
      imageURL: Mapa_do_site.src,
      description: "Descrição 3",
      link: "https://portaldatransparencia.mogidascruzes.sp.gov.br/",
      backgroundColor: "green",
      showExtraLinks: false,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
  ];

  return (
   <> 
    <Grid
      templateColumns={templateColumns}
      gap={4}
      width={isMobile ? "100%" : "80%"}
      maxWidth={"1280px"}
      margin="0 auto"
      padding="0 15px"
    >
      
      {cardData.map((data, index) => (
        <Box
          key={index}
          bg={useColorModeValue("white", "gray.800")}
          overflow="visible"
          marginBottom="15px"
        >
          <CardHorizon
            title={data.title}
            imageURL={data.imageURL}
            description={data.description}
            link={data.link}
            backgroundColor={data.backgroundColor}
            showExtraLinks={data.showExtraLinks}
            extraLinks={data.extraLinks}
          />
        </Box>
      ))}
    </Grid></>
  );
}

export default CardHome;
