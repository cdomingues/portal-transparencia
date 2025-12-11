import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Link,
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

import DadosAbertos from "../../../components/DadosAbertos";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import moneyFormatter from "../../../utils/moneyFormatter";
import CsvDownload from "react-json-to-csv";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";
import PaginationComponent from "../../../components/PaginationComponent";
import colors from "../../../styles/colors";
import usePagina from "../../../hooks/usePagina";

export interface DividaAtiva {
  "cpf_cnpj": string,
  "nome": string,
  "nome_fantasia":string,
  "valor_total":string,
  "valor_divida_selecionada": string
}

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    
  };
};



function Screen({
  handler: {
    columns,
    data,
    loading,
    
  },
}: PropsInput) {
  
  const accessibility = useFontSizeAccessibilityContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const { paginaData, loadings, error } = usePagina("8");
  

  const ITEMS_PER_PAGE = 50;

  const devedoresFiltrados = data.filter((item) => {
    return (
      (item.cpf_cnpj && item.cpf_cnpj.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.nome && item.nome.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.nome_fantasia && item.nome_fantasia.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
  

  const paginatedDevedores = devedoresFiltrados.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )
  const totalPages = Math.ceil(devedoresFiltrados.length / ITEMS_PER_PAGE);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  
  const sortedDevedores = [...devedoresFiltrados].sort((a, b) => {
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
  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };

  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
  
    link.setAttribute("href", url);
    link.setAttribute("download", "dados_deveroes.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
        setCurrentPage(1); // Reseta a página para 1 ao mudar o ano
      }, []);

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
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        {conteudo && (
          <Box
            dangerouslySetInnerHTML={{ __html: conteudo }}
           
          />
        )}
        Fonte das informações
      <Button
         as="a"
         href="https://www.listadevedores.pgfn.gov.br/"
         target="_blank"
         colorScheme="blue"
         ml="10px"
         size="sm"
       >
         Lista de Devedores da PGFN
       </Button>
             
              <ContainerSearch  mt='20px'>
                          <Stack minW={86} width="50%" flexDir='row'
                          sx={{
                            "@media (max-width: 900px)": {
                              flexDir:'column'
                            },
                          }}>                          
                              
                       </Stack>
                                                    
                        </ContainerSearch>
                              
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
