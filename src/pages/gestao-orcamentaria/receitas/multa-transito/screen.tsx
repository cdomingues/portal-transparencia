import { Button, Divider, Select, Stack, Text, Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Chart from "../../../../components/Chart";
import ContainerBasic from "../../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../../components/Table";

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

export const contentTrafficFines = {
  titlePage: "Receitas - Multas de Trânsito e Concessões",
  description: "As receitas para o município podem vir de diferentes fontes. Uma delas são as multas de trânsito - que, por lei, essa arrecadação é destinada a fins específicos ligados à Mobilidade. Há também as concessões e outorgas, que também geram receita. Acompanhe nesta página o descritivo dos recursos provenientes de multas de trânsito, outorgas e concessões pela Prefeitura de Mogi das Cruzes.",
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
  const title = contentTrafficFines?.titlePage;
  const description = contentTrafficFines?.description;
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
      {chart?.datasets?.length > 0 && (
        <Chart type="bar" data={chart} />
      )}
      </Box>
    
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
