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

import DadosAbertos from "../../../components/DadosAbertos";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import moneyFormatter from "../../../utils/moneyFormatter";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    
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
      <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                mt="20px"
              >
               Base atualizada em 19/07/2024
                
                
              </Text>
       <TableComponent loading={loading} columns={columns} data={data} />
    <DadosAbertos data={data} />
      
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
