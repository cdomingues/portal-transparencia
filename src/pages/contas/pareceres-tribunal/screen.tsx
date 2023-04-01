import { Select, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Laws } from ".";
import ContainerBasic from "../../../components/Container/Basic";
import PlanContainer from "../../../components/Container/Plan";

type PropsInput = {
  handler: {
    laws: Laws;
    handleSelectValue: (value: number) => void;
    selectOptions: Array<string | number>;
    selectValue: number;
  };
};

function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;
  const title = "Pareceres do Tribunal";
  const description =
    "São os pareceres emitidos pelo Tribunal de Contas do Estado de São Paulo às contas do Poder Executivo, que darão suporte para o Poder Legislativo (Câmara Municipal) efetuar o devido julgamento, na forma do disposto no Inciso VIII, do Artigo 52 da Lei Orgânica do Município.";
  return (
    <ContainerBasic title={title} description={description}>
      <PlanContainer laws={laws}>
        <Select
          width="20%"
          minW={90}
          bg={useColorModeValue("white", "gray.800")}
          value={selectValue}
          textAlign="center"
          mb={5}
          onChange={(event) => {
            handleSelectValue(Number(event.target.value));
          }}
        >
          {selectOptions.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </PlanContainer>
    </ContainerBasic>
  );
}

export default Screen;
