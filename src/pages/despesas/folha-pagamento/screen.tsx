import {
  Button,
  Divider,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { isMobile } from "react-device-detect";
import ChartColumn from "../../../components/Antdesign/ChartPlots/ChartColumn";
import ChartColumnLineWithPartner from "../../../components/Antdesign/ChartPlots/ColumnLineWithPartner";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    chart: any;
    chartYear: any;
    setYear: any;
    year: number;
    setEnrollment: any;
    enrollment: string;
    setMonth: any;
    month: number;
    setName: any;
    name: string;
    setRole: any;
    role: string;
    handlePayroll: any;
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
    setEnrollment,
    enrollment,
    setMonth,
    month,
    setName,
    name,
    setRole,
    role,
    handlePayroll,
  },
}: PropsInput) {
  const title = "Folha de Pagamento";
  const description = "";
  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };

  return (
    <ContainerBasic title={title} description={description}>
      <div
        style={{
          display: "flex",
          flexDirection: chartConfig.direction as any,
          height: "100%",
        }}
      >
        <div
          style={{
            width: chartConfig.width,
            marginRight: chartConfig.marginRight,
            marginLeft: chartConfig.marginLeft,
          }}
        >
          <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
            Folha de pagamento Mensal Acumulado
          </Heading>
          {chart?.data?.length > 0 && (
            <ChartColumnLineWithPartner config={chart} />
          )}
        </div>

        <div style={{ width: chartConfig.width }}>
          <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
            Folha de pagamento últimos 5 anos
          </Heading>
          {chartYear?.data?.length > 0 && <ChartColumn config={chartYear} />}
        </div>
      </div>
      <Divider height="3px" marginTop="10px" marginBottom="4px" />

      <Stack direction="row">
        <Stack width="25%">
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
            {Array.from({ length: 5 }).map((value, index) => {
              const newYear = moment().subtract(index, "years").year();
              return <option value={newYear}>{newYear}</option>;
            })}
          </Select>
        </Stack>
        <Stack width="25%">
          <Text fontSize="sm" fontWeight="550" paddingLeft="5px">
            Mês
          </Text>
          <Select
            defaultValue={month}
            onChange={(e) => setMonth(e.target.value)}
            bg="white"
            variant="outline"
            placeholder="Selecionar Mês"
          >
            {Array.from({ length: 12 }).map((value, index) => (
              <option value={index + 1}>{index + 1}</option>
            ))}
          </Select>
        </Stack>
      </Stack>
      <Divider width="50%" height="3px" marginTop="10px" marginBottom="4px" />
      <Stack direction="row">
        <Stack width="25%">
          <Text fontSize="sm" fontWeight="550" paddingLeft="5px">
            Nome
          </Text>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            bg="white"
            width="100%"
            placeholder="Nome"
          />
        </Stack>
        <Stack width="25%">
          <Text fontSize="sm" fontWeight="550" paddingLeft="5px">
            Cargo
          </Text>
          <Input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            bg="white"
            width="100%"
            placeholder="Cargo"
          />
        </Stack>
      </Stack>
      <Divider width="50%" height="3px" marginTop="10px" marginBottom="4px" />
      <Stack direction="row">
        <Stack width="25%">
          <Text fontSize="sm" fontWeight="550" paddingLeft="5px">
            Matricula
          </Text>
          <Input
            value={enrollment}
            onChange={(e) => setEnrollment(e.target.value)}
            bg="white"
            width="100%"
            placeholder="Matricula"
          />
        </Stack>
        <Stack width="10%" justifyContent="flex-end">
          <Button
            disabled={loading}
            onClick={() => handlePayroll()}
            _hover={{ bg: "gray.500", color: "white" }}
            bg="table.primary"
            color="white"
            fontSize="small"
          >
            Buscar
          </Button>
        </Stack>
      </Stack>
      <Divider width="50%" marginTop="10px" marginBottom="10px" />
      <TableComponent
        withFilter={false}
        loading={loading}
        columns={columns}
        data={data}
      />
    </ContainerBasic>
  );
}

export default Screen;
