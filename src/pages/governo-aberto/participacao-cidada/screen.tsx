import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Img, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import participacao_cidada from '../../../assets/images/participacao-cidada.png'

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Portas de Participação Cidadã",
  description:
    <>Apresentação em fácil compreensão, se utiliza de linguagem simples e objetiva informar o cidadão sobre como acessar serviços e políticas da Prefeitura.<br/>Fruto da Ação nº 3 do Compromisso nº 2 do 1º Plano de Ação em Governo Aberto de Mogi das Cruzes.</>,
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
        <Img pt="20px" src={(participacao_cidada.src)} alt="" style={{
    maxWidth: "700px",
  }} />


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
