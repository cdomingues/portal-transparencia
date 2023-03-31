import React, { useState } from "react";
import AmendmentsExpensesScreen from "./screen";
import {
  getExpenses,
  getChart,
} from "../../../calls/budgetExecution/amendmentsExpenses";
import { GetStaticProps } from "next";
import { revalidate } from "../../../config";
import moment from "moment";

function Controller({ chart = { datasets: [] }, expenses = [], years }: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(expenses);

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

    const { expenses } = await getExpenses(year);

    setLoading(false);

    setData(expenses);
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

  return <AmendmentsExpensesScreen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { chart } = await getChart();
  const { expenses, years } = await getExpenses();

  return {
    props: {
      chart: chart || { data: [] },
      expenses: expenses || [],
      years,
    },
    revalidate,
  };
};
