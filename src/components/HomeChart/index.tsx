import { Chart as _Chart } from "react-chartjs-2";
import { Chart as ChartConfig, registerables } from "chart.js";
import moneyFormatter from "../../utils/moneyFormatter";
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
        type: "line",
        label: "Arrecadações Acumuladas",
        data: datasets[0],
        backgroundColor: "#fac534",
        borderColor: "#fac534A0",
        yAxisID: "y1",
      },
      {
        type: "line",
        label: "Despesas Acumuladas",
        data: datasets[1],
        backgroundColor: "#fa6328",
        borderColor: "#fa6328A0",
        yAxisID: "y1",
      },
      {
        type: "bar",
        label: "Arrecadações",
        data: datasets[2],
        backgroundColor: "#1E90FFA0",
        borderColor: "#1E90FF",
        borderWidth: 2,
        yAxisID: "y",
      },
      {
        type: "bar",
        label: "Despesas",
        data: datasets[3],
        backgroundColor: "#FF6347A0",
        borderColor: "#FF6347",
        borderWidth: 2,
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
