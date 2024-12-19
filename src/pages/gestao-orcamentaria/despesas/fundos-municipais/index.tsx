import React, { useEffect, useState } from "react";
import Screen from "./screen";
import axios from "axios";
import moneyFormatter from "../../../../utils/moneyFormatter";
import {fundos_municipais} from '../../../../utils/fundos_municipais'

function Controller() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
 
  const columns = [
    { title: "Sigla da área gestora", field: "sigla_area_gestora" },
    { title: "Fundo", field: "sigla_fundo" },
    { title: "Fundo Municipal", field: "fundo_municipal" },
    { title: "CNPJ", field: "cnpj" },
    { title: "Criação - Norma Legal ", field: "criacao" },
    { title: "Página web", field: "link" },
   // { title: "Página web 2", field: "link_pagina_fundo2" },
       
    
  ];

 

  const handler = {
    columns,
    loading,
    data,
    
  };

  const getData = async () => {
    try {
      // Supondo que `localizacao_radares` seja uma lista de objetos
      const rows = fundos_municipais;
  
      // Mapeando os dados, adicionando o campo `kmh` se ele não existir
      const mappedRows: any = rows.map((item) => {
        return {
          ...item,
          link: item?.link ,
          
        };
      });
  
      // Atualiza o estado com os dados mapeados
      setData(mappedRows);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };


  

  

  useEffect(() => {
    getData();
   
  }, []);

  return <Screen handler={handler} />;
}

export default Controller;
