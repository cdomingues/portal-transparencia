import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Button, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Plano de Contratações Anual",
  description:
    "A elaboração do Plano de Contratações Anual de Mogi das Cruzes é regulamentado pelo Decreto Municipal nº 23.476/25. O documento que  tem por objetivo racionalizar as contratações, garantir o alinhamento com o seu planejamento estratégicо е subsidiar a elaboração das leis orçamentárias deve ser elaborado por órgãos e entidades da Administração Pública Direta até março de cada exercício. Os dados são consolidados pela Secretaria de Gestão e Contratações Públicas e aprovado até o dia 30 de maio do ano de elaboração. O documento fica disponível para consulta pública após este processo. ",
};


function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();
  
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
        <Text
          mt="20px"
          mb="20px"
          align={isMobile ? "justify" : "left"}
          fontWeight="700"
          fontSize={accessibility?.fonts?.regular}
        > O Plano de Contratações Anual de 2026 está sendo elaborado e estará disponível para consulta nesta página a partir de setembro de 2025.  
       </Text>
       <Button onClick={() => window.open("https://pncp.gov.br/app/pca/46523270000188/2025", "_blank")}>Portal Nacional de Contratações Públicas </Button>

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
