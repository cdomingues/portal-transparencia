import React, { useEffect, useState } from "react";
import Screen from "./screen";

export interface ApiResponse {
  results: any;
  count: number;
  next: string | null;
  previous: string | null;
}

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const columns = [
    { title: "Nome", field: "nome" },
    { title: "Telefone", field: "telefone" },
    { title: "E-mail", field: "email" },
    { title: "Localização", field: "localizacao" },
    { title: "Local", field: "local" },
    { title: "Produtos", field: "produtos" }
  ];

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dadosadm.mogidascruzes.sp.gov.br/api/permissionarios?page=1');
      const result: ApiResponse = await response.json();

      const totalPages = Math.ceil(result.count / result.results.length);

      const promises = [];
      for (let i = 1; i <= totalPages; i++) {
        promises.push(fetch(`https://dadosadm.mogidascruzes.sp.gov.br/api/permissionarios?page=${i}`).then(res => res.json()));
      }

      const results = await Promise.all(promises);
      const allItems = results.flatMap(res => res.results);

      const uniqueItems: any = Array.from(new Set(allItems.map(item => item.id)))
        .map(id => allItems.find(item => item.id === id));

      // Transformar produtos em uma string
      const transformedItems = uniqueItems.map((item: { produtos: any[]; }) => ({
        ...item,
        produtos: item.produtos.map(produto => produto.nome).join(" / ")
      }));

      setData(transformedItems);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handler = {
    data,
    columns,
    loading,
  };

  return <Screen handler={handler} />;
}

export default Controller;
