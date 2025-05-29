import { GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import Screen from "./screen";
import { revalidate } from "../../../config";
import moment from "moment";

export interface ArquivoContrato {
  id: number;
  arquivo: string;
  nome: string;
  id_contrato_id: number | null;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ArquivoContrato[];
}

const getContracts = async (year?: number) => {
  try {
    const url = year 
      ? `https://dadosadm.mogidascruzes.sp.gov.br/api/contratos_atas?tipo=CONVENIO&year=${year}` 
      : `https://dadosadm.mogidascruzes.sp.gov.br/api/contratos_atas?tipo=CONVENIO`;
      
    const response = await fetch(url);
    const data = await response.json();

    return {
      contracts: data.results || [],
      years: data.years || []
    };
  } catch (error) {
    console.error('Error fetching contracts:', error);
    return { contracts: [], years: [] };
  }
};

function Controller({ contracts = [], years = [] }: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(contracts);
  const [data2, setData2] = useState<ArquivoContrato[]>([]);

  const columns = [
    { title: "Tipo", field: "tipo" },
    { title: "Ano", field: "ano" },
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
    { title: "Id Contrato", field: "id_contrato" },
  ];

  const handleByYear = async (year: number) => {
    setYear(year);
    setLoading(true);
    const { contracts } = await getContracts(year);
    setLoading(false);
    setData(contracts);
  };

  const arquivosColumns = [
    { title: "Id", field: "id" },
    { title: "Arquivo", field: 'arquivo' },
    { title: "Nome", field: "nome" },
    { title: "Contrato", field: "mes" },
    { title: "Localização", field: "id_contrato_id" },
  ];

  const fetchArquivos = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dadosadm.mogidascruzes.sp.gov.br/api/contratos_atas?tipo=CONVENIO');
      const result: ApiResponse = await response.json();
      setData2(result.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArquivos();
  }, []);

  const handler = {
    data,
    columns,
    loading,
    year,
    years,
    setYear,
    handleByYear,
    data2,
    setData2,
    arquivosColumns
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
