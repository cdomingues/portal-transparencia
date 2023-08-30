import { useColorModeValue, Box , Text, UnorderedList, ListItem} from "@chakra-ui/react";
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
    "O Programa de Medicamento Gratuito (Promeg) oferece 167 tipos diferentes de remédios. Para receber o medicamento, basta comparecer à qualquer Unidade Básica de Saúde (UBS), munido de receita prescrita por médico da rede pública, documento de identidade e cartão do SIS.",
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
        boxShadow="2xl"
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
                Quem pode solicitar:
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
              >
                
                Munícipes de Mogi das Cruzes.

              </Text>

              <Text align={isMobile ? "justify" : "left"}
                
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}><p>Local de entrada: </p></Text>

        <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>
          <ListItem justifyContent="flex-end">
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-braz-cubas">
                
                    Unidade B&aacute;sica de Sa&uacute;de - Braz Cubas 
                    
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-chacara-guanabara">
                    
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Ch&aacute;cara Guanabara 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-cocuera">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Cocuera 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-jardim-ivete">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Jardim Ivete 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-jardim-marica">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Jardim Maric&aacute; 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-jardim-margarida">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Jardim Margarida 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-jardim-piata">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Jardim Piat&atilde; 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-novo-horizonte">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Novo Horizonte 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-jardim-camila">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Jardim Camila 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-ponte-grande">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Ponte Grande 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-vila-da-prata">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Vila da Prata 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-mineracao">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Minera&ccedil;&atilde;o 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-vila-moraes">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Vila Moraes 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-vila-natal">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Vila Natal 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-conjunto-toyama">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Conjunto Toyama 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-jardim-planalto">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Jardim Planalto 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-jardim-aeroporto-iii">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Jardim Aeroporto III 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-jardim-aeroporto-ii">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Jardim Aeroporto II 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-jardim-layr">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Jardim Layr 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/pronto-atendimento-24-horas-jardim-universo">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Pronto Atendimento 24 horas - Jardim Universo 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-vila-jundiai">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Vila Jundia&iacute; 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-santo-angelo">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Santo &Acirc;ngelo 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-jardim-nove-de-julho">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Jardim Nove de Julho 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-jundiapeba">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Jundiapeba 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-nova-jundiapeba">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia  - Nova Jundiapeba 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unica-unidade-clinica-ambulatorial">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    UNICA - Unidade Cl&iacute;nica Ambulatorial 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-vila-nova-aparecida">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Vila Nova Aparecida 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-vila-suissa">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Vila Su&iacute;ssa 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-sabauna">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Saba&uacute;na 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-botujuru-em-reforma">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Botujuru - [EM REFORMA] 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-biritiba-ussu">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Biritiba Uss&uacute; 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-taiacupeba">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de  da Fam&iacute;lia - Taia&ccedil;upeba 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-quatinga">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Quatinga 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-santa-tereza">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Santa Tereza 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unica-fisio">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unica Fisio 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-basica-de-saude-alto-do-ipiranga">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade B&aacute;sica de Sa&uacute;de - Alto do Ipiranga 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-taboao-lambari">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia - Tabo&atilde;o / Lambari 
                </a>
            </ListItem>
                        <ListItem>
                <a href="/unidade-e-equipamento/todos-os-assuntos/unidade-de-saude-da-familia-vila-nova-uniao">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    Unidade de Sa&uacute;de da Fam&iacute;lia  - Vila Nova Uni&atilde;o 
                </a>
            </ListItem>
 </UnorderedList>



 <Text 
 fontWeight="700"
fontSize={accessibility?.fonts?.regular}>Dia e horário de atendimento:</Text>
<Text 
 color="gray.500"
fontSize={accessibility?.fonts?.regular}>Segunda à sexta das 08:00 às 16:30.</Text>

<Text 
 fontWeight="700"
fontSize={accessibility?.fonts?.regular}>Documentos necessários:</Text>
<Text 
 color="gray.500"
fontSize={accessibility?.fonts?.regular}>• RG
• Cartão SIS (Sistema Integrado de Saúde) do paciente
• Receituário original. Em caso de antibiótico e receituário de controle especial, apresentar receituário
em duas vias, prescrito por profissional médico da rede pública (observando a data de validade)</Text>

<Text 
 fontWeight="700"
fontSize={accessibility?.fonts?.regular}>Prazo:</Text>
<Text 
 color="gray.500"
fontSize={accessibility?.fonts?.regular}>De acordo com a validade da receita médica.</Text>

<Text 
 fontWeight="700"
fontSize={accessibility?.fonts?.regular}>Requisitos:</Text>
<Text 
 color="gray.500"
fontSize={accessibility?.fonts?.regular}>Para retirada de medicamento é preciso ter idade igual ou superior a 18 (dezoito) anos ou se retirada por terceiros, apresentação de RG.</Text>

<Text 
 fontWeight="700"
fontSize={accessibility?.fonts?.regular}>Anexos: </Text>
<Text fontWeight="500" fontSize={accessibility?.fonts?.regular} color={"gray.500"} fontStyle={'italic'}>
<a href="https://www.mogidascruzes.sp.gov.br/public/site/doc/2023081009262064d4d76c414d0.pdf," about="_blank" >
                    
                    Lista de Medicamento Gratuito 2023.pdf
                </a></Text>

      </Box>
    </ContainerBasic>

</>
     
  );
}

export default Screen;
