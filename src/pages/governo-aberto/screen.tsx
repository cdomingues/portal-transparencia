import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Img, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import governo_aberto from '../../assets/images/governo-aberto.png'
import cronograma1 from '../../assets/images/cronograma1.png'
import cronograma2 from '../../assets/images/cronograma2.png'
import Video from "../../components/Videos";

type PropsInput = {
  handler: {};
};

const link_externo = <Link href='http://leismunicipa.is/0vxjy' target="blank" style={{ color: "#db334f" }}>  
 Decreto nº 22.203, de 11 de outubro de 2023 
</Link>

export const contentMapSite = {
  titlePage: "Governo Aberto ",
  description:
    <> É um modelo de gestão pública que promove a transparência, a participação cidadã e a colaboração entre governo e sociedade. Em Mogi das Cruzes o 1º Plano de Ação foi cocriado com a população e regulamentado por meio do Decreto nº 22.203, de 11 de outubro de 2023 {link_externo}
    </>
};



function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();

  const url_video = "https://www.youtube.com/embed/hxylu6oWJLU";
  const titulo = "O QUE É GOVERNO ABERTO?"; 
  
  return (
    <ContainerBasic title={title} description={description}>
       <Video url_video={url_video} titulo={titulo} />
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
        textAlign="justify"
        color="gray.500"
        fontSize={accessibility?.fonts?.regular}
      >
        Governo Aberto é uma expressão a qual se refere a uma nova forma de pensar e fazer gestão pública, desenvolvendo ações e projetos baseados em transparência, inovação e tecnologia, participação cidadã e prestação de contas, que são seus 4 princípios basilares.    
<br/>
Com o objetivo de incentivar a eficiência e eficácia por meio dos princípios básicos, são estabelecidos compromissos concretos de governos nacionais ou locais para promover um governo mais aberto, por meio de capacitação dos cidadãos, o aumento da participação cidadã nos processos de construção de políticas públicas e o aproveitamento de novas tecnologias e inovação para fortalecer a governança municipal.
<br/>
<Text
      align={isMobile ? "justify" : "left"}
      fontWeight="700"
      fontSize={accessibility?.fonts?.regular}
      mt="20px"
      color="black"
    >
    1º Plano de Ação de Governo Aberto 
    
  </Text>
  Pensando nisso, a Prefeitura de Mogi das Cruzes, por meio da Secretaria de Transparência e Dados Abertos, realizou o processo de elaboração do seu 1º Plano de Ação Mogiano de Governo Aberto.<br/><br/>
O Plano de Ação é um documento que contém compromissos e soluções pactuados e baseados nos 4 princípios. Para cada princípio, neste 1º Plano teve um compromisso e três marcos, totalizando assim um plano de 12 ações. 
<br/> <br/>
Realizamos o primeiro levantamento de problemas com o CIGAI - Comitê Intersetorial de Governo Aberto e Indicadores, por meio de uma <Link fontWeight="700" href='https://www.mogidascruzes.sp.gov.br/public/site/doc/2023071911093864b7eea263f69.pdf' target="blank" style={{ color: "#db334f" }}>oficina e votação de problemas relacionados a governo aberto</Link>, totalizando assim <Link fontWeight="700" href='https://www.mogidascruzes.sp.gov.br/public/site/doc/2023071911093864b7eea25c4a5.pdf' target="blank" style={{ color: "#db334f" }}>28 apontamentos</Link>, que foram analisados e agrupados totalizando assim <Link fontWeight="700" href='https://www.mogidascruzes.sp.gov.br/public/site/doc/2023071911093864b7eea2f31da.pdf' target="blank" style={{ color: "#db334f" }}>24 apontamentos</Link>. Eles foram votados e selecionados na 1ª e na 2ª Roda de Conversa com Servidores sobre Governo Aberto, chegando assim a 13 problemas.  
<br/><br/>
Realizamos a primeira consulta pública, onde os munícipes puderam votar nos problemas levantados pelos servidores e também contribuir com <Link fontWeight="700" href='https://www.mogidascruzes.sp.gov.br/public/site/doc/2023071911093964b7eea378c8e.pdf' target="blank" style={{ color: "#db334f" }}> novas problemáticas</Link> que consideravam relevantes a respeito dos princípios basilares. Após essa etapa, as novas contribuições dos cidadãos foram compiladas e associadas a 16 grupos de acordo com a similaridade entre si e a correspondência aos 4 princípios. Em seguida, foram <Link fontWeight="700" href='https://www.mogidascruzes.sp.gov.br/public/site/doc/2023071911094064b7eea41c72a.pdf' target="blank" style={{ color: "#db334f" }}>votadas e selecionadas pelo CIGAI</Link>, realizando assim o exercício inverso. O CIGAI também trabalhou em conjunto para reescrever os problemas iniciais, partindo do ponto de vista das “dores” dos munícipes.  
<br/><br/>
Por meio da segunda consulta pública, foram recebidas 263 contribuições, onde os munícipes votaram e priorizaram os 4 problemas que se tornaram os compromissos e ações realizadas por meio do 1º Plano. Após essa etapa, realizamos 1 Oficina de Cocriação de Soluções com os membros do CIGAI e a sociedade civil, e 4 Oficinas de Cocriação de Compromissos com a sociedade civil sobre as temáticas de transparência, tecnologia e inovação, participação cidadã e prestação de contas.   
<br/><br/>
Em seguida, foram realizadas reuniões com as áreas impactadas para a conferência e <Link fontWeight="700" href='https://www.mogidascruzes.sp.gov.br/public/site/doc/20230922155301650de28d2fd60.pdf' target="blank" style={{ color: "#db334f" }}>viabilidade dos compromissos e ações</Link>. Logo depois, foi disponibilizada para revisão colaborativa o texto final do Plano e que pode seu resultado ser acessado <Link fontWeight="700" href='http://bit.ly/revisaogovaberto' target="blank" style={{ color: "#db334f" }}> clicando aqui</Link>. 
<br/><br/>
Confira mais detalhes de como foi a construção e acesse o nosso repositório que contém diversos documentos sobre os processos de cocriação Plano.  
<br/><br/>
Por fim, com as contribuições consolidadas, a redação final do plano foi entregue e finalizada por meio do <Link fontWeight="700" href='https://leismunicipais.com.br/a/sp/m/mogi-das-cruzes/decreto/2023/2221/22203/decreto-n-22203-2023-proc-n-10264-2023-1doc?q=22.203' target="blank" style={{ color: "#db334f" }}>Decreto Municipal nº 22.203/2023.</Link>.  
<br/><br/>
Confira na íntegra o <Link fontWeight="700" href='https://www.mogidascruzes.sp.gov.br/public/site/doc/2023102512473065392a82db908.pdf' target="blank" style={{ color: "#db334f" }}>1º Plano de Ação em Governo Aberto de Mogi das Cruzes</Link>.   
</Text>    
<Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.regular}
  mt="5px"
  pt="20px"
>
  Os compromissos são: 
</Text>
<Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.regular}
  mt="5px"
>
  COMPROMISSO Nº 1: TRANSPARÊNCIA 
</Text>      
<Text
align={isMobile ? "justify" : "left"}
textAlign="justify"
color="gray.500"
fontSize={accessibility?.fonts?.regular}
>Proc. Administrativo 9.555/2023 (1Doc)  <br/>
Aperfeiçoar os meios de acesso à informação viabilizando uma estrutura de transparência mais objetiva, democrática e atualizada que se utilize de uma linguagem simples, clara e inclusiva, fortalecendo o relacionamento entre o cidadão e a Prefeitura de Mogi das Cruzes.  </Text>

<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
COMPROMISSO Nº 2: PARTICIPAÇÃO CIDADÃ  


</Text>      
<Text
align={isMobile ? "justify" : "left"}
textAlign="justify"
color="gray.500"
fontSize={accessibility?.fonts?.regular}
>Proc. Administrativo 9.561/2023 (1Doc) 
<br/>Fortalecer a política de participação cidadã nos bairros, potencializando o uso e aplicação dos recursos humanos, financeiros, tecnológicos e de comunicação da Prefeitura de Mogi das Cruzes para estimular o engajamento da sociedade e garantir a escuta ativa do cidadão na construção das políticas públicas.  
</Text>
<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
COMPROMISSO Nº 3: PRESTAÇÃO DE CONTAS


</Text>      
<Text
align={isMobile ? "justify" : "left"}
textAlign="justify"
color="gray.500"
fontSize={accessibility?.fonts?.regular}
>Proc. Administrativo 9.755/2023 (1Doc)   <br/>
Proporcionar a fácil localização e entendimento das informações relativas ao contexto social do munícipe, por meios que despertem o interesse, de forma inclusiva, viabilizando a fiscalização cidadã quanto a origem e o destino dos recursos públicos. </Text>

<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
COMPROMISSO Nº 4: TECNOLOGIA E INOVAÇÃO



</Text>      
<Text
align={isMobile ? "justify" : "left"}
textAlign="justify"
color="gray.500"
fontSize={accessibility?.fonts?.regular}
>Proc. Administrativo 9.560/2023 (1Doc)  <br/>
Gerar proximidade com o cidadão para compreender suas necessidades tecnológicas, visando estimular o conhecimento e ampliar o uso dos serviços digitais da Prefeitura de Mogi das Cruzes. </Text>

<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
Próximos Passos e Monitoramento 



</Text>      
<Text
align={isMobile ? "justify" : "left"}
textAlign="justify"
color="gray.500"
fontSize={accessibility?.fonts?.regular}
>Estamos na fase de implementação do 1º Plano e a Secretaria de Transparência e Dados Abertos irá acompanhar de perto a implementação dos compromissos. Em cada compromisso foram definidos os métodos de verificação e os prazos para o cumprimento de cada uma das atividades, o que facilitará o acompanhamento da implementação. As primeiras reuniões abertas, para participação da sociedade, e de cada temática ocorreram em <Link fontWeight="700" href='https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-transparencia-e-dados-abertos/noticia/mogi-das-cruzes-faz-na-proxima-quarta-feira-a-1-reuniao-de-monitoramento-do-plano-de-acao-em-governo-aberto' target="blank" style={{ color: "#db334f" }}> 22 novembro de 2023</Link>. Confira abaixo, nosso cronograma de reuniões para 2024 e se programe para participar.  </Text>
<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
Reuniões Abertas 


</Text>
<Text
align={isMobile ? "justify" : "left"}
color="gray.500"
fontSize={accessibility?.fonts?.regular}
>Local: Auditório do Prédio I -  Av. Ver. Narciso Yague Guimarães, 277 - Centro Cívico - 08780-900  </Text>

<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
NOV/23 - 22/11 - 13h30 - presencial 
</Text>

<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
JAN/24 - 24/01 - 14h00 - presencial  

</Text>

<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
MAR/24 - 20/03 - 16h00 - presencial 
</Text>

<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
MAI/24 - 22/05 - 19h00 - online 
</Text>

<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
JUL/24 - 24/07 - 19h00 - online      
</Text>

<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
SET/24 - 18/09 - 14h00 - cancelada 
</Text>
<Text
align={isMobile ? "justify" : "left"}
fontWeight="700"
fontSize={accessibility?.fonts?.regular}
mt="5px"
>
NOV/24 - 29/11 - 14h - online (a confirmar) 
</Text>




<Img pt="20px" src={(governo_aberto.src)} alt="" style={{
    maxWidth: "700px",
  }}/><Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.ultraLarge}
  
  mt="5px"
  pt="30px"
  pb="25px"
  >
  Cronograma do 1º Plano de Ação Mogiano de Governo Aberto 
  </Text>
<Img pt="20px" src={(cronograma1.src)} alt="" style={{
    maxWidth: "700px",
  }} />
<Img pt="20px" src={(cronograma2.src)} alt="" style={{
    maxWidth: "700px",
  }}/>

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
