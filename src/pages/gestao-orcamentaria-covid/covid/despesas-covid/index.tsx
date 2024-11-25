import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import { getDespesasCovid } from "../../../../calls/expenses/despesas_covid";
import { revalidate } from "../../../../config";
import moment from "moment";
import { title } from "process";
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
  const [data2, setData2]  = useState<ArquivoContrato[]>([]);
  

  const columns = [
    
    {title:"Empenho",field:'nr_empenho'},
    {title:"Exercício empenho",field:'exercicio_empenho'},
    { title: "Fornecedor", field: "descr_fornecedor" },
    { title: "Funcional", field: "class_funcional" },
    { title: "Descrição Funcional", field: "descr_funcional" },
    { title: "Ação", field: "acao" },
    { title: "Função", field: "funcao" },
    { title: "Subfunção", field: "subfuncao" },
    { title: "Programa", field: "programa" },
    { title: "Data Movimentação", field: "data_movto" },
    { title: "Valor do Empenho", field: "vlr_empenho" },
    { title: "Tipo de Empenho", field: "tipo_empenho" },
    { title: "Evento Custo", field: "evento_custo" },
    { title: "Descrição de Evento Custo", field: "descr_evento_custo" },
    { title: "Vinculo", field: "vinculo" },
    { title: "Unidade Orçamentária", field: "unid_orcam" },
    { title: "Categoria", field: "categoria" },
    { title: "Elemento", field: "elemento" },
    { title: "Subelemento", field: "subelemento" },
    { title: "Processo", field: "cod_processo" },
    { title: "Licitação", field: "licitacao_numero" },
    { title: "Tipo de Licitação", field: "licitacao_modalidade" },
    
    //{title:"ID",field:'id'},
     
  

  ];

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { contracts } = await getDespesasCovid(year);

    setLoading(false);

    setData(contracts);
  };

  const arquivosColumns = [
    { title: "Id", field: "id" },
    { title: "Arquivo", field: 'arquivo'},
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
    arquivosColumns
    
  };

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { contracts } = await getDespesasCovid();
  return {
    props: {
      contracts: contracts || [],
      
    },
    revalidate,
  };
};