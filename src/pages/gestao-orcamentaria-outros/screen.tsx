import React from "react";
import Head from "next/head";
//import BlogComponent from "../components/Blog";
//import { News } from "../types";
import { PublicPolicyData } from "../api/totalizador/politicas-publicas";
import CardHorizon from "../../components/CardHorizon";
import subvencoes from "../../assets/images/icones/subvencoes.svg";
import gastos_com_publicidade from "../../assets/images/icones/gastos com publicidade.svg";
import contratos_e_atas from "../../assets/images/icones/contratos e atas.svg";
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
  titlePage: "Finanças Municipal",
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
              Gestão Orçamentária - Outros
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
                      title="Contratos e Atas"
                      imageURL={contratos_e_atas}
                      description="Nesta página, confira as informações sobre contratos e atas celebrados pela Prefeitura de Mogi das Cruzes com prestadores de serviço. Pesquise por número, modalidade, processo, valor, fornecedor, objeto, entre outros itens."
                      link="gestao-orcamentaria-outros/outros/contratos-atas"
                      backgroundColor="transparent"
                    />
                  </Box>
                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Gastos com publicidade"
                      imageURL={gastos_com_publicidade}
                      description="A publicidade legal e institucional realizada pelo Poder Público é um importante serviço cujo objetivo final é favorecer o acesso da população a todos os outros serviços públicos, além de contribuir com a transparência dos atos administrativos. Confira as despesas com publicidade da Prefeitura de Mogi das Cruzes."
                      link="gestao-orcamentaria-outros/outros/propaganda"
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
                      title="Subvenções"
                      imageURL={subvencoes}
                      description="Subvenção é quando a Prefeitura destina recursos financeiros para que entidades cubram seus custos de atividades prestadas à população. Confira aqui as despesas relacionadas a essa natureza."
                      link="gestao-orcamentaria-outros/outros/subvencoes"
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