import {
  Button,
  Divider,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  useDisclosure,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import ChartColumn from "../../../components/Antdesign/ChartPlots/ChartColumn";
import ChartColumnLineWithPartner from "../../../components/Antdesign/ChartPlots/ColumnLineWithPartner";
import Chart from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import { TableColumns } from "../../../components/Table";
import TableWithOutFilterComponent from "../../../components/Table/TableWithoutFilter";
import ModalPayments from "./modalPayments";
import colors from "../../../styles/colors";

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

export const contentPayroll = {
  titlePage: "Folha de Pagamento",
  description:
    "É dever do Poder Público dar transparência à Folha de Pagamento dos funcionários. Acompanhe aqui o detalhamento dos cargos e salários dos servidores públicos municipais.",
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
  const [payments, setPayments] = useState<any>(null);
  
  const title = contentPayroll?.titlePage;
  const description = contentPayroll?.description;
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
    setPayments(item?.row?.values);
    console.log(item);
  };

  return (
    <ContainerBasic title={title} description={description}>
      <Box>
        <Box
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          
          padding={"15px"}
          rounded="md"
          overflow="hidden"
          maxWidth="100%"
          borderRadius="18px"
          marginBottom="15px"
        >
        {/*   <MultipleGraphWrapper>
            <GraphWrapper>
              <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
                Folha de pagamento Mensal Acumulado
              </Heading>
              {chart?.datasets?.length > 0 && (
                <MultiAxisChart chartType="line" moneyFormat data={chart} />
              )}
            </GraphWrapper>

            <GraphWrapper>
              <Heading mb={5} fontSize={chartConfig.fontSize} color="text.dark">
                Folha de pagamento últimos 5 anos
              </Heading>
              {chartYear?.datasets?.length > 0 && (
                <Chart type="bar" data={chartYear} />
              )}
            </GraphWrapper>
          </MultipleGraphWrapper> */}
        </Box>

        <Divider height="3px" marginTop="10px" marginBottom="4px" />

        <Box
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          
          paddingTop={15}
          paddingBottom={15}
          paddingLeft={15}
          rounded="md"
          overflow="hidden"
          maxWidth="100%"
          borderRadius="18px"
          marginBottom="15px"
        >
          <Stack direction="row">
            <Stack minW={86} width="25%">
              <Text fontSize="sm" fontWeight="550" paddingLeft="5px">
                Ano
              </Text>
              <Select
          value={year} // Define o valor selecionado com base no estado
          onChange={(e) => setYear(e.target.value)}
          bg="white"
          variant="outline"
          placeholder="Todos os anos"
        >
          {Array.from({ length: 5 }).map((_, index) => {
            const newYear = moment().subtract(index, "years").year();
            return (
              <option key={index} value={newYear}>
                {newYear}
              </option>
            );
          })}
        </Select>
            </Stack>
            <Stack minW={86} width="25%">
              <Text fontSize="sm" fontWeight="550" paddingLeft="5px">
                Mês
              </Text>
              <Select
          value={month} // Define o valor selecionado com base no estado
          onChange={(e) => setMonth(e.target.value)}
          bg="white"
          variant="outline"
          placeholder="Todos os meses"
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </Select>
            </Stack>
          </Stack>

          <Divider
            width="50%"
            height="3px"
            marginTop="10px"
            marginBottom="4px"
          />
          <Stack direction="row">
            <Stack minW={86} width="25%">
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
            <Stack minW={86} width="25%">
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
          <Divider
            width="50%"
            height="3px"
            marginTop="10px"
            marginBottom="4px"
          />
          <Stack direction="row">
            <Stack minW={140} width="25%">
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
                minW={110}
                disabled={loading}
                onClick={() => handlePayroll()}
                _hover={{ bg: "gray.500", color: "white" }}
                bg={colors.primaryDefault40p}
                color="white"
                fontSize="small"
              >
                Buscar
              </Button>
            </Stack>
          </Stack>
         
          <Divider width="50%" marginTop="10px" marginBottom="10px" />  
          <TableWithOutFilterComponent
            withFilter={false}
            loading={loading}
            columns={columns}
            data={data}
            handleOpenModal={handleOpenModal}
          />

          <ModalPayments
            isOpen={isOpen}
            onClose={onClose}
            payments={payments}
            backgroundColor={"red"}
          />
        </Box>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
