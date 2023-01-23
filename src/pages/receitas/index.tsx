import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import { getChart, getChartYears, getRevenues } from "../../calls/revenues";
import { revalidate } from "../../config";
import moment from "moment";

function Controller({
  chartYear = { data: [] },
  chart = { data: [] },
  revenues = [],
  years,
}: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(revenues);

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

    setLoading(false);

    setData(revenues);
  };

  const handler = {
    data,
    columns,
    loading,
    chart,
    chartYear,
    setYear,
    years,
    handleByYear,
    year,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { chartYear } = await getChartYears();
  const { revenues, years } = await getRevenues();
  const { chart } = await getChart();
  return {
    props: {
      chartYear: chartYear || { data: [] },
      chart: chart || { data: [] },
      revenues: revenues || [],
      years: years || [],
    },
    revalidate,
  };
};
