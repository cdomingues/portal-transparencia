import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RowDetails, TColumn } from "../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";
import moneyFormatter from "../../../../utils/moneyFormatter";
import moment from "moment";

export interface Arquivo {
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

const Liquidacoes = ({ contract }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Arquivo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( `https://dadosadm.mogidascruzes.sp.gov.br/api/liquidacao_despesas/?nr_empenho=${contract.nr_empenho}&exercicio_empenho=${contract.exercicio_empenho}` );
        console.log(response)
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        const data = await response.json();
        console.log('Dados recebidos:', data); // Verifique os dados recebidos no console
        setData(data.results);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };
  
    fetchData();
  }, []);

  
   
  

  

  return (
    <TableContainer>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Data da Liquidação</Th>
          <Th>Vencimento</Th>
          <Th>Descrição</Th>
          <Th>Valor Original</Th>
          <Th>Valor Anulado</Th>
          <Th>Valor Atual</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((file) => (
          <Tr key={file.nr_empenho}>
            <Td>{moment(file.data_mov_liquidacao).format("DD/MM/YYYY")}</Td>
            <Td>{moment(file.vencimento).format("DD/MM/YYYY")}</Td>
            <Td>{file.descricao_vencimento}</Td>
            <Td>{moneyFormatter(parseFloat(file.valor_liquidacao))}</Td>
            <Td>{moneyFormatter(parseFloat(file.valor_anulacao_liq))}</Td>
            <Td>{moneyFormatter(parseFloat(file.valor_atual_liquido))}</Td>
            
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  );
};

export default Liquidacoes;
