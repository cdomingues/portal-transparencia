import { Divider } from "@chakra-ui/react";
import React from "react";
import ChartColumn from "../../../components/Antdesign/ChartPlots/ChartColumn";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    chart: any;
  };
};

function Screen({ handler: { columns, data, loading, chart } }: PropsInput) {
  const title = "Receitas - Emendas Parlamentares";
  const description = "";
  return (
    <ContainerBasic title={title} description={description}>
      {chart?.data?.length > 0 && <ChartColumn config={chart} />}
      <Divider borderWidth="2px" mt="10" mb="10" />
      <TableComponent loading={loading} columns={columns} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
