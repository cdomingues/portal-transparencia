import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Input
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import Chart from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import TableComponent, { TableColumns } from "../../../components/Table";
import PaginationComponent from "../../../components/PaginationComponent";
import axios from "axios";
import CsvDownload from "react-json-to-csv";
import moneyFormatter from "../../../utils/moneyFormatter";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";

interface ReceitaItem {
  integra: string;
  numero: number;
  ano: number;
  data: string; // Pode ser transformado em Date se necessário
  valor_ori: string; // Pode ser number se for convertido
  valor_anu: string; // Pode ser number se for convertido
  valor_atu: string; // Pode ser number se for convertido
  favorecido: string;
  cnpj_cpf_favorecido: string;
  unidadeorc: string;
  funcionalprogramatica: string;
  programa: string;
  funcao: string;
  subfuncao: string;
  fonterecurso: string;
  naturezadespesa: string;
  unidadeexecutora: string;
  tipoempenho: string;
  numerocontrato: string | null;
  numerolicitacao: string | null;
  tipolicitacao: string | null;
  codigodotacao: number;
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

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/lista_despesa_extra";
const ITEMS_PER_PAGE = 50;



export const contentExtrabudgetExpenses = {
  titlePage: "Despesas Extraorçamentárias",
  description: "Aqui você pode acompanhar as informações sobre as despesas que não integram o orçamento da Prefeitura, apenas transitam pelo poder público.",
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
   
    handleByYear,
  },
}: PropsInput) {
 
  const title = contentExtrabudgetExpenses?.titlePage;
  const description = contentExtrabudgetExpenses?.description;

  const [despesas, setDespesas] = useState<ReceitaItem[]>([]);
const [currentPage, setCurrentPage] = useState(1);
const [searchTerm, setSearchTerm] = useState("");
const [selectedYear, setSelectedYear] = useState("2025");


useEffect(() => {
    fetchData();
    
  }, [selectedYear]);

  // Função para buscar receitas
  const fetchData = async () => {
    let allLicitacoes: ReceitaItem[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      let url = `${API_URL}?page=${page}`;
      const params = new URLSearchParams();

      if (selectedYear !== "Todos") params.append("ano", selectedYear);
    

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

    setDespesas(allLicitacoes);
    setCurrentPage(1);
  };

  const despesaFiltradas = despesas
  .filter((item) =>{
    if (selectedYear) {
      return item.ano === Number(selectedYear); 
    }
    return true; 
  })
  .filter((item) =>
    item.numero?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.favorecido?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cnpj_cpf_favorecido?.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
  

  const paginatedDespesas = despesaFiltradas.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(despesaFiltradas.length / ITEMS_PER_PAGE);
  console.log(despesaFiltradas.length )

  const exportToJSON = (despesas: any) => {
    const blob = new Blob([JSON.stringify(despesas, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "dados_despesas_extra.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
      setCurrentPage(1); // Reseta a página para 1 ao mudar o ano
    }, [selectedYear]);
  
    const years = [...new Set(despesas.map((item) => item.ano))].sort((a, b) => b - a);
    console.log(years)

  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
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
  <ContainerSearch  >
                  <Stack minW={86} width="50%" flexDir='row'
                  sx={{
                    "@media (max-width: 900px)": {
                      flexDir:'column'
                    },
                  }}
                  >
                    {/* Select para Filtrar por Ano */}
                    <Select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      placeholder="Todos os anos"
                      borderRadius="8px"
                      height="40px"
                      mb="10px"
                      width='180px'
                    >
                      {years.map((year) => (
                        <option value={year}>
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
          bgColor="#1c3c6e"
          _hover={{ bgColor: "#1c3c6e" }}
          height="40px"
          borderRadius="8px"
          mr="15px"
          transition="background-color 0.3s ease"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          
        >
          <CsvDownload
            filename={"dados_despesas_extra.csv"}
            data={despesas}
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
            height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(despesas)}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
            
            >JSON</Button>
           
        
        
                  </Stack>
                  <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
                </ContainerSearch>

                <Input
                          type="text"
                          placeholder="Pesquisar contratos..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          borderRadius="8px"
                          height="40px"
                          pr="40px" // Adiciona espaço para o ícone à direita
                          width="40%"
                          mb="10px"
                          
                        />
                        {paginatedDespesas
                          .sort((a, b) => Number(a.numero) - Number(b.numero))
                          .map((row) => (
                            <Box
                              key={row.integra}
                              border="2px solid #c62227"
                              p="10px"
                              borderRadius="12px"
                              mb="10px"
                              onClick={() => {
                                // Armazenando os dados da despesa no sessionStorage
                                sessionStorage.setItem("selectedDespesa", JSON.stringify(row));
                                
                                // Redirecionando para a página de detalhes
                                window.open(
                                  `detalhes`,
                                  "_blank"
                                );
                              }}
                              _hover={{ border: "3px solid red", transition: "0.3s" }}
                              cursor="pointer"
                            >
                              <Text fontWeight="bold" borderBottom="1.5px solid red">
                                Empenho: {row.numero} / {row.ano}
                              </Text>
                              <Text>Fornecedor: {row.favorecido}</Text>
                              <Text>Natureza: {row.naturezadespesa}</Text>
                             
                             
                            </Box>
                          ))}
                          <Box
       
       as="ul" // Garante que Box se comporte como <ul>
       display="flex"
       justifyContent="space-around"
       
       alignItems="center"
       flexWrap="wrap"
       gap="10px"
       mt="20px"
       p="15px"
       listStyleType="none"
       fontWeight="bold"
       fontSize="lg"
       overflowX="auto"
      // whiteSpace="nowrap"
       maxW="100%"
       sx={{
         "& li": {
           display: "inline-block", // Garante que os itens fiquem em linha
           marginLeft: '10px',
           padding: "8px 15px",
           cursor: "pointer",
           textDecoration: "none",
           borderRadius: "5px",
           backgroundColor: "#f0f0f0",
           transition: "background-color 0.3s, color 0.3s",
         },
         "& li:hover": {
           backgroundColor: "red",
           color: "white",
           gap: '10px'
         },
         "& .active": {
           fontWeight: "bold",
           backgroundColor: "red",
           color: "white",
         },
       }}
     >
   
     </Box>
     <PaginationComponent 
     pages={totalPages} 
     setCurrentPage={setCurrentPage} 
     currentPage={currentPage} 
     />
      </Box>
      
    </ContainerBasic>
  );
}

export default Screen;
