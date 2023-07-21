import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import moneyFormatter from "../../utils/moneyFormatter";
import { formatNumber } from "../../config/defaultChartConfig";
import { isMobile } from "react-device-detect";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { Box, useColorModeValue } from "@chakra-ui/react";
import {
  lineChartConfig,
  barChartConfig,
} from "../../config/defaultChartConfig";

const ChartBarApex1 = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IMultiAxisChart {
  data: {
    labels: string[];
    datasets: {
      type: "line" | "bar";
      series: string;
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth?: number;
      yAxisID: "y" | "y1";
    }[];
  };
  moneyFormat?: boolean;
  title?: string;
  yaxisLabel?: string;
  options?: Partial<ApexOptions>; 
  names?: string[];  // Added the names prop here
}

export function MultiAxisChart({
  data,
  moneyFormat,
  title,
  yaxisLabel,
  options = {},
  names = [],  // Added the names prop here
}: IMultiAxisChart) {
  const formatMoney = (value: number) => {
    return moneyFormat ? moneyFormatter(value) : value.toString();
  };

  const responsiveMoneyFormat = (value: number) => {
    return isMobile ? formatNumber(value) : formatMoney(value);
  };

  type SeriesType = {
    name: string;
    data: number[];
  }[];

  const series: SeriesType = data.datasets.map((dataset, index) => {
    const config = dataset.type === "line" ? lineChartConfig : barChartConfig;

    let name;
    if (index < names.length) {
      name = names[index];  // Use the provided name if it exists
    } else if (index === 0) {
      name = "Valor Mensal";
    } else if (index === 1) {
      name = "Valor Acumulado";
    } else {
      name = dataset.yAxisID;
    }

    const returnValue = {
      name: name,
      data: dataset.data,
      borderWidth: dataset.borderWidth,
      ...config,
    };

    console.log(returnValue);

    return returnValue;
  });

  const defaultOptions: ApexOptions = {
    chart: {
      width: "100%",
      height: 380,
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: data.labels,
    },
    yaxis: [
      {
        opposite: true,
        title: {
          text: "Valor Acumulado (R$ milhões)",
        },
        labels: {
          formatter: function (val: number) {
            return (val / 1000000).toFixed(0);
          }},
        floating: false,
        decimalsInFloat: 2,
      },
      {
        title: {
          text: "Valor Mensal (R$ milhões)",
        },
        labels: {
          formatter: function (val: number) {
            return (val / 1000000).toFixed(0);
          }},
        floating: false,
        decimalsInFloat: 2,
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  // Merge defaultOptions with the passed in options prop
  const mergedOptions = { ...defaultOptions, ...options };

  const { width } = useWindowDimensions();

  return (
    <Box
      m={0}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="2xl"
      padding={"15px"}
      rounded="md"
      overflow="hidden"
      flex={width > 1024 ? 1 : 2}
      borderRadius="18px"
      marginBottom="15px"
    >
      <div id="chart">
        <ChartBarApex1 series={series} options={mergedOptions} />
      </div>
    </Box>
  );
}
