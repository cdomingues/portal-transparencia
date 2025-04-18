/* eslint-disable react/jsx-key */
import { useColorModeValue, Box , Text, Select, Icon, Stack} from "@chakra-ui/react";
import React, { useState } from "react";
import { Laws } from ".";
import ContainerBasic from "../../../../components/Container/Basic";
import publicacoes_saude from '../../../../../data/publicacoes_saude.json';
import { isMobile } from "react-device-detect";
import { AiOutlineDownload } from "react-icons/ai";
import HTMLReactParser from "html-react-parser";

type PropsInput = {
  handler: {
    laws: Laws;
    handleSelectValue: (value: number) => void;
    selectOptions: Array<string | number>;
    selectValue: number;
  };
};

export const contentPROMAE = {
  titlePage: "Plano de Saúde do Municipio",
  description:
    "Divulga o plano de saúde, a programação anual e o relatório de gestão.",
};

function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;

  const title = contentPROMAE?.titlePage;
  const description = contentPROMAE?.description;
  const [publicacao,setPublicacao] =useState<string>('');
  
  const selectedPublication = publicacoes_saude.find(
    (info) => info.volume === publicacao
  );

  return (
    <ContainerBasic title={title} description={description}>
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
      bg={useColorModeValue("white", "gray.800")  }     
      onChange={ev => setPublicacao(ev.target.value  )}     
      >
      {publicacoes_saude.map((info)=>(
        <option key={info.id}  value={info.volume}>{info.volume}</option>
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
<p>{HTMLReactParser(selectedPublication.description)}</p>

</Stack>
</a>
</div>
)}
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
