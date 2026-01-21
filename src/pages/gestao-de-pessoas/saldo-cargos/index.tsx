import React, { useEffect, useState } from "react";
import Screen from "./screen";
import { tabela_saldo_cargos } from "../../../utils/tabela_saldo_cargos";

function Controller({}: any) {

  const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
   
    const columns = [
      { title: "Cargo", field: "cargo" },
      { title: "Plano Municipal", field: "plano_municipal" },
      { title: "Link", field: "link_acesso" },
    
         
      
    ];

    const handler = {
      columns,
      loading,
      data,
      
    };

    const getData = async () => {
        try {
          // Supondo que `localizacao_radares` seja uma lista de objetos
          const rows = tabela_saldo_cargos;
      
          // Mapeando os dados, adicionando o campo `kmh` se ele não existir
          const mappedRows: any = rows.map((item) => {
            return {
              ...item,
             
              
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

  return <Screen handler={handler}/>;
}

export default Controller;
