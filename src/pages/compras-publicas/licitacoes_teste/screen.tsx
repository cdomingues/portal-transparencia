import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { Box, Input, Select, Stack, Text } from "@chakra-ui/react";
import PaginationComponent from "../../../components/PaginationComponent";
import { objetos_licitacao } from "../../../utils/objetos_licitacao";
import { getSituacaoText } from "../../../utils/situacaoLicitacao";
import { getTipoText } from "../../../utils/tipoLicitacao";
import axios from "axios";

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
    "São disponibilizados no site da Prefeitura os editais de licitação...",
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

  return (
    <ContainerBasic title={title} description={description}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="Todos">Todos os anos</option>
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
        
      </Stack>

      <Input
        type="text"
        placeholder="Pesquisar licitação..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        borderRadius="8px"
        height="40px"
        width="40%"
        my="10px"
      />

      {paginatedLicitacoes
      .sort((a, b) => a.numero - b.numero)
      .map((row) => (
        <Box
          key={row.id}
          border="2px solid red"
          p="10px"
          borderRadius="12px"
          mb="10px"
          onClick={() => window.location.href = `contratos_teste_detalhes?${row.id}`}
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