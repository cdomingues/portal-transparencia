import { Chart as _Chart } from "react-chartjs-2";
import { Chart as ChartConfig, registerables } from "chart.js";
import moneyFormatter from "../../utils/moneyFormatter";
import {
  barChartConfig,
  barChartConfig2,
  lineChartConfig,
  lineChartConfig2,
} from "../../config/defaultChartConfig";
ChartConfig.register(...registerables);

interface IChart {
  data: {
    labels: string[];
    datasets: number[];
  };
  moneyFormat?: boolean;
}

type TData = {
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

export function Chart({ data: dataProps, moneyFormat }: IChart) {
  const { labels, datasets } = dataProps;
  const data: TData = {
    labels,
    datasets: [
      {
        ...lineChartConfig,
        label: "Arrecadações Acumuladas",
        data: datasets[0],
        yAxisID: "y1",
      },
      {
        ...lineChartConfig2,
        label: "Despesas Acumuladas",
        data: datasets[1],
        yAxisID: "y1",
      },
      {
        ...barChartConfig,
        label: "Arrecadações",
        data: datasets[2],
        yAxisID: "y",
      },
      {
        ...barChartConfig2,
        label: "Despesas",
        data: datasets[3],
        yAxisID: "y",
      },
    ],
  };

  const options = {
    type: "scatter",
    responsive: true,
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

  return <_Chart type="bar" datasetIdKey="id" options={options} data={data} />;
}
