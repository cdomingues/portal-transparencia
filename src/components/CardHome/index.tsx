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
import { IconRight } from "react-day-picker";
import { isMobile } from "react-device-detect";
import { BiBell } from "react-icons/bi";
import Image from "next/image";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import seta from "../../assets/images/icones/Icones_Home Portal Transparencia__botao abre.svg";
import Diretriz_orcamentaria from "../../assets/images/icones/diretriz_orcamentaria.svg";
import CardHorizon from "../CardHorizon";



function CardHome() {
  // Matriz de objetos contendo as informações para cada cartão
  // (Você pode expandir ou reduzir conforme necessário)


  const cardData = [
    {
      title: "Perfil do Municipio",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 1",
      link: "/perfil-do-municipio",
      backgroundColor: "transparent"
    },
    {
      title: "Ciclo Orçamentário",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/ciclo-orcamentario",
      backgroundColor: "transparent"
    },
    {
      title: "Gestão Orçamentária",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/gestao-orcamentaria",
      backgroundColor: "transparent"
    },
    {
      title: "Gestão Orçamentária - Covid-19",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 1",
      link: "/gestao-orcamentaria-covid",
      backgroundColor: "white"
    },
    {
      title: "Gestão Orçamentária - Outros",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/gestao-orcamentaria-outros",
      backgroundColor: "blue"
    },
    {
      title: "Gestão Extra Orçamentária",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/gestao-extra-orcamentaria",
      backgroundColor: "green"
    },
    {
      title: "Acordos e Termos",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 1",
      link: "/acordos-termos",
      backgroundColor: "white"
    },
    {
      title: "Compras Públicas",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/compras-publicas",
      backgroundColor: "blue"
    },
    {
      title: "Gestão de Pessoas",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/gestao-de-pessoas",
      backgroundColor: "green"
    },
    {
      title: "Patrimônio",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/patrimonio",
      backgroundColor: "blue"
    },
    {
      title: "Portal de Obras",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/controle-de-obras",
      backgroundColor: "green"
    },
    {
      title: "Controle de Radares",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/controle-de-radares",
      backgroundColor: "blue"
    },
    {
      title: "Agenda Aberta",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/agenda-aberta",
      backgroundColor: "green"
    },
    {
      title: "Convênios e Transferências",
      imageURL: Diretriz_orcamentaria.src,
      description: "/convenios-transferencias",
      link: "/link2",
      backgroundColor: "blue"
    },
    {
      title: "Leis, Decretos e Portarias",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/leis-decretos-portarias",
      backgroundColor: "green"
    },
    {
      title: "LAI - Lei de Acesso a Informação",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/acesso-a-informacao",
      backgroundColor: "blue"
    },
    {
      title: "Ouvidoria",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/ouvidoria",
      backgroundColor: "green"
    },
    {
      title: "Institutos e Autarquias",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/instituto-autarquia",
      backgroundColor: "green"
    },
    {
      title: "Perguntas Frequentes",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/perguntas-frequentes",
      backgroundColor: "blue"
    },
    {
      title: "Últimas Noticias",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/ultimas-noticias",
      backgroundColor: "green"
    },
    {
      title: "Plano Municipal de Educação",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/plano-municipal-educacao",
      backgroundColor: "blue"
    },
    {
      title: "Plano Municipal de Saúde",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/plano-municipal-saude",
      backgroundColor: "green"
    },
    {
      title: "Mapa do Site",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/mapa-do-site",
      backgroundColor: "green"
    }
  ];

 

  return (
    <Stack
      backgroundColor={"transparent"}
      width={isMobile ? "100%" : "80%"}
      maxWidth={"1280px"}
      alignItems="center"
      justifyContent="center"
      margin="0 auto"
      direction={isMobile ? "column" : "row"}
      wrap="wrap"
      spacing={4}
    >
      {cardData.map((data, index) => (
        <Box
          key={index}
          bg={useColorModeValue("white", "gray.800")}
          overflow="hidden"
          width={isMobile ? "100%" : "33%"}
          marginBottom="15px"
          paddingRight={15}
          height={120}
          flex="1"
          minWidth={isMobile ? "auto" : "30%"}
          margin={isMobile ? "10px 0" : "10px"}
        >
          <CardHorizon
            title={data.title}
            imageURL={data.imageURL}
            description={data.description}
            link={data.link}
            backgroundColor={data.backgroundColor}
          />
        </Box>
      ))}
    </Stack>
  );
}



export default CardHome;