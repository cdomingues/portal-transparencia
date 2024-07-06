// src/App.tsx
import React, { useEffect, useState } from 'react';
import TableComponent from '../Table';
export interface Produto {
    nome: string;
}

export interface ArquivoContrato {
    produtos: Produto[];
    id: number;
    nome: string;
    telefone: string;
    email: string;
    localizacao: string;
    local: string;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ArquivoContrato[];
}

const ListaPermissionarios: React.FC = () => {
  const [data, setData] = useState<ArquivoContrato[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

        const uniqueItems = Array.from(new Set(allItems.map(item => item.id)))
            .map(id => allItems.find(item => item.id === id));

        setData(uniqueItems);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div>
    <h1>Contratos</h1>
    {loading && <p>Loading...</p>}
    <ul>
        {data.map((item) => (
            <li key={item.id}>
                <p>{item.id} - {item.nome} - {item.telefone} - {item.localizacao} - {item.local}</p>
                <ul>
                    {item.produtos && item.produtos.map((produto, index) => (
                        <li key={index}>{produto.nome}</li>
                    ))}
                </ul>
            </li>
        ))}
    </ul>
</div>
  );
};

export default ListaPermissionarios;
