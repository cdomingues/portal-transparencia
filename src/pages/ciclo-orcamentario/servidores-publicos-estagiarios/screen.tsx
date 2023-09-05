import {
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  Link,
  Icon,
  Box
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import ContainerBasic from "../../../components/Container/Basic";

type PropsInput = {
  handler: {
    salaries: Array<{ name: string; link: string }>;
    dailies: Array<{ name: string; link: string }>;
  };
};
export const contentPublicServants = {
  titlePage: "Cargos e Salários",
  description: "Nesta página, confira a tabela-base dos subsídios, salários e vencimentos dos cargos e empregos públicos.",
}

function Screen({ handler }: PropsInput) {
  const { dailies, salaries } = handler;
  const title = "Servidores Públicos e Estagiários";
  const description =
    "Nesta página, confira os servidores públicos e estagiários.";
  return (
    <ContainerBasic title={title} description={description}>
      <Stack width="50%">
        <Text>Em desenvolvimento ... </Text>
      </Stack>
    </ContainerBasic>
  );
}

export default Screen;
