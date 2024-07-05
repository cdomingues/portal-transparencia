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
    "A prestação de contas é um dever estabelecido na Constituição Federal de 1988 o qual determina a obrigação tanto do Presidente da República, quanto a administração pública e entidades do setor público. Dessa forma, a referida responsabilização é caracterizada como a demonstração do destino dos recursos públicos em determinado período, assegurando transparência sobre a alocação de verbas em prol do interesse coletivo. Além disso, a prestação de contas proporciona suporte às decisões de destinação de recursos, possibilitando aos cidadãos a obtenção de conhecimento acerca dos bens e serviços produzidos pela administração pública e dos provedores dos recursos para o seu funcionamento. ",
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
                SECRETARIA MUNICIPAL DE EDUCAÇÃO   
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Quadrimestral <br/>
                PREVISÃO LEGAL: Lei organica do Município - Art. 202 - § 2º <br/>
                Para mais informações acessar: <br/><Link href="https://portal.sme-mogidascruzes.sp.gov.br/paginas/prestacao-de-contas" target="blank" style={{ color: "#db334f" }} >https://portal.sme-mogidascruzes.sp.gov.br/paginas/prestacao-de-contas</Link> <br/> 
                </Text>

                <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SECRETARIA MUNICIPAL DE SAÚDE    
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Trimestral  <br/>
                PREVISÃO LEGAL: <Link  href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/lcp%20141-2012?OpenDocument" target="blank" style={{ color: "#db334f" }}>LEI COMPLEMENTAR Nº 141, DE 13 DE JANEIRO DE 2012 (Art. 23; Art. 34; Art. 37)</Link>  <br/>
                Para mais informações, acessar:  <br/>
                <Link href="https://www.mogidascruzes.sp.gov.br/public/site/doc/2023092917280865173358127fa.pdf" target="blank" style={{ color: "#db334f" }} >Audiência do 2º Quadrimestre 23</Link><br/>
                <Link href="https://www.mogidascruzes.sp.gov.br/public/site/doc/20231027130854653bd286802bd.pdf" target="blank" style={{ color: "#db334f" }} >Audiência do 2º Quadrimestre 23 - Ata Conselho</Link> <br/>
                
                 </Text>

                 <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SECRETARIA MUNICIPAL DE PLANEJAMENTO E GESTÃO ESTRATÉGICA  
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Anual <br/>
                PREVISÃO LEGAL: <Link  href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/lcp%20101-2000?OpenDocument" target="blank" style={{ color: "#db334f" }}>LEI COMPLEMENTAR Nº 101, DE 4 DE MAIO DE 2000 </Link>  <br/>
                Para mais informações, acessar:   <br/>
                <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/8e841f1c-8e81-40d3-9a7b-30d3538ef0ef/Audi%C3%AAncia_LDO_2022.pdf" target="blank" style={{ color: "#db334f" }} >Audiência LDO 2022</Link> <br/>
                <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/ba84d075-89e3-4ad7-900d-62836f7c9169/Audi%C3%AAncia_LOA_2022.pdf" target="blank" style={{ color: "#db334f" }} >Audiência LOA 2022</Link> <br/>
                <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/e4667cee-95f9-47b7-a367-f2a55de8fd5d/Audi%C3%AAncia_LOA_2023.pdf" target="blank" style={{ color: "#db334f" }} >Audiência LOA 2023</Link> <br/>
                <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/d0d857e5-6ba6-40c0-81c9-cdf332dd5d38/Audi%C3%AAncia_PPA_2022-2025.pdf" target="blank" style={{ color: "#db334f" }} >Audiência PPA 2022-2025</Link> <br/>
                 </Text>

                 <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SECRETARIA MUNICIPAL DE ASSISTÊNCIA SOCIAL    
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Quadrimestral <br/>
                PREVISÃO LEGAL: Lei n° 7.943, de 7 de julho de 2023 (Art. 17) <br/>
                Para mais informações, acessar:  <br/>
                <Link href="https://www.canva.com/design/DAFsZMKFaLE/SMxRQVszZo3IhZSBQMKH2A/view?utm_content=DAFsZMKFaLE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="blank" style={{ color: "#db334f" }} >CANVA Secretaria de Assistência Social </Link>
                <br/>
               
                 </Text>

                 <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SECRETARIA MUNICIPAL DE FINANÇAS  
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Quadrimestral  <br/>
                PREVISÃO LEGAL: <Link  href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/lcp%20101-2000?OpenDocument" target="blank" style={{ color: "#db334f" }}>LEI COMPLEMENTAR Nº 101, DE 4 DE MAIO DE 2000 (Art. 8; Art. 56) </Link>  <br/>
                Para mais informações, acessar:   <br/>
                     <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/e71a7042-eaed-497b-b80b-7a72f4e9e50e/62%C2%AA_Audi%C3%AAncia_do_1%C2%BA_Quadrimestre_21.pdf" target="blank" style={{ color: "#db334f" }} >62ª Audiência do 1º Quadrimestre 21</Link><br/>
                    <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/3b29c5ba-1c48-4892-91ed-2a43231d17f1/63%C2%AA_Audi%C3%AAncia_do_2%C2%BA_Quadrimestre_21.pdf" target="blank" style={{ color: "#db334f" }} >63ª Audiência do 2º Quadrimestre 21</Link><br/>
                   <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/e6663ae5-730d-4788-abca-9c9525cecf1e/64%C2%AA_Audi%C3%AAncia_do_3%C2%BA_Quadrimestre_21.pdf" target="blank" style={{ color: "#db334f" }} >64ª Audiência do 3º Quadrimestre 21</Link><br/>
                  <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/a1c93110-b807-4de3-a0ea-c0342ed41447/65%C2%AA_Audi%C3%AAncia_do_1%C2%BA_Quadrimestre_22.pdf" target="blank" style={{ color: "#db334f" }} >65ª Audiência do 1º Quadrimestre 22</Link><br/>
                 <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/f69c589c-1ce9-439d-9e56-4dbb1b2b7e57/66%C2%AA_Audi%C3%AAncia_do_2%C2%BA_Quadrimestre_22.pdf" target="blank" style={{ color: "#db334f" }} >66ª Audiência do 2º Quadrimestre 22</Link><br/>
                <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/20f2833f-3236-48e2-ab43-49d897f2da6f/67%C2%AA_Audi%C3%AAncia_do_3%C2%BA_Quadrimestre_22.pdf" target="blank" style={{ color: "#db334f" }} >67ª Audiência do 3º Quadrimestre 22</Link><br/>
                 </Text>

        <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                
              >
                SECRETARIA MUNICIPAL DE CULTURA    
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Anual <br/>
PREVISÃO LEGAL: (Lei Orgânica Municipal) <br/>
Para mais informações, acessar <br/>
<Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/87c6ee8d-57e6-40ff-a902-cdc93e8083df/Audi%C3%AAncia_-_2021-2022.pdf" target="blank" style={{ color: "#db334f" }} >PRESTAÇÃO DE CONTAS SECULT - 2021 - 2022</Link> <br/>
<Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/f8a8ed45-e928-451d-a21b-155fbb85879b/prestacao_contas_cultura_2022_2023.pdf" target="blank" style={{ color: "#db334f" }} >PRESTAÇÃO DE CONTAS SECULT - 2022 - 2023</Link> <br/>
<Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/fd3e712f-0ca8-48e2-968a-4068c3f2b3db/prestacao_contas_secult_2023.pdf" target="blank" style={{ color: "#db334f" }} >PRESTAÇÃO DE CONTAS SECULT - 2023 - 2024</Link> <br/>               
                 </Text>

                


                 

                 

                 

               


                 

                 
        


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
