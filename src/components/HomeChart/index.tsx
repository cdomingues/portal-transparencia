import { Chart as _Chart } from "react-chartjs-2";
import { Chart as ChartConfig, registerables } from "chart.js";
import moneyFormatter from "../../utils/moneyFormatter";
import {
  barChartConfig,
  barChartConfig2,
  formatNumber,
  lineChartConfig,
  lineChartConfig2,
} from "../../config/defaultChartConfig";
import { isMobile } from "react-device-detect";
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

  const formatMoney = (value: number) => {
    return moneyFormat ? moneyFormatter(value) : value.toString();
  };

  const responsiveMoneyFormat = (value: number) => {
    return isMobile ? formatNumber(value) : formatMoney(value);
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
        position: "bottom" as const,
        spacing: 300, // Set the spacing to 100px
        color: 'white',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return formatMoney(context.parsed.y);
          },
        },
      },
    },
    scales: {
      x: {
        display: false, // Hide the x-axis
      },
      y: {
        display: false, // Hide the y-axis
      },
      y1: {
        display: false, // Hide the secondary y-axis
      },
    },
  };

  return <_Chart type="bar" datasetIdKey="id" options={options} data={data} />;
}
