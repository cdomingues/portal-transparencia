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
  options?: Partial<ApexOptions>; 
  names?: string[];  
  seriesName?: string;  // seriesName é agora opcional
  chartType?: "line" | "bar";  
}

export function MultiAxisChart({
  data,
  moneyFormat,
  title,
  yaxisLabel,
  options = {},
  names = [], 
  seriesName,  
  chartType,
}: IMultiAxisChart) {
  const formatMoney = (value: number) => {
    return moneyFormat ? moneyFormatter(value) : value.toString();
  };

  const responsiveMoneyFormat = (value: number) => {
    return isMobile ? formatNumber(value) : formatMoney(value);
  };

  const targetSeries = seriesName || (data.datasets.length > 0 ? data.datasets[0].label : "");

  type SeriesType = {
    name: string;
    data: number[];
  }[];

  const series: SeriesType = data.datasets
    .filter((dataset) => dataset.label === targetSeries)
    .map((dataset) => {
      const config = chartType === "line" ? lineChartConfig : barChartConfig;

      const returnValue = {
        name: dataset.label,
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
      background: "transparent",
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
        min: 0, // Garanta que este valor seja um múltiplo de 10
        // max: 100, // Opcional: Defina um valor máximo se necessário, e garanta que seja um múltiplo de 10
        forceNiceScale: true,
        tickAmount: 10, // Defina o número desejado de ticks/divisões no eixo Y
     
      
        title: {
          text: "Valor Acumulado (R$ milhões)",
        },
        labels: {
          formatter: function (val: number) {
              let formattedValue = (val / 1000000).toFixed(0);
              return 'R$ ' + parseInt(formattedValue).toLocaleString('pt-BR'); // 'pt-BR' garante que o ponto seja usado como delimitador de milhares
          }
      },
      
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
    
      <div id="chart">
        <ChartBarApex series={series} options={mergedOptions} />
      </div>

  );
}
