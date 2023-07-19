// import { Chart as _Chart } from "react-chartjs-2";
// import { Box, useColorModeValue } from "@chakra-ui/react";
// import { Chart as ChartConfig, registerables } from "chart.js";
// import moneyFormatter from "../../utils/moneyFormatter";
// import { ChartWrapper } from "../ChartWrapper";
// import { CSSProperties } from "react";
// import { isMobile } from "react-device-detect";
// import { formatNumber } from "../../config/defaultChartConfig";
// ChartConfig.register(...registerables);

// interface IChart { 
//   data: {
//     labels?: string[];
//     datasets: {
//       type?: "line" | "bar";
//       label?: string;
//       data: number;
//       backgroundColor: string;
//       borderColor: string;
//       borderWidth?: number;
//     }[];
//   };
//   type: "line" | "bar";
//   moneyFormat?: boolean;
//   style?: CSSProperties;
// }

// export function Chart({ data, type, moneyFormat, style }: IChart) {
//   const formatMoney = (value: number) => {
//     return moneyFormat ? moneyFormatter(value) : value.toString();
//   };

//   const responsiveMoneyFormat = (value: number) => {
//     return isMobile ? formatNumber(value) : formatMoney(value);
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top" as const,
//         display: data?.datasets.length > 0 ? false : true,
//       },
//       tooltip: {
//         callbacks: {
//           label: (context: any) => {
//             return formatMoney(context.parsed.y);
//           },
//         },
//       },
//     },
//     maxBarThickness: 60,
//     scales: {
//       y: {
//         ticks: {
//           callback: (value: any) => {
//             return responsiveMoneyFormat(value);
//           },
//           beginAtZero: true,
//         },
//       },
//     },
//   };
//   return (

// <Box       
// m={0}
// bg={useColorModeValue("white", "gray.800")}
// boxShadow="2xl"
// padding={"15px"}
// rounded="md"
// overflow="hidden"
// maxWidth="95%"
// borderRadius="18px"
// marginBottom="15px"
// >
//     <ChartWrapper style={style}>
//       <_Chart type={type} datasetIdKey="id" options={options} data={data} />
//     </ChartWrapper>
//     </Box>
//   );
// }
import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import moneyFormatter from "../../utils/moneyFormatter";
import { CSSProperties } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { formatNumber } from "../../config/defaultChartConfig";
import { ChartWrapper } from "../ChartWrapper";
import {
  lineChartConfig,
  barChartConfig,
} from "../../config/defaultChartConfig";

const ChartBarApex = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IChart {
  data: {
    labels?: string[];
    datasets: {
      type?: "line" | "bar";
      label?: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth?: number;
    }[];
  };
  type: "line" | "bar";
  moneyFormat?: boolean; 
  style?: CSSProperties;
}

const Chart: React.FC<IChart> = ({ data, type, moneyFormat, style }) => {
  const formatMoney = (value: number) => {
    return moneyFormat ? moneyFormatter(value) : value.toString();
  };

  const responsiveMoneyFormat = (value: number) => {
    return isMobile ? formatNumber(value) : formatMoney(value);
  };




  
  const series = data.datasets.map((dataset) => ({
    name: dataset.label,
    data: dataset.data,
  }));


//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: "55%",
//       endingShape: "rounded",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     show: true,
//     width: 2,
//     colors: ["transparent"],
//   },
//   xaxis: {},
//   yaxis: {
//     title: {
//       text: "R$ (Milhões)",
//     },
//     labels: {
//       formatter: function (val: number, index: any) {
//         return val.toFixed(0);
//       },
//     },
//   },
//   fill: {
//     opacity: 1,
//   },
// };



  const options: ApexOptions = {
    chart: {
      width: "100%",
      height: 380,
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    plotOptions: {
      bar:  {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 5,
   
    },
    xaxis: {
      categories: data.labels,
    },
    yaxis: [
      {
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

  return (
    <Box
    m={0}
    bg={useColorModeValue("white", "gray.800")}
    boxShadow="2xl"
    paddingTop={15}
    paddingBottom={15}
    paddingLeft={15}
    rounded="md"
    overflow="hidden"
    maxWidth="100%"
    borderRadius="18px"
    marginBottom="15px"
  >
       <div id="chart">
        <ChartBarApex options={options} series={series} type={type} />
        </div>
    </Box>
  );
} 

export default Chart;
