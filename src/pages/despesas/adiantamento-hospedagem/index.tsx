import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getAdvances,
  getChart,
  getChartYear,
} from "../../../calls/expenses/adavanceHosting";
import { revalidate } from "../../../config";
import moment from "moment";

function Controller({
  chartYear = { data: [] },
  chart = { data: [] },
  advances = [],
  years,
}: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(advances);
  const [newChart, setNewChart] = useState(chart);

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

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { advances } = await getAdvances(year);

    const { chart } = await getChart(year);

    setLoading(false);

    setNewChart(chart);

    setData(advances);
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
  const { chartYear } = await getChartYear();
  const { advances, years } = await getAdvances();
  const { chart } = await getChart();
  return {
    props: {
      chartYear: chartYear || { data: [] },
      chart: chart || { data: [] },
      advances: advances || [],
      years,
    },
    revalidate,
  };
};
