import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import colors from "../../styles/colors";
import icon from "../../assets/images/icon.png";

type PropsInput = {
  title: string;
  description: string;
};

export default function AccordionCommponent()
// ({
//   title,
//   description,
// }: PropsInput) 
{
  return (

<Center backgroundColor='black' width="100%"  boxShadow={'md'} borderRadius="40px" alignContent={'center'}>
            <Accordion  allowToggle  style={{width: '100%', backgroundColor: 'white'}}>
          <AccordionItem>
            <h2>
              <AccordionButton style={{backgroundColor: "#185DA6" }}>
                <Box as="span" flex='1' textAlign='left' textColor={'white'}>
                O que é o Portal da Transparência?
                </Box>
                <AccordionIcon textColor={'white'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={'justify'}>
            Um Portal da Transparência é uma plataforma online mantida pela Prefeitura de Mogi das Cruzes para fornecer 
            informações acessíveis e claras sobre suas atividades. O objetivo é promover a transparência e o acesso à informação 
            pública, permitindo que as pessoas possam entender como as políticas públicas, os serviços e recursos públicos 
            são aplicados.
            Em geral, os Portais da Transparência incluem informações sobre orçamento, despesas, licitações, contratos, salários 
            de funcionários e outros dados públicos relevantes. Eles são criados com o objetivo de aumentar a prestação de contas 
            e a transparência na gestão pública, bem como fortalecer a participação cidadã e o controle social. 
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
            <AccordionButton style={{backgroundColor: "#185DA6" }}>
                <Box as="span" flex='1' textAlign='left' textColor={'white'}>
                O que é a LAI - Lei de Acesso à Informação? 
                </Box>
                <AccordionIcon textColor={'white'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={'justify'}>
            A Lei de Acesso à Informação, Lei n° 12.527, de 18 de novembro de 2011, é uma lei ordinária federal que regulamenta 
            o acesso a informações, previsto no inciso XXXIII do art. 5º, no inciso II do § 3º do art. 37 e no § 2º do art. 216 
            da Constituição Federal.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
            <AccordionButton style={{backgroundColor: "#185DA6" }}>
                <Box as="span" flex='1' textAlign='left' textColor={'white'}>
                Qual a diferença do Portal da Transparência para o Portal da Prefeitura?  
                </Box>
                <AccordionIcon textColor={'white'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={'justify'}>
            O site da Prefeitura tem como objetivo fornecer informações e serviços para os cidadãos da cidade, além de promover 
            comunicação de informações sobre a administração pública, como as políticas e programas municipais, notícias e 
            eventos locais, informações sobre serviços públicos, como saúde, transporte, educação, segurança pública, meio 
            ambiente, dentre outros. Já o portal da transparência visa garantir a prestação de contas de e possibilitar que 
            cidadãos possam acessar documentos e informações públicas a respeito de orçamento, despesas, licitações, contratos, 
            salários de funcionários e outros dados públicos relevantes. O objetivo é tornar a gestão pública mais transparente 
            e próxima do cidadão, contribuindo para a melhoria da qualidade de vida e desenvolvimento da cidade. 
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
            <AccordionButton style={{backgroundColor: "#185DA6" }}>
                <Box as="span" flex='1' textAlign='left' textColor={'white'}>
                Como faço para tirar dúvidas sobre o funcionamento do Portal da Transparência?   
                </Box>
                <AccordionIcon textColor={'white'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={'justify'}>
            Dúvidas podem ser sanadas por meio do telefone (11) 4798-5159 e pelo e-mail smtda@mogidascruzes.sp.gov.br, de segunda a sexta-feira das 8h às 17h. 
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
            <AccordionButton style={{backgroundColor: "#185DA6" }}>
                <Box as="span" flex='1' textAlign='left' textColor={'white'}>
                Não encontrei a informação que procurava. Como fazer uma solicitação?   
                </Box>
                <AccordionIcon textColor={'white'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={'justify'}>
            Solicitações de acesso à informação podem ser realizadas por meio do site, meio do telefone (11) 4798-5159, pelo e-mail: lai@mogidascruzes.sp.gov.br ou por meio de atendimento presencial no PAC do Prédio sede da Prefeitura de segunda a sexta-feira das 8h às 17h. Os pedidos de acesso à informação, quando não possíveis de serem sanados de forma imediata, serão atendidos no prazo de até 20 dias, prorrogáveis por mais 10 dias, em conformidade com o art. 11, § 1º Lei Federal n° 12.527, de 18 de novembro de 2011 (Lei de Acesso à Informação - LAI). 
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
    </Center>
  );
}
