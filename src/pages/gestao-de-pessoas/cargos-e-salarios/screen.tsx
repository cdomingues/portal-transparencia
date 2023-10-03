import {
  Divider,
  useDisclosure,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Text,
  Select
} from "@chakra-ui/react";
import React, { useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    year: number;
    years: Number[];
    setYear: any;
    handleByYear: any;
  };
};
export const contentContractsAndAtas = {
  titlePage: "Cargos e salários",
  description:"Nesta página, confira as informações sobre cargos e salários na Prefeitura de Mogi das Cruzes com prestadores de serviço. Pesquise por matrícula, nome, cargo entre outros itens.",
}
function Screen({
  handler: { columns, data, loading },
}: PropsInput) {
  const [contract, setContract] = useState<any>(null);
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = (item: any) => {
    onOpen();
    setContract(item?.row?.values);
  };

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
