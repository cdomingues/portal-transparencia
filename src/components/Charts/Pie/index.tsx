import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Finalizado", 5],
  ["Pendente", 2],
];

export const options = {
  title: "Resultado Geral",
  backgroundColor: "#fff",
  borderRadius: "20px",
};

export default function PieComponent() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="300px"
    />
  );
}
