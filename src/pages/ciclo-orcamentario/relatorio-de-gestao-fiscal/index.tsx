import moment from "moment";
import React, { useEffect, useState } from "react";
import { getFile } from "../../../services/cloudStorage";
import { removeDuplicates } from "../../../utils/removeDuplicate";
import Screen from "./screen";

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

  useEffect(() => {
    filterLaws(data);
  }, [selectValue]);

  const makeRequestFile = async () => {
    const response = await getFile("relatorio_de_gestao_fiscal.json");
    if (!response?.data) {
      return;
    }

    setData(response.data);
    makeSelectOptions(response.data);
    filterLaws(response.data);
  };

  const makeSelectOptions = (data: Laws) => {
    const years = data.map((law) => law.year).sort((a, b) => b - a);
    setSelectOptions(removeDuplicates(years));
    setSelectValue(years[0]);
  };

  const filterLaws = (data: Laws) => {
    setLawsFiltered(data.filter((law) => law.year === selectValue));
  };

  const handleSelectValue = (value: number) => {
    setSelectValue(value);
    filterLaws(data);
  };

  const handler = {
    laws: lawsFiltered,
    handleSelectValue,
    selectOptions,
    selectValue,
  };
  return <Screen handler={handler} />;
}

export default Controller;
