import React from "react";

//import { PublicPolicyData } from "../../api/totalizador/politicas-publicas";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Skeleton,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Button,
  Text,
  useColorModeValue,
  UnorderedList,

} from "@chakra-ui/react";

import { isMobile } from "react-device-detect";


import useWindowDimensions from "../../../utils/getWindowSize";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import noticias from '../../../../data/noticias.json'

import DisplayNews from "../../../components/NewsHome";
import ContainerBasic from "../../../components/Container/Basic";
import Link from "next/link";





export const contentInitial = {
  titlePage: "LGPD",
  description:
    "A Lei Geral de Proteção de Dados (LGPD), criada pela Lei Federal nº 13.709, de 14 de agosto de 2018, regulamenta a respeito do tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural.",
};

 function Aside() {
  return (
    <div style={{ width:"380px", justifyContent:"left"}}>

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

      <div style={{padding: "10px"}}>
        <Text
        fontWeight="500"
        color={"gray.500"}
        >Últimas Notícias</Text>
      </div>
      {
            noticias.slice(0,2).map((info)=>{
             return( 
             
              <DisplayNews 
                 key={info.descricao}
                 data_noticia={info.data_noticia}
                 descricao={info.descricao}
                 foto={info.foto} 
                 titulo={info.titulo} 
                 link={info.link}   
                 
                
            />
             )
            })
          }
          <div style={{ padding: "0px", width:"100%"}} >

</div>
</Box>

    </div>
    

  );
} 


function HomeScreen() {
  
  const accessibility = useFontSizeAccessibilityContext();
  const titlePage = contentInitial?.titlePage;
  const description = contentInitial?.description;

  

  const { height, width } = useWindowDimensions();

  return (
     <ContainerBasic  title={titlePage} description={description}>
      <Box m={0}
bg={useColorModeValue("white", "gray.800")}

padding={"15px"}
rounded="md"
overflow="hidden"
maxWidth="100%"
borderRadius="18px"
marginBottom="15px">
      <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                paddingTop="5px"
                
              >
                
                O QUE SÃO DADOS PESSOAIS?:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >De acordo com a Lei Geral de Proteção de Dados (art. 5º, I, LGPD), dados pessoais são definidos como informações que estejam relacionadas a uma pessoa física identificada ou que possa ser identificada. </Text>

<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                paddingTop="5px"
              >
                QUEM SÃO OS ENVOLVIDOS COM A LGPD?
                
                
              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
                
                

                <Text justifyContent="flex-end">Titular: pessoa natural a quem se referem os dados pessoais que são objeto de tratamento </Text>

                <Text justifyContent="flex-end">Controlador: no âmbito da administração direta e indireta, a pessoa jurídica de direito público ou privado</Text>

                <Text justifyContent="flex-end"> Operador: pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador </Text>

                <Text justifyContent="flex-end"> Encarregado: pessoa indicada pelo controlador e operador como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD); </Text>
                <Text justifyContent="flex-end">Agentes de tratamento: o controlador e o operador;  </Text>
                <Text justifyContent="flex-end">ANPD: Conforme definido pelo art. 5º, XIX, da LGPD, a Autoridade Nacional é o órgão da Administração Pública, responsável por zelar, implementar e fiscalizar o cumprimento da LGPD em todo o território nacional.  </Text>
                
                
                
              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                paddingTop="5px"
              >
                REGULAMENTAÇÃO DO MUNICÍPIO  
                
                
              </Text>
                      <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              > Decreto nº 21.295/2022  </Text>
            
            <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              > <Link href="http://ged.pmmc.com.br/weblink7/DocView.aspx?id=683751" target="_blank">http://ged.pmmc.com.br/weblink7/DocView.aspx?id=683751 </Link>  </Text>

              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                paddingTop="5px"
              >
                COMITÊ GESTOR DE PROTEÇÃO DE DADOS PESSOAIS
                
                
              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >Decreto nº 20775/2022   </Text>
            
            <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              > <Link href="http://ged.pmmc.com.br/weblink7/DocView.aspx?id=676914" target="_blank">http://ged.pmmc.com.br/weblink7/DocView.aspx?id=676914  </Link>  </Text>
        
              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                paddingTop="5px"
              >
                ENCARREGADO DA PROTEÇÃO DE DADOS  
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
              

             
                 </Text>

             <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                paddingTop="5px"
              >
                POLÍTICA MUNICIPAL DE PRIVACIDADE E PROTEÇÃO DE DADOS PESSOAIS DO PODER EXECUTIVO MUNICIPAL
                
                
              </Text>
                      <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              > Decreto nº 23.153/2024  </Text>    
               <Text  color="gray.500"
                fontSize={accessibility?.fonts?.regular} justifyContent="flex-end"> <Link href="http://leismunicipa.is/1qj9e">http://leismunicipa.is/1qj9e </Link> </Text>



      </Box>
    
        </ContainerBasic>

  
  );
}

export default HomeScreen;
