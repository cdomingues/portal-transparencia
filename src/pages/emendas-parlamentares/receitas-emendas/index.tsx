import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Screen from "./screen";
import { getChart, getChartYears, getRevenues } from "../../../calls/revenues";
import { revalidate } from "../../../config";
import moment from "moment";
import axios from "axios";
import moneyFormatter from "../../../utils/moneyFormatter";

function Controller() {
  
  const [loading, setLoading] = useState(false);
  //const [data, setData] = useState([]);
  const [receitas, setReceitas] = useState([]);

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
    { title: "Total Arrecadado", field: "total_arrecadado" },
    {title:'Total Previsto',field:'total_previsto'}
  ];


  const getEmendas = async () => {
  try {
    const response = await axios.get("https://dadosadm.mogidascruzes.sp.gov.br/api/convenios");
    const rows = response.data;

    // Filtra os dados conforme o tipo_recurso desejado
    const emendas = rows.filter((item: { tipo_recurso: string; }) =>
      item.tipo_recurso === "EMENDA PARLAMENTAR - TRANSFERÊNCIA ESPECIAL" ||
      item.tipo_recurso === "EMENDA PARLAMENTAR"
    );

    setReceitas(emendas);
  } catch (error) {
    console.error("Erro ao buscar dados de convênios:", error);
  }
};
  useEffect(() => {
    getEmendas()
  }, []);
  

  const handler = {
    
    columns,
    loading,
   
   
 
    receitas,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { chartYear } = await getChartYears();
  const { revenues, years } = await getRevenues();
  const { chart } = await getChart();
  return {
    props: {
      chartYear: chartYear || { datasets: [] },
      chart: chart || { datasets: [] },
      revenues: revenues || [],
      years: years || [],
    },
    revalidate,
  };
};
