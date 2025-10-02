import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { Box, Button, Input, Select, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import PaginationComponent from "../../../components/PaginationComponent";
import axios from "axios";
import CsvDownload from "react-json-to-csv";
import moneyFormatter from "../../../utils/moneyFormatter";
import colors from "../../../styles/colors";

type Convenio = {
  id: string;
  classificacao_prioridade: string;
  tipo_recurso: string;
  nivel_demanda: string;
  modalidade: string;
  aplicacao: string;
  orgao: string;
  instituicao_financeira: string;
  politico: string;
  secretaria: string;
  status_convenio: string;
  created_at: string; // ISO datetime string
  updated_at: string; // ISO datetime string
  id_convenio: string;
  ano: number;
  formalizado: boolean;
  data_formalizado: string; // ISO date string
  demanda: string;
  termo: string;
  processo_administrativo: string;
  cod_objeto: string;
  objeto: string;
  finalidade_objeto: string;
  abertura_conta: boolean;
  conta: string;
  valor_repasse: string; // pode ser string ou number, dependendo do uso
  contrapartida: string; // idem
  data_inicio: string; // ISO date string
  vigencia_suspensiva: string | null; // pode ser null
  data_fim: string; // ISO date string
  numero_empenho: string | null;
}
const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/convenios";
const ITEMS_PER_PAGE = 50;

export const receitasDesc = {
  titlePage: "Convênios - recebidos",
  description:
    "A divulgação da lista de Convênios e Transferências repasses realizados pela Prefeitura de Mogi das Cruzes é uma medida fundamental cujo propósito é reforçar a transparência das finanças municipais e promover a responsabilidade fiscal. ",
};

function Screen() {
  const title = receitasDesc.titlePage;
  const description = receitasDesc.description;

  const [licitacoes, setLicitacoes] = useState<Convenio[]>([]);
  const [tiposReceita, setTiposReceita] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedReceita, setSelectedReceita] = useState("");
  let count = 1

  useEffect(() => {
    fetchData();
    //fetchTiposReceita();
  }, []);

  // Função para buscar receitas
  const fetchData = async () => {
  let allLicitacoes: Convenio[] = [];
  let url = `${API_URL}`; // sem adicionar ano aqui

  try {
    while (url) {
      const response = await axios.get(url);

      if (response.data && response.data.length > 0) {
        allLicitacoes = [...allLicitacoes, ...response.data];
      }

      url = response.data.next;
    }
  } catch (error) {
    console.error("Erro ao buscar dados", error);
  }

  setLicitacoes(allLicitacoes);
  setCurrentPage(1);
};
  

  // Função para buscar tipos únicos de receitas
 

  const filteredLicitacoes = licitacoes.filter((item) => {
  const termo = searchTerm.toLowerCase();

  // verifica se o termo aparece em algum dos campos
  const matchSearch = searchTerm
    ? (
        String(item.objeto ?? "").toLowerCase().includes(termo) ||
        String(item.politico ?? "").toLowerCase().includes(termo) ||
        String(item.finalidade_objeto ?? "").toLowerCase().includes(termo) ||
        String(item.id_convenio ?? "").toLowerCase().includes(termo) ||
        String(item.secretaria ?? "").toLowerCase().includes(termo) 
      )
    : true;

  const matchYear =
    selectedYear !== "Todos" ? String(item.ano) === selectedYear : true;

  return matchSearch && matchYear;
});
 const dataAtual = new Date().toLocaleDateString("pt-BR"); 
  const paginatedLicitacoes = filteredLicitacoes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  useEffect(() => {
  const anosUnicos = Array.from(new Set(licitacoes.map((item) => item.ano))).sort((a, b) => b - a);
  setTiposReceita(anosUnicos.map(String));
}, [licitacoes]);

  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "dados_receitas.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ContainerBasic title={title} description={description}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>

        <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} width='290px'>
          <option value="Todos">Selecione o ano</option>
          {[...Array(2025 - 2012 + 1)].map((_, i) => (
    <option key={i} value={2025 - i}>
      {2025 - i}
    </option>
  ))}
        </Select>

      

       
      </Stack>
      <Stack direction={{ base: "column", md: "row" }} spacing={4} alignItems="center" >
      <Input
        type="text"
        placeholder="Pesquisar receita..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
            data={licitacoes}
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
          onClick={() => exportToJSON(licitacoes)}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        >
          JSON
        </Button></Stack>
        <Text fontSize="md" mb="10px">
                Última atualização: <strong>{dataAtual}</strong>
              </Text>


{paginatedLicitacoes.map((row) => (
          <Box
          key={row.id_convenio}
          border="2px solid transparent"
          p="12px"
          borderRadius="16px"
          mb="12px"
          bg={useColorModeValue("white", "black")}
          
          boxShadow="lg"
          transition="0.3s"
          cursor="pointer"
          _hover={{
            boxShadow: "xl",
            transform: "scale(1.01)",
            border: `2px solid ${colors.transparenciaBlack}`,
          }}
          onClick={() => {
            sessionStorage.setItem('selectedConvenio', JSON.stringify(row));
            window.open( `detalhes?${row.id_convenio}`, '_blank')}}
         
        >
          <Text 
            fontWeight="bold" 
            fontSize="lg"
            color={colors.transparenciaBlack}
            borderBottom={`2px solid ${colors.transparenciaBlack}`}
            pb="5px" 
            mb="8px"
          >
            CONVÊNIO - {row.id_convenio}
          </Text>
          <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
            <strong>Recurso:</strong> {row.tipo_recurso}
          </Text>
          <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
            <strong>Orgão:</strong> {row.orgao}  
            
            
          </Text>
          <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
          <strong> Secretaria:</strong>    {row.secretaria}
          </Text>
          <Text>
            <strong>Objeto:</strong> {row.objeto}
          </Text>
          <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
            <strong>Valor repasse:</strong> {row.valor_repasse !== null ? moneyFormatter(Number(row.valor_repasse)) : ""}
          </Text>
        </Box>
        
        ))}

      <PaginationComponent pages={Math.ceil(filteredLicitacoes.length / ITEMS_PER_PAGE)} setCurrentPage={setCurrentPage} currentPage={currentPage} />

       <Box mt='15px' border='1px solid lightgrey' p='5' borderRadius='15px' boxShadow='2xl'>
           <iframe title="CONVÊNIOS - PORTAL TRANSPARÊNCIA" width="100%" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiNGQ4MjE2YTUtMTc2Zi00ZTA1LWJmNmUtOGVjYjc2NjE3OGM5IiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9" ></iframe>
       </Box>
    </ContainerBasic>
  );
}

export default Screen;
