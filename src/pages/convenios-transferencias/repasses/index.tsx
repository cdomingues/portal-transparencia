import React, { useEffect, useState } from "react";
import { getFile } from "../../../services/cloudStorage";
import Screen from "./screen";

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const columns = [
    { title: "Tipo", field: "tipo" },
    { title: "Número", field: "numero" },
    { title: "Beneficiário", field: "beneficiario" },
    { title: "Objeto", field: "objeto" },
    { title: "Situação", field: "situacao" },
    { title: "Processo", field: "processo" },
    { title: "Data Repasse", field: "dataRepasse" },
    { title: "Valor Previsto", field: "valorPrevisto" },
    { title: "Valor Concedido", field: "valorConcedido" },
    { title: "Valor Aditado", field: "valorAditado" },
    { title: "Qntd Aditivos", field: "quantidadeAdivitos" },

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
