import React, { ReactNode } from "react";
import { Heading, Text, Divider } from "@chakra-ui/react";
import Head from "next/head";
import { Container, Body } from "./styles";
import Breadcrumb from "../../Breadcrumb";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";

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
      <Head>
        <title>{title} - PMMC</title>
      </Head>
      <Heading mb={2} fontSize={accessibility?.fonts?.ultraLarge} color="text.dark">
        {title}
      </Heading>
      <Body>
        <Text align="left" color="gray.500" fontSize={accessibility?.fonts?.regular}>
          {description}
        </Text>
      </Body>
      <Divider borderWidth="2px" mt="10" mb="10" />
      {children}
    </Container>
  );
}

export default ContainerBasic;
