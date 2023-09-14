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
      link: "/link1",
      backgroundColor: "transparent"
    },
    {
      title: "Ciclo Orçamentário",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/link2",
      backgroundColor: "transparent"
    },
    {
      title: "Gestão Orçamentária",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/link3",
      backgroundColor: "transparent"
    },
    {
      title: "Gestão Orçamentária - Covid-19",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 1",
      link: "/link1",
      backgroundColor: "white"
    },
    {
      title: "Gestão Orçamentária - Outros",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/link2",
      backgroundColor: "blue"
    },
    {
      title: "Gestão Extra Orçamentária",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/link3",
      backgroundColor: "green"
    },
    {
      title: "Acordos e Termos",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 1",
      link: "/link1",
      backgroundColor: "white"
    },
    {
      title: "Compras Públicas",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/link2",
      backgroundColor: "blue"
    },
    {
      title: "Gestão de Pessoas",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/link3",
      backgroundColor: "green"
    },
    {
      title: "Patrimônio",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/link2",
      backgroundColor: "blue"
    },
    {
      title: "Portal de Obras",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/link3",
      backgroundColor: "green"
    },
    {
      title: "Controle de Radares",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/link2",
      backgroundColor: "blue"
    },
    {
      title: "Agenda Aberta",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/link3",
      backgroundColor: "green"
    },
    {
      title: "Convênios e Transferências",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/link2",
      backgroundColor: "blue"
    },
    {
      title: "Leis, Decretos e Portarias",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/link3",
      backgroundColor: "green"
    },
    {
      title: "LAI - Lei de Acesso a Informação",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/link2",
      backgroundColor: "blue"
    },
    {
      title: "Institutos e Autarquias",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/link3",
      backgroundColor: "green"
    },
    {
      title: "Perguntas Frequentes",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/link2",
      backgroundColor: "blue"
    },
    {
      title: "Últimas Noticias",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/link3",
      backgroundColor: "green"
    },
    {
      title: "Plano Municipal de Educação",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 2",
      link: "/link2",
      backgroundColor: "blue"
    },
    {
      title: "Plano Municipal de Saúde",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/link3",
      backgroundColor: "green"
    },
    {
      title: "Mapa do Site",
      imageURL: Diretriz_orcamentaria.src,
      description: "Descrição 3",
      link: "/link3",
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