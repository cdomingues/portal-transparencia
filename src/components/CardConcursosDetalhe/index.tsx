import moment from "moment";
//import type { NextApiRequest, NextApiResponse } from "next";

import { useEffect, useState } from "react";
import { useColorModeValue,Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Collapse, Divider, Link, Popover, PopoverTrigger, Stack, Flex, Spacer,Text, Select, Center, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import React from "react";
import { useFontSizeAccessibilityContext } from  '../../context/fontSizeAccessibility'

import { isMobile } from "react-device-detect";


const statusTextMapping = new Map([
  [1, 'Inscrições Abertas'],
  [4, 'Encerrado'],
  [3, 'Homologado'],
  [2, 'Em Andamento'],
]);

interface UrlConcurso  {
  url_concurso: string;
}


const CardConcurso: React.FC<UrlConcurso> = ({url_concurso})=>{
  
  const accessibility = useFontSizeAccessibilityContext();
 
  const statusDisponiveis = Array.from(statusTextMapping.values());


const [filtroAno, setFiltroAno] = useState('');
const [filtroStatus, setFiltroStatus] = useState('');
const [concursos, setConcursos] = useState<Concurso[]>([]); 
const [arquivosConcursos, setArquivosConcursos] = useState<ArquivoConcurso[]>([]);
const urlconcurso = url_concurso


interface Concurso {
  id: number;
  titulo: string;
  data: string; 
  status: number;
  link_inscricao: string;
}

interface ArquivoConcurso {
  id_concurso: number;
  id: number;
  data: string; 
  nome_arquivo: string;
  titulo: string;
  status:number;
  arquivo: string;
  id_tipo_arquivo: number;
}

interface InformacoesGerais{
  id: number;
  titulo: string;
  descricao: string;
  nome_arquivo: string;
  status: boolean;
  arquivo: string;
  data: string;
}

useEffect(() => {
  fetch(url_concurso)
    .then((response) => response.json())
    .then((data) => setConcursos(data))
    .catch((error) => console.error("Error fetching concursos:", error));
}, []);

useEffect(() => {
  fetch("https://dadosadm.mogidascruzes.sp.gov.br/api/lista_arquivo_concurso")
    .then((response) => response.json())
    .then((data) => setArquivosConcursos(data))
    .catch((error) => console.error("Error fetching arquivos_concursos:", error));
}, []);



const anosDisponiveis=  Array.from(new Set(concursos.map((info) => new Date(info.data).getFullYear())));
  let contador = 0

  return (
    
<>

  
  <Box style={{ display: 'flex', gap: '10px' }} pb={5} >

  </Box>

    <Accordion allowToggle borderRadius={4}>
      
    {concursos
      .filter(
        (info) =>
          (!filtroAno || new Date(info.data).getFullYear() === parseInt(filtroAno, 10)) &&
          (!filtroStatus || statusTextMapping.get(info.status) === filtroStatus)
      )
      .sort((a, b) =>b.id - a.id)      
    .map((info) => (
      <AccordionItem key={info.id}
      bg={"gray.100"}
      pt={4}
      >
        <h2>
      <AccordionButton >
        <Box as="span" flex='1' textAlign='left' >
      {info.titulo}
        
        </Box>
        <Box marginRight="8px">{statusTextMapping.get(info.status)}</Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
     
    
      
    <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
    
    
    {info.status === 1 &&  (
     
     <>
        <Button fontSize={accessibility?.fonts?.regular} 
        onClick={() =>
          window.open(info.link_inscricao, '_blank')
        }
        mb={4}
        >Link para Inscrição</Button>
      
      </>
    )}
     <Text fontWeight="700">Publicações</Text>
     {arquivosConcursos
      .filter((arquivo) => arquivo.id_concurso === info.id && arquivo.id_tipo_arquivo === 1 && arquivo.status ===1)
      .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())
      .map((item) => (
        
       <Flex key={item.id_concurso}   >
          <Box flex="end" p={2} marginRight={5}>
         {moment(item.data).format('DD/MM/YYYY')}
            <br/></Box>
         
         <Box  maxWidth="100%"  p={2}>
         <Link href={`https://dadosadm.mogidascruzes.sp.gov.br/${item.arquivo}`} target="_blank"  >
          {item.titulo}
          </Link><p/>
          
          </Box>
                  
          
        </Flex>
        
      ))}
      <Text pt="20px" fontWeight="700">Convocações</Text>
      {arquivosConcursos
      .filter((arquivo) => arquivo.id_concurso === info.id && arquivo.id_tipo_arquivo === 2  && arquivo.status ===1)
      .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())
      .map((item) => (
        
       <Flex key={item.id_concurso}   >
          <Box flex="end" p={2} marginRight={5}>
          {moment(item.data).format('DD/MM/YYYY')}
            <br/></Box>
         
         <Box  maxWidth="100%"  p={2}>
         <Link href={`https://dadosadm.mogidascruzes.sp.gov.br/${item.arquivo}`} target="_blank"  >
          {item.titulo}
          </Link><p/>
          
          </Box>
                  
          
        </Flex>
        
      ))}
     
    

    </AccordionPanel>
  </AccordionItem>))}
       
    </Accordion>
 


    
   
      </>
  );

}

export default CardConcurso