import { useColorModeValue, Box, Text, } from "@chakra-ui/react";
import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import ListarArquivos from "../../components/ListarArquivos";
import usePagina from '../../hooks/usePagina';

function Screen() {
  
  const {paginaData, loadings, error} = usePagina("85");
  
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
     <ListarArquivos tipoFiltro={22}/>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;

