import { RowDetails } from "../../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";
import moment from "moment";

export interface ArquivoLicitacao {
  id: number;
  tabela: string;
  id_licitacao: number;
  data: string;
  descricao: string;
  complemento: string;
}

export interface Arquivo {
  id: number;
  id_tabela: number;
  descricao_arquivo: string;
}

const Ocorrencias = ({ contract }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ArquivoLicitacao[]>([]);
  const [arquivos, setArquivos] = useState<Arquivo[]>([]); // Novo estado para armazenar os arquivos

  useEffect(() => {
    const fetchArquivosLicitaco = async () => {
      try {
        const response = await fetch(`https://dadosadm.mogidascruzes.sp.gov.br/api/ocorrencias/?id_licitacao=${contract.id}`);
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        const data = await response.json();
        setData(data.results);

        // Agora, para cada ocorrência, fazemos a chamada para buscar os arquivos
        data.results.forEach(async (file: ArquivoLicitacao) => {
          const arquivoResponse = await fetch(`https://dadosadm.mogidascruzes.sp.gov.br/api/licitacoes-arquivos/?id_tabela=${file.id}`);
          if (arquivoResponse.ok) {
            const arquivosData = await arquivoResponse.json();
            setArquivos(prevArquivos => [...prevArquivos, ...arquivosData.results]);
          }
        });
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchArquivosLicitaco();
  }, [contract.id]);

  const filteredData = data.filter(file => file.id_licitacao === contract?.id);

  return (
    <div style={{ overflowX: "auto" }}>
      {filteredData.length === 0 ? (
        <div>Sem ocorrências para essa licitação</div>
      ) : (
        <>
          {/* Cabeçalhos */}
          <RowDetails>
            <div className="column">
              <strong>Data</strong> - <strong>Descrição</strong> - <strong>Complemento</strong> - <strong>Arquivo</strong>
            </div>
          </RowDetails>

          {/* Dados */}
          {filteredData.map(file => (
            <RowDetails key={file.id}>
              <div className="column">
                 
                <div className="value">{moment(file.data).format("DD/MM/YYYY")}</div> - 
                <div className="value">{file.descricao}</div> - 
                <div className="value">{file.complemento}</div>
                <br />
                
                {/* Verificar e mostrar os arquivos correspondentes ao id_tabela da ocorrência */}
                {arquivos
                  .filter(arquivo => arquivo.id_tabela === file.id) // Filtrar arquivos por id_tabela
                  .map(arquivo => (
                    <div key={arquivo.id}>
                      <a href={`https://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download?id=${arquivo.id}`} target="_blank" rel="noopener noreferrer" style={{ color: '#185DA6', fontWeight: 'normal', textDecoration: 'none' }}>
                        Baixar {arquivo.descricao_arquivo}
                      </a>
                    </div>
                ))}
              </div>
            </RowDetails>
          ))}
        </>
      )}
    </div>
  );
};

export default Ocorrencias;
