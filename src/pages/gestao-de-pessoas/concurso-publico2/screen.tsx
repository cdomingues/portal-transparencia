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
import Chart from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../components/Table";
import ListDatasets from "../../../components/ListDatasets";
import DatasetList from "../../../components/ListDatasets";

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
  titlePage: "Concurso Público",
  description: "Informações sobre os atos dos concursos públicos e processos seletivos: vagas efetivamente preenchidas, lista de aprovados com as classificações, fila de espera/cadastro reserva e validade do concurso.",
}
function redirecionarParaLinkExterno() {
  setTimeout(function () {
    window.location.href = 'https://wwwtrans.mogidascruzes.sp.gov.br/concursos-publicos'; // Substitua pelo seu link externo
  }, 1000); // 1000 milissegundos = 1 segundo
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
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
      
      

      <Divider borderWidth="2px" mt="10" mb="10" />
      <DatasetList />
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
