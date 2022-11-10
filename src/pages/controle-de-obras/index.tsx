import React, { useState, useEffect } from "react";
import Screen from "./screen";
import { getFile } from "../../services/cloudStorage";

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const columns = [
    { title: "Contrato", field: "contrato" },
    { title: "Bairro", field: "bairro" },
    { title: "Cep", field: "cep" },
    { title: "Endereço", field: "endereco" },
    { title: "Numero", field: "numero" },
    { title: "Situação", field: "situacao" },
    { title: "Descrição", field: "descricao" },
    { title: "Observação", field: "observacao" },
    { title: "Empresa", field: "empresa" },
    { title: "Valor Total", field: "valor_total" },
    { title: "Valor Medido", field: "valor_medido" },
    { title: "Percentual de Medição", field: "percentual_medicao" },
    { title: "Fim do Contrato", field: "fim_do_contrato" },
  ];

  const handler = {
    columns,
    loading,
    data,
  };

  const getData = async () => {
    const { data, error } = await getFile("portal_de_obras.json");
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
