import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { RowDetails, TColumn } from "../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";

export interface Arquivo {
  id: string;
  created_at: string;
  updated_at: string;
  arquivo: string;
  descricao: string;
  despesa: string;
}

const Files = ({ contract }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Arquivo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivo_diarias?despesa=${contract.id}` );
        console.log(contract.id)
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

  
    return <p>..</p>;
  

  if (data.length === 0) {
    return <p>No files found for this contract.</p>;
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          
        </Thead>
        <Tbody>
          {data.map((file) => (
            <Tr key={file.id}>
              <Td>{file.id}</Td>
              <Td>{file.descricao}</Td>
              <Td>
                <a href={file.arquivo} download>
                  Download
                </a>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Files;
