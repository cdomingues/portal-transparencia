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
    
    { title: "Número Emenda", field: "n_emenda" },
    { title: "Ano", field: "ano" },
    { title: "Trimestre", field: "trimestre" },
    { title: "Autor", field: "desc_politico" },
    { title: "Partido", field: "partido_politico" },
    { title: "Orgão Concedente", field: "desc_orgao" },
    { title: "Esfera", field: "esfera_descricao" },
    { title: "Modalidade", field: "desc_modalidade" },
    { title: "Categoria", field: "categoria_descricao" },
    {title:"Secretaria Responsável", field:"secretaria"},
   // {title:"Situação ", field:"desc_situacao"},
    { title: "Valor Previsto", field: "valor_previsto_emenda" },
    { title: "Valor Realizado", field: "valor_realizado" },
    { title: "Objeto", field: "objeto" },
    { title: "Empresa", field: "empresa_contratada" },
    { title: "CNPJ", field: "cnpj" },
    { title: "Informações Gerais", field: "informacoes_gerais" },
    
    
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
