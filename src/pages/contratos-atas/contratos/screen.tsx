import {
  Button,
  Divider,
  Select,
  Stack,
  Text,
  useDisclosure,
  Box,
  useColorModeValue,
  Input
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";
//import ModalContracts from "./modalContracts";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";
import PaginationComponent from "../../../components/PaginationComponent";

import CsvDownload from "react-json-to-csv";


type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    year: number;
    years: Number[];
    setYear: any;
    handleByYear: any;
    data2: Array<any>;
    setData2: any;
    arquivosColumns: TableColumns;
  };
};

export const contentContractsAndAtas = {
  titlePage: "Contratos",
  description:
    "Nesta página, confira as informações sobre contratos e atas celebrados pela Prefeitura de Mogi das Cruzes com prestadores de serviço. Pesquise por número, modalidade, processo, valor, fornecedor, objeto, entre outros itens. ",
};

function Screen({
  handler: { columns, data },
}: PropsInput) {
  const [contract, setContract] = useState<any>(null);
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2025); // Estado para o ano selecionado

  const { isOpen, onOpen, onClose } = useDisclosure();

  const ITEMS_PER_PAGE = 50;
  

  // Filtra os contratos com base no ano selecionado
  const filteredContratos = data.filter((item) => {
    if (selectedYear) {
      return item.ano === selectedYear; // Filtra pelo campo "ano"
    }
    return true; // Se nenhum ano for selecionado, mostra todos os contratos
  }).filter((item) =>
    item.id_contrato.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.fornecedor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedContratos = filteredContratos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredContratos.length / ITEMS_PER_PAGE);
  console.log(filteredContratos.length )
  const handlePageClick = (data: { selected: number }) => {
    const newPage = Math.max(1, Math.min(data.selected + 1, totalPages));
    setCurrentPage(newPage);
  };

  
  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
  
    link.setAttribute("href", url);
    link.setAttribute("download", "dados_contratos.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  const handleOpenModal = (item: any) => {
    onOpen();
    setContract(item?.row?.values);
  };

  useEffect(() => {
    setCurrentPage(1); // Reseta a página para 1 ao mudar o ano
  }, [selectedYear]);

  // Obtém os anos únicos dos dados e ordena de forma decrescente
  const years = [...new Set(data.map((item) => item.ano))].sort((a, b) => b - a);

  // Ordena os contratos de forma decrescente pelo ano extraído de "numero"
  const sortedPaginatedContratos = [...paginatedContratos].sort((a, b) => {
    // Extrai o ano de "numero" (formato 000044/2024)
    const aAno = parseInt(a.numero.split('/')[0], 10);
    const bAno = parseInt(b.numero.split('/')[0], 10);

    // Ordena de forma decrescente com base no ano
    return   aAno - bAno;
  });

  

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
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              placeholder="Todos os anos"
              borderRadius="8px"
              height="40px"
              mb="10px"
              width='180px'
            >
              {years.map((year) => (
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
    data={filteredContratos}
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
    height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(sortedPaginatedContratos)}
    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
    
    >JSON</Button>
   


          </Stack>
          <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
        </ContainerSearch>

        <Divider borderWidth="2px" mt="10" mb="10" />

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

        {sortedPaginatedContratos.map((row) => (
          <Box
            key={row.id_contrato}
            border="2px solid #c62227"
            p="10px"
            borderRadius="12px"
            mb="10px"
            onClick={() => window.location.href = `contratos_detalhes?${row.id_contrato}`}
            _hover={{ border: "3px solid red", transition: "0.3s" }}
            
            cursor='pointer'
          >
            
            <Text fontWeight="bold" borderBottom='1.5px solid red'>{row.id_contrato}</Text>
            <Text>Empresa contratada: {row.fornecedor}</Text>
            <Text>Data Início: {row.data_inicio} - Data Fim: {row.data_termino}</Text>
            <Text>Descrição: {row.descricao}</Text>
           
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
