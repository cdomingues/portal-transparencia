import { useColorModeValue, Box , Text, Select, Icon, Stack, Link, Divider} from "@chakra-ui/react";
import React, { useState } from "react";

import ContainerBasic from "../../../components/Container/Basic";
import publicacoes_saude from '../../../../data/publicacoes_saude.json';
import { isMobile } from "react-device-detect";
import { AiOutlineDownload } from "react-icons/ai";
import HTMLReactParser from "html-react-parser";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";



export const contentPROMAE = {
  titlePage: "Plano Municipal de Saúde",
  description:
    "Divulga o plano de saúde, a programação anual e o relatório de gestão.",
};

function Screen() {
  

  const title = contentPROMAE?.titlePage;
  const description = contentPROMAE?.description;
  const [publicacao,setPublicacao] =useState<string>('');
  const accessibility = useFontSizeAccessibilityContext();
  
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
          bg={useColorModeValue("white", "gray.800")}
          onChange={ev => setPublicacao(ev.target.value)}
        >
          <option value="">Selecione</option>
          {publicacoes_saude.map((info) => (
            // eslint-disable-next-line react/jsx-key
            <option key={info.id} value={info.volume}>{info.volume}</option>
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
<Divider pt="30px"/>

<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.large}
                pt="20px"
                pb="20px"
              >
               Medicamentos
                
                
              </Text>

<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Acesse aqui o arquivo da lista de medicamentos vigente:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
               <Link href="https://www.mogidascruzes.sp.gov.br/public/site/doc/2023081009262064d4d76c414d0.pdf" target="_blank" style={{ color: "#db334f" }}>Relação Municipal de Medicamentos – REMUME – 2023</Link>
              

              </Text>

              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Programas da Prefeitura de Mogi das Cruzes:  
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
            Programa de Medicamento Gratuito    <Link href="https://www.mogidascruzes.sp.gov.br/servico/saude/programa-de-medicamento-gratuito" target="_blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/servico/saude/programa-de-medicamento-gratuito</Link>
              

              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
            Programa de Medicamento em Casa   <Link href="https://www.mogidascruzes.sp.gov.br/servico/todos-os-assuntos/programa-de-medicamento-em-casa" target="_blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/servico/todos-os-assuntos/programa-de-medicamento-em-casa</Link>
              

              </Text>

              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
            Fornecimento de Insumos de Enfermagem e Medicamentos para Acamados    <Link href="https://www.mogidascruzes.sp.gov.br/servico/todos-os-assuntos/fornecimento-de-insumos-de-enfermagem-e-medicamentos-para-acamados" target="_blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/servico/todos-os-assuntos/fornecimento-de-insumos-de-enfermagem-e-medicamentos-para-acamados</Link>
              

              </Text>


              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Programas do Estado de São Paulo    
                
                
              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >Medicamentos de Alto Custo </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
            Os medicamentos de Alto Custo são fornecidos pelo Governo do Estado de São Paulo por meio da Secretaria de Estado da Saúde. 

O guia de orientações ao paciente, está disponível no portal da Secretaria Estadual   <Link href="https://www.saude.sp.gov.br/" target="_blank" style={{ color: "#db334f" }}>https://www.saude.sp.gov.br/</Link>
              

              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
           Acesse aqui a lista por Componente Especializado da Assistência Farmacêutica (CEAF)     <Link href="https://www.saude.sp.gov.br/ses/perfil/gestor/assistencia-farmaceutica/medicamentos-dos-componentes-da-assistencia-farmaceutica/medicamentos-do-componente-especializado-da-assistencia-farmaceutica/" target="_blank" style={{ color: "#db334f" }}>Medicamentos do Componente Especializado da Assistência Farmacêutica</Link>
              

              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
           Acesse aqui a lista por Protocolos e Normas Técnicas Estaduais       <Link href="https://www.saude.sp.gov.br/ses/perfil/gestor/assistencia-farmaceutica/medicamentos-dos-protocolos-e-normas-tecnicas-estaduais/" target="_blank" style={{ color: "#db334f" }}>Medicamentos dos Protocolos e Normas Técnicas Estaduais</Link>
              

              </Text>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
