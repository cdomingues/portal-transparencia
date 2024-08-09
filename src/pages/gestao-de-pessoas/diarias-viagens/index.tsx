import { GetStaticProps } from "next";
import React, { useState , useEffect} from "react";
import moneyFormatter from "../../../utils/moneyFormatter";
import Screen from "./screen";
import {
  getChart,
  getChartYear,
  getdvertisings,
} from "../../../calls/expenses/diarias";
import { revalidate } from "../../../config";
import moment from "moment";
import axios from 'axios'

function Controller() {
  //const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  //const [newChart, setNewChart] = useState(chart);

  const columns = [
   // { title: "_id", field: "_id" },
    { title: "Ano", field: "ano" },
    { title: "Mês", field: "mes" },
    { title: "RGF", field: "rgf" },
    { title: "Nome", field: "nome" },
    { title: "Total (R$)", field: "total_r" },
    { title: "Destino", field: "destino" },
    { title: "Motivo legítimo do deslocamento", field: "motivo_deslocamento" },
    { title: "Período de permanência", field: "periodo_permanencia" },
    {title: "inteira", field: "inteira"},
    {title: "Meia", field:"meia"}
  ];

  const getData = async () => {
    const response = await axios.get("https://dadosadm.mogidascruzes.sp.gov.br/api/diarias")
    const rows = response.data;
        
    const mappedRows = rows.map((item: any) => ({
      ano: item?.ano  ,
      mes: item?.mes,
      rgf: item?.rgf,
      nome: item?.nome,
      total_r: moneyFormatter(parseFloat(item?.total_r)),
      destino: item?.destino,
      motivo_deslocamento:item?.motivo_deslocamento,
      periodo_permanencia: item?.periodo_permanencia + " h" ,
      meia: item?.meia,
      
      
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


