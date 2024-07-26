import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";
import { getLicitacoes } from "../../../calls/expenses/licitacoes";
import { revalidate } from "../../../config";
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

  const getSituacaoText = (situacao: string | undefined) => {
  switch (situacao) {
    case 'P':
      return 'Publicada';
    case 'S':
      return 'Suspensa';
    default:
      return 'Desconhecida'; // Valor padrão para quando situacao não é reconhecida
  }
};

const getTipoText = (tipo: number | undefined) => {
  switch (tipo) {
    case 2:
      return 'Pregão Presencial';
    case 3:
      return 'Tomada de Preços';
    case 4:
      return 'Concorrência';
    case 5:
      return 'Leilão';
    case 7:
      return 'Chamada Pública';
    case 8:
      return 'Chamamento Público';
    case 9:
      return 'Pré-Qualificação';
    case 10:
      return 'Convite';
    case 11:
      return 'Dispensa/Inexigibilidade';
    case 12:
      return 'Chamamento Público - Saúde';
    case 13:
      return 'Chamamento Público - Esportes';
    case 14:
      return 'Chamamento Público - Verde e Meio Ambiente';
    case 15:
      return 'Chamada Pública - Saúde';
    case 16:
      return 'Chamamento Público - Educação';
    case 17:
      return 'Pregão Eletrônico';
    case 18:
      return 'Credenciamento';
    case 20:
      return 'Audiência Pública - Saúde';
    case 21:
      return 'CONCURSO';
    case 27:
      return 'PROCESSO SELETIVO';
    default:
      return 'Desconhecido'; // Valor padrão para quando tipo não é reconhecido
  }
};

  const columns = [
    {title:"Id", field: 'id'},
    {title:"Orgão",field:'gestora'},
    { title: "Tipo", field: "id_tipolicitacao" },
    { title: "Ano", field: "ano" },
    { title: "Número", field: "numero" },
    { title: "Data Abertura", field: "dataAbertura" },
    { title: "Inicío da Publicação", field: "publicacaoInicio" },
    { title: "Fim da Publicação", field: "publicacaoFim" },
    { title: "Descrição", field: "descricao" },
    //{ title: "Objeto", field: "objeto" },
    { title: "Complemento", field: "complemento" },
   // { title: "Complemento", field: "complemento" },
    //{ title: "Valor Aditado", field: "valorAditado" },
    //{ title: "Qntd Aditivos", field: "quantidadeAdivitos" },
    //{ title: "Fornecedor", field: "fornecedor" },
    //{ title: "Grupo", field: "grupo" },
    { title: "Situação", field: "situacao" },
    
   


  ];

  const handleByYear = async (year: number) => {
    setYear(year);

    setLoading(true);

    const { contracts } = await getLicitacoes(year);

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
  const { contracts, years } = await getLicitacoes();
  return {
    props: {
      contracts: contracts || [],
      years: years || [],
    },
    revalidate,
  };
};