import { Button, Divider, Select, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Chart from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    chart: any;
    years: Number[];
    setYear: any;
    year: number;
    handleByYear: any;
  };
};

export const contentExpensesRemains = {
  titlePage: "Despesas - Restos a pagar",
  description: "Os restos a pagar são as despesas que a com compromisso de serem utilizadas dentro do orçamento, mas que não foram pagas até o final do exercício. Confira aqui as informações sobre as despesas empenhadas, liquidadas e pagas relativas a essa natureza.",
}

function Screen({
  handler: {
    columns,
    data,
    loading,
    chart,
    setYear,
    year,
    years,
    handleByYear,
  },
}: PropsInput) {
  const title = contentExpensesRemains?.titlePage;
  const description = contentExpensesRemains?.description;
  return (
    <ContainerBasic title={title} description={description}>
      {chart?.datasets?.length > 0 && (
        <Chart type="bar" moneyFormat data={chart} />
      )}
      <Divider borderWidth="2px" mt="10" mb="10" />

      <Stack direction="row">
        <Stack minW={86} width="25%">
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
        <Stack minW={50} width="10%" justifyContent="flex-end">
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

export default Screen;
