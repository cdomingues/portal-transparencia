import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CountyPanel from "../../components/Panel/County";
import TourismPanel from "../../components/Panel/Tourism";
import HealthPanel from "../../components/Panel/Health";
import EducationPanel from "../../components/Panel/Education";
import SecurityPanel from "../../components/Panel/Security";
import EnvironmentalPanel from "../../components/Panel/Environmental";
import "leaflet/dist/leaflet.css";

type PropsInput = {
  handler: {};
};

function Screen({ handler }: PropsInput) {
  const title = "Perfil do Munícipio";
  const description =
    "Mogi das Cruzes, ou simplesmente Mogi, é um município brasileiro do estado de São Paulo, localizado na Região Metropolitana de São Paulo e Alto Tietê. É uma das 39 cidades que integram a Região Imediata de São Paulo.";

  return (
    <ContainerBasic title={title} description={description}>
      <Tabs variant="enclosed">
        <TabList  display="flex" flexWrap={"wrap"} whiteSpace="nowrap">
          <Tab fontSize="small">DEMOGRÁFICO</Tab>
          <Tab fontSize="small">EMPREENDEDORISMO</Tab>
          <Tab fontSize="small">SAÚDE</Tab>
          <Tab fontSize="small">EDUCAÇÃO</Tab>
          <Tab fontSize="small">SEGURANÇA</Tab>
          <Tab fontSize="small">AMBIENTAL</Tab>
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
    </ContainerBasic>
  );
}

export default Screen;
