import {
  Button,
  Divider,
  Select,
  Stack,
  Text,
  useDisclosure,
  Box,
  useColorModeValue,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../../components/Table";

import { ContainerSearch } from "../../../../styles/components/contratos-atas/styles";
import CsvDownload from "react-json-to-csv";
import PaginationComponent from "../../../../components/PaginationComponent";
import colors from "../../../../styles/colors";
import moment from "moment";

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
  titlePage: "Gastos com publicidade",
  description:
    "A publicidade legal e institucional realizada pelo Poder Público é um importante serviço cujo objetivo final é favorecer o acesso da população a todos os outros serviços públicos, além de contribuir com a transparência dos atos administrativos. Confira as despesas com publicidade da Prefeitura de Mogi das Cruzes",
};

type PublicidadeItem = {
  ano: number;
  competencia: string;
  campanha: string;
  veiculo_divulgacao: string;
  tipo_servico: string;
  agencia_contratada: string;
  valor_total_veiculacao: number;
};

function Screen({
  handler: { columns, data, loading, handleByYear, setYear, year, data2, setData2, arquivosColumns },
}: PropsInput) {
  const [contract, setContract] = useState<any>(null);
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  
  // Estados para a primeira tabela (despesas)
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2025);
  
  // Estados para a segunda tabela (gastos com publicidade)
  const [gastos, setGastos] = useState<PublicidadeItem[]>([]);
  const [currentPagePublicidade, setCurrentPagePublicidade] = useState(1);
  const [searchTermPublicidade, setSearchTermPublicidade] = useState("");
  const [selectedYearPublicidade, setSelectedYearPublicidade] = useState<number | undefined>();
  const [veiculosPorEmpenho, setVeiculosPorEmpenho] = useState<{ [key: string]: any }>({});
  
  const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/gastos_publicidade";
  const ITEMS_PER_PAGE = 50;

  // Formatação monetária
  const moneyFormatter = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  // Buscar dados da API de gastos com publicidade
  useEffect(() => {
    const fetchGastosPublicidade = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setGastos(data);
      } catch (error) {
        console.error("Erro ao buscar dados de gastos com publicidade:", error);
      }
    };

    fetchGastosPublicidade();
  }, []);

  const fetchArquivoPublicidade = async (nr_empenho: string, exercicio_empenho: number) => {
    try {
      const response = await fetch(
        `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivo_publicidade?nr_empenho=${nr_empenho}&exercicio_empenho=${exercicio_empenho}`
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar arquivo_publicidade");
      }

      const jsonData = await response.json();

      // 🚀 salva a resposta completa da API no estado
      setVeiculosPorEmpenho((prev) => ({
        ...prev,
        [`${nr_empenho}/${exercicio_empenho}`]: jsonData,
      }));
    } catch (error) {
      console.error("Erro ao buscar arquivo_publicidade:", error);
      // Em caso de erro, armazena uma mensagem de erro
      setVeiculosPorEmpenho((prev) => ({
        ...prev,
        [`${nr_empenho}/${exercicio_empenho}`]: "Erro ao carregar",
      }));
    }
  };

  // Filtros para a primeira tabela (despesas)
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
      (item.vinculo?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );
  
  const paginatedContratos = despesaFiltradas.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(despesaFiltradas.length / ITEMS_PER_PAGE);

  // Filtros para a segunda tabela (gastos com publicidade)
  const publicidadeFiltrada = gastos
    .filter((item) => {
      if (selectedYearPublicidade) {
        return Number(item.ano) === selectedYearPublicidade; 
      }
      return true; 
    })
    .filter((item) =>
      item.campanha?.toLowerCase().includes(searchTermPublicidade.toLowerCase()) ||
      item.veiculo_divulgacao?.toLowerCase().includes(searchTermPublicidade.toLowerCase()) ||
      item.tipo_servico?.toLowerCase().includes(searchTermPublicidade.toLowerCase()) ||
      item.agencia_contratada?.toLowerCase().includes(searchTermPublicidade.toLowerCase())
    );
  
  const paginatedPublicidade = publicidadeFiltrada.slice(
    (currentPagePublicidade - 1) * ITEMS_PER_PAGE,
    currentPagePublicidade * ITEMS_PER_PAGE
  );
  const totalPagesPublicidade = Math.ceil(publicidadeFiltrada.length / ITEMS_PER_PAGE);

  const handlePageClick = (data: { selected: number }) => {
    const newPage = Math.max(1, Math.min(data.selected + 1, totalPages));
    setCurrentPage(newPage);
  };

  const handlePageClickPublicidade = (data: { selected: number }) => {
    const newPage = Math.max(1, Math.min(data.selected + 1, totalPagesPublicidade));
    setCurrentPagePublicidade(newPage);
  };

  const exportToJSON = (data: any, filename: string) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
  
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear]);

  useEffect(() => {
    setCurrentPagePublicidade(1);
  }, [selectedYearPublicidade]);

  const years = [...new Set(data.map((item) => item.exercicio_empenho))].sort((a, b) => b - a);
  const yearsPublicidade = [...new Set(gastos.map((item) => item.ano))].sort((a, b) => b - a);

  // Ordena os contratos de forma decrescente pelo ano extraído de "numero"
  const sortedPaginatedContratos = [...paginatedContratos].sort((a, b) => {
    return a.nr_empenho - b.nr_empenho;
  });

  const dataMaisAtual = data.reduce((maisRecente, item) => {
    const dataItem = new Date(item.updated_at);
    const dataAtualMaisRecente = new Date(maisRecente.updated_at);
    return dataItem > dataAtualMaisRecente ? item : maisRecente;
  }, data[0]);

  const ultimaAtualizacao = dataMaisAtual ? new Date(dataMaisAtual.updated_at).toLocaleDateString('pt-BR') : '';

  // Função para extrair todos os veículos únicos da resposta da API
  const extractUniqueVehicles = (data: any) => {
    if (!data || !data.results || !Array.isArray(data.results)) return [];
    
    // Extrair todos os veículos e remover duplicatas
    const allVehicles = data.results
      .map((item: any) => item.veiculo)
      .filter((vehicle: string) => vehicle && vehicle.trim() !== "");
    
    return [...new Set(allVehicles)]; // Retorna array com valores únicos
  };

  return (
    <ContainerBasic title={title} description={description}>
      {/* Primeira seção: Despesas */}
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
        <Text fontSize="xl" fontWeight="bold" mb="15px" color={colors.transparenciaBlack}>
          Despesas com Publicidade
        </Text>
        
        <ContainerSearch>
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
              bgColor={colors.transparenciaBlack}
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
            
            <Button 
              width='180px' 
              border='0' 
              cursor='pointer' 
              fontSize='20px' 
              textColor='white' 
              bgColor={colors.transparenciaBlack}
              _hover={{ bgColor: colors.primaryDefault80p }}
              height='40px' 
              borderRadius='8px' 
              mr='15px'
              onClick={() => exportToJSON(data, "dados_despesas.json")}
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
            >
              JSON
            </Button>
          </Stack>
          
          <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
        </ContainerSearch>

        <Input
          type="text"
          placeholder="Pesquisar ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          borderRadius="8px"
          height="40px"
          pr="40px"
          width="40%"
          mb="10px"
        />
        
        <br/>
        
        <Text fontSize="md" mb="10px">
          Última atualização: <strong>{ultimaAtualizacao}</strong>
        </Text>

        {sortedPaginatedContratos
          .sort((a, b) => Number(a.nr_empenho) - Number(b.nr_empenho))
          .map((row) => {
            const chave = `${row.nr_empenho}/${row.exercicio_empenho}`;

            // 🔄 dispara a busca se ainda não tiver no estado
            useEffect(() => {
              if (!veiculosPorEmpenho[chave]) {
                fetchArquivoPublicidade(row.nr_empenho, row.exercicio_empenho);
              }
            }, [row.nr_empenho, row.exercicio_empenho]);

            // Obter veículos para este empenho
            const veiculosData = veiculosPorEmpenho[chave];
            let veiculosDisplay = "Carregando...";
            
            if (veiculosData && typeof veiculosData === 'object') {
              // Se for um objeto (resposta completa da API), extrair veículos únicos
              const veiculosUnicos = extractUniqueVehicles(veiculosData);
              veiculosDisplay = veiculosUnicos.length > 0 
                ? veiculosUnicos.join(", ") 
                : "Não informado";
            } else if (typeof veiculosData === 'string') {
              // Se já for uma string (formato antigo), usar diretamente
              veiculosDisplay = veiculosData;
            }

            return (
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
                  sessionStorage.setItem('selectedDespesa', JSON.stringify(row));
                  window.open(
                    `detalhes2?Exercicio_Empenho=${row.id_empenho.split('/')[1]}&nr_empenho=${row.id_empenho.split('/')[0]}`,
                    '_blank'
                  );
                }}
              >
                <Text 
                  fontWeight="bold" 
                  fontSize="lg"
                  color={colors.transparenciaBlack}
                  borderBottom={`2px solid ${colors.transparenciaBlack}`}
                  pb="5px" 
                  mb="8px"
                >
                  Empenho: {row.nr_empenho} / {row.exercicio_empenho}
                </Text>
                <Text><strong>Fornecedor: </strong>{row.descr_fornecedor}</Text>
                <Text><strong>Descrição:</strong> {row.descr_funcional}</Text>
                <Text><strong>Valor empenho:</strong> {row.vlr_empenho}</Text>
                <Text><strong>Unidade Orçamentária:</strong> {row.unid_orcam}</Text>
                <Text><strong>Vínculo: </strong>{row.vinculo}</Text>
                <Text><strong>Veículo(s): </strong>{veiculosDisplay}</Text>
              </Box>
            );
          })}

        <PaginationComponent 
          pages={totalPages} 
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage} 
        />
      </Box>

      {/* Segunda seção: Gastos com Publicidade */}
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
        <Text fontSize="xl" fontWeight="bold" mb="15px" color={colors.transparenciaBlack}>
          Gastos com Publicidade
        </Text>
        
        <ContainerSearch>
          <Stack minW={86} width="50%" flexDir='row'
            sx={{
              "@media (max-width: 900px)": {
                flexDir:'column'
              },
            }}
          >
            {/* Select para Filtrar por Ano */}
            <Select
              value={selectedYearPublicidade}
              onChange={(e) => setSelectedYearPublicidade(Number(e.target.value))}
              placeholder="Todos os anos"
              borderRadius="8px"
              height="40px"
              mb="10px"
              width='180px'
            >
              {[2022, 2023, 2024].map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ))}
            </Select>
            
            <Input
              type="text"
              placeholder="Pesquisar ..."
              value={searchTermPublicidade}
              onChange={(e) => setSearchTermPublicidade(e.target.value)}
              borderRadius="8px"
              height="40px"
              width="250px"
              my="0px"
            />
            
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
            
            <Button 
              width='180px' 
              border='0' 
              cursor='pointer' 
              fontSize='20px' 
              textColor='white' 
              bgColor={colors.transparenciaBlack}
              _hover={{ bgColor: colors.primaryDefault80p }}
              height='40px' 
              borderRadius='8px' 
              mr='15px'
              onClick={() => exportToJSON(gastos, "dados_gastos_publicidade.json")}
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
            >
              JSON
            </Button>
          </Stack>
          
          <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
        </ContainerSearch>
        
        <Text fontSize="md" mb="10px">
          Última atualização: <strong>02/07/2025</strong>
        </Text>

        <Table>
          <Thead>
            <Tr bg={colors.transparenciaBlack} color="white" p={4} fontWeight="bold" border={`1px solid ${colors.transparenciaBlack}`}>
              <Th color="white">Ano</Th>
              <Th color="white">Mês</Th>
              <Th color="white">Campanha</Th>
              <Th color="white">Veiculo de divulgação</Th>
              <Th color="white">Tipo de serviço</Th>
              <Th color="white">Agência contratada</Th>
              <Th color="white">Data</Th>
              <Th color="white">Valor total veiculação</Th>
            </Tr>
          </Thead>
          <Tbody fontSize='12px'>
            {paginatedPublicidade
            .filter((item) => item.ano < 2025)
              .sort((a, b) => a.ano - b.ano || new Date(a.competencia).getTime() - new Date(b.competencia).getTime())
               .map((row, index) => (
                <Tr 
                  key={index}
                  bg={index % 2 === 0 ? useColorModeValue("white", "black") : useColorModeValue("#f7f7f7", "grey.100")} 
                  _hover={{ bg: "#d1d1d1", cursor: "pointer", color: useColorModeValue("black", "white") }}
                >
                  <Td>{row.ano}</Td>
                  <Td>{new Date(row.competencia).getMonth() + 1}</Td>
                  <Td>{row.campanha}</Td>
                  <Td>{row.veiculo_divulgacao}</Td>
                  <Td>{row.tipo_servico}</Td>
                  <Td>{row.agencia_contratada}</Td>
                  <Td>{moment(row.competencia).format("DD/MM/YYYY")}</Td>
                  <Td>{moneyFormatter(Number(row.valor_total_veiculacao))}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>

        <PaginationComponent 
          pages={totalPagesPublicidade} 
          setCurrentPage={setCurrentPagePublicidade} 
          currentPage={currentPagePublicidade} 
        />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;