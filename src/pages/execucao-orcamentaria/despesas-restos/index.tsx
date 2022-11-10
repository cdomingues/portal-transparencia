import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getChart,
  getRemainders,
} from "../../../calls/budgetExecution/remains";

function Controller({ chart = { data: [] }, remainders = [] }: any) {
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
    data: remainders,
    columns,
    loading,
    chart,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { chart } = await getChart();
    const { remainders } = await getRemainders();

    return {
      props: {
        chart: chart || { data: [] },
        remainders: remainders || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        chart: { data: [] },
        remainders: [],
      },
      revalidate: 60,
    };
  }
};
