import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Definição do tipo para as construções
interface Building {
  status: string;
  [key: string]: any; // Caso existam outras propriedades que não estamos usando no momento
}

interface ApiResponse {
  results: Building[];
  next: string | null;
}

const ConstructionStatusChecker = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [file, setFile] = useState<ApiResponse>({ results: [], next: null });
  const [isLoading, setIsLoading] = useState(false);
  const [existeParalisado, setExisteParalisado] = useState(false);
  const date = new Date();
  const dia = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const ano = date.getFullYear();
  
  const dataFormatada = `${dia}/${mes}/${ano}`;

  const getFileOfConstructions = async (currentPage: number) => {
    for (let i = currentPage; i <= currentPage + 2; i++) {
      const response = await fetch(
        `https://dadosadm.mogidascruzes.sp.gov.br/api/obras/?page=${i}`,
        {
          headers: {
            "Authorization": "Token 691239ed466fd053651a57ac9c075f0d80c25cdd"
          }
        }
      );

      const data: ApiResponse = await response.json();

      if (!data) {
        return;
      }

      // Update hasNextPage based on whether 'next' field is null in API response
      setHasNextPage(data.next !== null);

      // Update current page
      setCurrentPage(i);

      // Append new results to existing file or initialize if it's null
      setFile(prevFile => ({
        ...data,
        results: prevFile ? [...prevFile.results, ...data.results] : data.results,
      }));

      if (!data.next) break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await getFileOfConstructions(currentPage);
      setIsLoading(false);
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    if (file && Array.isArray(file.results) && file.results.length > 0) {
      const existeParalisado = file.results.some(building => building.status === "99 - PARALISADO");
      setExisteParalisado(existeParalisado);
    }
  }, [file]);

  return (
    <div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          
          {existeParalisado ? (
             <p>  O município de Mogi das Cruzes na data {dataFormatada}  possui obras paralisadas, que podem ser conferidas em <Link href="https://paineldeobras.tce.sp.gov.br/pentaho/api/repos/:public:Obra:painel_obras.wcdf/generatedContent?userid=anony&password=zero" target="blank" style={{ color: "#db334f" }}>
             painel de obras do TCE SP
           </Link>.</p>
          ) :(
            <p>  O município de Mogi das Cruzes na data {dataFormatada} não possui obras paralisadas, em conformidade com o <Link href="https://paineldeobras.tce.sp.gov.br/pentaho/api/repos/:public:Obra:painel_obras.wcdf/generatedContent?userid=anony&password=zero" target="blank" style={{ color: "#db334f" }}>
            painel de obras do TCE SP
          </Link>.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ConstructionStatusChecker;
