import { Divider, Heading } from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import ChartColumn from "../../../components/Antdesign/ChartPlots/ChartColumn";
import ChartColumnLineWithPartner from "../../../components/Antdesign/ChartPlots/ColumnLineWithPartner";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    chartYear: any;
    chart: any;
  };
};

function Screen({
  handler: { columns, data, loading, chartYear, chart },
}: PropsInput) {
  const title = "Despesas Extraorçamentárias";
  const description = "";

  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };

  return (
    <ContainerBasic title={title} description={description}>
      <div
        style={{
          display: "flex",
          flexDirection: chartConfig.direction as any,
          height: "100%",
        }}
      >
        <div
          style={{
            width: chartConfig.width,
            marginRight: chartConfig.marginRight,
            marginLeft: chartConfig.marginLeft,
          }}
        >
          <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
            Despesas Mensal Acumulado
          </Heading>
          {chart?.data?.length > 0 && (
            <ChartColumnLineWithPartner config={chart} />
          )}
        </div>

        <div style={{ width: chartConfig.width }}>
          <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
            Despesas últimos 5 anos
          </Heading>
          {chartYear?.data?.length > 0 && <ChartColumn config={chartYear} />}
        </div>
      </div>
      <Divider borderWidth="2px" mt="10" mb="10" />
      <TableComponent loading={loading} columns={columns} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
