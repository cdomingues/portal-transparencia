import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import moneyFormatter from "../../../utils/moneyFormatter";
import moment from "moment";
import colors from "../../../styles/colors";
import Link from "next/link";

export interface Arquivo {
  id: number;
  id_convenio: string;
  arquivo: string;
  nome_arquivo: string;
}

export interface Etapa {
  id: string;
  id_convenio: string;
  encaminhamento: string;
  secretaria: string;
  situacao: string;
  created_at: string;
  updated_at: string;
  objeto: string;
  sub_etapa: string | null;
  responsavel: string;
  data_inicio: string;
  prazo_em_dias: number;
  prazo_final: string | null;
  devolvido: boolean;
  data_devolucao: string;
  detalhamento: string;
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
  const [etapa, setEtapa] = useState<Etapa[]>([]);
  const [arquivo, setArquivo] = useState<Arquivo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const convenioData = sessionStorage.getItem("selectedConvenio");
    if (convenioData) {
      setDespesa(JSON.parse(convenioData));
    }
  }, []);

  useEffect(() => {
    const fetchEtapas = async () => {
      if (!despesa) return;

      try {
        const response = await fetch(
          `https://dadosadm.mogidascruzes.sp.gov.br/api/convenio_etapas?id_convenio=${despesa.id_convenio}`
        );

        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }

        const jsonData = await response.json();
        setEtapa(jsonData);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEtapas();
  }, [despesa]);


  useEffect(() => {
    const fetchArquivos = async () => {
      if (!despesa) return;

      try {
        const response = await fetch(
          `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivo_etapa?id_convenio=${despesa.id_convenio}`
        );console.log(response)

        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }

        const jsonData = await response.json();
        setArquivo(jsonData);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArquivos();
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
        <Tabs>
          <TabList>
            <Tab _selected={{ color: colors.transparenciaCinza }}>
              <Text fontWeight="700">Detalhes</Text>
            </Tab>
            <Tab _selected={{ color: colors.transparenciaCinza }}>
              <Text fontWeight="700">Etapas</Text>
            </Tab>
             <Tab _selected={{ color: colors.transparenciaCinza }}>
              <Text fontWeight="700">Arquivos</Text>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
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
                        <Th
                          colSpan={2}
                          textAlign="center"
                          bg={colors.transparenciaBlack}
                          color="white"
                          p={4}
                          fontWeight="bold"
                          border={`1px solid ${colors.transparenciaBlack}`}
                        >
                          DETALHES DO CONVÊNIO
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {[
                        ["Convênio", despesa.id_convenio],
                        ["Tipo recurso", despesa.tipo_recurso],
                        ["Demanda", despesa.nivel_demanda],
                        ["Modalidade ", despesa.modalidade],
                        ["Aplicação", despesa.aplicacao],
                        ["Orgão ", despesa.orgao],
                        ["Autor", despesa.politico],
                        ["Secretaria ", despesa.secretaria],
                        ["Status", despesa.status_convenio],
                        ["Ano", despesa.ano],
                        ["Data formalizado", despesa.data_formalizado],
                        ["Processo administrativo", despesa.processo_administrativo],
                        ["Objeto", despesa.objeto],
                        ["Valor repasse", moneyFormatter(Number(despesa.valor_repasse))],
                        ["Valor contrapartida", moneyFormatter(Number(despesa.contrapartida))],
                        ["Data inicio", moment(despesa.data_inicio).format("DD/MM/YYYY")],
                        ["Data fim", moment(despesa.data_fim).format("DD/MM/YYYY")],
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
                            bg={useColorModeValue("#f2f1f1", "black")}
                            width="70%"
                            border={`1px solid ${colors.transparenciaBlack}`}
                          >
                            {value}
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Box>
              )}
            </TabPanel>

            <TabPanel>
              <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
                <Thead>
                  <Tr>
                    <Th
                      colSpan={8}
                      textAlign="center"
                      bg={colors.transparenciaBlack}
                      color="white"
                      p={4}
                      fontWeight="bold"
                      border={`1px solid ${colors.primaryDefault80p}`}
                    >
                      ETAPAS
                    </Th>
                  </Tr>
                  <Tr border={`1px solid ${colors.transparenciaBlack}`}>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Data Início</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Prazo em dias</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Prazo final</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Encaminhamento</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Situação</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Devolvido</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Data devolução</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Detalhamento</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {etapa
                    .sort((a, b) => new Date(b.data_inicio).getTime() - new Date(a.data_inicio).getTime())
                    .map((file) => (
                      <Tr key={file.encaminhamento}>
                        <Td border={`1px solid ${colors.transparenciaBlack}`}>
                          {moment(file.data_inicio).format("DD/MM/YYYY")}
                        </Td>
                        <Td border={`1px solid ${colors.transparenciaBlack}`}>{file.prazo_em_dias}</Td>
                        <Td border={`1px solid ${colors.transparenciaBlack}`}>
                          {file.data_inicio && typeof file.prazo_em_dias === "number"
                            ? (() => {
                                const data = new Date(file.data_inicio);
                                data.setDate(data.getDate() + file.prazo_em_dias);
                                return data.toLocaleDateString("pt-BR");
                              })()
                            : "—"}
                        </Td>
                        <Td border={`1px solid ${colors.transparenciaBlack}`}>{file.encaminhamento}</Td>
                        <Td border={`1px solid ${colors.transparenciaBlack}`}>{file.situacao}</Td>
                        <Td border={`1px solid ${colors.transparenciaBlack}`}>{file.devolvido ? "Sim" : "Não"}</Td>
                        <Td border={`1px solid ${colors.transparenciaBlack}`}>{moment(file.data_devolucao).format("DD/MM/YYYY")}</Td>
                        <Td border={`1px solid ${colors.transparenciaBlack}`}>{file.detalhamento}</Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TabPanel>

            <TabPanel>
              <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
                <Thead>
                  <Tr>
                    <Th
                      colSpan={8}
                      textAlign="center"
                      bg={colors.transparenciaBlack}
                      color="white"
                      p={4}
                      fontWeight="bold"
                      border={`1px solid ${colors.primaryDefault80p}`}
                    >
                      ARQUIVOS
                    </Th>
                  </Tr>
                  <Tr border={`1px solid ${colors.transparenciaBlack}`}>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Nome do arquivo</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Arquivo</Th>
                  
                  </Tr>
                </Thead>
                <Tbody>
                  {arquivo
                    .sort((a, b) => a.id - b.id)
                    .map((file2) => (
                      <Tr key={file2.id}>
                        
                        <Td border={`1px solid ${colors.transparenciaBlack}`}>{file2.nome_arquivo}</Td>
                     
                        <Td border={`1px solid ${colors.transparenciaBlack}`}><Link href={file2.arquivo} target="blank">Download</Link></Td>
                       
                      
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
