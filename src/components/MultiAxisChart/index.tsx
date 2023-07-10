import { Chart as _Chart } from "react-chartjs-2";
import { Chart as ChartConfig, registerables } from "chart.js";
import moneyFormatter from "../../utils/moneyFormatter";
import { ChartWrapper } from "../ChartWrapper";
import { CSSProperties } from "styled-components";
import { isMobile } from "react-device-detect";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { formatNumber } from "../../config/defaultChartConfig";
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
  const formatMoney = (value: number) => {
    return moneyFormat ? moneyFormatter(value) : value.toString();
  };

  const responsiveMoneyFormat = (value: number) => {
    return isMobile ? formatNumber(value) : formatMoney(value);
  };
  
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
            return formatMoney(context.parsed.y);
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
            return responsiveMoneyFormat(value);
          },
          beginAtZero: true,
        },
      },
      y1: {
        position: "right" as const,
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
    <Box       
m={0}
bg={useColorModeValue("white", "gray.800")}
boxShadow="2xl"
padding={"15px"}
rounded="md"
overflow="hidden"
maxWidth="95%"
borderRadius="18px"
marginBottom="15px"
>
    <ChartWrapper style={style}>
      <_Chart type="bar" datasetIdKey="id" options={options} data={data} />
    </ChartWrapper>
    </Box>
  );
}
