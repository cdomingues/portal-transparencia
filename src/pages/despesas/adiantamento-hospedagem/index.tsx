import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getAdvances,
  getChart,
  getChartYear,
} from "../../../calls/expenses/adavanceHosting";

function Controller({
  chartYear = { data: [] },
  chart = { data: [] },
  advances = [],
}: any) {
  const [loading, setLoading] = useState(false);
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

  const handler = {
    data: advances,
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
    const { chartYear } = await getChartYear();
    const { advances } = await getAdvances();
    const { chart } = await getChart();
    return {
      props: {
        chartYear: chartYear || { data: [] },
        chart: chart || { data: [] },
        advances: advances || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        chartYear: { data: [] },
        chart: { data: [] },
        advances: [],
      },
      revalidate: 60,
    };
  }
};
