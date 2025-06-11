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
  Tab,
  TabList,Text,
  Tabs,
  TabPanel,
  TabPanels
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";
import moment from "moment";
import moneyFormatter from "../../../utils/moneyFormatter";
import colors from "../../../styles/colors";

export const contentContractsAndAtas = {
  titlePage: "Detalhamento - Contratos e ATAS",
  description:
    "Nesta página, confira as informações sobre contratos e atas celebrados pela Prefeitura de Mogi das Cruzes com prestadores de serviço. ",
};

function Screen({ id_contrato }: any) {
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  const [contrato, setContrato] = useState<any[]>([]);
  const [arquivo, setArquivo] = useState<any[]>([]);
  const [empenho, setEmpenho] = useState<any[]>([]);

  const url = `https://dadosadm.mogidascruzes.sp.gov.br/api/contratos_atas?id_contrato=${id_contrato}`;
  const url_files = `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivos_contratos_atas?id_contrato_id=${id_contrato}`;

  useEffect(() => {
    if (!id_contrato) return;

    // Busca os dados do contrato
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && Array.isArray(data.results) && data.results.length > 0) {
          setContrato(data.results);
          
          // Extrai o id_tabela_contrato do primeiro item do contrato
          const id_tabela = data.results[0]?.id_tabela_contrato;
          
          if (id_tabela) {
            // Busca os empenhos usando o id_tabela_contrato
            fetch(`https://dadosadm.mogidascruzes.sp.gov.br/api/empenhos_contratos_atas?id_tabela=${id_tabela}`)
              .then(response => response.json())
              .then(empenhoData => {
                if (empenhoData.results && Array.isArray(empenhoData.results)) {
                  setEmpenho(empenhoData.results);
                }
              })
              .catch(error => console.error("Erro ao buscar empenhos:", error));
          }
        } else {
          setContrato([]);
        }
      })
      .catch((error) => console.error("Erro ao buscar contratos:", error));

    // Busca os arquivos
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
  }, [id_contrato]);

  return (
    <ContainerBasic title={title} description={description}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <ContainerSearch direction="row" />

        <Box>
           <Tabs variant='unstyled'> 
          <TabList>
  <Tab _selected={{ color: colors.transparenciaCinza }}> 
  <Text
   
  fontWeight="700"
  //fontSize={accessibility?.fonts?.regular}
>Detalhes</Text></Tab>
<Tab _selected={{ color: colors.transparenciaCinza }}> <Text
 _selected={{ color: "white", bg: "blue.500" }}
  fontWeight="700"
//  fontSize={accessibility?.fonts?.regular}
>Arquivos</Text></Tab>
  <Tab _selected={{ color: colors.transparenciaCinza }}> <Text
 _selected={{ color: "white", bg: "blue.500" }}
  fontWeight="700"
//  fontSize={accessibility?.fonts?.regular}
>Itens do Empenho</Text></Tab>

</TabList>
<TabPanels>
 <TabPanel>
          
          {/* CONTRATO */}
          {contrato.length > 0 ? (
            contrato.map((item) => (
              <Table
                key={item.id_contrato}
                variant="simple"
                size="md"
                width="100%"
                mb={5}
              >
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
                      DETALHAMENTO
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {[
                    ["Contrato", item.id_contrato],
                    ["Data de início", moment(item.data_inicio).format("DD/MM/YYYY")],
                    ["Data de término", moment(item.data_aditivo_final ? item.data_aditivo_final : item.data_termino).format("DD/MM/YYYY")],
                    //["Secretaria responsável", item.secretaria_responsavel.split('-')[1]],
                    ["Gestor do contrato", item.gestor_contrato],
                    ["Objeto", item.objeto],
                    ["Grupo", item.grupo],
                    ["Tipo",item.tipo_contrato],
                    ["Processo", item.processo],
                    ["Valor", moneyFormatter(Number(item.valor))],
                    ["Valor aditado", moneyFormatter(Number(item.valor_aditado))],
                    ["Valor total", moneyFormatter(Number(item.valor_total))],
                    ["Licitação", item.licitacao],
                    ["Fornecedor", item.fornecedor],
                    ["Situação", item.situacao],
                    ["Modalidade", item.modalidade],
                    
                  ].map(([label, value], index) => (
                    <Tr key={index}>
                      <Td
                        fontWeight="bold"
                        bg={useColorModeValue("#f2f1f1", "black")}
                        p={3}
                        width="30%"
                        border={`1px solid ${colors.transparenciaBlack}`}
                      >
                        {label}
                      </Td>
                      <Td
                        p={3}
                        border={`1px solid ${colors.transparenciaBlack}`}
                        bg={useColorModeValue("#f2f1f1", "black")}
                        width="70%"
                      >
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
</TabPanel>
          <TabPanel>
          {/* ARQUIVOS */}
          {arquivo.length > 0 && (
            <Table variant="simple" size="md" width="100%">
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
                        _hover={{ fontWeight: "bold" }}
                      >
                        Baixar
                      </Link>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
</TabPanel>
          <TabPanel>
          {/* EMPENHOS */}
          {empenho.length > 0 && (
            <Table variant="simple" size="md" width="100%" mt={5}>
              <Thead>
                <Tr>
                  <Th
                    colSpan={7}
                    textAlign="center"
                    bg={colors.transparenciaBlack}
                    color="white"
                    p={4}
                    fontWeight="bold"
                    border={`1px solid ${colors.transparenciaBlack}`}
                  >
                    EMPENHOS
                  </Th>
                </Tr>
                <Tr>
                  <Th border={`1px solid ${colors.transparenciaBlack}`}>Número empenho</Th>
                  <Th border={`1px solid ${colors.transparenciaBlack}`}>Data</Th>
                  <Th border={`1px solid ${colors.transparenciaBlack}`}>Valor Empenhado</Th>
                  <Th border={`1px solid ${colors.transparenciaBlack}`}>Nº Liquidação</Th>
                  <Th border={`1px solid ${colors.transparenciaBlack}`}>Data Liquidação</Th>
                  <Th border={`1px solid ${colors.transparenciaBlack}`}>Valor Liquidado</Th>
                  <Th border={`1px solid ${colors.transparenciaBlack}`}>Valor Total Pago</Th>
                </Tr>
              </Thead>
              <Tbody>
                {empenho.map((item) => (
                  <Tr key={item.id}>
                    <Td p={3} border={`1px solid ${colors.transparenciaBlack}`}
                    
                    title="Clique para ver detalhes do empenho"
                    _hover={{cursor: 'pointer', textDecoration: 'underline'}}
                    onClick={()=>{
                      window.open(`/gestao-orcamentaria/despesas/detalhes?Exercicio_Empenho=${item.data_empenho.split('-')[0]}&nr_empenho=${item.numero_empenho}`, '_blank');
                    }}
                    >
                     <strong> {item.numero_empenho?.trim()}</strong>
                    </Td>
                    <Td p={3} border={`1px solid ${colors.transparenciaBlack}`}>
                      {moment(item.data_empenho).format("DD/MM/YYYY")}
                    </Td>
                    <Td p={3} border={`1px solid ${colors.transparenciaBlack}`}>
                      {moneyFormatter(Number(item.valor_empenhado))}
                    </Td>
                    <Td p={3} border={`1px solid ${colors.transparenciaBlack}`}>
                      {item.numero_liquidacao}
                    </Td>
                    <Td p={3} border={`1px solid ${colors.transparenciaBlack}`}>
                      {item.data_liquidacao ? moment(item.data_liquidacao).format("DD/MM/YYYY") : '-'}
                    </Td>
                    <Td p={3} border={`1px solid ${colors.transparenciaBlack}`}>
                      {moneyFormatter(Number(item.valor_liquidado))}
                    </Td>
                    <Td p={3} border={`1px solid ${colors.transparenciaBlack}`}>
                      {moneyFormatter(Number(item.valor_total_pago))}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
          </TabPanel>
          </TabPanels>
          </Tabs>
        </Box>
        
      </Box>
    </ContainerBasic>
  );
}

export default Screen;