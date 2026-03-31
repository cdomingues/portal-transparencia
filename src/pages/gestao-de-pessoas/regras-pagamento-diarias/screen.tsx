import {
  Button,
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
import React, { useEffect, useState } from "react";
import CsvDownload from "react-json-to-csv";
import ContainerBasic from "../../../components/Container/Basic";
import PaginationComponent from "../../../components/PaginationComponent";

import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import colors from "../../../styles/colors";
import usePagina from '../../../hooks/usePagina';

export interface Cargos {
  descricao: string;
  horas_semanais: string;
}

const ITEMS_PER_PAGE = 50;

function Screen() {
  
  const accessibility = useFontSizeAccessibilityContext();

   const {paginaData, loadings, error} = usePagina("90");
  
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
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
       
       <Box
           dangerouslySetInnerHTML={{ __html: conteudo }}
           sx={{
             
           }}
         />

        
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
