import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getChart,
  getChartYear,
  getdvertisings,
} from "../../../calls/expenses/advertising";
import { revalidate } from "../../../config";
import moment from "moment";

function Controller({
  chart = { datasets: [] },
  chartYear = { datasets: [] },
  advertisings = [],
  years,
}: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(advertisings);
  const [newChart, setNewChart] = useState(chart);

  const columns = [
    { title: "Número", field: "A" },
    { title: "Nome", field: "B" },
    { title: "Data Inicio", field: "C" },
    { title: "Data Término", field: "D" },
    { title: "Motivo da Viagem", field: "F" },
    { title: "Destino", field: "G" },
  ];

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { advertisings } = await getdvertisings(year);

    const { chart } = await getChart(year);

    setLoading(false);

    setNewChart(chart);

    setData(advertisings);
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

export const getStaticProps: GetStaticProps = async () => {
  const { chart } = await getChart();
  const { chartYear } = await getChartYear();
  const { advertisings, years } = await getdvertisings();

  return {
    props: {
      chartYear: chartYear || { datasets: [] },
      chart: chart || { datasets: [] },
      advertisings: advertisings || [],
      years: years || [],
    },
    revalidate,
  };
};
