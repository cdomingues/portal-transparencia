import React from "react";
import ContainerBasic from "../../components/Container/Basic";
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

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Plano Municipal de Integridade de Mogi das Cruzes ",
  description: " ",
};

function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();

  return (
    <ContainerBasic title={title} description={description}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={{ base: "10px", md: "15px" }}
        rounded="md"
        overflow="hidden"
        borderRadius="18px"
        mb="15px"
      >
        <Img src={banner_integridade.src} mb="20px" width="100%" />

        <Stack spacing={4} fontSize={accessibility.fontSize} textAlign="justify">
          <Text>
            A Prefeitura de Mogi das Cruzes instituiu, por meio de lei municipal, o Programa Municipal de Integridade, um marco importante na consolidação de uma administração pública mais ética, transparente e eficiente.
          </Text>
          <Text>
            O Programa visa fortalecer a governança, prevenir irregularidades e promover uma cultura organizacional orientada pelos mais altos padrões de integridade, em sintonia com recomendações internacionais, como as diretrizes da Organização para a Cooperação e Desenvolvimento Econômico (OCDE).
          </Text>
          <Text>
            Como instrumento central do Programa, o Plano de Integridade é um documento estratégico, dinâmico e operacional, que define ações concretas, metas, indicadores e responsabilidades distribuídas por eixos temáticos. O Plano será revisado periodicamente, assegurando sua constante atualização frente aos desafios e necessidades da gestão pública.
          </Text>
          <Text>
            A iniciativa também prevê a criação do Comitê de Integridade, com composição multissetorial e atribuições consultivas e deliberativas. O Comitê será responsável por coordenar, monitorar e avaliar a efetividade das ações do Plano, promovendo o engajamento da alta gestão e a articulação de toda a estrutura administrativa.
          </Text>
          <Text>
            Ao institucionalizar o Plano de Integridade, Mogi das Cruzes reafirma seu compromisso com o interesse público, com o uso responsável dos recursos públicos e com a construção de uma relação mais transparente e confiável entre o poder público e a sociedade.
          </Text>
          <Text>Confira as iniciativas normativas e não normativas propostas abaixo:</Text>
        </Stack>

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

        <Accordion allowToggle borderRadius={4} mt='15px'>
           <AccordionItem  pt={4} borderRadius='15px' border='1px solid ' mb='15px'>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                              LEGISLAÇÃO      
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel m={4} p={8}  borderRadius={4}>
                          <Flex flexDirection='column'>
                           
                        <Text >
                       <Link  href="http://leismunicipa.is/2euio" target="blank">
                       <strong>Lei ordinária 218/2025</strong>
                       </Link>
                       </Text>
          
           
                          </Flex>
                        </AccordionPanel>
                      </AccordionItem>
        </Accordion>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
