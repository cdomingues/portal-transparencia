import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Screen from "./screen";
import { getChart, getChartYears, getRevenues } from "../../../../calls/revenues";
import { revalidate } from "../../../../config";
import moment from "moment";
import axios from "axios";
import moneyFormatter from "../../../../utils/moneyFormatter";

function Controller({
  chartYear = { datasets: [] },
  chart = { datasets: [] },
  revenues = [],
  years,
}: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(revenues);
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


  const getReceitas = async () => {
    const response = await axios.get(
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=382c733a-95a0-49ad-ad20-4b6d41361b1d",
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=5b6fcdf7-e6f5-41f6-899b-ede6927daffb",
  
"https://dadosadm.mogidascruzes.sp.gov.br/api/receitas",    
 {
        
      }
    );

    const rows = response.data;

    const mappedRows = rows?.map((item: any) => {
      return {
        ...item,
        janeiro: moneyFormatter(parseFloat(item?.janeiro)),
        fevereiro: moneyFormatter(parseFloat(item?.fevereiro)),
        marco: moneyFormatter(parseFloat(item?.marco)),
        abril: moneyFormatter(parseFloat(item?.abril)),
        maio: moneyFormatter(parseFloat(item?.maio)),
        junho: moneyFormatter(parseFloat(item?.junho)),
        julho: moneyFormatter(parseFloat(item?.julho)),
        agosto: moneyFormatter(parseFloat(item?.agosto)),
        setembro: moneyFormatter(parseFloat(item?.setembro)),
        outubro: moneyFormatter(parseFloat(item?.outubro)),
        novembro: moneyFormatter(parseFloat(item?.novembro)),
        dezembro: moneyFormatter(parseFloat(item?.dezembro)),
        total_arrecadado: moneyFormatter(parseFloat(item?.total_arrecadado)),
        total_previsto: moneyFormatter(parseFloat(item?.total_previsto)),
        
      };
    });

    setReceitas(mappedRows);
  };
  useEffect(() => {
    getReceitas()
  }, []);
  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { revenues } = await getRevenues(year);

    setLoading(false);

    setData(revenues);
  };

  const handler = {
    data,
    columns,
    loading,
    chart,
    chartYear,
    setYear,
    years,
    handleByYear,
    year,
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
