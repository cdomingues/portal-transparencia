import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Divider, Link, ListItem, OrderedList, Stack, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { FaDownload } from "react-icons/fa";
import usePagina from '../../hooks/usePagina';

function Screen() {
  const accessibility = useFontSizeAccessibilityContext();
  const router = useRouter();
  
  const {paginaData, loadings, error} = usePagina("67");
  
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
       {conteudo && (
        <Box
          dangerouslySetInnerHTML={{ __html: conteudo }}
          sx={{
            p: { mb: 2, textAlign: "justify" },
            
          }}
        />
      )} 
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
