import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { Button } from "@chakra-ui/react";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Empresas sancionadas administrativamente",
  description:
    <>
    Conforme o artigo 156 da Lei Federal nº 14.133/2021, os licitantes e contratados pela administração pública que não cumprirem adequadamente as cláusulas contratuais, devem ser penalizados com sanções administrativas como advertência, multa, impedimento de licitar e contratar e declaração de inidoneidade, a depender da gravidade da infração. <br/>
O artigo 161 estabelece que essas empresas sejam incluídas no Cadastro Nacional de Empresas Idôneas e Suspensas (CEIS). 
    </>,
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
