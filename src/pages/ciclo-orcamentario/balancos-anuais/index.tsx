import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Screen from "./screen";
import { baseUrl } from "../../../config";

interface DataItem {
  pk: string;
  nome: string;
  area: string | null;
  descricao: string | null;
  file: string;
  cadastro: string;
  ativo: boolean;
  ano: number;
  tipo: number;
}

interface GroupedData {
  [tipo: string]: {
    [ano: string]: DataItem[];
  };
}

export type Laws = Array<{ name: string; file: string; year: number }>;

function Controller() {
  const [selectValue, setSelectValue] = useState(new Date().getFullYear());
  const [selectOptions, setSelectOptions] = useState<Array<number>>([]);
  const [data, setData] = useState<Laws | []>([]);

  const formatData = useCallback((groupedData: GroupedData, year: number): Laws => {
    return groupedData["6"][year]?.map((file: DataItem) => ({
      name: file.nome,
      file: file.file,
      year: file.ano
    })) || [];
  }, []);

  const makeRequestFile = useCallback(async () => {
    try {
      const response = await axios.get('${baseUrl}/api/arquivos/arquivos');
      const { groupedAndSortedData, years } = response.data;

      setSelectOptions(years);
      setData(formatData(groupedAndSortedData, selectValue));
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  }, [selectValue, formatData]);

  useEffect(() => {
    makeRequestFile();
  }, [makeRequestFile]);

  const handleSelectValue = (value: number) => {
    setSelectValue(value);
    makeRequestFile();
  };

  const handler = {
    laws: data,
    handleSelectValue,
    selectOptions,
    selectValue,
  };

  return <Screen handler={handler} />;
}

export default Controller;
