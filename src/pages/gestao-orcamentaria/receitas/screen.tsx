import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { Box, Button, Input, Select, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import PaginationComponent from "../../../components/PaginationComponent";
import axios from "axios";
import CsvDownload from "react-json-to-csv";
import moneyFormatter from "../../../utils/moneyFormatter";
import colors from "../../../styles/colors";

export interface Receitas {
  receita: string;
  vinculo: string;
  janeiro: string;
  fevereiro: string;
  marco: string;
  abril: string;
  maio: string;
  junho: string;
  julho: string;
  agosto: string;
  setembro: string;
  outubro: string;
  novembro: string;
  dezembro: string;
  totalArrecadado: string;
  ano: number;
}

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/lista_receitas";
const ITEMS_PER_PAGE = 50;

export const receitasDesc = {
  titlePage: "Receitas",
  description:
    "De modo acessível e de fácil compreensão, acompanhe os valores e fontes de arrecadação do município, comparando a evolução entre os últimos anos e também a variação entre receita prevista e efetivamente arrecadada.",
};

function Screen() {
  const title = receitasDesc.titlePage;
  const description = receitasDesc.description;

  const [licitacoes, setLicitacoes] = useState<Receitas[]>([]);
  const [tiposReceita, setTiposReceita] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedReceita, setSelectedReceita] = useState("");
  let count = 1

  useEffect(() => {
    fetchData();
    fetchTiposReceita();
  }, [selectedYear, selectedReceita]);

  // Função para buscar receitas
  const fetchData = async () => {
    let allLicitacoes: Receitas[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      let url = `${API_URL}?page=${page}`;
      const params = new URLSearchParams();

      if (selectedYear !== "Todos") params.append("ano", selectedYear);
      if (selectedReceita) params.append("receita", selectedReceita);

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

  // Função para buscar tipos únicos de receitas
  const fetchTiposReceita = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data.results) {
        const tiposUnicos: any = [...new Set(response.data.results.map((item: Receitas) => item.receita))];
        setTiposReceita(tiposUnicos);
      }
    } catch (error) {
      console.error("Erro ao buscar tipos de receita", error);
    }
  };

  const filteredLicitacoes = licitacoes.filter((item) =>
    searchTerm ? String(item.receita).toLowerCase().includes(searchTerm.toLowerCase()) : true
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
          bgColor={colors.primaryDefault40p}
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
          bgColor={colors.primaryDefault40p}
           _hover={{ bgColor: colors.primaryDefault80p }}
          height="40px"
          borderRadius="8px"
          mr="15px"
          onClick={() => exportToJSON(licitacoes)}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        >
          JSON
        </Button></Stack>

<Table >
  <Thead>
    <Tr  bg={colors.primaryDefault40p}
      color="white"
      p={4}
      fontWeight="bold"
      border={`1px solid ${colors.primaryDefault40p}`}>
      <Th color="white">Ano</Th>
      <Th color="white">Receita</Th>
      <Th color="white">Janeiro</Th>
      <Th color="white">Fevereiro</Th>
      <Th color="white">Março</Th>
      <Th color="white">Abril</Th>
      <Th color="white">Maio</Th>
      <Th color="white">Junho</Th>
      <Th color="white">Julho</Th>
      <Th color="white">Agosto</Th>
      <Th color="white">Setembro</Th>
      <Th color="white">Outubro</Th>
      <Th color="white">Novembro</Th>
      <Th color="white">Dezembro</Th>
      <Th color="white">Total Arrecadado</Th>
    </Tr>
  </Thead>
  <Tbody fontSize='12px'>
    
    {paginatedLicitacoes.map((row, index) => (
    
    <Tr 
    key={row.receita} 
    bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
    _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("black", "white") }}
    color={useColorModeValue("black", "white")}
  >
        <Td>{row.ano} </Td> 
       <Td>{row.receita}</Td>
       <Td>{moneyFormatter(Number(row.janeiro))}</Td>
        <Td>{moneyFormatter(Number(row.fevereiro))}</Td>
        <Td>{moneyFormatter(Number(row.marco))}</Td>
        <Td>{moneyFormatter(Number(row.abril))}</Td>
        <Td>{moneyFormatter(Number(row.maio))}</Td>
        <Td>{moneyFormatter(Number(row.junho))}</Td>
        <Td>{moneyFormatter(Number(row.julho))}</Td>
        <Td>{moneyFormatter(Number(row.agosto))}</Td>
        <Td>{moneyFormatter(Number(row.setembro))}</Td>
        <Td>{moneyFormatter(Number(row.outubro))}</Td>
        <Td>{moneyFormatter(Number(row.novembro))}</Td>
        <Td>{moneyFormatter(Number(row.dezembro))}</Td>
        <Td>{moneyFormatter(Number(row.totalArrecadado))}</Td>
      </Tr>
    ))}
  </Tbody>
</Table>

      <PaginationComponent pages={Math.ceil(filteredLicitacoes.length / ITEMS_PER_PAGE)} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </ContainerBasic>
  );
}

export default Screen;
