import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  UnorderedList,
  Link,
  ListItem
} from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import Chart from "../../../../components/Chart";
import ContainerBasic from "../../../../components/Container/Basic";
import  {useFontSizeAccessibilityContext} from '../../../../context/fontSizeAccessibility'
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../../components/Table";
import { FaDownload } from "react-icons/fa";
import ListarArquivos from "../../../../components/ListarArquivos";

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
  titlePage: "Ordem Cronológica de Pagamentos",
  description: "Divulgação da ordem cronológica de seus pagamentos, bem como as justificativas que fundamentaram a eventual alteração dessa ordem.",
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
     
      
    
     
      <ListarArquivos tipoFiltro={16} />
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
