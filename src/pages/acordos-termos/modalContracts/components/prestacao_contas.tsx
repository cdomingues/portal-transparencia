import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { RowDetails } from "../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";

interface PrestacaoContasItem {
  id: number;
  arquivo: string;
  acordo_id: number;
}

interface Arquivo {
  id: number;
  arquivo: string;
  acordo_id: number;
}

interface Acordo {
  id: number;
  arquivos: Arquivo[];
}

const PrestacaoContas = ({ termo }: { termo: Acordo }) => {
  const [data, setData] = useState<PrestacaoContasItem[]>([]);
  console.log("Termo recebido:", termo);

  useEffect(() => {
    const fetchArquivosPrestacaoContas = async () => {
      try {
        const response = await fetch(`https://dadosadm.mogidascruzes.sp.gov.br/api/prestacao_contas?acordo_id=${termo.id}`);
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

    fetchArquivosPrestacaoContas();
  }, []);

  // Filtrar os itens de prestação de contas com base no id do termo
  const arquivosFiltrados = data.filter((item) => item.acordo_id === termo.id);

  return (
    <div style={{ overflowX: "auto" }}>
      
        {arquivosFiltrados.length > 0 ? (
          <>
                {arquivosFiltrados.map(arquivo => (
                  <RowDetails>
  <div key={arquivo.id} style={{ marginBottom: '10px' }}>
   
    <div className="row">
     
      <div className="value" style={{ marginLeft: '10px' }}>
        {arquivo.arquivo.split('/').pop()} - 
        <a
          href={arquivo.arquivo}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#185DA6', fontWeight: 'normal', textDecoration: 'none', marginLeft: '5px' }}
        >
          Download
        </a>
      </div>
    </div>
  </div></RowDetails>
))}
              
              </>
          
        ) : (
          <p>Nenhum arquivo de prestação de contas encontrado para este termo ou acordo.</p>
        )}
      
    </div>
  );
};

export default PrestacaoContas;
