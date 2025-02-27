import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Dashboards - SMS",
  description:
    "Dashboards ...",
};





function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();
  
  return (
    <ContainerBasic title={title} description={description}>
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
        <Box display="flex" flexDirection="column" gap="40px" alignItems="center" padding='20px'>
        <iframe title="DADOS DENGUE - ABERTO V3" width="90%" height="480" src="https://app.powerbi.com/view?r=eyJrIjoiYzM1NGFhZWMtNGYwNS00ZDlhLTkyZTgtNTQ1MGMzZGVkZGE3IiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9" ></iframe>

        <iframe title="SMS - PRESTAÇÃO DE CONTAS 2024" width="90%" height="480" src="https://app.powerbi.com/view?r=eyJrIjoiZDc0MTZlY2MtODdkMi00MDI5LWEwMTQtYWM0OGJlNDVlY2YyIiwidCI6IjU3MjU0YWRhLTUxMmUtNDhjNi05NTI5LTAyOTE4ODg1OTliZiJ9" ></iframe>
        </Box>

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
