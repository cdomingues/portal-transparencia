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

export const contentGuidelines = {
  titlePage: "Lei de Diretrizes Orçamentárias",
  description: "A Lei de Diretrizes Orçamentárias (LDO) permite a ligação entre o planejamento de curto prazo, no caso o Orçamento Anual, e o planejamento de longo prazo, que é o Plano Plurianual (PPA). A LDO define metas e prioridades da Administração Pública, além de estabelecer metas fiscais e apontar os riscos que poderão afetar as contas públicas. O projeto deve ser enviado até dia 15 de abril de cada ano à Câmara Municipal, que deve concluir sua votação até 30 de junho. São realizadas duas audiências públicas até a votação. Os trabalhos legislativos do primeiro semestre não podem terminar sem a aprovação da LDO.",
}

function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;

  const handleOpenLink = (link: string) => {
        window.open(link, "_blank", "noopener noreferrer");
      };

  const title = contentGuidelines?.titlePage;
  const description = contentGuidelines?.description;
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
