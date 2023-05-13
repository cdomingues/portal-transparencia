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
export const contentTermsForment = {
  titlePage: "Termo de Fomento",
  description: "",
}

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = contentTermsForment?.titlePage;
  const description = contentTermsForment?.description;
  return (
    <ContainerBasic title={title} description={description}>
      <TableComponent loading={loading} columns={columns} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
