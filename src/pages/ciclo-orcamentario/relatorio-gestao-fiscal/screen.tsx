// import { Select, Stack, useColorModeValue } from "@chakra-ui/react";
// import React from "react";
// import { Laws } from ".";
// import ContainerBasic from "../../../components/Container/Basic";
// import PlanContainer from "../../../components/Container/Plan";

// type PropsInput = {
//   handler: {
//     laws: Laws;
//     handleSelectValue: (value: number) => void;
//     selectOptions: Array<string | number>;
//     selectValue: number;
//   };
// };

// export const contentLawBudget = {
//   titlePage: "Relatório de Gestão Fiscal",
//   description:
//     "O Relatório de Gestão Fiscal demonstra a execução de variáveis sujeitas a limites previstos na legislação, como, por exemplo, pessoal, dívida consolidada, operações de crédito e garantias. O relatório deve ser publicado até 30 dias após o encerramento do quadrimestre.",
// };

// function Screen({ handler }: PropsInput) {
//   const { handleSelectValue, selectOptions, laws, selectValue } = handler;
//   const title = contentLawBudget?.titlePage;
//   const description = contentLawBudget?.description;
//   return (
//     <ContainerBasic title={title} description={description}>
//       <PlanContainer laws={laws}>
//         <Select
//           minW={90}
//           width="20%"
//           bg={useColorModeValue("white", "gray.800")}
//           value={selectValue}
//           textAlign="center"
//           mb={5}
//           onChange={(event) => {
//             handleSelectValue(Number(event.target.value));
//           }}
//         >
//           {selectOptions.map((value, index) => (
//             <option key={index} value={value}>
//               {value}
//             </option>
//           ))}
//         </Select>
//       </PlanContainer>
//     </ContainerBasic>
//   );
// }

// export default Screen;



import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Laws } from ".";
import ContainerBasic from "../../../components/Container/Basic";
import PlanContainerLaw from "../../../components/Container/PlanLaw";

type PropsInput = {
  handler: {
    laws: Laws;
    handleSelectValue: (value: number) => void;
    selectOptions: Array<string | number>;
    selectValue: number;
  };
};

export const contentLawBudget = {
  titlePage: "Relatório de Gestão Fiscal",
  description:
    "O Relatório de Gestão Fiscal demonstra a execução de variáveis sujeitas a limites previstos na legislação, como, por exemplo, pessoal, dívida consolidada, operações de crédito e garantias. O relatório deve ser publicado até 30 dias após o encerramento do quadrimestre.",
};


function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;

  const title = contentLawBudget?.titlePage;
  const description = contentLawBudget?.description;

  return (
    <ContainerBasic title={title} description={description}>
      <PlanContainerLaw laws={laws} selectOptions={selectOptions} selectValue={selectValue} handleSelectValue={handleSelectValue} />
    </ContainerBasic>
  );
}

export default Screen;





