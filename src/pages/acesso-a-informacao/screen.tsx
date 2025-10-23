import React, { useEffect, useState } from "react";
import Head from "next/head";
//import BlogComponent from "../components/Blog";
//import { News } from "../types";
import { PublicPolicyData } from "../api/totalizador/politicas-publicas";
import CardHorizon from "../../components/CardHorizon";
import diretriz_orcamentaria from "../../assets/images/icones/diretriz_orcamentaria.svg"
import balanco_anual from "../../assets/images/icones/balanco_anual.svg"
import lei_orcamentaria from "../../assets/images/icones/lei_orcamentaria_anual.svg"
import parecer_tribunal from "../../assets/images/icones/parecer_tribunal.svg"
import acesso_a_informacao from "../../assets/images/icones/LAI__acesso a informação.svg"
import protocolo_geral from "../../assets/images/icones/LAI__protocolo geral.svg"
import relatorio_de_demandas from "../../assets/images/icones/LAI__relatorio de demandas lai.svg"
import fluxo_lai from '../../assets/images/fluxo_lai.png'
import usePagina from '../../hooks/usePagina'
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Skeleton,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Button,
  Text,
  useColorModeValue,
  textDecoration,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Link,
  UnorderedList,
  ListItem,
  VStack,
  Img,
  Image,
  List,
} from "@chakra-ui/react";
import moneyFormatter from "../../utils/moneyFormatter";
import moment from "moment";
import { isMobile } from "react-device-detect";
import { Chart } from "../../components/HomeChart";
import { Chart2 } from "../../components/HomeChart2";
import { ChartContainer } from "../../utils/styles";
import { BiBell, BiBody, BiCheckShield, BiFlag, BiFoodMenu, BiHeart } from "react-icons/bi";
import useWindowDimensions from "../../utils/getWindowSize";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import noticias from '../../../data/noticias.json'
//import News from "../../components/News";
//import News from "../components/News";
import DisplayNews from "../../components/NewsHome";
import ContainerBasic from "../../components/Container/Basic";

import router from "next/router";
import colors from "../../styles/colors";
//import Video from "../../components/Videos";
interface Painel {
  id: string;
  created_at: string;
  updated_at: string;
  titulo: string;
  descricao: string;
  numero_pagina: string;
}



type PropsInput = {
  handler: {};
};



 function Aside() {
  return (
    <div style={{ width:"380px", justifyContent:"left"}}>

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

     
</Box>

    </div>
    

  );
} 


function HomeScreen({ handler }: PropsInput) {
  
  
  const accessibility = useFontSizeAccessibilityContext();
  //const titlePage = contentInitial?.titlePage;
  //const description = contentInitial?.description;
const [paineis, setPaineis] = useState<Painel[]>([]);
  const { paginaData, loadings, error } = usePagina("71");

  const { height, width } = useWindowDimensions();

  // Busca painéis
    useEffect(() => {
      async function fetchPaineis() {
        try {
          const response = await fetch(
            "https://dadosadm.mogidascruzes.sp.gov.br/api/paineis/"
          );
          if (!response.ok) throw new Error("Erro ao buscar painéis");
          const data = await response.json();
  
          const ordenado = data.sort(
            (a: Painel, b: Painel) =>
              new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
          setPaineis(ordenado);
        } catch (error) {
          console.error("Erro ao carregar painéis:", error);
        }
      }
      fetchPaineis();
    }, []);
  
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
      

  
      <Box m={0}
bg={useColorModeValue("white", "gray.800")}

padding={"15px"}
rounded="md"
overflow="hidden"
maxWidth="100%"
borderRadius="18px"
marginBottom="15px">
  
        </Box>

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
 <Accordion allowToggle borderRadius={4} mt="15px">
          {paineis
            .filter(
              (p) => p.numero_pagina === "d8ea7b5d-10c2-4950-a8db-0d028e97e5de"
            )
            .map((painel) => (
              <AccordionItem
                key={painel.id}
                border="1px solid"
                borderRadius="15px"
                mb="15px"
              >
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="center"
                      fontWeight="bold"
                      fontSize="lg"
                    >
                      {painel.titulo}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel m={4} p={4}>
                  <Box
                    dangerouslySetInnerHTML={{ __html: painel.descricao }}
                    sx={{
                      p: { mb: 2, textAlign: "justify" },
                      a: { color: "green.600", textDecoration: "underline" },
                    }}
                  />
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>

        </ContainerBasic>

  
  );
}

export default HomeScreen;
