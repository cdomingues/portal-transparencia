import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../database2";
import { useEffect, useState } from "react";
import knex from "knex";
import concursos from '../../../data/con_concurso.json';
import arquivos_concursos from '../../../data/con_arquivos.json';
import { useColorModeValue,Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Collapse, Divider, Link, Popover, PopoverTrigger, Stack, Flex, Spacer } from "@chakra-ui/react";
import React from "react";



const statusTextMapping = new Map([
  [1, 'Inscrições Abertas'],
  [4, 'Encerrado'],
  [3, 'Homologado'],
  [2, 'Em Andamento'],
]);



const CardConcurso = ()=>{
  
  

  return (
<>
<h1>Concursos</h1>
    <Accordion allowToggle>
      
    {concursos.data.map((info) => (
      <AccordionItem key={info.id}
      bg={useColorModeValue("gray.100", "gray.800")}
      pt={4}
      >
        <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        {info.titulo}
        
        </Box>
        <Box marginRight="8px">{statusTextMapping.get(info.status)}</Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
     
    
    
    <AccordionPanel pb={4} pt={8} bg={"white"}>
    
    
    {info.status === 1 && (
      <Link  href={info.link_inscricao} target="_blank">
        Link de Inscrição
      </Link>
      
    )}
     
    {arquivos_concursos.data
      .filter((arquivo) => arquivo.id_concurso === info.id)
      .map((item) => (
        <Flex key={item.id_concurso}  >
          <Box >{item.data}<br/></Box>
          <Spacer />
         <Box  >
         <Link href={`https://wwwtrans.mogidascruzes.sp.gov.br/docs/${item.nome_arquivo}`} target="_blank"  overflow="hidden" textOverflow="ellipsis" maxW="200px">
          {item.titulo}
          </Link><p/>
          </Box>
          
          
          <br/>
        </Flex>
      ))}
    </AccordionPanel>
  </AccordionItem>))}
       
    </Accordion>
   
      </>
  );

}

export default CardConcurso