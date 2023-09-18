import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import Chart from "../../../components/Chart"
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
    years: Number[];
    setYear: any;
    year: number;
    handleByYear: any;
  };
};

export const contentAdvertisements = {
  titlePage: "Convênios e Transferências Recebidos",
  description: "Divulgação da lista de Convênios e Transferências recebidos pela Prefeitura de Mogi das Cruzes é uma medida fundamental cujo propósito é reforçar a transparência das finanças municipais e promover a responsabilidade fiscal.",
}

function Screen({
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
  const title = contentAdvertisements?.titlePage;
  const description = contentAdvertisements?.description;

  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };

  return (
    <ContainerBasic title={title} description={description}>
   
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
      <Text fontSize="sm" fontWeight="550" paddingLeft="5px" paddingTop="10px"> Desculpe, falha ao carregar os dados, perda de conexão com o servidor de dados</Text>

      <Divider borderWidth="2px" mt="10" mb="10" />
      <TableComponent loading={loading} columns={columns} data={data} />
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
