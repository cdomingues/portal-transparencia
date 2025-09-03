import React from "react";
import Screen from "./screen";

function Controller() {
  const searchParams = new URLSearchParams(window.location.search);
  const exercicio_empenho = searchParams.get("Exercicio_Empenho") || "1";
  const nr_empenho = searchParams.get("nr_empenho") || "1";

  const handler = {};
  //const nr_empenho_number = (nr_empenho);

  console.log(exercicio_empenho, nr_empenho);

  return (
    <Screen
      exercicio_empenho={exercicio_empenho}
      nr_empenho={nr_empenho}
    />
  );
}


export default Controller;