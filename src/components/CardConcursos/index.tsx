import moment from "moment";
//import type { NextApiRequest, NextApiResponse } from "next";

import { useEffect, useState } from "react";
import { useColorModeValue,Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Collapse, Divider, Link, Popover, PopoverTrigger, Stack, Flex, Spacer,Text, Select, Center } from "@chakra-ui/react";
import React from "react";
import { useFontSizeAccessibilityContext } from  '../../context/fontSizeAccessibility'

import { isMobile } from "react-device-detect";


const statusTextMapping = new Map([
  [1, 'Inscrições Abertas'],
  [4, 'Encerrado'],
  [3, 'Homologado'],
  [2, 'Em Andamento'],
]);



const CardConcurso = ()=>{
  
  const accessibility = useFontSizeAccessibilityContext();
 
  const statusDisponiveis = Array.from(statusTextMapping.values());


const [filtroAno, setFiltroAno] = useState('');
const [filtroStatus, setFiltroStatus] = useState('');
const [concursos, setConcursos] = useState<Concurso[]>([]); 
const [arquivosConcursos, setArquivosConcursos] = useState<ArquivoConcurso[]>([]);


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
}

useEffect(() => {
  fetch("https://dadosadm.mogidascruzes.sp.gov.br/api/concursos/")
    .then((response) => response.json())
    .then((data) => setConcursos(data))
    .catch((error) => console.error("Error fetching concursos:", error));
}, []);

useEffect(() => {
  fetch("https://dadosadm.mogidascruzes.sp.gov.br/api/consurso-arquivos/")
    .then((response) => response.json())
    .then((data) => setArquivosConcursos(data))
    .catch((error) => console.error("Error fetching arquivos_concursos:", error));
}, []);
const anosDisponiveis=  Array.from(new Set(concursos.map((info) => new Date(info.data).getFullYear())));


  return (
    
<>
  <Text
    align={isMobile ? "justify" : "left"}
    fontWeight="700"
    fontSize={accessibility?.fonts?.regular}
  >Lista de Concursos</Text>
  <Box style={{ display: 'flex', gap: '10px' }} pb={5} >

  <Text pt={2}>Filtrar por ano: </Text>
    <Select
      id="anoSelect"
      value={filtroAno}
      onChange={(e) => setFiltroAno(e.target.value)}
      w="20%"
      
    >
      <option value="">Todos</option>
      {anosDisponiveis.sort((a, b) => b -a ) .map((ano) => (
        <option key={ano} value={ano}>
          {ano}
        </option>
      ))}
    </Select>

    <Text pt={2} >Filtrar por status: </Text>
    <Select
      id="statusSelect"
      value={filtroStatus}
      onChange={(e) => setFiltroStatus(e.target.value)}
      w="20%"
      
    >
      <option value="">Todos</option>
      {statusDisponiveis.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </Select>
  </Box>



    <Accordion allowToggle borderRadius={4}>
      
    {concursos
      .filter(
        (info) =>
          (!filtroAno || new Date(info.data).getFullYear() === parseInt(filtroAno, 10)) &&
          (!filtroStatus || statusTextMapping.get(info.status) === filtroStatus)
      )
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
    
    
    {info.status === 1 && (
     
     <>
        <Button fontSize={accessibility?.fonts?.regular} 
        onClick={() =>
          window.open(info.link_inscricao, '_blank')
        }
        mb={4}
        >Link para Inscrição</Button>
      
      </>
    )}
     
     {arquivosConcursos
      .filter((arquivo) => arquivo.id_concurso === info.id)
      .sort((a, b) =>   b.id - a.id)
      .map((item) => (
        
       <Flex key={item.id_concurso}   >
          <Box flex="end" p={2} marginRight={5}>
          {new Date(item.data).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })}
            <br/></Box>
         
         <Box  maxWidth="100%"  p={2}>
         <Link href={`https://wwwtrans.mogidascruzes.sp.gov.br/docs/${item.nome_arquivo}`} target="_blank"  >
          {item.titulo}
          </Link><p/>
          
          </Box>
                  
          
        </Flex>
        
      ))}
    </AccordionPanel>
  </AccordionItem>))}
       
    </Accordion>

    {/* <Box>
      <Text fontWeight="700">Outros Arquivos</Text>
      {arquivosConcursos
        .filter((arquivo) => arquivo.id_concurso === 0)
        .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
        .map((item) => (
          <Flex key={item.id} my={2}>
            <Box p={2} marginRight={5}>
              {new Date(item.data).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </Box>
            <Box maxWidth="100%" p={2}>
              <Link
                href={`https://wwwtrans.mogidascruzes.sp.gov.br/docs/${item.nome_arquivo}`}
                target="_blank"
              >
                {item.titulo ? item.titulo : item.nome_arquivo}
              </Link>
            </Box>
          </Flex>
        ))}
    </Box> */}
   
      </>
  );

}

export default CardConcurso