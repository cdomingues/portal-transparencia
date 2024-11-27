import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Prestação de Contas Simplificada",
  description:
    <> Este formato de apresentação de prestação de contas de fácil compreensão, se utiliza de linguagem simples e objetiva e tem como objetivo o entendimento por parte do cidadão de informações da Secretaria de Educação, Secretaria de Saúde e da Secretaria de Assistência Social.<br/>Fruto da Ação nº 2 do Compromisso nº 3 do 1º Plano de Ação em Governo Aberto de Mogi das Cruzes.</>
};





function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();
  
  return (
    <ContainerBasic title={title} description={description}>
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
