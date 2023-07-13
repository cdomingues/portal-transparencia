import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import CountyPanel from "../../components/Panel/County";
import TourismPanel from "../../components/Panel/Tourism";
import HealthPanel from "../../components/Panel/Health";
import EducationPanel from "../../components/Panel/Education";
import SecurityPanel from "../../components/Panel/Security";
import EnvironmentalPanel from "../../components/Panel/Environmental";
import "leaflet/dist/leaflet.css";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { isMobile } from "react-device-detect";

type PropsInput = {
  handler: {};
};

export const contentMunicipalityProfile = {
  titlePage: "Perfil do Munícipio",
  description:
    "Mogi das Cruzes, ou simplesmente Mogi, é um município brasileiro do estado de São Paulo, localizado na Região Metropolitana de São Paulo. É uma das cidades que integram a região geográfica do Alto Tietê.",
};

function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMunicipalityProfile?.titlePage;
  const description = contentMunicipalityProfile?.description;

  return (
    <ContainerBasic title={title} description={description}>
      <Box
        m={0}
        bgColor={useColorModeValue("white", "gray.700")}
        shadow={"2xl"}
        border="0.5px solid"
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth={isMobile ? "100%" : "85%"}
        borderRadius="18px"
        marginBottom="15px"
      >
        <Tabs>
          <TabList display="flex" flexWrap={"wrap"} whiteSpace="nowrap">
            <Tab fontSize={accessibility?.fonts?.medium}>DEMOGRÁFICO</Tab>
            <Tab fontSize={accessibility?.fonts?.medium}>EMPREENDEDORISMO</Tab>
            <Tab fontSize={accessibility?.fonts?.medium}>SAÚDE</Tab>
            <Tab fontSize={accessibility?.fonts?.medium}>EDUCAÇÃO</Tab>
            <Tab fontSize={accessibility?.fonts?.medium}>SEGURANÇA</Tab>
            <Tab fontSize={accessibility?.fonts?.medium}>AMBIENTAL</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CountyPanel />
            </TabPanel>
            <TabPanel>
              <TourismPanel />
            </TabPanel>
            <TabPanel>
              <HealthPanel />
            </TabPanel>
            <TabPanel>
              <EducationPanel />
            </TabPanel>
            <TabPanel>
              <SecurityPanel />
            </TabPanel>
            <TabPanel>
              <EnvironmentalPanel />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
