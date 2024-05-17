import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Screen from "./screen";
import { getContracts } from "../../../calls/expenses/contractsMinutes";
import { revalidate } from "../../../config";
import moment from "moment";
import axios from "axios";
import moneyFormatter from "../../../utils/moneyFormatter";
import {Row} from '../../../pages/api/despesas/contratos-atas'

function Controller({ contracts = [], years = [] }: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Row[]>([]);

  const columns = [

   
    { title: "Tipo", field: "tipo" },
    { title: "Número", field: "numero" },
    { title: "Situação", field: "situacao" },
    { title: "Licitação", field: "licitacao" },
    { title: "Modalidade", field: "modalidade" },
    { title: "Processo", field: "processo" },
    { title: "Data Início", field: "data_inicio" },
    { title: "Data Término", field: "data_termino" },
    { title: "Valor", field: "valor" },
    { title: "Valor Aditado", field: "valor_aditado" },
    { title: "Qntd Aditivos", field: "quantidade_aditivos" },
    { title: "Fornecedor", field: "fornecedor" },
    { title: "Grupo", field: "grupo" },
    { title: "Objeto", field: "objeto" },
    { title: "id_contrato", field: "id_contrato" },
   

    
  ];


  const getData = async () => {
  try {
    let apiUrl = "https://dadosadm.mogidascruzes.sp.gov.br/api/contratos_atas";
    const allRows = [];

    while (apiUrl) {
      const response = await axios.get(apiUrl);
      const { results, next } = response.data;
      
      const mappedRows = results.map((item: { valor: string; data_inicio: moment.MomentInput; data_termino: moment.MomentInput; id_contrato: any; }) => ({
        ...item,
        valor: moneyFormatter(parseFloat(item.valor)),
        data_inicio: moment(item.data_inicio).format("DD/MM/YYYY"),
        data_termino: moment(item.data_termino).format("DD/MM/YYYY"),
        id_contrato: item.id_contrato,
      }));

      allRows.push(...mappedRows);
      apiUrl = next; // Update the API URL to fetch the next page, if available
    }

    setData(allRows);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

  useEffect(() => {
    getData();
  }, []);

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { contracts } = await getContracts(year);

    setLoading(false);

   
  };

  const handler = {
    data,
    columns,
    loading,
    year,
    years,
    setYear,
    handleByYear,
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { contracts, years } = await getContracts();
  return {
    props: {
      contracts: contracts || [],
      years: years || [],
    },
    revalidate,
  };
};
