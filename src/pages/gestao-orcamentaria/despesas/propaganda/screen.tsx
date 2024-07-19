import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import Chart from "../../../../components/Chart";
import ContainerBasic from "../../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../../components/Table";
import Video from "../../../../components/Videos";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    chart: any;
    chartYear: any;
    years: Number[];
    setYear: any;
    year: number;
    gastos: Array<any>;
    setGastos: any;
    
  };
};

export const contentAdvertisements = {
  titlePage: "Gastos com publicidade",
  description:
    "A publicidade legal e institucional realizada pelo Poder Público é um importante serviço cujo objetivo final é favorecer o acesso da população a todos os outros serviços públicos, além de contribuir com a transparência dos atos administrativos. Confira as despesas com publicidade da Prefeitura de Mogi das Cruzes",
};

function Screen({
  handler: {
    columns,
    data,
    loading,
    chart,
    chartYear,
    setYear,
    year,
    years,
    gastos,
    setGastos,
   // handleByYear,
  },
}: PropsInput) {
  const title = contentAdvertisements?.titlePage;
  const description = contentAdvertisements?.description;

  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };

  const url_video = "https://www.youtube.com/embed/K7_TUkedcGA?si=iPxaKODtZnboQT-_";
  const titulo = "O QUE SÃO AS SEIS MEDIDAS?"; 

  return (
    <ContainerBasic title={title} description={description}>
      <Video url_video={url_video} titulo={titulo} />
  
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <MultipleGraphWrapper>
          <GraphWrapper>
            <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
              Publicidade e Propaganda Mensais Acumulado
            </Heading>
            {chart?.datasets?.length > 0 && (
              <MultiAxisChart
                chartType="line"
                moneyFormat
                data={chart}
                valueFormat={1}
              />
            )}
          </GraphWrapper>
          <GraphWrapper>
            <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
              Publicidade e Propaganda últimos 5 anos
            </Heading>
            {chartYear?.datasets?.length > 0 && (
              <Chart type="bar" data={chartYear} valueFormat={1} />
            )}
          </GraphWrapper>
        </MultipleGraphWrapper>
      </Box>

      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        

        <Divider borderWidth="2px" mt="10" mb="10" />
        <TableComponent loading={loading} columns={columns} data={gastos} />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
