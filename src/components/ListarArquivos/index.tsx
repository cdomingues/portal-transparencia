import { Box, Icon, Select, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { AiOutlineDownload } from 'react-icons/ai';

type Arquivo = {
  ano: any;
  pk: string;
  nome: string;
  area?: string | null;
  descricao: string;
  file: string;
  created_at: string;
  tipo: number;
};

type ApiResponse = {
  results: Arquivo[];
  next: string | null;
};

interface FilesListProps {
  tipoFiltro: number; 
}

const FilesList: React.FC<FilesListProps> = ({ tipoFiltro }) => {
  const [arquivos, setArquivos] = useState<Arquivo[]>([]);
  const [nextPage, setNextPage] = useState<number | null>(1); // Inicializado em 1
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const filtro = tipoFiltro
  const apiUrl = "https://dadosadm.mogidascruzes.sp.gov.br"
  const url = `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivos/?page_size=100&file_type=${filtro}`
               
  
  //const count = "page_size=100" 

  const fetchData = async (url: RequestInfo | URL) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.next !== null) {
        setNextPage((prevPage) => (prevPage !== null ? prevPage + 1 : null));
      } else {
        setNextPage(null);
      }

      // Filtre os resultados se necessário
      const filteredResults = data.results.filter((arquivo: { ano: number; }) =>
        selectedYear ? arquivo.ano === selectedYear : true
      );

      // Atualize o estado arquivos usando a função de espalhamento para preservar os dados anteriores
      setArquivos((prevArquivos) => [...prevArquivos, ...filteredResults]);

      if (data.next !== null) {
        await fetchData(data.next);
      }
    } catch (error) {
      console.error('Erro ao obter os arquivos:', error);
    }
  };

  useEffect(() => {
    if (nextPage !== null) {
      const initialUrl = `${apiUrl}/api/arquivos/?page=${nextPage}&file_type=${tipoFiltro}`;
      fetchData(initialUrl);
    }
  }, [nextPage, tipoFiltro]);

  return (
    <Box display="flex" alignContent="center" flexDirection={isMobile ?  "column" : "column"}>
      
       <Select
       maxW="200px"
    id="yearSelect"
    onChange={(e) => setSelectedYear(Number(e.target.value))}
    value={selectedYear || ""}
  >
    <option value="">Todos os Anos</option>
    {Array.from(
      new Set(arquivos.map((arquivo) => arquivo.ano))
    )
    .sort((a, b) => b - a)
    .map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ))}
  </Select>
  
  {arquivos
        .filter((arquivo) =>
        selectedYear ? arquivo.ano === selectedYear : true
      )
        .sort().map((arquivo, index) => (
          <a href={`${apiUrl}${arquivo.file}`} download target="_blank" >
          <Stack 
          key={arquivo.pk}
          marginTop={5}
          direction="row"
          maxW="600px"

          color={ 'gray'}
          p={2}
          borderRadius="md"
          //cursor="pointer"
          _hover={{ bg: 'gray.200' }}
         
          >
            <p> {arquivo.nome} - {arquivo.ano}</p>
            
            <Icon as={AiOutlineDownload} />
            
          </Stack></a>
        ))}
      
    </Box>
  );
};

export default FilesList;