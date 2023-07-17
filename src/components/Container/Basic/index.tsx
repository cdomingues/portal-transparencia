import React, { ReactNode } from "react";
import { Box, Heading, Text, Divider, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { Container, Body } from "./styles";
import Breadcrumb from "../../Breadcrumb";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { isMobile } from "react-device-detect";
import { useColorModeValue } from "@chakra-ui/react";
import useWindowDimensions from "../../../../src/utils/getWindowSize";
import noticias from "../../../../data/noticias.json";

import DisplayNews from "../../../components/NewsHome";

type PropsInput = {
  title: string;
  description: string;
  children: ReactNode;
  containerStyles?: React.CSSProperties;
};

function Aside() {
  return (
    <div style={{ width: "380px", justifyContent: "left" }}>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <div style={{ padding: "10px" }}>
          <Text fontWeight="500" color={"gray.500"}>
            Últimas Noticias
          </Text>
        </div>
        {noticias.slice(0, 2).map((info) => {
          return (
            <DisplayNews
              key={info.descricao}
              data_noticia={info.data_noticia}
              descricao={info.descricao}
              foto={info.foto}
              titulo={info.titulo}
              link={info.link}
            />
          );
        })}
        <div style={{ padding: "0px", width: "100%" }}></div>
      </Box>
    </div>
  );
}

function ContainerBasic({
  title,
  description,
  children,
  containerStyles = { paddingLeft: "0%" },
}: PropsInput) {
  const { height, width } = useWindowDimensions();
  const accessibility = useFontSizeAccessibilityContext();
  const maxWidth = width < 1500 ? "780px" : "1200px";
  return (
    <Stack 
      direction={isMobile ? "column" : "row"}
      style={{  height: "100%", alignContent: 'flex-start'}}
      
    >
      <Stack
        flex={width > 1024 ? 2 : 2}
        style={{
          paddingLeft: isMobile ? 0 : "0%",
          paddingRight: isMobile ? 0 : "0%",
          alignContent: 'flex-start'
        }}
      >
        <Container
          style={{maxWidth, margin: "0 auto", ...containerStyles }}
        >
          <Breadcrumb />

          <Box
            m={0}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow="2xl"
            padding={"15px"}
            rounded="md"
            overflow="hidden"
            maxWidth="100%"
            borderRadius="18px"
            marginBottom="15px"
            
          >
            <Head>
              <title>{title} - PMMC</title>
            </Head>
            <Heading
              mb={2}
              fontSize={accessibility?.fonts?.ultraLarge}
              color="text.dark"
              
            >
              {title}
            </Heading>
            <div style={{ paddingRight: isMobile ? "0%" : "0%" }}>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
                {description}
              </Text>
              {/* <Body style={{backgroundColor: 'black', maxWidth: '100%' }}>
        <Text align= {isMobile? 'center' : 'left'} color="gray.500" fontSize={accessibility?.fonts?.regular}>
          {description}
        </Text>
      </Body> */}
            </div>
          </Box>
          <Divider borderWidth="2px" mt="10" mb="10" />
          {children}
        </Container>
      </Stack>
      <Stack flex={width > 1024 ? 1 : 2}>
        <Aside />
      </Stack>
    </Stack>
  );
}

export default ContainerBasic;
