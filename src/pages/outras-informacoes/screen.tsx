import React, { useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import { Checkbox, Flex, Heading, Input, Textarea } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";

export const contentOtherInformations = {
  titlePage: "INFORMAÇÕES",
  description:
    "Caso tenha dificuldade em encontrar alguma informação ou dúvida referente ao conteúdo publicado neste portal, você pode entrar em contato conosco preenchendo o formulário abaixo ou dirigir-se pessoalmente à Ouvidoria Geral, localizada no 3º andar do prédio sede da Prefeitura, de segunda a sexta-feira, das 8 às 17 horas.",
};

function Screen() {
  const title = contentOtherInformations?.titlePage;
  const description = contentOtherInformations?.description;
  const accessibility = useFontSizeAccessibilityContext();
  const [checkboxes, setCheckboxes] = useState([false, false, false]);
  const [text, setText] = useState("");

  const handleTextChange = (event: any) => {
    const newText = event.target.value;
    setText(newText);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxes = checkboxes.map((checked, i) => i === index);

    setCheckboxes(updatedCheckboxes);
  };

  const translatorCheckbox: any = {
    0: "TRANSPARÊNCIA (INFORMAÇÕES SOBRE GASTOS PÚBLICOS)",
    1: "OUVIDORIA (SOLICITAÇÕES E RECLAMAÇÕES)",
    2: "SEMAE: INFORMAÇÕES OU RECLAMAÇÕES DE ÁGUA OU ESGOTO.",
  };
  const hasCheckboxSelected = checkboxes[0] || checkboxes[1] || checkboxes[2];

  return (
    <ContainerBasic title={title} description={description}>
      <Flex direction="column">
        <Heading
          fontSize={accessibility?.fonts?.regular}
          color="text.dark"
          marginBottom={5}
        >
          Qual o Assunto?
        </Heading>

        {checkboxes.map((checked, index) => (
          <Checkbox
            key={index}
            isChecked={checked}
            onChange={() => handleCheckboxChange(index)}
          >
            {translatorCheckbox[index]}
          </Checkbox>
        ))}

        {hasCheckboxSelected && (
          <>
            <Input
              bg="white"
              width="100%"
              maxWidth={500}
              placeholder="Nome"
              marginTop={5}
            />

            <Input
              bg="white"
              width="100%"
              maxWidth={400}
              placeholder="CPF"
              marginTop={2.5}
            />
            <Input
              bg="white"
              width="100%"
              maxWidth={400}
              placeholder="Telefone"
              marginTop={2.5}
            />
            <Input
              bg="white"
              width="100%"
              maxWidth={500}
              placeholder="Email"
              marginTop={2.5}
            />

            <Textarea
              bg="white"
              value={text}
              onChange={handleTextChange}
              maxLength={300}
              placeholder="Digite até 300 caracteres"
              maxWidth={500}
              marginTop={2.5}
              minHeight={200}
            />
          </>
        )}
      </Flex>
    </ContainerBasic>
  );
}

export default Screen;
