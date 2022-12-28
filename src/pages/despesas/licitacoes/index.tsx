import React, { useEffect, useState } from "react";
import Screen from "./screen";
import { GetStaticProps } from "next";
import { getBiddings } from "../../../calls/expenses/bidding";
import { revalidate } from "../../../config";

function Controller({ biddings = [] }: any) {
  const [loading, setLoading] = useState(false);

  const columns = [
    { title: "Número", field: "numero" },
    { title: "Modalidade", field: "modalidade" },
    { title: "Integração", field: "integracao" },
    { title: "Objeto", field: "objeto" },
    { title: "Publicação", field: "datapublicacao" },
    { title: "Abertura", field: "dataabertura" },
    { title: "Vencimento", field: "datavencimento" },
    { title: "Veiculo Publicação", field: "veiculopublicacao" },
    { title: "Nro", field: "nro" },
    { title: "Ano", field: "ano" },
    { title: "Link de detalhamento", field: "linkdownload" },
  ];

  const handler = {
    data: biddings,
    columns,
    loading,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { biddings } = await getBiddings();

  const mapBiddings = biddings.map((bidding) => {
    return {
      ...bidding,
      linkdownload: `http://licitacao-mgcon.mogidascruzes.sp.gov.br/?orgao=&id_tipolicitacao=&numero=${bidding.nro}&ano=${bidding.ano}&periodopublicacao=2&situacao=&descricao`,
    };
  });

  return {
    props: {
      biddings: mapBiddings || [],
    },
    revalidate,
  };
};
