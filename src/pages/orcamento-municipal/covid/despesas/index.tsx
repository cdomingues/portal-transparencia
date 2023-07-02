import moment from "moment";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import {
  getChartYears,
  getExpenses,
  getGraph,
} from "../../../../calls/covid/expenses";
import { revalidate } from "../../../../config";
import Screen from "./screen";

export default function Controller({
  chartYear = { datasets: [] },
  chart = { datasets: [] },
  rows = [],
  years,
}: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(rows);
  const [newChart, setNewChart] = useState(chart);

  const columns = [
    { title: "Número", field: "numero" },
    { title: "Modalidade", field: "modalidade" },
    { title: "CPF/CNPJ", field: "cpfcnpj" },
    { title: "Fornecedor", field: "fornecedor" },
    { title: "Ano", field: "ano" },
    { title: "Empenhado", field: "empenhado" },
    { title: "Liquidado", field: "liquidado" },
    { title: "Pago", field: "pago" },
    { title: "Programa", field: "programa" },
    { title: "Unidade", field: "unidade" },
  ];

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { rows } = await getExpenses(year);

    const { chart } = await getGraph(year);

    setLoading(false);

    setNewChart(chart);

    setData(rows);
  };

  const handler = {
    data,
    columns,
    loading,
    chart: newChart,
    chartYear,
    years,
    setYear,
    year,
    handleByYear,
  };

  return <Screen handler={handler} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { chartYear } = await getChartYears();
  const { rows, years } = await getExpenses();
  const { chart } = await getGraph();
  return {
    props: {
      chartYear: chartYear || { data: [] },
      chart: chart || { data: [] },
      rows: rows || [],
      years,
    },
    revalidate,
  };
};
