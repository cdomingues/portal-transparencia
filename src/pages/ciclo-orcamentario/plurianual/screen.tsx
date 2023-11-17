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

// export const contentPlanMultiannual = {
//   titlePage: "Plano Plurianual",
//   description:
//     "O Plano Plurianual (PPA) é o principal instrumento pelo qual o município faz o planejamento de como irá investir os recursos públicos nos próximos anos. Sua construção deve contar com a maior participação possível da sociedade, afinal são os cidadãos que pagam os impostos e que ajudarão a definir o destino dos recursos.",
// };

// function Screen({ handler }: PropsInput) {
//   const { handleSelectValue, selectOptions, laws, selectValue } = handler;
//   const title = contentPlanMultiannual?.titlePage;
//   const description = contentPlanMultiannual?.description;

//   return (
//     <ContainerBasic title={title} description={description}>
//       <PlanContainer laws={laws}>
//         <Select
//           minW={90}
//           defaultValue={selectOptions[0]}
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

import { useColorModeValue, Box } from "@chakra-ui/react";
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

export const contentPlanMultiannual = {
  titlePage: "Plano Plurianual",
  description:
    "O Plano Plurianual (PPA) é o principal instrumento pelo qual o município faz o planejamento de como investirá os recursos públicos nos próximos anos. Sua construção deve contar com a maior participação possível da sociedade, para que os cidadãos sejam estimulados a ajudar na definição do destino dos recursos.",
};

function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;

  const title = contentPlanMultiannual?.titlePage;
  const description = contentPlanMultiannual?.description;

  return (
    

    
    <ContainerBasic title={title} description={description}>
      <Box

m={0}
bg={useColorModeValue("white", "gray.800")}

padding={"15px"}
rounded="md"
overflow="hidden"
maxWidth="100%"
borderRadius="18px"
marginBottom="15px"
>
      <PlanContainerLaw laws={laws} selectOptions={selectOptions} selectValue={selectValue} handleSelectValue={handleSelectValue} />
      </Box>
      
    </ContainerBasic>
  );
}

export default Screen;

