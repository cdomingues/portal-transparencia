import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RowDetails, TColumn } from "../../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";
import moneyFormatter from "../../../../../utils/moneyFormatter";
import moment from "moment";

export interface Arquivo {
  nr_empenho: number;
  exercicio_empenho: string;
  data_emissao_nf: string;
  vencimento: string;
  tipo_documento: string;
  valor_documento: string
  


}

const Documentos = ({ contract }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Arquivo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( `https://dadosadm.mogidascruzes.sp.gov.br/api/documentos_despesas/?nr_empenho=${contract.nr_empenho}&exercicio_empenho=${contract.exercicio_empenho}` );
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
          <Th>Emissão</Th>
          <Th>Vencimento:</Th>
          <Th>Documento</Th>
          <Th>Valor </Th>
                  </Tr>
      </Thead>
      <Tbody>
        {data.map((file) => (
          <Tr key={file.nr_empenho}>
            <Td>{moment(file.data_emissao_nf).format("DD/MM/YYYY")}</Td>
            <Td>{moment(file.vencimento).format("DD/MM/YYYY")}</Td>
            <Td>{file.tipo_documento}</Td>
            <Td>{moneyFormatter(parseFloat(file.valor_documento))}</Td>
            
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  );
};

export default Documentos;
