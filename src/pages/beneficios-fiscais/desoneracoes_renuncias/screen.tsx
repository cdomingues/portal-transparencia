import { useColorModeValue, Box, Button, Stack, Table, Text, Thead, Tr, Th, Tbody, Td, Input , Select} from "@chakra-ui/react";
import React, { useState } from "react";
import { Laws } from ".";
import ContainerBasic from "../../../components/Container/Basic";

import dados from './Desoneracoes_PNTP_2025.json';
import colors from "../../../styles/colors";
import CsvDownload from "react-json-to-csv";
import PaginationComponent from "../../../components/PaginationComponent";
import moneyFormatter from "../../../utils/moneyFormatter";
import usePagina from "../../../hooks/usePagina";

type BeneficioFiscal = {
  objeto: string;
  tipo_beneficio: string;
  empresa_beneficiada: string;
  cnpj: string;
  base_legal: string;
  processo_administrativo: string;
  data_inicio_concessao: string; // formato: "DD/MM/AAAA"
  prazo_concessao: string;
  valor_total_estimado: number | null;
  ano: number;
  certificado_desoneracao: string;
  valor_realizado_periodo: number;
  status_doacao_area: string | null;
  bairro: string | null;
  metragem: number | null;
  lote_area: string | null;
  link: string | null;
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


function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;

  const [beneficiosFiscais, setBeneficiosFiscais] = useState<BeneficioFiscal[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedYear, setSelectedYear] = useState<string>("all");
const yearsFromData = Array.from(
  new Set(dados.map((item) => item.ano).filter(Boolean))
).sort((a, b) => Number(b) - Number(a));


  const filteredData = dados.filter((item) => {
  const term = searchTerm.toLowerCase();

  const matchSearch =
    item.objeto?.toLowerCase().includes(term) ||
    item.certificado_desoneracao?.toString().toLowerCase().includes(term) ||
    item.empresa_beneficiada?.toLowerCase().includes(term) ||
    item.cnpj?.toLowerCase().includes(term);

  const matchYear =
    selectedYear === "all" || String(item.ano) === selectedYear;

  return matchSearch && matchYear;
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

  const {paginaData, loadings, error} = usePagina("17");
  
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
                
              />  <Select
  value={selectedYear}
  onChange={(e) => {
    setSelectedYear(e.target.value);
    setCurrentPage(1); // reseta paginação
  }}
  height="40px"
  borderRadius="8px"
  width="180px"
  my="10px"
>
  <option value="all">Todos os anos</option>

  {yearsFromData.map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ))}
</Select>

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
              <Th color="white">Objeto</Th>
            <Th color="white">Tipo de benefício/incentivo fiscal</Th>
            <Th color="white">Empresa beneficiada</Th>
            <Th color="white">CNPJ</Th>
            <Th color="white">Base legal</Th>
            <Th color="white">Processo administrativo </Th>
            <Th color="white">Data de início da concessão</Th>
            <Th color="white">Prazo da concessão</Th>
            <Th color="white">Valor total estimado</Th>
            <Th color="white">Ano</Th>
            <Th color="white">Certificado / Certidão de desoneração</Th>
            <Th color="white">Valor realizado no período</Th>
            <Th color="white">Status da doação de área</Th>
            <Th color="white">Bairro</Th>
            <Th color="white">Metragem</Th>
            <Th color="white">Lote/Área</Th>
            <Th color="white">Link</Th>
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
              <Td>{row.objeto} </Td> 
             <Td>{row.tipo_beneficio}</Td>
             <Td>{row.empresa_beneficiada}</Td>
             <Td>{row.cnpj}</Td>
             <Td>{row.base_legal}</Td>
             <Td>{row.processo_administrativo}</Td>
             <Td>{row.data_inicio_concessao}</Td>
             <Td>{row.prazo_concessao}</Td>
             <Td>{row.valor_total_estimado}</Td>
             <Td>{row.ano}</Td>
             <Td>{row.certificado_desoneracao}</Td>
             <Td>{moneyFormatter(Number(row.valor_realizado_periodo))}</Td>
             <Td>{row.status_doacao_area}</Td>
             <Td>{row.bairro}</Td>
             <Td>{row.metragem}</Td>
             <Td>{row.lote_area}</Td>
             <Td>{row.link}</Td>
            
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
