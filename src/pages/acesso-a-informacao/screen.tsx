import React from "react";
import Head from "next/head";
//import BlogComponent from "../components/Blog";
//import { News } from "../types";
import { PublicPolicyData } from "../api/totalizador/politicas-publicas";
import CardHorizon from "../../components/CardHorizon";
import diretriz_orcamentaria from "../../assets/images/icones/diretriz_orcamentaria.svg"
import balanco_anual from "../../assets/images/icones/balanco_anual.svg"
import lei_orcamentaria from "../../assets/images/icones/lei_orcamentaria_anual.svg"
import parecer_tribunal from "../../assets/images/icones/parecer_tribunal.svg"
import acesso_a_informacao from "../../assets/images/icones/LAI__acesso a informação.svg"
import protocolo_geral from "../../assets/images/icones/LAI__protocolo geral.svg"
import relatorio_de_demandas from "../../assets/images/icones/LAI__relatorio de demandas lai.svg"
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Skeleton,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Button,
  Text,
  useColorModeValue,
  textDecoration,
} from "@chakra-ui/react";
import moneyFormatter from "../../utils/moneyFormatter";
import moment from "moment";
import { isMobile } from "react-device-detect";
import { Chart } from "../../components/HomeChart";
import { Chart2 } from "../../components/HomeChart2";
import { ChartContainer } from "../../utils/styles";
import { BiBell, BiBody, BiCheckShield, BiFlag, BiFoodMenu, BiHeart } from "react-icons/bi";
import useWindowDimensions from "../../utils/getWindowSize";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import noticias from '../../../data/noticias.json'
//import News from "../../components/News";
//import News from "../components/News";
import DisplayNews from "../../components/NewsHome";
import ContainerBasic from "../../components/Container/Basic";
import Link from "next/link";
import router from "next/router";
import colors from "../../styles/colors";



type PropsInput = {
  handler: {
    expenseAmount: number;
    expensePercentageReached: number;
    expenseProvided: number;
    revenueAmount: number;
    revenuePercentageReached: number;
    revenueProvided: number;
    expenseLoanding: boolean;
    revenueLoading: boolean;
    publicPolicies: PublicPolicyData[];
    graphConfig: any;
    publicPoliciesLoading: boolean;
    chartLoading: boolean;
    date: string;
    
        
  };
};

export const contentInitial = {
  titlePage: "LEI DE ACESSO À INFORMAÇÃO",
  description:
    "A Lei Federal nº 12.527, sancionada em 18 de novembro de 2011, regulamenta o direito constitucional de acesso à informação, conhecida como LAI, Lei de Acesso à Informação ou Lei da Transparência, a lei é um mecanismo que permite a qualquer cidadão receber informações de seu interesse particular ou de interesse coletivo ou geral, que serão prestadas no prazo da lei, sob pena de responsabilidade, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade, do Município ou do Estado.",
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

      <div style={{padding: "10px"}}>
        <Text
        fontWeight="500"
        color={"gray.500"}
        >Últimas Notícias</Text>
      </div>
      {
            noticias.slice(0,2).map((info)=>{
             return( 
             
              <DisplayNews 
                 key={info.descricao}
                 data_noticia={info.data_noticia}
                 descricao={info.descricao}
                 foto={info.foto} 
                 titulo={info.titulo} 
                 link={info.link}   
                 
                
            />
             )
            })
          }
          <div style={{ padding: "0px", width:"100%"}} >

</div>
</Box>

    </div>
    

  );
} 


function HomeScreen({ handler }: PropsInput) {
  const {
    //news,
    expenseAmount,
    expensePercentageReached,
    expenseProvided,
    revenueAmount,
    revenuePercentageReached,
    revenueProvided,
    expenseLoanding,
    revenueLoading,
    publicPolicies,
    graphConfig,
    publicPoliciesLoading,
    chartLoading,
    date,
  } = handler;
  const accessibility = useFontSizeAccessibilityContext();
  const titlePage = contentInitial?.titlePage;
  const description = contentInitial?.description;

  

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
       fontSize={accessibility?.fonts?.regular}>
       Em Mogi das Cruzes a regulamentação local foi realizada pela: <Link  href="http://leismunicipa.is/0ucro" target="blank" style={{ color: "#db334f" }}>Lei Municipal nº 7.986, de 28 de setembro de 2023. </Link> 
      
      </Text>
      
      <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Como fazer uma Solicitação de acesso à informação - LAI (online e presencial) :
                
                
              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Online: 
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              > <Link href='https://lai.mogidascruzes.sp.gov.br' target="blank" style={{ color: "#db334f" }}>lai.mogidascruzes.sp.gov.br</Link></Text>

<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Presencial: 
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >PAC Prédio I </Text>

<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Dia e horário de atendimento:  
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >Segunda a sexta-feira, das 8h às 13h30 e das 14h30 às 17h, no PAC do prédio sede da Prefeitura (Av. Ver. Narciso Yague Guimarães, 277 - Centro Cívico) </Text>

<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Telefone:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >(11) 4798 - 5159 </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                E-mail: 
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >lai@mogidascruzes.sp.gov.br </Text>


      <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Quem pode solicitar:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >Qualquer pessoa, natural ou jurídica, poderá formular pedido de acesso à informação. </Text>

<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Prazos:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >20 (vinte) dias corridos, prorrogáveis por mais 10 (dez) dias, totalizando 30 (trinta) dias corridos. </Text>


<Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Taxas:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >A busca e o fornecimento da informação são gratuitos, ressalvada a cobrança do valor referente ao custo dos serviços e dos materiais utilizados, tais como reprodução de documentos, mídias digitais e postagem.  </Text>
            
              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Forma de acompanhamento:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >Por meio do  <Link  href="https://mogidascruzes.1doc.com.br/b.php?pg=wp/detalhes&itd=3" target="blank" style={{ color: "#db334f" }}  >sistema eletrônico</Link> ou pelo protocolo enviado por e-mail. .  </Text>

       <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Observações:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >Antes de fazer uma solicitação, verifique nossa seção de <Link href="https://www.mogidascruzes.sp.gov.br/pagina/gabinete/institucional" target="_blank" style={{ color: "#db334f" }}>Perguntas Frequentes</Link>.   </Text>      
              
              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Confira nossos materiais a respeito:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >  
              <Link href="https://dados.mogidascruzes.sp.gov.br/dataset/539c1429-98f9-48dd-ae35-c47651cda8ce/resource/d8b64da1-4d96-42de-9eb8-f00ee2979763/download/1-cartilha-digital-referente-a-lei-de-acesso-a-informacao-lai-versao-2022.pdf" target="_blank" style={{ color:"#db334f" }}> 1ª Cartilha digital referente à Lei de Acesso à Informação - LAI (versão 2022) </Link>
              
              
              </Text>       

              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >  
              
              <Link href="https://dados.mogidascruzes.sp.gov.br/dataset/539c1429-98f9-48dd-ae35-c47651cda8ce/resource/c343217d-9dad-46a9-8cd5-bb11767bcc43/download/2-cartilha-digital-referente-a-lei-de-acesso-a-informacao-lai-versao-2023.pdf" target="_blank" style={{ color: "#db334f" }}>2ª Cartilha digital referente à Lei de Acesso à Informação - LAI (versão 2023) </Link>
                            
              </Text>   
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >  
             
              <Link href="https://dados.mogidascruzes.sp.gov.br/dataset/539c1429-98f9-48dd-ae35-c47651cda8ce/resource/bfc4fd73-954c-43c5-afdc-4fde928aa88f/download/manual-como-protocolar-um-pedido-de-acesso-a-informacao-online-lai.pdf" target="_blank" style={{ color: "#db334f" }}>Manual Como protocolar um Pedido de Acesso à Informação Online - LAI </Link>
              
              
              </Text>  

               <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >  
              
              <Link href="https://dados.mogidascruzes.sp.gov.br/dataset/539c1429-98f9-48dd-ae35-c47651cda8ce/resource/65c33fa7-4ad2-4d5f-83cf-9078aa8bdbc5/download/relatorio-anual-lai-2022-transparencia-passiva.pdf" target="_blank" style={{ color: "#db334f" }}>Relatório Anual LAI 2022 - Transparência Passiva </Link>
              
              </Text>    

              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Informações Classificadas ou desclassificadas como sigilosas:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >Ainda não dispomos de lista de informações classificadas como sigilosas, haja vista estarmos no prazo de adequação previsto na Lei Municipal nº 7.986/2023. </Text>      


      </Box>
    <Stack
 style={{
          paddingLeft: isMobile ? 0 : "0%",
          paddingRight: isMobile ? 0 : "0%",
              
        }}
      >

        {/* <Divider mb="6%" /> */}

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
<Stack direction={isMobile ? 'column' : 'row'} spacing={2}>

</Stack>

        <Stack direction="column">
          <Heading
            fontSize={accessibility?.fonts?.regular}
            style={{ marginTop: "0px" }}
          >
            Políticas Públicas
          </Heading>
          
          <StatGroup width="100%" mb={20}>
            <Stat position="unset">
              <Stack
                direction={isMobile ? "column" : "row"}
                align={isMobile ? "center" : "center"}
                justifyContent={isMobile ? "flex-start" : "center"}
              >
                 <Box padding="6" bg="transparent" flexDirection="row">
                  <CardHorizon
                      title="Relatório em tempo real de pedidos online"
                      imageURL={relatorio_de_demandas.src}
                      description="Pedido de e-SIC."
                      link="https://mogidascruzes.1doc.com.br/b.php?pg=o/transparencia" 
                 backgroundColor="transparent"/>
                  </Box>
                 
                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="Clique aqui e protocole seu pedido"
                      imageURL={acesso_a_informacao.src}
                      description="Abertura e Consulta de Pedidos de e-Sic"
                      link="https://mogidascruzes.1doc.com.br/b.php?pg=wp/detalhes&itd=3"
                 backgroundColor="transparent"/>


                  </Box>

                  
               
              </Stack>

              <Stack
                direction={isMobile ? "column" : "row"}
                align={isMobile ? "center" : "center"}
                justifyContent={isMobile ? "flex-start" : "center"}
              >
                 <Box padding="6" bg="transparent" flexDirection="row">
                  <CardHorizon
                      title="Acompanhe os dados genéricos dos pedidos "
                      imageURL={relatorio_de_demandas.src}
                      description="Pedido de e-SIC."
                      link="https://mogidascruzes.1doc.com.br/b.php?pg=wp/wp&itd=3&ss=5 "
                      backgroundColor="transparent"/>
                  </Box>
                  <Box padding="6" bg="transparent" flexDirection="row">
                  <CardHorizon
                      title="Dashboard - LAI "
                      imageURL={relatorio_de_demandas.src}
                      description="Pedido de e-SIC."
                      link="https://app.powerbi.com/view?r=eyJrIjoiZDcxMGQ1ZWQtY2U5Yi00YTgzLThlODgtZjk2MDkwZTRjNTAwIiwidCI6IjdkZTNiN2RlLWIzOGYtNDFhNi05ZDQ1LWIxZDlkMTg0OGM3OSJ9"
                      backgroundColor="transparent"/>
                  </Box>
                 
                 

                  
               
              </Stack>

              <Stack
                direction={isMobile ? "column" : "row"}
                align={isMobile ? "center" : "center"}
                justifyContent={isMobile ? "flex-start" : "center"}
              >
                  
                  
                </Stack>
               
            </Stat>

          </StatGroup>
        </Stack>

        </Box>



</Stack>
        </ContainerBasic>

  
  );
}

export default HomeScreen;
