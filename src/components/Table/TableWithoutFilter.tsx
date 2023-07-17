import React, { useMemo, useState } from "react";
import { useTable, usePagination, useFilters, useSortBy } from "react-table";
import {
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
  Center,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Icon,
  Text,
  Textarea,
  useDisclosure,
  SkeletonText,
  Skeleton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import {
  AiOutlineDatabase,
  AiOutlineFileText,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import CsvDownload from "react-json-to-csv";
import ColumnFilter from "./components/ColumnFilter";
import { CsvItem, TableContainer } from "./styles";
import { BsChevronDown, BsChevronExpand, BsChevronUp } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { isMobile } from "react-device-detect";

export type TableColumns = Array<{
  title: string;
  field: string;
}>;

type Props = {
  columns: TableColumns;
  data: Array<any>;
  loading?: boolean;
  withFilter?: boolean;
  handleOpenModal?: any;
};

function HeaderComponent({ title }: { title: string }) {
  return (
    <div
      style={{ height: "30px", textAlign: "center", alignContent: "center" }}
    >
      {title}
    </div>
  );
}

function TableWithOutFilterComponent({
  columns,
  data,
  loading = false,
  withFilter = true,
  handleOpenModal
}: Props) {
  const [modelType, setModelType] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const newColumns = useMemo(
    () =>
      columns.map((column) => {
        return {
          Header: <HeaderComponent title={column.title} />,
          accessor: column.field,
          Filter: ColumnFilter,
        };
      }),
    [columns]
  );

  const radius = "8px";

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    pageOptions,
    setPageSize,
  } = useTable(
    {
      columns: newColumns,
      data,
    },
    useSortBy,
    usePagination
  );

  const exportJson = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `${new Date().getTime()}.json`;

    link.click();
  };

  return (
    <>
    <Box       
m={0}
bg={useColorModeValue("white", "gray.800")}
boxShadow="2xl"
padding={"15px"}
rounded="md"
overflow="hidden"
maxWidth="100%"
borderRadius="18px"
marginBottom="15px"
>
      <Modal onClose={onClose} size={"xs"} isOpen={isOpen}>
        <ModalOverlay />
        {modelType !== "movie" ? (
          <ModalContent alignSelf="center">
            <ModalHeader>Dicionário de dados</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Este serviço será disponibilizado em breve.</ModalBody>
            <ModalFooter>
              <Button
                _hover={{ bg: "gray.200", color: "white" }}
                onClick={onClose}
                bg="primary"
                color="white"
              >
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent maxH="750" maxW="700" alignSelf="center">
            <ModalHeader>Video Explicativo</ModalHeader>
            <ModalCloseButton />
            <ModalBody height={450} width={600} bg="white">
           {/* <iframe
                style={{ paddingLeft: "8%", textAlign: "center" }}
                width="600"
                height="450"
                src="https://www.youtube.com/embed/F4kk9FqoRHw"
              ></iframe> */}
              <text>Este serviço será disponibilizado em breve. </text>
            </ModalBody>
            <ModalFooter>
              <Button
                _hover={{ bg: "gray.200", color: "white" }}
                onClick={onClose}
                bg="primary"
                color="white"
              >
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
      <Flex color="white" direction={isMobile ? "column" : "row"}>
        <Box p="4" pl={0}>
          <Button
            _hover={{ bg: "table.button.hover" }}
            size="sm"
            bg="table.primary"
            color="white"
            leftIcon={<BiCameraMovie />}
            onClick={() => {
              setModelType("movie");
              onOpen();
            }}
            disabled={loading}
          >
            Video Explicativo
          </Button>
        </Box>
        <Box p="4" pl={0}>
          <Button
            _hover={{ bg: "table.button.hover" }}
            size="sm"
            bg="table.primary"
            color="white"
            leftIcon={<AiOutlineFileText />}
            onClick={() => {
              setModelType("data");
              onOpen();
            }}
            disabled={loading}
          >
            Dicionário de Dados
          </Button>
        </Box>
        <Box p="4" pl={0}>
          <Menu>
            <MenuButton
              _hover={{ bg: "table.button.hover" }}
              size="sm"
              bg="table.primary"
              color="white"
              variant="solid"
              as={Button}
              leftIcon={<AiOutlineDatabase />}
              disabled={loading}
            >
              Dados Abertos
            </MenuButton>
            <MenuList color="table.primary" bg="white">
              <CsvItem>
                {!loading && (
                  <CsvDownload
                    style={{ width: "100%", textAlign: "left" }}
                    filename={`${new Date().getTime()}.csv`}
                    data={data}
                  >
                    .CSV
                  </CsvDownload>
                )}
              </CsvItem>
              <MenuItem onClick={() => exportJson()}>.JSON</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
      </Flex>
      <TableContainer>
        {loading ? (
          <Box padding="6" width={"100%"} boxShadow="lg" bg="white">
            <Skeleton
              height="50px"
              fadeDuration={4}
              startColor="table.primary"
              endColor="table.button.hover"
            />
            <SkeletonText mt="4" noOfLines={10} spacing="4" />
          </Box>
        ) : (
          <Table
            variant="striped"
            style={{
              borderCollapse: "collapse",
            }}
            {...getTableProps()}
          >
            <Thead bg="table.primary">
              {headerGroups.map((group, index) => (
                <Tr {...group.getHeaderGroupProps()} key={index}>
                  {group.headers.map((column, index) => {
                    const isFirst =
                      index === 0 ? { borderTopLeftRadius: radius } : {};
                    const isLast =
                      index + 1 === group.headers.length
                        ? { borderTopRightRadius: radius }
                        : {};
                    return (
                      <Th
                        style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: 11,
                          ...isFirst,
                          ...isLast,
                        }}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        key={index}
                      >
                        <div
                          style={{
                            color: "white",
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <div
                            style={{
                              color: "white",
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            {column.render("Header")}
                            <div>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <Icon
                                    color="white"
                                    marginLeft={2}
                                    fontSize="14"
                                    _groupHover={{
                                      color: "gray.400",
                                    }}
                                    as={BsChevronDown}
                                  />
                                ) : (
                                  <Icon
                                    color="white"
                                    fontSize="14"
                                    marginLeft={2}
                                    _groupHover={{
                                      color: "gray.400",
                                    }}
                                    as={BsChevronUp}
                                  />
                                )
                              ) : (
                                <Icon
                                  color="white"
                                  fontSize="14"
                                  marginLeft={2}
                                  _groupHover={{
                                    color: "gray.400",
                                  }}
                                  as={BsChevronExpand}
                                />
                              )}
                            </div>
                          </div>
                        </div>

                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                      </Th>
                    );
                  })}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <Tr
                    fontSize={12}
                    _hover={{
                      bg: "gray.200",
                    }}
                    {...row.getRowProps()}
                    key={index}
                  >
                    {row.cells.map((cell, index) => {
                      return (
                        <Td
                        onClick={() => handleOpenModal(cell) } 
                          style={{
                            padding: "8px",
                            backgroundColor: "white",
                            textAlign: "right",
                          }}
                          {...cell?.getCellProps()}
                          key={index}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                              textAlign: "right",
                            }}
                          >
                            {cell?.value?.length > 50 ? (
                              <Textarea
                                fontSize="12"
                                width="300px"
                                value={cell?.value}
                                contentEditable="false"
                                size="md"
                              />
                            ) : (
                              cell.render("Cell")
                            )}
                          </div>
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        )}
      </TableContainer>
      <Center mt={5}>
        <Center width="200px">
          <Button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            size="sm"
            color="white"
            bg="transparent"
            mr={4}
          >
            <Icon
              color="table.primary"
              fontSize="18"
              _groupHover={{
                color: "primary",
              }}
              as={AiOutlineDoubleLeft}
            />
          </Button>
          <Text fontWeight="600" color="table.primary">
            {pageIndex + 1} - {pageOptions.length}
          </Text>
          <Button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            size="sm"
            color="white"
            bg="transparent"
            ml={4}
          >
            <Icon
              color="table.primary"
              fontSize="18"
              _groupHover={{
                color: "primary",
              }}
              as={AiOutlineDoubleRight}
            />
          </Button>
        </Center>
        <NumberInput
          ml={5}
          onChange={(value) => {
            const pageNumber = value ? Number(value) - 1 : 0;
            gotoPage(pageNumber);
          }}
          w={40}
          defaultValue={pageIndex + 1}
          min={1}
          max={pageOptions.length}
        >
          <NumberInputField bg="white" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select
          bg="white"
          ml={5}
          width={130}
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((size) => (
            <option key={size} value={size}>
              Mostrar {size}
            </option>
          ))}
        </Select>
      </Center>
      </Box>
    </>
  );
}

export default TableWithOutFilterComponent;
