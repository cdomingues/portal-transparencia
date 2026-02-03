import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import bannerIntegridadeLarge  from '../../assets/images/Banner_Integridade_1920x2020.jpg';
import bannerIntegridadeMedium  from '../../assets/images/Banner_Integridade_1200x180.jpg';
import bannerIntegridadeSmall  from '../../assets/images/Banner_Integridade_640x160.jpg';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import banner_integridade from "../../assets/images/Banner_Integridade_1200x180.jpg";
import usePagina from "../../hooks/usePagina";

type Arquivo = {
  ano: any;
  pk: string;
  nome: string;
  area?: string | null;
  descricao: string;
  file: string;
  created_at: string;
  tipo: number;
  cadastro: string;
};

type PropsInput = {
  handler: {};
};



function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  
  const router = useRouter();

  const apiUrl = "https://dadosadm.mogidascruzes.sp.gov.br"
     const [arquivos, setArquivos] = useState<Arquivo[]>([]);
      const [nextPage, setNextPage] = useState<number | null>(1);

      const fetchData = async () => {
  let currentPage = 1;
  let hasMorePages = true;

  try {
    while (hasMorePages) {
      const response = await fetch(
        `${apiUrl}/api/arquivos/?page=${currentPage}&file_type=19`
      );

      if (!response.ok) {
        console.error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        break;
      }

      const data = await response.json();
      console.log(data);

      // Atualizar estado com todos os resultados retornados
      setArquivos((prevArquivos: any) => [...prevArquivos, ...data.results]);

      // Verifica se há mais páginas
      if (data.next) {
        currentPage++;
      } else {
        hasMorePages = false;
      }
    }

    setNextPage(null); // Reseta o estado da página
  } catch (error) {
    console.error("Erro ao obter os arquivos:", error);
  }
};

useEffect(() => {
  if (nextPage !== null) {
    fetchData();
  }
}, [nextPage]);

const {paginaData, loadings, error} = usePagina("75");
  
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
        bg={useColorModeValue("white", "gray.800")}
        p={{ base: "10px", md: "15px" }}
        rounded="md"
        overflow="hidden"
        borderRadius="18px"
        mb="15px"
      >
        <picture>
      {/* Desktop */}
      <source
        media="(min-width: 1200px)"
        srcSet={bannerIntegridadeLarge.src}
      />

      {/* Tablet */}
      <source
        media="(min-width: 640px)"
        srcSet={bannerIntegridadeMedium.src}
      />

      {/* Mobile (fallback) */}
      <img
        src={bannerIntegridadeSmall.src}
        alt="Plano Municipal de Integridade"
        className="w-full h-auto object-cover"
      />
    </picture>
         {conteudo && (
                <Box
                  mt='20px'
                  dangerouslySetInnerHTML={{ __html: conteudo }}
                  sx={{
                    p: { mb: 2, textAlign: "justify" },
                    
                  }}
                />
              )} 

        <Box width="100%" p={2}>
          <Box
            as="iframe"
            title="PRESTAÇÃO DE CONTAS - SUBVENCIONADAS DE ASSISTÊNCIA SOCIAL"
            width="100%"
            height={{ base: "400px", md: "800px" }}
            src="https://app.powerbi.com/view?r=eyJrIjoiYzc1MDBiOGItNDRkMi00MTU4LWE2NWYtOGIxZWU2NzdmZjZmIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9"
            border="0"
            style={{ border: "none" }}
          />
        </Box>
      <Box p={2} mb={1} display="flex" flexWrap="wrap" gap="10px">
  <Button
    as="a"
    href="http://leismunicipa.is/2euio"
    target="_blank"
    colorScheme="blue"
    size="sm"
    w="320px"       // largura fixa
    h="80px"     // altura mínima maior
    whiteSpace="normal" // permite quebra de linha
    textAlign="center"
  >
    Plano de Integridade do Município de Mogi das Cruzes
  </Button>

  <Button
    as="a"
    href="http://leismunicipa.is/2mxiu"
    target="_blank"
    colorScheme="blue"
    size="sm"
    w="320px"
    h="80px"
    whiteSpace="normal"
    textAlign="center"
  >
    Código de Conduta e Ética dos Agentes Públicos Municipais
  </Button>

  <Button
    as="a"
    href="http://leismunicipa.is/2qcfv"
    target="_blank"
    colorScheme="blue"
    size="sm"
    w="320px"
    h="80px"
    whiteSpace="normal"
    textAlign="center"
  >
    Programa e Comitê de Integridade
  </Button>

  <Button
    as="a"
    href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/9b57b6d1-907c-4d98-becc-e646015d8e6b/DECERETO_23.874_-_30_DE_SETEMBRO_DE_2025_-_GTE.pdf"
    target="_blank"
    colorScheme="blue"
    size="sm"
    w="320px"
    h="80px"
    whiteSpace="normal"
    textAlign="center"
  >
    Grupo de Trabalho e Estudo sobre Políticas Antirracistas
  </Button>
</Box>

       

        <Accordion allowToggle borderRadius={4} mt='15px'>
            <AccordionItem  pt={4} borderRadius='15px' border='1px solid ' mb='15px'>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                              PESQUISA
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel m={4} p={8}  borderRadius={4}>
                          <Text ml="20px" mb="5px">
  <strong>Pesquisa e Percepção sobre Ações de Integridade: </strong>
  Aberto para resposta do dia 30/09 até 30/11
  <Button
    as="a"
    href="/plano-municipal-integridade/pesquisa"
    target="_blank"
    colorScheme="blue"
    ml="10px"
    size="sm"
  >
    Clique aqui para responder a pesquisa
  </Button>
</Text>
                        </AccordionPanel>
                      </AccordionItem> 

                      <AccordionItem  pt={4} borderRadius='15px' border='1px solid ' mb='15px'>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l' textTransform="uppercase">
                              Resoluções do Comitê de Integridade
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel m={4} p={5}  borderRadius={4}>
                          <Flex flexDirection='column'>

                            {arquivos
                                           .slice()
                                          .sort((a, b) => a.nome.localeCompare(b.nome))
                                          .map((arquivo) => (
                              <div key={arquivo.pk}>
                                <Link
                                  href={`${apiUrl}${arquivo.file}`}
                                  download
                                  target="_blank"
                                  
                                >
                                  <strong>{arquivo.nome}</strong>
                                </Link>
                              </div>
                            ))}
                           
                        
                          </Flex>
                        </AccordionPanel>
                      </AccordionItem>
        </Accordion>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
