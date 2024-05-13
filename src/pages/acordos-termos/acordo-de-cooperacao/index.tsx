import React, { useEffect, useState } from "react";
import { getFile } from "../../../services/cloudStorage";
import Screen from "./screen";
import axios from "axios";
import moneyFormatter from "../../../utils/moneyFormatter";

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  

  const columns = [
    
    { title: "TC", field: "tc" },
    { title: "Processo", field: "processo" },
    {title:"Assunto",field: "assunto"},
    { title: "Data Início", field: "data_inicio" },
    { title: "Data Término", field: "data_fim" },
    { title: "Valor", field: "valor_inicial" },
    { title: "Secretaria Responsável", field: "secretaria_responsavel" },
    { title: "Interessado", field: "interessado" },
    { title: "tipo", field: "tipo" },
    { title: "ID", field: "id" },
    
  ];

  const getData = async () => {
    const response = await axios.get("https://dadosadm.mogidascruzes.sp.gov.br/api/acordos")
    const rows = response.data;
        const filteredRows = rows.filter((item: { tipo: number; }) => item.tipo === 1);
    const mappedRows = filteredRows.map((item: any) => ({
      
      ...item,
      valor_inicial: moneyFormatter(item?.valor_inicial),
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
