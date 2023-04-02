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
    selectValue?: number;
  };
};

function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;
  const title = "PROMAE - Incentivos fiscais";
  const description = "O Programa Mogiano de Atração de Investimentos e Geração de Empregos busca conceder benefícios fiscais e tributários para empresas que venham a se instalar ou as já instaladas no Município e que estejam em processo de expansão, conforme estabelecido pela Lei nº 7.436 de 8 de janeiro de 2019, alterada pela Lei nº 7545 de 26 de dezembro de 2019, regulamentada pelo Decreto nº 18.300 de 9 de maio de 2019. Acompanhe aqui os processos relacionados a esse programa e as empresas que aderiram a ele.";
  return (
    <ContainerBasic title={title} description={description}>
      <PlanContainer laws={laws}>
        <Select
          minW={90}
          width="20%"
          bg={useColorModeValue("white", "gray.800")}
          value={selectValue}
          placeholder="Selecionar Ano"
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
