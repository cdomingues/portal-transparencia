import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Divider, Link, ListItem, Stack, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { FaDownload } from "react-icons/fa";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Governo Digital",
  description:
    "   ",
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
        <Divider borderWidth="2px" mt="10" mb="10" />
        <Text fontSize="large" fontWeight="550" paddingLeft="5px" pb="15px">
          Governo Digital
        </Text>
        
        <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>

                          
<Link href='https://leismunicipais.com.br/a1/sp/m/mogi-das-cruzes/decreto/2024/2294/22940/decreto-n-22940-2024-dispoe-sobre-os-principios-regras-e-instrumentos-para-o-governo-digital-e-para-o-aumento-da-eficiencia-publica-no-ambito-do-municipio-de-mogi-das-cruzes-sob-os-comandos-da-lei-federal-n-14129-de-29-de-marco-de-2021?q=22940' target="blank" style={{ color: "#db334f" }}> 
            
DECRETO Nº 22.940, DE 22 DE JULHO DE 2024
                
              </Link>
                          
                          
                        </UnorderedList>



                        <Divider borderWidth="2px" mt="10" mb="10" />

<Text fontSize="large"  paddingLeft="5px" pb="15px">
Dispõe sobre os princípios, regras e instrumentos para o Governo Digital e para o aumento da eficiência pública, no âmbito do Município de Mogi das Cruzes, sob os comandos da Lei Federal nº 14.129, de 29 de março de 2021.
</Text>


       

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
