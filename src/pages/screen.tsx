import React from "react";
import Head from "next/head";
//import BlogComponent from "../components/Blog";
//import { News } from "../types";
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
import { ChartContainer } from "../utils/styles";
import { BiBody, BiCheckShield, BiFoodMenu, BiHeart } from "react-icons/bi";
import useWindowDimensions from "../utils/getWindowSize";
import { useFontSizeAccessibilityContext } from "../context/fontSizeAccessibility";
import noticias from '../../data/noticias.json'
//import News from "../../components/News";
//import News from "../components/News";
import DisplayNews from "../components/NewsHome";


type PropsInput = {
  handler: {
    //news: Array<News>;
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
  titlePage: "Boas-vindas ao Portal da Transparência de Mogi!",
  description:
    "O lugar onde o controle social começa! Acompanhe todas as informações de receitas e despesas da Prefeitura, com detalhamento e maior facilidade de entendimento.",
};

 function Aside() {
  return (
    <div style={{ padding: "10px", width:"400px"}}>
      {
            noticias.slice(0,2).map((info)=>{
             return( 
             
              <DisplayNews 
                 key={info.descricao}
                 data_noticia={info.data_noticia}
                 descricao={info.descricao}
                 foto={info.foto} 
                 titulo={info.titulo} 
                 link={info.link}   
                 
                
            />
             )
            })
          }
          <div style={{ padding: "50px", width:"100%"}} >

<Button      
            minW={55}
            w={'100%'}
            _hover={{ bg: "gray.500", color: "white" }}
            bg="table.primary"
            color="white"
            >Veja outras noticias</Button>
</div>

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
            fontSize="30px"
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
  const titlePage = contentInitial?.titlePage;
  const description = contentInitial?.description;

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
    <Stack
      direction={isMobile ? "column" : "row"}
      style={{ width: "100%", height: "100%" }}
    >
      <Stack
        flex={width > 1024 ? 2 : 2}
        style={{ paddingLeft: isMobile ? 0 : "2%" }}
      >
        <Head>
          <title>Início</title>
        </Head>

        <Stack spacing={4}>
          <Heading fontSize={accessibility?.fonts?.highLarge}>
            {titlePage}
          </Heading>
          <Text color={"gray.500"} fontSize={accessibility?.fonts?.regular}>
            {description}
          </Text>
          {/* <Text color={"gray.500"} fontSize="sm">
            Ultima atualização: {date}
          </Text> */}
        </Stack>
        <Stack>
          <Heading mt={10} mb={4} fontSize={accessibility?.fonts?.regular}>
            Resumo {moment().year()}
          </Heading>
          <StatGroup
            width="100%"
            mb={20}
            flexDirection={isMobile ? "column" : "row"}
          >
            {/* <div>
              <Text
                height="40px"
                fontWeight="500"
                fontSize="sm"
                color={useColorModeValue("black", "white")}
              >
                Arrecadações
              </Text>
              <Text
                fontSize="medium"
                mb={2}
                fontWeight="500"
                color={useColorModeValue("black", "white")}
              >
                {moneyFormatter(revenueAmount)}
              </Text>
              <Text
                mb={0}
                fontSize="sm"
                opacity={1}
                color={useColorModeValue("black", "white")}
              >
                Valor Previsto para o ano: <br />
                {moneyFormatter(revenueProvided)}
              </Text>
              <Text
                fontSize="sm"
                opacity={1}
                color={useColorModeValue("black", "white")}
              >
                Alcançado: {revenuePercentageReached}%
              </Text>
            </div> */}
            <Stat mb={isMobile ? 6 : 0} position="unset">
              <StatLabel
                height="40px"
                color={useColorModeValue("black", "white")}
              >
                Arrecadações
              </StatLabel>
              <StatNumber
                fontSize="medium"
                mb={2}
                color={useColorModeValue("black", "white")}
              >
                {moneyFormatter(revenueAmount)}
              </StatNumber>
              <StatHelpText
                mb={0}
                opacity={1}
                color={useColorModeValue("black", "white")}
              >
                Valor Previsto para o ano: {moneyFormatter(revenueProvided)}
              </StatHelpText>
              <StatHelpText
                opacity={1}
                color={useColorModeValue("black", "white")}
              >
                Alcançado: {revenuePercentageReached}%
              </StatHelpText>
            </Stat>
            <Stat position="unset">
              <StatLabel
                height="40px"
                color={useColorModeValue("black", "white")}
              >
                Despesas e Investimentos
              </StatLabel>
              <StatNumber
                fontSize="medium"
                mb={2}
                color={useColorModeValue("black", "white")}
              >
                {moneyFormatter(expenseAmount)}
              </StatNumber>
              <StatHelpText
                opacity={1}
                mb={0}
                color={useColorModeValue("black", "white")}
              >
                Valor Previsto para o ano: {moneyFormatter(expenseProvided)}
              </StatHelpText>
              <StatHelpText
                opacity={1}
                color={useColorModeValue("black", "white")}
              >
                Alcançado: {expensePercentageReached}%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Stack>
        <Divider mb={10} />
        <Heading
          fontSize={accessibility?.fonts?.regular}
          mb={9}
          style={{ marginBottom: "30px", marginTop: "30px" }}
        >
          Arrecadações e Acumulados - {moment().year()}
        </Heading>
        <Stack
          mb={10}
          direction={isMobile ? "column" : "row"}
          align={isMobile ? "left" : "center"}
          justifyContent={isMobile ? "flex-start" : "center"}
        >
          {chartLoading ? (
            <Box padding="6" bg="transparent">
              {[1, 2, 3, 4, 4, 5, 6, 7].map((number, index) => (
                <Skeleton height="20px" mt="4" key={index} />
              ))}
            </Box>
          ) : graphConfig?.datasets?.length > 0 ? (
            <ChartContainer>
              <Chart
                moneyFormat
                data={{
                  labels: graphConfig?.labels,
                  datasets: graphConfig?.datasets,
                }}
              />
            </ChartContainer>
          ) : null}
        </Stack>

        <Divider mb="6%" />

        <Stack direction="column">
          <Heading
            fontSize={accessibility?.fonts?.regular}
            style={{ marginTop: "30px" }}
          >
            Políticas Públicas
          </Heading>
          <StatGroup width="100%" mb={20}>
            <Stat position="unset">
              <Stack
                direction={isMobile ? "column" : "row"}
                align={isMobile ? "left" : "center"}
                justifyContent={isMobile ? "flex-start" : "center"}
              >
                {publicPoliciesLoading ? (
                  <Box padding="6" bg="transparent" flexDirection="row">
                    {[1, 2, 3, 4].map((number, index) => (
                      <Skeleton height="20px" mt="4" key={index} />
                    ))}
                  </Box>
                ) : (
                  <>
                    {publicPolicies.length > 0 && (
                      <>
                        <Flex
                          style={{ marginTop: "30px" }}
                          direction={isMobile ? "column" : "row"}
                          align={isMobile ? "left" : "center"}
                        >
                          {[publicPolicies[0]]?.map(
                            ({ funcao, valor }, index) => {
                              return (
                                <PublicPolicyCard
                                  key={index}
                                  funcao={funcao}
                                  valor={valor}
                                  stylesTranslator={stylesTranslator}
                                />
                              );
                            }
                          )}
                        </Flex>
                      </>
                    )}
                  </>
                )}
              </Stack>
            </Stat>
            <Stat position="unset">
              <Stack
                direction={isMobile ? "column" : "row"}
                align={isMobile ? "left" : "center"}
                justifyContent={isMobile ? "flex-start" : "center"}
              >
                {publicPoliciesLoading ? (
                  <Box padding="6" bg="transparent" flexDirection="row">
                    {[1, 2, 3, 4].map((number, index) => (
                      <Skeleton height="20px" mt="4" key={index} />
                    ))}
                  </Box>
                ) : (
                  <>
                    {publicPolicies.length > 0 && (
                      <>
                        <Flex
                          style={{ marginTop: "30px" }}
                          direction={isMobile ? "column" : "row"}
                          align={isMobile ? "left" : "center"}
                        >
                          {[publicPolicies[1]]?.map(
                            ({ funcao, valor }, index) => {
                              return (
                                <PublicPolicyCard
                                  key={index}
                                  funcao={funcao}
                                  valor={valor}
                                  stylesTranslator={stylesTranslator}
                                />
                              );
                            }
                          )}
                        </Flex>
                      </>
                    )}
                  </>
                )}
              </Stack>
            </Stat>
          </StatGroup>
        </Stack>

        <Stack direction="column">
          <StatGroup width="100%" mb={20}>
            <Stat position="unset">
              <Stack
                direction={isMobile ? "column" : "row"}
                align={isMobile ? "left" : "center"}
                justifyContent={isMobile ? "flex-start" : "center"}
              >
                {publicPoliciesLoading ? (
                  <Box padding="6" bg="transparent" flexDirection="row">
                    {[1, 2, 3, 4].map((number, index) => (
                      <Skeleton height="20px" mt="4" key={index} />
                    ))}
                  </Box>
                ) : (
                  <>
                    {publicPolicies.length > 0 && (
                      <>
                        <Flex
                          style={{ marginTop: "30px" }}
                          direction={isMobile ? "column" : "row"}
                          align={isMobile ? "left" : "center"}
                        >
                          {[publicPolicies[2]]?.map(
                            ({ funcao, valor }, index) => {
                              return (
                                <PublicPolicyCard
                                  key={index}
                                  funcao={funcao}
                                  valor={valor}
                                  stylesTranslator={stylesTranslator}
                                />
                              );
                            }
                          )}
                        </Flex>
                      </>
                    )}
                  </>
                )}
              </Stack>
            </Stat>
            <Stat position="unset">
              <Stack
                direction={isMobile ? "column" : "row"}
                align={isMobile ? "left" : "center"}
                justifyContent={isMobile ? "flex-start" : "center"}
              >
                {publicPoliciesLoading ? (
                  <Box padding="6" bg="transparent" flexDirection="row">
                    {[1, 2, 3, 4].map((number, index) => (
                      <Skeleton height="20px" mt="4" key={index} />
                    ))}
                  </Box>
                ) : (
                  <>
                    {publicPolicies.length > 0 && (
                      <>
                        <Flex
                          style={{ marginTop: "30px" }}
                          direction={isMobile ? "column" : "row"}
                          align={isMobile ? "left" : "center"}
                        >
                          {[publicPolicies[3]]?.map(
                            ({ funcao, valor }, index) => {
                              return (
                                <PublicPolicyCard
                                  key={index}
                                  funcao={funcao}
                                  valor={valor}
                                  stylesTranslator={stylesTranslator}
                                />
                              );
                            }
                          )}
                        </Flex>
                      </>
                    )}
                  </>
                )}
              </Stack>
            </Stat>
          </StatGroup>
        </Stack>
        <Text color={"gray.500"} fontSize={accessibility?.fonts?.medium}>
          Última atualização: {date}
        </Text>
      </Stack>
      <Stack flex={width > 1024 ? 1 : 2}>
      <Aside />
      </Stack>
    </Stack>
  );
}

export default HomeScreen;
