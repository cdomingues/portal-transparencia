import React, { useEffect, useState } from "react";
import { Box, Text, Spinner, Td } from "@chakra-ui/react";

export interface ServidorDetalhe {
  matricula: string;
  nome: string;
  cargo: string;
  secretaria: string;
  lotacao: string;
  ano: number;
  mes: number;
}

interface DetalheDiariaProps {
  rgf: number;  // Recebemos o RGF como número
  ano: number;
  mes: number;
}

const DetalheDiaria: React.FC<DetalheDiariaProps> = ({ rgf, ano, mes }) => {
  const [detalhes, setDetalhes] = useState<ServidorDetalhe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetalhes = async () => {
      if (!rgf || !ano || !mes) return;

      setLoading(true);
      setError(null);
      setDetalhes(null);

      try {
        const response = await fetch(
          `https://dadosadm.mogidascruzes.sp.gov.br/api/servidor_detalhe?matricula=${rgf}&ano=${ano}&mes=${mes}`
        );

        console.log('URL chamada:', `https://dadosadm.mogidascruzes.sp.gov.br/api/servidor_detalhe?matricula=${rgf}&ano=${ano}&mes=${mes}`);
        
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log('Dados retornados:', data);

        // Ajuste para diferentes formatos de resposta
        const resultados = Array.isArray(data) ? data : data.results || [];
        
        if (resultados.length > 0) {
          setDetalhes(resultados[0]);
        } else {
          setError("Nenhum detalhe encontrado");
        }
      } catch (err) {
        console.error("Erro na requisição:", err);
        setError(err instanceof Error ? err.message : "Erro ao carregar dados");
      } finally {
        setLoading(false);
      }
    };

    fetchDetalhes();
  }, [rgf, ano, mes]);

  if (loading) {
    return <Spinner size="sm" />;
  }

  if (error) {
    return (
      <Text fontSize="sm" color="red.500">
        {error}
      </Text>
    );
  }

  if (!detalhes) {
    return <Text fontSize="sm">-</Text>;
  }

  return (
    <>
      <Td> {detalhes.cargo || '-'}</Td>
      <Td>{detalhes.secretaria || '-'}</Td>
      <Td> {detalhes.lotacao || '-'}</Td>
    </>
  );
};

export default DetalheDiaria;