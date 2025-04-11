
import React, { ReactNode, useState, useEffect } from "react";
import { Box, Heading, Text, Divider, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { Container, Body } from "./styles";
import Breadcrumb from "../../Breadcrumb";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { isMobile } from "react-device-detect";
import { useColorModeValue } from "@chakra-ui/react";
import useWindowDimensions from "../../../../src/utils/getWindowSize";
//import noticias from "../../../../data/noticias.json";
//import DisplayNews from "../../../components/NewsHome";

type PropsInput = {
  title: string | any;
  description: string | any;
  children: ReactNode;
  containerStyles?: React.CSSProperties;
  showAsideByDefault?: boolean; // New Prop
  showToggleButton?: boolean;
  showFirstBox?: boolean; // Nova propriedade
};



function ContainerBasic({
  title,
  description,
  children,
  containerStyles = { paddingLeft: "0%" },
  showAsideByDefault = true,
  showToggleButton = true,
  showFirstBox = true,
}: PropsInput) {
  const { height, width } = useWindowDimensions();
  const accessibility = useFontSizeAccessibilityContext();
  const [showAside, setShowAside] = useState(showAsideByDefault);

  const [isHovered, setIsHovered] = useState(false);

  

 

  return (
    <Stack
    
      direction={isMobile ? "column" : "row"}
      style={{
        height: "100%",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "transparent",
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
            width:"100%",
            alignContent: "flex-start",
            margin: "0 auto",
            ...containerStyles,
           // backgroundColor: 'red'
          }}
          
        >
          <Breadcrumb />
          {showFirstBox && (
            <Box
              m={0}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.800")}
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
              </div>
            </Box>
          )}
          {/* <Divider borderWidth="2px" mt="10" mb="10" /> */}
          {children}
        </Container>
      </Stack>
     
    
    </Stack>
  );
}

export default ContainerBasic;
