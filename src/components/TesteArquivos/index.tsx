// Defina um tipo para a estrutura de cada arquivo
type Arquivo = {
    pk: string;
    nome: string;
    area?: string | null;
    descricao: string;
    file: string;
    created_at: string;
  };
  
  // Defina um tipo para a resposta completa da API

  
  // Agora, ajuste o componente React usando essas tipagens
  import React, { useEffect, useState } from 'react';
  
  const ConcursoList: React.FC = () => {
    const [arquivos, setArquivos] = useState<Arquivo[]>([]);
    const apiUrl = "https://dadosadm.mogidascruzes.sp.gov.br";
  
    useEffect(() => {
        
        fetch(`${apiUrl}/api/arquivos/`)
        .then(response =>response.json())
        .then(data =>{
          setArquivos(data.results)
        })
      }, []);
  
    return (
        <div>
          <h2>Lista de Arquivos</h2>
          <ul>
            {arquivos.length > 0 ? (
              arquivos.map((arquivo) => (
                <li key={arquivo.pk}>
                  <strong>{arquivo.pk}</strong> 
                  <a href={`${apiUrl}${arquivo.file}`} download target="_blank">
                    Download do Arquivo
                  </a>
                </li>
              ))
            ) : (
              <p>Carregando arquivos...</p>
            )}
          </ul>
        </div>
      );
  };
  
  export default ConcursoList;
  