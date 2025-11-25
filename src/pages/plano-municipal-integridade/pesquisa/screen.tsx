import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
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
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import banner_integridade from "../../assets/images/Banner_Integridade_1200x180.jpg";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Pesquisa e Percepção sobre Ações de Integridade ",
  description: " Aberto para resposta do dia 30/09 até 30/11",
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
       <iframe
        src="https://forms.office.com/pages/responsepage.aspx?id=2kolVy5RxkiVKQKRiIWZv-h7xvkRXKpIhGM9s8ONGpVURUJEWDZIWFpQOVlUV1c4VDQ2RUpUU1ZEQi4u&embed=true"
        width="100%"
        height="800px"
        style={{ border: "none", borderRadius: "8px" }}
        title="Formulário de Pesquisa"
      ></iframe>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
