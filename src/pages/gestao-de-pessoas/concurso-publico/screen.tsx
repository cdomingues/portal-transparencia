import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import CardConcurso from "../../../components/CardConcursos";
import TesteArquivos from "../../../components/ListarArquivos";
import Video from "../../../components/Videos";

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
  const url_video = "https://www.youtube.com/embed/_2b8fcV3Q04?list=PLr6uMRVxi5CZDYEttIUVaIzsm07L7qI6a";
  const titulo = "O QUE É CONCURSO PÚBLICO?"; 

  return (
    <ContainerBasic title={title} description={description}>
      <Video url_video={url_video} titulo={titulo} />

  
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
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                textAlign="justify"
              >
                O Concurso Público é um processo seletivo que permite o acesso a emprego ou cargo público de modo amplo e democrático. É um procedimento impessoal onde é assegurada igualdade de oportunidades a todos interessados em concorrer para exercer as atribuições oferecidas pelo Estado, a quem incumbirá identificar e selecionar os mais adequados mediante critérios objetivos.
                <br/>
                Fundamentação Legal
                <br/>
                Lei Federal nº 12.527, de 18 de novembro de 2011, Lei complementar nº 145, de 7 de agosto de 2019 e Lei nº 7.986, de 28 de setembro de 2023.
                <br/>
                Informações sobre concursos <br/>
Tel.: (11) 4798-5140 <br/>
Endereço: Av. Vereador Narciso Yague Guimarães, 277, 1º andar - Centro Cívico
<br/>
Informações sobre concursos homologados <br/>
Tel.: (11) 4798-5184 <br/>
Endereço: Av. Vereador Narciso Yague Guimarães, 277, 1º andar - Centro Cívico
                

              </Text>


      </Box>
      <CardConcurso /> 
      
    </ContainerBasic>
  );
}

export default Screen;
