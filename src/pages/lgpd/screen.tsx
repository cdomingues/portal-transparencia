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
  Link,

} from "@chakra-ui/react";

import { isMobile } from "react-device-detect";


import useWindowDimensions from "../../utils/getWindowSize";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";

import ContainerBasic from "../../components/Container/Basic";

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
        <strong>Controlador:</strong> Prefeitura Municipal de Mogi das Cruzes 
     </Text>
     <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Encarregado de Proteção de Dados Pessoais:</strong> Jamile Santana
     </Text>

      <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Email:</strong> lgpd@mogidascruzes.sp.gov.br
     </Text>

      <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Telefone:</strong> (11) 4798-5159
     </Text>

      <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Endereço:</strong> Avenida Narciso Yague Guimarães, 277, Centro Cívico - Mogi das Cruzes 
Sede da Prefeitura de Mogi das Cruzes - 3º andar 

     </Text>

      <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Lotação:</strong> Secretaria de Governo e Transparência
     </Text>

     <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Ato de designação: </strong><Link textDecoration='underline' target="blank" variant='plain' href='https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/242f12fa-142c-452c-b1fe-319afb237de5/0591_2025.pdf' 
        _hover={{
          fontWeight: 'semibold'
        }}
        > Portaria</Link>  
     </Text>

    <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                paddingTop="5px"
              >
                LEGISLAÇÃO                                                                                          
              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
              <Text justifyContent="flex-end">Lei Geral de Proteção de Dados Pessoais (LGPD) <Link href='https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm'><strong>Lei Federal nº 13.709/2018</strong></Link></Text>
              
              <Text justifyContent="flex-end">Regulamentação no município de Mogi das Cruzes <Link href='https://www.mogidascruzes.sp.gov.br/public/site/doc/202311171202366557727c94fed.pdf'><strong>Decreto nº 21.295/2022</strong></Link></Text>

               <Text justifyContent="flex-end">Política Municipal e Privacidade e Proteção de Dados Pessoais <Link href='https://leismunicipais.com.br/a/sp/m/mogi-das-cruzes/decreto/2024/2316/23153/decreto-n-23153-2024-institui-a-politica-municipal-de-privacidade-e-protecao-de-dados-pessoais-do-poder-executivo-municipal-em-consonancia-com-o-disposto-na-lei-federal-n-13709-de-14-de-agosto-de-2018-e-da-outras-providencias'><strong> Decreto nº 23.153/2024</strong></Link></Text>

               <Text justifyContent="flex-end">Regulamentação das Nomas de Utilização dos Recursos de Informática, Tecnologia e Práticas de Segurança da Informação <Link href='https://leismunicipais.com.br/a/sp/m/mogi-das-cruzes/decreto/2021/2027/20268/decreto-n-20268-2021-dispoe-sobre-normas-para-utilizacao-de-recursos-de-informatica-e-tecnologia-no-ambito-interno-da-administracao-municipal-e-da-outras-providencias?q=20268%2F2021'><strong> Decreto nº 20.268/2021</strong></Link></Text>
               
              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                paddingTop="5px"
              >
               CANAIS DE ATENDIMENTO   </Text>
                      <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        Fale com o Encarregado de Proteção de Dados: <strong>lgpd@mogidascruzes.sp.gov.br</strong>
     </Text>

      <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        Canal de atendimento para solicitações e reclamações: <Link href='https://www.mogidascruzes.sp.gov.br/servico/procon-sac-e-ouvidoria/atendimento-ao-cidadao-ouvidoria'><strong>Ouvidoria</strong></Link>
     </Text>
            
            
              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                paddingTop="5px"
              >
              BASES DE TRATAMENTO DE DADOS PESSOAIS               
              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >Os tratamentos de dados realizados pela Prefeitura de Mogi das Cruzes se dão de acordo com os arts. 7°, incisos II, III, IV, VI e IX, e 11., inciso II, alíneas “a”, “b” e “c”, bem como os artigos 23 e 26, todos da Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018, e se limitam ao cumprimento de obrigações legais e regulatórias, execução de políticas públicas, execução de contrato e realização de estudos de pesquisa. O tratamento de dados pessoais de crianças e de adolescentes realizado  é feito no melhor interesse daqueles, nos termos da legislação pertinente.   </Text>
            
          
        
              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                paddingTop="5px"
              >
              INSTRUÇÕES NORMATIVAS</Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >Em breve</Text>

             <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                paddingTop="5px"
              >
               CAPACITAÇÃO E CONSCIENTIZAÇÃO_
            </Text>
      <Text justifyContent="flex-end" color='gray.500'><Link href='/lgpd/glossario-lgpd'><strong>Glossário de Termos Técnicos LGPD</strong></Link></Text>
      <Text justifyContent="flex-end" color='gray.500'><Link href='/lgpd/direitos_titular'><strong>Direitos do Titular</strong></Link></Text>   
              



      </Box>
    
        </ContainerBasic>

  
  );
}

export default HomeScreen;
