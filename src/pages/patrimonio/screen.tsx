import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../components/Table";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = "Patrimônio";
  const description = "Confira aqui as informações sobre o Patrimônio Mobiliário da Prefeitura de Mogi das Cruzes";
  return (
    <ContainerBasic title={title} description={description}>
      <TableComponent loading={loading} columns={columns} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
