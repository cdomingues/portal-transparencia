import React, { useEffect, useState } from "react";
import { getFile } from "../../../services/cloudStorage";
import Screen from "./screen";

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const columns = [
    { title: "Tipo", field: "tipo" },
    { title: "Número", field: "numero" },
    { title: "Processo", field: "processo" },
    { title: "Objeto", field: "objeto" },
    { title: "Data Início", field: "datainicio" },
    { title: "Data Término", field: "datatermino" },
    { title: "Identificação das Partes", field: "Partes" },
  
  ];

  const getData = async () => {
    setLoading(true);
    const { data, error } = await getFile("");
    setLoading(false);

    if (error) {
      return;
    }
    setData(data);
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
