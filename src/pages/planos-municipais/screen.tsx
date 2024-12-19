import React, { useState } from "react";
import AccordionCommponent from "../../components/Accordion";
import ContainerBasic from "../../components/Container/Basic";
import { Box, Checkbox, Flex, Heading, Input, Stack, Stat, StatGroup, Textarea } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { isMobile } from "react-device-detect";
import cadastro_de_fornecedores from "../../assets/images/icones/compras publicas__cadastro de fornecedor.svg"
import CardHorizon from "../../components/CardHorizon";

export const contentFaq = {
  titlePage: "Planos Municipais",
  description:
    "Planos Municipais Setoriais são documentos de planejamento que visam organizar e orientar ações específicas em diversas áreas dentro de um município, de acordo com as demandas e particularidades locais. Esses planos são desenvolvidos com o objetivo de estruturar políticas públicas e garantir a melhoria da qualidade de vida da população. Eles podem abranger diferentes setores, como educação, saúde, infraestrutura, saneamento, transporte, meio ambiente, cultura, segurança, entre outros.",
};

function Screen() {
  const title = contentFaq?.titlePage;
  const description = contentFaq?.description;
  const accessibility = useFontSizeAccessibilityContext();
 
  




  return (
    <ContainerBasic title={title} description={description}>
      <Flex direction="column" width={isMobile ? '100%' : '80%'}>
        <div style={{ alignContent: 'center'}}>
        <StatGroup width="100%" mb={20}>
            <Stat position="unset">
              <Stack
                direction={isMobile ? "column" : "row"}
                align={isMobile ? "center" : "center"}
                justifyContent={isMobile ? "flex-start" : "center"}
              >
                  <Box padding="6" bg="transparent" flexDirection="row">
                   <CardHorizon
                      title="Plano Municipal de Educação"
                      imageURL={cadastro_de_fornecedores.src}
                      description="O Plano Plurianual (PPA) é o principal instrumento pelo qual o município faz o planejamento de como irá investir os recursos públicos nos próximos anos."
                      link="planos-municipais/plano-municipal-educacao"
                 backgroundColor="transparent"/>
                                    </Box>
                 
                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Plano Municipal de Saúde"
                      imageURL={cadastro_de_fornecedores.src}
                      description="O Plano Plurianual (PPA) é o principal instrumento pelo qual o município faz o planejamento de como irá investir os recursos públicos nos próximos anos."
                      link="planos-municipais/plano-municipal-saude"
                 backgroundColor="transparent"
                
                 />


                  </Box>
               
              </Stack>
              
              <Stack
                direction={isMobile ? "column" : "row"}
                align={isMobile ? "center" : "center"}
                justifyContent={isMobile ? "flex-start" : "center"}
              >
                  <Box padding="6" bg="transparent" flexDirection="row">
                   <CardHorizon
                      title="Planos Municipal Diversos"
                      imageURL={cadastro_de_fornecedores.src}
                      description="O Plano Plurianual (PPA) é o principal instrumento pelo qual o município faz o planejamento de como irá investir os recursos públicos nos próximos anos."
                      link="planos-municipais/plano-municipal-diversos"
                 backgroundColor="transparent"/>
                                    </Box>
                 
                  
               
              </Stack>

               
                
            </Stat>

          </StatGroup>
     

        </div>

        

        
      </Flex>
    </ContainerBasic>
  );
}

export default Screen;
