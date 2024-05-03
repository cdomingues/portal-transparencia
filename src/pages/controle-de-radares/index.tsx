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
    { title: "Id", field: "id" },
    //{ title: "Bairro", field: "Bairro" },
    { title: "Logradouro", field: "logradouro" },
    { title: "Sentido", field: "sentido" },
    { title: "Tipo", field: "subtipo" },
    { title: "Faixas", field: "faixas" },
    { title: "Velocidade", field: "kmh" },
    { title: "Status", field: "status" },
    
    
  ];

  const radarCollectionColumns = [
    { title: "Id", field: "codigo" },
    { title: "Status", field: 'status'},
    { title: "Localização", field: "ponto_radar" },
    { title: "Quantidade", field: "quantidade" },
    { title: "Valor", field: "valor" },
    { title: "Percentual", field: "porcentagem" },
    { title: "Ano", field: "ano" },
    { title: "Mês", field: "mes" },
    
    
  ];

  const radarInfractionColumns = [
    { title: "Id", field: "codigo" },
    { title: "Status", field: 'status'},
    { title: "Ano", field: "ano" },
    { title: "Mês", field: "mes" },
    { title: "Localização", field: "ponto_radar" },
    { title: "Quantidade", field: "quantidade" },
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
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=4722d644-7c8e-415f-87fe-8cfcc8013af8",
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=822a6c76-4c9b-413b-8299-abd40f903bf4",
      "https://mobilidadeservicos.mogidascruzes.sp.gov.br/api/radar_info",
      {
        
      }
    );
    const rows = response.data;
    

    const mappedRows = rows.map((item: any) => {
      
      return {
        ...item,
        kmh: item?.kmh || "-",
        

       

      };
    });
    

    setData(mappedRows);
    
  };


  //---------------------------------------------------

  const radarCollectionData = async () => {
    const response = await axios.get(
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=382c733a-95a0-49ad-ad20-4b6d41361b1d",
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=5b6fcdf7-e6f5-41f6-899b-ede6927daffb",
  
"https://dadosadm.mogidascruzes.sp.gov.br/api/arrecadacoes_por_ponto",    
 {
        
      }
    );

    const rows = response.data;

    const mappedRows = rows?.map((item: any) => {
      return {
        ...item,
        porcentagem: item?.porcentagem + " %",
        valor: moneyFormatter(parseFloat(item?.valor)),
      };
    });

    setRadarCollection(mappedRows);
  };


  //---------------------------------------------------
  const radarInfractionsData = async () => {
    const response = await axios.get(
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=720f32e2-c0c9-475a-bf5f-027adfd417e7",
     // "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=d9ec0eb6-cce1-4e4e-8c71-61654e9815fe",
     "https://dadosadm.mogidascruzes.sp.gov.br/api/autuacoes_por_ponto", 
      {
        
      }
    );

    const rows = response.data;

    const mappedRows = rows?.map((item: any) => {
      return {
        ...item,
        ponto_radar: item?.ponto_radar.substring(7)
        
      };
    });

    

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
