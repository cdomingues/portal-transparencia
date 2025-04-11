import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
 useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import  Chart  from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../components/Table";
import colors from "../../../styles/colors";
import moneyFormatter from "../../../utils/moneyFormatter";
//import Video from "../../../components/Videos";

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

export const contentCovidExpenses = {
  titlePage: "Despesas COVID-19",
  description: "Dispõe das despesas empenhadas, liquidadas e pagas realizadas pelo órgão público para enfrentamento da emergência de saúde pública de importância internacional decorrente do coronavírus (COVID-19).",
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
  const title = contentCovidExpenses?.titlePage;
  const description = contentCovidExpenses?.description;
  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };
  

  return (
    <ContainerBasic title={title} description={description}>
     
    
      <Divider borderWidth="2px" mt="10" mb="10" />

      <Stack direction="row">
        <Stack minW={86} width="25%">
          <Text fontSize="sm" fontWeight="550" paddingLeft="5px">
            Ano
          </Text>
          <Select
            defaultValue={year}
            onChange={(e) => setYear(e.target.value)}
           // bg="white"
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
      <Table >
        <Thead>
          <Tr  bg={colors.primaryDefault40p}
            color="white"
            p={4}
            fontWeight="bold"
            border={`1px solid ${colors.primaryDefault40p}`}>
            <Th color="white">Ano</Th>
            <Th color="white">Mês</Th>
            <Th color="white">CPF / CNPJ favorecido</Th>
            <Th color="white">Unidade Orçamentária</Th>
            <Th color="white">Funcional Programática</Th>
            <Th color="white">Função</Th>
            <Th color="white">Subfunção</Th>
            <Th color="white">Fonte do recurso</Th>
            <Th color="white">Valor empenhado</Th>
            <Th color="white">Valor liquidado</Th>
            
          </Tr>
        </Thead>
        <Tbody fontSize='12px'>
          
          {data.map((row, index) => (
          
          <Tr 
        key={row.receita} 
            bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
            _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("black", "white") }}
            color={useColorModeValue("black", "white")}
        >
              <Td>{row.ano} </Td> 
             <Td>{row.mes}</Td>
             <Td>{row.cnpj_cpf_favorecido}</Td>
              <Td>{row.unidadeorc}</Td>
              <Td>{row.funcionalprogramatica}</Td>
              <Td>{row.funcao}</Td>
              <Td>{row.subfuncao}</Td>
              <Td>{row.fonterecurso}</Td>
              <Td>{row.valorempenhado !== null ? moneyFormatter(row.valorempenhado) : '-'}</Td>
              <Td>{row.valorliquidado !== null ? moneyFormatter(row.valorliquidado) : '-'}</Td>
              
            </Tr>
          ))}
        </Tbody>
      </Table>
    </ContainerBasic>
  );
}

export default Screen;
