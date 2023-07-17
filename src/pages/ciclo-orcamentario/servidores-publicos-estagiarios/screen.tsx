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
  const title = "Cargos e Salários";
  const description =
    "Nesta página, confira a tabela-base dos subsídios, salários e vencimentos dos cargos e empregos públicos.";
  return (
    <ContainerBasic title={title} description={description}>
      <Stack width="50%">
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab>Diárias e Passagens</Tab>
            <Tab>Cargos e Salários</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {dailies?.map((daily, index) => (
                <div style={{ marginBottom: "20px" }} key={index}>
                  <Link target="_blank" href={daily.link}>
                    <Stack direction="row">
                      <Icon
                        color="table.primary"
                        fontSize={20}
                        as={AiOutlineDownload}
                      />
                      <Text fontSize="sm">{daily.name}</Text>
                    </Stack>
                  </Link>
                </div>
              ))}
            </TabPanel>
            <TabPanel>
              <Text fontSize="md" mb={10}>
                A Secretaria Municipal de Gestão Pública, nos termos do disposto
                no § 6º do Art. 39 da Constituição Federal, com a redação dada
                pela Emenda Constitucional nº 19/98, torna pública a Tabela de
                Salários, Subsídios e Vencimentos dos cargos e empregos
                públicos.
              </Text>
              {salaries?.map((salary, index) => (
                <div style={{ marginBottom: "20px" }} key={index}>
                  <Link target="_blank" href={salary.link}>
                    <Stack direction="row">
                      <Icon
                        color="table.primary"
                        fontSize={20}
                        as={AiOutlineDownload}
                      />
                      <Text fontSize="sm">{salary.name}</Text>
                    </Stack>
                  </Link>
                </div>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </ContainerBasic>
  );
}

export default Screen;
