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

export const contentLawBudget = {
  titlePage: "Lei Orçamentária Anual",
  description: "A Lei Orçamentária Anual (LOA) é elaborada pelo Poder Executivo e votada pela Câmara Municipal, com o objetivo de estabelecer estimativas de receita e de despesas do município para o exercício financeiro. É na LOA onde o Executivo Municipal elenca um planejamento de gastos em obras e serviços, trazendo, dessa forma, as prioridades para investimento no ano correspondente.",
}

function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;
  const title = contentLawBudget?.titlePage;
  const description = contentLawBudget?.description;
  return (
    <ContainerBasic title={title} description={description}>
      <PlanContainer laws={laws}>
        <Select
          minW={90}
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
