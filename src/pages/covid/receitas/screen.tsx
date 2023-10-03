import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import  Chart  from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../components/Table";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
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
    handleByYear: any;
  };
};

export const contentCovidRecipes = {
  titlePage: "Receitas COVID-19",
  description: "Dispõe das receitas recebidas pelo órgão público para enfrentamento da emergência de saúde pública de importância internacional decorrente do coronavírus (COVID-19).",
}

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
    handleByYear,
  },
}: PropsInput) {
  const title = contentCovidRecipes?.titlePage;
  const description = contentCovidRecipes?.description;
  const accessibility = useFontSizeAccessibilityContext()
  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };

  return (
    <ContainerBasic title={title} description={description}>
      <GraphWrapper>
        <Heading mb={5}  color="red">
          <Text fontSize={accessibility.fonts.large} >Receitas últimos 5 anos</Text>
        </Heading>
        {chartYear?.datasets?.length > 0 && (
          <Chart type="bar"  data={chartYear} />
        )}
      </GraphWrapper>
      <Divider borderWidth="2px" mt="10" mb="10" />

      <Stack direction="row">
        <Stack minW={86} width="25%">
          <Text fontSize={accessibility.fonts.large}   paddingLeft="5px">
            Ano
          </Text>
          <Select
            defaultValue={year}
            onChange={(e) => setYear(e.target.value)}
            bg="white"
            variant="outline"
            placeholder="Selecionar Ano"
          >
            {years?.map((year, index) => (
              <option key={index} value={String(year)}>
                {String(year)}
              </option>
            ))}
          </Select>
        </Stack>
        <Stack minW={50} width="10%" justifyContent="flex-end">
               <Button
            w={'100px'}
            h={'40px'}
              disabled={loading}
              onClick={() => handleByYear(year)}
              _hover={{ bg: "gray.500", color: "white" }}
              bg="table.primary"
              color="white"
              fontSize="small"
            >
         
            Buscar
          </Button>
        </Stack>
      </Stack>

      <Divider borderWidth="2px" mt="10" mb="10" />
      <TableComponent columns={columns} loading={loading} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
