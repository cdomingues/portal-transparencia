import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Input,
  Table,
  Tbody,
  Td,
  Tr,
  Thead,
  Th
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
import colors from "../../../styles/colors";
import usePagina from "../../../hooks/usePagina";

interface Despesa {
   conta_contabil: string;
  descricao_contabil: string;
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
  exercicio: number;
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

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/lista_receita_despesa_extra?tipo_movimento=Pagamento";
const ITEMS_PER_PAGE = 50;


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
 
  

  const [despesas, setDespesas] = useState<Despesa[]>([]);
const [currentPage, setCurrentPage] = useState(1);
const [searchTerm, setSearchTerm] = useState("");
const [selectedYear, setSelectedYear] = useState("2026");

const {paginaData, loadings, error } = usePagina("11");

useEffect(() => {
    fetchData();
    
  }, [selectedYear]);
const fetchData = async () => {
  let url = `https://dadosadm.mogidascruzes.sp.gov.br/api/lista_receita_despesa_extra?tipo_movimento=Receita`;

  // Adiciona o parâmetro 'exercicio' se necessário
  if (selectedYear !== "Todos") {
    url += `&exercicio=${selectedYear}`;
  }

  try {
    const response = await axios.get(url);

    if (response.data && Array.isArray(response.data)) {
      setDespesas(response.data);
    } else {
      setDespesas([]); // Retorna array vazio se resposta inválida
      console.warn("Formato de dados inesperado", response.data);
    }

    setCurrentPage(1);
  } catch (error) {
    console.error("Erro ao buscar dados", error);
    setDespesas([]);
  }
};

  // Função para buscar tipos únicos de receitas
 

  const filteredLicitacoes = despesas.filter((item) =>
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
    link.setAttribute("download", "dados_receitas_extra.json");
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
                   <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} width='30%'>
                     <option value="Todos">Selecione o ano</option>
                     {[...Array(2026 - 2010 + 1)].map((_, i) => (
               <option key={i} value={2026 - i}>
                 {2026 - i}
               </option>
             ))}
                   </Select>
           
                  
           
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
                       filename={"dados_receitas_extra.csv"}
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
                     onClick={() => exportToJSON(despesas)}
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
                  <Text my='10px'>Última atualização em <strong>01/05/2025</strong></Text>
           <Table >
             <Thead>
               <Tr  bg={colors.transparenciaBlack}
                 color={useColorModeValue("white", "black")}
                 
                 p={4}
                 fontWeight="bold"
                 border={`1px solid ${colors.transparenciaBlack}`}>
                 <Th color="white">Ano</Th>
                 <Th color="white">Receita</Th>
                 <Th color="white">Vínculo</Th>
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
                 <Th color="white">Total </Th>
               </Tr>
             </Thead>
             <Tbody fontSize='12px'>
               
               {paginatedLicitacoes.map((row, index) => (
               
                 <Tr key={index}
                 bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
                     _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("white", "black") }}
                 >
                   <Td>{row.exercicio} </Td> 
                  <Td>{row.conta_contabil} {row.descricao_contabil}</Td>
                  <Td>{row.vinculo} </Td> 
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
