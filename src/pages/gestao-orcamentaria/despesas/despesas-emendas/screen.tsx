import {
  Button,
  Divider,
  Select,
  Stack,
  Text,
  useDisclosure,
  Box,
  useColorModeValue
} from "@chakra-ui/react";
import React, { useState } from "react";
import ContainerBasic from "../../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../../components/Table";
import ModalContracts from "./modalContracts";
import { ContainerSearch } from "../../../../styles/components/contratos-atas/styles";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    year: number;
    years: Number[];
    setYear: any;
    handleByYear: any;
    data2: Array<any>;
    setData2: any;
    arquivosColumns: TableColumns;
    
  };
};
export const contentContractsAndAtas = {
  titlePage: "Despesas - Emendas Parlamentares",
  description:
    "Confira nesta página as despesas empenhadas, liquidadas e pagas a partir dos recursos obtidos por meio de emendas parlamentares. ",
};
function Screen({
  handler: { columns, data, loading, handleByYear, setYear, year, years,data2, setData2,arquivosColumns },
}: PropsInput) {
  const [contract, setContract] = useState<any>(null);
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = (item: any) => {
    onOpen();
    setContract(item?.row?.values);
  };

  return (
    <ContainerBasic title={title} description={description}>
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
      {/* <ContainerSearch direction="row">
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
        <Stack minW={50} justifyContent="flex-end" className="button-search">
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
      </ContainerSearch> */}

      
      <TableComponent
        loading={loading}
        columns={columns}
        data={data}
        openModal={handleOpenModal}
      />

      <ModalContracts isOpen={isOpen} onClose={onClose} contract={contract} />
      {/* <TableComponent
        loading={loading}
        columns={arquivosColumns}
        data={data2}
        
      /> */}
     
      </Box>
    </ContainerBasic>
  );
}

export default Screen;