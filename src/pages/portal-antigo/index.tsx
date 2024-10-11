import React, { useEffect, useState } from "react";
import axios from "axios";
import Screen from "./screen";

function Controller() {
  const [data, setData] = useState(null); // Estado para armazenar os dados da API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/paginas?id=2");
        console.log(response.data); // Verificar dados
        setData(response.data[0]); // Armazenar o primeiro item do array
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  return <Screen handler={{ data }} />; // Passar dados para o Screen
}

export default Controller;
