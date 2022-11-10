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
  const title = "Plano Plurianual";
  const description =
    "O Plano Plurianual (PPA) é uma ferramenta pela qual o município faz um planejamento de como irá investir os recursos públicos nos próximos quatro anos. Sua construção deve contar com a maior participação possível da sociedade, afinal são os cidadãos que pagam os impostos e que ajudarão a definir o destino dos recursos.";
  return (
    <ContainerBasic title={title} description={description}>
      <PlanContainer laws={laws}>
        <Select
          width="20%"
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
