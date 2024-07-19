import React, { useEffect, useState } from "react";
import Screen from "./screen";

export interface Produto {
  nome: string;
}

export interface ResultItem {
  id: number;
  produtos: Produto[];
  nome: string;
  telefone: string;
  email: string;
  localizacao: string;
  local: string;
  ativo: boolean;
}

export interface FormattedResultItem {
  id: number;
  produtos: string;
  nome: string;
  telefone: string;
  email: string;
  localizacao: string;
  local: string;
  ativo: boolean;
}

export interface ApiResponse {
  results: ResultItem[];
  count: number;
  next: string | null;
  previous: string | null;
}

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FormattedResultItem[]>([]);
  const [nextPage, setNextPage] = useState<string | null>('https://dadosadm.mogidascruzes.sp.gov.br/api/permissionarios?page=1');
  
  const columns = [
    { title: "Nome", field: "nome" },
    { title: "Telefone", field: "telefone" },
    { title: "E-mail", field: "email" },
    { title: "Localização", field: "localizacao" },
    { title: "Local", field: "local" },
    { title: "Produtos", field: "produtos" }
  ];

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data: ApiResponse = await response.json();

      const formattedData = data.results.map(item => ({
        ...item,
        produtos: item.produtos.map((produto: { nome: any; }) => produto.nome).join(' / ')
      }));

      setData((prevData) => [...prevData, ...formattedData]);

      if (data.next) {
        setNextPage(data.next);
      } else {
        setNextPage(null);
      }

      setLoading(false);
    } catch (error) {
      console.error('Erro ao obter os dados:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (nextPage !== null) {
      fetchData(nextPage);
    }
  }, [nextPage]);

  const handler = {
    data,
    columns,
    loading,
  };

  return <Screen handler={handler} />;
}

export default Controller;
