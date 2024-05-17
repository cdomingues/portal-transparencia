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
  titlePage: "Desonerações/ Renúncia de Receita",
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
      {/* <TableComponent loading={loading} columns={columns} data={data} /> */}
     
      <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>

                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/156fc827-af6c-4b21-9860-58a7a12c31b3/Demonstrativo_da_Estimativa_e_Compensa%C3%A7%C3%A3o__izQthum.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> Demonstrativo da Estimativa e Compensação da Renúncia da Receita - 2021</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/83b826a2-562d-4e31-9770-7b065063fe06/Demonstrativo_da_Estimativa_e_Compensa%C3%A7%C3%A3o__6Bndn8P.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> Demonstrativo da Estimativa e Compensação da Renúncia da Receita - 2022</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/d85d94b6-8dad-4b60-b557-dfcf165742d6/Demonstrativo_da_Estimativa_e_Compensa%C3%A7%C3%A3o__ydRKK7m.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> Demonstrativo da Estimativa e Compensação da Renúncia da Receita - 2023</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/9c03ce0e-918c-4936-8053-9a684b3032c9/Demonstrativo_da_Estimativa_e_Compensa%C3%A7%C3%A3o__N5T29GU.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> Demonstrativo da Estimativa e Compensação da Renúncia da Receita - 2024</ListItem ></div></Link>
                          
                          
                        </UnorderedList>


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
