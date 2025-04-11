import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { Box, Button, Select, Stack, useColorModeValue, useDisclosure, Text, Input } from "@chakra-ui/react";
import PaginationComponent from "../../../components/PaginationComponent";
import CsvDownload from "react-json-to-csv";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";
import colors from "../../../styles/colors";

type PropsInput = {
  handler: {
    //columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};

function Screen({ handler: {  data, loading } }: PropsInput) {
  const title = "Termo de Colaboração";
  const description = "Esse termo é regido pela Lei nº 13.019/2014, conhecida como a Lei do Marco Regulatório das Organizações da Sociedade Civil (MROSC). O termo de parceria é uma modalidade específica de contrato administrativo que tem como objetivo estabelecer os termos, condições, obrigações e responsabilidades das partes envolvidas em uma parceria para a execução de atividades ou projetos de interesse público. Esse tipo de instrumento é mais comumente utilizado em áreas como assistência social, saúde, educação, cultura, esporte e meio ambiente, onde a atuação conjunta entre o poder público e organizações da sociedade civil é relevante";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [termo,setTermo] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedYear, setSelectedYear] = useState<number | undefined>(2025); // Estado para o ano selecionado

    const ITEMS_PER_PAGE = 50;

  
  const filteredContratos = data.filter((item) => {
      if (selectedYear) {
        return Number((item.tc).split('/')[1]) === selectedYear; // Filtra pelo campo "ano"
      }
      return true; // Se nenhum ano for selecionado, mostra todos os contratos
    }).filter((item) =>
      item.tc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.interessado.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.contratada.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredContratos.length )
    const paginatedContratos = filteredContratos.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
    const totalPages = Math.ceil(filteredContratos.length / ITEMS_PER_PAGE);
    
    const handlePageClick = (data: { selected: number }) => {
      const newPage = Math.max(1, Math.min(data.selected + 1, totalPages));
      setCurrentPage(newPage);
    };
  
    
    const exportToJSON = (data: any) => {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
    
      link.setAttribute("href", url);
      link.setAttribute("download", "dados_acordos_cooperacao.json");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    
  
    
  
    useEffect(() => {
      setCurrentPage(1); // Reseta a página para 1 ao mudar o ano
    }, [selectedYear]);
  
    // Obtém os anos únicos dos dados e ordena de forma decrescente
    const years = [...new Set(data.map((item) => (item.tc).split('/')[1]))].sort((a, b) => b - a);
  
    
    
    console.log(paginatedContratos)
  
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
  bgColor={colors.primaryDefault40p}
  _hover={{ bgColor: colors.primaryDefault80p }}
  height="40px"
  borderRadius="8px"
  mr="15px"
  transition="background-color 0.3s ease"
  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
  
>
  <CsvDownload
    filename={"dados_acordos_cooperacao.csv"}
    data={data}
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
    bgColor={colors.primaryDefault40p} 
    _hover={{
      bgColor: colors.primaryDefault80p,  // Cor de fundo ao passar o mouse
    }}
    height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(data)}
    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
    
    >JSON</Button>
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


          </Stack>
          <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
        </ContainerSearch>
        {paginatedContratos
       .sort((a, b) => {
        const aValue = Number(a.tc.split('/')[0]) || 0;
        const bValue = Number(b.tc.split('/')[0]) || 0;
        return aValue - bValue;
      })
        .map((row) => (
          <Box
          key={row.id}
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
            border: `2px solid ${colors.primaryDefault40p}`,
          }}
          onClick={() => {
            // Armazenando os dados da despesa no sessionStorage
            sessionStorage.setItem("selectedDespesa", JSON.stringify(row));
            
            // Redirecionando para a página de detalhes
            window.open(
              `detalhes?termo-de-colaboracao=${row.tc}`,
              "_blank"
            );
          }}
         // onClick={() => window.location.href = `detalhes?${row.id_contrato}`}
        >
          <Text 
            fontWeight="bold" 
            fontSize="lg"
            color={colors.primaryDefault40p}
            borderBottom={`2px solid ${colors.primaryDefault40p}`}
            pb="5px" 
            mb="8px"
          >
          TERMO  {row.tc}
          </Text>
          <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
            <strong>Empresa contratada:</strong> {row.interessado}
          </Text>
          <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
            <strong>Data Início:</strong> {row.data_inicio} - <strong>Data Fim:</strong> {row.data_fim}
          </Text>
          <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
            <strong>Descrição:</strong> {row.assunto}
          </Text>
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





