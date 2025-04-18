import React from "react";
import Head from "next/head";
//import BlogComponent from "../components/Blog";
//import { News } from "../types";
import { PublicPolicyData } from "../api/totalizador/politicas-publicas";
import CardHorizon from "../../components/CardHorizon";

import despesas_emendas_parlamentares from "../../assets/images/icones/despesas emendas parlamentares.svg";
import despesas_e_investimentos_gerais from "../../assets/images/icones/despesas e investimentos gerais.svg";
import despesas_multas_de_transito from "../../assets/images/icones/despesas multas de transito.svg";
import contratos_e_atas from "../../assets/images/icones/contratos e atas.svg";
import gastos_com_publicidade from "../../assets/images/icones/gastos com publicidade.svg";
import relatorio_resumido from "../../assets/images/icones/relatorio_resumido.svg";
import receitas_emendas_parlamentares from "../../assets/images/icones/receitas emendas parlamentares.svg";
import receitas_multas_de_transito from "../../assets/images/icones/receitas multas de transito.svg";
import restos_a_pagar from "../../assets/images/icones/restos a pagar.svg";
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
  titlePage: "Execução Orçamentária ",
  description:
    "É o processo de planejamento, execução, controle e acompanhamento dos recursos financeiros da Prefeitura de Mogi das Cruzes. Ela envolve a elaboração de um plano financeiro detalhado, conhecido como orçamento, que descreve as receitas esperadas e as despesas planejadas durante um ano. ",
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
                      title="Receitas - Gerais"
                      imageURL={receitas_multas_de_transito.src}
                      description=""
                      link="gestao-orcamentaria/receitas"
                      backgroundColor="transparent"
                    />
                  </Box>
                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Receitas - Emendas Parlamentares"
                      imageURL={receitas_emendas_parlamentares.src}
                      description="A arrecadação de receitas para o município pode vir de diferentes fontes. As emendas parlamentares, indicadas por Deputados Federais e Estaduais, são uma forma da cidade ter acesso a recursos. Acompanhe nesta página o descritivo das emendas parlamentares recebidas pela Prefeitura de Mogi das Cruzes."
                      link="gestao-orcamentaria/receitas/receitas-emendas"
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
                  
                  </Box>
                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Despesas - Gerais"
                      imageURL={despesas_e_investimentos_gerais.src}
                      description="Para que a cidade possa continuar se desenvolvendo e os serviços possam permanecer funcionando e melhorando, a Prefeitura precisa realizar despesas das mais diversas, assim como investimentos. Aqui você pode conferir as informações das despesas públicas gerais empenhadas, liquidadas e pagas, entendendo os valores direcionados para cada programa."
                      link="gestao-orcamentaria/despesas/despesas-gerais"
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
                      title="Despesas - Emendas Parlamentares"
                      imageURL={despesas_emendas_parlamentares.src}
                      description="Confira nesta página as despesas empenhadas, liquidadas e pagas a partir dos recursos obtidos por meio de emendas parlamentares"
                      link="gestao-orcamentaria/despesas/despesas-emendas"
                      backgroundColor="transparent"
                    />
                  </Box>
                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Despesas - Multas de Trânsito"
                      imageURL={despesas_multas_de_transito.src}
                      description="Confira nesta página as despesas empenhadas, liquidadas e pagas a partir da arrecadação com multas de trânsito."
                      link="gestao-orcamentaria/despesas/despesas-multas-transito"
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
                      title="Despesas - Restos a pagar"
                      imageURL={restos_a_pagar.src}
                      description="Os restos a pagar são as despesas que a com compromisso de serem utilizadas dentro do orçamento, mas que não foram pagas até o final do exercício. Confira aqui as informações sobre as despesas empenhadas, liquidadas e pagas relativas a essa natureza."
                      link="gestao-orcamentaria/despesas/despesas-restos"
                      backgroundColor="transparent"
                    />
                  </Box>

                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Pagamentos"
                      imageURL={restos_a_pagar.src}
                      description="Os restos a pagar são as despesas que a com compromisso de serem utilizadas dentro do orçamento, mas que não foram pagas até o final do exercício. Confira aqui as informações sobre as despesas empenhadas, liquidadas e pagas relativas a essa natureza."
                      link="gestao-orcamentaria/despesas/pagamentos"
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
                      title="Divida Ativa"
                      imageURL={restos_a_pagar.src}
                      description="Os restos a pagar são as despesas que a com compromisso de serem utilizadas dentro do orçamento, mas que não foram pagas até o final do exercício. Confira aqui as informações sobre as despesas empenhadas, liquidadas e pagas relativas a essa natureza."
                      link="gestao-orcamentaria/divida-ativa"
                      backgroundColor="transparent"
                    />
                  </Box>

                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Adiantamentos"
                      imageURL={restos_a_pagar.src}
                      description="Os restos a pagar são as despesas que a com compromisso de serem utilizadas dentro do orçamento, mas que não foram pagas até o final do exercício. Confira aqui as informações sobre as despesas empenhadas, liquidadas e pagas relativas a essa natureza."
                      link="gestao-orcamentaria/despesas/adiantamentos"
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
