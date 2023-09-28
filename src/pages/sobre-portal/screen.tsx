import React from "react";
import Head from "next/head";
//import BlogComponent from "../components/Blog";
//import { News } from "../types";
import { PublicPolicyData } from "../api/totalizador/politicas-publicas";
import CardHorizon from "../../components/CardHorizon";
import diretriz_orcamentaria from "../../assets/images/icones/diretriz_orcamentaria.svg"
import balanco_anual from "../../assets/images/icones/balanco_anual.svg"
import lei_orcamentaria from "../../assets/images/icones/lei_orcamentaria_anual.svg"
import parecer_tribunal from "../../assets/images/icones/parecer_tribunal.svg"
import plano_plurianual from "../../assets/images/icones/plano_plurianual.svg"
import relatorio_gestao_fiscal from "../../assets/images/icones/relatorio_gestao_fiscal.svg"
import relatorio_resumido from "../../assets/images/icones/relatorio_resumido.svg"
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Skeleton,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import moneyFormatter from "../../utils/moneyFormatter";
import moment from "moment";
import { isMobile } from "react-device-detect";
import { Chart } from "../../components/HomeChart";
import { Chart2 } from "../../components/HomeChart2";
import { ChartContainer } from "../../utils/styles";
import {
  BiBell,
  BiBody,
  BiCheckShield,
  BiFlag,
  BiFoodMenu,
  BiHeart,
} from "react-icons/bi";
import useWindowDimensions from "../../utils/getWindowSize";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import noticias from "../../../data/noticias.json";
//import News from "../../components/News";
//import News from "../components/News";
import DisplayNews from "../../components/NewsHome";
import ContainerBasic from "../../components/Container/Basic";
import { IconRight } from "react-day-picker";

type PropsInput = {
  handler: {
    expenseAmount: number;
    expensePercentageReached: number;
    expenseProvided: number;
    revenueAmount: number;
    revenuePercentageReached: number;
    revenueProvided: number;
    expenseLoanding: boolean;
    revenueLoading: boolean;
    publicPolicies: PublicPolicyData[];
    graphConfig: any;
    publicPoliciesLoading: boolean;
    chartLoading: boolean;
    date: string;
  };
};

export const contentAbout = {
  titlePage: "Sobre o Portal de Transparência",
  description:
    "O lugar onde o controle social começa! Acompanhe todas as informações de receitas e despesas da Prefeitura, com detalhamento e maior facilidade de entendimento.",
};

function Aside() {
  return (
    <div style={{ width: "380px", justifyContent: "left" }}>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <div style={{ padding: "10px" }}>
          <Text fontWeight="500" color={"gray.500"}>
            Últimas Notícias
          </Text>
        </div>
        {noticias.slice(0, 2).map((info) => {
          return (
            <DisplayNews
              key={info.descricao}
              data_noticia={info.data_noticia}
              descricao={info.descricao}
              foto={info.foto}
              titulo={info.titulo}
              link={info.link}
            />
          );
        })}
        <div style={{ padding: "0px", width: "100%" }}></div>
      </Box>
    </div>
  );
}

function HomeScreen({ handler }: PropsInput) {
  const {
    //news,
    expenseAmount,
    expensePercentageReached,
    expenseProvided,
    revenueAmount,
    revenuePercentageReached,
    revenueProvided,
    expenseLoanding,
    revenueLoading,
    publicPolicies,
    graphConfig,
    publicPoliciesLoading,
    chartLoading,
    date,
  } = handler;
  const accessibility = useFontSizeAccessibilityContext();
  const titlePage = contentAbout?.titlePage;
  const description = contentAbout?.description;

  const { height, width } = useWindowDimensions();

  return (
    <ContainerBasic title={titlePage} description={description}>
      {/* <Stack
        flex={width > 1024 ? 2 : 2}
        style={{
          paddingLeft: isMobile ? 0 : "0%",
          paddingRight: isMobile ? 0 : "0%",
              
        }}
      > */}
      {/* <Box
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="2xl"
          padding={"15px"}
          rounded="md"
          overflow="hidden"
          maxWidth="100%"
          borderRadius="18px"
          marginBottom="15px"
        >
          <Stack spacing={4}>
            <Heading fontSize={accessibility?.fonts?.highLarge} padding={"2%"}>
              {titlePage}
            </Heading>
            <Text
              color={"gray.500"}
              fontSize={accessibility?.fonts?.regular}
              textAlign={"justify"}
              padding={"2%"}
            >
              {description}
            </Text>
          </Stack>
        </Box> */}

      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Stack direction={isMobile ? "column" : "row"} spacing={2}></Stack>

        <Stack direction="column">
          <Heading fontSize={accessibility?.fonts?.highLarge} padding={"2%"}>
            O que é o portal?
          </Heading>

          <StatGroup width="100%" mb={20}>
            <Text
              color={"gray.500"}
              fontSize={accessibility?.fonts?.regular}
              textAlign={"justify"}
              padding={"2%"}
            >
             O Portal da Transparência do Município de Mogi das Cruzes é administrado pela Secretaria de Transparência e Dados Abertos, sendo um site que disponibiliza informações ao cidadão sobre diversos assuntos relacionados à gestão pública da cidade, incluindo a arrecadação e a utilização do dinheiro público. 

Instituído pela Lei de Acesso à Informação, Lei n° 12.527, de 18 de novembro de 2011, uma lei ordinária federal que regulamenta o acesso a informações, previsto no inciso XXXIII do art. 5º, no inciso II do § 3º do art. 37 e no § 2º do art. 216 da Constituição Federal. 

O Portal tem como objetivo centralizar, divulgar informações e dados de interesse público referentes à transparência na gestão, sendo um importante instrumento de controle social. Por meio do Portal, os cidadãos podem consultar, acompanhar e fiscalizar as ações realizadas pelos órgãos e entidades do Poder Executivo de Mogi das Cruzes. 

Aqui o cidadão encontrará informações sobre orçamento, despesas, licitações, contratos, salários de funcionários e outros dados públicos relevantes. Eles são criados para aumentar a prestação de contas e a transparência na gestão pública, bem como fortalecer a participação cidadã e o controle social. 
            </Text>
            <Text
              color={"gray.500"}
              fontSize={accessibility?.fonts?.regular}
              textAlign={"justify"}
              padding={"2%"}
            >
              Instituído pela Lei de Acesso à Informação, Lei n° 12.527, de 18
              de novembro de 2011, uma lei ordinária federal que regulamenta o
              acesso a informações, previsto no inciso XXXIII do art. 5º, no
              inciso II do § 3º do art. 37 e no § 2º do art. 216 da Constituição
              Federal.
            </Text>
            <Text
              color={"gray.500"}
              fontSize={accessibility?.fonts?.regular}
              textAlign={"justify"}
              padding={"2%"}
            >
              O Portal tem como objetivo centralizar, divulgar informações e
              dados de interesse público referentes à transparência na gestão,
              sendo um importante instrumento de controle social. Por meio do
              Portal, os cidadãos podem consultar, acompanhar e fiscalizar as
              ações realizadas pelos órgãos e entidades do Poder Executivo de
              Mogi das Cruzes.
            </Text>
            <Text
              color={"gray.500"}
              fontSize={accessibility?.fonts?.regular}
              textAlign={"justify"}
              padding={"2%"}
            >
              Aqui o cidadão encontrará informações sobre orçamento, despesas,
              licitações, contratos, salários de funcionários e outros dados
              públicos relevantes. Eles são criados para aumentar a prestação de
              contas e a transparência na gestão pública, bem como fortalecer a
              participação cidadã e o controle social.
            </Text>
          </StatGroup>
        </Stack>
      </Box>

      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Stack direction={isMobile ? "column" : "row"} spacing={2}></Stack>

        <Stack direction="column">
          <Heading
            fontSize={accessibility?.fonts?.regular}
            style={{ marginTop: "0px" }}
          >
            Prêmios e Reconhecimentos
          </Heading>

          <StatGroup width="100%" mb={20}>
            <Stat position="unset">
              <Stack
                direction={isMobile ? "column" : "row"}
                align={isMobile ? "center" : "center"}
                justifyContent={isMobile ? "flex-start" : "center"}
              >
                <Box padding="6" bg="transparent" flexDirection="row">
                  <CardHorizon
                    title="What Work Cities - Silver 2023"
                    imageURL=""
                    description="O Plano Plurianual (PPA) é o principal instrumento pelo qual o município faz o planejamento de como irá investir os recursos públicos nos próximos anos."
                    link="./relatorio-gestao-fiscal"
                backgroundColor="transparent"/>
                </Box>

                <Box padding="6" bg="transparent" flexDirection="row">
                  <CardHorizon
                    title="Plano Plurianual do Ano de 2023 de Mogi das Cruzes"
                    imageURL=""
                    description="O Plano Plurianual (PPA) é o principal instrumento pelo qual o município faz o planejamento de como irá investir os recursos públicos nos próximos anos."
                    link="URL do link"
                backgroundColor="transparent"/>
                </Box>
              </Stack>
              <Stack
                direction={isMobile ? "column" : "row"}
                align={isMobile ? "center" : "center"}
                justifyContent={isMobile ? "flex-start" : "center"}
              >
                <Box padding="6" bg="transparent" flexDirection="row">
                  <CardHorizon
                    title="Plano Plurianual do Ano de 2023 de Mogi das Cruzes"
                    imageURL=""
                    description="O Plano Plurianual (PPA) é o principal instrumento pelo qual o município faz o planejamento de como irá investir os recursos públicos nos próximos anos."
                    link="URL do link"
                backgroundColor="transparent"/>
                </Box>

                <Box padding="6" bg="transparent" flexDirection="row">
                  <CardHorizon
                    title="Plano Plurianual do Ano de 2023 de Mogi das Cruzes"
                    imageURL=""
                    description="O Plano Plurianual (PPA) é o principal instrumento pelo qual o município faz o planejamento de como irá investir os recursos públicos nos próximos anos."
                    link="URL do link"
                backgroundColor="transparent"/>
                </Box>
              </Stack>
            </Stat>
          </StatGroup>
        </Stack>
      </Box>
      {/* </Stack> */}
    </ContainerBasic>
  );
}

export default HomeScreen;
