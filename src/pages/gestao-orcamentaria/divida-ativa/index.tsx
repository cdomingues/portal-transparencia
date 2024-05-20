import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Screen from "./screen";
import {
  getChart,
  getChartYear,
  getdvertisings,
} from "../../../calls/expenses/advertising";
import { revalidate } from "../../../config";
import moment from "moment";
import axios from "axios";
import moneyFormatter from "../../../utils/moneyFormatter";

function Controller({
  chart = { datasets: [] },
  chartYear = { datasets: [] },
  advertisings = [],
  years,
}: any) {
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(advertisings);
  

  const columns = [
    { title: "CPF / CNPJ", field: "cpf_cnpj" },
    { title: "Nome", field: "nome" },
    { title: "Nome Fantasia", field: "nome_fantasia" },
    { title: "Valor Total", field: "valor_total" },
  ];

  const getData = async () => {
    const response = await axios.get("https://dadosadm.mogidascruzes.sp.gov.br/api/lista_devedores")
    const rows = response.data;
        
    const mappedRows = rows.map((item: any) => ({
      cpf_cnpj: item?.cpf_cnpj,
      nome: item?.nome,
      nome_fantasia: item?.nome_fantasia,
      valor_total: moneyFormatter(item?.valor_total)
     
    }));
    setData(mappedRows);
   
    
  };
  useEffect(() => {
    getData();
  }, []);

  const handler = {
    data,
    columns,
    loading,
  };

  return <Screen handler={handler} />;
}

export default Controller;



