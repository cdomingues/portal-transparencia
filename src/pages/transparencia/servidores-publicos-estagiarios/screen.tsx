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

function Screen({ handler }: PropsInput) {
  const { dailies, salaries } = handler;
  const title = "Servidores Públicos e Estagiários";
  const description =
    "Gastos com servidores públicos e estagiários, dentro dos limites estabelecidos pela Lei de Responsabilidade Fiscal, podem ser verificados e acompanhados periodicamente.";
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
