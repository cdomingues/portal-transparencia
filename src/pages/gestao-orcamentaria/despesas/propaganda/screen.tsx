import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import Chart from "../../../../components/Chart";
import ContainerBasic from "../../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../../components/Table";
//import Video from "../../../../components/Videos";
import ModalContracts from "./modalContracts";
import { useFontSizeAccessibilityContext } from "../../../../context/fontSizeAccessibility";
import CsvDownload from "react-json-to-csv";
import { ContainerSearch } from "../../../../styles/components/contratos-atas/styles";
import PaginationComponent from "../../../../components/PaginationComponent";
import moneyFormatter from "../../../../utils/moneyFormatter";
import moment from "moment";

type PropsInput = {
  handler: {
    columns: TableColumns;
    columnsDespesasPublicidade: TableColumns;
    data: Array<any>;
    data2: Array<any>;
    loading: boolean;
    chart: any;
    chartYear: any;
    years: Number[];
    setYear: any;
    year: number;
    gastos: Array<any>;
    setGastos: any;
    setData2: any;
      };
};

type Publicidade = {
  competencia: string; // Data no formato ISO 8601
  campanha: string;
  veiculo_divulgacao: string;
  tipo_servico: string;
  fornecedor: string | null;
  agencia_contratada: string;
  data_inicio: string; // Data no formato ISO 8601
  data_termino: string; // Data no formato ISO 8601
  valor_total_veiculacao: string; // Pode ser convertido para número, se necessário
  honorario_agencia_veiculacao: string; // Pode ser convertido para número, se necessário
  honorario_agencia_producao: string | null; // Pode ser convertido para número, se necessário
  data_pagamento: string; // Data no formato "YYYY-MM-DD HH:mm:ss"
  ano: number;
};

export const contentAdvertisements = {
  titlePage: "Gastos com publicidade",
  description:
    "A publicidade legal e institucional realizada pelo Poder Público é um importante serviço cujo objetivo final é favorecer o acesso da população a todos os outros serviços públicos, além de contribuir com a transparência dos atos administrativos. Confira as despesas com publicidade da Prefeitura de Mogi das Cruzes",
};

function Screen({
  handler: {
    columns,
    columnsDespesasPublicidade,
    data2,
    setData2,
    data,
    loading,
    chart,
    chartYear,
    setYear,
    year,
   
    gastos,
    setGastos,
  
   // handleByYear,
  },
}: PropsInput) {
  const title = contentAdvertisements?.titlePage;
  const description = contentAdvertisements?.description;
  const [contract, setContract] = useState<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2024);
  const [selectedYear2, setSelectedYear2] = useState<number | undefined>(2024);
  const accessibility = useFontSizeAccessibilityContext();
 
  const ITEMS_PER_PAGE = 50;
  
  {/* Inicio trecho buscar dados de gastos com publicidade */}

  const gastosPublicidadeFiltrados = gastos
  .filter((item) => {
    if (selectedYear) {
      return item.ano === selectedYear; // Ajuste aqui para comparar corretamente
    }
    return true; // Se não houver ano selecionado, retorna todos os itens
  })
  .filter((item) =>
    
    item.campanha.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.veiculo_divulgacao.toLowerCase().includes(searchTerm.toLowerCase()) 
  )
  //console.log(gastosPublicidadeFiltrados)

  const paginatedPublicidade = gastosPublicidadeFiltrados.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  

  const totalPages = Math.ceil(gastosPublicidadeFiltrados.length / ITEMS_PER_PAGE);
  

  const handlePageClick = (data: { selected: number }) => {
    const newPage = Math.max(1, Math.min(data.selected + 1, totalPages));
    setCurrentPage(newPage);
  };

  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };

  const exportToJSON = (gastos: any) => {
    const blob = new Blob([JSON.stringify(gastos, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
  
    link.setAttribute("href", url);
    link.setAttribute("download", "dados_despesas_propaganda.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
      setCurrentPage(1); // Reseta a página para 1 ao mudar o ano
    }, [selectedYear]);
    const years = [...new Set(gastos.map((item) => item.ano))].sort((a, b) => b - a);
    
{/* Inicio do trecho para buscar os dados de gastos de publicidade  */}

{/* Inicio trecho buscar dados de gastos com publicidade */}
console.log(data2.length)
const outrosgastosPublicidadeFiltrados = data2
.filter((item) => {
  if (selectedYear) {
    return Number(item.exercicio_empenho) === selectedYear;
  }
  return true; // Se não houver ano selecionado, retorna todos os itens
})
.filter((item) =>
  item.nr_empenho?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.descr_funcional.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.acao.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.descr_fornecedor.toLowerCase().includes(searchTerm.toLowerCase())||
  item.id_empenho.toLowerCase().includes(searchTerm.toLowerCase())
)

console.log(outrosgastosPublicidadeFiltrados)

const paginatedOutrosPublicidade = outrosgastosPublicidadeFiltrados.slice(
  (currentPage2 - 1) * ITEMS_PER_PAGE,
  currentPage2 * ITEMS_PER_PAGE
);


const totalPages2 = Math.ceil(gastosPublicidadeFiltrados.length / ITEMS_PER_PAGE);
console.log(gastosPublicidadeFiltrados.length )

const exportToJSON2 = (data2: any) => {
  const blob = new Blob([JSON.stringify(data2, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", "dados_outras_despesas_propaganda.json");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

useEffect(() => {
  setCurrentPage2(1); // Reseta a página para 1 ao mudar o ano
}, [selectedYear]);
const years2 = [...new Set(data2.map((item2) => item2.ano))].sort((a, b) => b - a);
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
       
      </Box>

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
                  bgColor="#1c3c6e"
                  _hover={{ bgColor: "#1c3c6e" }}
                  height="40px"
                  borderRadius="8px"
                  mr="15px"
                  transition="background-color 0.3s ease"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  
                >
                  <CsvDownload
                    filename={"dados_gastos_publicidade.csv"}
                    data={gastos}
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
                    height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(data)}
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                    
                    >JSON</Button>
                       </Stack>
                          <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
                        </ContainerSearch>
        
                        <Table >
  <Thead>
    <Tr  bg="#c62227"
      color="white"
      p={4}
      fontWeight="bold"
      border="1px solid #c62227">
      <Th color="white">Ano</Th>
      <Th color="white">Mês</Th>
      <Th color="white">Campanha</Th>
      <Th color="white">Veiculo de divulgação</Th>
      <Th color="white">Tipo de serviço</Th>
      <Th color="white">Agência contratada</Th>
      <Th color="white">Data de início</Th>
      <Th color="white">Data de término</Th>
      <Th color="white">Valor total veiculação</Th>
      <Th color="white">Honorário da agência de veiculação</Th>
      <Th color="white">Honorário da agência de produção</Th>
      <Th color="white">Data do pagamento</Th>
      
    </Tr>
  </Thead>
  <Tbody fontSize='12px'>
    
    {paginatedPublicidade.map((row, index) => (
    
      <Tr key={row.index}>
        <Td>{row.ano} </Td> 
       <Td>{row.competencia}</Td>
       <Td>{row.campanha}</Td>
        <Td>{row.veiculo_divulgacao}</Td>
        <Td>{row.tipo_servico}</Td>
        <Td>{row.agencia_contratada}</Td>
        <Td>{moment(row.data_inicio).format("DD/MM/YYYY")}</Td>
        <Td>{row.data_termino}</Td>
        <Td>{row.valor_total_veiculacao}</Td>
        <Td>{row.honorario_agencia_producao}</Td>
        <Td>{row.data_pagamento}</Td>
</Tr>
    ))}
  </Tbody>
</Table>

      <PaginationComponent pages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />

        <Divider borderWidth="2px" mt="10" mb="10" />

        <Heading
          mb={3}
          fontSize={accessibility?.fonts?.ultraLarge}
          color="text.dark"
        >
          Outras Despesas com Publicidade
        </Heading>


        <ContainerSearch  >
                          <Stack minW={86} width="50%" flexDir='row'
                          sx={{
                            "@media (max-width: 900px)": {
                              flexDir:'column'
                            },
                          }}
                          >
                            {/* Select para Filtrar por Ano */}
                           
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
                    filename={"dados_outros_gastos_publicidade.csv"}
                    data={data2}
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
                    height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(data2)}
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                    
                    >JSON</Button>
                       </Stack>
                          <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
                        </ContainerSearch>
                        
                                       

            {data2
              .sort((a, b) => Number(a.nr_empenho) - Number(b.nr_empenho))
              .map((row,index) => (
                <Box
                  key={row.id}
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
                    Empenho: {row.nr_empenho} / {row.exercicio_empenho} 
                  </Text>
                  <Text>Fornecedor: {row.descr_fornecedor}</Text>
                  <Text>Descrição: {row.descr_funcional}</Text>
                  <Text>Valor empenho: {row.vlr_empenho}</Text>
                  <Text>Unidade Orçamentária: {row.unid_orcam}</Text>
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
    
        
        
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
