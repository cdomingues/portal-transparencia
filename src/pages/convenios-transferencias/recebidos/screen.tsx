import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Icon,
  Link,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import Chart from "../../../components/Chart"
import ContainerBasic from "../../../components/Container/Basic";
import  {useFontSizeAccessibilityContext} from '../../../context/fontSizeAccessibility'
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../components/Table";
import { AiOutlineDownload } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

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
  const accessibility = useFontSizeAccessibilityContext()

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
      <Stack direction="row">
        <Stack minW={86} width="25%">
          
        </Stack>
        <Stack minW={50} width="10%" justifyContent="flex-end">
        <Box display="flex" alignContent="center" flexDirection={isMobile ?  "column" : "column"}>
      
      
        </Box>
        
    

          
         
        
       
      
        </Stack>
        
      </Stack>
      
      <Divider borderWidth="2px" mt="10" mb="10" />
      <TableComponent loading={loading} columns={columns} data={data} />
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
