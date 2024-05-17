import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Divider, Link, ListItem, Stack, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { FaDownload } from "react-icons/fa";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Incentivos Fiscais-  Projetos Culturais",
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
        <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>

                          
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/7cbc0b44-8597-48f5-824f-dd265c214317/16.4_Dados_espec%C3%ADficos_sobre_incentivos_re_1dt7MUw.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Dados específicos sobre incentivos relacionados a projetos culturais -  LIC Mogi</ListItem ></div></Link>
                         
                          
                          
                        </UnorderedList>
     
     


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
