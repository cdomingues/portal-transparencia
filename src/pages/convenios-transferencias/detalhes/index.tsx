import React from "react";
import Screen from "./screen";

function Controller() {
  const location = window?.location?.href?.split("?");
  const id_contrato = location?.[1] || "1";
  const handler = {};
console.log(id_contrato)
  return <Screen handler={handler} id_contrato={id_contrato}  />;
}

export default Controller;