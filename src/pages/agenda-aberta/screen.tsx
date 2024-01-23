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
import agenda_caio from "../../assets/images/icones/agenda aberta__agenda caio.svg";
import agenda_priscila from "../../assets/images/icones/agenda aberta__agenda priscila.svg";
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
  titlePage: "Agenda Aberta",
  description:
    "O lugar onde o controle social começa! Acompanhe todas as informações de receitas e despesas da Prefeitura, com detalhamento e maior facilidade de entendimento.",
};

function Aside() {
  return (
    <div style={{ width: "380px", justifyContent: "left" }}>
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
              Agenda pública das autoridades municipais
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
                      title="Agenda Prefeito - Caio Cunha"
                      imageURL={agenda_caio.src}
                      description="Conforme previsto na Lei Municipal 7.653/2021 e no Decreto 21.006/22, todo cidadão pode ter acesso à agenda de compromissos oficiais das autoridades do Executivo de Mogi das Cruzes. Esta é mais uma medida de promoção da integridade no setor público."
                      link="agenda-aberta/agenda-prefeito"
                      backgroundColor="transparent"
                    />
                  </Box>

                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Agenda Co-Prefeita
                    Priscila Yamagami"
                      imageURL={agenda_priscila.src}
                      description="Conforme previsto na Lei Municipal nº  7.653/2021 e no Decreto nº  21.006/22, todo cidadão pode ter acesso à agenda de compromissos oficiais das autoridades do Executivo de Mogi das Cruzes. Esta é mais uma medida de promoção da integridade no setor público."
                      link="agenda-aberta/agenda-coprefeita"
                      backgroundColor="transparent"
                    />
                  </Box>
                </Stack>

                <Stack
                  direction={isMobile ? "column" : "row"}
                  align={isMobile ? "center" : "center"}
                  justifyContent={isMobile ? "flex-start" : "center"}
                >
                  <Box padding="2 " bg="transparent" flexDirection="row" >
                    <CardHorizon
                      title="Agenda Demais Autoridades "
                      imageURL={agenda_caio.src}
                      description="Conforme previsto na Lei Municipal 7.653/2021 e no Decreto 21.006/22, todo cidadão pode ter acesso à agenda de compromissos oficiais das autoridades do Executivo de Mogi das Cruzes. Esta é mais uma medida de promoção da integridade no setor público."
                      link="agenda-aberta/agenda-secretarios"
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
