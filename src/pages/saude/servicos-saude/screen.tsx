import { useColorModeValue, Box , Text} from "@chakra-ui/react";
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

export const contentPROMAE = {
  titlePage: "Serviços de Saúde",
  description:
    "Informações relacionadas aos serviços de saúde, indicando os horários, os profissionais prestadores de serviços, as especialidades e local?.",
};

function Screen({ handler }: PropsInput) {
  const { handleSelectValue, selectOptions, laws, selectValue } = handler;

  const title = contentPROMAE?.titlePage;
  const description = contentPROMAE?.description;

  return (
    <ContainerBasic title={title} description={description}>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Text>Em Construção . . .</Text>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
