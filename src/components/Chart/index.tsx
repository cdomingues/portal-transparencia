import { Chart as _Chart } from "react-chartjs-2";
import { Chart as ChartConfig, registerables } from "chart.js";
import moneyFormatter from "../../utils/moneyFormatter";
import { ChartWrapper } from "../ChartWrapper";
ChartConfig.register(...registerables);

interface IChart {
  data: {
    labels?: string[];
    datasets: {
      type?: "line" | "bar";
      label?: string;
      data: number;
      backgroundColor: string;
      borderColor: string;
      borderWidth?: number;
    }[];
  };
  type: "line" | "bar";
  moneyFormat?: boolean;
}

export function Chart({ data, type, moneyFormat }: IChart) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        display: data?.datasets.length > 0 ? false : true,
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
    <ChartWrapper>
      <_Chart type={type} datasetIdKey="id" options={options} data={data} />
    </ChartWrapper>
  );
}
