import { Box, Icon, Select, Stack } from '@chakra-ui/react';
import Link from 'next/link';
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

  const fetchData = async () => {
    let currentPage = 1; // Começa na página inicial
    let hasMorePages = true;
  
    try {
      while (hasMorePages) {
        const response = await fetch(
          `${apiUrl}/api/arquivos/?page=${currentPage}&file_type=${tipoFiltro}`
        );
  
        if (!response.ok) {
          console.error(`Erro na requisição: ${response.status} - ${response.statusText}`);
          break;
        }
  
        const data = await response.json();
  
        // Filtrar os resultados conforme o ano selecionado
        const filteredResults = data.results.filter((arquivo: { ano: number }) =>
          selectedYear ? arquivo.ano === selectedYear : true
        );
  
        // Atualizar estado com novos dados
        setArquivos((prevArquivos) => [...prevArquivos, ...filteredResults]);
  
        // Verifica se há mais páginas
        if (data.next) {
          currentPage++; // Incrementa a página para a próxima iteração
        } else {
          hasMorePages = false; // Encerra o loop quando não houver próxima página
        }
      }
  
      // Reseta o estado da página para evitar reexecuções
      setNextPage(null);
    } catch (error) {
      console.error("Erro ao obter os arquivos:", error);
    }
  };
  
  useEffect(() => {
    if (nextPage !== null) {
      fetchData();
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
          //<Link href={`${apiUrl}${arquivo.file}`} download target="_blank"  >
          <Stack 
          key={arquivo.pk}
          marginTop={5}
          direction="row"
          maxW="500px"
        //  width='400px'
          color={ 'black'}
          p={4}
          borderRadius="md"
          //cursor="pointer"
          _hover={{ bg: 'gray.200' }}
          border='1px solid black'
          onClick={() => window.open(`${apiUrl}${arquivo.file}`, '_blank')}
         cursor='pointer'
          >
            <p> {arquivo.nome} - {arquivo.ano}</p>
            
            <Icon as={AiOutlineDownload} />
            
          </Stack>
        ))}
      
    </Box>
  );
};

export default FilesList;