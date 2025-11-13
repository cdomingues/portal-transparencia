import { useColorModeValue, Box , Text, Select, Icon, Stack, Link, Divider} from "@chakra-ui/react";
import React, { useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicacoes_saude from '../../../../data/publicacoes_saude.json';
import { isMobile } from "react-device-detect";
import { AiOutlineDownload } from "react-icons/ai";
import HTMLReactParser from "html-react-parser";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import colors from "../../../styles/colors";
import usePagina from '../../../hooks/usePagina';

function Screen() {
  
  const [publicacao,setPublicacao] =useState<string>('');
  const accessibility = useFontSizeAccessibilityContext();
  
  const selectedPublication = publicacoes_saude.find(
    (info) => info.volume === publicacao
  );

  const {paginaData, loadings, error} = usePagina("53");
  
    if (loadings) {
          return <Text>Carregando conteúdo...</Text>;
        }
      
       if (error) {
        return <Text>Erro ao carregar página: {(error as Error).message}</Text>;
      }
      
        if (!paginaData) {
          return <Text>Página não encontrada</Text>;
        }
      
        const { titulo: titlePage, descricao: description, conteudo } = paginaData;
  

  return (
    <ContainerBasic title={titlePage} description={description}>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
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
          bg={useColorModeValue("white", "gray.800")}
          onChange={ev => setPublicacao(ev.target.value)}
          mb={4}
          border={`1px solid ${useColorModeValue(colors.transparenciaBlack, "gray.600")}`}
          _focus={`1px solid ${useColorModeValue(colors.transparenciaBlack, "gray.600")}`}
        >
          <option value="">Selecione</option>
          {publicacoes_saude.map((info) => (
            // eslint-disable-next-line react/jsx-key
            <option key={info.id} value={info.volume}>{info.volume}</option>
          ))}
        </Select>
      
        </Box>
        {selectedPublication && (

          
<Box borderRadius="md"
           mb='12px'
           maxW="45%"
          p={2}
          _hover={{ bg: 'gray.200' }}
          border='1px solid black'> 
<a href={selectedPublication.src} target="_blank">
   <Stack
   marginTop={5}
direction="row"

color={ 'gray'}
p={1}
borderRadius="md"
cursor="pointer"
_hover={{ bg: 'gray.200' }}
//onClick={() => handleClick(law.link, index)}
>
<Icon as={AiOutlineDownload} />
<p>{HTMLReactParser(selectedPublication.description)}</p>

</Stack>
</a>
</Box>
)}
<Divider pt="30px"/>

{conteudo && (
    <Box
      dangerouslySetInnerHTML={{ __html: conteudo }}
      sx={{
        p: { mb: 2, textAlign: "justify" },
        
      }}
    />
  )} 
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
