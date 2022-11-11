import React, { useState } from "react";
import Screen from "./screen";
import { GetStaticProps } from "next";
import {
  getChart,
  getChartYear,
  getTickets,
} from "../../../calls/expenses/passage";
import { revalidate } from "../../../config";

function Controller({
  chart = { data: [] },
  chartYear = { data: [] },
  tickets = [],
}: any) {
  const [loading, setLoading] = useState(false);

  const columns = [
    { title: "Número", field: "numero" },
    { title: "Modalidade", field: "modalidade" },
    { title: "CPF/CNPJ", field: "cpfcnpj" },
    { title: "Fornecedor", field: "fornecedor" },
    { title: "Programa", field: "programa" },
    { title: "Unidade", field: "unidade" },
    { title: "Data", field: "data" },
    { title: "Empenhado", field: "empenhado" },
    { title: "Liquidado", field: "liquidado" },
    { title: "Pago", field: "pago" },
  ];

  const handler = {
    data: tickets,
    columns,
    loading,
    chartYear,
    chart,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { chart } = await getChart();
  const { chartYear } = await getChartYear();
  const { tickets } = await getTickets();

  return {
    props: {
      chartYear: chartYear || { data: [] },
      chart: chart || { data: [] },
      tickets: tickets || [],
    },
    revalidate,
  };
};
