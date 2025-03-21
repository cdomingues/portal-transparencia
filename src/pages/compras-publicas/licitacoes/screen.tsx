import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { Box, Button, Input, Select, Stack, Text } from "@chakra-ui/react";
import PaginationComponent from "../../../components/PaginationComponent";
import { objetos_licitacao } from "../../../utils/objetos_licitacao";
import { getSituacaoText } from "../../../utils/situacaoLicitacao";
import { getTipoText } from "../../../utils/tipoLicitacao";
import axios from "axios";
import CsvDownload from "react-json-to-csv";

export interface Licitacoes {
  id: number;
  id_tipolicitacao: number;
  id_objeto: number;
  numero: number;
  ano: number;
  descricao: string;
  gestora: string;
  situacao: string;
}

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/licitacoes/";
const ITEMS_PER_PAGE = 50;

export const contentContractsAndAtas = {
  titlePage: "Licitações",
  description:
    "São disponibilizados no site da Prefeitura os editais de licitação de concorrência, tomada de preço e pregões para aquisição de bens e serviços, para acesso de qualquer interessado.",
};

function Screen() {
  const title = contentContractsAndAtas.titlePage;
  const description = contentContractsAndAtas.description;
  
  const [licitacoes, setLicitacoes] = useState<Licitacoes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedLicitacao, setSelectedLicitacao] = useState("");
  const [selectedGestora, setSelectedGestora] = useState("");
  const [selectedSituacao, setSelectedSituacao] = useState("");

  useEffect(() => {
    fetchData();
  }, [selectedYear, selectedLicitacao, selectedGestora, selectedSituacao]);

  const fetchData = async () => {
    let allLicitacoes: Licitacoes[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      let url = `${API_URL}?page=${page}`;
      const params = new URLSearchParams();

      if (selectedYear !== "Todos") params.append("ano", selectedYear);
      if (selectedLicitacao) params.append("id_tipolicitacao", selectedLicitacao);
      if (selectedGestora) params.append("gestora", selectedGestora);
      if (selectedSituacao) params.append("situacao", selectedSituacao);

      if (params.toString()) url += `&${params.toString()}`;

      try {
        const response = await axios.get(url);
        if (response.data.results && response.data.results.length > 0) {
          allLicitacoes = [...allLicitacoes, ...response.data.results];
          page++;
        } else {
          hasMore = false;
        }
      } catch (error) {
        console.error("Erro ao buscar dados", error);
        hasMore = false;
      }
    }

    setLicitacoes(allLicitacoes);
    setCurrentPage(1);
  };

  const filteredLicitacoes = licitacoes.filter(item =>
    searchTerm ? String(item.numero).toLowerCase().includes(searchTerm.toLowerCase()) : true
  );

  const paginatedLicitacoes = filteredLicitacoes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
  
    link.setAttribute("href", url);
    link.setAttribute("download", "dados_licitacoes.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <ContainerBasic title={title} description={description}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="Todos">Selecione o ano</option>
          {[...Array(2025 - 2012 + 1)].map((_, i) => (
            <option key={i} value={2012 + i}>{2012 + i}</option>
          ))}
        </Select>
        <Select placeholder="Tipo Licitação" onChange={(e) => setSelectedLicitacao(e.target.value)}>
          <option value="2">Pregão Presencial</option>
          <option value="3">Tomada de Preços</option>
          <option value="4">Concorrência</option>
          <option value="5">Leilão</option>
          <option value="7">Chamada Pública</option>
          <option value="8">Chamamento Público</option>
          <option value="9">Pré-Qualificação</option>
          <option value="10">Convite</option>
          <option value="11">Dispensa/Inexigibilidade</option>
          <option value="17">Pregão Eletrônico</option>
        </Select>
        <Select placeholder="Órgão" onChange={(e) => setSelectedGestora(e.target.value)}>
          <option value="IPREM">IPREM</option>
          <option value="PMMC">PMMC</option>
          <option value="SEMAE">SEMAE</option>
        </Select>

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
            filename={"dados_contratos.csv"}
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
        
        <Button width='180px' border='0' cursor='pointer' fontSize='20px' textColor='white' 
            bgColor='#1c3c6e' 
            _hover={{ bgColor: "#1c3c6e",    }}
            height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(licitacoes)}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
            
            >JSON</Button>
        
      </Stack>

      <Input
        type="text"
        placeholder="Pesquisar licitação..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        borderRadius="8px"
        height="40px"
        width="180px"
        my="10px"
      />

      {paginatedLicitacoes
      .sort((a, b) => a.numero - b.numero)
      .map((row) => (
        <Box
          key={row.id}
          border="2px solid #c62227"
          p="10px"
          borderRadius="12px"
          mb="10px"
          onClick={() => window.location.href = `licitacoes_detalhes?${row.id}`}
          _hover={{ border: "3px solid red", transition: "0.3s" }}
          cursor='pointer'
        >
      <Text fontWeight="bold" borderBottom='1.5px solid red'>{row.numero} / {row.ano} - {row.gestora}</Text>
      <Box display='flex' flexDir='row' gap="8px"><Text fontWeight='bold'>SITUAÇÃO:</Text>  <Text> {getSituacaoText(row.situacao)}</Text></Box>
      <Box display='flex' flexDir='row' gap="8px"><Text fontWeight='bold'>TIPO:</Text>  <Text>  {getTipoText(row.id_tipolicitacao)}</Text></Box>
      <Box display='flex' flexDir='row' gap="8px"><Text fontWeight='bold' >DESCRIÇÃO:</Text>  <Text >   {row.descricao}</Text></Box>
      <Box display='flex' flexDir='row' gap="8px"><Text fontWeight='bold'>OBJETO:</Text>  <Text> {objetos_licitacao.find((objeto) => objeto.id_objeto === row.id_objeto)?.descricao || "Descrição não encontrada"}</Text></Box>
      
    </Box>
      ))}

      <PaginationComponent pages={Math.ceil(filteredLicitacoes.length / ITEMS_PER_PAGE)} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </ContainerBasic>
  );
}

export default Screen;