import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue,Table, Tbody, Td, Th, Thead, Tr, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import dados from './secretarios.json'
import conselhos from './conselhos.json'
import colors from "../../../styles/colors";
import CsvDownload from "react-json-to-csv";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Estrutura Organizacional",
  description:
   <>
  Para consultar informações detalhadas sobre a estrutura adminstrativa,bem como atribuições funcionais e diretrizes gerais obrigatórias, consulte a <Link href="http://leismunicipa.is/0ji28" ><strong>Lei complementar nº 174 de 6 de janeiro de 2023</strong></Link> .
   </> ,
};



const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "dados_screatarios.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <Accordion allowToggle borderRadius={4} mt='15px'>
                  
                    <AccordionItem  pt={4} borderRadius='15px' border='1px solid '>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='xl'>
                            SECRETARIOS
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                        <Flex>
                          <Box flex="end" p={2} marginRight={5}>
                            <Stack direction={{ base: "column", md: "row" }} spacing={4} alignItems="center" mb='20px'>
         <Button
                  width="180px"
                  border="0"
                  cursor="pointer"
                  fontSize="20px"
                  textColor="white"
                  bgColor={colors.transparenciaBlack}
                  _hover={{ bgColor: colors.primaryDefault80p }}
                  height="40px"
                  borderRadius="8px"
                  mr="15px"
                  transition="background-color 0.3s ease"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                >
                  <CsvDownload
                    filename={"dados_secreatarias.csv"}
                    data={dados}
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "none",
                      border: "none",
                      color: "white",
                      fontSize: "20px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    CSV
                  </CsvDownload>
                </Button>
        
                <Button
                  width="180px"
                  border="0"
                  cursor="pointer"
                  fontSize="20px"
                  textColor="white"
                  bgColor={colors.transparenciaBlack}
                   _hover={{ bgColor: colors.primaryDefault80p }}
                  height="40px"
                  borderRadius="8px"
                  mr="15px"
                  onClick={() => exportToJSON(dados)}
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                >
                  JSON
                </Button></Stack>
        
        <Table >
          <Thead>
            <Tr  bg={colors.transparenciaBlack}
              color="white"
              p={4}
              fontWeight="bold"
              border={`1px solid ${colors.grayLighter}`}>
              <Th color="white">Secretaria</Th>
              <Th color="white">Secretário</Th>
              <Th color="white">Missão da Secretaria</Th>
              <Th color="white">Currículo do secretário</Th>
              <Th color="white">Secreatario Adjunto</Th>
              <Th color="white">Currículo do secretário adjunto</Th>
            
            </Tr>
          </Thead>
          <Tbody fontSize='12px'>
            
            {dados.map((row, index) => (
            
            <Tr 
            key={index} 
            bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
            _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("black", "white") }}
            color={useColorModeValue("black", "white")}
          >
              <Td>{row.secretaria} </Td> 
              <Td>{row.secretario}</Td>
              <Td>{row.missao_secretaria}</Td>
              <Td>{row.curriculo_secretario}</Td>
              <Td>{row.secretario_adjunto}</Td>
              <Td>{row.curriculo_secretario_adjunto}</Td>
               
              </Tr>
            ))}
          </Tbody>
        </Table>
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
                        CONSELHOS
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                      <Flex>
                        <Box flex="end" p={2} marginRight={5}>
                            <Table >
          <Thead>
            <Tr  bg={colors.transparenciaBlack}
              color="white"
              p={4}
              fontWeight="bold"
              border={`1px solid ${colors.grayLighter}`}>
              <Th color="white">Conselho</Th>
              <Th color="white">Presidente</Th>
              <Th color="white">Vice-presidente</Th>
              <Th color="white">Atuação</Th>
              <Th color="white">Informações</Th>
              <Th color="white">Link</Th>
            
            </Tr>
          </Thead>
          <Tbody fontSize='12px'>
            
            {conselhos.map((row, index) => (
            
            <Tr 
            key={index} 
            bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
            _hover={{ bg: "#d1d1d1",  color: useColorModeValue("black", "white") }}
            color={useColorModeValue("black", "white")}
          >
              <Td>{row.conselho} </Td> 
              <Td>{row.presidente}</Td>
              <Td>{row["vice-presidente"]}</Td>
              <Td>{row.atuacao}</Td>
              <Td>{row.informacoes}</Td>
              <Td><Link href={row.link_pagina} target="blank">{row.link_pagina}</Link></Td>
               
              </Tr>
            ))}
          </Tbody>
        </Table>
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
