import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getChart,
  getChartYear,
  getGrants,
} from "../../../calls/expenses/grants";
import { revalidate } from "../../../config";

function Controller({
  chart = { data: [] },
  chartYear = { data: [] },
  grants = [],
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
    data: grants,
    columns,
    loading,
    chart,
    chartYear,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { chart } = await getChart();
  const { chartYear } = await getChartYear();
  const { grants } = await getGrants();

  return {
    props: {
      chartYear: chartYear || { data: [] },
      chart: chart || { data: [] },
      grants: grants || [],
    },
    revalidate,
  };
};
