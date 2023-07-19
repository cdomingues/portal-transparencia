// import React from "react";
// import { ApexOptions } from "apexcharts";
// import dynamic from "next/dynamic";
// import { isMobile } from "react-device-detect";
// import { color } from "highcharts";
// import { Bar } from "react-chartjs-2";

// import {
//   barChartConfig,
//   barChartConfig2,
//   formatNumber,
//   lineChartConfig,
//   lineChartConfig2,
// } from "../../config/defaultChartConfig";

// const ChartBarApex = dynamic(() => import("react-apexcharts"), { ssr: false });

// interface IChart {
//   data: {
//     labels: string[];
//     datasets: number[][];
//   };
//   moneyFormat?: boolean;
//   chartOptions?: ApexOptions;
//   dataMapper?: (value: number) => number;
//   title?: string;
//   yaxisLabel?: string;
//   chartType?: ApexChart["type"]; // Use ApexChart["type"] instead of string
// }

// type TData = {
//   labels: string[];
//   datasets: {
//     type: "line" | "bar";
//     label: string;
//     data: number;
//     backgroundColor: string;
//     borderColor: string;
//     borderWidth?: number;
//     yAxisID: "y" | "y1";
//   }[];
// };

// export function ChartComponent({
//   data: dataProps,
//   moneyFormat,
//   chartOptions,
//   dataMapper,
//   title, // new prop for title
//   yaxisLabel, // new prop for y-axis label
// }: IChart) {
//   const { labels, datasets } = dataProps;
//   const data: TData = {
//     labels,
//     datasets: [
//       {
//         ...lineChartConfig,
//         label: "Arrecadações Acumuladas",
//         data: datasets[0],
//         yAxisID: "y1",
//       },
//       {
//         ...lineChartConfig2,
//         label: "Despesas Acumuladas",
//         data: datasets[1],
//         yAxisID: "y1",
//       },
//       {
//         ...barChartConfig,
//         label: "Arrecadações",
//         data: datasets[2],
//         yAxisID: "y",
//       },
//       {
//         ...barChartConfig2,
//         label: "Despesas",
//         data: datasets[3],
//         yAxisID: "y",
//       },
//     ],
//   };

//   const dataMapperSafe = dataMapper || Math.round;
//   const roundedDatasets = datasets.map((dataset) =>
//     dataset.map(dataMapperSafe)
//   );

//   const defaultOptions: ApexOptions = {
//     chart: {},

//     title: {
//       text: title || "Default Title", // use title prop if provided, otherwise default to 'Default Title'
//       align: "left",
//       offsetX: 110,
//     },
//     yaxis: {
//       title: {
//         text: yaxisLabel || "Default Label", // use yaxisLabel prop if provided, otherwise default to 'Default Label'
//       },
//     },
//   };

//   const options: ApexOptions = {
//     ...defaultOptions,
//     ...chartOptions,
//   };

//   const chartTypes = ["line", 'line', 'bar', 'bar'];

//   let accumulatedData = 0;

// const series = roundedDatasets.map((dataset, index) => {
//   const type = chartTypes[index];
//   const data = type === "line"
//     ? dataset
//     : dataset;

//   return {
//     name: "Series " + (index + 1),
//     data: data,
//     type: type
//   };
// });

//   return (
//     <div id="chart">
//       <ChartBarApex series={series} options={options} />
//     </div>
//   );
// }



import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

import {
  barChartConfig,
  barChartConfig2,
  formatNumber,
  lineChartConfig,
  lineChartConfig2,
} from "../../config/defaultChartConfig";

const ChartBarApex = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IChart {
  data: {
    labels: string[];
    datasets: number[][];
  };
  moneyFormat?: boolean;
  chartOptions?: ApexOptions;
  dataMapper?: (value: number) => number;
  title?: string;
  yaxisLabel?: string;
  chartType?: ApexChart["type"];
}

type TData = {
  labels: string[];
  datasets: {
    type: "line" | "bar";
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth?: number;
    yAxisID: "y" | "y1";
  }[];
};

export function ChartComponent({
  data: dataProps,
  moneyFormat,
  chartOptions,
  dataMapper,
  title,
  yaxisLabel,
}: IChart) {
  const { labels, datasets } = dataProps;

  const roundedDatasets = datasets.map((dataset, index) => {
    if (index > -1) {
      return dataset.map((value: number) => value / 1000000);
    }
    return dataset;
  });

  const data: TData = {
    labels,
    datasets: [
      {
        ...lineChartConfig,
        label: "Arrecadações Acumuladas",
        data: roundedDatasets[0],
        yAxisID: "y",
        type: 'line'
      },

      {
        ...lineChartConfig,
        label: "Despesas Acumuladas",
        data: roundedDatasets[1],
        yAxisID: "y",
        type: 'line'
      },
  
      {
        ...lineChartConfig,
        label: "Arrecadações",
        data: roundedDatasets[2],
        yAxisID: "y1",
        type: 'bar'

      },

      {
        ...lineChartConfig,
        label: "Despesas",
        data: roundedDatasets[3],
        yAxisID: "y1",
        type: 'bar'
      },

    ],
  };

  const chartTypes = ["line", "line", "bar", "bar"];

  const series1 = data.datasets.slice(0, 2).map((dataset, index) => {
    const type = chartTypes[index];
    const data = dataset.data;

    return {
      name: dataset.label,
      data: data,
      type: type,
      backgroundColor: dataset.backgroundColor,
      borderColor: dataset.borderColor,
      borderWidth: dataset.borderWidth,
    };
  });

  const series2 = data.datasets.slice(2).map((dataset, index) => {
    const type = chartTypes[index + 2];
    const data = dataset.data;

    return {
      name: dataset.label,
      data: data,
      type: type,
      backgroundColor: dataset.backgroundColor,
      borderColor: dataset.borderColor,
      borderWidth: dataset.borderWidth,
    };
  });

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
      bar: {
        horizontal: false
      }
    },
    xaxis: {
      categories: data.labels,
    },
    title: {
      text: title || "Default Title",
      align: "left",
      offsetX: 0,
    },
    yaxis: {
      show: true,
      showAlways: false,
      title: {
        text: yaxisLabel || "Default Label",
      },
      labels: {
        formatter: function (val, index) {
          return val.toFixed(2);
        },
      },
    },
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
              horizontal: false
            }
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  return (
    <div id="chart">
       <ChartBarApex series={series2} options={options} />
      <ChartBarApex series={series1} options={options} />
     
    </div>
  );
}


