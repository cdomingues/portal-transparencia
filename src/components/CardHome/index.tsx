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
  // Matriz de objetos contendo as informações para cada cartão
  // (Você pode expandir ou reduzir conforme necessário)

  const cardData = [
    {
      title: "Perfil do Municipio",
      imageURL: Perfil_municipio.src,
      description: "Descrição 1",
      link: "/perfil-do-municipio",
      backgroundColor: "transparent", 
    },
    {
      title: "Ciclo Orçamentário",
      imageURL: Ciclo_orcamentario.src,
      description: "Descrição 2",
      link: "/ciclo-orcamentario",
      backgroundColor: "transparent",
    },
    {
      title: "Gestão Orçamentária",
      imageURL: Gestao_orcamentaria.src,
      description: "Descrição 3",
      link: "/gestao-orcamentaria",
      backgroundColor: "transparent",
    },
    {
      title: "Gestão Orçamentária - Covid-19",
      imageURL: Gestao_orcamentaria_covid.src,
      description: "Descrição 1",
      link: "/gestao-orcamentaria-covid",
      backgroundColor: "white",
    },
    {
      title: "Gestão Orçamentária - Outros",
      imageURL: Gestao_orcamentaria_outros.src,
      description: "Descrição 2",
      link: "/gestao-orcamentaria-outros",
      backgroundColor: "blue",
    },
    {
      title: "Gestão Extra Orçamentária",
      imageURL: Gestao_extra_orcamentaria.src,
      description: "Descrição 3",
      link: "/gestao-extra-orcamentaria",
      backgroundColor: "green",
    },
    {
      title: "Acordos e Termos",
      imageURL: Acordos_termos.src,
      description: "Descrição 1",
      link: "/acordos-termos",
      backgroundColor: "white",
    },
    {
      title: "Compras Públicas",
      imageURL: Compras_publicas.src,
      description: "Descrição 2",
      link: "/compras-publicas",
      backgroundColor: "blue",
    },
    {
      title: "Gestão de Pessoas",
      imageURL: Gestao_de_pessoas.src,
      description: "Descrição 3",
      link: "/gestao-de-pessoas",
      backgroundColor: "green",
    },
    {
      title: "Patrimônio",
      imageURL: Patrimonio.src,
      description: "Descrição 2",
      link: "/patrimonio",
      backgroundColor: "blue",
    },
    {
      title: "Portal de Obras",
      imageURL: Controle_de_obras.src,
      description: "Descrição 3",
      link: "/controle-de-obras",
      backgroundColor: "green",
    },
    {
      title: "Controle de Radares",
      imageURL: Controle_de_radares.src,
      description: "Descrição 2",
      link: "/controle-de-radares",
      backgroundColor: "blue",
    },
    {
      title: "Agenda Aberta",
      imageURL: Agenda_aberta.src,
      description: "Descrição 3",
      link: "/agenda-aberta",
      backgroundColor: "green",
    },
    {
      title: "Convênios e Transferências",
      imageURL: Convenios_transferencias.src,
      description: "/convenios-transferencias",
      link: "/link2",
      backgroundColor: "blue",
    },
    {
      title: "Leis, Decretos e Portarias",
      imageURL: Leis_decretos_portarias.src,
      description: "Descrição 3",
      link: "/leis-decretos-portarias",
      backgroundColor: "green",
    },
    {
      title: "LAI - Lei de Acesso a Informação",
      imageURL: Leis_decretos_portarias.src,
      description: "Descrição 2",
      link: "/acesso-a-informacao",
      backgroundColor: "blue",
    },
    {
      title: "Ouvidoria",
      imageURL: Ouvidoria.src,
      description: "Descrição 3",
      link: "/ouvidoria",
      backgroundColor: "green",
    },
    {
      title: "Institutos e Autarquias",
      imageURL: Instituto_autarquia.src,
      description: "Descrição 3",
      link: "/instituto-autarquia",
      backgroundColor: "green",
    },
    {
      title: "Perguntas Frequentes",
      imageURL: Perguntas_frequentes.src,
      description: "Descrição 2",
      link: "/perguntas-frequentes",
      backgroundColor: "blue",
    },
    {
      title: "Últimas Noticias",
      imageURL: Ultimas_noticias.src,
      description: "Descrição 3",
      link: "/ultimas-noticias",
      backgroundColor: "green",
    },
    {
      title: "Plano Municipal de Educação",
      imageURL: Plano_municipal_educacao.src,
      description: "Descrição 2",
      link: "/plano-municipal-educacao",
      backgroundColor: "blue",
    },
    {
      title: "Plano Municipal de Saúde",
      imageURL: Plano_municipal_saude.src,
      description: "Descrição 3",
      link: "/plano-municipal-saude",
      backgroundColor: "green",
    },
    {
      title: "Mapa do Site",
      imageURL: Mapa_do_site.src,
      description: "Descrição 3",
      link: "/mapa-do-site",
      backgroundColor: "green",
    },
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
