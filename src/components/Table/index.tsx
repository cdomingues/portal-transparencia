/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { useTable, usePagination, useFilters, useSortBy } from "react-table";
import {
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
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  AiOutlineDatabase,
  AiOutlineFileText,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import CsvDownload from "react-json-to-csv";
import ColumnFilter from "./components/ColumnFilter";
import { CsvItem, DisplayFlex, TableContainer } from "./styles";
import { BsChevronDown, BsChevronExpand, BsChevronUp } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { isMobile } from "react-device-detect";
import { validURL } from "../../utils/validUrl";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import colors from "../../styles/colors";

export type TableColumns = Array<{
  title: string;
  field: string;
  hidden?: boolean;
}>;

type Props = {
  columns: TableColumns;
  data: Array<any>;
  loading?: boolean;
  withFilter?: boolean;
  hidden?: boolean;
  openModal?: (value?: any) => void;
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

function TableComponent({
  columns,
  data,
  loading = false,
  withFilter = true,
  openModal,
}: Props) {
  const [modelType, setModelType] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const loadingBoxBgColor = useColorModeValue("white", "gray.700");
  const tdBgColor = useColorModeValue("white", "gray.800");
  const accessibility = useFontSizeAccessibilityContext();
  const newColumns = useMemo<any>(
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
    useFilters,
    useSortBy,
    usePagination
  );

  const exportExcel = (data: any[]) => {
    // Converter dados para formato adequado para o Excel
    const headers = Object.keys(data[0]); // Cabeçalhos baseados no primeiro objeto
    const rows = data.map((item) => headers.map((header) => item[header])); // Linhas de dados
  
    // Criação de uma planilha
    const worksheetData = [headers, ...rows]; // Adicionar cabeçalhos como a primeira linha
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
  
    // Adicionar planilha ao workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dados Abertos");
  
    // Salvar arquivo Excel
    XLSX.writeFile(workbook, `dados_abertos_${new Date().getTime()}.xlsx`);
  };
  


  const exportPdf = (data: any[]) => {
    const doc = new jsPDF("landscape");
  
    // Formatar os dados
    const formattedData = data.map((item) => Object.values(item));
    const headers = [Object.keys(data[0])];
  
    // Adicionar título
    doc.text("Dados Abertos", 14, 10);
  
    // Configurar tabela com quebras de linha e redimensionamento automático
    doc.autoTable({
      head: headers,
      body: formattedData,
      startY: 20,
      styles: {
        fontSize: 8, // Reduz tamanho da fonte para ajustar o conteúdo
        cellPadding: 2, // Define espaçamento interno da célula
      },
      columnStyles: {
        // Ajuste dinâmico para largura proporcional ao conteúdo
        0: { cellWidth: 'auto' }, // Coluna 0, ajuste automático
      },
      bodyStyles: {
        overflow: 'linebreak', // Permite quebra de linha no conteúdo
      },
      margin: { top: 20, left: 10, right: 10 }, // Define margens
      tableWidth: 'wrap', // Ajusta a tabela ao tamanho necessário
    });
  
    // Salvar o arquivo PDF
    doc.save(`${new Date().getTime()}.pdf`);
  };
  
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
//     <Box       
// m={0}
// bg='transparent'
// padding={"15px"}
// rounded="md"
// overflow="hidden"
// maxWidth="100%"
// borderRadius="18px"
// marginBottom="15px"
// >
    <>


      <Modal onClose={onClose} size={"xs"} isOpen={isOpen}>
        <ModalOverlay />
        {modelType !== "movie" ? (
          <ModalContent alignSelf="center">
            <ModalHeader><Text fontSize={accessibility.fonts.large}>Dicionário de dados</Text></ModalHeader>
            <ModalCloseButton />
            <ModalBody><Text fontSize={accessibility.fonts.large}>Este serviço será disponibilizado em breve.</Text></ModalBody>
            <ModalFooter>
              <Button
                _hover={{ bg: "gray.600", color: "white" }}
                onClick={onClose}
                bg="primary"
                color="white"
              >
                <Text fontSize={accessibility.fonts.large}>Fechar</Text>
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent maxH="750" maxW="100%" alignSelf="center">
            <ModalHeader><Text fontSize={accessibility.fonts.large}>Video Explicativo</Text></ModalHeader>
            <ModalCloseButton />
            <ModalBody height={450} width={600} bg="white">
              <iframe
                style={{ paddingLeft: "8%", textAlign: "center" }}
                width="600"
                height="450"
                src=" "
              ></iframe>
              
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
      <DisplayFlex color="white" direction={isMobile ? "column" : "row"}>
        <Box p="4" pl={0}>
          
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
            style={{ width: 180 }}
          >
            <Text fontSize={accessibility.fonts.medium} color={colors.white}>Dicionário de Dados</Text>
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
              style={{ width: 180 }}
            >
              <Text fontSize={accessibility.fonts.medium} color={colors.white}>Dados Abertos</Text>
            </MenuButton>
            <MenuList color="table.primary" bg="white">
              <CsvItem>
                {!loading && (
                  <CsvDownload
                    style={{ width: "100%", textAlign: "left" }}
                    filename={`${new Date().getTime()}.csv`}
                    data={data}
                  >
                    <Text fontSize={accessibility.fonts.large}>.CSV</Text>
                  </CsvDownload>
                )}
              </CsvItem>
              <MenuItem onClick={() => exportJson()}><Text fontSize={accessibility.fonts.large}>.JSON</Text></MenuItem>
              <MenuItem onClick={() => exportPdf(data)}>
        <Text fontSize={accessibility.fonts.large}>.PDF</Text>
      </MenuItem>
      <MenuItem onClick={() => exportExcel(data)}>
        <Text fontSize="large">.XLSX</Text>
      </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
      </DisplayFlex>
      <TableContainer>
        {loading ? (
          <Box
            padding="6"
            width={"100%"}
            boxShadow="lg"
            bg={loadingBoxBgColor}
            borderRadius="md"
          >
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
           <Thead backgroundColor={useColorModeValue('table.primary', "gray.800")}  >
              {headerGroups.map((group, index) => (
                <Tr {...group.getHeaderGroupProps()} key={index}>
                  {group.headers.map((column, index) => {
                    const isFirst =
                      index === 0 ? { borderTopLeftRadius: radius } : {};
                    const isLast =
                      index + 1 === group.headers.length
                        ? { borderTopRightRadius: radius }
                        : {};
                    const { onClick: columnClick, ...rest }: any =
                      column.getHeaderProps(column.getSortByToggleProps());
                    return (
                      <Th
                        style={{
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          textAlign: "left",
                          color: "white",
                          padding: "8px",
                          fontSize: accessibility?.fonts?.regular,
                          ...isFirst,
                          ...isLast,
                        }}
                        {...rest}
                        key={index}
                      >
                        <div
                          style={{
                            color: "white",
                            display: "flex",
                            flexDirection: "row",
                          }}
                          onClick={columnClick}
                        >
                          <div
                            style={{
                              color: "white",
                              display: "flex",
                              flexDirection: "row",
                              textAlign: "left",
                              fontSize: accessibility?.fonts?.small,
                              
                              
                            }}
                            
                          >
                            {column.render("Header")}
                            <div>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <Icon
                                    color="white"
                                    marginLeft={2}
                                    fontSize={accessibility?.fonts?.small}
                                    _groupHover={{
                                      color: "gray.400",
                                    }}
                                    as={BsChevronDown}
                                  />
                                ) : (
                                  <Icon
                                    color="white"
                                    fontSize={accessibility?.fonts?.small}
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
                                  fontSize={accessibility?.fonts?.small}
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
                  <Tr fontSize={accessibility?.fonts?.small} {...row.getRowProps()} key={index}>
                    {row.cells.map((cell, index) => {
                      const isLink = validURL(cell?.value);

                      return (
                        <Td
                          bgColor={tdBgColor}
                          p="15px"
                          {...cell?.getCellProps()}
                          key={index}
                          onClick={() => (openModal ? openModal(cell) : {})}
                          style={{ cursor: openModal ? "pointer" : "" }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                              textAlign: "left",
                            }}
                          >
                            {isLink ? (
                              <Link    style={{color:"red"}}href={cell?.value} isExternal>
                               Link para a página
                              </Link>
                            ) : (
                              <div style={{ textAlign: "center" }}>
                                {cell?.value?.length > 50 ? (
                                  <div style={{ width: "300px" }}>
                                    {cell.render("Cell")}
                                  </div>
                                ) : (
                                  cell.render("Cell")
                                )}
                              </div>
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
      <Center mt={5} display="flex" flexWrap="wrap">
        <Center minW="160px" mb={5} width="200px">
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
              fontSize={accessibility?.fonts?.small}
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
          mb={5}
          onChange={(value) => {
            const pageNumber = value ? Number(value) - 1 : 0;
            gotoPage(pageNumber);
          }}
          minW={40}
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
          mb={5}
          minWidth={130}
          width={130}
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((size) => (
            <option key={size} value={size}>
             <Text fontSize={accessibility?.fonts?.small}> Mostrar {size} </Text>
            </option>
          ))}
        </Select>
      </Center>
     
    </>
    // </Box>
  );
}

export default TableComponent;
