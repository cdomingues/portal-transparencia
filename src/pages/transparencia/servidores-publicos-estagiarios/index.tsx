import React, { useEffect, useState } from "react";
import { getFile } from "../../../services/cloudStorage";
import Screen from "./screen";

export type Laws = Array<{ name: string; link: string; year: number }>;
function Controller() {
  const [salaries, setSalaries] = useState<Laws>([]);
  const [dailies, setDailies] = useState<Laws>([]);

  useEffect(() => {
    getSalaries();
    getDailies();
  });

  const getSalaries = async () => {
    const response = await getFile("salarios.json");
    if (!response?.data) {
      return;
    }

    setSalaries(response.data);
  };

  const getDailies = async () => {
    const response = await getFile("diarias.json");
    if (!response?.data) {
      return;
    }

    setDailies(response.data);
  };

  const handler = {
    salaries,
    dailies,
  };
  return <Screen handler={handler} />;
}

export default Controller;
