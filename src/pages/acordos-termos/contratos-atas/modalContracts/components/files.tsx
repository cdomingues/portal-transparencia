import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { RowDetails, TColumn } from "../../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";

interface Arquivo {
  id: string;
  arquivo: string;
  id_contrato_id: string;
}

const Files = ({ contract }: any) => {
  const [arquivos, setArquivos] = useState<Arquivo[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchArquivos(url: string) {
      try {
        let currentUrl = url;
        let allArquivos: any[] | ((prevState: Arquivo[]) => Arquivo[]) = [];

        while (currentUrl) {
          const response = await fetch(currentUrl);
          const data = await response.json();
          allArquivos = [...allArquivos, ...data.results];
          currentUrl = data.next;  // URL of the next page, if any
        }

        setArquivos(allArquivos);
      } catch (error) {
        console.error('Erro ao buscar arquivos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchArquivos('https://dadosadm.mogidascruzes.sp.gov.br/');
  }, []);

  const arquivosFiltrados = arquivos.filter(arquivo => arquivo.id_contrato_id === contract.id_contrato);

  return (
    <div style={{ overflowX: "auto" }}>
      <RowDetails>
        <div className="column">
          <div className="title">Processo: </div>
          <div className="value">{contract?.processo}</div>
        </div>
        <br /></RowDetails>
        {arquivosFiltrados.map(file => (
          <RowDetails>
          <div key={file.id} className="column">
            <div className="title">Arquivo:</div>
            <div className="value"> {file.arquivo.split('/').pop()} -
              <a
                href={file.arquivo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#185DA6', fontWeight: 'normal', textDecoration: 'none' }}
              >
                Download
              </a>
            </div>
            <br />
          </div></RowDetails>
        ))}
      
    </div>
  );
};

export default Files;
