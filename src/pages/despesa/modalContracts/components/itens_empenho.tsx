import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RowDetails, TColumn } from "../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";
import moneyFormatter from "../../../../utils/moneyFormatter";
import moment from "moment";

export interface Arquivo {
  nr_empenho: number;
  exercicio_empenho: string;
  desc_item: string;
  qtde: number;
  valor_unit: string;
  

}

const ItensEmpenho = ({ contract }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Arquivo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( `https://dadosadm.mogidascruzes.sp.gov.br/api/itens_empenho_despesas/?nr_empenho=${contract.nr_empenho}&exercicio_empenho=${contract.exercicio_empenho}` );
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
          <Th maxWidth="350px">Descrição</Th>
          <Th>Quantidade</Th>
          <Th>Valor Unitário</Th>
          <Th>Valor Total</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((file) => (
          <Tr key={file.nr_empenho}>
            <Td  maxWidth="350px" whiteSpace="normal" wordBreak="break-word">{file.desc_item}</Td>
            <Td>{file.qtde}</Td>
            <Td>{moneyFormatter(parseFloat(file.valor_unit))}</Td>
            <Td>{moneyFormatter((file.qtde) * parseFloat(file.valor_unit))}</Td>


            
            
            
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  );
};

export default ItensEmpenho;
