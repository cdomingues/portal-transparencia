import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getChart,
  getChartYear,
  getPayroll,
} from "../../../calls/expenses/payroll";
import { revalidate } from "../../../config";

function Controller({
  chartYear = { data: [] },
  chart = { data: [] },
  payroll = [],
}: any) {
  const [loading, setLoading] = useState(false);

  const columns = [
    { title: "Matrícula", field: "matricula" },
    { title: "Nome", field: "nome" },
    { title: "Cargo", field: "cargo" },
    { title: "Situacao", field: "situacao" },
    { title: "Data Admissão", field: "dataadmissao" },
    { title: "Data Exoneracao", field: "dataexoneracao" },
    { title: "Secretaria", field: "secretaria" },
    { title: "Ano", field: "ano" },
    { title: "Mês", field: "mes" },
    { title: "Salário Base", field: "salariobase" },
    { title: "Valor Bruto", field: "bruto" },
    { title: "Valor Líquido", field: "liquido" },
    { title: "Valor Desconto", field: "desconto" },
  ];

  const handler = {
    data: payroll,
    columns,
    loading,
    chart,
    chartYear,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { chartYear } = await getChartYear();
  const { payroll } = await getPayroll();
  const { chart } = await getChart();
  return {
    props: {
      chartYear: chartYear || { data: [] },
      chart: chart || { data: [] },
      payroll: payroll || [],
    },
    revalidate,
  };
};
