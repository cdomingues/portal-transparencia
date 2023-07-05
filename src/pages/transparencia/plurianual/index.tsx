import moment from "moment";
import React, { useEffect, useState } from "react";
import { getFile } from "../../../services/cloudStorage";
import { removeDuplicates } from "../../../utils/removeDuplicate";
import Screen from "./screen";
import axios from "axios";

export type Laws = Array<{ name: string; link: string; year: number }>;
function Controller() {
  const [selectValue, setSelectValue] = useState(moment().year());
  const [selectOptions, setSelectOptions] = useState<Array<string | number>>([
    moment().year(),
  ]);
  const [lawsFiltered, setLawsFiltered] = useState<Laws | []>([]);
  const [data, setData] = useState<Laws | []>([]);

  useEffect(() => {
    makeRequestFile();
  }, []);

  const makeRequestFile = async () => {
    const response = await axios.get("/api/download/licitacao", {
      params: {
        type: 1,
      },
    });

    if (!response.data) {
      return;
    }

    setData(
      response.data.arquivos.map((item: any) => {
        return {
          name: item.titulo,
          link: item.url,
        };
      })
    );
    setSelectOptions(response.data.anos);
  };

  const handleSelectValue = async (value: number) => {
    setSelectValue(value);
    const response = await axios.get("/api/download/licitacao", {
      params: {
        type: 1,
        year: value,
      },
    });

    setData(
      response.data.arquivos.map((item: any) => {
        return {
          name: item.titulo,
          link: item.url,
        };
      })
    );
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
