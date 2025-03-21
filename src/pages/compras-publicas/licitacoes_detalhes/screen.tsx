import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";
import moment from "moment";
import moneyFormatter from "../../../utils/moneyFormatter";
import { getTipoText } from "../../../utils/tipoLicitacao";
import { objetos_licitacao } from "../../../utils/objetos_licitacao";
import { getSituacaoText } from "../../../utils/situacaoLicitacao";
import id from "date-fns/esm/locale/id/index.js";

export interface ArquivoLicitacao {
  id: number;
  tabela: string;
  id_licitacao: number;
  data: string;
  descricao: string;
  complemento: string;
}

export interface Arquivo {
  id: number;
  id_tabela: number;
  descricao_arquivo: string;
}

export const contentContractsAndAtas = {
  titlePage: "Licitações",
  description:
    "São disponibilizados no site da Prefeitura os editais de licitação de concorrência, tomada de preço e pregões para aquisição de bens e serviços, para acesso de qualquer interessado. ",
};

function Screen({ id_contrato }: any) {
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  const [contrato, setContrato] = useState<any[]>([]);
  const [arquivo, setArquivo] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [ocorrencias, setOcorrencias] = useState<any[]>([]);
  
  const url = `https://dadosadm.mogidascruzes.sp.gov.br/api/licitacoes?id=${id_contrato}`;
  const url_files = `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivos_contratos_atas?id_contrato_id=${id_contrato}`;
  const url_ocorrencias = `https://dadosadm.mogidascruzes.sp.gov.br/api/ocorrencias/?id_licitacao=${id_contrato}`;

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
    const fetchArquivosLicitaco = async () => {
      try {
        const response = await fetch(`https://dadosadm.mogidascruzes.sp.gov.br/api/licitacoes-arquivos/?id_tabela=${id_contrato}`);
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        const data = await response.json();
        console.log('Dados recebidos:', data); // Verifique os dados recebidos no console
        setArquivo(data.results);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchArquivosLicitaco();
  }, []);

  useEffect(() => {
    const fetchOcorrencias = async () => {
      try {
        const response = await fetch(url_ocorrencias);
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        const data = await response.json();
        console.log('Dados recebidos:', data); // Verifique os dados recebidos no console
        setOcorrencias(data.results);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchOcorrencias();
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
                      bg="#c62227"
                      color="white"
                      p={4}
                      fontWeight="bold"
                      border="1px solid #c62227"
                    >
                      DETALHES DA LICITAÇÃO
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {[
                    ["Licitação", String(item.numero) + ' / ' + String(item.ano)] ,
                    ["Tipo de licitação", getTipoText(item.id_tipolicitacao)],
                    ["Data de início", moment(item.publicacaoInicio).format("DD/MM/YYYY")],
                    ["Data de término", moment(item.publicacaoFim).format("DD/MM/YYYY")],
                    ["Objeto", objetos_licitacao?.find(objeto => objeto.id_objeto === item.id_objeto)?.descricao || "Descrição não encontrada"],
                    ["Descrição", item.descricao],
                    ["Complemento", item.complemento],
                    ["Orgão", item.gestora],
                    ["Situação", getSituacaoText(item.situacao)],
                    
                  ].map(([label, value], index) => (
                    <Tr key={index}>
                      <Td fontWeight="bold" bg="#f2f1f1" p={3} width="30%" border="1px solid #c62227">
                        {label}
                      </Td>
                      <Td p={3} border="1px solid #c62227" bg="#eeeeee" width="70%">
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
            <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
              <Thead>
                <Tr>
                  <Th
                    colSpan={2}
                    textAlign="center"
                    bg="#c62227"
                    color="white"
                    p={4}
                    fontWeight="bold"
                    border="1px solid #c62227"
                  >
                    ARQUIVOS DISPONÍVEIS
                  </Th>
                </Tr>
                <Tr>
                  <Th bg="#f2f1f1" border="1px solid #c62227">
                    Nome do Arquivo
                  </Th>
                  <Th bg="#f2f1f1" border="1px solid #c62227">
                    Download
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {arquivo
                .filter(file => file.tabela === 'LICITACAO')
                .map((file) => (
                  <Tr key={file.id}>
                    <Td p={3} border="1px solid #c62227">
                      {file.nome}
                    </Td>
                    <Td p={3} border="1px solid #c62227">
                      <Link 
                      href={`https://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download?id=${file.id}`}
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


          {/* TABELA DE OCORRENCIAS */}
          {ocorrencias.length > 0 && (
            <Table variant="simple" size="md" width="100%" overflow="hidden" mt='1Opx'>
              <Thead>
                <Tr>
                  <Th
                    colSpan={2}
                    textAlign="center"
                    bg="#c62227"
                    color="white"
                    p={4}
                    fontWeight="bold"
                    border="1px solid #c62227"
                    
                   >
                    OCORRÊNCIAS 
                  </Th>
                </Tr>
                <Tr>
                  <Th bg="#f2f1f1" border="1px solid #c62227">
                    Nome do Arquivo
                  </Th>
                  <Th bg="#f2f1f1" border="1px solid #c62227">
                    Download
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {ocorrencias                
                .map((file) => (
                  <Tr key={file.id}>
                    <Td p={3} border="1px solid #c62227">
                      {file.descricao}
                    </Td>
                    <Td p={3} border="1px solid #c62227">
                      <Link 
                      href={`https://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download?id=${file.id}`}
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
