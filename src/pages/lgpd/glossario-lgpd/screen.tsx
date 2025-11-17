import React from "react";
import {
  Box, Text, useColorModeValue,} from "@chakra-ui/react";
import useWindowDimensions from "../../../utils/getWindowSize";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import ContainerBasic from "../../../components/Container/Basic";
import usePagina from '../../../hooks/usePagina';

 function HomeScreen() {
  
  const accessibility = useFontSizeAccessibilityContext();
  const {paginaData, loadings, error} = usePagina("74");
    
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
     <ContainerBasic  title={titlePage} description={description}>
      <Box m={0}
bg={useColorModeValue("white", "gray.800")}

padding={"15px"}
rounded="md"
overflow="hidden"
maxWidth="100%"
borderRadius="18px"
marginBottom="15px">
     
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

export default HomeScreen;
