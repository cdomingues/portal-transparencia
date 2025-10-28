import { Button, Divider, Select, Stack, Text, Box, useColorModeValue, UnorderedList, Link, ListItem } from "@chakra-ui/react";
import React from "react";
import Chart from "../../../../components/Chart";
import ContainerBasic from "../../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../../components/Table";
import { FaDownload } from "react-icons/fa";
import { useFontSizeAccessibilityContext } from "../../../../context/fontSizeAccessibility";
import usePagina from "../../../../hooks/usePagina";

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
   const { paginaData, loadings, error } = usePagina("6");
  const accessibility = useFontSizeAccessibilityContext();

   if (loadings) {
      return <Text>Carregando conteúdo...</Text>;
    }
  
   if (error) {
    return <Text>Erro ao carregar página: {(error as Error).message}</Text>;
  }
  
    if (!paginaData) {
      return <Text>Página não encontrada</Text>;
    }
  
    const { titulo: titlePage, descricao: description, conteudo } = paginaData;

  return (
    <ContainerBasic title={titlePage} description={description}>
       <Box
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          
          padding={"15px"}
          rounded="md"
          overflow="hidden"
          maxWidth="100%"
          borderRadius="18px"
          marginBottom="15px"
        >
    
      </Box>
      
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
        {conteudo && (
                 <Box
                   dangerouslySetInnerHTML={{ __html: conteudo }}
                   sx={{
                     p: { mb: 2, textAlign: "justify" },
                     a: {
                       color: "blue.600",
                       fontWeight: "bold",
                       textDecoration: "underline",
                     },
                   }}
                 />
               )}
       
    
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
