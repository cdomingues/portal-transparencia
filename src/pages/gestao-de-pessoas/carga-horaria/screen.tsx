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
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import ChartColumn from "../../../components/Antdesign/ChartPlots/ChartColumn";
import ChartColumnLineWithPartner from "../../../components/Antdesign/ChartPlots/ColumnLineWithPartner";
import Chart from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../components/Table";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import carga_horaria from '../../../../data/carga_horaria.json'
import DadosAbertos from "../../../components/DadosAbertos";

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

export const contentTransportationTickets = {
  titlePage: "Carga Horária",
  description:
    "Carga Horária de cada cargo",
};

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
  const title = contentTransportationTickets?.titlePage;
  const description = contentTransportationTickets?.description;
  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };
  const accessibility = useFontSizeAccessibilityContext();
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
       

       
        <Box overflowX={'auto'}>

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
                          fontSize: accessibility?.fonts?.regular,
                          
                        }}>ID</Th>
          <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.regular,
                          
                        }}>Descrição</Th>
          <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.regular,
                          
                        }}>Horas Semanais</Th>
        </Tr>
      </Thead>
      <Tbody>
        {carga_horaria.map(info => (
          <Tr key={info.id}>
            <Td>{info.id}</Td>
            <Td>{info.descricao}</Td>
            <Td>{info.horas_semanais}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
<DadosAbertos data={carga_horaria} />
        
        </Box>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
