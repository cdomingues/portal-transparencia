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
import relatorio_gestao_fiscal from "../../assets/images/icones/relatorio_gestao_fiscal.svg";
import relatorio_resumido from "../../assets/images/icones/relatorio_resumido.svg";
import acordo_de_colaboração from '../../assets/images/icones/acordos e termos__acordo de colaboração.svg'
import termo_de_colaboração from '../../assets/images/icones/acordos e termos__termo de colaboraçãp.svg'
import termo_de_fomento from '../../assets/images/icones/acordos e termos__termo de fomento.svg'
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
  titlePage: "Contratos e Atas",
  description:
    "Nesta página, confira as informações sobre contratos e atas celebrados pela Prefeitura de Mogi das Cruzes com prestadores de serviço. Pesquise por número, modalidade, processo, valor, fornecedor, objeto, entre outros itens. ",
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
                      title="Contratos"
                      imageURL={termo_de_fomento.src}
                      description="..."
                      link="contratos-atas/contratos"
                      backgroundColor="transparent"
                    />
                  </Box>

                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Contratos de Gestão"
                      imageURL={termo_de_fomento.src}
                      description="..."
                      link="contratos-atas/contratos-gestao"
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
                      title="ATAS"
                      imageURL={termo_de_fomento.src}
                      description="..."
                      link="contratos-atas/atas"
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
                      title="Relação dos gestores de contratos encerrados"
                      imageURL={termo_de_fomento.src}
                      description="..."
                      link="contratos-atas/relacao-fiscais-encerrados"
                      backgroundColor="transparent"
                    />
                  </Box>

                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Relação dos gestores de contratos vigentes"
                      imageURL={termo_de_fomento.src}
                      description="..."
                      link="contratos-atas/relacao-fiscais-vigentes"
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
