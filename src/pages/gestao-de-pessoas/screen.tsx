import React from "react";
import Head from "next/head";
//import BlogComponent from "../components/Blog";
//import { News } from "../types";
import { PublicPolicyData } from "../api/totalizador/politicas-publicas";
import CardHorizon from "../../components/CardHorizon";
import diretriz_orcamentaria from "../../assets/images/icones/diretriz_orcamentaria.svg";
import balanco_anual from "../../assets/images/icones/balanco_anual.svg";
import lei_orcamentaria from "../../assets/images/icones/lei_orcamentaria_anual.svg";
import parecer_tribunal from "../../assets/images/icones/parecer_tribunal.svg";
import plano_plurianual from "../../assets/images/icones/plano_plurianual.svg";
import folha_de_pagamento from "../../assets/images/icones/folha de pagamento__cargos e salarios.svg";
import cargos_e_salarios from "../../assets/images/icones/folha de pagamento__folha de pagamento.svg";
import adiantamentos_e_hospedagem from "../../assets/images/icones/folha de pagamento__adiantamentos e hospedagem.svg";
import  passagens_e_locomoção from '../../assets/images/icones/folha de pagamento__passagens e locomoção.svg'

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

export const contentInitial = {
  titlePage: "Gestão de Pessoas",
  description:
    "O lugar onde o controle social começa! Acompanhe todas as informações de receitas e despesas da Prefeitura, com detalhamento e maior facilidade de entendimento.",
};


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
  const titlePage = contentInitial?.titlePage;
  const description = contentInitial?.description;

  const { height, width } = useWindowDimensions();

  return (
    <ContainerBasic title={titlePage} description={description}>
      <Stack
        style={{
          paddingLeft: isMobile ? 0 : "0%",
          paddingRight: isMobile ? 0 : "0%",
        }}
      >
        {/* <Divider mb="6%" /> */}

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
              Políticas Públicas
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
                      title="Folha de Pagamento"
                      imageURL={folha_de_pagamento}
                      description="É dever do Poder Público dar transparência à Folha de Pagamento dos funcionários. Acompanhe aqui o detalhamento dos cargos e salários dos servidores públicos municipais."
                      link="gestao-de-pessoas/folha-pagamento"
                      backgroundColor="transparent"
                    />
                  </Box>

                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Passagens e Locomoção"
                      imageURL={passagens_e_locomoção}
                      description="Os agentes públicos podem realizar também diversas atividades além dos limites do município, no exercício de sua função e em benefício da cidade. Você pode acompanhar os gastos relacionados a passagens e locomoção nesta página."
                      link="gestao-de-pessoas/passagem-locomocao"
                      backgroundColor="transparent"
                    />
                  </Box>
                </Stack>
                <Stack
                  direction={isMobile ? "column" : "row"}
                  align={isMobile ? "center" : "center"}
                  justifyContent={isMobile ? "flex-start" : "center"}
                >
                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Despesas de Viagens"
                      imageURL={adiantamentos_e_hospedagem}
                      description="Adiantamentos são recursos financeiros conferidos a um servidor público, a fim de que possa realizar despesas que não possam aguardar o ciclo normal de compras."
                      link="gestao-de-pessoas/despesas-viagens"
                      backgroundColor="transparent"
                    />
                  </Box>
                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Cargos e salários"
                      imageURL={cargos_e_salarios}
                      description="Nesta página, confira as informações sobre cargos e salários na Prefeitura de Mogi das Cruzes com prestadores de serviço. Pesquise por matrícula, nome, cargo entre outros itens."
                      link="gestao-de-pessoas/cargos-e-salarios"
                      backgroundColor="transparent"
                    />
                  </Box>
                </Stack>
                <Stack
                  direction={isMobile ? "column" : "row"}
                  align={isMobile ? "center" : "center"}
                  justifyContent={isMobile ? "flex-start" : "center"}
                >
                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Estrutura Organizacional"
                      imageURL={cargos_e_salarios}
                      description="Adiantamentos são recursos financeiros conferidos a um servidor público, a fim de que possa realizar despesas que não possam aguardar o ciclo normal de compras."
                      link="http://leismunicipa.is/0ji28"
                      backgroundColor="transparent"
                    />
                  </Box>

                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Carga Horária"
                      imageURL={cargos_e_salarios}
                      description="Carga horária de todos os cargos."
                      link="gestao-de-pessoas/carga-horaria"
                      backgroundColor="transparent"
                    />
                  </Box>

                </Stack>
              </Stat>
            </StatGroup>
          </Stack>
        </Box>
      </Stack>
    </ContainerBasic>
  );
}

export default HomeScreen;
