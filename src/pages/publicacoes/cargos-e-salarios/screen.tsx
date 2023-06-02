import {
  Divider,
  useDisclosure,
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
   
      <TableComponent
        loading={loading}
        columns={columns}
        data={data}
        openModal={handleOpenModal}
      />


    </ContainerBasic>
  );
}

export default Screen;
