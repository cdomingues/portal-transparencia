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

export const contentAdvertisements = {
  titlePage: "Dívida Ativa",
  description: "A divulgação da lista da dívida ativa realizada pela Prefeitura de Mogi das Cruzes é uma medida fundamental cujo propósito é reforçar a transparência das finanças municipais e promover a responsabilidade fiscal.",
}

function Screen({
  handler: {
    columns,
    data,
    loading,
    
  },
}: PropsInput) {
  const title = contentAdvertisements?.titlePage;
  const description = contentAdvertisements?.description;
  const accessibility = useFontSizeAccessibilityContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");


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
      <Text
                align={isMobile ? "justify" : "left"}
                
                fontSize={accessibility?.fonts?.regular}
                mt="20px"
              >
              <Text mb={4}>
        A Lista de Devedores está regulamentada pela <Link fontWeight='bold' href="http://normas.receita.fazenda.gov.br/sijut2consulta/link.action?visao=anotado&idAto=120969" color="red" isExternal>
        Portaria PGFN n. 636, de 9 de janeiro de 2020
        </Link>, e alterações posteriores.
      </Text>
      <Text mb={4}>
        A PGFN é responsável pelas informações sobre as naturezas das dívidas de FGTS, Tributário - Previdenciário, Tributário - Demais débitos, Não Tributário - Multa Trabalhista, Não Tributário - Multa Eleitoral, Não Tributário - Multa Criminal e Não Tributários - Demais débitos. Para exclusão do nome ou correção de quaisquer destes dados, o devedor deverá apresentar o requerimento próprio no portal{' '}
        <Link fontWeight='bold' href="https://www.regularize.pgfn.gov.br/" color="red" isExternal>
          REGULARIZE
        </Link>
        . As informações sobre os serviços da PGFN estão disponíveis no  <Link  fontWeight='bold'href="https://www.gov.br/pgfn" color="red" isExternal>
        site da PGFN
        </Link>, em "Serviços e Orientações", na opção  <Link fontWeight='bold' href="https://www.gov.br/pgfn/pt-br/servicos/orientacoes-contribuintes" color="red" isExternal>
        "Orientações de Serviços aos Contribuintes"
        </Link>.
      </Text>
      <Text mb={4}>
        Para as informações sobre as naturezas das dívidas de Autarquias/Fundações Federais, Estados/Distrito Federal e Municípios, são os respectivos entes os responsáveis pelas informações. Para exclusão do nome ou correção de quaisquer destes dados, o devedor deverá entrar em contato com o ente responsável pela informação.
      </Text>
      <Text mb={4}>
        A exclusão automática do nome do devedor em decorrência de pagamento ou garantia integral da dívida ou de suspensão da exigibilidade do crédito pode demorar até 7 dias, no caso de débito com a PGFN, com Autarquias ou Fundações Públicas, Estados, Distrito Federal e/ou Município, ou 75 dias, em se tratando de débito junto ao FGTS. Esse é o tempo necessário para que a informação seja processada pelos sistemas da PGFN.
      </Text>
      <Text mb={4}>
        As informações divulgadas nesta lista não substituem e nem prejudicam os efeitos das informações constantes nas certidões de regularidade fiscal emitidas pela PGFN, pelos Estados, Distrito Federal e/ou Municípios.
      </Text>
      <Text mb={4}>
        Para uma pesquisa completa com as informações de todos devedores da PGFN e a respectiva situação dos débitos, indicamos a utilização dos{' '}
        <Link fontWeight='bold' href="https://www.pgfn.gov.br/portal/dadosabertos" color="red" isExternal>
          Dados Abertos da PGFN
        </Link>
        . Já para consultar quais devedores estão cumprindo com o compromisso de pagar as prestações das negociações formalizadas perante a PGFN, você pode recorrer ao{' '}
        <Link fontWeight='bold' href="https://www.pgfn.gov.br/portal/painelnegociacoes" color="red" isExternal>
          Painel das Negociações
        </Link>.
      </Text>
      <Text mb={4}>
        Se você identificou alguma fraude fiscal cometida por devedores da PGFN, denuncie no{' '}
        <Link fontWeight='bold' href="https://www.pgfn.gov.br/portal/canaldenuncia" color="red" isExternal>
          Canal de Denúncias Patrimoniais
        </Link>
        . A denúncia pode ser feita anonimamente ou de maneira identificada.
      </Text>
      Fonte das informações  <Link fontWeight='bold' href="https://www.listadevedores.pgfn.gov.br/" color="red" isExternal>Lista de Devedores da PGFN</Link>
                
              </Text>
       
              <ContainerSearch  mt='20px'>
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
                  bgColor={colors.primaryDefault40p}
                  _hover={{ bgColor: colors.primaryDefault80p }}
                  height="40px"
                  borderRadius="8px"
                  mr="15px"
                  transition="background-color 0.3s ease"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  
                >
                  <CsvDownload
                    filename={"dados_devedores.csv"}
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
                      bgColor: colors.primaryDefault80p  // Cor de fundo ao passar o mouse
                    }}
                    height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(data)}
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                    
                    >JSON</Button>
                       </Stack>
                          <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
                          <Input
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
                        </ContainerSearch>
                         <Table >
                         <Thead>
  <Tr bg={colors.primaryDefault40p}color="white">
    <Th color="white" onClick={() => handleSort("cpf_cnpj")} cursor="pointer">
      CPF / CNPJ {sortColumn === "cpf_cnpj" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
    </Th>
    <Th color="white" onClick={() => handleSort("nome")} cursor="pointer">
      Nome {sortColumn === "nome" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
    </Th>
    <Th color="white" onClick={() => handleSort("nome_fantasia")} cursor="pointer">
      Nome Fantasia {sortColumn === "nome_fantasia" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
    </Th>
    <Th color="white" onClick={() => handleSort("valor_total")} cursor="pointer">
      Valor {sortColumn === "valor_total" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
    </Th>
  </Tr>
</Thead>
                          <Tbody fontSize='12px'>
                         
                            
                          {sortedDevedores.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((row, index) => (
  <Tr key={index}
  bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
      _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("white", "black") }}
  >
    <Td>{row.cpf_cnpj}</Td>
    <Td>{row.nome}</Td>
    <Td>{row.nome_fantasia}</Td>
    <Td>{row.valor_total}</Td>
  </Tr>
))}
                          </Tbody>
                        </Table>
                        
                              <PaginationComponent pages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
