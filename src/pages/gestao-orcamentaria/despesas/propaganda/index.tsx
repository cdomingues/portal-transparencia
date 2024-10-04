import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Screen from "./screen";
import {
  getChart,
  getChartYear,
  getdvertisings,
} from "../../../../calls/expenses/advertising";
import {getDespesasPublicidade} from "../../../../calls/expenses/outras_despesas_publicidade"
import { revalidate } from "../../../../config";
import moment from "moment";
import axios from "axios";
import moneyFormatter from "../../../../utils/moneyFormatter";

function Controller({
  chart = { datasets: [] },
  chartYear = { datasets: [] },
  advertisings = [],
  contracts = [],
  years,
}: any) {
  const [year, setYear] = useState(moment().year());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(advertisings);
  const [data2, setData2] = useState(contracts);
  const [newChart, setNewChart] = useState(chart);
  const [gastos,setGastos] = useState([])

  const columns = [
    //{ title: "Id", field: "id" },
    { title: "Ano", field: "ano" },
    { title: "Competência", field: "competencia" },
    { title: "Campanha", field: "campanha" },
    { title: "Veículo de divulgação", field: "veiculo_divulgacao" },
    { title: "Tipo de Serviço", field: "tipo_servico" },
    //{ title: "Liquidado", field: "liquidado" },
    { title: "Fornecedor", field: "fornecedor" },
    { title: "Agência Contratada", field: "agencia_contratada" },
    { title: "Data Início", field: "data_inicio" },
    { title: "Data Término", field: "data_termino" },
    { title: "Valor Veiculação", field: "valor_total_veiculacao" },
    { title: "Honorário Veiculação", field: "honorario_agencia_veiculacao"},
    { title: "Honorário Produção", field: "honorario_agencia_producao",  },
    { title: "Data Pagamento", field: "data_pagamento",  },
  ];

  const columnsDespesasPublicidade = [
    {title:"Empenho",field:'nr_empenho'},
    {title:"Exercício empenho",field:'exercicio_empenho'},
    { title: "Fornecedor", field: "descr_fornecedor" },
    { title: "CNPJ", field: "cnpj_fornecedor" },
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
    { title: "Licitação", field: "licitacao_modalidade" },
  ]

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { advertisings } = await getdvertisings(year);

    const {contracts} = await getDespesasPublicidade(year)

    const { chart } = await getChart(year);

    setLoading(false);

    setNewChart(chart);

    setData(advertisings);

    setData2(contracts)
  };

  

  const handler = {
    data,
    data2,
    columns,
    loading,
    chart: newChart,
    chartYear,
    years,
    setYear,
    year,
    handleByYear,
    gastos,
    setGastos,
    setData2,
    columnsDespesasPublicidade,
  };

  
  


  const getGastos = async  () =>{
    const response = await axios.get(
      'https://dadosadm.mogidascruzes.sp.gov.br/api/gastos_publicidade'
    );
    const rows = response.data;
    const mappedRows = rows?.map((item: any) => {
      return {
        ...item,
        competencia: item?.["competencia"].split("-")[1] , 
        data_inicio: item?.data_inicio ? moment(item.data_inicio).format("DD/MM/YYYY") : "",
        data_termino: item?.data_termino ? moment(item.data_termino).format("DD/MM/YYYY") : "",
        data_pagamento: item?.data_pagamento ? moment(item.datdata_pagamentoa_inicio).format("DD/MM/YYYY") : "",
       valor_total_veiculacao: moneyFormatter(parseFloat(item?.valor_total_veiculacao)),
       honorario_agencia_veiculacao: moneyFormatter(parseFloat(item?.honorario_agencia_veiculacao)),
       honorario_agencia_producao: moneyFormatter(parseFloat(item?.honorario_agencia_producao)),

       
      };
    });
    setGastos(mappedRows)
  }
  useEffect(() => {
    getGastos();
    
  }, []);

  return <Screen handler={handler} />;
}

export default Controller;

export const getStaticProps: GetStaticProps = async () => {
  const { chart } = await getChart();
  const { chartYear } = await getChartYear();
  const { advertisings, years } = await getdvertisings();
  const {contracts} = await getDespesasPublicidade();
 

  return {
    props: {
      chartYear: chartYear || { datasets: [] },
      chart: chart || { datasets: [] },
      advertisings: advertisings || [],
      years: years || [],
      contracts: contracts || [],
    },
    revalidate,
  };
};
