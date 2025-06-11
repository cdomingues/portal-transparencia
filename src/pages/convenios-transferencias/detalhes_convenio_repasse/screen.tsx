import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,Text,
   Tabs, TabList, Tab, TabPanels, TabPanel,
   Link
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import moneyFormatter from "../../../utils/moneyFormatter";
import moment from "moment";
import colors from "../../../styles/colors";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";


  
  
  


export interface Arquivo {
  nr_empenho: number;
  exercicio_empenho: string;
  desc_item: string;
  qtde: number;
  valor_unit: string;
}

export interface Liquidacao {
  nr_empenho: number;
  exercicio_empenho: string;
  exercicio_liquidacao: string;
  data_mov_liquidacao: string;
  nr_liquidacao: string;
  valor_liquidacao: string;
  descricao_vencimento: string
  vencimento: string
  valor_anulacao_liq: string
  valor_atual_liquido: string
}

export interface Pagamento {
  nr_empenho: number;
  exercicio_empenho: string;
  artigo_caixa: string;
  data_mov_pgto: string;
  valor_pgto: string;
  valor_atual_pgto: string
}

export interface ArquivoAdiantamento {
  id: string;
  created_at: string;
  updated_at: string;
  arquivo: string;
  descricao: string;
  despesa: string;
}


export const contentContractsAndAtas = {
  titlePage: "Convênios - Detalhamento",
  description:
    "A divulgação da lista de Convênios e Transferências repasses realizados pela Prefeitura de Mogi das Cruzes é uma medida fundamental cujo propósito é reforçar a transparência das finanças municipais e promover a responsabilidade fiscal.",
};

function Screen({ id_contrato }: any) {
  const title = contentContractsAndAtas.titlePage;
  const description = contentContractsAndAtas.description;
  const [despesa, setDespesa] = useState<any>(null);
   const [arquivo, setArquivo] = useState<any[]>([]);
  const [contrato, setContrato] = useState<any[]>([]);
  const [data, setData] = useState<Arquivo[]>([]);
  const [loading, setLoading] = useState(true);
  const [liquidacoes, setLiquidacoes] = useState<Liquidacao[]>([]);
  const [pagamentos, setPagamentos] = useState<Pagamento[]>([]);
  const [adiantamentos, setAdiantamentos] = useState<ArquivoAdiantamento[]>([]);

   useEffect(() => {
  const convenioData = sessionStorage.getItem("selectedConvenio");
  if (convenioData) {
    setDespesa(JSON.parse(convenioData));
  }
}, []);

 useEffect(() => {
  if (!despesa || !despesa.id_contrato) return;

  const url_files = `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivos_contratos_atas?id_contrato_id=${despesa.id_contrato}`;
  console.log("URL dos arquivos:", url_files);

  fetch(url_files)
    .then((response) => response.json())
    .then((data) => {
      if (data.results && Array.isArray(data.results)) {
        setArquivo(data.results);
      } else {
        setArquivo([]);
      }
    })
    .catch((error) => console.error("Erro ao buscar arquivos:", error));
}, [despesa]);
    
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
              {despesa && (
  <Box
    border="2px solid transparent"
    p="12px"
    borderRadius="16px"
    mb="12px"
    bg={useColorModeValue("white", "black")}
    boxShadow="lg"
  >
     <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
                  <Thead>
                    <Tr>
                      <Th colSpan={2} textAlign="center" bg={colors.transparenciaBlack} color="white" p={4} fontWeight="bold"  
                      border={`1px solid ${colors.transparenciaBlack}`}
                      >
                        DETALHES DO CONVÊNIO
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                {[
                   ["Convênio", despesa.id_contrato],
                   ["Ano", despesa.ano],
                   ["Data início", moment(despesa.data_inicio).format("DD/MM/YYYY")],
                   ["Data fim ", moment(despesa.data_termino).format("DD/MM/YYYY")],
                   ["Descrição", despesa.descricao],
                   ["Grupo", despesa.grupo],
                   ["Processo ", despesa.processo],
                   ["Valor", moneyFormatter(Number(despesa.valor))],
                   ["Secretaria ", despesa.secretaria_responsavel],
                   ["Fornecedor", despesa.fornecedor],
                   ["CNPJ", despesa.cnpj],
                   
                 
                  
                ].map(([label, value], index) => (
                  <Tr key={index}>
                    <Td fontWeight="bold" bg={useColorModeValue("#f2f1f1", "black")} p={3} width="30%"  border={`1px solid ${colors.transparenciaBlack}`}>
                      {label}
                    </Td>
                    <Td p={3} bg={useColorModeValue("#f2f1f1", "black")} width="70%"  border={`1px solid ${colors.transparenciaBlack}`}>
                      {value}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
     </Table>
   
  </Box>
)} <Box>
  {arquivo.length > 0 && (
              <Table variant="simple" size="md" width="100%" overflow="hidden">
                <Thead>
                  <Tr>
                    <Th
                      colSpan={2}
                      textAlign="center"
                      bg={colors.transparenciaBlack}
                      color="white"
                      p={4}
                      fontWeight="bold"
                      border={`1px solid ${colors.transparenciaBlack}`}
                    >
                      ARQUIVOS DISPONÍVEIS
                    </Th>
                  </Tr>
                  <Tr>
                  
                  </Tr>
                </Thead>
                <Tbody>
                  {arquivo.map((file) => (
                    <Tr key={file.id}>
                      <Td p={3} border={`1px solid ${colors.transparenciaBlack}`}>
                        {file.nome}
                      </Td>
                      <Td p={3} border={`1px solid ${colors.transparenciaBlack}`}>
                        <Link 
                        href={file.arquivo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        
                        _hover={{ fontWeight: 'bold' }} 
                        >
                          Baixar
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
             
              </Box>
            </Box>
    </ContainerBasic>
  );
}

export default Screen;
