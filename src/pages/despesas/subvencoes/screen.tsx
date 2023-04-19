import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { Chart } from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../components/Table";
import ModalGrants from "./modalGrants";

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
  const [grants, setGrants] = useState<any>(null);
  const title = "Subvenções";
  const description =
    "Subvenção é quando a Prefeitura destina recursos financeiros para que entidades cubram seus custos de atividades prestadas à população. Confira aqui as despesas relacionadas a essa natureza.";
  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = (item: any) => {
    onOpen();
    setGrants(item?.row?.values);
  };

  return (
    <ContainerBasic title={title} description={description}>
      <MultipleGraphWrapper>
        <GraphWrapper>
          <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
            Subvenções Mensal Acumulado
          </Heading>
          {chart?.datasets?.length > 0 && (
            <MultiAxisChart moneyFormat data={chart} />
          )}
        </GraphWrapper>
        <GraphWrapper>
          <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
            Subvenções últimos 5 anos
          </Heading>
          {chartYear?.datasets?.length > 0 && (
            <Chart type="bar" moneyFormat data={chartYear} />
          )}
        </GraphWrapper>
      </MultipleGraphWrapper>
      <Divider borderWidth="2px" mt="10" mb="10" />

      <Stack direction="row">
        <Stack minW={86} width="25%">
          <Text fontSize="sm" fontWeight="550" paddingLeft="5px">
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

      <TableComponent
        loading={loading}
        columns={columns}
        data={data}
        openModal={handleOpenModal}
      />

      <ModalGrants isOpen={isOpen} onClose={onClose} grants={grants} />
    </ContainerBasic>
  );
}

export default Screen;
