import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Icon, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
//import Video from "../../components/Videos";
import { useRouter } from "next/router";
import ListaPermissionarios from "../../components/ListaPermissionarios";
import TableComponent, { TableColumns } from "../../components/Table";



type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};

export const contentMapSite = {
  titlePage: "Feiras, Mercado Municipal e Mercado do Produtor",
  description: "Confira aqui as informações sobre Feiras, Mercado Municipal e Mercado do Produtor",
};

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  
  const router = useRouter();

  
  

  return (
    <ContainerBasic title={title} description={description}>
      
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        
        <TableComponent loading={loading} columns={columns} data={data} />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
