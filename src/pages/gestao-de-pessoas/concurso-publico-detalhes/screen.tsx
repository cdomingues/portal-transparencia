import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import CardConcursoDetalhe from "../../../components/CardConcursosDetalhe";
import TesteArquivos from "../../../components/ListarArquivos";
import usePagina from '../../../hooks/usePagina';

type PropsInput = {
  handler: {};
};

function Screen({ id }: any) {
  const accessibility = useFontSizeAccessibilityContext();
 const router = useRouter();
  const url_video = "https://www.youtube.com/embed/_2b8fcV3Q04?list=PLr6uMRVxi5CZDYEttIUVaIzsm07L7qI6a";
  const titulo = "O QUE É CONCURSO PÚBLICO?"; 
  const urlConcurso = `https://dadosadm.mogidascruzes.sp.gov.br/api/lista_concursos?${id}`
console.log(urlConcurso)

const {paginaData, loadings, error} = usePagina("36");

  if (loadings) {
        return <Text>Carregando conteúdo...</Text>;
      }
    
     if (error) {
      return <Text>Erro ao carregar página: {(error as Error).message}</Text>;
    }
    
      if (!paginaData) {
        return <Text>Página não encontrada</Text>;
      }
    
      const { titulo: titlePage, descricao: description, conteudo } = paginaData;
  

  return (
    <ContainerBasic title={titlePage} description={description}>
    
  
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
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                textAlign="justify"
              >
                O Concurso Público é um processo seletivo que permite o acesso a emprego ou cargo público de modo amplo e democrático. É um procedimento impessoal onde é assegurada igualdade de oportunidades a todos interessados em concorrer para exercer as atribuições oferecidas pelo Estado, a quem incumbirá identificar e selecionar os mais adequados mediante critérios objetivos.
                <br/>
                Fundamentação Legal
                <br/>
                Lei Federal nº 12.527, de 18 de novembro de 2011, Lei complementar nº 145, de 7 de agosto de 2019 e Lei nº 7.986, de 28 de setembro de 2023.
                <br/>
                Informações sobre concursos <br/>
Tel.: (11) 4798-5140 <br/>
Endereço: Av. Vereador Narciso Yague Guimarães, 277, 1º andar - Centro Cívico
<br/>
Informações sobre concursos homologados <br/>
Tel.: (11) 4798-5184 <br/>
Endereço: Av. Vereador Narciso Yague Guimarães, 277, 1º andar - Centro Cívico
                

              </Text>


      </Box>
    <CardConcursoDetalhe url_concurso={urlConcurso}/> 
      
    </ContainerBasic>
  );
}

export default Screen;
