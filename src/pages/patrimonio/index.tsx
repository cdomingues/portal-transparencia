import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import { getPatrimonies } from "../../calls/patrimony";

function Controller({ patrimonies = [] }: any) {
  const [loading, setLoading] = useState(false);

  const columns = [
    { title: "Chapa", field: "chapa" },
    { title: "Incorporação", field: "incorporacao" },
    { title: "Tipo", field: "tipo" },
    { title: "Descrição", field: "descricao" },
    { title: "Aquisição", field: "dataaquisicao" },
    { title: "Situação", field: "situacao" },
    { title: "Valor", field: "valoraquisicao" },
    { title: "Fornecedor", field: "fornecedor" },
  ];

  const handler = {
    data: patrimonies,
    columns,
    loading,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { patrimonies } = await getPatrimonies();
    return {
      props: {
        patrimonies: patrimonies || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        patrimonies: [],
      },
      revalidate: 60,
    };
  }
};
