import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};

export const contentContractManagement = {
  titlePage: "Contratos de Gestão",
  description: "Confira aqui os contratos com as organizações do terceiro setor celebrados pela Prefeitura de Mogi das Cruzes.",
}

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title =contentContractManagement?.titlePage;
  const description = contentContractManagement?.description;
  return (
    <ContainerBasic title={title} description={description}>
      <TableComponent loading={loading} columns={columns} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
