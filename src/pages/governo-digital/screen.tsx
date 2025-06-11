import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Divider, Link, ListItem, OrderedList, Stack, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { FaDownload } from "react-icons/fa";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Lei de Governo Digital",
  description:
    "A Lei Federal nº 14.129/2021, conhecida como Lei de Governo Digital, entrou em vigor em agosto de 2021 e estabelece princípios, regras e instrumentos para a transformação digital dos serviços públicos no Brasil.   ",
};





function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();
  
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
      
        <Text
          fontSize={accessibility.fontSize}>

Seu objetivo é tornar o poder público mais eficiente, moderno e acessível para a população, por meio da digitalização de serviços e da simplificação de processos. <br/>
 <UnorderedList  spacing={3}>
        <ListItem>Desburocratização e simplificação do acesso aos serviços públicos</ListItem>
        <ListItem>Oferecimento de serviços digitais acessíveis em uma plataforma única</ListItem>
        <ListItem>Interoperabilidade entre sistemas e promoção de dados abertos</ListItem>
        <ListItem>Participação social no controle da administração pública</ListItem>
        <ListItem>Eliminação de exigências desnecessárias e formalidades excessivas</ListItem>
        <ListItem>Apoio técnico aos estados e municípios para adoção de estratégias digitais</ListItem>
      </UnorderedList >
<br/>
      A legislação também garante direitos aos usuários dos serviços públicos digitais e orienta os órgãos públicos na adoção de plataformas digitais mais eficientes, seguras e integradas. 
<br/>
Além disso, a Lei prevê que a administração pública deve atuar de forma integrada com a Estratégia Nacional de Governo Digital, coordenada pelo governo federal. 
<br/>
<Link pl="7px" href='https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/L14129.htm' target="blank" style={{ color: "#db334f" }}> 
            
Clique aqui para acessar a íntegra da Lei nº 14.129/2021
                
              </Link>
<br/>
              <Link pl="7px" href='https://leismunicipais.com.br/a1/sp/m/mogi-das-cruzes/decreto/2024/2294/22940/decreto-n-22940-2024-dispoe-sobre-os-principios-regras-e-instrumentos-para-o-governo-digital-e-para-o-aumento-da-eficiencia-publica-no-ambito-do-municipio-de-mogi-das-cruzes-sob-os-comandos-da-lei-federal-n-14129-de-29-de-marco-de-2021?q=22940' target="blank" style={{ color: "#db334f" }}> 
            
Clique aqui o Decreto Municipal de regulamentação nº 22.940/2024
                
              </Link>
          </Text>
  
                          

                          
                          
                      



                        




       

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
