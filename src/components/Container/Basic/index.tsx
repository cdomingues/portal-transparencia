import React, { ReactNode } from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import Head from "next/head";
import { Container, Body } from "./styles";
import Breadcrumb from "../../Breadcrumb";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { isMobile } from "react-device-detect";
import { useColorModeValue } from "@chakra-ui/react";

type PropsInput = {
  title: string;
  description: string;
  children: ReactNode;
  containerStyles?: React.CSSProperties;
};

function ContainerBasic({
  title,
  description,
  children,
  containerStyles = { paddingLeft: "2%" },
}: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  return (
    <Container
      style={{ maxWidth: "1280px", margin: "0 auto", ...containerStyles }}
    >
      <Breadcrumb />

<Box       
m={0}
bg={useColorModeValue("white", "gray.800")}
boxShadow="2xl"
padding={"15px"}
rounded="md"
overflow="hidden"
maxWidth="95%"
borderRadius="18px"
marginBottom="15px"
>
      <Head>
        <title>{title} - PMMC</title>
      </Head>
      <Heading mb={2} fontSize={accessibility?.fonts?.ultraLarge} color="text.dark">
        {title}
      </Heading>
      <div style={{paddingRight: isMobile? "0%" : "20%"}}>
      <Text align= {isMobile? 'justify' : "left"} color="gray.500" fontSize={accessibility?.fonts?.regular}>
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
  );
}

export default ContainerBasic;
