import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import { Chart } from "../../components/Chart";
import ContainerBasic from "../../components/Container/Basic";
import { MultiAxisChart } from "../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../components/Table";

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
  const title = "Receitas";
  const description =
    "A Receita Realizada representa quanto de fato foi recebido pelo governo após o efetivo pagamento ou recolhimento do valor. É a arrecadação de fato do valor, que torna o valor disponível nos cofres públicos para uso pelo governo. O valor pode ser diferente da receita lançada e também do valor previsto.";

  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };

  return (
    <ContainerBasic title={title} description={description}>
      <div
        style={{
          display: "flex",
          flexDirection: chartConfig.direction as any,
          height: "100%",
        }}
      >
        <div
          style={{
            width: chartConfig.width,
            marginRight: chartConfig.marginRight,
            marginLeft: chartConfig.marginLeft,
          }}
        >
          <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
            Receitas Mensal Acumulado
          </Heading>
          {chart?.datasets?.length > 0 && (
            <MultiAxisChart moneyFormat data={chart} />
          )}
        </div>

        <div style={{ width: chartConfig.width }}>
          <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
            Receitas últimos 5 anos
          </Heading>
          {chartYear?.datasets?.length > 0 && (
            <Chart type="bar" moneyFormat data={chartYear} />
          )}
        </div>
      </div>
      <Divider borderWidth="2px" mt="10" mb="10" />
      <Stack direction="row">
        <Stack width="25%">
          <Text fontSize="sm" fontWeight="550" paddingLeft="5px">
            Ano
          </Text>
          <Select
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
    </ContainerBasic>
  );
}

export default RevenueScreen;
