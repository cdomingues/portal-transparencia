import React, { ReactElement } from "react";
import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  StatHelpText,
  Divider,
  Box,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { featureDescriptions } from "./data";
import { Totalizer } from "../../types";
import moneyFormatter from "../../utils/moneyFormatter";
import moment from "moment";
import { PublicPolicyData } from "../../pages/api/totalizador/politicas-publicas";
import ChartColumnLineWithPartner from "../Antdesign/ChartPlots/ColumnLineWithPartner";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBody, BiCheckShield, BiFoodMenu, BiHeart } from "react-icons/bi";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
interface FeatureProps {
  text: string;
  iconBg: {
    left: string;
    right: string;
  };
  icon?: ReactElement;
  lastIndex: number;
  index: number;
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
    padding="4"
    height="100px"
    boxShadow="10px 10px 18px -9px rgba(0,0,0,0.75)"
    width="35%"
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
    <Stack flex={2}>
      <Stack flex={1} direction="column">
        <Stack flex={2}>
          <Text fontWeight="500" fontSize="sm" color="gray.600">
            {funcao}
          </Text>
        </Stack>
        <Stack flex={1}>
          <Text fontSize="medium" mb={2} fontWeight="550">
            {moneyFormatter(valor)}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);

function Feature({ text, icon, iconBg, lastIndex, index }: FeatureProps) {
  const marginRight = lastIndex === index ? {} : { marginRight: "10%" };
  const colorIconBg = useColorModeValue(
    `${iconBg.left}.100`,
    `${iconBg.right}.900`
  );
  return (
    <Stack style={marginRight} direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={colorIconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
}

type PropsInput = {
  expenseAmount: number;
  expensePercentageReached: number;
  expenseProvided: number;
  revenueAmount: number;
  revenuePercentageReached: number;
  revenueProvided: number;
  expenseLoanding: boolean;
  revenueLoading: boolean;
  publicPolicies: PublicPolicyData[];
  chart: any;
  publicPoliciesLoading: boolean;
  chartLoading: boolean;
};

export default function FeatureComponent({
  expenseAmount,
  expensePercentageReached,
  expenseProvided,
  revenueAmount,
  revenuePercentageReached,
  revenueProvided,
  expenseLoanding,
  revenueLoading,
  publicPolicies,
  chart,
  publicPoliciesLoading,
  chartLoading,
}: PropsInput) {
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

  const titlePage = "Boas-vindas ao Portal da Transparência de Mogi!";
  const description =
    "O lugar onde o controle social começa! Acompanhe todas as informações de receitas e despesas da Prefeitura, com detalhamento e maior facilidade de entendimento.";
    const accessibility = useFontSizeAccessibilityContext()
  return (
    <div style={{ width: "100%" }}>
      <SimpleGrid>
        <Stack spacing={4}>
          <Heading size={accessibility?.fonts?.highLarge}>{titlePage}</Heading>
          <Text color={"gray.500"} fontSize={accessibility?.fonts?.highLarge}>
            {description}
          </Text>
        </Stack>
        <Flex direction="column">
          <Heading mb={10} size={accessibility?.fonts?.highLarge}>
            Resumo {moment().year()}
          </Heading>
          <StatGroup width="100%" mb={20}>
            <Stat>
              <StatLabel height="40px">Arrecadações</StatLabel>
              <StatNumber fontSize="medium" mb={2}>
                {moneyFormatter(revenueAmount)}
              </StatNumber>
              <StatHelpText mb={0}>
                Valor Previsto para o ano: {moneyFormatter(revenueProvided)}
              </StatHelpText>
              <StatHelpText>
                Alcançado: {revenuePercentageReached}%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel height="40px">Despesas e Investimentos</StatLabel>
              <StatNumber fontSize="medium" mb={2}>
                {moneyFormatter(expenseAmount)}
              </StatNumber>
              <StatHelpText mb={0}>
                Valor Previsto para o ano: {moneyFormatter(expenseProvided)}
              </StatHelpText>
              <StatHelpText>
                Alcançado: {expensePercentageReached}%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Flex>
      </SimpleGrid>
      <Flex
        mb={10}
        direction={isMobile ? "column" : "row"}
        align={isMobile ? "left" : "center"}
        justifyContent={isMobile ? "flex-start" : "center"}
      >
        {featureDescriptions?.map(({ icon, color, text }, index) => {
          return (
            <Feature
              index={index}
              lastIndex={featureDescriptions.length - 1}
              icon={<Icon as={icon} color={`${color}.500`} w={5} h={5} />}
              iconBg={{ left: `${color}.100`, right: `${color}.900` }}
              text={text}
              key={index}
            />
          );
        })}
      </Flex>
      <Divider mb={10} />
      <Heading size={accessibility?.fonts?.highLarge} mb={9}>
        Arrecações e Acumulados - {moment().year()}
      </Heading>
      {chartLoading ? (
        <Box padding="6" bg="transparent">
          {[1, 2, 3, 4, 4, 5, 6, 7].map((number, index) => (
            <Skeleton height="20px" mt="4" key={index} />
          ))}
        </Box>
      ) : (
        <>
          {chart?.data?.length > 0 && (
            <ChartColumnLineWithPartner config={chart} />
          )}
        </>
      )}

      <Divider mb="6%" />
      <Heading size={accessibility?.fonts?.highLarge} mb={9}>
        Políticas Públicas
      </Heading>
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
                {[publicPolicies[1], publicPolicies[3]]?.map(
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
    </div>
  );
}
