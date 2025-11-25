import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue,Table, Tbody, Td, Th, Thead, Tr, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import colors from "../../styles/colors";
import CsvDownload from "react-json-to-csv";
import PaginationComponent from "../../components/PaginationComponent";
import usePagina from '../../hooks/usePagina';

type PropsInput = {
  handler: {};
};

function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  
  const {paginaData, loadings, error} = usePagina("50");
  
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
       
                        <Flex>
                          <Box flex="end" p={2} marginRight={5}>
                                           
        {/* <Text fontSize={accessibility?.fonts?.regular} mb="10px">
                        Última atualização: <strong>30/05/2025</strong>
                      </Text> */}
      {conteudo && (
                                         <Box
                                           dangerouslySetInnerHTML={{ __html: conteudo }}
                                           sx={{
                                             p: { mb: 2, textAlign: "justify" },
                                             a: {
                                               color: "blue.600",
                                               fontWeight: "bold",
                                               textDecoration: "underline",
                                             },
                                           }}
                                         />
                                       )} 
        <Button mt='20px'>
          <Link href="https://www.mogidascruzes.sp.gov.br/public/site/doc/20250509150621681e441d1b768.pdf">
          Download lista de empresas reclamadas
          </Link>
        </Button>
                          </Box>
                        
                        </Flex>
                     
                
        


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
