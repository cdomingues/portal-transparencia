import React, { useEffect, useState } from "react";
import Screen from "./screen";

export interface Produto {
  nome: string;
}

export interface ResultItem {
  endereco: any;
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
  endereco: string;
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

  const columns = [
    { title: "Nome", field: "nome" },
 
    { title: "Localização", field: "localizacao" },
    { title: "Local", field: "local" },
    { title: "Endereço", field: "endereco" },
    {title: "Produtos", field: "produtos"}
  ];

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data: ApiResponse = await response.json();

      const formattedData = data.results.map(item => ({
         id: item.id,
  produtos: item.produtos.map(produto => produto.nome).join(' / '),
  nome: item.nome,
  localizacao: item.localizacao,
  local: item.local,
  ativo: item.ativo,
  endereco: item.endereco,
      }));

      setData(prevData => {
  const newData = [...prevData, ...formattedData];
  console.log("Dados formatados:", newData); // verificação
  return newData;
});
    } catch (error) {
      console.error('Erro ao obter os dados:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadAllData = async () => {
      // Percorrer da página 1 até a página 15
      for (let page = 1; page <= 15; page++) {
        const url = `https://dadosadm.mogidascruzes.sp.gov.br/api/permissionarios?page=${page}`;
        await fetchData(url);
      }
    };

    loadAllData(); // Carrega todos os dados assim que o componente é montado
  }, []);

  const handler = {
    data,
    columns,
    loading,
  };

  return <Screen handler={handler} />;
}

export default Controller;
