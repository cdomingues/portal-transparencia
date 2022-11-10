import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import { getChart, getChartYears, getRevenues } from "../../calls/revenues";

function Controller({
  chartYear = { data: [] },
  chart = { data: [] },
  revenues = [],
}: any) {
  const [loading, setLoading] = useState(false);

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

  const handler = {
    data: revenues,
    columns,
    loading,
    chart,
    chartYear,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { chartYear } = await getChartYears();
    const { revenues } = await getRevenues();
    const { chart } = await getChart();
    return {
      props: {
        chartYear: chartYear || { data: [] },
        chart: chart || { data: [] },
        revenues: revenues || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        chartYear: { data: [] },
        chart: { data: [] },
        revenues: [],
      },
      revalidate: 60,
    };
  }
};
