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
import React, { useState } from "react";
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
import PaginationComponent from "../../../components/PaginationComponent";
import axios from "axios";
import CsvDownload from "react-json-to-csv";
import moneyFormatter from "../../../utils/moneyFormatter";
import colors from "../../../styles/colors";

export interface Cargos {
  descricao: string;
  horas_semanais: string;
}

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

const ITEMS_PER_PAGE = 50;



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
  const [currentPage, setCurrentPage] = useState(1);
  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };
  const accessibility = useFontSizeAccessibilityContext();

  const paginated = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "dados_cargas_horaria.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <Button
          width="180px"
          border="0"
          cursor="pointer"
          fontSize="20px"
          textColor="white"
          bgColor="#1c3c6e"
          _hover={{ bgColor: "#1c3c6e" }}
          height="40px"
          borderRadius="8px"
          mr="15px"
          transition="background-color 0.3s ease"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        >
          <CsvDownload
            filename={"dados_carga_horaria.csv"}
            data={data}
            style={{
              width: "100%",
              height: "100%",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "20px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            CSV
          </CsvDownload>
        </Button>

        <Button
          width="180px"
          border="0"
          cursor="pointer"
          fontSize="20px"
          textColor="white"
          bgColor="#1c3c6e"
          _hover={{ bgColor: "#1c3c6e" }}
          height="40px"
          borderRadius="8px"
          mr="15px"
          onClick={() => exportToJSON(data)}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        >
          JSON
        </Button>
      
        <Table mt='12px'>
  <Thead>
    <Tr  bg={colors.primaryDefault40p}
      color="white"
      p={4}
      fontWeight="bold"
      border={`1px solid ${colors.primaryDefault40p}`}>
      <Th color="white">Cargo</Th>
      <Th color="white">Carga Horária</Th>
      
    </Tr>
  </Thead>
  <Tbody fontSize='12px'>
    
    {paginated.map((row, index) => (
    
      <Tr key={index}
       bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
          _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("white", "black") }}
          color={useColorModeValue("black", "white")}
      >
        
       <Td>{row.descricao}</Td>
        <Td>{row.horas_semanais}</Td>
        
      </Tr>
    ))}
  </Tbody>
</Table>
<PaginationComponent pages={Math.ceil(data.length / ITEMS_PER_PAGE)} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
       
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
