import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue,Table, Tbody, Td, Th, Thead, Tr, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import colors from "../../styles/colors";
import CsvDownload from "react-json-to-csv";
import PaginationComponent from "../../components/PaginationComponent";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Empresas Reclamadas no Procon",
  description:
   "",
};





function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;

  

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
       
                        <Flex>
                          <Box flex="end" p={2} marginRight={5}>
                                           
        {/* <Text fontSize={accessibility?.fonts?.regular} mb="10px">
                        Última atualização: <strong>30/05/2025</strong>
                      </Text> */}
        <iframe title="PROCON 2024" width="1200px" height="800px" src="https://app.powerbi.com/view?r=eyJrIjoiZjFlYmRkZDgtNDllMC00NDI5LWFjZDItYzYyOTMwYjBlNmUxIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9"  ></iframe>
        <Button mt='20px'>
          <Link href="https://www.mogidascruzes.sp.gov.br/public/site/doc/20250509150621681e441d1b768.pdf">
          Download lista de empresas reclamadas
          </Link>
        </Button>
                          </Box>
                        
                        </Flex>
                     
                
        


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
