import {
  Box,
  Button,
  Divider,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Chart from "../../../../../components/Chart";
import ContainerBasic from "../../../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../../../components/Table";

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

export const contentGeneralCosts = {
  titlePage: "Despesas e Investimentos - Gerais",
  description:
    "Para que a cidade possa continuar se desenvolvendo e os serviços possam permanecer funcionando e melhorando, a Prefeitura precisa realizar despesas das mais diversas, assim como investimentos. Aqui você pode conferir as informações das despesas públicas gerais empenhadas, liquidadas e pagas, entendendo os valores direcionados para cada programa.",
};

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
  const title = contentGeneralCosts?.titlePage;
  const description = contentGeneralCosts?.description;
  return (
    <ContainerBasic title={title} description={description}>
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
      {chart?.datasets?.length > 0 && <Chart type="bar" data={chart} />}
      </Box>
      {/* <Divider height="3px" marginTop="10px" marginBottom="4px" /> */}
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
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
            w={'100px'}
            h={'40px'}
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
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
