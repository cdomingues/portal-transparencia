import React from "react";
import Head from "next/head";
import { ChartComponent } from "../components/ChartBarApex";

import { ApexOptions } from "apexcharts";
import { PublicPolicyData } from "./api/totalizador/politicas-publicas";
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
import moneyFormatter from "../utils/moneyFormatter";
import moment from "moment";
import { isMobile } from "react-device-detect";
import { Chart } from "../components/HomeChart";
import { Chart2 } from "../components/HomeChart2";
import { ChartContainer } from "../utils/styles";
import { BiBody, BiCheckShield, BiFoodMenu, BiHeart } from "react-icons/bi";
import useWindowDimensions from "../utils/getWindowSize";
import { useFontSizeAccessibilityContext } from "../context/fontSizeAccessibility";
import noticias from "../../data/noticias.json";
import DisplayNews from "../components/NewsHome";
import ContainerHome from "../components/Container/newHome";
import { ChartComponentLine } from "../components/ChartLineApex";
import CardHome from "../components/CardHome";

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
  title: "Boas-vindas ao Portal da Transparência de Mogi!",
  description:
    "O lugar onde o controle social começa! Acompanhe todas as informações de receitas e despesas da Prefeitura, com detalhamento e maior facilidade de entendimento.",
};

function formatMoney(value: number): string {
  return `R$ ${Math.floor(value).toLocaleString("pt-BR")}`;
}

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
        // marginBottom="15px"
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

const PublicPolicyCard = ({
  funcao,
  valor,
  stylesTranslator,
}: {
  valor: number;
  funcao: any;
  stylesTranslator: any;
}) => {
  const accessibility = useFontSizeAccessibilityContext();
  return (
    <Stack
      direction="row"
      bg={useColorModeValue("white", "gray.800")}
      mb={5}
      mr={5}
      borderRadius="10"
      height="110px"
      boxShadow="10px 10px 18px -9px rgba(0,0,0,0.75)"
      width="260px"
    >
      <Stack flex={1} justifyContent="center" alignItems="center">
        <div
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: stylesTranslator[funcao].backgroundColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            fontSize="100px"
            color="white"
            as={stylesTranslator[funcao].icon}
          />
        </div>
      </Stack>
      <Stack flex={2} direction="column" justifyContent="center">
        <Text
          fontWeight="500"
          fontSize={accessibility?.fonts?.medium}
          color={"gray.500"}
        >
          {funcao}
        </Text>
        <Text
          fontSize={accessibility?.fonts?.medium}
          mb={2}
          fontWeight="550"
          color={useColorModeValue("#000", "#fff")}
        >
          {moneyFormatter(valor)}
        </Text>
      </Stack>
    </Stack>
  );
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
  const title = contentInitial?.title;
  const description = contentInitial?.description;

  const chartOptions1 = {
    chart: {
      width: "auto",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {},
    yaxis: {
      title: {
        text: "R$ (Milhões)",
      },
      labels: {
        formatter: function (val: number, index: any) {
          return val.toFixed(0);
        },
      },
    },
    fill: {
      opacity: 1,
    },
  };

  const chartTitle = " ";

  const stylesTranslator: any = {
    "Aplicação em Saúde": {
      icon: BiHeart,
      backgroundColor: "#61D9AB",
    },
    "Aplicação em Segurança": {
      icon: BiCheckShield,
      backgroundColor: "#0A8FDC",
    },
    "Aplicação em Educação": {
      icon: BiFoodMenu,
      backgroundColor: "#9E49E6",
    },
    "Aplicação em Assistência Social": {
      icon: BiBody,
      backgroundColor: "#FFA940",
    },
  };

  const { height, width } = useWindowDimensions();

  return (
    <ContainerHome title={title} description={description}>
      <Stack
        style={{
          paddingLeft: isMobile ? 0 : "0%",
          paddingRight: isMobile ? 0 : "0%",
        }}
      >
        <Head>
          <title>Início</title>
        </Head>

        <Box
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="2xl"
          padding={"2%"}
          rounded="md"
          display="flex"
          overflow="-moz-initial"
          width="100%"
        >
          <CardHome />
        </Box>
      </Stack>
    </ContainerHome>
  );
}

export default HomeScreen;
