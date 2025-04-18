import React, { useState } from "react";
import AccordionCommponent from "../../components/Accordion";
import ContainerBasic from "../../components/Container/Basic";
import { Checkbox, Flex, Heading, Input, Textarea } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { isMobile } from "react-device-detect";

export const contentFaq = {
  titlePage: "Perguntas Frequentes",
  description:
    "Caso tenha dificuldade em encontrar alguma informação ou dúvida referente ao conteúdo publicado neste portal, você pode entrar em contato conosco pelo email: smtda@mogidascruzes.sp.gov.br, pelo telefone: (11) 4798-5265 ou dirigir-se pessoalmente ao Pronto Atendimento ao Cidadão (PAC), localizado no térreo do prédio sede da Prefeitura, de segunda a sexta-feira, das 8 às 17 horas.",
};

function Screen() {
  const title = contentFaq?.titlePage;
  const description = contentFaq?.description;
  const accessibility = useFontSizeAccessibilityContext();
 
  const [text, setText] = useState("");

  const handleTextChange = (event: any) => {
    const newText = event.target.value;
    setText(newText);
  };




  return (
    <ContainerBasic title={title} description={description}>
      <Flex direction="column" width={isMobile ? '100%' : '80%'}>
        <div style={{ alignContent: 'center'}}>

        <AccordionCommponent/>

        </div>

        

        
      </Flex>
    </ContainerBasic>
  );
}

export default Screen;
