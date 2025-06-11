import { useColorModeValue, Box, Button, Stack, Table, Thead, Tr, Th, Tbody, Td, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Laws } from ".";
import ContainerBasic from "../../../components/Container/Basic";

import dados from './lic_lide.json';
import colors from "../../../styles/colors";
import CsvDownload from "react-json-to-csv";
import PaginationComponent from "../../../components/PaginationComponent";
import moneyFormatter from "../../../utils/moneyFormatter";

type LicLide = {
  n_projeto: string;
    nome_projeto: string;
    vl_projeto: number;
    nome_incentivadora: string;
    cnpj_incentivadora: string;
    proc_adm: string;
    competencia: string;
    vl_beneficio_reais: number;
    tipo: string;
};

const ITEMS_PER_PAGE = 50;



type PropsInput = {
  handler: {
    laws: Laws;
    handleSelectValue: (value: number) => void;
    selectOptions: Array<string | number>;
    selectValue: number;
  };
};

export const contentPROMAE = {
  titlePage: "LIC e LIDE",
  description:
    "Lista de projetos beneficiados e empresas incentivadoras pela Lei de Incentivo a Cultura (LIC) e Lei de Incentivo ao Desporto (LIDE)l.",
};

function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;

  const title = contentPROMAE?.titlePage;
  const description = contentPROMAE?.description;

  const [beneficiosFiscais, setBeneficiosFiscais] = useState<LicLide[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = dados.filter((item) => {
  const term = searchTerm.toLowerCase();
  return (
    item.nome_projeto?.toLowerCase().includes(term) ||
    item.nome_incentivadora?.toString().toLowerCase().includes(term) ||
    item.cnpj_incentivadora?.toString().toLowerCase().includes(term) 
  );
});

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  


    const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "dados_desoneracoes_renuncias.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

         <Stack direction={{ base: "column", md: "row" }} spacing={4}>

        <Input
                type="text"
                placeholder="Pesquisar receita..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                borderRadius="8px"
                height="40px"
                width="250px"
                my="10px"
                
              />

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
                    filename={"dados_receitas.csv"}
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
                </Button>
                </Stack>
      <Table mt={5}>
        <Thead>
          <Tr  bg={colors.transparenciaBlack}
            color="white"
            p={4}
            fontWeight="bold"
            border={`1px solid ${colors.transparenciaBlack}`}>
              <Th color="white">Nº. projeto </Th>
            <Th color="white">Nome Projeto</Th>
            <Th color="white">Valor Projeto</Th>
            <Th color="white">Nome Incentivadora</Th>
            <Th color="white">CNPJ Incentivadora</Th>
            <Th color="white">Processo administrativo </Th>
            <Th color="white">Competencia</Th>
            <Th color="white">Valor benefício</Th>
            <Th color="white">Tipo</Th>
            
            
          </Tr>
        </Thead>
        <Tbody fontSize='12px'>
          
          {paginatedData.map((row, index) => (
          
          <Tr 
          key={index} 
          bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
          _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("black", "white") }}
          color={useColorModeValue("black", "white")}
        >
              <Td>{row.n_projeto} </Td> 
             <Td>{row.nome_projeto}</Td>
             <Td>{moneyFormatter(row.vl_projeto)}</Td>
             <Td>{row.nome_incentivadora}</Td>
             <Td>{row.cnpj_incentivadora}</Td>
             <Td>{row.proc_adm}</Td>
             <Td>{row.competencia}</Td>
             <Td>{row.vl_beneficio_reais != null && typeof row.vl_beneficio_reais === 'number' ? moneyFormatter(row.vl_beneficio_reais) : 'Não se aplica'}</Td>
              <Td>{row.tipo}</Td>
            
            
            </Tr>
          ))}
        </Tbody>
      </Table>

      <PaginationComponent pages={Math.ceil(filteredData.length / ITEMS_PER_PAGE)} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
