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
export const contentPatrimony = {
  titlePage:  "Patrimônio",
  description: "Confira aqui as informações sobre o Patrimônio Mobiliário da Prefeitura de Mogi das Cruzes",
}
function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = contentPatrimony?.titlePage;
  const description = contentPatrimony?.description;
  return (
    <ContainerBasic title={title} description={description}>
      <TableComponent loading={loading} columns={columns} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
