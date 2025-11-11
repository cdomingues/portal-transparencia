import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { Button } from "@chakra-ui/react";
import usePagina  from '../../../hooks/usePagina';

type PropsInput = {
  handler: {};
};


function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  
  const router = useRouter();

  const {paginaData, loadings, error} = usePagina("34");
  
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
        <Button
          width='500px'
          mb="20px"
         
          fontWeight="700"
          fontSize={accessibility?.fonts?.regular}
        > <Link 
         onClick={() => {
                
                window.open("https://portaldatransparencia.gov.br/sancoes/consulta?cadastro=1&ordenarPor=nomeSancionado&direcao=asc", '_blank');
              }}
       >Cadastro Cadastro Nacional de Empresas Idôneas e Suspensas </Link>
       </Button>
<br/>
       <Button
           width='500px'
          mb="20px"
         
          fontWeight="700"
          fontSize={accessibility?.fonts?.regular}
        > <Link 
         onClick={() => {
                
                window.open("https://www.tce.sp.gov.br/pesquisa-relacao-apenados", '_blank');
              }}
       >Relação de Apenados do TCESP   </Link>
       </Button>

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
