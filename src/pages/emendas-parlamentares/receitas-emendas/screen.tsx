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
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
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
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";
import colors from "../../../styles/colors";
import CsvDownload from "react-json-to-csv";
import moment from "moment";
import moneyFormatter from "../../../utils/moneyFormatter";

type PropsInput = {
  handler: {
    columns: TableColumns;
    
    loading: boolean;
    
    receitas: Array<any>;
  };
};
export const contentRevenue = {
  titlePage: "Receitas - Emendas Parlamentares",
  description:
    <>
    A arrecadação de receitas para o município pode vir de diferentes fontes. As emendas parlamentares, indicadas por Deputados Federais e Estaduais, são uma forma da cidade ter acesso a recursos. Acompanhe nesta página o descritivo das emendas parlamentares recebidas pela Prefeitura de Mogi das Cruzes. <br/><strong>Para pesquisar emendas pix, escreva no campo de busca "transferência especial"</strong>.</>,
};
function RevenueScreen({
  handler: {
    columns,
    
    loading,
   
    receitas
  },
}: PropsInput) {
  const title = contentRevenue?.titlePage;
  const description = contentRevenue?.description;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2025);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const ITEMS_PER_PAGE = 50;

  const filteredEmendas = receitas
  .filter((item) => {
    if (selectedYear) {
      return Number(item.ano) === selectedYear; // Filtra pelo campo "ano"
    }
    return true;
  })
  .filter((item) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      (item.politico?.toLowerCase()?.includes(lowerSearch)) ||
      (item.modalidade?.toLowerCase()?.includes(lowerSearch)) ||
      (item.orgao?.toLowerCase()?.includes(lowerSearch)) ||
      (item.secretaria?.toLowerCase()?.includes(lowerSearch)) ||
      (item.objeto?.toLowerCase()?.includes(lowerSearch))
    );
  });

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedDevedores = [...filteredEmendas].sort((a, b) => {
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

  const paginatedEmendas = filteredEmendas.slice(
    ( currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );

  const totalPages = Math.ceil(filteredEmendas.length / ITEMS_PER_PAGE);

const exportToJSON = (data: any) => {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
    
      link.setAttribute("href", url);
      link.setAttribute("download", "dados_receitas_emendas.json");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
useEffect(() => {
      setCurrentPage(1); // Reseta a página para 1 ao mudar o ano
    }, [selectedYear]);
  
    const years = [...new Set(receitas.map((item) => (item.ano)))].sort((a, b) => b - a);
  console.log(years)
  

  return (
    <ContainerBasic title={title} description={description}>
      
        <Box
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          
          padding={"15px"}
          rounded="md"
          overflow="hidden"
          maxWidth="100%"
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
          maxWidth="100%"
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
              data={receitas}
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
              height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(receitas)}
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
                       width="40%"
                       mb="10px"
                       
                     />
                    <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
                  </ContainerSearch>
         <Table >
           <Thead>
             <Tr  bg={colors.transparenciaBlack}
               color="white"
               p={4}
               fontWeight="bold"
               border={`1px solid ${colors.grayLighter}`}
              
             >
               <Th color="white" onClick={() => handleSort("ano")} cursor="pointer">
        Ano {sortColumn === "ano" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
      </Th>
      <Th color="white" onClick={() => handleSort("tipo_recurso")} cursor="pointer">
        Tipo Recurso {sortColumn === "tipo_recurso" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
      </Th>
      <Th color="white" onClick={() => handleSort("aplicacao")} cursor="pointer">
        Aplicação {sortColumn === "aplicacao" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
      </Th>
      <Th color="white" onClick={() => handleSort("modalidade")} cursor="pointer">
        Modalidade {sortColumn === "modalidade" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
      </Th>
      <Th color="white" onClick={() => handleSort("orgao")} cursor="pointer">
        Órgão {sortColumn === "orgao" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
      </Th>
      <Th color="white" onClick={() => handleSort("secretaria")} cursor="pointer">
        Secretaria {sortColumn === "secretaria" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
      </Th>
      <Th color="white" onClick={() => handleSort("politico")} cursor="pointer">
        Autor {sortColumn === "politico" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
      </Th>
      <Th color="white" onClick={() => handleSort("objeto")} cursor="pointer">
        Objeto {sortColumn === "objeto" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
      </Th>
      <Th color="white" onClick={() => handleSort("valor_repasse")} cursor="pointer">
        Valor repasse {sortColumn === "valor_repasse" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
      </Th>
      <Th color="white" onClick={() => handleSort("data_inicio")} cursor="pointer">
        Data início {sortColumn === "data_inicio" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
      </Th>
      <Th color="white" onClick={() => handleSort("data_fim")} cursor="pointer">
        Data fim {sortColumn === "data_fim" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
      </Th>
             
             </Tr>
           </Thead>
           <Tbody fontSize='12px'>
             
             {sortedDevedores.map((row, index) => (
             
             <Tr 
             key={index} 
             bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
             _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("black", "white") }}
             color={useColorModeValue("black", "white")}
              onClick={() => {
            sessionStorage.setItem('selectedConvenio', JSON.stringify(row));
            window.open( `receitas-emendas-detalhes?id_convenio=${row.id_convenio}`, '_blank')}}
           >
                 <Td>{row.ano} </Td> 
                <Td>{row.tipo_recurso}</Td>
                <Td>{row.aplicacao}</Td>
                  <Td>{row.modalidade}</Td>
                   <Td>{row.orgao}</Td>
                    <Td>{row.secretaria}</Td>
                     <Td>{row.politico}</Td>
                      <Td>{row.objeto}</Td>
                      <Td>{moneyFormatter(Number(row.valor_repasse))}</Td>
                      <Td>{moment(row.data_inicio).format('DD/MM/YYY')}</Td>
                      <Td>{moment(row.data_fim).format('DD/MM/YYY')}</Td>
               </Tr>
             ))}
           </Tbody>
         </Table>
         
        </Box>

        <Box
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          
          padding={"15px"}
          rounded="md"
          overflow="hidden"
          maxWidth="100%"
          borderRadius="18px"
          marginBottom="15px"
        >
          
      
        </Box>
     
    </ContainerBasic>
  );
}

export default RevenueScreen;
