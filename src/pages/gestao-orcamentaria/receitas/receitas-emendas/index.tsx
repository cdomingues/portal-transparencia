import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import {
  getAmendmentRevenues,
  getChart,
} from "../../../../calls/budgetExecution/amandmentsRevenues";
import { revalidate } from "../../../../config";
import moment from "moment";

function Controller({ chart = { datasets: [] }, revenues = [], years }: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(revenues);

  const columns = [
    { title: "Id Emenda", field: "id_emenda" },
    { title: "Número Emenda", field: "n_emenda" },
    { title: "Ano", field: "ano" },
    { title: "Trimestre", field: "trimestre" },
    { title: "Autor", field: "autor" },
    { title: "Partido", field: "partido" },
    { title: "Orgão Concedente", field: "orgao_concedente" },
    { title: "Esfera", field: "esfera" },
    { title: "Modalidade", field: "modalidade" },
    { title: "Categoria", field: "categoria" },
    { title: "Valor Previsto", field: "valor_previsto_emenda" },
    { title: "Valor Realizado", field: "valor_realizado" },
    { title: "Objeto", field: "objeto" },
  ];

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { revenues } = await getAmendmentRevenues(year);

    setLoading(false);

    setData(revenues);
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
  const { revenues } = await getAmendmentRevenues();

  return {
    props: {
      chart: chart || { data: [] },
      revenues: revenues || [],
    },
    revalidate,
  };
};
