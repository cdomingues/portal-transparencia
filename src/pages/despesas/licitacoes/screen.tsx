import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";
<<<<<<< HEAD
=======
import ModalBiddings from "./modalBiddings";
import { ContainerSearch } from "../../../styles/components/licitacoes/styles";
>>>>>>> 11066c8a5169bf84faa7da227d4c49f9532fd1f4
import fileBiddings from "../../../assets/file";

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

export const contentBids = {
  titlePage: "Licitações",
  description:
    "O procedimento administrativo pelo qual a Prefeitura contrata serviços ou adquire produtos é chamado de Licitação. Acompanhe aqui os dados das licitações realizadas pela Prefeitura de Mogi das Cruzes, incluindo informações sobre modalidade, objeto, vencimento, participantes e demais detalhes.",
};

function Screen({
  handler: { columns, data, loading, setYear, year, years, handleByYear },
}: PropsInput) {
  const [bidding, setBidding] = useState<any>(null);
  const [details, setDetails]= useState<any>(null);
  const title = contentBids?.titlePage;
  const description = contentBids?.description;
  const { isOpen, onOpen, onClose } = useDisclosure();

  function removeCharacters(string: string): string {
    const charactersToRemove = [" .", "\r", "\n"];
    let result = string;
    for (const char of charactersToRemove) {
      result = result.split(char).join("");
    }
    result = result.replace(" .", ".");
    return result;
  }

  const handleOpenModal = async (biddinSelected: any) => {
    // const array = fileBiddings[String(biddinSelected?.row?.values?.ano)];
    // const getArraySimilar = await array?.filter((item: any) => {
    //   if (item?.dados?.licitacao === biddinSelected?.row?.values?.numero) {
    //     return item;
    //   }
    //   return;
    // });

    // let newArray =
    //   getArraySimilar?.length > 1
    //     ? getArraySimilar?.filter((item: any) => {
    //         if (
    //           item?.descricao.includes(
    //             removeCharacters(biddinSelected?.row?.values?.objeto)
    //           )
    //         ) {
    //           return item;
    //         }
    //         return;
    //       })
    //     : getArraySimilar;

    // setDetails(newArray?.[0]);
    // onOpen();
    // setBidding(biddinSelected?.row?.values);
  };

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
        <Stack minW={50} justifyContent="flex-end" className="button-search">
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


    </ContainerBasic>
  );
}

export default Screen;
