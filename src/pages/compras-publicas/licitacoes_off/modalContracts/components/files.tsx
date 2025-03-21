import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { RowDetails, TColumn } from "../../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";

export interface ArquivoLicitacao {
  id: number;
  tabela: string;
  id_tabela: number;
  data: string;
  descricao: string;
  nome: string;
  arquivod: string ;
  arquivo: string | null;
  DownloadAcesso: string;
}

const Files = ({ contract }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ArquivoLicitacao[]>([]);

  useEffect(() => {
    const fetchArquivosLicitaco = async () => {
      try {
        const response = await fetch(`https://dadosadm.mogidascruzes.sp.gov.br/api/licitacoes-arquivos/?id_tabela=${contract.id}`);
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

    fetchArquivosLicitaco();
  }, []);

 

  const filteredData = data.filter(file => {
    
    return file.id_tabela === contract?.id;
  });

  //console.log('Filtered Data:', filteredData);

  return (
    <div style={{ overflowX: "auto" }}>
      
      {filteredData.length === 0 ? (
  <div>Sem arquivos para essa licitação</div>
) : (
  filteredData
    .filter(file => file.tabela === 'LICITACAO') // Filtra apenas quando a tabela for 'licitação'
    .map(file => (
      <RowDetails key={file.id}>
        <div className="column">
          <div className="title">Arquivo:</div>
          <div className="value">
            {file.descricao} -
            <a
              href={`https://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download?id=${file.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#185DA6', fontWeight: 'normal', textDecoration: 'none' }}
            >
              Download
            </a>
          </div>
          <br />
        </div>
      </RowDetails>
    ))
)}
    </div>
  );
};

export default Files;
