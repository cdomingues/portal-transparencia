import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { RowDetails, TColumn } from "../../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";

export interface ArquivoContrato {
  id: number;
  arquivo: string;
  nome: string;
  id_contrato: number | null;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ArquivoContrato[];
}

const Files = ({ contract }: any) => {
  const [loading, setLoading] = useState(true);
  const [arquivo, setArquivo] = useState<ArquivoContrato[]>([]);
 
  useEffect(() => {
      if (!contract.id_contrato) return;
      fetch(`https://dadosadm.mogidascruzes.sp.gov.br/api/arquivos_contratos_atas?id_contrato_id=${contract.id_contrato}`) // ✅ Corrigida a URL para arquivos
        .then((response) => response.json())
        .then((data) => {
          if (data.results && Array.isArray(data.results)) {
            setArquivo(data.results);
          } else {
            setArquivo([]);
          }
        })
        .catch((error) => console.error("Erro ao buscar arquivos:", error));
    }, [contract.id_contrato]);
 // console.log('Contract ID:', contract?.id_contrato);
  //console.log('Data:', data);

  const filteredData = arquivo.filter(file => {
    //console.log('Comparing:', file.id_contrato_id, contract?.id_contrato);
    return file.id_contrato === contract?.id_contrato;
  });

  //console.log('Filtered Data:', filteredData);

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
