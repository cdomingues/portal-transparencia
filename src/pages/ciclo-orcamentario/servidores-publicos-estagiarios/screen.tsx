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
  Box,
  Divider,
  Button
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent from "../../../components/Table";

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
  function handleByYear(year: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <ContainerBasic title={title} description={description}>
   
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
      <Stack direction="row">
        <Stack minW={86} width="25%">
          <Text fontSize="sm" fontWeight="550" paddingLeft="5px">
            Ano
          </Text>
          <Select
            //defaultValue={year}
           // onChange={(e) => setYear(e.target.value)}
            bg="white"
            variant="outline"
            placeholder="Selecionar Ano"
          >
            
          </Select>
        </Stack>
        <Stack minW={50} width="10%" justifyContent="flex-end">
               <Button
            w={'100px'}
            h={'40px'}
              //disabled={loading}
              //onClick={() => handleByYear(year)}
              _hover={{ bg: "gray.500", color: "white" }}
              bg="table.primary"
              color="white"
              fontSize="small"
            >
         
            Buscar
          </Button>
        </Stack>
        
      </Stack>
      <Text fontSize="sm" fontWeight="550" paddingLeft="5px" paddingTop="10px"> Informações em processo de atualização</Text>

      <Divider borderWidth="2px" mt="10" mb="10" />
      <TableComponent columns={[]} data={[]}  />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
