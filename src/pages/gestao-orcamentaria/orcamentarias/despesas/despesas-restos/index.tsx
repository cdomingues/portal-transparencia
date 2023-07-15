import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getChart,
  getRemainders,
} from "../../../../../calls/budgetExecution/remains";
import { revalidate } from "../../../../../config";
import moment from "moment";

function Controller({ chart = { datasets: [] }, remainders = [], years }: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(remainders);

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

    const { remainders } = await getRemainders(year);

    setLoading(false);

    setData(remainders);
  };

  const handler = {
    data,
    columns,
    loading,
    chart,
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
  const { remainders, years } = await getRemainders();

  return {
    props: {
      chart: chart || { data: [] },
      remainders: remainders || [],
      years,
    },
    revalidate,
  };
};
