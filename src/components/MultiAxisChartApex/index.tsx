import React, { CSSProperties } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Box, useColorModeValue } from "@chakra-ui/react";
import moneyFormatter from "../../utils/moneyFormatter";
import { isMobile } from "react-device-detect";
import { formatNumber } from "../../config/defaultChartConfig";
import useWindowDimensions from "../../utils/useWindowDimensions";


interface IMultiAxisChart {
  data: {
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



  const { width } = useWindowDimensions();

  const options: ApexOptions = {


    tooltip: {
      y: {
        formatter: (value: any) => {
          return formatMoney(value);
        },
      },
    },
  };
  
  const series = data.datasets.map(dataset => ({
    name: dataset.label,
    type: dataset.type,
    data: dataset.data,
  }));

  
  
  return 
  <Box       
  m={0}
  bg={useColorModeValue("white", "gray.800")}
  
  padding={"15px"}
  rounded="md"
  overflow="hidden"
  flex={width > 1024 ? 1 : 2}
  borderRadius="18px"
  marginBottom="15px"
>
  
  <Chart options={options} series={series} type="line" height={350} />;
  
  </Box>


  


}
