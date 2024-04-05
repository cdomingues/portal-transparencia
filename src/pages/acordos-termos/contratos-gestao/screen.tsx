import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};

export const contentContractManagement = {
  titlePage: "Contratos de Gestão",
  description:
    "Confira aqui os contratos com as organizações do terceiro setor celebrados pela Prefeitura de Mogi das Cruzes. ",
};

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = contentContractManagement?.titlePage;
  const description = contentContractManagement?.description;
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
        <Text fontSize="sm" fontWeight="550" paddingLeft="5px" paddingTop="10px"> Informações em processo de atualização</Text>
        <TableComponent loading={loading} columns={columns} data={data} />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
