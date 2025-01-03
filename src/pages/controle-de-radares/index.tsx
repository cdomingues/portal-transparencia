import React, { useEffect, useState } from "react";
import Screen from "./screen";
import axios from "axios";
import moneyFormatter from "../../utils/moneyFormatter";
import {localizacao_radares} from '../../utils/localizacao_radares'

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [radarCollection, setRadarCollection] = useState([]);
  const [radarInfractions, setRadarInfractions] = useState([]);

  const columns = [
   // { title: "Id", field: "id" },
    //{ title: "Bairro", field: "Bairro" },
    { title: "Logradouro", field: "logradouro" },
    {title:"Número", field: "numero"},
    { title: "Sentido", field: "sentido" },
    { title: "Tipo", field: "subtipo" },
    { title: "Faixas", field: "faixas" },
    { title: "Velocidade", field: "kmh" },
    { title: "Status", field: "status" },
    { title: "Justificativa", field: "justificativa" },
    
    
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
    try {
      const response = await axios.get( "https://dadosadm.mogidascruzes.sp.gov.br/api/lista_radares",);
      const rows = response.data;
        
      const mappedRows: any = rows.map((item: { kmh: any; }) => {
        return {
          ...item,
          kmh: item?.kmh || "-", // Adiciona o valor "-" se kmh não existir
        };
      });
  
      // Atualiza o estado com os dados mapeados
      setData(mappedRows);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };


  //---------------------------------------------------

  const radarCollectionData = async () => {
    const response = await axios.get(
      
  
"https://dadosadm.mogidascruzes.sp.gov.br/api/lista_arrecadacoes_por_ponto",    
 {
        
      }
    );

    const rows = response.data;

    const mappedRows = rows?.map((item: any) => {
      return {
        ...item,
        porcentagem: item?.porcentagem + " %",
        valor: moneyFormatter(parseFloat(item?.valor)),
        //mes: item?.mes.toUperCase(),
      };
    });

    setRadarCollection(mappedRows);
  };


  //---------------------------------------------------
  const radarInfractionsData = async () => {
    const response = await axios.get(
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=720f32e2-c0c9-475a-bf5f-027adfd417e7",
     // "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=d9ec0eb6-cce1-4e4e-8c71-61654e9815fe",
     "https://dadosadm.mogidascruzes.sp.gov.br/api/lista_autuacoes_por_ponto", 
      {
        
      }
    );

    const rows = response.data;

    const mappedRows = rows?.map((item: any) => {
      return {
        ...item,
       // mes: item?.mes.toUperCase()
      //  ponto_radar: item?.ponto_radar.substring(7)
        
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
