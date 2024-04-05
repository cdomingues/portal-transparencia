import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Prestação de Contas à CMMC",
  description:
    "Secretarias Municipais que prestam contas à Câmara Municipal",
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
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                
              >
                SMC   
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Anual <br/>
PREVISÃO LEGAL: (Lei Orgânica Municipal) <br/>
PUBLICIDADE: Não realiza a publicação <br/>
FORMATO DE ACESSO: enviado por e-mail <br/>
                 </Text>

                 <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SMS   
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Fevereiro, Maio e Setembro  <br/>
                PREVISÃO LEGAL: <Link  href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/lcp%20141-2012?OpenDocument" target="blank" style={{ color: "#db334f" }}>LEI COMPLEMENTAR Nº 141, DE 13 DE JANEIRO DE 2012 (Art. 23; Art. 34; Art. 37)</Link>  <br/>
                PUBLICIDADE: Jornais locais e no Portal da Transparência (Conselho Municipal de Saúde e Notícias)  <br/>
                <Link href="https://www.mogidascruzes.sp.gov.br/public/site/doc/2023092917280865173358127fa.pdf" target="blank" style={{ color: "#db334f" }} >https://www.mogidascruzes.sp.gov.br/public/site/doc/2023092917280865173358127fa.pdf </Link>
                <Link href="https://www.mogidascruzes.sp.gov.br/public/site/doc/20231027130854653bd286802bd.pdf" target="blank" style={{ color: "#db334f" }} >https://www.mogidascruzes.sp.gov.br/public/site/doc/20231027130854653bd286802bd.pdf </Link> <br/>
                FORMATO DE ACESSO: enviado por e-mail <br/>
                 </Text>

                 <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SMF  
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Quadrimestral  <br/>
                PREVISÃO LEGAL: <Link  href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/lcp%20101-2000?OpenDocument" target="blank" style={{ color: "#db334f" }}>LEI COMPLEMENTAR Nº 101, DE 4 DE MAIO DE 2000 (Art. 8; Art. 56) - Lei de Responsabilidade Fiscal </Link>  <br/>
                PUBLICIDADE: Portal da Transparência  <br/>
                <Link href="https://dadosabertos.mogidascruzes.sp.gov.br/ciclo-orcamentario/relatorio-gestao-fiscal" target="blank" style={{ color: "#db334f" }} >https://dadosabertos.mogidascruzes.sp.gov.br/ciclo-orcamentario/relatorio-gestao-fiscal </Link>
                <Link href="https://dadosabertos.mogidascruzes.sp.gov.br/ciclo-orcamentario/relatorio-resumido " target="blank" style={{ color: "#db334f" }} >https://dadosabertos.mogidascruzes.sp.gov.br/ciclo-orcamentario/relatorio-resumido  </Link> <br/>
                <Link href="https://dadosabertos.mogidascruzes.sp.gov.br/promae  " target="blank" style={{ color: "#db334f" }} >https://dadosabertos.mogidascruzes.sp.gov.br/promae  </Link> <br/>
                FORMATO DE ACESSO: enviado por e-mail <br/>
                 </Text>

                 <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SEPLAG  
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Anual <br/>
                PREVISÃO LEGAL: <Link  href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/lcp%20101-2000?OpenDocument" target="blank" style={{ color: "#db334f" }}>LEI COMPLEMENTAR Nº 101, DE 4 DE MAIO DE 2000 </Link>  <br/>
                PUBLICIDADE:   <br/>
                <Link href="https://drive.google.com/file/d/1oMD_goTZZK_MKFmIAEcrAq-d6tqf9Gy0/view " target="blank" style={{ color: "#db334f" }} >https://drive.google.com/file/d/1oMD_goTZZK_MKFmIAEcrAq-d6tqf9Gy0/view  </Link> <br/>
                FORMATO DE ACESSO: enviado por e-mail <br/>
                 </Text>


                 <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SEMAS   
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Quadrimestral  (fevereiro, junho e outubro)<br/>
                PREVISÃO LEGAL: <br/>
                PUBLICIDADE: Portal da Transparência  <br/>
                <Link href="https://www.canva.com/design/DAFsZMKFaLE/SMxRQVszZo3IhZSBQMKH2A/view?utm_content=DAFsZMKFaLE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="blank" style={{ color: "#db334f" }} >CANVA Secretaria de Assistência Social </Link>
                <br/>
                <Link href="https://dadosabertos.mogidascruzes.sp.gov.br/promae  " target="blank" style={{ color: "#db334f" }} >https://dadosabertos.mogidascruzes.sp.gov.br/promae  </Link> <br/>
                FORMATO DE ACESSO: enviado por e-mail <br/>
                 </Text>


                 <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SME   
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Quadrimestral <br/>
                PREVISÃO LEGAL: Lei organica do Município - Art. 202 - § 2º <br/>
                PUBLICIDADE: <Link href="https://portal.sme-mogidascruzes.sp.gov.br/paginas/prestacao-de-contas" target="blank" style={{ color: "#db334f" }} >https://portal.sme-mogidascruzes.sp.gov.br/paginas/prestacao-de-contas</Link> <br/> 
                FORMATO DE ACESSO: site <br/>
                 </Text>

                 
        


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
