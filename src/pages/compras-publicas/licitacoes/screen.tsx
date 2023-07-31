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
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";
import ModalBiddings from "./modalBiddings";
import { ContainerSearch } from "../../../styles/components/licitacoes/styles";
import axios from "axios";
import cheerio from "cheerio";
import { baseUrl } from "../../../config";

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
  const [details, setDetails] = useState<any>(null);
  const title = contentBids?.titlePage;
  const description = contentBids?.description;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAPIResponse = (response: any) => {
    const html = response;

    const $ = cheerio.load(html);
    const links = $("a");
    const hrefs = links
      .map((index, element) => {
        const td = $(element).parent().prev("td");
        return {
          content: td.text().trim(),
          href: $(element).attr("href"),
          text: $(element).text(),
        };
      })
      .filter((index, link) => !link.href?.endsWith("#tab"))
      .get();

    const filteredValues = hrefs.filter(
      (item) => !item?.href?.includes("#tab")
    );

    const updatedLinks = filteredValues.map((link) => {
      const contentParts: any = link?.href?.split("/");
      const newHref = contentParts[contentParts?.length - 1];

      return {
        ...link,
        href: newHref,
      };
    });
  };

  const getDetails = async (id: number) => {
    const { data } = await axios.request({
      url: `${baseUrl}/api/track`,
      method: "get",
      params: { id, type: "licitacoes" },
    });

    if (!data) {
      return null;
    }

    const $ = cheerio.load(data);
    const links = $("a");
    const hrefs = links
      .map((index, element) => {
        const td = $(element).parent().prev("td");
        return {
          content: td.text().trim(),
          href: $(element).attr("href"),
          text: $(element).text(),
        };
      })
      .filter((index, link) => !link?.href?.endsWith("#tab"))
      .get();

    const filteredValues = hrefs.filter(
      (item) => !item?.href?.includes("#tab")
    );

    const updatedLinks = filteredValues.map((link) => {
      const contentParts: any = link?.href?.split("/");
      const newHref = contentParts[contentParts?.length - 1];

      return {
        ...link,
        href: newHref,
      };
    });

    return updatedLinks;
  };

  const handleOpenModal = async (biddinSelected: any) => {
    onOpen();
    setBidding(biddinSelected?.row?.values);

    const details = await getDetails(Number(biddinSelected?.row?.original?.id));
    setDetails(details);
  };

  return (
    <ContainerBasic title={title} description={description}>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <ContainerSearch direction="row">
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
              w={"100px"}
              h={"40px"}
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
        </ContainerSearch>

        <Divider borderWidth="2px" mt="10" mb="10" />

        <TableComponent
          loading={loading}
          columns={columns}
          data={data}
          openModal={handleOpenModal}
        />
      </Box>

      <ModalBiddings
        isOpen={isOpen}
        onClose={onClose}
        bidding={bidding}
        details={details}
      />
    </ContainerBasic>
  );
}

export default Screen;
