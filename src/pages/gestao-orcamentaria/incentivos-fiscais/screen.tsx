import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Divider, Link, ListItem, Stack, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { FaDownload } from "react-icons/fa";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Incentivos Fiscais",
  description:
    "   ",
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
        <Divider borderWidth="2px" mt="10" mb="10" />
        <Text fontSize="large" fontWeight="550" paddingLeft="5px" pb="15px">
          Incentivos Fiscais - Projetos Culturais
        </Text>

        <Text  fontSize="m"  paddingLeft="5px" pb="15px" color="gray.500" textAlign="justify">
        A Lei Municipal de Incentivo à Cultura de Mogi das Cruzes é uma importante ferramenta para o financiamento de projetos culturais na cidade. Criada em 2014 e regulamentada em 2015, essa lei permite que tanto pessoas físicas quanto jurídicas direcionem até 20% dos seus impostos de IPTU e ISS para apoiar iniciativas culturais que foram previamente aprovadas. Essa destinação é possível graças a um estudo financeiro conduzido pela Secretaria Municipal de Finanças, que determinou que entre 1,5% e 3% da receita anual desses tributos pode ser investida em projetos culturais.
<br/>
A lei é abrangente e contempla diversas áreas, como música, dança, cinema, literatura, artes visuais e até pesquisa científica, incentivando a diversidade e o crescimento cultural na cidade. Essa política não só fortalece o cenário cultural local, mas também engaja a comunidade e empresas na valorização e apoio às manifestações culturais.
        </Text>

        
        
        <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>

                          <Link href="http://www3.cultura.pmmc.com.br/lic/documentos/cartilha_lic.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> Cartilha LIC</ListItem ></div></Link>
                          <Link href="http://www.cultura.pmmc.com.br/images/stories/2015/lei6959-2014.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>Lei 6959/2014</ListItem ></div></Link>
                          <Link href="http://www3.cultura.pmmc.com.br/lic/documentos/decreto15940-2016.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>Decreto 15940/2016</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/7cbc0b44-8597-48f5-824f-dd265c214317/16.4_Dados_espec%C3%ADficos_sobre_incentivos_re_1dt7MUw.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Dados específicos sobre incentivos relacionados a projetos culturais -  LIC Mogi</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/c68eacec-9d1a-4d47-bd91-268f99168aff/RELATORIOS_LIC_2019.xlsx" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> RELATORIOS LIC 2019</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/6e417080-286a-4800-84d9-b96007f2a47e/RELATORIOS_LIC_2020.xlsx" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> RELATORIOS LIC 2020</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/0a818c57-7ace-4ce0-89eb-9d628c8f91fd/RELATORIOS_LIC_2021.xlsx" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> RELATORIOS LIC 2021</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/b1b6f0db-f5dc-42c9-967b-6d0582feeca8/RELATORIOS_LIC_2022.xlsx" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> RELATORIOS LIC 2022</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/b48fdeb0-fe8b-4372-9c0c-0fc12fe7fd00/RELATORIOS_LIC_2023.xlsx" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> RELATORIOS LIC 2023</ListItem ></div></Link>
                          
                        </UnorderedList>



                        <Divider borderWidth="2px" mt="10" mb="10" />

<Text fontSize="large" fontWeight="550" paddingLeft="5px" pb="15px">
  Incentivos Fiscais - Projetos Esportivos
</Text>


        <Text  fontSize="m"  paddingLeft="5px" pb="15px" color="gray.500" textAlign="justify">
        
        A <Link href='https://www.mogidascruzes.sp.gov.br/public/site/doc/20231109111722654cdbe29447a.pdf' target="blank" style={{ color: "#db334f" }}> 
            
         Lei Complementar 184/2023 
             
           </Link>
         criou um incentivo fiscal local para contribuintes do IPTU e ISS que fizerem doações ou patrocínios financeiros para o desenvolvimento do esporte amador na cidade, por meio do Fundo Municipal do Esporte (FME). Cada proponente tem até 180 dias para fazer a captação do recurso. As empresas tem até o dia 20 de cada mês para se cadastrarem.

Foram entregues (25/04/2024) os CIDs - Certificado de Incentivo ao Desporto para todos os proponentes que escreveram os projetos na LIDE e foram aprovados. Ao todo foram inscritos 65 projetos e desses, 41 foram aprovados, 6 aguardam recurso e 18 foram indeferidos e arquivados. Os projetos foram enquadrados nas áreas Educacional, Formação Desportiva, Rendimento, Sóciodesportiva, Participativa e Gestão e desenvolvimento desportivo. 

Para os próximos anos, estamos em fase de estudos de um sistema informatizado que vai facilitar tanto a entrega quanto a análise dos processos. 

Atualmente, os Projetos Esportivos estão na fase de captação de recursos pelos proponentes via IPTU e ISS. 

<Text >Data de referência: 13/09/2024</Text>
        </Text>
<UnorderedList listStyleType="none" 
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}>

                  


<Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/e007aa29-fda5-4fd1-a180-8102e1b0e4a7/Decreto_LIDE_2023.pdf" target="_blank">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} />
    <ListItem className="list-group-item" pb={2}>
      Decreto LIDE 2023
    </ListItem>
  </div>
</Link>

<Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/1babe010-2cbb-4571-b080-f886ad666588/Lei_Complementar_184_de_7_de_novembro_de_2_FEwJjuS.pdf" target="_blank">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} />
    <ListItem className="list-group-item" pb={2}>
      Lei Complementar 184 de 7 de novembro de 2023.LEI DE INCENTIVO MOGI
    </ListItem>
  </div>
</Link>

<Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/d6ae585a-085a-4ad7-ba73-48aed1147fda/Rela%C3%A7%C3%A3o_Projetos_LIDE_2024.pdf" target="_blank">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} />
    <ListItem className="list-group-item" pb={2}>
      Relação Projetos LIDE 2024
    </ListItem>
  </div>
</Link>

<Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/3dd3acf8-78a5-4aa9-9a3e-597aa2e6ca24/RESOLU%C3%87%C3%83O_SMEL_n%C2%BA_01.2024_ok.pdf" target="_blank">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} />
    <ListItem className="list-group-item" pb={2}>
      RESOLUÇÃO SMEL nº 01.2024
    </ListItem>
  </div>
</Link>

                  
                  
                </UnorderedList>                 
     
     


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
