import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { Box, Button, Select, Stack, useColorModeValue, useDisclosure, Text, Input, useSafeLayoutEffect } from "@chakra-ui/react";
import PaginationComponent from "../../../components/PaginationComponent";
import CsvDownload from "react-json-to-csv";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";
import colors from "../../../styles/colors";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";

import usePagina from "../../../hooks/usePagina";

function obterTipoDespesa(tipo: any) {
  switch (Number(tipo)) {
    case 1:
      return "Acordo de Cooperação";
    case 2:
      return "Termo de Colaboração";
    case 3:
      return "Termo de Fomento";
    case 4:
      return "Termo de Autorização de Uso";
    case 5:
      return "Termo de Cessão de Uso";
    case 6:
      return "Termo de Compromisso";
    case 7:
      return "Termo de Cooperação";
    case 8:
      return "Termo de Doação";
    case 9:
      return "Termo de Permissão de Uso";
    case 10:
      return "Termo de Financiamento Cultural";      
    case 11:
      return "Credenciamento";      
    default:
      return "Tipo Desconhecido";
  }
}

type PropsInput = {
  handler: {
    //columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};

function Screen({ handler: {  data, loading } }: PropsInput) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [termo,setTermo] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedYear, setSelectedYear] = useState<number | undefined>(2026); // Estado para o ano selecionado
    const accessibility = useFontSizeAccessibilityContext();
    const [selectdTipo, setSelectedTipo] = useState<number | undefined>(undefined);
    const [selectedSecretaria, setSelectedSecretaria] = useState<string | undefined>(undefined)

    const ITEMS_PER_PAGE = 50;

  
  const filteredContratos = data
  .filter((item) => {
    // Filtro por ano
    if (selectedYear && Number((item.tc).split("/")[1]) !== selectedYear) {
      return false;
    }

    // Filtro por tipo
    if (selectdTipo && Number(item.tipo) !== selectdTipo) {
      return false;
    }

    // Filtro por secretaria
    if (selectedSecretaria && item.secretaria_responsavel !== selectedSecretaria) {
      return false;
    }

    return true;
  })
  .filter((item) =>
    (item.tc || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.interessado || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.contratada || "").toLowerCase().includes(searchTerm.toLowerCase())
  );
    
    const paginatedContratos = filteredContratos.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
    const totalPages = Math.ceil(filteredContratos.length / ITEMS_PER_PAGE);

    const secretarias = [... new Set (data.map((item)=> item.secretaria_responsavel).filter(Boolean))].sort()
    
    const tipo = [
       { id: 1, label: "Acordo de Cooperação" },
       { id: 2, label: "Termo de Colaboração" },
       { id: 3, label: "Termo de Fomento" },
       { id:4, label: "Termo de Autorização de Uso"},
       { id:5, label: "Termo de Cessão de Uso"},
       { id:6, label: "Termo de Compromisso"},
       { id:7, label: "Termo de Cooperação"},
       { id:8, label: "Termo de Doação"},
       { id:9, label: "Termo de Permissão de Uso"},
       { id:10, label: "Termo de Financiamento Cultural"},
       { id:11, label: "Credenciamento"},
    ]

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
  
 const dataMaisAtual = data.reduce((maisRecente, item) => {
    const dataItem = new Date(item.data_inicio);
    const dataAtualMaisRecente = new Date(maisRecente.data_inicio);
    return dataItem > dataAtualMaisRecente ? item : maisRecente;
  }, data[0]);

  const ultimaAtualizacao = dataMaisAtual ? new Date(dataMaisAtual.data_inicio).toLocaleDateString('pt-BR') : '';

  const {paginaData, loadings, error} = usePagina("26");
  
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
       <ContainerSearch  >
          <Stack minW={86} width="60%" flexDir='row'
          sx={{
            "@media (max-width: 900px)": {
              flexDir:'column'
            },
          }}
          >
            {/* Select para Filtrar por Ano */}
            <Select
            border={`1px solid ${colors.transparenciaBlack}`}
                      _focus={{
                        borderColor: colors.transparenciaBlack, // nova cor da borda ao focar
                        boxShadow:'none',
                        //backgroundColor: colors.primaryDefault40p // cor de fundo ao focar (exemplo)
                      }}
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              placeholder="Todos os anos"
              borderRadius="8px"
              height="40px"
              mb="10px"
              width='180px'
            >
              {[...Array(2026 - 2020 + 1)].map((_, i) => (
    <option key={i} value={2026 - i}>
      {2026 - i}
    </option>
  ))}
            </Select>
 {/* Select Tipo */}
            <Select
              value={selectdTipo}
              onChange={(e) => setSelectedTipo(Number(e.target.value))}
              placeholder="Todos os tipos"
              width="220px"
            >
              {tipo.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </Select>

            {/* Select Secretaria */}
            <Select
              value={selectedSecretaria}
              onChange={(e) => setSelectedSecretaria(e.target.value)}
              placeholder="Todas as secretarias"
              width="260px"
            >
              {secretarias.map((sec) => (
                <option key={sec} value={sec}>
                  {sec}
                </option>
              ))}
            </Select> <Button
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
  onClick={() => {
    setSelectedYear(undefined);
    setSelectedTipo(undefined);
    setSelectedSecretaria(undefined);
    setSearchTerm("");
    setCurrentPage(1);
  }}
>
  Limpar Filtros
</Button>

</Stack>
<Stack minW={86} width="50%" flexDir='row'
          sx={{
            "@media (max-width: 900px)": {
              flexDir:'column'
            },
          }}
          >
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
    bgColor={colors.transparenciaBlack} 
    _hover={{
      bgColor: colors.primaryDefault80p,  // Cor de fundo ao passar o mouse
    }}
    height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(data)}
    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
    
    >JSON</Button>
  


          </Stack>
           <Input
           border={`1px solid ${colors.transparenciaBlack}`}
                                 _focus={{
                                   borderColor: colors.transparenciaBlack, // nova cor da borda ao focar
                                   boxShadow:'none',
                                   //backgroundColor: colors.primaryDefault40p // cor de fundo ao focar (exemplo)
                                 }}
             type="text"
             placeholder="Pesquisar ..."
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             borderRadius="8px"
             height="40px"
             pr="40px" // Adiciona espaço para o ícone à direita
             width="35%"
             mb="10px"
             
           />
           <Text fontSize={accessibility?.fonts?.regular} mb="10px">
                   Última atualização: <strong>01/02/2025</strong>
                 </Text>
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
            border: `2px solid ${colors.transparenciaBlack}`,
          }}
          onClick={() => {
            // Armazenando os dados da despesa no sessionStorage
            sessionStorage.setItem("selectedDespesa", JSON.stringify(row));
                        // Redirecionando para a página de detalhes
            window.open(
              `detalhes?acordo-de-cooperacao=${row.tc}`,
              "_blank"
            );
          }}
         // onClick={() => window.location.href = `detalhes?${row.id_contrato}`}
        >
          <Text 
            fontWeight="bold" 
            fontSize="lg"
            color={colors.transparenciaBlack}
            borderBottom={`2px solid ${colors.transparenciaBlack}` }
            pb="5px" 
            mb="8px"
          >
           {obterTipoDespesa(row.tipo)} -  {row.tc}
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
          <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
                      <strong>Secretaria:</strong> {row.secretaria_responsavel}
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
