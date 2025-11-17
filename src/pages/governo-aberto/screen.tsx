import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Img, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import governo_aberto from '../../assets/images/governo-aberto.png'
import cronograma1 from '../../assets/images/cronograma1.png'
import cronograma2 from '../../assets/images/cronograma2.png'
import usePagina from '../../hooks/usePagina';

type PropsInput = {
  handler: {};
};


function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const router = useRouter();

const {paginaData, loadings, error} = usePagina("66");

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


<Img pt="20px" src={(governo_aberto.src)} alt="" style={{
    maxWidth: "700px",
  }}/><Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.ultraLarge}
  
  mt="5px"
  pt="30px"
  pb="25px"
  >
  Cronograma do 1º Plano de Ação Mogiano de Governo Aberto 
  </Text>
<Img pt="20px" src={(cronograma1.src)} alt="" style={{
    maxWidth: "700px",
  }} />
<Img pt="20px" src={(cronograma2.src)} alt="" style={{
    maxWidth: "700px",
  }}/>

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
