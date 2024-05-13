import React, { useState } from "react";
import Screen from "./screen";
import {
  getChart,
  getChartYears,
  getExpenses,
} from "../../../calls/extraBudgetary/expenses";
import { GetStaticProps } from "next";
import { revalidate } from "../../../config";
import moment from "moment";

function Controller({
  chartYear = { datasets: [] },
  chart = { datasets: [] },
  expenses = [],
  years,
}: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(expenses);
  const [newChart, setNewChart] = useState(chart);

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

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { expenses } = await getExpenses(year);

    

    const { chart } = await getChart(year);

    setLoading(false);

    setNewChart(chart);

    setData(expenses);
  };

  const handler = {
    data,
    columns,
    loading,
    chartYear,
    chart: newChart,
    years,
    setYear,
    year,
    handleByYear,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { chartYear } = await getChartYears();
  const { expenses, years } = await getExpenses();
  const { chart } = await getChart();
  return {
    props: {
      chartYear: chartYear || { data: [] },
      chart: chart || { data: [] },
      expenses: expenses || [],
      years,
    },
    revalidate,
  };
};
