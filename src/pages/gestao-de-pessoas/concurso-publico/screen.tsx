import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import CardConcurso from "../../../components/CardConcursos";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Concurso Público",
  description:
    "Informações sobre os atos dos concursos públicos e processos seletivos: vagas efetivamente preenchidas, lista de aprovados com as classificações, fila de espera/cadastro reserva e validade do concurso. ",
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
        


      </Box>
      <CardConcurso />
    </ContainerBasic>
  );
}

export default Screen;
