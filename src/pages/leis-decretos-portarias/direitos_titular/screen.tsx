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
  ListItem,

} from "@chakra-ui/react";

import { isMobile } from "react-device-detect";


import useWindowDimensions from "../../../utils/getWindowSize";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import noticias from '../../../../data/noticias.json'

import DisplayNews from "../../../components/NewsHome";
import ContainerBasic from "../../../components/Container/Basic";
import Link from "next/link";





export const contentInitial = {
  titlePage: "Direitos do Titular",
  description:
    " ",
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
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>O que significa ser titular de dados pessoais e quais são os seus direitos?</strong> 
     </Text>
     <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
       Conforme <Link href='https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm'> <strong>art. 9º da Lei Geral de Proteção de Dados Pessoais</strong></Link>, o titular tem direito ao acesso facilitado às informações sobre o tratamento de seus dados, que deverão ser disponibilizadas de forma clara, adequada e ostensiva acerca de, entre outras características previstas em regulamentação para o atendimento do princípio do livre acesso: 
     </Text>

     <Text fontWeight="bold" mb={2} color="gray.700" fontSize={accessibility?.fonts?.bold}>
  Informações obrigatórias ao titular quando o consentimento for necessário:
</Text>

<UnorderedList spacing={3} color="gray.500" fontSize={accessibility?.fonts?.regular} listStyleType='none '>
  <ListItem><strong>I.</strong> Finalidade específica do tratamento.</ListItem>
  <ListItem><strong>II.</strong> Forma e duração do tratamento, observados os segredos comercial e industrial.</ListItem>
  <ListItem><strong>III.</strong> Identificação do controlador.</ListItem>
  <ListItem><strong>IV.</strong> Informações de contato do controlador.</ListItem>
  <ListItem><strong>V.</strong> Informações acerca do uso compartilhado de dados pelo controlador e a finalidade.</ListItem>
  <ListItem><strong>VI.</strong> Responsabilidades dos agentes que realizarão o tratamento.</ListItem>
  <ListItem><strong>VII.</strong> Direitos do titular, com menção explícita aos direitos contidos no art. 18 desta Lei.</ListItem>
</UnorderedList>

<Text mt={4} color="gray.500" fontSize={accessibility?.fonts?.regular}>
  § 1º Na hipótese em que o consentimento é requerido, esse será considerado <strong>nulo</strong> caso as informações fornecidas ao titular tenham conteúdo enganoso ou abusivo ou não tenham sido apresentadas previamente com transparência, de forma clara e inequívoca.
</Text>

<Text mt={2} color="gray.500" fontSize={accessibility?.fonts?.regular}>
  § 2º Se houver mudanças da finalidade para o tratamento de dados pessoais não compatíveis com o consentimento original, o controlador deverá informar previamente o titular sobre as mudanças de finalidade, podendo o titular <strong>revogar o consentimento</strong>, caso discorde das alterações.
</Text>

<Text mt={2} color="gray.500" fontSize={accessibility?.fonts?.regular}>
  § 3º Quando o tratamento de dados pessoais for condição para o fornecimento de produto ou serviço ou para o exercício de direito, o titular será <strong>informado com destaque</strong> sobre esse fato e sobre os meios pelos quais poderá exercer os direitos do titular elencados no art. 18 desta Lei.
</Text>

<Text mt={4} fontWeight="bold" color="gray.700" fontSize={accessibility?.fonts?.bold}>
  Titularidade dos dados pessoais
</Text>

<Text mt={2} color="gray.500" fontSize={accessibility?.fonts?.regular}>
  Nos termos do art. 17 da Lei Geral de Proteção de Dados Pessoais, toda pessoa natural tem assegurada a titularidade de seus dados pessoais e garantidos os direitos fundamentais de <strong>liberdade, intimidade e privacidade</strong>.
</Text>

<Text mt={2} color="gray.500" fontSize={accessibility?.fonts?.regular}>
  O(a) titular de dados é toda pessoa natural a quem se referem os dados que são objeto de tratamento.
</Text>

<Text mt={4} fontWeight="bold" color="gray.700" fontSize={accessibility?.fonts?.bold}>
  Direitos do(a) titular (Art. 18 da LGPD)
</Text>

<UnorderedList spacing={3} color="gray.500" fontSize={accessibility?.fonts?.regular}>
  <ListItem>Confirmação da existência de tratamento.</ListItem>
  <ListItem>Acesso aos dados.</ListItem>
  <ListItem>Correção de dados incompletos, inexatos ou desatualizados.</ListItem>
  <ListItem>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na LGPD.</ListItem>
  <ListItem>Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, conforme regulamentação da Autoridade Nacional, observados os segredos comercial e industrial.</ListItem>
  <ListItem>Eliminação dos dados pessoais tratados com o consentimento do(a) titular, exceto nas hipóteses previstas no art. 16 da Lei.</ListItem>
  <ListItem>Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados.</ListItem>
  <ListItem>Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa.</ListItem>
  <ListItem>Revogação do consentimento, nos termos do § 5º do art. 8º da Lei.</ListItem>
</UnorderedList>

<Text mt={4} fontStyle="italic" fontSize={accessibility?.fonts?.regular} color="gray.500">
  Fonte: CGU
</Text>


      

      </Box>
    
        </ContainerBasic>

  
  );
}

export default HomeScreen;
