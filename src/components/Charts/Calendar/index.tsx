import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    {
      type: "date",
      id: "Date",
    },
    {
      type: "number",
      id: "Won/Loss",
    },
  ],
  [new Date(2022, 8, 13), 37032],
  [new Date(2022, 8, 14), 38024],
  [new Date(2022, 8, 15), 38024],
  [new Date(2022, 8, 16), 38108],
  [new Date(2022, 8, 17), 38229],
  // Many rows omitted for brevity.
];

export const options = {
  title: "Ocorrências",
  calendar: {
    backgroundColor: "#fff",
    color: "#a0c3ff",
  },
};

export default function CalendarComponent() {
  return (
    <Chart
      chartType="Calendar"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
