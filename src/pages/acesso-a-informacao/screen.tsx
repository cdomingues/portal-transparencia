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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Link,
  UnorderedList,
  ListItem,
  VStack,
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

import router from "next/router";
import colors from "../../styles/colors";
//import Video from "../../components/Videos";



type PropsInput = {
  handler: {};
};

export const contentInitial = {
  titlePage: "Lei de Acesso à Informação",
  description:
    <>A  Lei Federal nº 12.527/11, conhecida como  Lei de Acesso à Informação (LAI) assegura o direito do cidadão ao acesso a informações públicas, por interesse pessoal, coletivo ou geral.  Seu objetivo é promover a transparência, o controle social e o fortalecimento da democracia.
    <br/>
   <strong> Transparência ativa:</strong> divulgação espontânea de informações de interesse coletivo ou geral, independentemente de solicitação. Exemplos incluem dados sobre receitas e despesas, licitações, contratos, servidores e ações governamentais, disponíveis diretamente no Portal da Transparência. 
<br/>
<strong>Transparência passiva:</strong> atendimento a pedidos formais de acesso a informações públicas realizados por qualquer pessoa, por meio do Serviço de Informação ao Cidadão (SIC). Quando uma informação não estiver disponível no portal, o cidadão pode solicitá-la e receber resposta dentro dos prazos legais. 
<br/>
Aqui você encontra as principais informações já disponibilizadas de forma ativa e pode registrar seu pedido, acompanhar respostas e exercer seu direito de acesso à informação. 
 <br/>
Se você deseja sugerir abertura de dados, apontar erros ou opinar sobre a navegação do Portal da Transparência ou SIC, escreva para dadosabertos@mogidascruzes.sp.gov.br. 
<br/>
     </>,
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

     
</Box>

    </div>
    

  );
} 


function HomeScreen({ handler }: PropsInput) {
  
  
  const accessibility = useFontSizeAccessibilityContext();
  const titlePage = contentInitial?.titlePage;
  const description = contentInitial?.description;

  

  const { height, width } = useWindowDimensions();
  

  return (
    <ContainerBasic title={titlePage} description={description}>
      

  
      <Box m={0}
bg={useColorModeValue("white", "gray.800")}

padding={"15px"}
rounded="md"
overflow="hidden"
maxWidth="100%"
borderRadius="18px"
marginBottom="15px">
  
        </Box>

 <Box maxWidth="100%" p={2}>
                  <iframe title="PRESTAÇÃO DE CONTAS - SUBVENCIONADAS DE ASSISTÊNCIA SOCIAL" width="1200" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiOTY0NjUyMWItNGFkNC00NjMyLThmNTctYzQ5OWI0NDg5MjkwIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9" ></iframe>
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
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex flexDirection='column'>
                 
              <Text >
              <Link _hover={{ textDecoration: "underline" }} href='https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm' isExternal> <strong>Lei Federal nº 12.527/11 </strong> </Link>  - Lei de Acesso à Informação (LAI)</Text>

                <Text >
              <Link _hover={{ textDecoration: "underline" }} href='https://leismunicipais.com.br/a/sp/m/mogi-das-cruzes/lei-ordinaria/2023/799/7986/lei-ordinaria-n-7986-2023-regulamenta-a-lei-federal-n-12527-de-18-de-novembro-de-2011-para-dispor-sobre-o-acesso-a-informacoes-no-ambito-do-poder-executivo-do-municipio-de-mogi-das-cruzes?q=7986' isExternal> <strong>Lei Municipal nº 7.986/23 </strong> </Link>  - Regulamentação da LAI</Text>

                <Text >
              <Link _hover={{ textDecoration: "underline" }} href='https://leismunicipais.com.br/a/sp/m/mogi-das-cruzes/decreto/2024/2261/22604/decreto-n-22604-2024-regulamenta-a-lei-n-7986-de-28-de-setembro-de-2023-que-trata-do-acesso-a-informacao-no-ambito-do-poder-executivo-do-municipio-de-mogi-das-cruzes-estabelecendo-procedimentos-e-providencias-correlatas?q=22.604' isExternal> <strong>Decreto Municipal nº 22.604/24 </strong> </Link>  - Regulamentação da LAI</Text>

 
                </Flex>
              </AccordionPanel>
            </AccordionItem>

             <AccordionItem  pt={4} borderRadius='15px' border='1px solid ' mb='15px'>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                    SISTEMA DE INFORMAÇÃO AO CIDADÃO
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex flexDirection='column'>
                 
             <Text>
  <b>O Serviço de Informação ao Cidadão (SIC)</b> é a unidade subordinada à Secretaria Municipal de Governo e Transparência responsável por atender os pedidos de acesso à informação, com base na Lei Federal nº 12.527/11, a Lei de Acesso à Informação. <br/>
  Qualquer interessado, pessoa física ou jurídica, pode fazer um pedido de informação.
<br/>
• Não é necessário justificar a motivação do pedido;<br/>
• Para que a solicitação seja atendida, é necessário que o pedido seja claro e específico.
<br/>
<b>Atendimento presencial: </b>
De segunda a sexta-feira, das 8h às 13h30 e das 14h30 às 17h, no PAC, no piso térreo da Prefeitura de Mogi das Cruzes.
Guichês: 18 e 20.
<br/>
<b>Endereço:</b> Avenida Vereador Narciso Yague Guimarães, 277, Centro Cívico.
<br/>
<b>Telefone:</b> (11) 4798-5159
<br/>
<b>E-mail:</b> lai@mogidascruzes.sp.gov.br
<br/>
<br/>
<b>Atendimento eletrônico</b>
<br/>
<br/>
<b>Sistema SIC: </b> lai.mogidascruzes.sp.gov.br
<br/>
<b>Email: </b> lai@mogidascruzes.sp.gov.br
<br/>
<b>Atendimento por telefone: </b>
(11) 4798-5159
</Text>

 
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem  pt={4} borderRadius='15px' border='1px solid 'mb='15px'>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                    AUTORIDADE DE MONITORAMENTO E EQUIPE
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex flexDirection='column'>
                 
             <Text>
              Jamile Santana <br/>
Chefe de Divisão de Transparência e Promoção da Integridade  <br/>
<Link
 href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/1b639690-a3cb-4181-aa00-4799d135e7aa/PORTARIA_N_401_DE_4_DE_ABRIL_DE_2025.pdf"
 isExternal
 _hover={{ textDecoration: "underline" }}><strong>Portaria nº 401/2025 </strong></Link> <br/>
Telefone: 4798-5159  <br/>
E-mail: lai@mogidascruzes.sp.gov.br   <br/>
  <br/>
<strong> Responsáveis pelo atendimento</strong>   <br/>
Gabriel Felipe Harder de Souza  <br/>
Júlia Ruela   <br/>
Júlia Sthefany dos Santos  <br/>
Luany Barreto  <br/>
Mauro Ferreira   <br/>
Verônica Souza 

  
            </Text>

 
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem  pt={4} borderRadius='15px' border='1px solid 'mb='15px'>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                   FLUXOS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex flexDirection='column'>
                 
             <Text>
            Pedido inicial
            </Text>

 
                </Flex>
              </AccordionPanel>
            </AccordionItem>
         
 <AccordionItem  pt={4} borderRadius='15px' border='1px solid 'mb='15px'>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                       COMO UTILIZAR O SERVIÇO
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex flexDirection='column'>
                 
             <Text>
           Qualquer pessoa pode requisitar informações públicas aos órgãos da administração municipal, sem necessidade de justificar o pedido. A solicitação deve ser feita por meio do Serviço de Informação ao Cidadão (e-SIC), disponível neste Portal da Transparência. 
<br/>
<strong>O que pode ser pedido? </strong>
<br/>
Dados sobre contratos, licitações, convênios, despesas e receitas públicas; 
<br/>
Informações sobre políticas, programas, projetos e ações do governo; 
<br/>
Estrutura organizacional, cargos e remunerações de servidores; 
<br/>
Qualquer outro dado público que não esteja protegido por sigilo legal. 
 <br/>
<strong>O que o SIC não atende? </strong>
<br/>
Embora o SIC seja uma ferramenta essencial para garantir o acesso à informação pública, há situações em que ele <strong>não pode ser utilizado</strong> ou <strong>não é obrigado a atender</strong> ao pedido. Veja abaixo o que não se enquadra nas obrigações de resposta do SIC: 
<br/><br/>
<strong>1. Informações protegidas por sigilo legal </strong>
<br/>
 {'\u00A0\u00A0\u00A0\u00A0'}. Dados pessoais de terceiros (como CPF, endereço ou prontuários médicos); 
<br/>
 {'\u00A0\u00A0\u00A0\u00A0'}. Informações sigilosas relativas à segurança pública, investigações em andamento ou processos administrativos ou judiciais que tramitam em sigilo; 
<br/>
 {'\u00A0\u00A0\u00A0\u00A0'}. Informações classificadas como sigilosas nos termos da Lei. 
<br/>
<br/>
<strong>2. Pedidos genéricos, desproporcionais ou desarrazoados </strong>
<br/>
{'\u00A0\u00A0\u00A0\u00A0'}.Solicitações muito amplas ou vagas, sem delimitação clara do que se deseja; 
<br/>
{'\u00A0\u00A0\u00A0\u00A0'}.Pedidos que demandem trabalho de análise, interpretação, produção ou consolidação de dados que não existam previamente. 
<br/>
<br/>
<strong>3. Consultas, opiniões ou esclarecimentos jurídicos </strong>
<br/>
O SIC não é responsável por fornecer pareceres técnicos, explicações sobre leis ou orientações jurídicas. 
<br/><br/>
<strong>4. Pedidos que envolvam produção de nova informação </strong>
<br/>
A Lei de Acesso à Informação garante o acesso a dados existentes. O órgão não é obrigado a criar, processar ou organizar dados que não estejam previamente disponíveis. 
<br/>
Caso seu pedido se enquadre em alguma dessas situações, a solicitação poderá ser indeferida com a devida justificativa. Ainda assim, é garantido ao cidadão o direito de apresentar recurso e questionar a decisão. 
 <br/><br/>

<strong>5. Reclamações, denúncias, sugestões ou elogios </strong>
 <br/>
Para manifestações relacionadas à qualidade dos serviços públicos, conduta de servidores ou propostas de melhoria, o canal adequado é a Ouvidoria Municipal. 
<br/><br/>
<strong>6. Solicitação de providências </strong>
<br/>
O SIC não é destinado ao encaminhamento de demandas por ações diretas da administração pública, como reparos, fiscalizações, atendimentos ou tomada de decisões em processos em andamento. Para esses casos, utilize os canais específicos de atendimento ao cidadão ou diretamente nos órgãos responsáveis. 
 <br/><br/>
<strong>Como fazer o pedido? </strong>
<br/>
Acesse o sistema e-SIC neste portal, presencialmente, por telefone ou e-mail.  
<br/><br/>
<strong>Prazos</strong>
 <br/>

Sendo possível, o acesso à informação deve ser imediato. Caso seja necessário fazer algum levantamento ou desarquivamento da informação, o órgão público tem até 20 dias corridos para responder ao pedido. Esse prazo pode ser prorrogado por mais 10 dias corridos, mediante justificativa; 
<br/>
Se a informação for negada ou você não ficar satisfeito com a resposta, é possível apresentar recurso dentro dos prazos estabelecidos pela Lei. 

            </Text>

 
                </Flex>
              </AccordionPanel>
            </AccordionItem>


            <AccordionItem  pt={4} borderRadius='15px' border='1px solid 'mb='15px'>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                      RECURSOS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex flexDirection='column'>
                 
             <Text>
           No caso de omissão de resposta ao pedido de acesso à informação, ou seja, se o você não receber qualquer manifestação do órgão no prazo da LAI, poderá apresentar reclamação no prazo de 10 (dez) dias (a contar o fim do prazo de atendimento de 20 dias) à Ouvidora-Geral do Município, conforme disposto na Lei nº 7.986, de 28 de setembro de 2023 (art. 23) e no Decreto nº 22604/2024 (art. 28, § único).  
           <br/>
           Caso não concorde com a resposta recebida ao seu pedido de acesso à informação ou negativa de acesso, é seu direito apresentar recurso administrativo, conforme previsto na Lei de Acesso à Informação (Lei nº 12.527/2011). 
           <br/>
           <strong>Você pode recorrer quando: </strong>
           <br/><br/>
           <UnorderedList spacing={2}>
  <ListItem>
    O recurso deve ser feito diretamente no sistema e-SIC, acessando a solicitação original;
  </ListItem>
  <ListItem>
    O pedido de recurso pode ser apresentado por qualquer pessoa interessada;
  </ListItem>
  <ListItem>
    O prazo para apresentar recurso é de 10 dias corridos a partir da data de resposta do órgão;
  </ListItem>
  <ListItem>
    Na primeira instância, o recurso será analisado por uma autoridade superior ao servidor que forneceu a resposta. A autoridade poderá manter ou reformar a decisão anterior;
  </ListItem>
  <ListItem>
    Caso o recurso também seja negado, é possível apresentar recurso em segunda instância, direcionado à autoridade máxima do órgão, como previsto na regulamentação municipal;
  </ListItem>
  <ListItem>
    Se a decisão em segunda instância não for satisfatória, o requerente pode recorrer à 3ª instância, formada pela Comissão Municipal de Acesso à Informação.
  </ListItem>
</UnorderedList>

 


            </Text>

 
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem  pt={4} borderRadius='15px' border='1px solid 'mb='15px'>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                      MATERIAIS DE ORIENTAÇÃO 
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex flexDirection='column'>
                 
             <Text>
          
<VStack align="start" spacing={3}>
  <Link href="https://dados.mogidascruzes.sp.gov.br/dataset/539c1429-98f9-48dd-ae35-c47651cda8ce/resource/d8b64da1-4d96-42de-9eb8-f00ee2979763/download/1-cartilha-digital-referente-a-lei-de-acesso-a-informacao-lai-versao-2022.pdf" isExternal textDecoration="underline" >
   <strong> 1ª Cartilha digital referente à Lei de Acesso à Informação - LAI (versão 2022)</strong>
  </Link>

  <Link href="https://dados.mogidascruzes.sp.gov.br/dataset/539c1429-98f9-48dd-ae35-c47651cda8ce/resource/c343217d-9dad-46a9-8cd5-bb11767bcc43/download/2-cartilha-digital-referente-a-lei-de-acesso-a-informacao-lai-versao-2023.pdf" isExternal textDecoration="underline" >
    <strong>2ª Cartilha digital referente à Lei de Acesso à Informação - LAI (versão 2023)</strong>
  </Link>

  <Link href="https://dados.mogidascruzes.sp.gov.br/dataset/539c1429-98f9-48dd-ae35-c47651cda8ce/resource/bfc4fd73-954c-43c5-afdc-4fde928aa88f/download/manual-como-protocolar-um-pedido-de-acesso-a-informacao-online-lai.pdf" isExternal textDecoration="underline" >
    <strong>Manual Como protocolar um Pedido de Acesso à Informação Online - LAI</strong>
  </Link>
</VStack>
 


            </Text>

 
                </Flex>
              </AccordionPanel>
            </AccordionItem>


             <AccordionItem  pt={4} borderRadius='15px' border='1px solid 'mb='15px'>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                      RELATÓRIOS ANUAIS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex flexDirection='column'>
                 
             <Text>
          
<VStack align="start" spacing={3}>
  <Link href="https://dados.mogidascruzes.sp.gov.br/dataset/539c1429-98f9-48dd-ae35-c47651cda8ce/resource/65c33fa7-4ad2-4d5f-83cf-9078aa8bdbc5/download/relatorio-anual-lai-2022-transparencia-passiva.pdf" isExternal textDecoration="underline" >
   <strong>Relatório Anual LAI 2022 - Transparência Passiva </strong>
  </Link>

  <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/5c16c6ef-f19c-4539-9b9f-2867617f7d37/Relat%C3%B3rio_2023_-_Transpar%C3%AAncia_LAI.pdf" isExternal textDecoration="underline" >
    <strong>Relatório 2023 - Transparência LAI</strong>
  </Link>

  
</VStack>
 


            </Text>

 
                </Flex>
              </AccordionPanel>
            </AccordionItem>


            <AccordionItem  pt={4} borderRadius='15px' border='1px solid 'mb='15px'>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                      ROL DE DOCUMENTOS CLASSIFICADOS EM GRAU DE SIGILO
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex flexDirection='column'>
                 
             <Text>
         O Lei Municipal nº 7.983/23 regulamenta o acesso a informações no âmbito da Prefeitura Municipal de Mogi das Cruzes e permite que a informação em seu poder, observado seu teor e em razão de sua imprescindibilidade à segurança da sociedade ou do Estado, seja classificada, quanto ao grau de sigilo, nos termos do art. 24 da Lei Federal nº 12.527/2011. Elas podem ser classificadas como ultrassecreta, secreta ou reservada: 
           <br/>
          <strong>Ultrassecreto:</strong> Refere-se a informações cuja divulgação pode causar dano muito grave à segurança da sociedade e do Estado. O prazo máximo de restrição de acesso à informação é de 25 anos. 
           <br/>
           <strong>Secreto: </strong> Envolve informações cuja divulgação pode causar dano significativo à segurança da sociedade e do Estado, tendo como prazo máximo 15 anos. 
           <br/>
           <strong>Reservado: </strong>Diz respeito a informações cuja divulgação pode causar dano à segurança da sociedade e do Estado, com restrição máxima de 5 anos. 
           <br/>
           A classificação dos documentos/informações em cada grau de sigilo tem por objetivo proteger interesses estratégicos e garantir a segurança da sociedade ou do Estado, estabelecendo critérios específicos para a restrição de acesso a determinadas informações, conforme disposições legais. 
           <br/>
           <strong>Não houve, no âmbito da administração municipal, nenhuma classificação de informação nos termos do §1º do art. 24 da Lei nº 12.527/2011 nos anos de 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024 e 2025.</strong>
           <br />
           Caso venha a ocorrer a classificação, conforme previsto no artigo 29 da Lei nº 12.527/2011 (Lei de Acesso à Informação – LAI), o cidadão pode solicitar a reavaliação da classificação das informações com vistas à sua desclassificação ou à redução do prazo de sigilo por meio do <Link href="https://mogidascruzes.1doc.com.br/b.php?pg=wp/wp&s=mogidascruzes&itd=3&is=24880" isExternal textDecoration="underline">
    Sistema SIC
  </Link>. 
          
            </Text>

 
                </Flex>
              </AccordionPanel>
            </AccordionItem>

             <AccordionItem  pt={4} borderRadius='15px' border='1px solid 'mb='15px'>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='center' fontWeight='bold' fontSize='l'>
                     ROL DE DOCUMENTOS DESCLASSIFICADOS EM GRAU DE SIGILO
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel m={4} p={8} bg={"white"} borderRadius={4}>
                <Flex flexDirection='column'>
                 
             <Text>
         Não há documentos desclassificados.  
            </Text>

 
                </Flex>
              </AccordionPanel>
            </AccordionItem>

        </Accordion>

        </ContainerBasic>

  
  );
}

export default HomeScreen;
