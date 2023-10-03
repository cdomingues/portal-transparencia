import {
  Button,
  Divider,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Chart from "../../../../components/Chart";
import ContainerBasic from "../../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../../components/Table";
import ModalDetails from "./components/ModalDetails";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    chart: any;
    years: Number[];
    setYear: any;
    year: number;
    handleByYear: any;
  };
};

export const contentRecipesAmendments = {
  titlePage: "Receitas - Emendas Parlamentares",
  description:
    "A arrecadação de receitas para o município pode vir de diferentes fontes. As emendas parlamentares, indicadas por Deputados Federais e Estaduais, são uma forma da cidade ter acesso a recursos. Acompanhe nesta página o descritivo das emendas parlamentares recebidas pela Prefeitura de Mogi das Cruzes. ",
};

function Screen({
  handler: {
    columns,
    data,
    loading,
    chart,
    setYear,
    year,
    years,
    handleByYear,
  },
}: PropsInput) {
  const [details, setDetails] = useState<any>({});

  const title = contentRecipesAmendments?.titlePage;
  const description = contentRecipesAmendments?.description;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = async (item: any) => {
    console.log(item);
    onOpen();
    setDetails(item?.row?.values);
  };

  return (
    <ContainerBasic title={title} description={description}>
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
        {chart?.datasets?.length > 0 && (
          <Chart type="bar" data={chart} valueFormat={1} />
        )}
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
        <TableComponent
          loading={loading}
          columns={columns}
          data={data}
          openModal={handleOpenModal}
        />
      </Box>

      <ModalDetails isOpen={isOpen} onClose={onClose} data={details} />
    </ContainerBasic>
  );
}

export default Screen;
