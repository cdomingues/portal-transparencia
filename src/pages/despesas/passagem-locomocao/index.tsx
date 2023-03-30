import React, { useState } from "react";
import Screen from "./screen";
import { GetStaticProps } from "next";
import {
  getChart,
  getChartYear,
  getTickets,
} from "../../../calls/expenses/passage";
import { revalidate } from "../../../config";
import moment from "moment";

function Controller({
  chart = { datasets: [] },
  chartYear = { datasets: [] },
  tickets = [],
  years,
}: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(tickets);
  const [newChart, setNewChart] = useState(chart);

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

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { tickets } = await getTickets(year);

    const { chart } = await getChart(year);

    setLoading(false);

    setNewChart(chart);

    setData(tickets);
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
  const { chart } = await getChart();
  const { chartYear } = await getChartYear();
  const { tickets, years } = await getTickets();

  return {
    props: {
      chartYear: chartYear || { datasets: [] },
      chart: chart || { datasets: [] },
      tickets: tickets || [],
      years: years || [],
    },
    revalidate,
  };
};
