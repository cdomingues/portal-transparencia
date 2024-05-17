import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Divider, Link, ListItem, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { FaDownload } from "react-icons/fa";
import gestores_fiscais_vigentes from '../../../../data/gestores_fiscais_vigentes.json'
import DadosAbertos from "../../../components/DadosAbertos";


type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Relação dos gestores de contratos vigentes ",
  description:
    "   ",
};





function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('gestores_fiscais_encerrados')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erro ao carregar os dados:', error));
  }, []);


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
         
    <Table overflowX={'auto'} variant="striped"
            style={{
              borderCollapse: "collapse",
            }}>
      <Thead backgroundColor={useColorModeValue('table.primary', "gray.800")}>
        <Tr >
          <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.small,
                          
                        }}>Secretaria</Th>
          <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.small,
                          
                        }}>Objeto</Th>
          <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.small,
                          
                        }}>Contratada</Th>
                        <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.small,
                          
                        }}>Data Início</Th>
                        <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.small,
                          
                        }}>Data Fim</Th>
                         <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.small,
                          
                        }}>Gestor</Th>
                        <Th style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.small,
                          
                        }}>Cargo</Th>
        </Tr>
      </Thead>
      <Tbody>
        {gestores_fiscais_vigentes.map(info => (
          <Tr key={info.contrato}>
            <Td style={{fontSize: accessibility?.fonts?.small}} >{info.secretaria}</Td>
            <Td style={{fontSize: accessibility?.fonts?.small}} >{info.objeto}</Td>
            <Td style={{fontSize: accessibility?.fonts?.small}} >{info.contratada}</Td>
            <Td style={{fontSize: accessibility?.fonts?.small}} >{info.data_inicio}</Td>
            <Td style={{fontSize: accessibility?.fonts?.small}} >{info.data_fim}</Td>
            <Td style={{fontSize: accessibility?.fonts?.small}} >{info.gestor}</Td>
            <Td style={{fontSize: accessibility?.fonts?.small}} >{info.cargo}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    <DadosAbertos data={gestores_fiscais_vigentes} />

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
