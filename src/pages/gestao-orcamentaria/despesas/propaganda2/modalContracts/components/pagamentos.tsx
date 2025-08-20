import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RowDetails, TColumn } from "../../../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";
import moneyFormatter from "../../../../../../utils/moneyFormatter";
import moment from "moment";

export interface Arquivo {
  nr_empenho: number;
  exercicio_empenho: string;
  artigo_caixa: string;
  data_mov_pgto: string;
  valor_pgto: string;
  valor_atual_pgto: string
  


}

const Pagamentos = ({ contract }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Arquivo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( `https://dadosadm.mogidascruzes.sp.gov.br/api/pagamentos_despesas/?nr_empenho=${contract.nr_empenho}&exercicio_empenho=${contract.exercicio_empenho}` );
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
          <Th>Artigo Caixa</Th>
          <Th>Data do Pagamento:</Th>
          <Th>Valor Original</Th>
          <Th>Valor Atual</Th>
                  </Tr>
      </Thead>
      <Tbody>
        {data.map((file) => (
          <Tr key={file.nr_empenho}>
            <Td>{file.artigo_caixa}</Td>
            <Td>{moment(file.data_mov_pgto).format("DD/MM/YYYY")}</Td>
            <Td>{moneyFormatter(parseFloat(file.valor_pgto))}</Td>
            <Td>{moneyFormatter(parseFloat(file.valor_atual_pgto))}</Td>
            
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  );
};

export default Pagamentos;
