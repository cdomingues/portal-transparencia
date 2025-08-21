import React, { useEffect, useState } from "react";
import { getFile } from "../../../services/cloudStorage";
import Screen from "./screen";
import axios from "axios";
import moneyFormatter from "../../../utils/moneyFormatter";
import moment from "moment";

interface Acordo {
  id: number;
  data_inicio: string | null;
  data_fim: string | null;
  interessado: string | null;
  cnpj: string | null;
  contratada: string | null;
  processo: string | null;
  tc: string | null;
  assunto: string | null;
  secretaria_responsavel: string | null;
  tipo: number;
  repasse_mensal: string | null;
  valor_inicial: string | null;
}

function Controller({ ano, secretaria, tipo }: { ano?: string; secretaria?: string; tipo?: number }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Acordo[]>([]);
  

  const columns = [
    
    { title: "TC", field: "tc" },
    { title: "Processo", field: "processo" },
    {title:"Assunto",field: "assunto"},
    { title: "Data Início", field: "data_inicio" },
    { title: "Data Término", field: "data_fim" },
    { title: "Repasse Mensal", field: "repasse_mensal" },
    { title: "Valor", field: "valor_inicial" },
    { title: "Secretaria Responsável", field: "secretaria_responsavel" },
    { title: "Interessado", field: "interessado" },
    { title: "CNPJ", field: "cnpj" },
    { title: "Contratada", field: "contratada" },
    { title: "tipo", field: "tipo" },
    { title: "ID", field: "id" },
    
  ];

  const fetchAcordos = async () => {
    try {
      setLoading(true);
      let allResults: Acordo[] = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const res = await axios.get("https://dadosadm.mogidascruzes.sp.gov.br/api/acordos", {
          params: {
            page,
            tipo, // apenas tipo 1
            ano, // opcional
            secretaria_responsavel: secretaria, // opcional
          },
        });

        const dados = res.data.results as any[];
        allResults = [...allResults, ...dados];
        const totalCount = res.data.count;
        hasMore = allResults.length < totalCount;
        page++;
      }

      // Formatar datas e valores
      const mappedRows = allResults.map((item) => ({
        ...item,
        valor_inicial: item?.valor_inicial
          ? moneyFormatter(parseFloat(item.valor_inicial))
          : "-",
        data_inicio: item.data_inicio ? moment(item.data_inicio).format("DD/MM/YYYY") : "-",
        data_fim: item.data_fim ? moment(item.data_fim).format("DD/MM/YYYY") : "-",
      }));

      setData(mappedRows);
    } catch (error) {
      console.error("Erro ao buscar acordos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAcordos();
  },  [ano, secretaria, tipo]);

  const handler = {
    data,
    columns,
    loading,
  };

  return <Screen handler={handler} />;
}

export default Controller;
