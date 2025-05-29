import React from "react";
import Screen from "./screen";

function Controller() {
  const location = window?.location?.href?.split("?");
  const lista_arquivo_emenda = location?.[1] || "1";
  const handler = {};
console.log(lista_arquivo_emenda)
  return <Screen handler={handler} id_contrato={lista_arquivo_emenda}  />;
}

export default Controller;