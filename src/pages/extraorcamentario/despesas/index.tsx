import React, { useState } from "react";
import Screen from "./screen";
import {
  getChart,
  getChartYears,
  getExpenses,
} from "../../../calls/extraBudgetary/expenses";
import { GetStaticProps } from "next";

function Controller({
  chartYear = { data: [] },
  chart = { data: [] },
  expenses = [],
}: any) {
  const [loading, setLoading] = useState(false);

  const columns = [
    { title: "Número", field: "numero" },
    { title: "CPF/CNPJ", field: "cpfcnpj" },
    { title: "Fornecedor", field: "fornecedor" },
    { title: "Natureza Despesa", field: "naturezadespesa" },
    { title: "Data", field: "data" },
    { title: "Empenhado", field: "empenhado" },
    { title: "Liquidado", field: "liquidado" },
    { title: "Pago", field: "pago" },
    { title: "Dotação", field: "dotacao" },
  ];

  const handler = {
    data: expenses,
    columns,
    loading,
    chartYear,
    chart,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { chartYear } = await getChartYears();
    const { expenses } = await getExpenses();
    const { chart } = await getChart();
    return {
      props: {
        chartYear: chartYear || { data: [] },
        chart: chart || { data: [] },
        expenses: expenses || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        chartYear: { data: [] },
        chart: { data: [] },
        expenses: [],
      },
      revalidate: 60,
    };
  }
};
