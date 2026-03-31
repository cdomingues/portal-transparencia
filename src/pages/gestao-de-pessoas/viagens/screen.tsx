import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Select,
  useColorModeValue,
  Text,
  Stack,
  Input,
  Spinner,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import ContainerBasic from '../../../components/Container/Basic';
import colors from '../../../styles/colors';
import CsvDownload from 'react-json-to-csv';
import moneyFormatter from '../../../utils/moneyFormatter';
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import usePagina from '../../../hooks/usePagina';

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
  item_empenho: string;
}

const Despesas = () => {
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [despesasFiltradas, setDespesasFiltradas] = useState<Despesa[]>([]);
  const [todasDespesasAno, setTodasDespesasAno] = useState<Despesa[]>([]);
  const [ano, setAno] = useState(2026);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [registro, setRegistro] = useState<Despesa | null>(null);
  const accessibility = useFontSizeAccessibilityContext();
  const { paginaData, loadings, error } = usePagina("3");

  const fetchTodasDespesasAno = async () => {
    try {
      setLoading(true);
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

      const ordenado = allResults.sort((a, b) => Number(a.id_empenho) - Number(b.id_empenho));
      setTodasDespesasAno(ordenado);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar todas as despesas do ano:', error);
      setLoading(false);
    }
  };

  const fetchDespesasPaginadas = async () => {
    try {
      const response = await axios.get('https://dadosadm.mogidascruzes.sp.gov.br/api/despesas', {
        params: {
          page: pagina,
          exercicio_empenho: ano,
        },
      });

      const ordenadas = response.data.results.sort((a: Despesa, b: Despesa) => {
        return Number(a.nr_empenho) - Number(b.nr_empenho);
      });

      setDespesas(ordenadas);
      setTotalPaginas(Math.ceil(response.data.count / 50));
    } catch (error) {
      console.error('Erro ao buscar despesas paginadas:', error);
    }
  };

  useEffect(() => {
    fetchDespesasPaginadas();
    fetchTodasDespesasAno();
  }, [pagina, ano]);

  useEffect(() => {
    const normalizar = (str: string) =>
      str?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim() || '';

    const termo = normalizar(searchTerm);

    if (termo === '') {
      setDespesasFiltradas([]);
    } else {
      const resultados = todasDespesasAno.filter((d) => {
        return (
          normalizar(d.descr_fornecedor).includes(termo) ||
          normalizar(d.id_empenho).includes(termo) ||
          normalizar(d.vlr_empenho).includes(termo) ||
          normalizar(d.cnpj_fornecedor).includes(termo) ||
          normalizar(d.unid_orcam).includes(termo) ||
          normalizar(d.class_funcional).includes(termo) ||
          normalizar(d.descr_funcional).includes(termo) ||
          normalizar(d.subelemento).includes(termo) ||
          normalizar(d.item_empenho).includes(termo)
        );
      });

      setDespesasFiltradas(resultados);
    }
  }, [searchTerm, todasDespesasAno]);

  const handleAnoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAno(Number(e.target.value));
    setPagina(1);
    setSearchTerm('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
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

  const dataMaisAtual = dadosParaExibir.reduce((maisRecente, item) => {
    const dataItem = new Date(item.updated_at);
    const dataAtualMaisRecente = new Date(maisRecente.updated_at);
    return dataItem > dataAtualMaisRecente ? item : maisRecente;
  }, dadosParaExibir[0]);

  const ultimaAtualizacao = dataMaisAtual ? new Date(dataMaisAtual.updated_at).toLocaleDateString('pt-BR') : '';

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
      <Box my='25px' border='1px solid lightgrey' p='5' borderRadius='15px' boxShadow='2xl' width='95vw'>
             {conteudo && (
                     <Box
                       dangerouslySetInnerHTML={{ __html: conteudo }}
                       sx={{
                         p: { mb: 2, textAlign: "justify" },
                         a: {
                           color: "blue.600",
                           fontWeight: "bold",
                           textDecoration: "underline",
                         },
                       }}
                     />
                   )}
            </Box>
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
            {[2026, 2025, 2024, 2023, 2022, 2021].map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </Select>

          <InputGroup width="300px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Buscar empenho..."
              value={searchTerm}
              onChange={handleSearchChange}
              borderRadius="8px"
              height="40px"
            />
          </InputGroup>

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
              data={todasDespesasAno}
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
            onClick={() => exportToJSON(todasDespesasAno)}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          >
            JSON
          </Button>
        </Stack>
      </Box>

      <Text fontSize={accessibility?.fonts?.regular} mb="10px">
        Última atualização: <strong>{ultimaAtualizacao}</strong>
      </Text>

 
       
        {dadosParaExibir.length === 0 ? (
  <Box
    width="100%"
    textAlign="center"
    padding="40px"
    bg={useColorModeValue("gray.50", "gray.700")}
    borderRadius="12px"
    border="1px solid"
    borderColor="gray.300"
  >
    <Text fontSize="lg" fontWeight="bold">
      Dados não encontrados para o período selecionado
    </Text>
  </Box>
) : (
  <>
    <Table fontSize={accessibility?.fonts?.regular}>
      <Thead>
        <Tr
          bg={colors.transparenciaBlack}
          color="white"
          fontWeight="bold"
        >
          <Th color="white">Empenho</Th>
          <Th color="white">Item Empenho</Th>
          <Th color="white">Valor empenho</Th>
          <Th color="white">Fornecedor</Th>
          <Th color="white">CNPJ fornecedor</Th>
          <Th color="white">Unidade Orçamentária</Th>
          <Th color="white">Classificação funcional</Th>
          <Th color="white">Descrição funcional</Th>
          <Th color="white">Subelemento</Th>
        </Tr>
      </Thead>

      <Tbody fontSize="12px">
        {dadosParaExibir.map((row, index) => (
          <Tr
            key={index}
            bg={
              index % 2 === 0
                ? useColorModeValue("white", "black")
                : useColorModeValue("#f7f7f7", "gray.100")
            }
            _hover={{
              bg: "#d1d1d1",
              cursor: "pointer",
              color: useColorModeValue("black", "white"),
            }}
            onClick={() => {
              sessionStorage.setItem("selectedDespesa", JSON.stringify(row));
              window.open(
                `detalhes?Exercicio_Empenho=${row.id_empenho.split("/")[1]}&nr_empenho=${row.id_empenho.split("/")[0]}`,
                "_blank"
              );
            }}
          >
            <Td>{row.id_empenho}</Td>
            <Td>{row.item_empenho}</Td>
            <Td>{moneyFormatter(Number(row.vlr_empenho))}</Td>
            <Td>{row.descr_fornecedor}</Td>
            <Td>{row.cnpj_fornecedor}</Td>
            <Td>{row.unid_orcam}</Td>
            <Td>{row.class_funcional}</Td>
            <Td>{row.descr_funcional}</Td>
            <Td>{row.subelemento}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>

    {!searchTerm && (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingBottom="10px"
        width="80%"
        mt="20px"
      >
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          width="100%"
          mb="10px"
        >
          <Button
            onClick={() => setPagina((p) => Math.max(p - 1, 1))}
            disabled={pagina === 1}
          >
            Anterior
          </Button>

          <span>
            Página {pagina} de {totalPaginas}
          </span>

          <Button
            onClick={() => setPagina((p) => Math.min(p + 1, totalPaginas))}
            disabled={pagina === totalPaginas}
          >
            Próxima
          </Button>
        </Box>

        <Box display="flex" alignItems="center" gap="10px">
          <Text>Ir para a página:</Text>
          <Input
            type="number"
            width="100px"
            size="sm"
            min={1}
            max={totalPaginas}
            value={pagina}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!isNaN(val) && val >= 1 && val <= totalPaginas) {
                setPagina(val);
              }
            }}
          />
        </Box>
      </Box>
    )}
  </>
)}

     
    </ContainerBasic>
  );
};

export default Despesas;