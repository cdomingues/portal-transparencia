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

export const contentContractsAndAtas = {
  titlePage: "Contratos",
  description:
    "Nesta página, confira as informações sobre contratos e atas celebrados pela Prefeitura de Mogi das Cruzes com prestadores de serviço. Pesquise por número, modalidade, processo, valor, fornecedor, objeto, entre outros itens. ",
};

function Screen({ id_contrato }: any) {
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  const [contrato, setContrato] = useState<any[]>([]);
  const [arquivo, setArquivo] = useState<any[]>([]);
  
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
                      bg="red"
                      color="white"
                      p={4}
                      fontWeight="bold"
                      border="1px solid red"
                    >
                      DETALHES DO CONTRATO
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {[
                    ["Contrato", item.id_contrato],
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
                      <Td fontWeight="bold" bg="#f2f1f1" p={3} width="30%" border="1px solid red">
                        {label}
                      </Td>
                      <Td p={3} border="1px solid red" bg="#eeeeee" width="70%">
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
                    bg="red"
                    color="white"
                    p={4}
                    fontWeight="bold"
                    border="1px solid red"
                  >
                    ARQUIVOS DISPONÍVEIS
                  </Th>
                </Tr>
                <Tr>
                  <Th bg="#f2f1f1" border="1px solid red">
                    Nome do Arquivo
                  </Th>
                  <Th bg="#f2f1f1" border="1px solid red">
                    Download
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {arquivo.map((file) => (
                  <Tr key={file.id}>
                    <Td p={3} border="1px solid red">
                      {file.nome}
                    </Td>
                    <Td p={3} border="1px solid red">
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
