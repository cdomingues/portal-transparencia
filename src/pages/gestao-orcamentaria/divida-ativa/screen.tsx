import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td
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
import lista_devedores from '../../../../data/lista_devedores.json'
import DadosAbertos from "../../../components/DadosAbertos";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import moneyFormatter from "../../../utils/moneyFormatter";

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
  titlePage: "Dívida Ativa",
  description: "A divulgação da lista da dívida ativa realizada pela Prefeitura de Mogi das Cruzes é uma medida fundamental cujo propósito é reforçar a transparência das finanças municipais e promover a responsabilidade fiscal.",
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
  const accessibility = useFontSizeAccessibilityContext();

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
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
      <Table overflowX={'auto'} variant="striped"
            style={{
              borderCollapse: "collapse",
            }}>
      <Thead backgroundColor={useColorModeValue('table.primary', "gray.800")}>
        <Tr >
          <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.small,
                          
                        }}>CPF/CNPJ</Th>
          <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.small,
                          
                        }}>Nome</Th>
          <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.small,
                          
                        }}>Nome Fantasia</Th>
                        <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.small,
                          
                        }}>Valor Total</Th>
                       
        </Tr>
      </Thead>
      <Tbody>
        {lista_devedores.map(info => (
          <Tr key={info.id}>
            <Td style={{fontSize: accessibility?.fonts?.small}} >{info.id}</Td>
            <Td style={{fontSize: accessibility?.fonts?.small}} >{info.nome}</Td>
            <Td style={{fontSize: accessibility?.fonts?.small}} >{info.nome_fantasia}</Td>
            <Td style={{fontSize: accessibility?.fonts?.small}} >{moneyFormatter(info.valor_total)}</Td>
      </Tr>
        ))}
      </Tbody>
    </Table>
    <DadosAbertos data={lista_devedores} />
      
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
