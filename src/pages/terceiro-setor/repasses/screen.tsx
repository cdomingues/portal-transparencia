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

export const contentTransfers = {
  titlePage: "Repasses",
  description: "Acompanhe os repasses feitos pela Prefeitura de Mogi das Cruzes às organizações do Terceiro Setor com as quais firmou contratos ou convênios.",
}

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = contentTransfers?.titlePage;
  const description = contentTransfers?.description;
  return (
    <ContainerBasic title={title} description={description}>
      <TableComponent loading={loading} columns={columns} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
