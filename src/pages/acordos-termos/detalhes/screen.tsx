import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,Text,
   Tabs, TabList, Tab, TabPanels, TabPanel
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import moneyFormatter from "../../../utils/moneyFormatter";
import moment from "moment";
import colors from "../../../styles/colors";

export interface Arquivo {
  id: number;
  arquivo: string;
  acordo_id: number;
  }

  export interface Prestacao {
    id: number;
    arquivo: string;
    acordo_id: number;
    }


export const contentContractsAndAtas = {
  titlePage: "Acordos e termos - Detalhamento",
  description:
    "",
};

function obterTipoDespesa(tipo: any) {
  switch (tipo) {
    case 1:
      return 'Acordo de Cooperação';
    case 2:
      return 'Termo de Colaboração';
    case 3:
      return 'Termo de Fomento';
    default:
      return 'Tipo Desconhecido';
  }
}

function Screen() {
  const title = contentContractsAndAtas.titlePage;
  const description = contentContractsAndAtas.description;
  const [despesa, setDespesa] = useState<any>(null);
  const [data, setData] = useState<Arquivo[]>([]);
  const [loading, setLoading] = useState(true);
  const [liquidacoes, setLiquidacoes] = useState<Prestacao[]>([]);
  

  // Recupera a despesa do sessionStorage
  useEffect(() => {
    const despesaData = sessionStorage.getItem("selectedDespesa");
    if (despesaData) {
      setDespesa(JSON.parse(despesaData));
    }
  }, []);

  // Busca os arquivos do termo somente se  existir
  useEffect(() => {
    const fetchArquivos = async () => {
      if (!despesa) return; // 🚀 Garante que o useEffect não seja chamado sem necessidade

      try {
        const response = await fetch(
          `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivos_acordos?acordo_id=${despesa.id}`
        );

        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }

        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false); // 🚀 Garante que o carregamento termina
      }
    };

    fetchArquivos();
  }, [despesa]); // 🚀 Só executa quando despesa muda


  // Busca as liquiidações do empenho somente se despesa existir
  useEffect(() => {
    const fecthPrestacoesConta = async () => {
      if (!despesa) return; // 🚀 Garante que o useEffect não seja chamado sem necessidade

      try {
        const response = await fetch(
         `https://dadosadm.mogidascruzes.sp.gov.br/api/prestacao_contas?acordo_id=${despesa.id}`
        );
        console.log(response)

        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }

        const jsonData = await response.json();
        setLiquidacoes(jsonData.results);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false); // 🚀 Garante que o carregamento termina
      }
    };

    fecthPrestacoesConta();
  }, [despesa]); // 🚀 Só executa quando despesa muda

  

  

  return (
    <ContainerBasic title={title} description={description}>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        padding="15px"
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        


        {loading ? (
          <div>Carregando detalhes...</div>
        ) : despesa ? (
          <>
          <Tabs> 

<TabList>
  <Tab>
  <Text
  //align={isMobile ? "justify" : "left"}
  fontWeight="700"
  //fontSize={accessibility?.fonts?.regular}
>Detalhes</Text></Tab>
  <Tab> <Text
//  align={isMobile ? "justify" : "left"}
  fontWeight="700"
//  fontSize={accessibility?.fonts?.regular}
>Arquivos</Text></Tab>
<Tab> <Text
//  align={isMobile ? "justify" : "left"}
  fontWeight="700"
//  fontSize={accessibility?.fonts?.regular}
>Prestação de contas</Text></Tab>

</TabList>


<TabPanels>
          <TabPanel>
            {/* Detalhes do Empenho */}
            <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
              <Thead>
                <Tr>
                  <Th colSpan={2} textAlign="center" bg={colors.primaryDefault40p} color="white" p={4} fontWeight="bold"  
                  border={`1px solid ${colors.primaryDefault40p}`}>
                    DETALHES DO TERMO / ACORDO
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {[
                   ["Termo / Acordo", obterTipoDespesa(despesa.tipo) + ' -  '+ despesa.tc ],
                   ["Data início", despesa.data_inicio],
                   ["Data fim", despesa.data_fim],
                   ["Duração em dia", despesa.duracao],
                   ["Interessado ", despesa.interessado],
                   ["Contratada", despesa.contratada],
                   ["CNPJ Contratada", despesa.cnpj],
                   ["Processo ", despesa.processo],
                   ["Descrição", despesa.assunto],
                   ["Secretaria responsável ", despesa.secretaria_responsavel],
                   ["Valor inicial", despesa.valor_inicial],
                   ["Valor aditado", despesa.v],
                   ["Repasse mensal", despesa.repasse_mensal],
                   ["Site da entidade", despesa.url_entidade],
                   ["Observações", despesa.observacoes] ,
                 
                ].map(([label, value], index) => (
                  <Tr key={index}>
                    <Td fontWeight="bold" bg={useColorModeValue("#f2f1f1", "black")} p={3} width="30%"  border={`1px solid ${colors.primaryDefault40p}`}>
                      {label}
                    </Td>
                    <Td p={3} bg={useColorModeValue("#f2f1f1", "black")} width="70%"  border={`1px solid ${colors.primaryDefault40p}`}>
                      {value}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
             </TabPanel>

            {/* Itens do Empenho */}
            <TabPanel>
            <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
              
              <Thead>
              <Th colSpan={4} textAlign="center" bg={colors.primaryDefault40p} color="white" p={4} fontWeight="bold"  border={`1px solid ${colors.primaryDefault80p}`}>
                   ARQUIVOS
                  </Th>
                <Tr  border={`1px solid ${colors.primaryDefault40p}`}>
                  <Th maxWidth="350px" bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.primaryDefault40p}`}>Descrição</Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.primaryDefault40p}`}>Arquivo</Th>
                  
                  
                </Tr>
              </Thead>
              <Tbody bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.primaryDefault40p}`}>
                {data.map((file) => (
                  <Tr key={file.id}>
                    <Td maxWidth="350px" whiteSpace="normal" wordBreak="break-word"  border={`1px solid ${colors.primaryDefault40p}`}>
                      {(file.arquivo).split('/')[6]}
                    </Td>
                    <Td  border={`1px solid ${colors.primaryDefault40p}`}><a href={file.arquivo} download target="_blank" rel="noopener noreferrer">
    Baixar Arquivo
  </a></Td>
                    
                  </Tr>
                ))}
              </Tbody>
            </Table>
            </TabPanel>



             {/*Liquidações do Empenho */}
            <TabPanel>
             <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
              
              <Thead>
              <Th colSpan={7} textAlign="center" bg={colors.primaryDefault40p} color="white" p={4} fontWeight="bold"  border={`1px solid ${colors.primaryDefault40p}`}>
                   PRESTAÇÃO DE CONTAS
                  </Th>
                <Tr  border={`1px solid ${colors.primaryDefault40p}`}>
                 
                <Th maxWidth="350px" bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.primaryDefault40p}`}>Descrição</Th>
                <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.primaryDefault80p}`}>Arquivo</Th>
                </Tr>
              </Thead>
              <Tbody bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.primaryDefault40p}`}>
                {liquidacoes.map((file) => (
                  <Tr key={file.id}>
                   
                   <Td maxWidth="350px" whiteSpace="normal" wordBreak="break-word"  border={`1px solid ${colors.primaryDefault80p}`}>
                      {(file.arquivo).split('/')[6]}
                    </Td>
                    <Td  border={`1px solid ${colors.primaryDefault80p}`}><a href={file.arquivo} download target="_blank" rel="noopener noreferrer">
    Baixar Arquivo
  </a></Td>
                  </Tr>
                ))}
                
              </Tbody>
            </Table>
            </TabPanel>


           

            </TabPanels>
            </Tabs>
          </>
        ) : (
          <div>Nenhuma despesa encontrada.</div>
        )}

         
       
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
