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

const ChartBarApex = dynamic(() => import("react-apexcharts"), { ssr: false });

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
}

export function MultiAxisChart({
  data,
  moneyFormat,
  title,
  yaxisLabel,
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

    // Assign name based on index
    let name;
    if (index === 0) {
      name = "Valor Mensal"; // "Valor Acumulado"
    } else if (index === 1) {
      name = "Valor Acumulado"; // "Valor"
      
    } else {
      name = dataset.yAxisID; // Use 'yAxisID' as name for other datasets
    }

    // Create a variable to hold the return value
    const returnValue = {
      name: name,
      data: dataset.data, // Map data directly
      borderWidth: dataset.borderWidth,
      ...config,
    };

    // Log the return value
    console.log(returnValue);

    // Return the value
    return returnValue;
  });

  const options: ApexOptions = {
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
    // title: 
    
    // {
    //   enable: true,
    //   text: title || "Default Title",
    //   align: "left",
    //   offsetX: 0,
    // },
    yaxis: [
      {
        opposite: true,
        title: {
          text: "Valor Acumulado (R$ milhões)",
        },
        labels: {
          formatter: function (val: number) {
            return (val / 1000000).toFixed(0); // Divide by one million and keep 2 decimal places
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
            return (val / 1000000).toFixed(0); // Divide by one million and keep 2 decimal places
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
        <ChartBarApex series={series} options={options} />
      </div>
    </Box>
  );
}
