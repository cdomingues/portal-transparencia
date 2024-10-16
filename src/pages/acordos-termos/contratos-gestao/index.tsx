import { GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import Screen from "./screen";
import { getContracts } from "../../../calls/expenses/contractsMinutes";
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
    { title: "Processo", field: "processo" },
    { title: "Data Início", field: "data_inicio" },
    { title: "Data Término", field: "data_termino" },
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

  useEffect(() => {
    // Filtrar os contratos onde o grupo é igual a "Contrato de gestão"
    const filteredData = contracts.filter(
      (contract: any) => contract.grupo === "Contrato de gestão"
    );
    setData(filteredData);
  }, [contracts]);

  const arquivosColumns = [
    { title: "Id", field: "id" },
    { title: "Arquivo", field: "arquivo" },
    { title: "Nome", field: "nome" },
    { title: "Contrato", field: "mes" },
    { title: "Localização", field: "id_contrato_id" },
  ];

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
    arquivosColumns,
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
