import React from "react";
import ContainerBasic from "../../components/Container/Basic";
//import publicRoutes from "../../../routes/public";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "InfoDados Mogi",
  description:
    <> O InfoDados Mogi é a página de dados e indicadores sobre a cidade de Mogi das Cruzes. O objetivo é ampliar a transparência pública e facilitar o acesso à informação para qualquer pessoa interessada em conhecer melhor a realidade do município.<br/>Aqui, você encontrará dashboards interativos com dados e indicadores de diversas áreas, como, por exemplo,  segurança, saúde, educação, mobilidade e economia, reunindo informações de diferentes secretarias e setores do Poder Executivo, além de fontes externas como entes do Governo Federal, institutos de pesquisa e outros.</>
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
         <Accordion allowToggle borderRadius={4}>
  <AccordionItem  pt={4} borderRadius='15px' mt='15px' border='1px solid'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='xl'>
          SOBRE A CIDADE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
      <Accordion allowToggle>
        {[
          {
            title: "Censo demográfico 2022 - Indicadores populacionais",
            src: "https://app.powerbi.com/view?r=eyJrIjoiM2M0MjEwZWYtODZmYy00ZDk4LTlkMGMtMzcwNzUwZTg2YzM3IiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
          },
          {
            title: "PIB de Mogi das Cruzes",
            src: "https://app.powerbi.com/view?r=eyJrIjoiMTUwYzIxNWItMzYzYy00ODFmLTk0NzEtMmZjM2JjOTg1MzY5IiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
          },
          {
            title: "Censo demográfico IBGE 2022",
            src: "https://app.powerbi.com/view?r=eyJrIjoiYjM4ZGIyNzItZjIxZC00MmM4LTgwMDMtN2Q1NGQ0YjBhNjU1IiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
          },
          {
            title: "Análise CADÚNICO",
            src: "https://app.powerbi.com/view?r=eyJrIjoiYzczMjhkODYtYjc3Yi00NzYyLWEzZmQtZWQ5NjA3YWFlMmM0IiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9",
          },
        ].map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Box maxWidth="100%" p={2} my={2}>
                <iframe title={item.title} width="1200px" height="800" src={item.src}></iframe>
              </Box>
              <Box textAlign="center" mt={2}>
                <Button 
                  as="a" 
                  href={item.src} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  colorScheme="blue" 
                  size="md"
                >
                  Visualizar relatório completo
                </Button>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </AccordionPanel>
  </AccordionItem>
</Accordion>



 <Accordion allowToggle borderRadius={4} mt='15px'>
          
            <AccordionItem  pt={4} borderRadius='15px' border='1px solid '>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='xl'>
                    SECRETARIA DA MULHER
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex>
                  <Box flex="end" p={2} marginRight={5}></Box>
                  <Box maxWidth="100%" p={2}>
                  <iframe title="PRESTAÇÃO DE CONTAS - SUBVENCIONADAS DE ASSISTÊNCIA SOCIAL" width="1400" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiZDM0ZjY5ZGYtNWU1Yi00YTYxLWJlYTQtN2EwZDI4MGYwMmIyIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9" ></iframe>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
         
        </Accordion>
        <Accordion allowToggle borderRadius={4}>
          
          <AccordionItem  pt={4} borderRadius='15px' mt='15px' border='1px solid'>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='xl'>
                SECRETARIA DE SAÚDE E BEM ESTAR
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
              <Flex>
                <Box flex="end" p={2} marginRight={5}></Box>
                <Box maxWidth="100%" p={2}>
                <iframe title="PRESTAÇÃO DE CONTAS - SUBVENCIONADAS DE ASSISTÊNCIA SOCIAL" width="1400" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiYzM1NGFhZWMtNGYwNS00ZDlhLTkyZTgtNTQ1MGMzZGVkZGE3IiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9" ></iframe>
                </Box>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
       
      </Accordion>
       

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
