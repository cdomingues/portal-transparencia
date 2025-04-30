import React from "react";
import Head from "next/head";
import publicRoutes from "../../../routes/public";
import Footer from "./Footer";
//import SideBar from "./SideBar";
import Header from "./Header";
import Lupa from "../../../assets/images/Lupa.png";
import CardHorizon from "../../CardHorizon";
import Brasao_PMMC_Normal from "../../../assets/images/Brasao_PMMC_Normal.png";
import Brasao_PMMC_white from "../../../assets/images/Brasao_PMMC_white.png";
import lupaNormal from "../../../assets/images/lupa_portal.png";
import lupaDark from "../../../assets/images/lupa_portal_dark.png";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import receitas_multas_de_transito from "../../../assets/images/icones/receitas multas de transito.svg";
import bg_transparencia from '../../../assets/images/icones/bg_transparencia.png'
import {
  Box,
  Spacer,
  Stack,
  useColorModeValue,
  Text,
  Image,
} from "@chakra-ui/react";
import CardHome2 from "../../CardHome2";
//import VLibras from "vlibras-nextjs";
import ModalPopup from "../../Modal";


// type Props = {
//   children?: React.ReactNode;
// };

function PublicHome() {
  const url_video = "https://www.youtube.com/embed/GmqSBItXyN4?list=PLr6uMRVxi5CZDYEttIUVaIzsm07L7qI6a";
  const titulo = "O que é o portal da transparência?"; 
  const accessibility = useFontSizeAccessibilityContext();
  const brasaoImageSrc = useColorModeValue(
    Brasao_PMMC_Normal.src,
    Brasao_PMMC_white.src
  );
  const lupaSrc = useColorModeValue(lupaNormal.src, lupaDark.src);

  return (
    <>
     
      <Head>
        <title>Início</title>
      </Head>
      <Header />
      <Image src={bg_transparencia.src} alt=""width='100%' mb='78px'/>

      {/* Menu de abertura */}
      <Stack
        backgroundColor={"transparent"}
        width={"100%"} // Ocupa toda a largura da tela
        maxWidth={"1280px"} // Largura máxima de 1280 pixels
        alignItems="center" // Centraliza os filhos verticalmente
        justifyContent="center" // Centraliza os filhos horizontalmente
        margin="0 auto" // Centraliza a Stack horizontalmente na tela
        
        
      >
        <Text
                fontWeight={"bold"}
                fontSize={{
                  base: accessibility?.fonts?.small || "14px",  // Mobile
                  md: accessibility?.fonts?.regular || "16px", // Tablets e acima
                  lg: accessibility?.fonts?.large || "18px",   // Desktop
                }}
                justifyItems={"center"}
                fontFamily={"Open Sans"}
                height='105.3px'
                 mb='156px'
                 width='80%'
                
                 >
                O Portal da Transparência da Prefeitura de Mogi das Cruzes reúne dados e informações da administração municipal, possibilitando o controle social e acompanhamento interno e externo das ações do poder público.  
 <br/>
 Com o objetivo de divulgar ativamente dados de interesse coletivo ou privado, o portal atende aos critérios estabelecidos pelo artigo 5º do Decreto Municipal nº22.604/2024 e artigo 6º da Lei Municipal nº 7.986/23 que regulamenta a Lei  Federal nº 12.527/11 (Lei de Acesso à Informação).
              </Text>
      </Stack>

     <Stack >
        <CardHome2 />
      </Stack>

      <Footer />
    </>
  );
}

export default PublicHome;
