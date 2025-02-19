import {  Box, useColorModeValue, Heading,Text, Link, Icon, AccordionPanel, AccordionItem, Accordion, AccordionButton, AccordionIcon, Flex, Stack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../components/Table";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
//import Video from "../../components/Videos";
import { isMobile } from "react-device-detect";
import { AiOutlineDownload } from "react-icons/ai";

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
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    radarCollectionColumns: TableColumns;
    radarCollection: Array<any>;
    radarInfractionColumns: TableColumns;
    radarInfractions: Array<any>;
  };
};

export const contentRadarsControl = {
  titlePage: "Controle de Radares",
  description:
    "Agora você tem um ambiente onde pode conferir, de forma oficial, as principais informações sobre os equipamentos de fiscalização de trânsito em Mogi das Cruzes. Acompanhe um mapa interativo com a localização de cada radar, tenha acesso ao tipo de equipamento, à velocidade máxima permitida e ao status de operação deles.",
};

const markerChildren = (data: any) => {
  return (
    <>
      <p>
        <b>Tipo:</b> {data?.subtipo}
      </p>
      <p>
        <b>Velocidade (km/h):</b> {data?.kmh}
      </p>
      <p>
        <b>Bairro:</b> {data?.Bairro}
      </p>
      <p>
        <b>Logradouro:</b> {data?.logradouro}
      </p>
      <p>
        <b>Sentido:</b> {data?.sentido}
      </p>
      <p>
        <b>Faixas:</b> {data?.faixas}
      </p>
      <p>
        <b>Status:</b> {data?.status}
      </p>
      
    </>
  );
};

const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

function Screen({
  handler: {
    columns,
    data,
    loading,
    radarCollection,
    radarCollectionColumns,
    radarInfractionColumns,
    radarInfractions,
  },
}: PropsInput) {
  const title = contentRadarsControl?.titlePage;
  const description = contentRadarsControl?.description;
  const accessibility = useFontSizeAccessibilityContext();
  const url_video = "https://www.youtube.com/embed/K7_TUkedcGA?si=iPxaKODtZnboQT-_";
  const titulo = "O QUE SÃO AS SEIS MEDIDAS?";

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
      const initialUrl = `${apiUrl}/api/arquivos/?page=${nextPage}&file_type=18`;
      fetchData(initialUrl);
    }
  }, [nextPage]);

  const areaIdentifiers: any = {
   
"SMMU":"cb8f80e6-7d16-4ade-9ac6-86bd435ed1d7",



    
    
  };


  return (
    <ContainerBasic title={title} description={description}>
       
       
      
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                mt="20px"
              >
                Para onde vai o recurso arrecado com as multas?
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                textAlign={"justify"}
              >O recurso arrecadado é destinado para:<br/>

5% vai para o Fundo Nacional de Segurança e Educação de Trânsito – FUNSET, conforme previsto no art. 320, §1º, do Código de Trânsito Brasileiro (Lei nº 9.503/1997);<br/>
              
30% é destinado ao DREM, desvinculação prevista na EC nº 93/2016; O restante vai para o Fundo Municipal de Mobilidade Urbana – FMMU, criado pela Lei Municipal nº 6.935/2014.<br/>
                            
Vale ressaltar, que além do desmembramento citado acima, são descontadas do valor os descontos por pagamento em dia, que é de 20% sob o valor do boleto ou de 40%, quando o proprietário ou condutor do veículo, com adesão prévia ao Sistema de Notificação Eletrônica (SNE), solicita, através do Aplicativo Carteira Digital de Trânsito (CDT) do Serviço Nacional de Processamento de Dados (SERPRO) o boleto com desconto e renúncia o direito de defesa, nos termos do § 1º do Art. 284 da Lei Nº 9.503/1997, além das taxas bancárias de emissão e manutenção dos boletos.
              </Text>

<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                mt="20px"
              >
                
                O que é o FUNSET?
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >O Fundo Nacional de Segurança e Educação de Trânsito - FUNSET é um fundo de âmbito nacional destinado à segurança e educação de trânsito. O Código de Trânsito Brasileiro (CTB), instituído pela Lei nº 9.503, de 23 de setembro de 1997, em vigor desde 22 de janeiro de 1998, estabelece em seu artigo 320, parágrafo primeiro, que o percentual de 5% (cinco por cento) do valor das multas de trânsito deve ser depositado mensalmente, na conta do FUNSET, criado pela Lei nº 9.602 de 21 de janeiro de 1998 e regulamentado pelo Decreto nº 2.613, de 03 de junho de 1998, os quais estabelecem a gestão do referido fundo ao Departamento Nacional de Trânsito – DENATRAN.</Text>

<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                mt="20px"
              >
                 O que é FMMU?
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >O Fundo Municipal de Mobilidade Urbana – FMMU é um fundo de âmbito municipal no município de Mogi das Cruzes, criado com o objetivo de garantir condições financeiras para custeio e investimento em controle, operação, fiscalização e planejamento de trânsito e transporte público e de outras despesas e encargos decorrentes dessas atividades no município. O FMMU foi criado pela Lei Municipal nº 6.935/2014 e é administrado pelo Comitê Municipal de Mobilidade Urbana, composto por 5 membros e que se reuniu uma vez por mês.</Text>

<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                mt="20px"
              >
                O que constituí o FMMU?
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >Todas as receitas previstas no art. 8º da Lei Municipal nº 6.935/2014.</Text>
              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                mt="20px"
              >
                Para quê é destinado o recurso do FMMU?
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb="50px"
              >Conforme art. 10 da Lei Municipal nº 6.935/2014 é destinado para:<br/>
              Desenvolvimento das atividades previstas no artigo 320 do Código de Trânsito Brasileiro;
Financiamento de programas de educação para o trânsito;<br/>
Implantação de programas visando à melhoria de qualidade do sistema de trânsito, circulação e transporte;<br/>
Desenvolvimento, aprimoramento E capacitação de recursos humanos ligados à área de trânsito e transporte;<br/>
Custeio e investimento em atividades associadas à circulação, ao transporte e ao trânsito, inclusive seu gerenciamento e monitoramento;<br/>
Aquisição de material permanente ou de consumo e outros insumos necessários para planejamento, projeto, implantação, manutenção, operação e fiscalização do transporte público e do trânsito no Município;<br/>
Contratação de estudos, projetos, planos ou implantações específicas para transporte público e trânsito;<br/>
Investimentos em infraestrutura urbana de suporte aos sistemas de circulação, transporte público e trânsito no Município;<br/>
Investimentos em equipamentos e capacitação tecnológica para gestão da circulação e dos serviços de transporte público e trânsito;<br/>
Desenvolvimento de ações e serviços de apoio aos usuários e de garantia de segurança aos pedestres na circulação;<br/>
Custeio e investimento das atividades desenvolvidas na gestão da circulação e dos serviços de transporte público e trânsito;<br/>
Implementação de programas de segurança de trânsito;
Melhorias do sistema municipal de transporte coletivo;  
Otimização do sistema viário municipal.</Text>

<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                mt="20px"
              >
                 Por onde acompanhar a aplicação dos recursos arrecadados?
                
                
              </Text>
        <br/>
<Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Heading
          mb={2}
          fontSize={accessibility?.fonts?.ultraLarge}
          color="text.dark"
        >
            Demonstrativo de Receita e sua destinação e Detalhamento de Despesas FMMU 
        </Heading>
        <Accordion allowToggle borderRadius={4}>
          {Object.keys(areaIdentifiers).map((section) => (
            <AccordionItem bg={"gray.100"} pt={4} key={section}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                  2024
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex>
                  <Box flex="end" p={2} marginRight={5}></Box>
                  <Box maxWidth="100%" p={2}>
                    {arquivos
                    .filter((arquivo) => {
    console.log(arquivo.pk); // Verificar o valor do pk para cada arquivo
    return arquivo.area === areaIdentifiers[section] && arquivo.nome !== "Audiência LOA 2022";
  })
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
        <div style={{ height: "500px", width: "100%" }}>
          <MapWithNoSSR
            coords={[-23.528986, -46.192973]}
            markers={data.map((item) => {
              const latitude = Number(
                item?.latitude
              );
              const longitude = Number(
                item?.longitude
              );

              return {
                lat: latitude,
                lng: longitude,
                status: item?.status,
                children: markerChildren(item),
              };
            })}
          />
        </div>
      </Box>

      

      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Heading
          mb={2}
          fontSize={accessibility?.fonts?.ultraLarge}
          color="text.dark"
        >
          Localização dos radares
        </Heading>
        <TableComponent columns={columns} loading={loading} data={data} />
      </Box>

      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Heading
          mb={2}
          fontSize={accessibility?.fonts?.ultraLarge}
          color="text.dark"
        >
          Receita por radar
        </Heading>
        <TableComponent
          columns={radarCollectionColumns}
          loading={loading}
          data={radarCollection}
        />
      </Box>

      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Heading
          mb={2}
          fontSize={accessibility?.fonts?.ultraLarge}
          color="text.dark"
        >
          Quantidade de infrações por radar
        </Heading>
        <TableComponent
          columns={radarInfractionColumns}
          loading={loading}
          data={radarInfractions}
        />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;

// import { Divider, Box, useColorModeValue } from "@chakra-ui/react";
// import dynamic from "next/dynamic";
// import React from "react";
// import ContainerBasic from "../../components/Container/Basic";
// import TableComponent, { TableColumns } from "../../components/Table";

// type PropsInput = {
//   handler: {
//     columns: TableColumns;
//     data: Array<any>;
//     loading: boolean;
//   };
// };

// export const contentRadarsControl = {
//   titlePage: "Controle de Radares",
//   description: "Agora você tem um ambiente onde pode conferir, de forma oficial, as principais informações sobre os equipamentos de fiscalização de trânsito em Mogi das Cruzes. Acompanhe um mapa interativo com a localização de cada radar, tenha acesso ao tipo de equipamento, à velocidade máxima permitida e ao status de operação deles.",
// }

// const markerChildren = (data: any) => {
//   return (
//     <>
//       <p><b>Programa:</b> {data?.tipo}</p>
//       <p><b>Velocidade (km/h):</b> {data?.velocidade}</p>
//       <p><b>Bairro:</b> {data?.bairro}</p>
//       <p><b>Logradouro:</b> {data?.logradouro}</p>
//       <p><b>Sentido:</b> {data?.sentido}</p>
//       <p><b>Faixas:</b> {data?.faixas}</p>
//       <p><b>Status:</b> {data?.status}</p>
//     </>
//   );
// };

// const dataRadarJson = [
//   {
//     "Lon": -46.172711,
//     "Lat": -23.508056,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Francisco Rodrigues Filho (Parque Centen\u00E1rio) ",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "AVAN\u00C7O DE SEM\u00C1FORO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.206026,
//     "Lat": -23.546117,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Henrique Peres X Av. Dom Luiz de Souza ",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "AVAN\u00C7O DE SEM\u00C1FORO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.169386,
//     "Lat": -23.515637,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Jo\u00E3o XXIII x Av. J\u00FAlio Perotti ",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "AVAN\u00C7O DE SEM\u00C1FORO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.18594,
//     "Lat": -23.52042,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Rua Dr. Ricardo Vilela X Rua Dom Ant\u00F4nio Candido Alvarenga ",
//         "sentido": "Bairro-Centro",
//         "job": "AVAN\u00C7O DE SEM\u00C1FORO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.196599,
//     "Lat": -23.555434,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Dr. \u00C1lvaro de Campos Carneiro 1155",
//         "sentido": "Bairro-Centro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.201685,
//     "Lat": -23.55152,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Dr. \u00C1lvaro de Campos Carneiro 450",
//         "sentido": "Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.241881,
//     "Lat": -23.542278,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Francisco Ferreira Lopes 4410 + 40m",
//         "sentido": "Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.219185,
//     "Lat": -23.537036,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Henrique Peres 190",
//         "sentido": "Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.221594,
//     "Lat": -23.5768,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Jap\u00E3o 7200",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.207671,
//     "Lat": -23.556983,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Julio Sim\u00F5es 2751",
//         "sentido": "Bairro-Centro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.20664,
//     "Lat": -23.557907,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Julio Sim\u00F5es oposto 2905",
//         "sentido": "Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.268609,
//     "Lat": -23.541762,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Louren\u00E7o de Souza Franco 2442",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.253476,
//     "Lat": -23.54468,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Louren\u00E7o de Souza Franco 1231",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.183097,
//     "Lat": -23.542077,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Prefeito Carlos Alberto Lopes 635",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.187818,
//     "Lat": -23.563713,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Pref. Francisco Ribeiro Nogueira oposto 5001",
//         "sentido": "Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.226991,
//     "Lat": -23.551289,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Shozo Sakai 1081",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.214586,
//     "Lat": -23.526382,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Ten. Onofre Rodrigues de Aguiar 901",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.221675,
//     "Lat": -23.528575,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Valentina Mello Freire Borenstein Parque Leon Feffer",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.193645,
//     "Lat": -23.531213,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Rua Dr. Deodato Wertheimer 2351 e 2362",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.181309,
//     "Lat": -23.503111,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Antonio de Almeida 1111  -180m",
//         "sentido": "Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.191597,
//     "Lat": -23.560408,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Dr. \u00C1lvaro de Campos Carneiro 443 + 500m",
//         "sentido": "Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.270343,
//     "Lat": -23.540459,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "AVENIDA GUILHERME GEORGE 2336",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.203577,
//     "Lat": -23.537181,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "AVENIDA JAP\u00C3O 961",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.209744,
//     "Lat": -23.533149,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Francisco Ferreira Lopes 101",
//         "sentido": "Bairro-Centro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.21482,
//     "Lat": -23.568048,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Jap\u00E3o 3978 + 850m",
//         "sentido": "Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.21392,
//     "Lat": -23.514086,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Joaquim Pereira de Carvalho 518",
//         "sentido": "Centro-Bairro e Bairro-Centro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.216021,
//     "Lat": -23.57395,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Kaoru Hiramatsu 2390",
//         "sentido": "Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.195268,
//     "Lat": -23.504187,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Lothar Waldemar Hoehne 1747",
//         "sentido": "Bairro-Centro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.217628,
//     "Lat": -23.505716,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Estrada do Evangelho Pleno x Rodovia Pedro Eroles 1887",
//         "sentido": "Bairro-Centro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.214201,
//     "Lat": -23.506079,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Rodovia Pedro Eroles 1060",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.203451,
//     "Lat": -23.514668,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Rua Cabo Diogo Oliver 1077",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   }
// ]

// const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
//   ssr: false,
// });

// function Screen({ handler: { columns, data, loading } }: PropsInput) {
//   const title = contentRadarsControl?.titlePage;
//   const description = contentRadarsControl?.description;

//   return (
//     <ContainerBasic title={title} description={description}>
//       <Box m={0} bg={useColorModeValue("white", "gray.800")}  padding={"15px"} rounded="md" overflow="hidden" width="100%" borderRadius="18px" marginBottom="15px">
//         <div style={{ height: "500px", width: "100%" }}>
//           <MapWithNoSSR
//             coords={[-23.528986, -46.192973]}
//             markers={dataRadarJson.map((item) => {
//               return {
//                 lat: item?.Lat,
//                 lng: item?.Lon,
//                 children: markerChildren(item.Desc[0]),
//               };
//             })}
//           />
//         </div>
//       </Box>

//       <Box m={0} bg={useColorModeValue("white", "gray.800")}  padding={"15px"} rounded="md" overflow="hidden" width="100%" borderRadius="18px" marginBottom="15px">
//         <TableComponent columns={columns} loading={loading} data={dataRadarJson} />
//       </Box>
//     </ContainerBasic>
//   );
// }

// export default Screen;
