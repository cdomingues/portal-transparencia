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

export const contentConvenants = {
  titlePage: "Convênios",
  description: "Confira aqui os contratos com as organizações do terceiro setor celebrados pela Prefeitura de Mogi das Cruzes.",
}

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = contentConvenants?.titlePage;
  const description = contentConvenants?.description;
  return (
    <ContainerBasic title={title} description={description}>
      <TableComponent loading={loading} columns={columns} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
