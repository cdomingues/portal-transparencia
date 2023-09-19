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
import Controle_de_obras from "../../assets/images/icones/icones_barra lateral__ultimas noticias.svg";
import Controle_de_radares from "../../assets/images/icones/receitas multas de transito.svg";
import Agenda_aberta from "../../assets/images/icones/icones_barra lateral__agenda aberta.svg";
import Convenios_transferencias from "../../assets/images/icones/receitas emendas parlamentares.svg";
import Leis_decretos_portarias from "../../assets/images/icones/contratos e atas.svg";
import Acesso_a_informacao from "../../assets/images/icones/LAI__acesso a informação.svg";
import Ouvidoria from "../../assets/images/icones/LAI__acesso a informação.svg";
import Instituto_autarquia from "../../assets/images/icones/icones_barra lateral__institutos e autarquias.svg";
import Perguntas_frequentes from "../../assets/images/icones/icones_barra lateral__perguntas frequentes.svg";
import Ultimas_noticias from "../../assets/images/icones/icones_barra lateral__ultimas noticias.svg";
import Plano_municipal_educacao from "../../assets/images/icones/acordos e termos__acordo de colaboração.svg";
import Plano_municipal_saude from "../../assets/images/icones/acordos e termos__acordo de colaboração.svg";
import Mapa_do_site from "../../assets/images/icones/icones_barra lateral__mapa do site.svg";

function CardHome() {
  const cardData = [
    {
      title: "Perfil do Municipio",
      imageURL: Perfil_municipio.src,
      description: "Descrição 1",
      link: "/perfil-do-municipio",
      backgroundColor: "transparent",
      showExtraLinks: true ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Ciclo Orçamentário",
      imageURL: Ciclo_orcamentario.src,
      description: "Descrição 2",
      link: "/ciclo-orcamentario",
      backgroundColor: "blue",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },

    {
      title: "Gestão Orçamentária",
      imageURL: Gestao_orcamentaria.src,
      description: "Descrição 3",
      link: "/gestao-orcamentaria",
      backgroundColor: "transparent",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Gestão Orçamentária - Covid-19",
      imageURL: Gestao_orcamentaria_covid.src,
      description: "Descrição 1",
      link: "/gestao-orcamentaria-covid",
      backgroundColor: "white",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Gestão Orçamentária - Outros",
      imageURL: Gestao_orcamentaria_outros.src,
      description: "Descrição 2",
      link: "/gestao-orcamentaria-outros",
      backgroundColor: "blue",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Gestão Extra Orçamentária",
      imageURL: Gestao_extra_orcamentaria.src,
      description: "Descrição 3",
      link: "/gestao-extra-orcamentaria",
      backgroundColor: "green",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Acordos e Termos",
      imageURL: Acordos_termos.src,
      description: "Descrição 1",
      link: "/acordos-termos",
      backgroundColor: "white",
      showExtraLinks: false ,
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
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Gestão de Pessoas",
      imageURL: Gestao_de_pessoas.src,
      description: "Descrição 3",
      link: "/gestao-de-pessoas",
      backgroundColor: "green",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],

    },
    {
      title: "Patrimônio",
      imageURL: Patrimonio.src,
      description: "Descrição 2",
      link: "/patrimonio",
      backgroundColor: "blue",
      showExtraLinks: false ,
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
      showExtraLinks: false ,
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
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Agenda Aberta",
      imageURL: Agenda_aberta.src,
      description: "Descrição 3",
      link: "/agenda-aberta",
      backgroundColor: "green",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Convênios e Transferências",
      imageURL: Convenios_transferencias.src,
      description: "/convenios-transferencias",
      link: "/link2",
      backgroundColor: "blue",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Leis, Decretos e Portarias",
      imageURL: Leis_decretos_portarias.src,
      description: "Descrição 3",
      link: "/leis-decretos-portarias",
      backgroundColor: "green",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "LAI - Lei de Acesso a Informação",
      imageURL: Leis_decretos_portarias.src,
      description: "Descrição 2",
      link: "/acesso-a-informacao",
      backgroundColor: "blue",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Ouvidoria",
      imageURL: Ouvidoria.src,
      description: "Descrição 3",
      link: "/ouvidoria",
      backgroundColor: "green",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Institutos e Autarquias",
      imageURL: Instituto_autarquia.src,
      description: "Descrição 3",
      link: "/instituto-autarquia",
      backgroundColor: "green",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Perguntas Frequentes",
      imageURL: Perguntas_frequentes.src,
      description: "Descrição 2",
      link: "/perguntas-frequentes",
      backgroundColor: "blue",
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    {
      title: "Últimas Noticias",
      imageURL: Ultimas_noticias.src,
      description: "Descrição 3",
      link: "/ultimas-noticias",
      backgroundColor: "green",
      showExtraLinks: false ,
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
      showExtraLinks: false ,
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
      showExtraLinks: false ,
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
      showExtraLinks: false ,
      extraLinks: [
        { label: "Link 1", url: "http://exemplo.com/link1" },
        { label: "Link 2", url: "http://exemplo.com/link2" },
      ],
    },
    
  ];

  return (
    <Grid
      templateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"}
      gap={4}
      width={isMobile ? "110%" : "80%"}
      maxWidth={"1280px"}
      margin="0 auto"
      padding="0 15px"
    >
      {cardData.map((data, index) => (
        <Box
          key={index}
          bg={useColorModeValue("white", "gray.800")}
          overflow="hidden"
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
    </Grid>
  );
}

export default CardHome;
