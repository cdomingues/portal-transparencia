import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Button, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import usePagina  from '../../../hooks/usePagina';

type PropsInput = {
  handler: {};
};


function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const router = useRouter();
  
  const {paginaData, loadings, error} = usePagina("33");
  
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
       
       <Button onClick={() => window.open("https://pncp.gov.br/app/pca/46523270000188/2025", "_blank")}>Portal Nacional de Contratações Públicas - 2025</Button>
        <br/>
      
        <Button onClick={() => window.open("https://pncp.gov.br/app/pca/46523270000188/2026", "_blank")}
          mt={2}
          >Portal Nacional de Contratações Públicas - 2026</Button>

      </Box>

    
                     
    </ContainerBasic>
  );
}

export default Screen;
