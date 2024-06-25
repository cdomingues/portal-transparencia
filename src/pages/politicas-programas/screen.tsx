import React, { useEffect, useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import { Accordion, AccordionButton, Text,AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Icon, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import Video from "../../components/Videos";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Políticas e Programas",
  description: "Confira as políticas e programas, ações e projetos realizadas pela Prefeitura de Mogi das Cruzes",
};

function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const url_video = "https://www.youtube.com/embed/K7_TUkedcGA?si=iPxaKODtZnboQT-_";
  const titulo = "O QUE SÃO AS SEIS MEDIDAS?";
  const router = useRouter();

  

  

  return (
    <ContainerBasic title={title} description={description}>
      
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
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
                Secretaria Municipal de Assistência Social    
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                
                Auxílio Emergencial Mogiano <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-assistencia-social/auxilio-emergencial-mogiano" target="blank" style={{ color: "#db334f" }} >https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-assistencia-social/auxilio-emergencial-mogiano</Link> <br/> 
                Imposto de Renda do Bem  <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-assistencia-social/imposto-de-renda-do-bem" target="blank" style={{ color: "#db334f" }} >https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-assistencia-social/imposto-de-renda-do-bem</Link> <br/> 
                </Text>
                <Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.regular}
>
Secretaria Municipal de Educação
</Text>
<Text
  align={isMobile ? "justify" : "left"}
  color="gray.500"
  fontSize={accessibility?.fonts?.regular}
  mb={4}
>
  Astro <br/><Link href="https://portal.sme-mogidascruzes.sp.gov.br/paginas/astro" target="blank" style={{ color: "#db334f" }}>https://portal.sme-mogidascruzes.sp.gov.br/paginas/astro</Link> <br/> 
  Aprendi <br/><Link href="https://portal.sme-mogidascruzes.sp.gov.br/paginas/aprendi" target="blank" style={{ color: "#db334f" }}>https://portal.sme-mogidascruzes.sp.gov.br/paginas/aprendi</Link> <br/> 
  Currículo Municipal <br/><Link href="https://portal.sme-mogidascruzes.sp.gov.br/publicacoes/curriculo-municipal" target="blank" style={{ color: "#db334f" }}>https://portal.sme-mogidascruzes.sp.gov.br/publicacoes/curriculo-municipal</Link> <br/> 
  Educa + Mogi <br/><Link href="https://sge.sme-mogidascruzes.sp.gov.br/educamaismogi/" target="blank" style={{ color: "#db334f" }}>https://sge.sme-mogidascruzes.sp.gov.br/educamaismogi/</Link> <br/> 
  Migo! <br/><Link href="https://portal.sme-mogidascruzes.sp.gov.br/paginas/migo" target="blank" style={{ color: "#db334f" }}>https://portal.sme-mogidascruzes.sp.gov.br/paginas/migo</Link> <br/> 
  Simulados <br/><Link href="https://portal.sme-mogidascruzes.sp.gov.br/paginas/simulados" target="blank" style={{ color: "#db334f" }}>https://portal.sme-mogidascruzes.sp.gov.br/paginas/simulados</Link> <br/> 
</Text>

<Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.regular}
>
Secretaria Municipal de Saúde
</Text>
<Text
  align={isMobile ? "justify" : "left"}
  color="gray.500"
  fontSize={accessibility?.fonts?.regular}
  mb={4}
>
  Programa Mãe Mogiana <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-mae-mogiana" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-mae-mogiana</Link> <br/> 
  Programa de DST/AIDS <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-dstaids" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-dstaids</Link> <br/> 
  Programa Saúde da Família <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/cadastro-no-programa-saude-da-familia" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/cadastro-no-programa-saude-da-familia</Link> <br/> 
  Programa Controle em Casa <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-controle-em-casa" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-controle-em-casa</Link> <br/> 
  Programa Oxigenoterapia Domiciliar <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-oxigenoterapia-domiciliar" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-oxigenoterapia-domiciliar</Link> <br/> 
  Programa Nacional de Suplementação de Vitamina A <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-nacional-de-suplementacao-de-vitamina-a" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-nacional-de-suplementacao-de-vitamina-a</Link> <br/> 
  Programa Hiperdia <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-hiperdia" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-hiperdia</Link> <br/> 
  Programa de Planejamento Familiar <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-planejamento-familiar" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-planejamento-familiar</Link> <br/> 
  Programa de Órtese e Prótese <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-ortese-e-protese" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-ortese-e-protese</Link> <br/> 
  Programa de Medicamento Gratuito <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-medicamento-gratuito" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-medicamento-gratuito</Link> <br/> 
  Programa de Medicamento em Casa <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-medicamento-em-casa" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-medicamento-em-casa</Link> <br/> 
  Programa de Controle de Hanseníase <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-controle-de-hanseniase" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-controle-de-hanseniase</Link> <br/> 
  Programa de Controle da Tuberculose <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-controle-da-tuberculose" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-controle-da-tuberculose</Link> <br/> 
  Programa de Combate ao Tabagismo <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-combate-ao-tabagismo" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-saude/servico/saude/programa-de-combate-ao-tabagismo</Link> <br/> 
</Text>

<Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.regular}
>
Secretaria Municipal de Segurança
</Text>
<Text
  align={isMobile ? "justify" : "left"}
  color="gray.500"
  fontSize={accessibility?.fonts?.regular}
  mb={4}
>
  Câmeras ao vivo <br/><Link href="https://www.mogidascruzes.sp.gov.br/camera-ao-vivo" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/camera-ao-vivo</Link> <br/> 
  Patrulha Maria da Penha <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-seguranca/patrulha-maria-da-penha" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-seguranca/patrulha-maria-da-penha</Link> <br/> 
  Patrulha Rural <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-seguranca/patrulha-rural" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-seguranca/patrulha-rural</Link> <br/> 
  Ronda Escolar <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-seguranca/ronda-escolar" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-seguranca/ronda-escolar</Link> <br/> 
  Operação Verão <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-seguranca/operacao-verao" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-seguranca/operacao-verao</Link> <br/> 
</Text>

<Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.regular}
>
Secretaria Municipal de Cultura
</Text>
<Text
  align={isMobile ? "justify" : "left"}
  color="gray.500"
  fontSize={accessibility?.fonts?.regular}
  mb={4}
>
  Diálogo Aberto <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-cultura/dialogo-aberto" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-cultura/dialogo-aberto</Link> <br/> 
  Educação Patrimonial <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-cultura/educacao-patrimonial" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-cultura/educacao-patrimonial</Link> <br/> 
  Mogi Feita à Mão <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-cultura/mogi-feita-a-mao" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-cultura/mogi-feita-a-mao</Link> <br/> 
  Pró-Memória <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-cultura/pro-memoria" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-cultura/pro-memoria</Link> <br/> 
</Text>

<Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.regular}
>
Secretaria Municipal de Desenvolvimento Econômico e Inovação
</Text>
<Text
  align={isMobile ? "justify" : "left"}
  color="gray.500"
  fontSize={accessibility?.fonts?.regular}
  mb={4}
>
  Auxílio Empresarial Mogiano <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-desenvolvimento-economico-e-inovacao/auxilio-empresarial-mogiano" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-desenvolvimento-economico-e-inovacao/auxilio-empresarial-mogiano</Link> <br/> 
  Bolsa Trabalho <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-desenvolvimento-economico-e-inovacao/bolsa-trabalho" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-desenvolvimento-economico-e-inovacao/bolsa-trabalho</Link> <br/> 
</Text>

<Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.regular}
>
Secretaria Municipal de Esportes e Lazer
</Text>
<Text
  align={isMobile ? "justify" : "left"}
  color="gray.500"
  fontSize={accessibility?.fonts?.regular}
  mb={4}
>
  Atleta Mogiano <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/atleta-mogiano" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/atleta-mogiano</Link> <br/> 
  Esporte Nas Escolas <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/esporte-nas-escolas" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/esporte-nas-escolas</Link> <br/> 
  Estações do Esporte <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/estacoes-do-esporte" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/estacoes-do-esporte</Link> <br/> 
  Eventos Esportivos <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/eventos-esportivos" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/eventos-esportivos</Link> <br/> 
  Joga Junto Mogi <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/joga-junto-mogi" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/joga-junto-mogi</Link> <br/> 
  Mogi Paralímpico <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/mogi-paralimpico" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/mogi-paralimpico</Link> <br/> 
  Tô de Férias Mogi <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/to-de-ferias-mogi" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-esportes-e-lazer/to-de-ferias-mogi</Link> <br/> 
</Text>

<Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.regular}
>
Secretaria Municipal de Gestão Pública
</Text>
<Text
  align={isMobile ? "justify" : "left"}
  color="gray.500"
  fontSize={accessibility?.fonts?.regular}
  mb={4}
>
  Empresa Capaz <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-gestao-publica/empresa-capaz" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-gestao-publica/empresa-capaz</Link> <br/> 
  PMAT - Modernização da Administração Tributária e da Gestão dos Setores Sociais Básicos <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-gestao-publica/pmat-modernizacao-da-administracao-tributaria-e-da-gestao-dos-setores-sociais-basicos" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-gestao-publica/pmat-modernizacao-da-administracao-tributaria-e-da-gestao-dos-setores-sociais-basicos</Link> <br/> 
</Text>

<Text
  align={isMobile ? "justify" : "left"}
  fontWeight="700"
  fontSize={accessibility?.fonts?.regular}
>
Secretaria Municipal de Meio Ambiente e Proteção Animal
</Text>
<Text
  align={isMobile ? "justify" : "left"}
  color="gray.500"
  fontSize={accessibility?.fonts?.regular}
  mb={4}
>
  Política de Educação Ambiental <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-meio-ambiente-e-protecao-animal/politica-municipal-de-educacao-ambiental" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-meio-ambiente-e-protecao-animal/politica-municipal-de-educacao-ambiental</Link> <br/> 
  Educadores Ambientais Locais <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-meio-ambiente-e-protecao-animal/curso-de-formacao-de-educadores-ambientais-locais" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-meio-ambiente-e-protecao-animal/curso-de-formacao-de-educadores-ambientais-locais</Link> <br/> 
  Adote uma Praça <br/><Link href="http://www.mogidascruzes.sp.gov.br/servico/todos-os-assuntos/adote-uma-praca" target="blank" style={{ color: "#db334f" }}>http://www.mogidascruzes.sp.gov.br/servico/todos-os-assuntos/adote-uma-praca</Link> <br/> 
  Jogos Escolares da Sustentabilidade <br/><Link href="https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-meio-ambiente-e-protecao-animal/jogos-escolares-da-sustentabilidade" target="blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-meio-ambiente-e-protecao-animal/jogos-escolares-da-sustentabilidade</Link> <br/> 
</Text>

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
