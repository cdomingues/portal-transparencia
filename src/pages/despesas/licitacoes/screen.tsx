import { Button, Divider, Select, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    years: Number[];
    setYear: any;
    year: number;
    handleByYear: any;
  };
};

function Screen({
  handler: { columns, data, loading, setYear, year, years, handleByYear },
}: PropsInput) {
  const title = "Licitações";
  const description = "O procedimento administrativo pelo qual a Prefeitura contrata serviços ou adquire produtos é chamado de Licitação. Acompanhe aqui os dados das licitações realizadas pela Prefeitura de Mogi das Cruzes, incluindo informações sobre modalidade, objeto, vencimento, participantes e demais detalhes.";
  return (
    <ContainerBasic title={title} description={description}>
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

      <TableComponent loading={loading} columns={columns} data={data} />
    </ContainerBasic>
  );
}

export default Screen;
