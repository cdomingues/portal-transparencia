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
  Stack,
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
import useWindowDimensions from "../../utils/useWindowDimensions";

type PropsInput = {
  handler: {};
};

export const contentMunicipalityProfile = {
  titlePage: "Perfil do Munícipio - Mogi das Cruzes",
  description:
    "Mogi das Cruzes é um município brasileiro do estado de São Paulo, localizado na Região Metropolitana de São Paulo, e integrante da região geográfica do Alto Tietê. Estrategicamente localizada próxima a São Paulo, Mogi das Cruzes é um centro logístico e econômico importante na região, comprometido com a inovação e o governo aberto para melhorar a vida de seus cidadãos e estimular o desenvolvimento sócio-econômico.",
};

function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMunicipalityProfile?.titlePage;
  const description = contentMunicipalityProfile?.description;
  const { height, width } = useWindowDimensions();

  return (
    <ContainerBasic title={title} description={description}>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Stack direction={isMobile ? "column" : "row"} flex={1}>
          <Stack direction="column" flex={3}>
            <Tabs>
              <TabList>
                <Tab fontSize={accessibility?.fonts?.medium}>DEMOGRÁFICO</Tab>
                {/* <Tab fontSize={accessibility?.fonts?.medium}>EMPREENDEDORISMO</Tab>
      <Tab fontSize={accessibility?.fonts?.medium}>SAÚDE</Tab>
      <Tab fontSize={accessibility?.fonts?.medium}>EDUCAÇÃO</Tab>
      <Tab fontSize={accessibility?.fonts?.medium}>SEGURANÇA</Tab>
      <Tab fontSize={accessibility?.fonts?.medium}>AMBIENTAL</Tab> */}
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
          </Stack>
        </Stack>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
