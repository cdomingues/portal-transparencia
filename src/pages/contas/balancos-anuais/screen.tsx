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
  const title = "Balanços Anuais";
  const description =
    "O Balanço Anual mostra as principais ações e o orçamento dos órgãos e entidades do Poder Executivo e está de acordo com as instruções básicas do Tribunal de Contas do Estado de São Paulo, órgão do Poder Legislativo que auxilia a Câmara Municipal na fiscalização contábil, financeira, orçamentária, operacional e patrimonial da administração pública. O Balanço Anual é elaborado seguindo os preceitos da Lei de Responsabilidade Fiscal, que pressupõe ações planejadas e transparentes que mantêm o equilíbrio das contas públicas, e da Lei do Orçamento, que contém a discriminação da receita e despesa de forma a evidenciar a política econômico-financeira e o programa de trabalho do Governo. A divulgação desse documento amplia a transparência pública, estimula a participação da sociedade e conscientiza a população para o controle social dos gastos públicos. O cidadão pode acompanhar como os recursos públicos estão sendo usados e saber sobre a eficiência dos programas e projetos governamentais.";
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
