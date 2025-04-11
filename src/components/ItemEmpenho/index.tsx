import React, { useEffect, useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";

export interface Arquivo {
  nr_empenho: number;
  exercicio_empenho: string;
  desc_item: string;
  qtde: number;
  valor_unit: string;
}

interface ItensEmpenhoTextoProps {
  nr_empenho: number;
  exercicio_empenho: string;
}

const ItensEmpenhoTexto: React.FC<ItensEmpenhoTextoProps> = ({
  nr_empenho,
  exercicio_empenho,
}) => {
  const [data, setData] = useState<Arquivo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!nr_empenho || !exercicio_empenho) return;

      try {
        const response = await fetch(
          `https://dadosadm.mogidascruzes.sp.gov.br/api/itens_empenho_despesas/?nr_empenho=${nr_empenho}&exercicio_empenho=${exercicio_empenho}`
        );

        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }

        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nr_empenho, exercicio_empenho]);

  if (loading) {
    return (
      <Box textAlign="center" p={4}>
        <Spinner size="lg" />
      </Box>
    );
  }

  if (!data.length) {
    return (
      <Box textAlign="center" p={4}>
        <Text>Nenhum item encontrado para este empenho.</Text>
      </Box>
    );
  }

  return (
    <>
    {data.map((item, index) => (
      <Text as="span" key={index}>
        {index > 0 && ', '}
        {item.desc_item}
      </Text>
    ))}
  </>
  );
};

export default ItensEmpenhoTexto;
