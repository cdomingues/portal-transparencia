import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Button, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Ouvidoria",
  description:
    "A Ouvidoria é um canal direto entre o cidadão e todos os setores da Prefeitura. Com isenção, autonomia e independência, tem como missão receber e solucionar as manifestações recebidas da comunidade (reclamações, denúncias e dúvidas), promovendo o aperfeiçoamento e a melhoria dos serviços prestados à população. ",
};

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        
        borderRadius="18px"
        marginBottom="15px"
      >
        <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >Para enviar uma reclamação ou solicitar um serviço, acesse o aplicativo oficial do Colab </Text>
         <Link  href="https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/colab" target="_blank"><Button fontSize={accessibility?.fonts?.regular}  margin="5px">Colab</Button></Link>
<br></br>
<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                ATENDIMENTO:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >

  <p>Av. Vereador Narciso Yague Guimarães, 277, 3º andar - Centro Cívico</p>
  <p>Segunda a sexta-feira, das 8 às 17 horas</p>
 <p>156 ou pelo Whatsapp 97133-1999</p>
              </Text>

<br></br>
<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Para maiores informações sobre a Ouvidoria clique no botão abaixo
                
                
              </Text>
              <Link  href="https://www.mogidascruzes.sp.gov.br/pagina/ouvidoria-geral/institucional" target="_blank"><Button fontSize={accessibility?.fonts?.regular} margin="5px">Ouvidoria</Button></Link>


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
