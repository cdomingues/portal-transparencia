import React, { useState } from "react";
import AccordionCommponent from "../../components/Accordion";
import ContainerBasic from "../../components/Container/Basic";
import { Checkbox, Flex, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { isMobile } from "react-device-detect";
import colors from "../../styles/colors";

export const contentFaq = {
  titlePage: "Plano de Ação - SIAFIC",
  description:
    " ",
};

function Screen() {
  const title = contentFaq?.titlePage;
  const description = contentFaq?.description;
  const accessibility = useFontSizeAccessibilityContext();
 
 




  return (
    <ContainerBasic title={title} description={description}>
      <Flex direction="column" width={isMobile ? '100%' : '80%'}>

        <Text mb={4} fontSize={accessibility.fontSize}>
          A atualização é necessária em atendimento a requisição do TCE/SP nº TC-004501.989.24 -  (Contas da Prefeitura de 2024), item C.1.7. I-GOV-TI, conforme segue:

Divulgação do Plano de Ação para implantação do Siafic (Sistema Único e Integrado de Execução Orçamentária, Administração Financeira e Controle) exigido pelo decreto Federal nº 10.540/20. 
        </Text>
         <Stack 
                 marginTop={5}
                 direction="row"
                 maxW="500px"
                p={4}
                 borderRadius="md"
                 _hover={{ bg: 'gray.200', color: 'black' }}
                 border='1px solid black'
                 cursor='pointer'
                 >
         <Link  href="https://ged.mogidascruzes.sp.gov.br/weblink7/DocView.aspx?id=676890" target="blank"><strong>Decreto 20788/2022</strong> </Link></Stack>
          <Stack 
                 marginTop={5}
                 direction="row"
                 maxW="500px"
                p={4}
                 borderRadius="md"
                 _hover={{ bg: 'gray.200', color: 'black' }}
                 border='1px solid black'
                 cursor='pointer'
                 >
        <Link  href="https://leismunicipais.com.br/a/sp/m/mogi-das-cruzes/decreto/2023/2209/22083/decreto-n-22083-2023-proc-n-8260-23-1doc" target="blank"><strong>Decreto 22083/2023</strong></Link>
        </Stack>

         <Stack 
                 marginTop={5}
                 direction="row"
                 maxW="500px"
                p={4}
                 borderRadius="md"
                 _hover={{ bg: 'gray.200', color: 'black' }}
                 border='1px solid black'
                 cursor='pointer'
                 >
        <Link  href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/7279eee7-ae4d-49be-95a0-b7afe225a3fa/decreto-23645-2025-mogi-das-cruzes-sp-1-Anexo.pdf" target="blank"><strong>Decreto 23645/2025</strong></Link>
        </Stack>


    

          <Stack 
                 marginTop={5}
                 direction="row"
                 maxW="500px"
                p={4}
                 borderRadius="md"
                 _hover={{ bg: 'gray.200', color: 'black' }}
                 border='1px solid black'
                 cursor='pointer'
                 >
        <Link  href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/7e4c189c-c2af-43a3-8392-1c1dce234c50/Plano_de_A%C3%A7%C3%B5es.pdf" target="blank"><strong>Plano de ação - SIAFIC</strong></Link>
        </Stack>

        


      </Flex>
    </ContainerBasic>
  );
}

export default Screen;
