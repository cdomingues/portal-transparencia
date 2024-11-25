import React, { useEffect, useState } from "react";
import { getFile } from "../../../services/cloudStorage";
import Screen from "./screen";
import axios from "axios";
import moneyFormatter from "../../../utils/moneyFormatter";
import moment from "moment";

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  

  const columns = [
    
    { title: "Secretaria", field: "secretaria" },
    { title: "Contrato", field: "n_contrato" },
    {title:"Termo",field: "termo"},
    { title: "Contratada", field: "contratada" },
    { title: "Objeto", field: "objeto_contratado" },
    { title: "Data Ínicio", field: "data_inicio" },
    { title: "Data Fim", field: "data_fim" },
    { title: "Gestor", field: "gestor" },
    { title: "Cargo", field: "cargo" },
    { title: "Email", field: "email" },
    
  ];

  const getData = async () => {
    const response = await axios.get("https://dadosadm.mogidascruzes.sp.gov.br/api/gestores_fiscais_encerrados")
    const rows = response.data;
        
    const mappedRows = rows.map((item: any) => ({
      secretaria: item?.secretaria  ,
      n_contrato: item?.n_contrato,
      termo: item?.termo,
      contratada: item?.contratada,
      objeto_contratado: item?.objeto_contratado,
      data_inicio: moment(item?.data_inicio).format("DD/MM/YYYY "),
      data_fim:moment(item?.data_fim).format("DD/MM/YYYY "),
      gestor: item?.gestor,
      cargo: item?.cargo,
      email: item?.email,
      
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
