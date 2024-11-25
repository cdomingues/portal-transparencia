import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { RowDetails, TColumn } from "../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";

interface Acordo {
  id: string;
  arquivos: { id: string, arquivo: string }[];
}


const Files =  ({ termo }: any) =>

  
  {
    const [acordos, setAcordos] = useState<Acordo[]>([]);

useEffect(() => {
    async function fetchAcordos() {
      try {
        const response = await fetch('https://dadosadm.mogidascruzes.sp.gov.br/api/acordos');
        const data = await response.json();
        setAcordos(data);
      } catch (error) {
        console.error('Erro ao buscar acordos:', error);
      }
    }

    fetchAcordos();
  }, []);

  const acordosFiltrados = acordos.filter(acordo => acordo.id === termo.id);

    return (
      
      <div style={{ overflowX: "auto" }}>
      
      <RowDetails>
      {acordosFiltrados.map(acordo => (
          <div key={acordo.id}>
             <div className="column">
            <div className="title">Processo: </div>
            <div className="value">{termo?.processo}</div>
            </div><br/>


           
            
            <>
              {acordo.arquivos.map(arquivo => (
                <div key={arquivo.id}>
                  <div className="column">
                  <div className="title">Arquivo :  </div>
                  
                  <div className="value"> {arquivo.arquivo.split('/').pop()}  -
                  <a href={`https://dadosadm.mogidascruzes.sp.gov.br/${arquivo.arquivo}`} target="_blank" rel="noopener noreferrer" 
                  style={{ color: '#185DA6', fontWeight: 'normal', textDecoration: 'none' }}
                  
                  >
                  Download </a></div>
                 
                </div><br/></div>
              ))}
            </>
            
          </div>
        ))}
      </RowDetails>
    </div>
    
    );
};

export default Files;
