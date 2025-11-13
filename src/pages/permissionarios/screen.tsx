import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text, Box, Flex, Icon, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
//import Video from "../../components/Videos";
import { useRouter } from "next/router";
import ListaPermissionarios from "../../components/ListaPermissionarios";
import TableComponent, { TableColumns } from "../../components/Table";
import usePagina from '../../hooks/usePagina';


type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};


function Screen({ handler: { columns, data, loading } }: PropsInput) {
  
  const accessibility = useFontSizeAccessibilityContext();
  
  
  const router = useRouter();

  const {paginaData, loadings, error} = usePagina("44");
  
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
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        
        <TableComponent loading={loading} columns={columns} data={data} />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
