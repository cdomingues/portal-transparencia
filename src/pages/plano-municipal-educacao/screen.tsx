/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import { Box, Icon, Select, Stack, useColorModeValue, Text } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import useWindowDimensions from "../../utils/getWindowSize";
import { isMobile } from "react-device-detect";
import publicacoes_educacao from '../../../data/publicacoes_educacao.json';
import HTMLReactParser from 'html-react-parser'
import { select } from "d3";
import { AiOutlineDownload } from "react-icons/ai";


 /* type  Publicacao = {
  id: number;
  volume: string;
  publicationDate: string;
  description: string;
  src: string;
  cover: string;
  createdAt: string;
  updatedAt: string;
  magazineId: number;
  order: number;

}  */

export const contentOtherInformations = {
  titlePage: "Plano Municipal de Educação",
  description:
    "O Plano Municipal de Educação (PME) é um documento referência para aqueles que atuam direta ou indiretamente na Educação do Município, elaborado em parceria entre o Poder Público Municipal e o Conselho Municipal de Educação. Constituiu subsídios para a preparação desse documento vários estudos, pesquisas, avaliações internas e externas, contatos, reuniões de posicionamento e tomadas de decisão, consultas, enfim, um conjunto de medidas que contemplassem as expectativas, os anseios e as necessidades dos envolvidos. Em cumprimento ao art. 204 da Lei Orgânica do Município, o PME possui vigência por 02 (dois) anos.",
};




function Screen(PropsInput: any) {
  
  const title = contentOtherInformations?.titlePage;
  const description = contentOtherInformations?.description;
  const accessibility = useFontSizeAccessibilityContext();
  const { height, width } = useWindowDimensions();
  const [publicacao,setPublicacao] =useState<string>('');
  
  const selectedPublication = publicacoes_educacao.find(
    (info) => info.volume === publicacao
  );
    
          
                
              


 /* const [publicacao, setPublicacao] = useState<Publicacao[]>([])

   useEffect(()=>{
    fetch(publicacoes_educacao)
    .then(response =>response.json()) 
    .then(data =>{setPublicacao(data) })
  },[])    */
  
 

  return (
    
    <ContainerBasic title={title} description={description}>
       <Box
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="2xl"
          padding={"15px"}
          rounded="md"
          overflow="hidden"
          maxWidth="100%"
          borderRadius="18px"
          marginBottom="15px"
          
        >
       
      

      <Box display="flex" alignContent="center" flexDirection={isMobile ?  "column" : "column"}>
      
      <Select 
      minW={90}
      width="45%"
      bg={useColorModeValue("white", "gray.800")  }     
      onChange={ev => setPublicacao(ev.target.value  )}     
      >
      {publicacoes_educacao.map((info)=>(
        <option value={info.volume}>{info.volume}</option>
      ))}
    </Select>
      
        </Box>
        
        {selectedPublication && (

          
          <div>
            <a href={selectedPublication.src} target="_blank">
             <Stack
             marginTop={5}
          direction="row"
          
          color={ 'gray'}
          p={2}
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: 'gray.200' }}
          //onClick={() => handleClick(law.link, index)}
        >
          <Icon as={AiOutlineDownload} />
          
          <Text fontSize={accessibility?.fonts?.medium}>{HTMLReactParser(selectedPublication.description)}</Text>
          
        </Stack></a>
          </div>
        )}
       
       </Box>
    </ContainerBasic>
    
  );
}

export default Screen;