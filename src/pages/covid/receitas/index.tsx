import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getChartYears,
  getRevenues,
  getGraph,
} from "../../../calls/covid/revenues";
import { revalidate } from "../../../config";
import moment from "moment";

function Controller({
  revenues = [],
  chartYear = { datasets: [] },
  chart = { datasets: [] },
  years,
}: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(revenues);
  const [newChart, setNewChart] = useState(chart);

  const columns = [
    { title: "Ano", field: "ano" },
    { title: "Receita", field: "receita" },
    { title: "Jan", field: "janeiro" },
    { title: "Fev", field: "fevereiro" },
    { title: "Mar", field: "marco" },
    { title: "Abr", field: "abril" },
    { title: "Mai", field: "maio" },
    { title: "Jun", field: "junho" },
    { title: "Jul", field: "julho" },
    { title: "Ago", field: "agosto" },
    { title: "Set", field: "setembro" },
    { title: "Out", field: "outubro" },
    { title: "Nov", field: "novembro" },
    { title: "Dez", field: "dezembro" },
    { title: "Total Arrecadado", field: "totalArrecadado" },
  ];

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { revenues } = await getRevenues(year);

    const { chart } = await getGraph(year);

    setLoading(false);

    setNewChart(chart);

    setData(revenues);
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

export default Controller;

export const getStaticProps: GetStaticProps = async (context) => {
  const { chartYear } = await getChartYears();
  const { revenues, years } = await getRevenues();
  const { chart } = await getGraph();

  return {
    props: {
      chartYear: chartYear || { data: [] },
      chart: chart || { data: [] },
      revenues: revenues || [],
      years,
    },
    revalidate,
  };
};
