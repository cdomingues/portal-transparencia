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
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import moneyFormatter from "../../../utils/moneyFormatter";
import moment from "moment";
import colors from "../../../styles/colors";

import usePagina from "../../../hooks/usePagina";

export interface Arquivo {
  id: number;
  id_convenio: string;
  id_etapa: string;
  arquivo: string;
  nome_arquivo: string;
  publico: boolean;
}

export interface Etapa {
  numero_etapa: number;
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


function Screen({ id_convenio }: any) {
  
  const [despesa, setDespesa] = useState<any>(null);
  const [etapa, setEtapa] = useState<Etapa[]>([]);
  const [arquivo, setArquivo] = useState<Arquivo[]>([]);
  const [loading, setLoading] = useState(true);
  const {paginaData, loadings, error} = usePagina("20");

  const etapasMap = React.useMemo(() => {
  const map: Record<string, number> = {};
  etapa.forEach((e) => {
    map[e.id] = e.numero_etapa;
  });
  return map;
}, [etapa]);

  /* useEffect(() => {
    const convenioData = sessionStorage.getItem("selectedConvenio");
    if (convenioData) {
      setDespesa(JSON.parse(convenioData));
    }
  }, []); */

  const url = `https://dadosadm.mogidascruzes.sp.gov.br/api/convenios?${id_convenio}`
  console.log(url)

  useEffect(() => {
  const fetchConvenio = async () => {
    if (!id_convenio) return;

    try {
      const response = await fetch(
        `https://dadosadm.mogidascruzes.sp.gov.br/api/convenios?${id_convenio}`
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar convênio");
      }

      const data = await response.json();

      if (data && Array.isArray(data) && data.length > 0) {
        setDespesa(data[0]); // 
      }
    } catch (error) {
      console.error("Erro ao carregar convênio:", error);
    }
  };

  fetchConvenio();
}, [id_convenio]);
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

  const arquivosPorEtapa = React.useMemo(() => {
  const map: Record<string, Arquivo[]> = {}

  arquivo
    .filter(a => a.publico === true && a.arquivo)
    .forEach(a => {
      if (!map[a.id_etapa]) {
        map[a.id_etapa] = []
      }
      map[a.id_etapa].push(a)
    })

  return map
}, [arquivo])

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
                        ["Número da emenda", despesa.cod_objeto],
                        ["Autor", despesa.politico],
                        ["Demanda", despesa.nivel_demanda],
                        ["Modalidade ", despesa.modalidade],
                        ["Conta bancária", despesa.conta],
                        ["Aplicação", despesa.aplicacao],
                        ["Orgão concedente", despesa.orgao],
                        ["Número do empenho de origem", despesa.numero_empenho],
                        
                        ["Secretaria executora", despesa.secretaria],
                        ["Status", despesa.status_convenio],
                        ["Ano", despesa.ano],
                        ["Data formalizado", moment(despesa.data_formalizado).format("DD/MM/YYYY")],
                       // ["Processo administrativo", despesa.processo_principal],
                        ["Objeto", despesa.objeto],
                        ["Finalidade", despesa.finalidade_objeto],
                        ['Tipo Instrumento', despesa.tipo_instrumento || 'Não informado'], 

                        ["Valor repasse", moneyFormatter(Number(despesa.valor_repasse))],
                        ["Valor repassado", moneyFormatter(Number(despesa.valor_repassado))],
                        ["Valor contrapartida", moneyFormatter(Number(despesa.contrapartida))],
                        ["Data inicio", moment(despesa.data_inicio).format("DD/MM/YYYY")],
                        ["Data fim", moment(despesa.data_fim).format("DD/MM/YYYY")],
                         ["Cronograma físico financeiro",
    despesa?.cronograma?.trim()
      ? (
        <Link
          href={despesa.cronograma}
          isExternal
  //color="blue.600"
  fontWeight="bold"
  _hover={{
   // color: "red.600",
    fontWeight: "bold",
    textDecoration: "underline",
  }}
  transition="all 0.2s ease-in-out"
        >
          Acessar
        </Link>
      )
      : "Não informado"
  ],
  ["Fonte",
    despesa?.url_emendas?.trim()
      ? (
        <Link
          href={despesa.url_emendas}
          isExternal
          fontWeight="bold"
  _hover={{
   // color: "red.600",
    fontWeight: "bold",
    textDecoration: "underline",
  }}
  transition="all 0.2s ease-in-out"
        >
          {despesa.url_emendas}
        </Link>
      )
      : "Não informado"
  ]
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
                      colSpan={9}
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
                  <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Nº da etapa</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Data Início</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Prazo em dias</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Prazo final</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Encaminhamento</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Situação</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Devolvido</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Data devolução</Th>
                    <Th bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>Sub-etapa</Th>
                  </Tr>
                </Thead>
                <Tbody>
  {etapa
    .sort(
      (a, b) =>
        new Date(b.data_inicio).getTime() -
        new Date(a.data_inicio).getTime()
    )
    .map((file) => {
      const arquivosDaEtapa = arquivosPorEtapa[file.id] || []

      return (
        <React.Fragment key={file.id}>
          {/* Linha da etapa */}
          <Tr>
            <Td border={`1px solid ${colors.transparenciaBlack}`}>
              {file.numero_etapa}
            </Td>
            <Td border={`1px solid ${colors.transparenciaBlack}`}>
              {moment(file.data_inicio).format("DD/MM/YYYY")}
            </Td>
            <Td border={`1px solid ${colors.transparenciaBlack}`}>
              {file.prazo_em_dias}
            </Td>
            <Td border={`1px solid ${colors.transparenciaBlack}`}>
              {file.data_inicio && typeof file.prazo_em_dias === "number"
                ? (() => {
                    const data = new Date(file.data_inicio)
                    data.setDate(data.getDate() + file.prazo_em_dias)
                    return data.toLocaleDateString("pt-BR")
                  })()
                : "—"}
            </Td>
            <Td border={`1px solid ${colors.transparenciaBlack}`}>
              {file.encaminhamento}
            </Td>
            <Td border={`1px solid ${colors.transparenciaBlack}`}>
              {file.situacao}
            </Td>
            <Td border={`1px solid ${colors.transparenciaBlack}`}>
              {file.devolvido ? "Sim" : "Não"}
            </Td>
            <Td border={`1px solid ${colors.transparenciaBlack}`}>
              {file.data_devolucao
                ? moment(file.data_devolucao).format("DD/MM/YYYY")
                : "—"}
            </Td>
            <Td border={`1px solid ${colors.transparenciaBlack}`}>
              {file.sub_etapa}
            </Td>
          </Tr>

          {/* Accordion de arquivos (só se existir) */}
          {arquivosDaEtapa.length > 0 && (
            <Tr>
              <Td colSpan={9} p={0} border="none">
                <Accordion allowToggle border={`1px solid ${colors.transparenciaBlack}`}>
                  <AccordionItem border="none">
                    <AccordionButton
                      bg={useColorModeValue("#f9f9f9", "gray.700")}
                      _hover={{ bg: useColorModeValue("#ececec", "gray.600") }}
                    >
                      <Box flex="1" textAlign="left" fontWeight="bold" >
                        Clique para visualizar os arquivos da Etapa {file.numero_etapa}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Table size="sm" variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Nome do arquivo</Th>
                            <Th>Download</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {arquivosDaEtapa.map((arq) => (
                            <Tr key={arq.id}>
                              <Td>{arq.nome_arquivo}</Td>
                              <Td >
                                <Link
                                  href={arq.arquivo}
                                  isExternal
                                  fontWeight="bold"
                                >
                                  Download
                                </Link>
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Td>
            </Tr>
          )}
        </React.Fragment>
      )
    })}
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
