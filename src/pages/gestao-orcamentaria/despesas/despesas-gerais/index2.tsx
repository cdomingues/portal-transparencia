import React, { useState } from 'react';
import axios from 'axios';
import { Box, useColorModeValue , Text, Button, Select, Input, Stack} from '@chakra-ui/react';
import colors from '../../../../styles/colors';
import ContainerBasic from '../../../../components/Container/Basic';

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
  titlePage: 'Despesas',
  description: (
    <>
      As fases da despesa pública são regulamentadas pela Lei Federal nº 4.320/64. São elas:
      <br />
      <strong>1. Empenho:</strong> O órgão competente reserva o dinheiro para custear a despesa a ser realizada. A reserva é feita por meio da Nota de Empenho.
      <br />
      <strong>2. Liquidação:</strong> O órgão verifica o que recebeu e o que comprou. A liquidação é feita com base em documentos que comprovem a entrega, além da nota de empenho.
      <br />
      <strong>3. Pagamento:</strong> O governo municipal repassa o valor ao fornecedor do produto ou serviço.
      <br />
      Nesta página é possível acompanhar diariamente a execução orçamentária das despesas da Prefeitura Municipal de Mogi das Cruzes.
      <br />
    </>
  ),
};

const App = () => {
  const [ano, setAno] = useState('2025');
  const [busca, setBusca] = useState('');
  const [dados, setDados] = useState<Despesa[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [progresso, setProgresso] = useState(0);
  const [paginasLidas, setPaginasLidas] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(null);

  const title = contentContractsAndAtas?.titlePage;
    const description = contentContractsAndAtas?.description;

  const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

  const buscarTodasPaginas = async (anoSelecionado: string, termo: string) => {
    let baseURL = `https://dadosadm.mogidascruzes.sp.gov.br/api/despesas?exercicio_empenho=${anoSelecionado}`;
    let todosResultados = [];

    try {
      let proximaUrl = baseURL;
      let pagina = 0;

      while (proximaUrl) {
        proximaUrl = proximaUrl.replace('http://', 'https://');
        const resposta = await axios.get(proximaUrl);

        const { results, next, count } = resposta.data;
        if (pagina === 0 && count) {
          const paginasTotais: any = Math.ceil(count / results.length);
          setTotalPaginas(paginasTotais);
        }

        const filtrados = results.filter((item: {
          id_empenho: any;
          unid_orcam: any; descr_fornecedor: string; 
}) =>
          item.descr_fornecedor?.toLowerCase().includes(termo.toLowerCase()) || 
        item.unid_orcam?.toLowerCase().includes(termo.toLowerCase()) || 
        item.id_empenho?.toLowerCase().includes(termo.toLowerCase())
        );

        todosResultados.push(...filtrados);
        pagina += 1;
        setPaginasLidas(pagina);
        if (totalPaginas) {
          setProgresso(Math.min(Math.round((pagina / totalPaginas) * 100), 100));
        }

        proximaUrl = next;
        // await delay(100); // se necessário
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }

    return todosResultados;
  };

  const handleBuscar = async () => {
    if (busca.length < 3) {
      alert('Digite pelo menos 3 letras para buscar');
      return;
    }

    setCarregando(true);
    setDados([]);
    setProgresso(0);
    setPaginasLidas(0);
    setTotalPaginas(null);

    const resultados = await buscarTodasPaginas(ano, busca);
    setDados(resultados);
    setCarregando(false);
  };

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
      <Text pl='10px' mb='10px'>Busca de Despesas por empenho, selecione o ano e busque pelo nome do fornecedor, unidade orçamentária ou número de empenho </Text>

        <Stack minW={86} width="50%" flexDir='row'
                sx={{
                  "@media (max-width: 900px)": {
                    flexDir:'column'
                  },
                }}
                >
        

        <Select
          value={ano}
          onChange={e => setAno(e.target.value)}
          className="border p-2 rounded"
          width= '180px'
        >
          <option value="2025">2025</option>
           <option value="2024">2024</option>
           <option value="2023">2023</option>
           <option value="2022">2022</option>
          <option value="2021">2021</option>
        </Select>

        <Input
          type="text"
          placeholder="Buscar empenho..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          className="border p-2 rounded w-full"
          width='180px'
        />

        <Button
        width='180px' border='0' cursor='pointer' fontSize='20px' textColor='white' 
        bgColor={colors.primaryDefault40p}
        _hover={{ bgColor: colors.primaryDefault80p }}
         height='40px' borderRadius='8px' mr='15px'
         boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          onClick={handleBuscar}
        >
          Buscar
        </Button>
      </Stack>

      {carregando && (
        <div className="mb-4">
          <p>Carregando resultados... </p>
          <div className="w-full bg-gray-200 h-4 rounded">
            <div
              className="bg-blue-600 h-4 rounded transition-all"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>
      )}

      {!carregando && dados.length > 0 && (
        <Text mb={5} color={colors.grayDark}>🔎 {dados.length} resultado(s) encontrados</Text>
      )}

      <ul className="space-y-3">
        {dados.length > 0 ? (
          dados.map(item => (
            <>
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
                           border: `2px solid ${colors.primaryDefault40p}`,
                         }}
                         onClick={() => {
                           sessionStorage.setItem('selectedDespesa', JSON.stringify(item));
                           window.open(`../detalhes?${item.id_empenho} - ${item.exercicio_empenho}`, '_blank');
                         }}
                       >
                         <Text fontWeight="bold" fontSize="lg" color={colors.primaryDefault40p} borderBottom={`2px solid ${colors.primaryDefault40p}`} pb="5px" mb="8px">
                           Empenho: {item.nr_empenho} / {item.exercicio_empenho}
                         </Text>
                         <Text><strong>Fornecedor:</strong> {item.descr_fornecedor}</Text>
                         <Text><strong>Descrição:</strong> {item.descr_funcional}</Text>
                         <Text><strong>Valor empenho:</strong> {item.vlr_empenho}</Text>
                         <Text><strong>Unidade Orçamentária:</strong> {item.unid_orcam}</Text>
                       </Box></>
          ))
        ) : (
          !carregando && <p>Nenhum resultado encontrado.</p>
        )}
      </ul>
    </Box>
    </ContainerBasic>
  );
};

export default App;
