import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getChart,
  getChartYear,
  getGrants,
} from "../../../../calls/expenses/grants";
import { revalidate } from "../../../../config";
import moment from "moment";

function Controller({
  chart = { datasets: [] },
  chartYear = { datasets: [] },
  grants = [],
  years,
}: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(grants);
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

    const { grants } = await getGrants(year);

    const { chart } = await getChart(year);

    setLoading(false);

    setNewChart(chart);

    setData(grants);
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
  const { grants, years } = await getGrants();

  return {
    props: {
      chartYear: chartYear || { datasets: [] },
      chart: chart || { datasets: [] },
      grants: grants || [],
      years: years || [],
    },
    revalidate,
  };
};
