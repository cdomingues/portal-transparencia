import React, { useEffect, useState } from "react";
import Screen from "./screen";
import { GetStaticProps } from "next";
import {
  getChart,
  getChartYear,
  getTickets,
} from "../../../calls/expenses/passage";
import { revalidate } from "../../../config";
import moment from "moment";
import axios from "axios";

function Controller({
  chart = { datasets: [] },
  chartYear = { datasets: [] },
  tickets = [],
  years,
}: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(tickets);
  const [newChart, setNewChart] = useState(chart);

  const columns = [
    { title: "Cargo", field: "descricao" },
    { title: "Carga horária", field: "horas_semanais" },
    
  ];

const getCargaHoraria = async ()=>{
  const response = await axios.get(
    "https://dadosadm.mogidascruzes.sp.gov.br/api/carga_horaria"
  );

  const rows = response.data;

  const mappedRows = rows?.map((item: any)=>{
    return{
      ...item,
    }
  })
  setData(mappedRows);
}

useEffect(() => {
  getCargaHoraria();
}, []);

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { tickets } = await getTickets(year);

    const { chart } = await getChart(year);

    setLoading(false);

    setNewChart(chart);

    setData(tickets);
  };

  const handler = {
    data,
    columns,
    loading,
    chartYear,
    chart: newChart,
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
  const { chartYear } = await getChartYear();
  const { tickets, years } = await getTickets();

  return {
    props: {
      chartYear: chartYear || { datasets: [] },
      chart: chart || { datasets: [] },
      tickets: tickets || [],
      years: years || [],
    },
    revalidate,
  };
};
