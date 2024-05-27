import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { RowDetails, TColumn } from "../../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";

export interface ArquivoContrato {
  id: number;
  arquivo: string;
  nome: string;
  id_contrato_id: number | null;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ArquivoContrato[];
}

const Files = ({ contract }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ArquivoContrato[]>([]);

  useEffect(() => {
    fetchAllData(1);
  }, []);

  const fetchAllData = async (page: number) => {
    setLoading(true);
    try {
      let currentPage = page;
      let hasMore = true;

      while (hasMore) {
        const response = await fetch(`https://dadosadm.mogidascruzes.sp.gov.br/api/arquivos_contratos_atas?page=${currentPage}`);
        const result: ApiResponse = await response.json();
        setData((prevData) => [...prevData, ...result.results]);

        if (result.next) {
          currentPage++;
        } else {
          hasMore = false;
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('Contract ID:', contract?.id_contrato);
  console.log('Data:', data);

  const filteredData = data.filter(file => {
    console.log('Comparing:', file.id_contrato_id, contract?.id_contrato);
    return file.id_contrato_id === contract?.id_contrato;
  });

  console.log('Filtered Data:', filteredData);

  return (
    <div style={{ overflowX: "auto" }}>
      <RowDetails>
        <div className="column">
          <div className="title">Processo: </div>
          <div className="value">{contract?.processo} - {contract?.id_contrato}</div>
        </div>
        <br />
      </RowDetails>
      {filteredData.length === 0 ? (
        <div>Sem arquivos para esse contrato</div>
      ) : (
        filteredData.map(file => (
          <RowDetails key={file.id}>
            <div className="column">
              <div className="title">Arquivo:</div>
              <div className="value">
                {file.nome} -
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
            </div>
          </RowDetails>
        ))
      )}
    </div>
  );
};

export default Files;
