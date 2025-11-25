import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import { Accordion, AccordionButton, Text,AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Icon, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
//import Video from "../../components/Videos";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import usePagina  from '../../hooks/usePagina';

type PropsInput = {
  handler: {};
};


function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const url_video = "https://www.youtube.com/embed/K7_TUkedcGA?si=iPxaKODtZnboQT-_";
  const titulo = "O QUE SÃO AS SEIS MEDIDAS?";
  const router = useRouter();

const {paginaData, loadings, error} = usePagina("56");

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
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        marginBottom="15px"
        padding={"15px"}
      >
           {conteudo && (
                 <Box
                   dangerouslySetInnerHTML={{ __html: conteudo }}
                   sx={{
                     p: { mb: 2, textAlign: "justify" },
                     
                   }}
                 />
               )} 

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
