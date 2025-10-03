import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue,Table, Tbody, Td, Th, Thead, Tr, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import dados from './fila_de_espera.json'
import colors from "../../styles/colors";
import CsvDownload from "react-json-to-csv";
import PaginationComponent from "../../components/PaginationComponent";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Lista de espera de consultas e exames na rede municipal de saúde",
  description:
   "Em atendimento ao item 18.3 do Programa Nacional de Transparência Pública (PNTP) da Atricon, ano referência de 2025, a Secretaria de Saúde de Mogi das Cruzes divulga a lista de espera e regulação para acesso às consultas, exames e serviços médicos da rede municipal de saúde." ,
};



const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "dados_fila_de_espera.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;

  const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const ITEMS_PER_PAGE = 50;
  const router = useRouter();
  
  const filteredMedicamentos = dados.filter((item)=>
  searchTerm ? String(item.Especialidade).toLowerCase().includes(searchTerm.toLowerCase()) : true)
  
  useEffect(() => {
  setCurrentPage(1);
}, [searchTerm]);

  const paginatedMedicamentos  = filteredMedicamentos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

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
        <Text>
          Os encaminhamentos para as especialidades médicas ocorrem com base na Classificação Internacional de Doenças (CID) atribuída pelo profissional médico, respeitando os critérios clínicos, a complexidade do caso e a urgência do atendimento.
Nos casos em que o município não dispõe da especialidade ou estrutura necessária, os pacientes são devidamente regulados para unidades fora do município, inclusive para serviços na capital São Paulo, mediante avaliação e indicação médica especializada.
 <br/>
A lista abaixo comtempla pacientes que estão aguardando consultas e exames de 2024 à 31/05. 
        </Text>
        <Text>
          Ultima atualização: 26/09/2024
        </Text>
       
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
                    filename={"dados_fila_de_espera.csv"}
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
                <Input
                        type="text"
                        placeholder="Pesquisar ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        borderRadius="8px"
                        height="40px"
                        width="250px"
                        my="10px"
                        
                      />
        
        <Table >
          <Thead>
            <Tr  bg={colors.transparenciaBlack}
              color="white"
              p={4}
              fontWeight="bold"
              border={`1px solid ${colors.grayLighter}`}>
              <Th color="white">Tipo</Th>
              <Th color="white">Especialidade</Th>
              <Th color="white">Número de pacientes</Th>
            
            
            </Tr>
          </Thead>
          <Tbody fontSize='12px'>
            
            {paginatedMedicamentos.map((row, index) => (
            
            <Tr 
            key={index} 
            bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
            _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("black", "white") }}
            color={useColorModeValue("black", "white")}
          >
              <Td>{row["Tipo"]} </Td> 
              <Td>{row["Especialidade"]}</Td>
              <Td>{row["Nº de pacientes na fila"]}</Td>
              
               
              </Tr>
            ))}
          </Tbody>
        </Table>
        <PaginationComponent pages={Math.ceil(filteredMedicamentos.length / ITEMS_PER_PAGE)} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                          </Box>
                        
                        </Flex>
                     
                
        


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
