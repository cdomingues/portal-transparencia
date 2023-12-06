import { GetStaticProps } from "next";
import React, { useState } from "react";
import Screen from "./screen";


function Controller({ concursos = [] }: any) {
  const [loading, setLoading] = useState(false);

  const columns = [
    { title: "Titulo", field: "titulo" },
    { title: "Status", field: "status" },
    { title: "Data", field: "data" },
    { title: "Inscrição", field: "link_inscricao" },
    { title: "Tipo", field: "tipo" },
    
  ];

  const handler = {
    data: concursos,
    columns,
    loading,
  };

  return <Screen handler={handler} />;
}

export default Controller;


