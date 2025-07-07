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
  Spinner,
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
import colors from "../../../../styles/colors";
import axios from "axios";

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

interface Despesa {
  id: string;
  created_at: string;
  updated_at: string;
  nr_empenho: number;
  class_funcional: string;
  descr_funcional: string;
  acao: string;
  funcao: string;
  subfuncao: string;
  programa: string;
  exercicio_empenho: string;
  data_movto: string;
  vlr_empenho: string;
  tipo_empenho: string;
  evento_custo: string;
  descr_evento_custo: string;
  cod_fornecedor: number;
  cnpj_fornecedor: string;
  descr_fornecedor: string;
  vinculo: string;
  unid_orcam: string;
  categoria: string;
  elemento: string;
  subelemento: string;
  cod_processo: string;
  licitacao_numero: string;
  licitacao_modalidade: string;
  id_empenho: string;
}


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
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2025);
  const [selectedYear2, setSelectedYear2] = useState<number | undefined>(2025);
  const accessibility = useFontSizeAccessibilityContext();
  const [despesasVinculo08, setDespesasVinculo08] = useState<Despesa[]>([]);
  const [loading2, setLoading2] = useState(false);
  const [ano, setAno] = useState(new Date().getFullYear());
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [pagina, setPagina] = useState(1);
  const [despesasFiltradas, setDespesasFiltradas] = useState<Despesa[]>([]);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const itemsPerPage = 50;
 
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

  // Removed duplicate exportToJSON function to avoid redeclaration error.

  useEffect(() => {
      setCurrentPage(1); // Reseta a página para 1 ao mudar o ano
    }, [selectedYear]);
    const years = [...new Set(gastos.map((item) => item.ano))].sort((a, b) => b - a);
    
{/* Inicio do trecho para buscar os dados de gastos de publicidade  */}
const fetchTodasDespesasAno = async () => {
  try {
    setLoading2(true);
    let allResults: Despesa[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const res = await axios.get('https://dadosadm.mogidascruzes.sp.gov.br/api/despesas', {
        params: {
          page,
          exercicio_empenho: ano,
        },
      });

      const dados = res.data.results;
      allResults = [...allResults, ...dados];
      const totalCount = res.data.count;
      hasMore = allResults.length < totalCount;
      page++;
    }

    // Filter for records where vinculo starts with '08'
    const filteredByVinculo = allResults.filter(despesa => 
      despesa.subelemento === "47 - SERVIÇOS DE COMUNICAÇÃO EM GERAL                  " ||
      despesa.subelemento === "88 - SERVIÇOS DE PUBLICIDADE E PROPAGANDA              " ||
      despesa.subelemento === "90 - SERVIÇOS DE PUBLICIDADE LEGAL                     "
    );

    const ordenado = filteredByVinculo.sort((a, b) => Number(a.id_empenho) - Number(b.id_empenho));
    setDespesasVinculo08(ordenado);
    
    // Set paginated data
    const paginatedData = ordenado.slice(0, itemsPerPage);
    setDespesas(paginatedData);
    setTotalPaginas(Math.ceil(ordenado.length / itemsPerPage));
    setLoading2(false);
  } catch (error) {
    console.error('Erro ao buscar todas as despesas do ano:', error);
    setLoading2(false);
  }
};

const handlePaginate = (page: number) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = despesasVinculo08.slice(startIndex, endIndex);
  setDespesas(paginatedData);
  setPagina(page);
};

useEffect(() => {
  fetchTodasDespesasAno();
}, [ano]);

useEffect(() => {
  const normalizar = (str: string) =>
    str?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim() || '';

  const termo = normalizar(searchTerm);

  if (termo === '') {
    setDespesasFiltradas([]);
  } else {
    const filtradas = despesasVinculo08.filter((d) => {
      const fornecedor = normalizar(d.descr_fornecedor);
      return fornecedor.includes(termo);
    });

    setDespesasFiltradas(filtradas);
  }
}, [searchTerm, despesasVinculo08]);

const handleAnoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setAno(Number(e.target.value));
  setPagina(1);
  setSearchTerm('');
};

const exportToJSON = (data: Despesa[]) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', `dados_despesas_${ano}.json`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const dadosParaExibir = searchTerm ? despesasFiltradas : despesas;

{/* Inicio trecho buscar dados de gastos com publicidade */}
const dataMaisAtual = dadosParaExibir.reduce((maisRecente, item) => {
    const dataItem = new Date(item.updated_at);
    const dataAtualMaisRecente = new Date(maisRecente.updated_at);
    return dataItem > dataAtualMaisRecente ? item : maisRecente;
  }, dadosParaExibir[0]);

  const ultimaAtualizacao = dataMaisAtual ? new Date(dataMaisAtual.updated_at).toLocaleDateString('pt-BR') : '';
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
                              <Input
                                    type="text"
                                    placeholder="Pesquisar ..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
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
                
                <Button width='180px' border='0' cursor='pointer' fontSize='20px' textColor='white' 
                    bgColor={colors.transparenciaBlack}
                    _hover={{ bgColor: colors.primaryDefault80p }}
                    height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(data)}
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                    
                    >JSON</Button>
                       </Stack>
                       <Text fontSize={accessibility?.fonts?.regular} mb="10px">
                                  Última atualização: <strong>02/07/2025</strong>
                                </Text>
                          <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
                        </ContainerSearch>
        
                        <Table >
  <Thead>
    <Tr  bg={colors.transparenciaBlack}
      color="white"
      p={4}
      fontWeight="bold"
      border={`1px solid ${colors.transparenciaBlack}`}	>
      <Th color="white">Ano</Th>
      <Th color="white">Mês</Th>
      <Th color="white">Campanha</Th>
      <Th color="white">Veiculo de divulgação</Th>
      <Th color="white">Tipo de serviço</Th>
      <Th color="white">Agência contratada</Th>
      <Th color="white">Data </Th>
    
      <Th color="white">Valor total veiculação</Th>
  
      
    </Tr>
  </Thead>
  <Tbody fontSize='12px'>
    
    {paginatedPublicidade
    .sort((a, b) => a.ano - b.ano || new Date(a.competencia).getTime() - new Date(b.competencia).getTime())
    .map((row, index) => (
    
      <Tr key={row.index}
       bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
          _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("black", "white") }}
      >
        <Td>{row.ano} </Td> 
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

      <PaginationComponent pages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />

        <Divider borderWidth="2px" mt="10" mb="10" />

        <Heading
          mb={3}
          fontSize={accessibility?.fonts?.ultraLarge}
          color="text.dark"
        >
          Outras Despesas com Publicidade
        </Heading>

        <Box
        bg={useColorModeValue('white', 'gray.800')}
        padding="15px"
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Stack
          minW={86}
          width="100%"
          flexDir="row"
          flexWrap="wrap"
          gap="10px"
          mb="10px"
        >
          <Select
            id="ano"
            value={ano}
            onChange={handleAnoChange}
            borderRadius="8px"
            height="40px"
            width="180px"
            placeholder="Selecione o ano"
          >
            {[2025, 2024, 2023, 2022, 2021].map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </Select>

          <Button
            width="180px"
            fontSize="16px"
            textColor="white"
            bgColor={colors.transparenciaBlack}
            _hover={{ bgColor: colors.primaryDefault80p }}
            height="40px"
            borderRadius="8px"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          >
            <CsvDownload
              filename={`dados_despesas_${ano}.csv`}
              data={despesasVinculo08}
              style={{
                width: '100%',
                height: '100%',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              CSV
            </CsvDownload>
          </Button>

          <Button
            width="180px"
            fontSize="16px"
            textColor="white"
            bgColor={colors.transparenciaBlack}
            _hover={{ bgColor: colors.primaryDefault80p }}
            height="40px"
            borderRadius="8px"
            onClick={() => exportToJSON(despesasVinculo08)}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          >
            JSON
          </Button>
        </Stack>
        <Text fontSize={accessibility?.fonts?.regular} mb="10px">
                Última atualização: <strong>{ultimaAtualizacao}</strong>
              </Text>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="200px">
          <Spinner size="xl" />
        </Box>
      ) : (
        <ul>
          {dadosParaExibir.map((item) => (
            <Box
              key={item.id}
              border="2px solid transparent"
              p="12px"
              borderRadius="16px"
              mb="12px"
              bg={useColorModeValue('white', 'black')}
              boxShadow="lg"
              cursor="pointer"
              transition="0.3s"
              _hover={{
                boxShadow: 'xl',
                transform: 'scale(1.01)',
                border: `2px solid ${colors.transparenciaBlack}`,
              }}
              onClick={() => {
                    sessionStorage.setItem('selectedDespesa', JSON.stringify(item));
                    window.open(`detalhes?Exercicio_Empenho=${item.id_empenho.split('/')[1]}&nr_empenho=${item.id_empenho.split('/')[0]}`, '_blank');
                  }}
            >
              <Text fontWeight="bold" fontSize="lg" color={colors.transparenciaBlack} borderBottom={`2px solid ${colors.transparenciaBlack}`} pb="5px" mb="8px">
                Empenho: {item.nr_empenho} / {item.exercicio_empenho}
              </Text>
              <Text><strong>Fornecedor:</strong> {item.descr_fornecedor}</Text>
              <Text><strong>Descrição:</strong> {item.descr_funcional}</Text>
              <Text><strong>Valor empenho:</strong> {item.vlr_empenho}</Text>
              <Text><strong>Unidade Orçamentária:</strong> {item.unid_orcam}</Text>
              <Text><strong>Vínculo:</strong> {item.vinculo}</Text>
            </Box>
          ))}
        </ul>
      )}

      {!searchTerm && despesasVinculo08.length > 0 && (
        <Box display="flex" justifyContent="space-around" alignItems="center" paddingBottom="10px" width="80%" mt="20px">
          <Button
           border={`1px solid ${colors.transparenciaBlack}`}
            width="150px"
            onClick={() => handlePaginate(Math.max(pagina - 1, 1))}
            disabled={pagina === 1}
          >
            Anterior
          </Button>
          <span>Página {pagina} de {totalPaginas}</span>
          <Button
            border={`1px solid ${colors.transparenciaBlack}`}
            width="150px"
            onClick={() => handlePaginate(Math.min(pagina + 1, totalPaginas))}
            disabled={pagina === totalPaginas}
          >
            Próxima
          </Button>
        </Box>
      )}
           
    
        
        
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
