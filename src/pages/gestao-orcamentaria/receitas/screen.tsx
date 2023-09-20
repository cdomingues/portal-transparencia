import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import Chart from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../components/Table";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    chart: any;
    chartYear: any;
    setYear: any;
    years: Number[];
    handleByYear: any;
    year: number;
  };
};
export const contentRevenue = {
  titlePage: "Receitas",
  description:
    "De modo acessível e de fácil compreensão, acompanhe os valores e fontes de arrecadação do município, comparando a evolução entre os últimos anos e também a variação entre receita prevista e efetivamente arrecadada.",
};
function RevenueScreen({
  handler: {
    columns,
    data,
    loading,
    chart,
    chartYear,
    setYear,
    year,
    years,
    handleByYear,
  },
}: PropsInput) {
  const title = contentRevenue?.titlePage;
  const description = contentRevenue?.description;

  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
    marginBottom: isMobile ? 0.7 : 0,
  };

  return (
    <ContainerBasic title={title} description={description}>
      <MultipleGraphWrapper>
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
          <GraphWrapper>
            <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
              Receita Mensal Acumulada
            </Heading>
            {chart?.datasets?.length > 0 && (
              <React.Fragment>
                <MultiAxisChart
                  data={chart}
                  moneyFormat={true}
                  seriesName="Valor"
                  chartType="bar"
                />
                <MultiAxisChart
                  data={chart}
                  moneyFormat={true}
                  seriesName="Valor Acumulado"
                  chartType="line"
                />
              </React.Fragment>
            )}
          </GraphWrapper>
        </Box>

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
          <GraphWrapper>
            <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
              Receitas últimos 5 anos
            </Heading>
            {chartYear?.datasets?.length > 0 && (
              // <Chart type="bar" data={chartYear} />
              <React.Fragment>
                <MultiAxisChart
                  data={chartYear}
                  moneyFormat={true}
                  chartType="bar"
                />
              </React.Fragment>
            )}
          </GraphWrapper>
        </Box>

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
          <Divider borderWidth="2px" mt="10" mb="10" />

          <Stack direction="row">
            <Stack width="25%">
              <Text fontSize="sm" fontWeight="550" paddingLeft="5px">
                Ano
              </Text>
              <Select
                minW={92}
                defaultValue={year}
                onChange={(e) => setYear(e.target.value)}
                bg="white"
                variant="outline"
                placeholder="Selecionar Ano"
              >
                {years?.map((year, index) => (
                  <option key={index} value={String(year)}>
                    {String(year)}
                  </option>
                ))}
              </Select>
            </Stack>
            <Stack width="10%" justifyContent="flex-end">
              <Button
                disabled={loading}
                minW={55}
                onClick={() => handleByYear(year)}
                _hover={{ bg: "gray.500", color: "white" }}
                bg="table.primary"
                color="white"
                fontSize="small"
              >
                Buscar
              </Button>
            </Stack>
          </Stack>
          <Divider borderWidth="2px" mt="10" mb="10" />
          <TableComponent loading={loading} columns={columns} data={data} />
        </Box>
      </MultipleGraphWrapper>
    </ContainerBasic>
  );
}

export default RevenueScreen;
