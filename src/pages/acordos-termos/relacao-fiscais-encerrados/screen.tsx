import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Divider, Link, ListItem, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { FaDownload } from "react-icons/fa";

import DadosAbertos from "../../../components/DadosAbertos";
import TableComponent, { TableColumns } from "../../../components/Table";


type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};

export const contentMapSite = {
  titlePage: "Relação dos gestores de contratos encerrados",
  description:
    "   ",
};





function Screen({  handler: {
  columns,
  data,
  loading,
  
}, }: PropsInput) {
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
         
         <TableComponent loading={loading} columns={columns} data={data} />
    <DadosAbertos data={data} />

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
