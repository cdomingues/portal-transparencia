import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Link,
  AccordionItem,
  Accordion,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Divider,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,

} from "@chakra-ui/react";

interface Painel {
  id: string;
  created_at: string;
  updated_at: string;
  titulo: string;
  descricao: string; // HTML
  numero_pagina: string;
}


interface Treinamento {
  id: string;
  data: string;
  horario: string;
  titulo: string;
  local: string;
  publico: string;
  vagas: string | null;
  ementa: string;
  apresentacao: string;
}

import { isMobile } from "react-device-detect";

import useWindowDimensions from "../../utils/getWindowSize";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import ContainerBasic from "../../components/Container/Basic";
import { CheckCircleIcon } from "@chakra-ui/icons";
import moment from "moment";


export const contentInitial = {
  titlePage: "LGPD",
  description:
    "A Lei Geral de Proteção de Dados (LGPD), criada pela Lei Federal nº 13.709, de 14 de agosto de 2018, regulamenta a respeito do tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural.",
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


function HomeScreen() {
  
  const accessibility = useFontSizeAccessibilityContext();
  const titlePage = contentInitial?.titlePage;
  const description = contentInitial?.description;

  const [paineis, setPaineis] = useState<Painel[]>([]);
const [loading, setLoading] = useState<boolean>(true);
const [treinamento,setTreinamento] = useState<Treinamento[]>([]);

useEffect(() => {
    async function fetchPaineis() {
      try {
        const response = await fetch("https://dadosadm.mogidascruzes.sp.gov.br/api/paineis/");
        if (!response.ok) throw new Error("Erro ao buscar dados da API");
        const data = await response.json();

        // Ordena opcionalmente pelo título (se quiser manter ordem)
        const ordenado = data.sort(
  (a: { created_at: string }, b: { created_at: string }) =>
    new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
);
        setPaineis(ordenado);
      } catch (error) {
        console.error("Erro ao carregar painéis:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPaineis();
  }, []);

  useEffect(() => {
    async function fetchTreinamentos() {
      try {
        const response = await fetch("https://dadosadm.mogidascruzes.sp.gov.br/api/treinamentos/");
        if (!response.ok) throw new Error("Erro ao buscar dados da API");
        const data = await response.json();

            setTreinamento(data);
      } catch (error) {
        console.error("Erro ao carregar painéis:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTreinamentos();
  }, []);

  const { height, width } = useWindowDimensions();

  return (
     <ContainerBasic  title={titlePage} description={description}>
      <Box m={0}
bg={useColorModeValue("white", "gray.800")}

padding={"15px"}
rounded="md"
overflow="hidden"
maxWidth="100%"
borderRadius="18px"
marginBottom="15px">
     
      <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Controlador:</strong> Prefeitura Municipal de Mogi das Cruzes 
     </Text>
     <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Encarregado de Proteção de Dados Pessoais:</strong> Jamile Santana
     </Text>

      <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Email:</strong> lgpd@mogidascruzes.sp.gov.br
     </Text>

      <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Telefone:</strong> (11) 4798-5159
     </Text>

      <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Endereço:</strong> Avenida Narciso Yague Guimarães, 277, Centro Cívico - Mogi das Cruzes 
Sede da Prefeitura de Mogi das Cruzes - 3º andar 

     </Text>

      <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Lotação:</strong> Secretaria de Governo e Transparência
     </Text>

     <Text
        align={isMobile ? "justify" : "left"}
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
        >
        <strong>Ato de designação: </strong><Link textDecoration='underline' target="blank" variant='plain' href='https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/242f12fa-142c-452c-b1fe-319afb237de5/0591_2025.pdf' 
        _hover={{
          fontWeight: 'semibold'
        }}
        > Portaria</Link>  
     </Text>

<Accordion allowToggle borderRadius={4} mt="15px">
      {paineis
      .filter((painel) => painel.numero_pagina === "33cf53e1-42bb-42ae-a6eb-cd8c9dc4b91f")
      .map((painel) => (
        <AccordionItem
          key={painel.id}
          pt={4}
          borderRadius="15px"
          border="1px solid"
          mb="15px"
        >
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="center"
                fontWeight="bold"
                fontSize="l"
              >
                {painel.titulo}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel m={4} p={8} borderRadius={4}>
            {/* Renderiza o HTML vindo da API */}
            <Box
              dangerouslySetInnerHTML={{ __html: painel.descricao }}
              sx={{
                p: {
                  mb: 2,
                  textAlign: "justify",
                },
                a: {
                  color: "green.600",
                  fontWeight: "bold",
                  textDecoration: "underline",
                },
              }}
            />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>

    <Accordion allowToggle borderRadius={4} mt="15px" >
      <AccordionItem pt={4}
          borderRadius="15px"
          border="1px solid"
          mb="15px">
        <h2>
          <AccordionButton>
            <Box
                as="span"
                flex="1"
                textAlign="center"
                fontWeight="bold"
                fontSize="l"
              >
              CAPACITAÇÃO E CONSCIENTIZAÇÃO
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>

       <AccordionPanel m={4} p={8}  borderRadius={4}>
                <Flex flexDirection='column'>
                   <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='2xl'>
                    AGENDA DE TREINAMENTOS
                  </Box>
                  
                 {treinamento.map((treino, index) => (
        <Box
          key={index}
          borderWidth="1px"
          borderRadius="2xl"
          p={6}
          shadow="md"
          bg="white"
          mt={2}
        >
          <Heading size="md" mb={2}>
            {moment(treino.data).format("DD/MM/YYYY")} - {treino.titulo}
          </Heading>

          <Divider mb={3} />

          <Text><strong>📍 Local:</strong> {treino.local}</Text>
          <Text><strong>🕘 Horário:</strong> {treino.horario}</Text>
          <Text><strong>👥 Público-alvo:</strong> {treino.publico}</Text>
          {treino.vagas && <Text><strong>🪑 Vagas:</strong> {treino.vagas}</Text>}

          <Box mt={4}>
            <Text fontWeight="bold">Ementa:</Text>
            <Text textAlign="justify">{treino.ementa}</Text>
             <Text><strong> Material:</strong> <Link href={treino.apresentacao} target="blank">{treino.apresentacao}</Link></Text>
          </Box>
        </Box>
      ))}
              <Text justifyContent="flex-end" color='gray.500' mt='25px'><Link href='/lgpd/glossario-lgpd'><strong>Glossário de Termos Técnicos LGPD</strong></Link></Text>
      <Text justifyContent="flex-end" color='gray.500'><Link href='/lgpd/direitos_titular'><strong>Direitos do Titular</strong></Link></Text>   
 
                </Flex>
              </AccordionPanel>
      </AccordionItem>
    </Accordion>

               </Box>
    
        </ContainerBasic>

  
  );
}

export default HomeScreen;
