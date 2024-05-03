import React, { useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";
import ModalContracts from "../modalContracts"
import { Box, useColorModeValue, useDisclosure } from "@chakra-ui/react";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = "Acordos de Cooperação";
  const description = "Divulgação da lista de Acordos de Cooperação, que não envolvam recursos financeiros, realizados pela Prefeitura de Mogi das Cruzes é uma medida fundamental cujo propósito é reforçar a transparência das finanças municipais e promover a responsabilidade fiscal.";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [termo,setTermo] = useState<any>(null);

  const handleOpenModal = (item: any) => {
    onOpen();
    setTermo(item?.row?.values);
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
      <TableComponent loading={loading} columns={columns} data={data} openModal={handleOpenModal}/>
      <ModalContracts isOpen={isOpen} onClose={onClose} termo={termo}/>

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
