/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { Box, Icon, Select, Stack, useColorModeValue, Text, Button, Table, Thead, Th, Tr, Tbody, Td } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import TableComponent, { TableColumns } from "../../../components/Table";
import useWindowDimensions from "../../../utils/getWindowSize";
import { isMobile } from "react-device-detect";
//import publicacoes_educacao from '../../../data/publicacoes_educacao.json';
import HTMLReactParser from 'html-react-parser'
import { select } from "d3";
import { AiOutlineDownload } from "react-icons/ai";
import CsvDownload from "react-json-to-csv";
import colors from "../../../styles/colors";
import usePagina from '../../../hooks/usePagina';

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    
  };
};



export const contentOtherInformations = {
  titlePage: "Planos Municipais Diversos",
  description:
    " ",
};

const exportToJSON = (data: any) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", "dados_planos_municipais.json");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



function Screen({
  handler: {
    columns,
    data,
    loading,
    
  },
}: PropsInput) {
  
  
  const accessibility = useFontSizeAccessibilityContext();
  const { height, width } = useWindowDimensions();
  const [publicacao,setPublicacao] =useState<string>('');
  
  
  const {paginaData, loadings, error} = usePagina("82");
  
    if (loadings) {
          return <Text>Carregando conteúdo...</Text>;
        }
      
       if (error) {
        return <Text>Erro ao carregar página: {(error as Error).message}</Text>;
      }
      
        if (!paginaData) {
          return <Text>Página não encontrada</Text>;
        }
      
        const { titulo: titlePage, descricao: description, conteudo } = paginaData;
  return (
    
    <ContainerBasic title={titlePage} description={description}>
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
          {conteudo && (
            <Box
              dangerouslySetInnerHTML={{ __html: conteudo }}
              sx={{
                p: { mb: 2, textAlign: "justify" },
                a: {
                  color: "blue.600",
                  fontWeight: "bold",
                  textDecoration: "underline",
                },
              }}
            />
          )} 
          <Button
                    width="180px"
                    border="0"
                    cursor="pointer"
                    fontSize="20px"
                    textColor="white"
                    bgColor={colors.transparenciaBlack}
                    _hover={{ bgColor: colors.primaryDefault80p }}
                    height="40px"
                    borderRadius="8px"
                    mr="15px"
                    transition="background-color 0.3s ease"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  >
                    <CsvDownload
                      filename={"saldo_cargos.csv"}
                      data={data}
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "none",
                        border: "none",
                        color: "white",
                        fontSize: "20px",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      CSV
                    </CsvDownload>
                  </Button>
          
                  <Button
                    width="180px"
                    border="0"
                    cursor="pointer"
                    fontSize="20px"
                    textColor="white"
                     bgColor={colors.transparenciaBlack}
                    _hover={{ bgColor: colors.primaryDefault80p }}
                    height="40px"
                    borderRadius="8px"
                    mr="15px"
                    onClick={() => exportToJSON(data)}
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  >
                    JSON
                  </Button>

                  <Table mt='10px'>
  <Thead >
    <Tr  bg={colors.transparenciaBlack}
      color="white"
      p={4}
      fontWeight="bold"
      border={`1px solid ${colors.transparenciaBlack}`}>
      <Th color="white">Cargo</Th>
      <Th color="white">Criados</Th>
      <Th color="white">Providos</Th>
      <Th color="white">Vagos</Th>
     
    </Tr>
  </Thead>
  <Tbody fontSize='12px'>
    
    {data.map((row, index) => (
    
      <Tr key={index}>
        <Td>{row.cargos} </Td> 
       <Td>{row.criados}</Td>
       <Td>{row.providos}</Td>
       <Td>{row.vagos}</Td>
       
                
       
      </Tr>
    ))}
  </Tbody>
</Table>

       
      
       
       </Box>
    </ContainerBasic>
    
  );
}

export default Screen;