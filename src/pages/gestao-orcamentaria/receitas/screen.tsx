import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { Box, Button, Input, Select, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import PaginationComponent from "../../../components/PaginationComponent";
import axios from "axios";
import CsvDownload from "react-json-to-csv";
import moneyFormatter from "../../../utils/moneyFormatter";
import colors from "../../../styles/colors";
import usePagina from "../../../hooks/usePagina";

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
  previsto: string
}

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/lista_receitas2";
const ITEMS_PER_PAGE = 50;

/* export const receitasDesc = {
  titlePage: "Receitas",
  description:
    "De forma clara e acessível, acompanhe os valores arrecadados pelo município e suas respectivas fontes, em conformidade com as leis federais nº 9.452/1997, nº 12.527/11 (Lei de Acesso à Informação) e a Lei Complementar 101/2000. Compare a evolução das receitas ao longo dos últimos anos e visualize também a diferença entre a receita prevista, a efetivamente arrecadada e deduções.",
}; */

function Screen() {
  //const title = receitasDesc.titlePage;
  //const description = receitasDesc.description;

  const { paginaData, loadings, error } = usePagina("2");

  const [licitacoes, setLicitacoes] = useState<Receitas[]>([]);
  const [tiposReceita, setTiposReceita] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedReceita, setSelectedReceita] = useState("");
  let count = 1

  useEffect(() => {
    fetchData();
    //fetchTiposReceita();
  }, [selectedYear]);

  // Função para buscar receitas
  const fetchData = async () => {
    let allLicitacoes: Receitas[] = [];
    let url = `${API_URL}`;
    const params = new URLSearchParams();
  
    // Adiciona o parâmetro 'ano' se não for "Todos"
    if (selectedYear !== "Todos") {
      params.append("ano", selectedYear);
    }
  
    // Adiciona os parâmetros à URL inicial
    if (params.toString()) {
      url += `?${params.toString()}`;
    }
  
    try {
      // Enquanto houver uma URL para a próxima página
      while (url) {
        const response = await axios.get(url);
        
        // Verifica se há resultados e os adiciona ao array
        if (response.data && response.data.length > 0) {
          allLicitacoes = [...allLicitacoes, ...response.data];
        }
  
        // Atualiza a URL para a próxima página (ou null para encerrar)
        url = response.data.next;
      }
    } catch (error) {
      console.error("Erro ao buscar dados", error);
    }
  
    // Atualiza o estado com todos os resultados encontrados
    setLicitacoes(allLicitacoes);
    setCurrentPage(1);
  };
  

  // Função para buscar tipos únicos de receitas
 

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
      <Box my='25px' border='1px solid lightgrey' p='5' borderRadius='15px' boxShadow='2xl' width='95vw'>
      {conteudo && (
               <Box
                 dangerouslySetInnerHTML={{ __html: conteudo }}
                 sx={{
                   p: { mb: 2, textAlign: "justify" },
                   a: {
                     color: "blue.600",
                     fontWeight: "bold",
                     textDecoration: "underline",
                   },
                 }}
               />
             )}
      </Box>
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
                Última atualização: <strong>01/06/2025</strong>
              </Text>

<Table overflowX='auto' width='100%' >
  <Thead >
    <Tr  bg={colors.transparenciaBlack}
      color="white"
      p={4}
      fontWeight="bold"
      border={`1px solid ${colors.grayLighter}`}
       
       >
      <Th color="white" >Ano</Th>
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
      <Th color="white">Total Previsto</Th>
      <Th color="white">Total Arrecadado</Th>
    </Tr>
  </Thead>
  <Tbody fontSize='12px'>
    
    {paginatedLicitacoes.map((row, index) => (
    
    <Tr 
    key={index} 
    bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
    _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("black", "white") }}
    color={useColorModeValue("black", "white")}
  >
        <Td>{row.ano} </Td> 
       <Td>{row.receita} </Td> 
      
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
        <Td>{moneyFormatter(Number(row.previsto))}</Td>
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
