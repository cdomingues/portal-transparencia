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
    { title: "Id", field: "id" },
    { title: "Orgão", field: "orgao" },
    { title: "Número", field: "numero" },
    { title: "Situação", field: "situacao" },
    { title: "Data de Abertura", field: "data_abertura" },
    { title: "Descrição", field: "descricao" },
    { title: "Download", field: "linkdownload" },
    { title: "Ano", field: "ano" },
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

  return {
    props: {
      biddings: biddings || [],
      years: years || [],
    },
    revalidate,
  };
};
