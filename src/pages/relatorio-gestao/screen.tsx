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
  UnorderedList,
  Link,
  ListItem,
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
import despesas_covid from "../../assets/images/icones/despesas covid.svg"
import receitas_covid from "../../assets/images/icones/receitas covid.svg"
import { FaDownload } from "react-icons/fa";

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
  titlePage: "Relatório de Gestão",
  description:
    "Divulgação de informações sobre a Gestão do Executivo",
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
          
     
      <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>

           <Box borderRadius="md"
           mb='12px'
           maxW="600px"
          p={4}
          _hover={{ bg: 'gray.200' }}
          border='1px solid black'>  <Link 
          href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/8802dd6e-edd2-4a81-b9ad-f314d3dbf09c/Relatorio_Circunstaciado_2022_e_Plano_de_A_hvWGNnk.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> Relatório Circunstanciado 2022 e Plano de Atuação 2023</ListItem ></div></Link></Box>
          <Box borderRadius="md"
           maxW="600px"
          p={4}
          _hover={{ bg: 'gray.200' }}
          border='1px solid black'>
                        
          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/41854082-18c2-4101-a51d-03dc7b079563/relatorios_circunstanciados_e_planos_de_at_dJvDFc5.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Relatório Circunstanciado e Plano de Atuação 2023-2024</ListItem ></div></Link>
          </Box>
                          
                          
                        </UnorderedList>
        </Box>
      </Stack>
    </ContainerBasic>
  );
}

export default HomeScreen;
