import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import { getContracts } from "../../../calls/expenses/contractsMinutes";
import { revalidate } from "../../../config";

function Controller({ contracts = [] }: any) {
  const [loading, setLoading] = useState(false);

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

  const handler = {
    data: contracts,
    columns,
    loading,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { contracts } = await getContracts();
  return {
    props: {
      contracts: contracts || [],
    },
    revalidate,
  };
};
