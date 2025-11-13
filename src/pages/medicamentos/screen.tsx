import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue,Table, Tbody, Td, Th, Thead, Tr, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import dados from './medicamentos.json'
import colors from "../../styles/colors";
import CsvDownload from "react-json-to-csv";
import PaginationComponent from "../../components/PaginationComponent";
import usePagina from '../../hooks/usePagina';

type PropsInput = {
  handler: {};
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
  

  const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const ITEMS_PER_PAGE = 50;
  const router = useRouter();
  
  const filteredMedicamentos = dados
  .filter((item) =>
    searchTerm
      ? String(item.PRODUTO).toLowerCase().includes(searchTerm.toLowerCase())
      : true
  )
  .filter((item) => item["ESTOQUE"] !== "FARMACIA ORDEM JUDICIAL");
  
  useEffect(() => {
  setCurrentPage(1);
}, [searchTerm]);

  const paginatedMedicamentos  = filteredMedicamentos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const {paginaData, loadings, error} = usePagina("51");
  
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
                <Input
                        type="text"
                        placeholder="Pesquisar medicamento..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        borderRadius="8px"
                        height="40px"
                        width="250px"
                        my="10px"
                        
                      />
        <Text fontSize={accessibility?.fonts?.regular} mb="10px">
                        Última atualização: <strong>26/09/2025</strong>
                      </Text>
        <Table >
          <Thead>
            <Tr  bg={colors.transparenciaBlack}
              color="white"
              p={4}
              fontWeight="bold"
              border={`1px solid ${colors.grayLighter}`}>
              <Th color="white">Estoque</Th>
              <Th color="white">Produto</Th>
              <Th color="white">Código</Th>
              <Th color="white">Lote</Th>
              <Th color="white">Quantidade</Th>
              <Th color="white">Marca</Th>
              <Th color="white">Validade</Th>
              <Th color="white">Grupo</Th>
            
            </Tr>
          </Thead>
          <Tbody fontSize='12px'>
            
            {paginatedMedicamentos
           
            .map((row, index) => (
            
            <Tr 
            key={index} 
            bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
            _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("black", "white") }}
            color={useColorModeValue("black", "white")}
          >
              <Td>{row["ESTOQUE"]} </Td> 
              <Td>{row["PRODUTO"]}</Td>
              <Td>{row["CODIGO"]}</Td>
              <Td>{row["LOTE"]}</Td>
              <Td>{row["QTDE"]}</Td>
              <Td>{row["MARCA"]}</Td>
              <Td>{row["VALIDADE"]}</Td>
              <Td>{row["GRUPO"]}</Td>
               
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
