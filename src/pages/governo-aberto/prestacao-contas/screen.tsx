import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import usePagina from '../../../hooks/usePagina';

type PropsInput = {
  handler: {};
};


function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const router = useRouter();

  const {paginaData, loadings, error} = usePagina("57");
  
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
        <Text
          mt="20px"
          mb="20px"
          align={isMobile ? "justify" : "left"}
          fontWeight="700"
          fontSize={accessibility?.fonts?.regular}
        > PRESTAÇÃO DE CONTAS - SUBVENCIONADAS DE ASSISTÊNCIA SOCIAL
       </Text>

        <iframe title="PRESTAÇÃO DE CONTAS - SUBVENCIONADAS DE ASSISTÊNCIA SOCIAL" width="1000" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiMWRiNWIxOWEtNjA1NS00ZjIwLWE1YzUtMDU4Yjg5NWQwMjI2IiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9" ></iframe>
        <Text
         mt="20px"
         mb="20px"
          align={isMobile ? "justify" : "left"}
          fontWeight="700"
          fontSize={accessibility?.fonts?.regular}
        >
                PRESTAÇÃO DE CONTAS - SUBVENCIONADAS DA EDUCAÇÃO
               </Text>
        <iframe title="PRESTAÇÃO DE CONTAS - SUBVENCIONADAS DA EDUCAÇÃO" width="1000" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiMDBkY2I3MWItMzdjYy00NjEwLWE4YjktNzMzYjU5ZDY4OWY0IiwidCI6ImRlOTA1ZDc0LTg5ZjEtNGY0Zi04N2ExLTM1YTMyN2YwYzg1NCJ9"></iframe>


        <Text
        mt="20px"
        mb="20px"
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                PRESTAÇÃO DE CONTAS - SUBVENCIONADAS DA SAÚDE
                
                
              </Text>
        <iframe title="PRESTAÇÃO DE CONTAS - SUBVENCIONADAS DA SAÚDE" width="1000" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiZDc0MTZlY2MtODdkMi00MDI5LWEwMTQtYWM0OGJlNDVlY2YyIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9"></iframe>

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
