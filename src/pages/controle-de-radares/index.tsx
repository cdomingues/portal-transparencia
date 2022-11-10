import React, { useEffect, useState } from "react";
import Screen from "./screen";
import { getFile } from "../../services/cloudStorage";

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const columns = [
    { title: "Bairro", field: "bairro" },
    { title: "Logradouro", field: "logradouro" },
    { title: "Sentido", field: "sentido" },
    { title: "Tipos", field: "tipo" },
    { title: "Faixas", field: "faixas" },
    { title: "Velocidade km/h", field: "velocidade" },
    { title: "Status", field: "status" },
    { title: "Ano", field: "ano" },
    { title: "Jan", field: "jan" },
    { title: "Fev", field: "fev" },
    { title: "Mar", field: "mar" },
    { title: "Abr", field: "abr" },
    { title: "Mai", field: "mai" },
    { title: "Jun", field: "jun" },
    { title: "Jul", field: "jul" },
    { title: "Ago", field: "ago" },
    { title: "Set", field: "set" },
    { title: "Out", field: "out" },
    { title: "Nov", field: "nov" },
    { title: "Dez", field: "dez" },
    { title: "Acumulado Ano", field: "acumulado_ano" },
  ];

  const handler = {
    columns,
    loading,
    data,
  };

  const getData = async () => {
    const { data, error } = await getFile("portal_de_radares.json");
    if (error) {
      return;
    }
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Screen handler={handler} />;
}

export default Controller;
