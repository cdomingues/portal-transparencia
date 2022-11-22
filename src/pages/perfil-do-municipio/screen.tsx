import { Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import { descriptionData } from "../../data/perfil-do-municipio";
import { descriptionEmpreendedorismo } from "../../data/perfil-empreendedorismo";
import { descriptionSaude } from "../../data/perfil-saude";
import { descriptionEducacao } from "../../data/perfil-educacao";
import { descriptionSeguranca } from "../../data/perfil-seguranca";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { teste1 } from "../../assets/images/teste1.jpg"
import { isMobile } from "react-device-detect";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

type PropsInput = {
  handler: {};
};

const Description = ({ label, value }: { label: string; value: string }) => (
  <Stack
    direction="row"
    backgroundColor="white"
    justifyContent="space-between"
    alignItems="center"
    style={{
      height: "65px",
      padding: "2%",
      borderRadius: "5px",
      marginBottom: "19px",
      marginTop: "19px",
    }}
  >
    <Text fontWeight="550" fontSize="small">
      {label}
    </Text>
    <Text fontSize="small">{value}</Text>
  </Stack>
);

const DescriptionWithIcon = ({
  label,
  value,
  icon,
  descriptionValue,
  labelDescription,
  year,
}: {
  label: string;
  value: string;
  icon?: any;
  descriptionValue: string;
  labelDescription: string;
  year: string;
}) => (
  
  <Stack
    direction="row"
    backgroundColor="white"
    alignItems="center"
    style={{
      height: "65px",
      padding: "2%",
      borderRadius: "5px",
      marginBottom: "19px",
      marginTop: "0px",
      marginRight: "19px",
      marginLeft: "19px",
    }}
    
  >
    

    
    <Stack flex={1} direction="row">
      <Icon as={icon} fontSize="2xl" color="primary" />
      <Text fontWeight="550" fontSize="small">
        {label}
      </Text>
      <Text paddingTop="6px" fontSize="10px" color="gray.600">
        {labelDescription}
      </Text>
    </Stack>
    <Stack flex={1} direction="row">
      <Text>{value}</Text>
      <Text paddingTop="4px" fontSize="10px">
        {descriptionValue}
      </Text>
      <Text paddingTop="6px" fontSize="10px" color="gray.600">
        [{year}]
      </Text>
    </Stack>
  </Stack>
);

const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

function Screen({ handler }: PropsInput) {
  const title = "Perfil do Munícipio";
  const description = "Mogi das Cruzes, ou simplesmente Mogi, é um município brasileiro do estado de São Paulo, localizado na Região Metropolitana de São Paulo e Alto Tietê. É uma das 39 cidades que integram a Região Imediata de São Paulo.";

  return (
    <ContainerBasic title={title} description={description}>

      <Tabs variant='enclosed'>
        <TabList>
          <Tab>MUNÍCIPIO</Tab>
          <Tab>EMPREENDEDORISMO</Tab>
          <Tab>SAÚDE</Tab>
          <Tab>EDUCAÇÃO</Tab>
          <Tab>SEGURANÇA</Tab>
          <Tab>AMBIENTAL</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
           
                <Stack
              direction={isMobile ? "column" : "row"}
              flex={1}
              style={
                !isMobile
                  ? { paddingLeft: "4%", paddingRight: "4%", width: "90%" }
                  : {}
              }


              
            >        
              <Stack direction="column" flex={2}>

                
                <div
                  style={
                    isMobile
                      ? {
                          height: "300px",
                          width: "100%",
                          marginBottom: "3%",
                          zIndex: 0,
                        }
                      : {
                          height: "570px",
                          width: "520px",
                          marginBottom: "0%",
                          zIndex: 0,
                        }
                  }
                >
                  <MapWithNoSSR coords={[-23.528986, -46.192973]} />
                </div>
                <div 
                style={{
                  borderRadius: "5px",
                  marginBottom: "19px",
                  marginTop: "0px",
                  marginRight: "0px",
                  marginLeft: "0px",
                }}>
                  
                  <Description label="Prefeito" value="CAIO CÉSAR MACHADO DA CUNHA" />
                  <Description label="Gentílico" value="MOGIANO" />
                </div>
              </Stack>
              <Stack direction="column" flex={3}>
                {descriptionData.map(
                  (
                    { label, value, descriptionValue, labelDescription, year, icon },
                    index
                  ) => (
                    <DescriptionWithIcon
                      descriptionValue={descriptionValue}
                      label={label}
                      value={value}
                      key={index}
                      labelDescription={labelDescription}
                      year={year}
                      icon={icon}
                    />
                  )
                )}
              </Stack>
            </Stack>


          </TabPanel>
          <TabPanel>
           
                <Stack
              direction={isMobile ? "column" : "row"}
              flex={1}
              style={
                !isMobile
                  ? { paddingLeft: "4%", paddingRight: "4%", width: "90%" }
                  : {}
              }


              
            >        
              <Stack direction="column" flex={2}>

                
                <div
                  style={
                    isMobile
                      ? {
                          height: "300px",
                          width: "100%",
                          marginBottom: "3%",
                          zIndex: 0,
                        }
                      : {
                          height: "570px",
                          width: "520px",
                          marginBottom: "0%",
                          zIndex: 0,
                        }
                  }
                >
                  <MapWithNoSSR coords={[-23.528986, -46.192973]} />
                </div>
                <div 
                style={{
                  borderRadius: "5px",
                  marginBottom: "19px",
                  marginTop: "0px",
                  marginRight: "0px",
                  marginLeft: "0px",
                }}>
                  
                  <Description label="Prefeito" value="CAIO CÉSAR MACHADO DA CUNHA" />
                  <Description label="Gentílico" value="MOGIANO" />
                </div>
              </Stack>
              <Stack direction="column" flex={3}>
                {descriptionData.map(
                  (
                    { label, value, descriptionValue, labelDescription, year, icon },
                    index
                  ) => (
                    <DescriptionWithIcon
                      descriptionValue={descriptionValue}
                      label={label}
                      value={value}
                      key={index}
                      labelDescription={labelDescription}
                      year={year}
                      icon={icon}
                    />
                  )
                )}
              </Stack>
            </Stack>


          </TabPanel>

          <TabPanel>
           
                <Stack
              direction={isMobile ? "column" : "row"}
              flex={1}
              style={
                !isMobile
                  ? { paddingLeft: "4%", paddingRight: "4%", width: "90%" }
                  : {}
              }


              
            >        
              <Stack direction="column" flex={2}>

                
                <div
                  style={
                    isMobile
                      ? {
                          height: "300px",
                          width: "100%",
                          marginBottom: "3%",
                          zIndex: 0,
                        }
                      : {
                          height: "570px",
                          width: "520px",
                          marginBottom: "0%",
                          zIndex: 0,
                        }
                  }
                >
                  <MapWithNoSSR coords={[-23.528986, -46.192973]} />
                </div>
                <div 
                style={{
                  borderRadius: "5px",
                  marginBottom: "19px",
                  marginTop: "0px",
                  marginRight: "0px",
                  marginLeft: "0px",
                }}>
                  
                  <Description label="Prefeito" value="CAIO CÉSAR MACHADO DA CUNHA" />
                  <Description label="Gentílico" value="MOGIANO" />
                </div>
              </Stack>
              <Stack direction="column" flex={3}>
                {descriptionSaude.map(
                  (
                    { label, value, descriptionValue, labelDescription, year, icon },
                    index
                  ) => (
                    <DescriptionWithIcon
                      descriptionValue={descriptionValue}
                      label={label}
                      value={value}
                      key={index}
                      labelDescription={labelDescription}
                      year={year}
                      icon={icon}
                    />
                  )
                )}
              </Stack>
            </Stack>


          </TabPanel>

          <TabPanel>
           
                <Stack
              direction={isMobile ? "column" : "row"}
              flex={1}
              style={
                !isMobile
                  ? { paddingLeft: "4%", paddingRight: "4%", width: "90%" }
                  : {}
              }


              
            >        
              <Stack direction="column" flex={2}>

                
                <div
                  style={
                    isMobile
                      ? {
                          height: "300px",
                          width: "100%",
                          marginBottom: "3%",
                          zIndex: 0,
                        }
                      : {
                          height: "570px",
                          width: "520px",
                          marginBottom: "0%",
                          zIndex: 0,
                        }
                  }
                >
                  <MapWithNoSSR coords={[-23.528986, -46.192973]} />
                </div>
                <div 
                style={{
                  borderRadius: "5px",
                  marginBottom: "19px",
                  marginTop: "0px",
                  marginRight: "0px",
                  marginLeft: "0px",
                }}>
                  
                  <Description label="Prefeito" value="CAIO CÉSAR MACHADO DA CUNHA" />
                  <Description label="Gentílico" value="MOGIANO" />
                </div>
              </Stack>
              <Stack direction="column" flex={3}>
                {descriptionEducacao.map(
                  (
                    { label, value, descriptionValue, labelDescription, year, icon },
                    index
                  ) => (
                    <DescriptionWithIcon
                      descriptionValue={descriptionValue}
                      label={label}
                      value={value}
                      key={index}
                      labelDescription={labelDescription}
                      year={year}
                      icon={icon}
                    />
                  )
                )}
              </Stack>
            </Stack>


          </TabPanel>

          <TabPanel>
           
                <Stack
              direction={isMobile ? "column" : "row"}
              flex={1}
              style={
                !isMobile
                  ? { paddingLeft: "4%", paddingRight: "4%", width: "90%" }
                  : {}
              }


              
            >        
              <Stack direction="column" flex={2}>

                
                <div
                  style={
                    isMobile
                      ? {
                          height: "300px",
                          width: "100%",
                          marginBottom: "3%",
                          zIndex: 0,
                        }
                      : {
                          height: "570px",
                          width: "520px",
                          marginBottom: "0%",
                          zIndex: 0,
                        }
                  }
                >
                  <MapWithNoSSR coords={[-23.528986, -46.192973]} />
                </div>
                <div 
                style={{
                  borderRadius: "5px",
                  marginBottom: "19px",
                  marginTop: "0px",
                  marginRight: "0px",
                  marginLeft: "0px",
                }}>
                  
                  <Description label="Prefeito" value="CAIO CÉSAR MACHADO DA CUNHA" />
                  <Description label="Gentílico" value="MOGIANO" />
                </div>
              </Stack>
              <Stack direction="column" flex={3}>
                {descriptionSeguranca.map(
                  (
                    { label, value, descriptionValue, labelDescription, year, icon },
                    index
                  ) => (
                    <DescriptionWithIcon
                      descriptionValue={descriptionValue}
                      label={label}
                      value={value}
                      key={index}
                      labelDescription={labelDescription}
                      year={year}
                      icon={icon}
                    />
                  )
                )}
              </Stack>
            </Stack>


          </TabPanel>

        </TabPanels>
      </Tabs>      
    </ContainerBasic>
  );

}

export default Screen;
