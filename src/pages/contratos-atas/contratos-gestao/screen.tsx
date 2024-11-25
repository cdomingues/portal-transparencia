import React, { useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";
import ModalContracts from "./modalContracts";
import { Box, useColorModeValue, Text, useDisclosure } from "@chakra-ui/react";

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
  const [contract, setContract] = useState<any>(null);

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
          <TableComponent
        loading={loading}
        columns={columns}
        data={data}
        openModal={handleOpenModal}
      />

      <ModalContracts isOpen={isOpen} onClose={onClose} contract={contract} />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
