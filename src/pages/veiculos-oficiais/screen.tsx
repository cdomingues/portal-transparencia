import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Icon, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import Video from "../../components/Videos";
import { useRouter } from "next/router";

type Arquivo = {
  ano: any;
  pk: string;
  nome: string;
  area?: string | null;
  descricao: string;
  file: string;
  created_at: string;
  tipo: number;
};

type ApiResponse = {
  results: Arquivo[];
  next: string | null;
};

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Veiculos Oficiais",
  description: "Confira aqui as informações sobre o uso dos veículos oficiais e a serviço da Administração Direta e Indireta da Prefeitura de Mogi das Cruzes",
};

function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const url_video = "https://www.youtube.com/embed/K7_TUkedcGA?si=iPxaKODtZnboQT-_";
  const titulo = "O QUE SÃO AS SEIS MEDIDAS?";
  const router = useRouter();

  const [arquivos, setArquivos] = useState<Arquivo[]>([]);
  const [nextPage, setNextPage] = useState<number | null>(1);

  const apiUrl = "https://dadosadm.mogidascruzes.sp.gov.br";
  const url = `${apiUrl}/api/arquivos/?page_size=50&file_type=15`;

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data: ApiResponse = await response.json();

      if (data.next !== null) {
        setNextPage((prevPage) => (prevPage !== null ? prevPage + 1 : null));
      } else {
        setNextPage(null);
      }

      setArquivos((prevArquivos) => [...prevArquivos, ...data.results]);

      if (data.next !== null) {
        await fetchData(data.next);
      }
    } catch (error) {
      console.error('Erro ao obter os arquivos:', error);
    }
  };

  useEffect(() => {
    if (nextPage !== null) {
      const initialUrl = `${apiUrl}/api/arquivos/?page=${nextPage}&file_type=15`;
      fetchData(initialUrl);
    }
  }, [nextPage]);

  const areaIdentifiers: any = {
    "Gabinete": "35232d4f-5ede-4578-bd15-9fbac1f2b362",
    "SEMAE": "d89b01cc-6bb2-4a5e-8a58-bb64daac4f79",
    "SEMAS": "9028907f-052a-42bc-a7fe-67ffee591d5a",
    "SEPLAG": "f2eb3ac3-0c74-4aec-bfb1-1f6445930ed4",
    "SMAA": "147f2639-ce03-401f-a2a8-6aadfd0c6fac",
    "SMAPA": "09165c28-b37b-4046-be19-c85ddc168f98",
    "SME": "3068a6fc-e21e-4a2d-b0d7-3fb30897483c",
    "SMF": "c76e23ef-16e5-494f-a25b-43a37b84470a",
    "SMGOV":"bc61ea48-df23-47ba-9ed2-8f1f5ca7789d",
    "SMHSRF": "bc61ea48-df23-47ba-9ed2-8f1f5ca7789d",
    "SMS": "5834fe67-e4a5-47fb-abec-552540590e8f",
    "SMU": "4b1d5219-988b-4f50-918a-659e9b771a8c",
    "PGM":"234ff7ff-9d83-42d9-91c8-9c0a3f891a1d",
    
    
  };

  return (
    <ContainerBasic title={title} description={description}>
      <Video url_video={url_video} titulo={titulo} />
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Accordion allowToggle borderRadius={4}>
          {Object.keys(areaIdentifiers).map((section) => (
            <AccordionItem bg={"gray.100"} pt={4} key={section}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    {section}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex>
                  <Box flex="end" p={2} marginRight={5}></Box>
                  <Box maxWidth="100%" p={2}>
                    {arquivos
                      .filter((arquivo) => arquivo.area === areaIdentifiers[section])
                      .sort((a, b) => a.ano - b.ano) // Sort by year for better organization
                      .map((arquivo) => (
                        <Link href={`${apiUrl}${arquivo.file}`} download target="_blank" key={arquivo.pk}>
                          <Stack
                            direction="row"
                            maxW="600px"
                            color="gray"
                            p={2}
                            borderRadius="md"
                            _hover={{ bg: 'gray.200' }}
                            marginTop={5}
                          >
                            <h1>{arquivo.nome} </h1>
                            <Icon as={AiOutlineDownload} />
                          </Stack>
                        </Link>
                      ))}
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
