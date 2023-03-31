import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getChart,
  getGeneralExpenses,
} from "../../../calls/budgetExecution/generalExpenses";
import { revalidate } from "../../../config";
import moment from "moment";

function Controller({
  chart = { datasets: [] },
  expenses = [],
  years,
}: {
  chart: any;
  expenses: any;
  years: Number[];
}) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(expenses);

  const columns = [
    { title: "Id", field: "id" },
    { title: "Ano", field: "ano" },
    { title: "Unidade", field: "unidade" },
    { title: "Fonte Recurso", field: "fonterecurso" },
    { title: "Funcional Programatica", field: "funcionalprogramatica" },
    { title: "Função", field: "funcao" },
    { title: "Sub Função", field: "subfuncao" },
    { title: "Programa", field: "programa" },
    { title: "Valor Inicial", field: "valorinicial" },
    { title: "Valor Atualizado", field: "valoratualizado" },
  ];

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { expenses } = await getGeneralExpenses(year);

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

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { chart } = await getChart();
  const { expenses, years } = await getGeneralExpenses();

  return {
    props: {
      chart: chart || { data: [] },
      expenses: expenses || [],
      years,
    },
    revalidate,
  };
};
