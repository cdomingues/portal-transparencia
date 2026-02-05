import { Box, Button, Icon, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { AiOutlineDownload } from 'react-icons/ai';
import colors from '../../styles/colors';

type Arquivo = {
  ano: any;
  pk: string;
  nome: string;
  area?: string | null;
  descricao: string;
  file: string;
  created_at: string;
  tipo: number;
  cadastro: string;
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
  const [selectedYear, setSelectedYear] = useState<number| null>(2026);
  const filtro = tipoFiltro
  const apiUrl = "https://dadosadm.mogidascruzes.sp.gov.br"
  const url = `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivos/?page_size=100&file_type=${filtro}`
               
  
  //const count = "page_size=100" 

  const fetchData = async () => {
  let page = 1;
  let hasNext = true;
  const allResults: Arquivo[] = [];

  try {
    while (hasNext) {
      const response = await fetch(
        `${apiUrl}/api/arquivos/?file_type=${tipoFiltro}&page=${page}`
      );

      if (!response.ok) break;

      const data = await response.json();

      allResults.push(...data.results);

      if (data.next) {
        page++;
      } else {
        hasNext = false;
      }
    }

    setArquivos(allResults);
  } catch (error) {
    console.error("Erro ao buscar arquivos:", error);
  }
};

  
  useEffect(() => {
    if (nextPage !== null) {
      fetchData();
    }
  }, [nextPage, tipoFiltro]);
  
  const dataMaisAtual = arquivos.reduce((maisRecente, item) => {
    const dataItem = new Date(item.cadastro);
    const dataAtualMaisRecente = new Date(maisRecente.cadastro);
    return dataItem > dataAtualMaisRecente ? item : maisRecente;
  }, arquivos[0]);
const ultimaAtualizacao = dataMaisAtual ? new Date(dataMaisAtual.cadastro).toLocaleDateString('pt-BR') : '';

  return (
    <Box display="flex" alignContent="center" flexDirection={isMobile ?  "column" : "column"}>
      
      {/*  <Select
       _hover={{
        boxShadow: "xl",
        transform: "scale(1.01)",
        border: `2px solid ${colors.primaryDefault40p}`,
      }}
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
  </Select> */}

<Menu>
  <MenuButton as={Button}  maxW="200px" bgColor={colors.transparenciaCinza}>
    {selectedYear || "Todos os Anos"}
  </MenuButton>
  <MenuList>
    <MenuItem onClick={() => setSelectedYear(null)}>Todos os Anos</MenuItem>
    {Array.from(new Set(arquivos.map((arquivo) => arquivo.ano)))
      .sort((a, b) => b - a)
      .map((year) => (
        <MenuItem 
          key={year} 
          onClick={() => setSelectedYear(year)}
          _hover={{ bg: colors.grayLight }} // Estilo no hover
        >
          {year}
        </MenuItem>
      ))}
  </MenuList>
</Menu>
  
  {arquivos
        .filter((arquivo) =>
        selectedYear ? arquivo.ano === selectedYear : true
      )
        .sort((a, b) => new Date(a.cadastro).getTime() - new Date(b.cadastro).getTime()).map((arquivo, index) => (
          //<Link href={`${apiUrl}${arquivo.file}`} download target="_blank"  >
          <Box 
          key={arquivo.pk}
          marginTop={5}
          flexDirection="row"
          maxW="700px"
        //  width='400px'
         // color={ 'black'}
          p={4}
          borderRadius="md"
          //cursor="pointer"
          //_hover={{ bg: 'gray.200', color: 'black' }}
          border='1px solid black'
         // onClick={() => window.open(`${apiUrl}${arquivo.file}`, '_blank')}
         //cursor='pointer'
         
          ><strong>
            <p>
              <a href={`${apiUrl}${arquivo.file}`} target='_blank'>
              {arquivo.nome} - {arquivo.ano}
              </a> 
              </p> </strong>
             
              <p dangerouslySetInnerHTML={{ __html: arquivo.descricao }}></p>
           
           
          
            
          </Box>
        ))}
      
    </Box>
  );
};

export default FilesList;