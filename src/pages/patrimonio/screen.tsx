import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../components/Table";
import { Box, useColorModeValue } from "@chakra-ui/react";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};
export const contentPatrimony = {
  titlePage:  "Patrimônio",
  description: "Confira aqui as informações sobre o Patrimônio Mobiliário da Prefeitura de Mogi das Cruzes",
}
function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = contentPatrimony?.titlePage;
  const description = contentPatrimony?.description;
  return (
    <ContainerBasic title={title} description={description}>
            <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
      <TableComponent loading={loading} columns={columns} data={data} />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
