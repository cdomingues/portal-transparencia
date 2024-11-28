import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Img, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import boralai from '../../../assets/images/BORALAI.png'

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "BORALAI",
  description:
    "Jogo inspirado no LAIKES da Prefeitura de São Paulo e que por meio de jogos objetiva a explicação sobre transparência passiva e a vivência nos procedimentos do e-SIC e da Lei de Acesso à Informação. ",
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
        <Img pt="20px" src={(boralai.src)} alt="" style={{
    maxWidth: "700px",
  }} />


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
