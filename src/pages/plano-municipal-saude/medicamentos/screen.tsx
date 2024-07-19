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
    "A Relação Municipal de Medicamentos (REMUME) é uma lista de medicamentos que são disponibilizados pelos serviços de saúde de um município específico. Essa lista é elaborada com base nas necessidades de saúde da população local e segue as diretrizes do Sistema Único de Saúde (SUS) no Brasil. A REMUME inclui medicamentos essenciais, aqueles considerados prioritários para atender às principais demandas de saúde da comunidade.  ",
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
                Acesse aqui o arquivo da lista de medicamentos vigente:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
               <Link href="https://www.mogidascruzes.sp.gov.br/public/site/doc/2023081009262064d4d76c414d0.pdf" target="_blank" style={{ color: "#db334f" }}>Relação Municipal de Medicamentos – REMUME – 2023</Link>
              

              </Text>

              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Programas da Prefeitura de Mogi das Cruzes:  
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
            Programa de Medicamento Gratuito    <Link href="https://www.mogidascruzes.sp.gov.br/servico/saude/programa-de-medicamento-gratuito" target="_blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/servico/saude/programa-de-medicamento-gratuito</Link>
              

              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
            Programa de Medicamento em Casa   <Link href="https://www.mogidascruzes.sp.gov.br/servico/todos-os-assuntos/programa-de-medicamento-em-casa" target="_blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/servico/todos-os-assuntos/programa-de-medicamento-em-casa</Link>
              

              </Text>

              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
            Fornecimento de Insumos de Enfermagem e Medicamentos para Acamados    <Link href="https://www.mogidascruzes.sp.gov.br/servico/todos-os-assuntos/fornecimento-de-insumos-de-enfermagem-e-medicamentos-para-acamados" target="_blank" style={{ color: "#db334f" }}>https://www.mogidascruzes.sp.gov.br/servico/todos-os-assuntos/fornecimento-de-insumos-de-enfermagem-e-medicamentos-para-acamados</Link>
              

              </Text>


              <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                Programas do Estado de São Paulo    
                
                
              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >Medicamentos de Alto Custo </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
            Os medicamentos de Alto Custo são fornecidos pelo Governo do Estado de São Paulo por meio da Secretaria de Estado da Saúde. 

O guia de orientações ao paciente, está disponível no portal da Secretaria Estadual   <Link href="https://www.saude.sp.gov.br/" target="_blank" style={{ color: "#db334f" }}>https://www.saude.sp.gov.br/</Link>
              

              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
           Acesse aqui a lista por Componente Especializado da Assistência Farmacêutica (CEAF)     <Link href="https://www.saude.sp.gov.br/ses/perfil/gestor/assistencia-farmaceutica/medicamentos-dos-componentes-da-assistencia-farmaceutica/medicamentos-do-componente-especializado-da-assistencia-farmaceutica/" target="_blank" style={{ color: "#db334f" }}>Medicamentos do Componente Especializado da Assistência Farmacêutica</Link>
              

              </Text>
              <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
           Acesse aqui a lista por Protocolos e Normas Técnicas Estaduais       <Link href="https://www.saude.sp.gov.br/ses/perfil/gestor/assistencia-farmaceutica/medicamentos-dos-protocolos-e-normas-tecnicas-estaduais/" target="_blank" style={{ color: "#db334f" }}>Medicamentos dos Protocolos e Normas Técnicas Estaduais</Link>
              

              </Text>
              

              


      </Box>
    </ContainerBasic>

</>
     
  );
}

export default Screen;
