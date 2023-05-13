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

export const contentTermsColaborator = {
  titlePage: "Termo de Colaboração",
  description: "",
}

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = contentTermsColaborator?.titlePage;
  const description = contentTermsColaborator?.description;
  return (
    <ContainerBasic title={title} description={description}>
      <TableComponent loading={loading} columns={columns} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
