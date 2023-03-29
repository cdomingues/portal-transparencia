import React from "react";
import Head from "next/head";
import ContainerWithAside from "../components/Container/WithAside";
import BlogComponent from "../components/Blog";
import TestimonialComponent from "../components/Testimonial";
import FeatureComponent from "../components/Feature";
import { News } from "../types";
import { PublicPolicyData } from "./api/totalizador/politicas-publicas";
import Card from "../components/Card";
import {
  background,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Skeleton,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import moneyFormatter from "../utils/moneyFormatter";
import moment from "moment";
import { isMobile } from "react-device-detect";
import { featureDescriptions } from "../components/Feature/data";
import ChartColumnLineWithPartner from "../components/Antdesign/ChartPlots/ColumnLineWithPartner";
import { ChartContainer } from "../utils/styles";
import { BiBody, BiCheckShield, BiFoodMenu, BiHeart } from "react-icons/bi";
import useWindowDimensions from "../utils/getWindowSize";

type PropsInput = {
  handler: {
    news: Array<News>;
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

function Aside({ news }: { news: Array<News> }) {
  return (
    <div style={{ padding: "10px" }}>
      {news.map((item) => (
        <BlogComponent
          title={item.title}
          description={item.description}
          image={item.image}
          link={item.link}
          key={item.title}
          date={item.date}
        />
      ))}
    </div>
  );
}

function Feature({ text, icon, iconBg, lastIndex, index }: any) {
  const marginRight = lastIndex === index ? {} : { marginRight: "10%" };
  const colorIconBg = useColorModeValue(
    `${iconBg.left}.100`,
    `${iconBg.right}.900`
  );
  return (
    <Stack
      height="100px"
      style={marginRight}
      direction={"row"}
      align={"center"}
    >
      <Stack
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={colorIconBg}
      >
        {icon}
      </Stack>
      <Text fontWeight={600} fontSize="small">
        {text}
      </Text>
    </Stack>
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
}) => (
  <Stack
    direction="row"
    bg="white"
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
      <Text fontWeight="500" fontSize="small" color="gray.600">
        {funcao}
      </Text>
      <Text fontSize="small" mb={2} fontWeight="550">
        {moneyFormatter(valor)}
      </Text>
    </Stack>
  </Stack>
);

function HomeScreen({ handler }: PropsInput) {
  const {
    news,
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

  const titlePage = "Boas-vindas ao Portal da Transparência de Mogi!";
  const description =
    "O lugar onde o controle social começa! Acompanhe todas as informações de receitas e despesas da Prefeitura, com detalhamento e maior facilidade de entendimento.";

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
      style={{ width: "100%", height: "100%"}}
    >
      <Stack flex={width > 1024 ? 2 : 2} paddingLeft={10} paddingTop={5}>
        <Head>
          <title>Início</title>
        </Head>

        <Stack 
        spacing={4}
        >
          <Heading fontSize="lg">{titlePage}</Heading>
          <Text color={"gray.500"} fontSize="md">
            {description}
          </Text>
          {/* <Text color={"gray.500"} fontSize="sm">
            Ultima atualização: {date}
          </Text> */}
        </Stack>
        <Stack 
        >
          <Heading mt={10} mb={4} fontSize="md">
            Resumo {moment().year()}
          </Heading>
          <StatGroup 
          width="100%" mb={20} flexDirection={isMobile ? "column" : "row"}
          >
            <Stat mb={isMobile ? 6 : 0}>
              <StatLabel height="40px" color="black">
                Arrecadações
              </StatLabel>
              <StatNumber fontSize="medium" mb={2} color="black">
                {moneyFormatter(revenueAmount)}
              </StatNumber>
              <StatHelpText mb={0} color="black">
                Valor Previsto para o ano: {moneyFormatter(revenueProvided)}
              </StatHelpText>
              <StatHelpText color="black">
                Alcançado: {revenuePercentageReached}%
              </StatHelpText>
            </Stat>
            <Stat
            >
              <StatLabel height="40px" color="black">
                Despesas e Investimentos
              </StatLabel>
              <StatNumber fontSize="medium" mb={2} color="black">
                {moneyFormatter(expenseAmount)}
              </StatNumber>
              <StatHelpText mb={0} color="black">
                Valor Previsto para o ano: {moneyFormatter(expenseProvided)}
              </StatHelpText>
              <StatHelpText color="black">
                Alcançado: {expensePercentageReached}%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Stack>
        <Divider mb={10} />
        <Heading
          fontSize="md"
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
        ) : (
          <>
            {graphConfig?.data?.length > 0 && (
              <ChartContainer>
                <ChartColumnLineWithPartner
                  config={{ ...graphConfig, width: "800px" }}
                />
              </ChartContainer>
            )}
          </>
        )}
        </Stack>
        {/* {chartLoading ? (
          <Box padding="6" bg="transparent">
            {[1, 2, 3, 4, 4, 5, 6, 7].map((number, index) => (
              <Skeleton height="20px" mt="4" key={index} />
            ))}
          </Box>
        ) : (
          <>
            {graphConfig?.data?.length > 0 && (
              <ChartContainer>
                <ChartColumnLineWithPartner
                  config={{ ...graphConfig, width: "800px" }}
                />
              </ChartContainer>
            )}
          </>
        )} */}

        <Divider mb="6%" />

        {/* <Heading fontSize="md" style={{ marginTop: "30px" }}>
          Políticas Públicas
        </Heading> */}

        {/* <Stack
          mb={10}
          direction={isMobile ? "column" : "row"}
          align={isMobile ? "left" : "center"}
          justifyContent={isMobile ? "flex-start" : "center"}
          style={{backgroundColor: "white"}}
        >
          {publicPoliciesLoading ? (
          <Box padding="6" bg="transparent" flexDirection="row" >
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
                  style={{backgroundColor: "blue"}}
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

        </Stack> */}

        {/* <Stack
          mb={10}
          direction={isMobile ? "column" : "row"}
          align={isMobile ? "left" : "center"}
          justifyContent={isMobile ? "flex-start" : "center"}
          style={{backgroundColor: "red"}}
        >
          {publicPoliciesLoading ? (
          <Box padding="6" bg="transparent" flexDirection="row" >
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
                  style={{backgroundColor: "red"}}
                >
                  {[publicPolicies[2], publicPolicies[3]]?.map(
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

        </Stack> */}

        <Stack 
        direction="column"
        >
        <Heading fontSize="md" style={{ marginTop: "30px" }}>
          Políticas Públicas
        </Heading>
          <StatGroup 
          width="100%" mb={20}
          // style={{backgroundColor: "white"}}
          >
            <Stat
            // style={{backgroundColor: "blue"}}
            >
              <Stack
          direction={isMobile ? "column" : "row"}
          align={isMobile ? "left" : "center"}
          justifyContent={isMobile ? "flex-start" : "center"}
        >
          {publicPoliciesLoading ? (
          <Box padding="6" bg="transparent" flexDirection="row" >
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
                  // style={{backgroundColor: "black"}}
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
        

              
              {/* <StatLabel height="40px" color="black">
                Arrecadações
              </StatLabel>
              <StatNumber fontSize="medium" mb={2} color="black">
                {moneyFormatter(revenueAmount)}
              </StatNumber>
              <StatHelpText mb={0} color="black">
                Valor Previsto: {moneyFormatter(revenueProvided)}
              </StatHelpText>
              <StatHelpText color="black">
                Alcançado: {revenuePercentageReached}%
              </StatHelpText> */}
            </Stat>
            <Stat
            >
              <Stack
          direction={isMobile ? "column" : "row"}
          align={isMobile ? "left" : "center"}
          justifyContent={isMobile ? "flex-start" : "center"}
          // style={{backgroundColor: "black"}}
        >
          {publicPoliciesLoading ? (
          <Box padding="6" bg="transparent" flexDirection="row" >
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
                  // style={{backgroundColor: "red"}}
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

        <Stack 
        direction="column"
        // style={{backgroundColor: "red"}}
        >
          <StatGroup 
          width="100%" mb={20}
          // style={{backgroundColor: "white"}}
          >
            <Stat
            // style={{backgroundColor: "red"}}
            >
              <Stack
          direction={isMobile ? "column" : "row"}
          align={isMobile ? "left" : "center"}
          justifyContent={isMobile ? "flex-start" : "center"}
          // style={{backgroundColor: "white"}}
        >
          {publicPoliciesLoading ? (
          <Box padding="6" bg="transparent" flexDirection="row" >
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
                  // style={{backgroundColor: "blue"}}
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
        

              
              {/* <StatLabel height="40px" color="black">
                Arrecadações
              </StatLabel>
              <StatNumber fontSize="medium" mb={2} color="black">
                {moneyFormatter(revenueAmount)}
              </StatNumber>
              <StatHelpText mb={0} color="black">
                Valor Previsto: {moneyFormatter(revenueProvided)}
              </StatHelpText>
              <StatHelpText color="black">
                Alcançado: {revenuePercentageReached}%
              </StatHelpText> */}
            </Stat>
            <Stat
            >
              <Stack
          direction={isMobile ? "column" : "row"}
          align={isMobile ? "left" : "center"}
          justifyContent={isMobile ? "flex-start" : "center"}
          // style={{backgroundColor: "white"}}
        >
          {publicPoliciesLoading ? (
          <Box padding="6" bg="transparent" flexDirection="row" >
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
                  // style={{backgroundColor: "blue"}}
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

        {/* {publicPoliciesLoading ? (
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
                  {[publicPolicies[0], publicPolicies[1]]?.map(
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
                <Flex
                  direction={isMobile ? "column" : "row"}
                  align={isMobile ? "left" : "center"}
                >
                  {[publicPolicies[2], publicPolicies[3]]?.map(
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
        )} */}

        {/* <FeatureComponent
          publicPolicies={publicPolicies}
          expenseAmount={expenseAmount}
          expensePercentageReached={expensePercentageReached}
          expenseProvided={expenseProvided}
          revenueAmount={revenueAmount}
          revenuePercentageReached={revenuePercentageReached}
          revenueProvided={revenueProvided}
          expenseLoanding={expenseLoanding}
          revenueLoading={revenueLoading}
          chart={graphConfig}
          publicPoliciesLoading={publicPoliciesLoading}
          chartLoading={chartLoading}
        /> */}
           <Text color={"gray.500"} fontSize="sm">
            Última atualização: {date}
          </Text>
      </Stack>
      
      
      <Stack flex={width > 1024 ? 1 : 2}>
        <Aside news={news} />
      </Stack>
    </Stack>
  );
}

export default HomeScreen;
