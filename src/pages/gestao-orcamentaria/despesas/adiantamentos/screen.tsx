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
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../../components/Table";
import ModalContracts from "./modalContracts";
import { ContainerSearch } from "../../../../styles/components/contratos-atas/styles";
import CsvDownload from "react-json-to-csv";
import PaginationComponent from "../../../../components/PaginationComponent";
import colors from "../../../../styles/colors";

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
  titlePage: "Adiantamentos",
  description:
    "Adiantamentos são recursos financeiros conferidos a um servidor público, a fim de que possa realizar despesas que não possam aguardar o ciclo normal de compras. Confira os gastos relacionados a adiantamentos e hospedagens dos servidores públicos no exercício de sua função.",
};
function Screen({
  handler: { columns, data, loading, handleByYear, setYear, year,data2, setData2,arquivosColumns },
}: PropsInput) {
  const [contract, setContract] = useState<any>(null);
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2024);

  const ITEMS_PER_PAGE = 50;

  const despesaFiltradas = data
    .filter((item) => {
      if (selectedYear) {
        return Number(item.exercicio_empenho) === selectedYear; 
      }
      return true; 
    })
    .filter((item) =>
      item.nr_empenho?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descr_funcional?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.acao?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descr_fornecedor?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id_empenho?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.vinculo?.toLowerCase() || '').includes(searchTerm.toLowerCase()) // Evita erro quando item.vinculo for null
    );
  
    const paginatedContratos = despesaFiltradas.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
    const totalPages = Math.ceil(despesaFiltradas.length / ITEMS_PER_PAGE);
    console.log(despesaFiltradas.length )
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
    
    useEffect(() => {
      setCurrentPage(1); // Reseta a página para 1 ao mudar o ano
    }, [selectedYear]);
  
    const years = [...new Set(data.map((item) => item.exercicio_empenho))].sort((a, b) => b - a);
  console.log(years)
    // Ordena os contratos de forma decrescente pelo ano extraído de "numero"
    const sortedPaginatedContratos = [...paginatedContratos].sort((a, b) => {
      return a.nr_empenho - b.nr_empenho; // Crescente (menor para maior)
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
                bgColor={colors.primaryDefault40p}
                _hover={{ bgColor: colors.primaryDefault80p }}
                height="40px"
                borderRadius="8px"
                mr="15px"
                transition="background-color 0.3s ease"
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                
              >
                <CsvDownload
                  filename={"dados_despesas.csv"}
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
                      _hover={{ bgColor: colors.primaryDefault80p }}
                  height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(data)}
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

      <Divider borderWidth="2px" mt="10" mb="10" />
      {sortedPaginatedContratos
       .sort((a, b) => Number(a.nr_empenho) - Number(b.nr_empenho))
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
             
             window.open(
               `detalhes`,
               "_blank"
             );
           }}
          
         >
           <Text fontWeight="bold" 
            fontSize="lg"
            color={colors.primaryDefault40p}
            borderBottom={`2px solid ${colors.primaryDefault40p}`}
            pb="5px" 
            mb="8px">
             Empenho: {row.nr_empenho} / {row.exercicio_empenho}
           </Text>
           <Text><strong>Fornecedor: </strong>{row.descr_fornecedor}</Text>
           <Text><strong>Descrição:</strong> {row.descr_funcional}</Text>
           <Text><strong>Valor empenho:</strong> {row.vlr_empenho}</Text>
           <Text><strong>Unidade Orçamentária:</strong> {row.unid_orcam}</Text>
           <Text><strong>Vinculo: </strong>{row.vinculo}</Text>
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