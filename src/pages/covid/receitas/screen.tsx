import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue, Table, Tbody, Td, Th, Thead, Tr, 
  Input
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import Chart from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../components/Table";
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

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    chartYear: any;
    chart: any;
    years: Number[];
    setYear: any;
    year: number;
    handleByYear: any;
  };
};

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/lista_receitas";
const ITEMS_PER_PAGE = 50;

 

 
  
export const contentExtrabudgetRevenues = {
  titlePage: "Receitas COVID-19",
  description: "Dispõe das receitas recebidas pelo órgão público para enfrentamento da emergência de saúde pública de importância internacional decorrente do coronavírus (COVID-19). ",
}


function Screen({
  handler: {
    columns,
    data,
    loading,
    chartYear,
    chart,
    setYear,
    year,
    years,
    handleByYear,
  },
}: PropsInput) {
  const title = contentExtrabudgetRevenues?.titlePage;
  const description = contentExtrabudgetRevenues?.description;
  const [licitacoes, setLicitacoes] = useState<Receitas[]>([]);
  const [tiposReceita, setTiposReceita] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedReceita, setSelectedReceita] = useState("");
  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };
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
        const tiposUnicos: any = [
          ...new Set(response.data.results.map((item: Receitas) => item.receita)),
        ].sort(); // Adicionando .sort() para ordenar alfabeticamente
  
        setTiposReceita(tiposUnicos);
      }
    } catch (error) {
      console.error("Erro ao buscar tipos de receita", error);
    }
  };

  const filteredLicitacoes = licitacoes.filter((item) => {
    const receitaLower = String(item.receita).toLowerCase();
    return (
      (searchTerm ? receitaLower.includes(searchTerm.toLowerCase()) : true) &&
      receitaLower.includes("covid")
    );
  });

  const paginatedLicitacoes = filteredLicitacoes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  

  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "dados_receitas_extra.json");
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
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} width={'30%'}>
          <option value="Todos">Selecione o ano</option>
          {[...Array(2022 - 2020 + 1)].map((_, i) => (
    <option key={i} value={2022 - i}>
      {2022 - i}
    </option>
  ))}
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
            filename={"dados_receitas_extra.csv"}
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
          bgColor="#1c3c6e"
          _hover={{ bgColor: "#1c3c6e" }}
          height="40px"
          borderRadius="8px"
          mr="15px"
          onClick={() => exportToJSON(licitacoes)}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        >
          JSON
        </Button>
      </Stack>

      <Input
        type="text"
        placeholder="Pesquisar receita..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        borderRadius="8px"
        height="40px"
        width="30%"
        my="10px"
      />
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
    
      <Tr key={row.receita}
      bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
          _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("white", "black") }}
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
      
     
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
