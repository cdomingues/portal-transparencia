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

// export const contentReportExtrabudget = {
//   titlePage: "Relatório Resumido De Execução Orçamentária",
//   description: "Sua publicação está prevista na Constituição Federal, devendo ocorrer até 30 dias após o encerramento de cada bimestre. O Relatório Resumido da Execução Orçamentária é formado pelo balanço orçamentário, com o demonstrativo de execução das receitas (por categoria econômica e fonte) e das despesas (por categoria econômica, grupo de natureza, função e subfunção), demonstrativo da receita corrente líquida, demonstrativo das receitas e despesas previdenciárias do regime próprio de previdência dos servidores, demonstrativo do resultado nominal, demonstrativo do resultado primário e demonstrativo dos restos a pagar por poder e órgão.",
// }

// function Screen({ handler }: PropsInput) {
//   const { handleSelectValue, selectOptions, laws, selectValue } = handler;
//   const title = contentReportExtrabudget?.titlePage;
//   const description =contentReportExtrabudget?.description;
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

export const contentReportExtrabudget = {
  titlePage: "Relatório Resumido De Execução Orçamentária",
  description: "Sua publicação está prevista na Constituição Federal, devendo ocorrer até 30 dias após o encerramento de cada bimestre. O Relatório Resumido da Execução Orçamentária é formado pelo balanço orçamentário, com o demonstrativo de execução das receitas (por categoria econômica e fonte) e das despesas (por categoria econômica, grupo de natureza, função e subfunção), demonstrativo da receita corrente líquida, demonstrativo das receitas e despesas previdenciárias do regime próprio de previdência dos servidores, demonstrativo do resultado nominal, demonstrativo do resultado primário e demonstrativo dos restos a pagar por poder e órgão. ",
}


function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;

  const title = contentReportExtrabudget?.titlePage;
  const description = contentReportExtrabudget?.description;

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






