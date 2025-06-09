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
  titlePage: "Detalhamento - Obras",
  description:
    "  ",
};

function Screen() {
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  const [obra, setObra] = useState<any[]>([]);
  const [arquivo, setArquivo] = useState<any[]>([]);
  const [empenho, setEmpenho] = useState<any[]>([]);
  const [despesa, setDespesa] = useState<any>(null);



   useEffect(() => {
  const despesaData = sessionStorage.getItem("selectedDespesa");
  if (despesaData) {
    setDespesa(JSON.parse(despesaData));
  }
}, []);

  const url_files = 'https://dadosadm.mogidascruzes.sp.gov.br/api/arquivos_obras/';

  useEffect(() => {
  if (!despesa?.nome_da_obra) return;

  fetch(url_files)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        // Filtra os arquivos com nome_obra igual ao nome_da_obra da despesa
        const arquivosFiltrados = data.filter(
          (item) => item.nome_obra?.trim().toLowerCase() === despesa.nome_da_obra?.trim().toLowerCase()
        );
        setArquivo(arquivosFiltrados);
      } else {
        setArquivo([]);
      }
    })
    .catch((error) => console.error("Erro ao buscar arquivos:", error));
}, [despesa]);

  

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
  

</TabList>
<TabPanels>
 <TabPanel>
          
          {/* CONTRATO */}
          {despesa ? (
      <>

       <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
                    <Thead>
                      <Tr>
                        <Th colSpan={2} textAlign="center" bg={colors.transparenciaBlack} color="white" p={4} fontWeight="bold"  
                        border={`1px solid ${colors.transparenciaBlack}`}>
                          DETALHES DA OBRA
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {[
                        
                         ["Contrato", despesa.id_contrato],
                         ["Nome da obra", despesa.nome_da_obra],
                         ["Descrição", despesa.descricao_da_obra],
                         ["Status ", despesa.status?.split("-")[1]],
                         ["Categoria", despesa.categoria?.replace("Categoria:", "")],
                         ["Empresa", despesa.razao_social_contratada],
                         ["Data início ", moment(despesa?.inicio_ate).format("DD/MM/YYYY ")],
                         ["Data fim", despesa?.aditivo_prazo !== null ? moment(despesa?.aditivo_prazo).format("DD/MM/YYYY") : moment(despesa?.conclusao_ate).format("DD/MM/YYYY")],
                         ["Secretaria responsável ", despesa.orgao_responsavel],
                         ["Endereço da obra", despesa.localizacao],
                         ["Bairro", despesa.bairro],
                         ["Fiscal responsável", despesa.responsavel_fiscalizacao],
                         ["Valor previsto", moneyFormatter(despesa.valor_total_aditamento_reajuste_contrato)],
                         ["Valor executado", moneyFormatter(despesa.valor_total_medicao)] ,
                       
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
       
     
      </>
    ) : (
      <Text>Nenhuma despesa selecionada.</Text>
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
                      {file.descricao}
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
                    <Td p={3} border={`1px solid ${colors.transparenciaBlack}`}>
                      {item.numero_empenho?.trim()}
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