import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import {
  getChartYears,
  getExpenses,
  getGraph,
} from "../../../calls/covid/expenses";
import Screen from "./screen";

export default function Controller({
  chartYear = { data: [] },
  chart = { data: [] },
  rows = [],
}) {
  const [loading, setLoading] = useState(false);

  const columns = [
    { title: "Número", field: "numero" },
    { title: "Modalidade", field: "modalidade" },
    { title: "CPF/CNPJ", field: "cpfcnpj" },
    { title: "Fornecedor", field: "fornecedor" },
    { title: "Data", field: "data" },
    { title: "Empenhado", field: "empenhado" },
    { title: "Liquidado", field: "liquidado" },
    { title: "Pago", field: "pago" },
    { title: "Programa", field: "programa" },
    { title: "Unidade", field: "unidade" },
  ];

  const handler = {
    data: rows,
    columns,
    loading,
    chart,
    chartYear,
  };

  return <Screen handler={handler} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { chartYear } = await getChartYears();
    const { rows } = await getExpenses();
    const { chart } = await getGraph();
    return {
      props: {
        chartYear: chartYear || { data: [] },
        chart: chart || { data: [] },
        rows: rows || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        chartYear: { data: [] },
        chart: { data: [] },
        rows: [],
      },
      revalidate: 60,
    };
  }
};
