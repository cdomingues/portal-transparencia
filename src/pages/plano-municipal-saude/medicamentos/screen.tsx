import { useColorModeValue, Box , Text, UnorderedList, ListItem, Link} from "@chakra-ui/react";
import React from "react";
import { Laws } from ".";
import ContainerBasic from "../../../components/Container/Basic";
import PlanContainerLaw from "../../../components/Container/PlanLaw";
import { isMobile } from "react-device-detect";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import {FaMapMarker} from "react-icons/fa";

type PropsInput = {
  handler: {
    laws: Laws;
    handleSelectValue: (value: number) => void;
    selectOptions: Array<string | number>;
    selectValue: number;
  };
};

export const content = {
  titlePage: "Programa de Medicamento Gratuito",
  description:
    "Os medicamentos de Alto Custo são fornecidos pelo Governo do Estado de São Paulo por meio da Secretaria de Estado da Saúde.  O guia de orientações ao paciente, o qual está disponível no portal da SES/SP. As orientações de acesso podem ser obtidas por “medicamento” e por “protocolo” conforme segue: ",
};

function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;
  const accessibility = useFontSizeAccessibilityContext();
  const title = content?.titlePage;
  const description = content?.description;

  

  return ( <>
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
        <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Medicamentos do CEAF:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
                <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>
                <ListItem justifyContent="flex-end">Acessar o portal do SES/SP: <Link href="https://www.saude.sp.gov.br">www.saude.sp.gov.br</Link>; </ListItem>

                <ListItem justifyContent="flex-end">Clicar no link “medicamentos”; </ListItem>

                <ListItem justifyContent="flex-end">Clicar no link: “Medicamentos do Componente Especializado da Assistência Farmacêutica; </ListItem>

                <ListItem justifyContent="flex-end"> Clicar no link: “Relação Estadual de Medicamentos do Componente Especializado da Assistência Farmacêutica; </ListItem>

                <ListItem justifyContent="flex-end"> Realizar a consulta por medicamento ou por protocolo clínico e diretrizes terapêuticas </ListItem>
                </UnorderedList>

              </Text>

              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Medicamentos dos Protocolos e Normas Técnicas Estaduais: 
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
                <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>
                <ListItem justifyContent="flex-end">Acessar o portal do SES/SP: <Link href="https://www.saude.sp.gov.br">www.saude.sp.gov.br</Link>;  </ListItem>

                <ListItem justifyContent="flex-end">Clicar no link “medicamentos”; </ListItem>

                <ListItem justifyContent="flex-end">Clicar no link: “Medicamentos dos Protocolos e Normas Técnicas Estaduais” </ListItem>

                <ListItem justifyContent="flex-end"> Clicar no link: “Relação dos Medicamentos dos Protocolos e Normas Técnicas Estaduais; </ListItem>

                <ListItem justifyContent="flex-end"> Realizar a consulta por medicamento ou por protocolo e norma técnica estadual. </ListItem>
                </UnorderedList>

              </Text>

              


      </Box>
    </ContainerBasic>

</>
     
  );
}

export default Screen;
