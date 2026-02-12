import React from "react";
import Screen from "./screen";

function Controller() {
  const location = window?.location?.href?.split("?")
  const id_convenio = location?.[1] || "1";
  const handler = {}
  console.log(id_convenio)
 
  return <Screen handler={handler} id_convenio={id_convenio}/>;
}

export default Controller;