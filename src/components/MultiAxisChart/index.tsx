import { Chart as _Chart } from "react-chartjs-2";
import { Chart as ChartConfig, registerables } from "chart.js";
import moneyFormatter from "../../utils/moneyFormatter";
import { ChartWrapper } from "../ChartWrapper";
import { CSSProperties } from "styled-components";
ChartConfig.register(...registerables);

interface IMultiAxisChart {
  data: {
    labels: string[];
    datasets: {
      type: "line" | "bar";
      label: string;
      data: number;
      backgroundColor: string;
      borderColor: string;
      borderWidth?: number;
      yAxisID: "y" | "y1";
    }[];
  };
  moneyFormat?: boolean;
  style?: CSSProperties;
}

export function MultiAxisChart({ data, moneyFormat, style }: IMultiAxisChart) {
  const options = {
    type: "scatter",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      interaction: {
        mode: "index",
        intersect: false,
      },
      stacked: false,
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return moneyFormat
              ? moneyFormatter(context.parsed.y.toFixed(2))
              : context.parsed.y;
          },
        },
      },
    },
    maxBarThickness: 60,
    scales: {
      y: {
        position: "left" as const,
        ticks: {
          callback: (value: any) => {
            return moneyFormat ? moneyFormatter(value) : value;
          },
          beginAtZero: true,
        },
      },
      y1: {
        position: "right" as const,
        ticks: {
          callback: (value: any) => {
            return moneyFormat ? moneyFormatter(value) : value;
          },
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <ChartWrapper style={style}>
      <_Chart type="bar" datasetIdKey="id" options={options} data={data} />
    </ChartWrapper>
  );
}
