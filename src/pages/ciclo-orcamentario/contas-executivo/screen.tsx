import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Pregão Eletrônico",
  description:
    "Redirecionando para o site http://www.cmmc.com.br/contasexecutivo/ ",
};

function redirecionarParaLinkExterno() {
  setTimeout(function () {
    window.location.href = 'http://www.cmmc.com.br/contasexecutivo/'; // Substitua pelo seu link externo
  }, 100); // 1000 milissegundos = 1 segundo
}

// Chame a função para iniciar o redirecionamento
redirecionarParaLinkExterno();



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
        


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
