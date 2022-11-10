import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Ano", "Receita", "Despesa"],
  ["2019", 1000, 400],
  ["2020", 1170, 460],
  ["2021", 660, 1120],
];

export const options = {
  title: "Comparativo  - Receita x Despesa",
  curveType: "function",
  legend: { position: "bottom" },
};

export default function LineComponent() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
