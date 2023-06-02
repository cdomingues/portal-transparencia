import React, { useEffect, useState } from "react";
import { getFile } from "../../../services/cloudStorage";
import Screen from "./screen";

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const columns = [
    { title: "Tipo", field: "tipo" },
    { title: "Número", field: "numero" },
    { title: "Situação", field: "situacao" },
    { title: "Licitação", field: "licitacao" },
    { title: "Modalidade", field: "modalidade" },
    { title: "Processo", field: "processo" },
    { title: "Data Início", field: "datainicio" },
    { title: "Data Término", field: "datatermino" },
    { title: "Valor", field: "valor" },
    { title: "Valor Aditado", field: "valorAditado" },
    { title: "Qntd Aditivos", field: "quantidadeAdivitos" },
    { title: "Fornecedor", field: "fornecedor" },
    { title: "Grupo", field: "grupo" },
    { title: "Objeto", field: "objeto" },
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