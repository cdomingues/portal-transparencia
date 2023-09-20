

import React, { ReactNode, useState, useEffect } from "react";
import { Box, Heading, Text, Divider, Stack } from "@chakra-ui/react";
import Vlibras from 'vlibras-nextjs';
import Head from "next/head";
import { Container, Body } from "./styles";
import Breadcrumb from "../../Breadcrumb";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { isMobile } from "react-device-detect";
import { useColorModeValue } from "@chakra-ui/react";
import useWindowDimensions from "../../../utils/getWindowSize";
import noticias from "../../../../data/noticias.json";

import DisplayNews from "../../NewsHome";

type PropsInput = {
  title: string;
  description: string;
  children: ReactNode;
  containerStyles?: React.CSSProperties;
};



function ContainerHome({
  title,
  description,
  children,
  containerStyles = { paddingLeft: "0%" },
}: PropsInput) {
  const { height, width } = useWindowDimensions();
  const accessibility = useFontSizeAccessibilityContext();
  const [showAside, setShowAside] = useState(!isMobile);

  const [isHovered, setIsHovered] = useState(false);

  

  

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      style={{
        height: "100%",
        alignContent: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Stack
        flex={width > 1024 ? 2 : 2}
        style={{
          paddingLeft: isMobile ? 0 : "0%",
          paddingRight: isMobile ? 0 : "0%",
          justifyContent: "flex-start", // Adicionado
        }}
      >
        <Container
          style={{
            
            alignContent: "flex-start",
            margin: "0 auto",
            ...containerStyles,
          }}
        >
          <Breadcrumb />

          <Box
            m={0}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow="2xl"
            padding={"15px"}
            rounded="md"
            overflow="hidden"

       
            marginBottom="15px"
          >
            <Head>
              <title>{title} - PMMC</title>
            </Head>
            <Vlibras/>
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
            </div>
          </Box>
          {/* <Divider borderWidth="2px" mt="10" mb="10" /> */}
          {children}
        </Container>
      </Stack>
    
    </Stack>
  );
}

export default ContainerHome;
