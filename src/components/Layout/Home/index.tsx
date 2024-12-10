import React from "react";
import Head from "next/head";
import publicRoutes from "../../../routes/public";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Header from "./Header";
import Lupa from "../../../assets/images/Lupa.png";
import CardHorizon from "../../CardHorizon";
import Brasao_PMMC_Normal from "../../../assets/images/Brasao_PMMC_Normal.png";
import Brasao_PMMC_white from "../../../assets/images/Brasao_PMMC_white.png";
import lupaNormal from "../../../assets/images/lupa_portal.png";
import lupaDark from "../../../assets/images/lupa_portal_dark.png";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import receitas_multas_de_transito from "../../../assets/images/icones/receitas multas de transito.svg";
import {
  Box,
  Spacer,
  Stack,
  useColorModeValue,
  Text,
  Image,
} from "@chakra-ui/react";
import CardHome from "../../CardHome";
//import VLibras from "vlibras-nextjs";
import ModalPopup from "../../Modal";
import Video from "../../Videos";

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

      {/* Menu de abertura */}
      <Stack
        backgroundColor={"transparent"}
        width={"80%"} // Ocupa toda a largura da tela
        maxWidth={"1280px"} // Largura máxima de 1280 pixels
        alignItems="center" // Centraliza os filhos verticalmente
        justifyContent="center" // Centraliza os filhos horizontalmente
        margin="0 auto" // Centraliza a Stack horizontalmente na tela
        paddingTop={15}
      >
        <Stack
          background="transparent"
          direction="row"
          spacing={20}
          align="center" // Centraliza verticalmente
          justify="center" // Centraliza horizontalmente
        >
          {/* Primeira coluna: Imagem */}
          <Stack
            background="transparent"
            w={"30%"}
            h={"100%"}
            align="center" // Centraliza verticalmente
            justify="center" // Centraliza horizontalmente
          >
            <Box
              m={0}
              bg={useColorModeValue("transparent", "gray.800")}
              overflow="hidden"
              maxWidth="100%"
              marginBottom="15px"
              borderRight="3px solid black" // Borda preta na lateral direita
              paddingRight={15}
              height={120}
            >
              <Image alt="logo" width="200px" src={brasaoImageSrc} />
              <ModalPopup />
            </Box>
          </Stack>

          <Stack
            background="transparent"
            w={"80%"}
            h={"100%"}
            align="center" // Centraliza verticalmente
            justify="left" // Centraliza horizontalmente
          >
            {/* Segunda coluna: Textos */}
            <Box
              m={0}
              bg={useColorModeValue("white", "gray.800")}
              overflow="hidden"
              maxWidth="100%"
              marginBottom="15px"
              display="flex"
              flexDirection="column"
              justifyContent="left"
              alignItems={"start"}
            >
              <Text
                textColor={"blue.500"}
                fontFamily={"sans-serif"}
                fontWeight={"semibold"}
                textAlign={"left"}
                fontSize={accessibility?.fonts?.large}
                // fontSize={"2xl"}
              >
                SEJA BEM-VINDO AO PORTAL DE TRANSPARÊNCIA DE MOGI DAS CRUZES
              </Text>
              <Text
                fontWeight={"light"}
                fontSize={accessibility?.fonts?.medium}
                justifyItems={""}
              >
                O lugar onde o controle social começa! Acompanhe todas as
                informações de receitas e despesas da Prefeitura, com
                detalhamento e maior facilidade de entendimento.
              </Text>
              <Video url_video={url_video} titulo={titulo} />
            </Box>
          </Stack>

          <Stack
            background="transparent"
            w={"20%"}
            h={"100%"}
            align="center" // Centraliza verticalmente
            justify="left" // Centraliza horizontalmente
          >
            {/* Terceira coluna: Imagem */}
            <Box
              m={0}
              bg={useColorModeValue("white", "gray.800")}
              overflow="hidden"
              maxWidth="80%"
              marginBottom="15px"
            >
              <Image alt="logo" width="100px" src={lupaSrc} />
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Stack height={20}></Stack>

      <Stack>
        <CardHome />
      </Stack>

      <Footer />
    </>
  );
}

export default PublicHome;
