import React, { useEffect, useState } from "react";
import Screen from "./screen";
import axios from "axios";
import moneyFormatter from "../../utils/moneyFormatter";

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [radarCollection, setRadarCollection] = useState([]);
  const [radarInfractions, setRadarInfractions] = useState([]);

  const columns = [
    { title: "Id", field: "id_radar" },
    { title: "Bairro", field: "Bairro" },
    { title: "Logradouro", field: "Logradouro" },
    { title: "Sentido", field: "Sentido" },
    { title: "Tipo", field: "Tipo" },
    { title: "Faixas", field: "Faixas" },
    { title: "Velocidade", field: "Velocidade" },
    { title: "Status", field: "Status" },
  ];

  const radarCollectionColumns = [
    { title: "Id", field: "Codigo" },
    { title: "Localização", field: "Ponto_Radar" },
    { title: "Quantidade", field: "Quantidade" },
    { title: "Valor", field: "Valor" },
    { title: "Percentual", field: "Percentual" },
    { title: "Ano", field: "Ano" },
    { title: "Mês", field: "Mes" },
  ];

  const radarInfractionColumns = [
    { title: "Id", field: "Codigo" },
    { title: "Ano", field: "Ano" },
    { title: "Mês", field: "Mes" },
    { title: "Localização", field: "Ponto_Radar" },
    { title: "Infrações Válidas", field: "Quantidade_Valida" },
  ];

  const handler = {
    columns,
    loading,
    data,
    radarCollectionColumns,
    radarCollection,
    radarInfractionColumns,
    radarInfractions,
  };

  const getData = async () => {
    const response = await axios.get(
      "http://192.168.1.118/api/3/action/datastore_search?resource_id=4722d644-7c8e-415f-87fe-8cfcc8013af8",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
      }
    );

    const rows = response.data?.result?.records;

    const mappedRows = rows.map((item: any) => {
      return {
        ...item,
        Velocidade: item?.Velocidade || "-",
      };
    });

    setData(mappedRows);
  };

  const radarCollectionData = async () => {
    const response = await axios.get(
      "http://192.168.1.118/api/3/action/datastore_search?resource_id=382c733a-95a0-49ad-ad20-4b6d41361b1d",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
      }
    );

    const rows = response.data?.result?.records;

    const mappedRows = rows?.map((item: any) => {
      return {
        ...item,
        Valor: moneyFormatter(item?.Valor),
      };
    });

    setRadarCollection(mappedRows);
  };

  const radarInfractionsData = async () => {
    const response = await axios.get(
      "http://192.168.1.118/api/3/action/datastore_search?resource_id=720f32e2-c0c9-475a-bf5f-027adfd417e7",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
      }
    );

    const rows = response.data?.result?.records;

    setRadarInfractions(rows);
  };

  useEffect(() => {
    getData();
    radarCollectionData();
    radarInfractionsData();
  }, []);

  return <Screen handler={handler} />;
}

export default Controller;
