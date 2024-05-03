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
  const title = "Termo de Fomento";
  const description = "Assim como o termo de parceria, o termo de fomento também é regido pela Lei nº 13.019/2014. É uma modalidade específica de contrato administrativo, assim como o termo de parceria, mas com algumas características distintas. Enquanto o termo de parceria é utilizado quando há transferência de recursos públicos para a execução de atividades de interesse público, o termo de fomento é empregado especificamente quando esses recursos são oriundos de dotações orçamentárias do próprio governo ou de suas autarquias, fundações e órgãos da administração direta.";
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
