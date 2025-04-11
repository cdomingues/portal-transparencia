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

  
    const url = `https://dadosadm.mogidascruzes.sp.gov.br/api/contratos_atas?id_contrato=${id_contrato}`;
    const url_files = `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivos_contratos_atas?id_contrato_id=${id_contrato}`;
  
    useEffect(() => {
      if (!id_contrato) return;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.results && Array.isArray(data.results)) {
            setContrato(data.results);
          } else {
            setContrato([]);
          }
        })
        .catch((error) => console.error("Erro ao buscar contratos:", error));
    }, [id_contrato]);
  
    useEffect(() => {
      if (!id_contrato) return;
      fetch(url_files) // ✅ Corrigida a URL para arquivos
        .then((response) => response.json())
        .then((data) => {
          if (data.results && Array.isArray(data.results)) {
            setArquivo(data.results);
          } else {
            setArquivo([]);
          }
        })
        .catch((error) => console.error("Erro ao buscar arquivos:", error));
    }, [id_contrato]);
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
              <ContainerSearch direction="row"></ContainerSearch>
      
              <Box>
                {contrato.length > 0 ? (
                  contrato.map((item) => (
                    <Table
                      key={item.id_contrato}
                      variant="simple"
                      size="md"
                      width="100%"
                      overflow="hidden"
                      mb={5}
                    >
                      <Thead>
                        <Tr>
                          <Th
                            colSpan={2}
                            textAlign="center"
                            bg={colors.primaryDefault40p}
                            color="white"
                            p={4}
                            fontWeight="bold"
                            border={`1px solid ${colors.primaryDefault40p}`}
                          >
                            DETALHAMENTO
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {[
                          ["Contrato / ATA", item.id_contrato],
                          ["Descrição", item.descricao],
                          ["Data de início", moment(item.data_inicio).format("DD/MM/YYYY")],
                          ["Data de término", moment(item.data_termino).format("DD/MM/YYYY")],
                          ["Objeto", item.objeto],
                          ["Grupo", item.grupo],
                          ["Processo", item.processo],
                          ["Valor total", moneyFormatter(Number(item.valor_total))],
                          ["Licitação", item.licitacao],
                          ["Fornecedor", item.fornecedor],
                          ["Situação", item.situacao],
                          ["Modalidade", item.modalidade],
                        ].map(([label, value], index) => (
                          <Tr key={index}>
                            <Td fontWeight="bold" bg={useColorModeValue("#f2f1f1", "black")} p={3} width="30%" border={`1px solid ${colors.primaryDefault40p}`}>
                              {label}
                            </Td>
                            <Td p={3} border={`1px solid ${colors.primaryDefault40p}`} bg={useColorModeValue("#f2f1f1", "black")} width="70%">
                              {value}
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  ))
                ) : (
                  <p>Nenhum contrato encontrado.</p>
                )}
      
                {/* TABELA DE ARQUIVOS */}
                {arquivo.length > 0 && (
                  <Table variant="simple" size="md" width="100%" overflow="hidden">
                    <Thead>
                      <Tr>
                        <Th
                          colSpan={2}
                          textAlign="center"
                          bg={colors.primaryDefault40p}
                          color="white"
                          p={4}
                          fontWeight="bold"
                          border={`1px solid ${colors.primaryDefault40p}`}
                        >
                          ARQUIVOS DISPONÍVEIS
                        </Th>
                      </Tr>
                      <Tr>
                        <Th bg="#f2f1f1" border={`1px solid ${colors.primaryDefault40p}`}>
                          Nome do Arquivo
                        </Th>
                        <Th bg="#f2f1f1" border={`1px solid ${colors.primaryDefault40p}`}>
                          Download
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {arquivo.map((file) => (
                        <Tr key={file.id}>
                          <Td p={3} border={`1px solid ${colors.primaryDefault40p}`}>
                            {file.nome}
                          </Td>
                          <Td p={3} border={`1px solid ${colors.primaryDefault40p}`}>
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
