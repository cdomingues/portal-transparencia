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
        const response = await fetch( `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivo_diarias?nr_empenho=${contract.nr_empenho}&exercicio_empenho=${contract.exercicio_empenho}` );
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

  
    
  

  if (data.length === 0) {
    return <p>Sem arquivos para esse empenho.</p>;
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          
        </Thead>
        <Tbody>
          <Tr>Arquivos</Tr>
          {data.map((file) => (
            <Tr key={file.id}>
              
              <div className="title">{file.descricao}</div>
              <Td><div className="value">
                <a href={file.arquivo} download target="blank" rel="noopener noreferrer"  style={{ color: '#185DA6', fontWeight: 'normal', textDecoration: 'none' }}>
                  Download
                </a></div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Files;
