import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import colors from "../../styles/colors";
import icon from "../../assets/images/icon.png";
import { isMobile } from "react-device-detect";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility"

type PropsInput = {
  title: string;
  description: string;
};

export default function AccordionCommponent() {
  // ({
  //   title,
  //   description,
  // }: PropsInput)
  const accessibility = useFontSizeAccessibilityContext();
  return (
    <Box
      m={0}
      bg={useColorModeValue("white", "gray.800")}
      
      padding={"15px"}
      rounded="md"
      overflow="hidden"
      width= {isMobile? "100%" : "125%"}
      borderRadius="18px"
      marginBottom="15px"
    >
      <Center maxWidth="100%" bg={"transparent"} alignContent={"center"}>
        <Accordion
          allowToggle
          style={{ width: "100%", backgroundColor: "transparent" }}
        >
          <AccordionItem>
            <h2>
              <AccordionButton style={{ backgroundColor: "transparent" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  textColor={useColorModeValue("gray.800", "white")}
                  fontSize={accessibility?.fonts?.regular}
                  width={"100%"}
                >
                  O que é o Portal da Transparência?
                </Box>
                <AccordionIcon
                  textColor={useColorModeValue("gray.800", "white")}
                />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              textAlign={"justify"}
              textColor={useColorModeValue("gray.500", "white")}
            fontSize={accessibility?.fonts?.regular}>
              Um Portal da Transparência é uma plataforma online mantida pela
              Prefeitura de Mogi das Cruzes para fornecer informações acessíveis
              e claras sobre suas atividades. O objetivo é promover a
              transparência e o acesso à informação pública, permitindo que as
              pessoas possam entender como as políticas públicas, os serviços e
              recursos públicos são aplicados. Em geral, os Portais da
              Transparência incluem informações sobre orçamento, despesas,
              licitações, contratos, salários de funcionários e outros dados
              públicos relevantes. Eles são criados com o objetivo de aumentar a
              prestação de contas e a transparência na gestão pública, bem como
              fortalecer a participação cidadã e o controle social.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton style={{ backgroundColor: "transparent" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  textColor={useColorModeValue("gray.800", "white")}
                  fontSize={accessibility?.fonts?.regular}
                  width={"100%"}
                >
                  O que é a LAI - Lei de Acesso à Informação?
                </Box>
                 <AccordionIcon
                  textColor={useColorModeValue("gray.800", "white")}
                />
              </AccordionButton>
            </h2>
               <AccordionPanel
              pb={4}
              textAlign={"justify"}
              textColor={useColorModeValue("gray.500", "white")}
            fontSize={accessibility?.fonts?.regular}>
              A Lei de Acesso à Informação, Lei n° 12.527, de 18 de novembro de
              2011, é uma lei ordinária federal que regulamenta o acesso a
              informações, previsto no inciso XXXIII do art. 5º, no inciso II do
              § 3º do art. 37 e no § 2º do art. 216 da Constituição Federal.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton style={{ backgroundColor: "transparent" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  textColor={useColorModeValue("gray.800", "white")}
                  fontSize={accessibility?.fonts?.regular}
                  width={"100%"}
                >
                  Qual a diferença do Portal da Transparência para o Portal da
                  Prefeitura?
                </Box>
                 <AccordionIcon
                  textColor={useColorModeValue("gray.800", "white")}
                />
              </AccordionButton>
            </h2>
               <AccordionPanel
              pb={4}
              textAlign={"justify"}
              textColor={useColorModeValue("gray.500", "white")}
            fontSize={accessibility?.fonts?.regular}>
              O site da Prefeitura tem como objetivo fornecer informações e
              serviços para os cidadãos da cidade, além de promover comunicação
              de informações sobre a administração pública, como as políticas e
              programas municipais, notícias e eventos locais, informações sobre
              serviços públicos, como saúde, transporte, educação, segurança
              pública, meio ambiente, dentre outros. Já o portal da
              transparência visa garantir a prestação de contas de e
              possibilitar que cidadãos possam acessar documentos e informações
              públicas a respeito de orçamento, despesas, licitações, contratos,
              salários de funcionários e outros dados públicos relevantes. O
              objetivo é tornar a gestão pública mais transparente e próxima do
              cidadão, contribuindo para a melhoria da qualidade de vida e
              desenvolvimento da cidade.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton style={{ backgroundColor: "transparent" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  textColor={useColorModeValue("gray.800", "white")}
                  fontSize={accessibility?.fonts?.regular}
                  width={"100%"}
                >
                  Como faço para tirar dúvidas sobre o funcionamento do Portal
                  da Transparência?
                </Box>
                 <AccordionIcon
                  textColor={useColorModeValue("gray.800", "white")}
                />
              </AccordionButton>
            </h2>
               <AccordionPanel
              pb={4}
              textAlign={"justify"}
              textColor={useColorModeValue("gray.500", "white")}
            fontSize={accessibility?.fonts?.regular}>
              Dúvidas podem ser sanadas por meio do telefone (11) 4798-5159 e
              pelo e-mail smtda@mogidascruzes.sp.gov.br, de segunda a
              sexta-feira das 8h às 17h.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton style={{ backgroundColor: "transparent" }}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  textColor={useColorModeValue("gray.800", "white")}
                  fontSize={accessibility?.fonts?.regular}
                  width={"100%"}
                >
                  Não encontrei a informação que procurava. Como fazer uma
                  solicitação?
                </Box>
                 <AccordionIcon
                  textColor={useColorModeValue("gray.800", "white")}
                />
              </AccordionButton>
            </h2>
               <AccordionPanel
              pb={4}
              textAlign={"justify"}
              textColor={useColorModeValue("gray.500", "white")}
            fontSize={accessibility?.fonts?.regular}>
              Solicitações de acesso à informação podem ser realizadas por meio
              do site, meio do telefone (11) 4798-5159, pelo e-mail:
              lai@mogidascruzes.sp.gov.br ou por meio de atendimento presencial
              no PAC do Prédio sede da Prefeitura de segunda a sexta-feira das
              8h às 17h. Os pedidos de acesso à informação, quando não possíveis
              de serem sanados de forma imediata, serão atendidos no prazo de
              até 20 dias, prorrogáveis por mais 10 dias, em conformidade com o
              art. 11, § 1º Lei Federal n° 12.527, de 18 de novembro de 2011
              (Lei de Acesso à Informação - LAI).
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
    </Box>
  );
}
