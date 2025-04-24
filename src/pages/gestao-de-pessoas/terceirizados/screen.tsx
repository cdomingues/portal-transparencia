import React, { useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Button, Link, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";
import CsvDownload from "react-json-to-csv";
import colors from "../../../styles/colors";

const  data= [
  {
    "nome": "Brasilino dos Santos",
    "cargo": "Controlador de Acesso",
    "empresa_contratada": "CLEAN4 SERVIÇOS GERAIS E ADMINISTRATIVOS EIRELI",
    "lotacao": "Casem"
  },
  {
    "nome": "André Souza Barros",
    "cargo": "Controlador de Acesso",
    "empresa_contratada": "CLEAN4 SERVIÇOS GERAIS E ADMINISTRATIVOS EIRELI",
    "lotacao": "Casem"
  },
  {
    "nome": "Vilma de Fatima Riibeiro",
    "cargo": "Controlador de Acesso",
    "empresa_contratada": "CLEAN4 SERVIÇOS GERAIS E ADMINISTRATIVOS EIRELI",
    "lotacao": "Casem"
  },
  {
    "nome": "Mizael Genesio da Silva",
    "cargo": "Controlador de Acesso",
    "empresa_contratada": "CLEAN4 SERVIÇOS GERAIS E ADMINISTRATIVOS EIRELI",
    "lotacao": "Casem"
  },
  {
    "nome": "Brian Felipe de A. Rafael",
    "cargo": "Zelador",
    "empresa_contratada": "CLEAN4 SERVIÇOS GERAIS E ADMINISTRATIVOS EIRELI",
    "lotacao": "Casem"
  },
  {
    "nome": "Thais Galdina Miranda",
    "cargo": "Analista de Atendimento",
    "empresa_contratada": "HAPVIDA NOTREDAME INTERMÉDICA",
    "lotacao": "Sede"
  },
  {
    "nome": "Anthony Henrique Costa da Rocha",
    "cargo": "Assistente Administrativo",
    "empresa_contratada": "HAPVIDA NOTREDAME INTERMÉDICA",
    "lotacao": ""
  },
  {
    "nome": "Ricléia Queiroz de Oliveira",
    "cargo": "Analista de Suporte Junior",
    "empresa_contratada": "SMARAPD INFORMÁTICA LTDA",
    "lotacao": ""
  },
  {
    "nome": "Lucas Luan Rosa de Sousa",
    "cargo": "Auxiliar Técnico de Informática",
    "empresa_contratada": "MR COMPUTER",
    "lotacao": ""
  },
  {
    "nome": "Kaique Oliveira da Costa",
    "cargo": "Auxiliar Técnico de Informática",
    "empresa_contratada": "MR COMPUTER",
    "lotacao": ""
  },
  {
    "nome": "Willian Santana Queiroz Araujo",
    "cargo": "Coordenador de Customer Care",
    "empresa_contratada": "MR COMPUTER",
    "lotacao": ""
  },
  {
    "nome": "Gabriel Teixeira Pedroso",
    "cargo": "Assistente de Customer Care Pleno III",
    "empresa_contratada": "MR COMPUTER",
    "lotacao": ""
  },
  {
    "nome": "Simone Aparecida Felismino Napolitano",
    "cargo": "Assistente De Vendas Junior",
    "empresa_contratada": "MOGIPASSES COMERCIO DE BILHETES ELETRONICOS",
    "lotacao": "Sede"
  }
]


type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Lista de terceirizados",
  description:
    " ...   ",
};

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}



function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();

   const [currentPage, setCurrentPage] = useState(1);
      const [searchTerm, setSearchTerm] = useState("");
      const [sortColumn, setSortColumn] = useState<string | null>(null);
      const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
   
 
  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
  
    link.setAttribute("href", url);
    link.setAttribute("download", "dados_fundos_municipais.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedPlanos =data.sort((a, b) => {
    if (!sortColumn) return 0; // Sem ordenação
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];
  
    if (typeof valueA === "string" && typeof valueB === "string") {
      return sortDirection === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
    
    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
    }
  
    return 0;
  });

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
       <Box
               m={0}
               bg={useColorModeValue("white", "gray.800")}
               
               padding={"15px"}
               rounded="md"
               overflow="hidden"
               width="100%"
               borderRadius="18px"
               marginBottom="15px"
             >
            <ContainerSearch  mt='20px'>
                                      <Stack minW={86} width="50%" flexDir='row'
                                      sx={{
                                        "@media (max-width: 900px)": {
                                          flexDir:'column'
                                        },
                                      }}
                                      >
                                       
                            <Button
                              width="180px"
                              border="0"
                              cursor="pointer"
                              fontSize="20px"
                              textColor="white"
                              bgColor="#1c3c6e"
                              _hover={{ bgColor: "#1c3c6e" }}
                              height="40px"
                              borderRadius="8px"
                              mr="15px"
                              transition="background-color 0.3s ease"
                              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                              
                            >
                              <CsvDownload
                                filename={"dados_fundos_municipais.csv"}
                                data={data}
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
                            
                            <Button width='180px' border='0' cursor='pointer' fontSize='20px' textColor='white' 
                                bgColor='#1c3c6e' 
                                _hover={{
                                  bgColor: "#1c3c6e",  // Cor de fundo ao passar o mouse
                                }}
                                height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(data)}
                                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                                
                                >JSON</Button>
                                   </Stack>
                                      <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
                                      
                                    </ContainerSearch>
                                     <Table >
                                                             <Thead>
                                                             <Tr  bg={colors.primaryDefault40p}
      color="white"
      p={4}
      fontWeight="bold"
      border={`1px solid ${colors.primaryDefault40p}`}>
                                        <Th color="white" onClick={() => handleSort("sigla_area_gestora")} cursor="pointer">
                                        Nome {sortColumn === "sigla_area_gestora" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
                                        </Th>
                                        <Th color="white" onClick={() => handleSort("sigla_fundo" )} cursor="pointer">
                                        Cargo {sortColumn === "sigla_fundo"  ? (sortDirection === "asc" ? "▲" : "▼") : ""}
                                        </Th>
                                        <Th color="white" onClick={() => handleSort("fundo_municipal")} cursor="pointer">
                                        Empresa contratada {sortColumn === "fundo_municipal" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
                                        </Th>
                                        <Th color="white" onClick={() => handleSort("cnpj")} cursor="pointer">
                                          Lotação {sortColumn === "cnpj" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
                                        </Th>
                                       
       
                                      </Tr>
                                    </Thead>
                                                              <Tbody fontSize='12px'>
                                                             
                                                                
                                                              {data.map((row, index) => (
                                      <Tr key={index}>
                                        <Td>{row.nome}</Td>
                                        <Td>{row.cargo}</Td>
                                        <Td>{row.empresa_contratada}</Td>
                                        <Td>{row.lotacao}</Td>
                                       
                                      </Tr>
       
                                    ))}
                                                              </Tbody>
                                                            </Table>
               
             </Box>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
