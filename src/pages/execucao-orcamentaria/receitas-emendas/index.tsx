import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getAmendmentRevenues,
  getChart,
} from "../../../calls/budgetExecution/amandmentsRevenues";
import { revalidate } from "../../../config";

function Controller({ chart = { data: [] }, revenues = [] }: any) {
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
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { chart } = await getChart();
  const { revenues } = await getAmendmentRevenues();

  return {
    props: {
      chart: chart || { data: [] },
      revenues: revenues || [],
    },
    revalidate,
  };
};
