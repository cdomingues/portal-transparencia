import React, { useEffect, useState } from "react";
import Screen from "./screen";
import { GetStaticProps } from "next";
import { getBiddings } from "../../../calls/expenses/bidding";
import { revalidate } from "../../../config";
import moment from "moment";

function Controller({ biddings = [], years }: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(biddings);

  const columns = [
    { title: "Número", field: "numero" },
    { title: "Ano", field: "ano" },
    { title: "Modalidade", field: "modalidade" },
    { title: "Integração", field: "integracao" },
    { title: "Objeto", field: "objeto" },
    { title: "Publicação", field: "datapublicacao" },
    { title: "Abertura", field: "dataabertura" },
    { title: "Vencimento", field: "datavencimento" },
    { title: "Veiculo Publicação", field: "veiculopublicacao" },
    { title: "Nro", field: "nro" },
    { title: "Link de detalhamento", field: "linkdownload" },
  ];

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { biddings } = await getBiddings(year);

    setLoading(false);

    setData(biddings);
  };

  const handler = {
    data,
    columns,
    loading,
    years,
    setYear,
    year,
    handleByYear,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { biddings, years } = await getBiddings();

  const mapBiddings = biddings.map((bidding) => {
    return {
      ...bidding,
      linkdownload: `https://licitacao-mgcon.mogidascruzes.sp.gov.br/?orgao=&id_tipolicitacao=&numero=${bidding.nro}&ano=${bidding.ano}&periodopublicacao=2&situacao=&descricao`,
    };
  });

  return {
    props: {
      biddings: mapBiddings || [],
      years: years || [],
    },
    revalidate,
  };
};
