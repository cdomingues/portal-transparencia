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
} from '@chakra-ui/react';
import ContainerBasic from '../../../../components/Container/Basic';
import colors from '../../../../styles/colors';
import CsvDownload from 'react-json-to-csv';

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

export const contentContractsAndAtas = {
  titlePage: "Despesas - Emendas Parlamentares",
  description:
    "Confira nesta página as despesas empenhadas, liquidadas e pagas a partir dos recursos obtidos por meio de emendas parlamentares. ",
};

const Despesas = () => {
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [despesasFiltradas, setDespesasFiltradas] = useState<Despesa[]>([]);
  const [despesasVinculo08, setDespesasVinculo08] = useState<Despesa[]>([]);
  const [ano, setAno] = useState(new Date().getFullYear());
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 50;

  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;

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

      // Filter for records where vinculo starts with '08'
      const filteredByVinculo = allResults.filter(despesa => 
        despesa.vinculo && despesa.vinculo.startsWith('08')
      );

      const ordenado = filteredByVinculo.sort((a, b) => Number(a.id_empenho) - Number(b.id_empenho));
      setDespesasVinculo08(ordenado);
      
      // Set paginated data
      const paginatedData = ordenado.slice(0, itemsPerPage);
      setDespesas(paginatedData);
      setTotalPaginas(Math.ceil(ordenado.length / itemsPerPage));
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar todas as despesas do ano:', error);
      setLoading(false);
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

  const dataMaisAtual = dadosParaExibir.reduce((maisRecente, item) => {
    const dataItem = new Date(item.updated_at);
    const dataAtualMaisRecente = new Date(maisRecente.updated_at);
    return dataItem > dataAtualMaisRecente ? item : maisRecente;
  }, dadosParaExibir[0]);

  const ultimaAtualizacao = dataMaisAtual ? new Date(dataMaisAtual.updated_at).toLocaleDateString('pt-BR') : '';

  return (
    <ContainerBasic title={title} description={description}>
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
      </Box>
       <Text fontSize="md" mb="10px">
              Última atualização: <strong>{ultimaAtualizacao}</strong>
            </Text>
      

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
                window.open(`detalhes?${item.id_empenho} - ${item.exercicio_empenho}`, '_blank');
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
    </ContainerBasic>
  );
};

export default Despesas;