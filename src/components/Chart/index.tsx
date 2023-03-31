import { Chart as _Chart } from "react-chartjs-2";
import { Chart as ChartConfig, registerables } from "chart.js";
import moneyFormatter from "../../utils/moneyFormatter";
import { ChartWrapper } from "../ChartWrapper";
import { CSSProperties } from "react";
import { isMobile } from "react-device-detect";
import { formatNumber } from "../../config/defaultChartConfig";
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
  style?: CSSProperties;
}

export function Chart({ data, type, moneyFormat, style }: IChart) {
  const formatMoney = (value: number) => {
    return moneyFormat ? moneyFormatter(value) : value.toString();
  };

  const responsiveMoneyFormat = (value: number) => {
    return isMobile ? formatNumber(value) : formatMoney(value);
  };

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
            return formatMoney(context.parsed.y);
          },
        },
      },
    },
    maxBarThickness: 60,
    scales: {
      y: {
        ticks: {
          callback: (value: any) => {
            return responsiveMoneyFormat(value);
          },
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <ChartWrapper style={style}>
      <_Chart type={type} datasetIdKey="id" options={options} data={data} />
    </ChartWrapper>
  );
}
