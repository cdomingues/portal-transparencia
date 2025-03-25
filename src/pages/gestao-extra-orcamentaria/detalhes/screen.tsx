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
  descricao_vencimento: string;
  vencimento: string;
  valor_anulacao_liq: string;
  valor_atual_liquido: string;
}

export interface Pagamento {
  nr_empenho: number;
  exercicio_empenho: string;
  artigo_caixa: string;
  data_mov_pgto: string;
  valor_pgto: string;
  valor_atual_pgto: string;
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
        <>
          <Text fontWeight="700">Detalhes</Text>
          {/* Detalhes do Empenho */}
          {despesa ? (
            <Table variant="simple" size="md" width="100%" overflow="hidden" mb={5}>
              <Thead>
                <Tr>
                  <Th colSpan={2} textAlign="center" bg="#c62227" color="white" p={4} fontWeight="bold" border="1px solid #c62227">
                    DETALHES DA DESPESA
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {[
                  ["Despesa", `${despesa.numero}/${despesa.ano}`],
                  ["Classificação Funcional", despesa.class_funcional],
                  ["Data da Movimentação", moment(despesa.data).format("DD/MM/YYYY")],
                  ["Valor original ", moneyFormatter(Number(despesa.valor_ori)) || "Não disponível"],
                  ["Valor anulado ", moneyFormatter(Number(despesa.valor_anu)) || "Não disponível"],
                  ["Valor atualizado ", moneyFormatter(Number(despesa.valor_atu)) || "Não disponível"],
                  ["Favorecido", despesa.favorecido],
                  ["CNPJ favorecido ", despesa.cnpj_cpf_favorecido],
                  ["Unidade Orçamentária",despesa.unidadeorc ],
                  ["Funcional programática",despesa.funcionalprogramatica ], 
                  ["Programa",despesa.programa ],
                  ["Função",despesa.funcao ],
                  ["Subfunção",despesa.subfuncao ],
                  ["Fonte de recurso",despesa.fonterecurso ],
                  ["Natureza da despesa",despesa.naturezadespesa ],
                  ["Unidade executora",despesa.unidadeexecutora ],
                  ["Tipo de empenho",despesa.tipoempenho ],
                  ["Número do contrato",despesa.numerocontrato ],
                  ["Número da licitação",despesa.numerolicitacao ],
                  ["Tipo de licitação",despesa.tipolicitacao ],
                  ["Código dotação",despesa.codigodotacao ],


                  
                ].map(([label, value], index) => (
                  <Tr key={index}>
                    <Td fontWeight="bold" bg="#f2f1f1" p={3} width="30%" border="1px solid #c62227">
                      {label}
                    </Td>
                    <Td p={3} bg="#eeeeee" width="70%" border="1px solid #c62227">
                      {value || "N/A"}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
            <Text color="red.500" fontWeight="bold">
              Nenhuma despesa selecionada.
            </Text>
          )}
        </>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
