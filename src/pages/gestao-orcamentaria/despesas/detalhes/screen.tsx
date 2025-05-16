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
import ContainerBasic from "../../../../components/Container/Basic";
import moneyFormatter from "../../../../utils/moneyFormatter";
import moment from "moment";
import colors from "../../../../styles/colors";

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
  nr_nf: string;
  data_emissao_nf: string;
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
  titlePage: "Despesas - Detalhamento",
  description:
    "Para que a cidade possa continuar se desenvolvendo e os serviços possam permanecer funcionando e melhorando, a Prefeitura precisa realizar despesas das mais diversas, assim como investimentos. Aqui você pode conferir as informações das despesas públicas gerais empenhadas, liquidadas e pagas, entendendo os valores direcionados para cada programa.",
};

function Screen() {
  const title = contentContractsAndAtas.titlePage;
  const description = contentContractsAndAtas.description;
  const [despesa, setDespesa] = useState<any>(null);
  const [data, setData] = useState<Arquivo[]>([]);
  const [loading, setLoading] = useState(true);
  const [liquidacoes, setLiquidacoes] = useState<Liquidacao[]>([]);
  const [pagamentos, setPagamentos] = useState<Pagamento[]>([]);
  const [adiantamentos, setAdiantamentos] = useState<ArquivoAdiantamento[]>([]);

  // Recupera a despesa do sessionStorage
  useEffect(() => {
    const despesaData = sessionStorage.getItem("selectedDespesa");
    if (despesaData) {
      setDespesa(JSON.parse(despesaData));
    }
  }, []);

  // Busca os itens do empenho somente se despesa existir
  useEffect(() => {
    const fetchData = async () => {
      if (!despesa) return; // 🚀 Garante que o useEffect não seja chamado sem necessidade

      try {
        const response = await fetch(
          `https://dadosadm.mogidascruzes.sp.gov.br/api/itens_empenho_despesas/?nr_empenho=${despesa.nr_empenho}&exercicio_empenho=${despesa.exercicio_empenho}`
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

    fetchData();
  }, [despesa]); // 🚀 Só executa quando despesa muda


  // Busca as liquiidações do empenho somente se despesa existir
  useEffect(() => {
    const fecthLiquidacoes = async () => {
      if (!despesa) return; // 🚀 Garante que o useEffect não seja chamado sem necessidade

      try {
        const response = await fetch(
         `https://dadosadm.mogidascruzes.sp.gov.br/api/liquidacao_despesas/?nr_empenho=${despesa.nr_empenho}&exercicio_empenho=${despesa.exercicio_empenho}` 
        );

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

    fecthLiquidacoes();
  }, [despesa]); // 🚀 Só executa quando despesa muda

  // Busca os pagamentos do empenho somente se despesa existir
  useEffect(() => {
    const fetchPagamentos = async () => {
      if (!despesa) return; // 🚀 Garante que o useEffect não seja chamado sem necessidade

      try {
        const response = await fetch(
         `https://dadosadm.mogidascruzes.sp.gov.br/api/pagamentos_despesas/?nr_empenho=${despesa.nr_empenho}&exercicio_empenho=${despesa.exercicio_empenho}` 
        );

        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }

        const jsonData = await response.json();
        setPagamentos(jsonData.results);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false); // 🚀 Garante que o carregamento termina
      }
    };

    fetchPagamentos();
  }, [despesa]); // 🚀 Só executa quando despesa muda

  useEffect(() => {
    const fetchArquivoAdiantamentos = async () => {
      if (!despesa) return; // 🚀 Garante que o useEffect não seja chamado sem necessidade

      try {
        const response = await fetch(
         `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivo_diarias?nr_empenho=${despesa.nr_empenho}` 
        ); console.log( response)

        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }

        const jsonData = await response.json();
        setAdiantamentos(jsonData.results);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false); // 🚀 Garante que o carregamento termina
      }
    };

    fetchArquivoAdiantamentos();
  }, [despesa]); 

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
>Itens do Empenho</Text></Tab>
<Tab _selected={{ color: colors.transparenciaCinza }}> <Text
 _selected={{ color: "white", bg: "blue.500" }}
  fontWeight="700"
//  fontSize={accessibility?.fonts?.regular}
>Liquidações</Text></Tab>
<Tab _selected={{ color: colors.transparenciaCinza }}> <Text
 _selected={{ color: "white", bg: "blue.500" }}
  fontWeight="700"
//  fontSize={accessibility?.fonts?.regular}
>Pagamentos</Text></Tab>
<Tab _selected={{ color: colors.transparenciaCinza }}> <Text
 _selected={{ color: "white", bg: "blue.500" }}
  fontWeight="700"
//  fontSize={accessibility?.fonts?.regular}
>Arquivos</Text></Tab>
</TabList>


<TabPanels>
          <TabPanel>
            {/* Detalhes do Empenho */}
            <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
              <Thead>
                <Tr>
                  <Th colSpan={2} textAlign="center" bg={colors.transparenciaBlack} color="white" p={4} fontWeight="bold"  
                  border={`1px solid ${colors.transparenciaBlack}`}
                  >
                    DETALHES DO EMPENHO
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {[
                   ["Empenho", despesa.nr_empenho + "/" + despesa.exercicio_empenho],
                   ["Classificação Funcional", despesa.class_funcional],
                   ["Descrição Funcional", despesa.descr_funcional],
                   ["Ação ", despesa.acao],
                   ["Função", despesa.funcao],
                   ["Subfunção ", despesa.subfuncao],
                   ["Programa", despesa.programa],
                   ["Data da Movimentação ", despesa.data_movto],
                   ["Valor Empenho", moneyFormatter(Number(despesa.vlr_empenho))],
                   ["Tipo de empenho", despesa.tipo_empenho],
                   ["Programa", despesa.programa],
                   ["Evento", despesa.evento_custo],
                   ["Descrição do Evento Custo", despesa.descr_evento_custo] ,
                   ["CNPJ Fornecedor", despesa.cnpj_fornecedor],
                   ["Fornecedor",despesa.descr_fornecedor],
                   ["Vinculo",despesa.vinculo],
                   ["Unidade Orçamentária", despesa.unid_orcam],
                   ["Categoria", despesa.unid_orcam],
                   ["Categoria",despesa.categoria],
                   ["Elemento", despesa.elemento],
                   ["Subelemento", despesa.subelemento],
                   ["Processo", despesa.cod_processo],
                   ["Licitação", despesa.licitacao_numero],
                   ["Modalidade da Licitação", despesa.licitacao_modalidade],
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
             </TabPanel>

            {/* Itens do Empenho */}
            <TabPanel>
            <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
              
              <Thead>
              <Th colSpan={4} textAlign="center" bg={colors.transparenciaBlack} color="white" p={4} fontWeight="bold" border={`1px solid ${colors.transparenciaBlack}`}>
                   ITENS DO EMPENHO
                  </Th>
                <Tr  border={`1px solid ${colors.transparenciaBlack}`}>
                  <Th maxWidth="350px" bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Descrição</Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Quantidade</Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Valor Unitário</Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Valor Total</Th>
                  
                </Tr>
              </Thead>
              <Tbody bg={useColorModeValue("#f2f1f1", "black")} border={`1px solid ${colors.transparenciaBlack}`}>
                {data.map((file) => (
                  <Tr key={file.nr_empenho}>
                    <Td maxWidth="350px" whiteSpace="normal" wordBreak="break-word"  border={`1px solid ${colors.transparenciaBlack}`}>
                      {file.desc_item}
                    </Td>
                    <Td  border={`1px solid ${colors.transparenciaBlack}`}>{file.qtde}</Td>
                    <Td  border={`1px solid ${colors.transparenciaBlack}`}>{moneyFormatter(parseFloat(file.valor_unit))}</Td>
                    <Td  border={`1px solid ${colors.transparenciaBlack}`}>{moneyFormatter(file.qtde * parseFloat(file.valor_unit))}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            </TabPanel>



             {/*Liquidações do Empenho */}
            <TabPanel>
             <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
              
              <Thead>
              <Th colSpan={8} textAlign="center" bg={colors.transparenciaBlack} color="white" p={4} fontWeight="bold"  
              border={`1px solid ${colors.transparenciaBlack}`}>
                   LIQUIDAÇÕES DO EMPENHO
                  </Th>
                <Tr  >
                 
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Data da Liquidação</Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Vencimento</Th>
                  

                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Descrição</Th> 
                  <Th  bg={useColorModeValue("#f2f1f1", "black")}   border={`1px solid ${colors.transparenciaBlack}`}>
                    Nº Nota Fiscal
                  </Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Data Emissão Nota Fiscal</Th> 
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Valor Original</Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Valor Anulado</Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Valor Atual</Th>
                </Tr>
              </Thead>
              <Tbody bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>
                {liquidacoes.map((file) => (
                  <Tr key={file.nr_empenho}>
                   
                    <Td  border={`1px solid ${colors.transparenciaBlack}`}>{moment(file.data_mov_liquidacao).format('DD/MM/YYYY')}</Td>
                    <Td  border={`1px solid ${colors.transparenciaBlack}`}>{moment(file.vencimento).format('DD/MM/YYYY')}</Td>
                    <Td maxWidth="350px" whiteSpace="normal" wordBreak="break-word"  border={`1px solid ${colors.transparenciaBlack}`}>
                      {file.descricao_vencimento}
                    </Td>
                    <Td border={`1px solid ${colors.transparenciaBlack}`}>{file.nr_nf}</Td>
                    <Td  border={`1px solid ${colors.transparenciaBlack}`}>{moment(file.data_emissao_nf).format('DD/MM/YYYY')}</Td>
                   
                    <Td  border={`1px solid ${colors.transparenciaBlack}`}>{moneyFormatter(parseFloat(file.valor_liquidacao))}</Td>
                    <Td  border={`1px solid ${colors.transparenciaBlack}`}>{moneyFormatter(parseFloat(file.valor_anulacao_liq))}</Td>
                    <Td  border={`1px solid ${colors.transparenciaBlack}`}>{moneyFormatter(parseFloat(file.valor_atual_liquido))}</Td>
                  </Tr>
                ))}
                <Tr bg={useColorModeValue("#f2f1f1", "black")} fontWeight="bold">
      <Td colSpan={5} textAlign="right" border={`1px solid ${colors.transparenciaBlack}`}>Total:</Td>
      <Td border={`1px solid ${colors.transparenciaBlack}`}>
        {moneyFormatter(
          liquidacoes.reduce((acc, file) => acc + parseFloat(file.valor_liquidacao), 0)
        )}
      </Td>
      <Td border={`1px solid ${colors.transparenciaBlack}`}>
        {moneyFormatter(
          liquidacoes.reduce((acc, file) => acc + parseFloat(file.valor_anulacao_liq), 0)
        )}
      </Td>
      <Td border={`1px solid ${colors.transparenciaBlack}`}>
        {moneyFormatter(
          liquidacoes.reduce((acc, file) => acc + parseFloat(file.valor_atual_liquido), 0)
        )}
      </Td>
    </Tr>
              </Tbody>
            </Table>
            </TabPanel>


            {/*Pagamentos do Empenho */}
            <TabPanel>
            <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
              
              <Thead>
              <Th colSpan={4} textAlign="center" bg={colors.transparenciaBlack} color="white" p={4} fontWeight="bold" 
               border={`1px solid ${colors.transparenciaBlack}`}>
                   PAGAMENTOS DO EMPENHO
                  </Th>
                <Tr  border={`1px solid ${colors.transparenciaBlack}`}>
                 
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Artigo Caixa</Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Data movimentação do pagamento</Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Valor do Pagamento</Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Valor Atualizado do pagamento</Th>
                  
                </Tr>
              </Thead>
              <Tbody bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`} >
                {pagamentos.map((pag) => (
                  <Tr key={pag.nr_empenho}>
                  
                  <Td  border={`1px solid ${colors.transparenciaBlack}`}>{pag.artigo_caixa}</Td>
                  <Td  border={`1px solid ${colors.transparenciaBlack}`}>{moment(pag.data_mov_pgto).format('DD/MM/yyyy') } </Td>
                
                  <Td  border={`1px solid ${colors.transparenciaBlack}`}>{moneyFormatter(parseFloat(pag.valor_pgto))}</Td>
                  <Td  border={`1px solid ${colors.transparenciaBlack}`}>{moneyFormatter(parseFloat(pag.valor_atual_pgto))}</Td>
                    
                  </Tr>
                ))}
                <Tr bg={useColorModeValue("#f2f1f1", "black")} fontWeight="bold">
      <Td colSpan={2} textAlign="right" border={`1px solid ${colors.transparenciaBlack}`}>Total:</Td>
      <Td border={`1px solid ${colors.transparenciaBlack}`}>
        {moneyFormatter(
          pagamentos.reduce((acc, pag) => acc + parseFloat(pag.valor_pgto), 0)
        )}
      </Td>
      <Td border={`1px solid ${colors.transparenciaBlack}`}>
        {moneyFormatter(
          pagamentos.reduce((acc, pag) => acc + parseFloat(pag.valor_atual_pgto), 0)
        )}
      </Td>
     
    </Tr>
              </Tbody>
            </Table>
            </TabPanel>

             {/*Arquivos do Empenho */}
             <TabPanel>
            <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
              
              <Thead>
              <Th colSpan={4} textAlign="center" bg={colors.transparenciaBlack}color="white" p={4} fontWeight="bold"  border={`1px solid ${colors.transparenciaBlack}`}>
                   ARQUIVOS DE PRESTAÇÃO DE CONTAS DO EMPENHO
                  </Th>
                <Tr border={`1px solid ${colors.transparenciaBlack}`}>
                 
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Nome</Th>
                  <Th bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`}>Arquivo</Th>
                 
                  
                </Tr>
              </Thead>
              <Tbody bg={useColorModeValue("#f2f1f1", "black")}  border={`1px solid ${colors.transparenciaBlack}`} >
                {adiantamentos.map((ad) => (
                  <Tr key={ad.id}>
                  
                  <Td  border={`1px solid ${colors.transparenciaBlack}`}>{ad.descricao}</Td>
                  <Td  border={`1px solid ${colors.transparenciaBlack}`}>  <a href={ad.arquivo} download target="blank" rel="noopener noreferrer"  style={{ color: colors.transparenciaBlack, fontWeight: 'normal', textDecoration: 'none' }}>
                  Download
                </a> </Td>
                
                 
                    
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
