import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Link, Stack, Stat, StatGroup, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import CardHorizon from "../../components/CardHorizon";
import termo_de_fomento from '../../assets/images/icones/acordos e termos__termo de fomento.svg'

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Dados Abertos",
  description:
    "Dashboards",
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
        <StatGroup width="100%" mb={20}>
              <Stat position="unset">
                
                <Stack
                  direction={isMobile ? "column" : "row"}
                  align={isMobile ? "center" : "center"}
                  justifyContent={isMobile ? "flex-start" : "center"}
                >
                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="SMS"
                      imageURL={termo_de_fomento.src}
                      description="..."
                      link="dashboards/sms"
                      backgroundColor="transparent"
                    />
                  </Box>

                  <Box padding="6" bg="transparent" flexDirection="row">
                    <CardHorizon
                      title="SME"
                      imageURL={termo_de_fomento.src}
                      description="..."
                      link="dashboards/sme"
                      backgroundColor="transparent"
                    />
                  </Box>
                </Stack>

               

                
              </Stat>
            </StatGroup>


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
