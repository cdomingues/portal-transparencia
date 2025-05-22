import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Button, Divider, Link, ListItem, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { FaDownload } from "react-icons/fa";

import DadosAbertos from "../../../components/DadosAbertos";
import TableComponent, { TableColumns } from "../../../components/Table";
import colors from "../../../styles/colors";
import CsvDownload from "react-json-to-csv";
import PaginationComponent from "../../../components/PaginationComponent";
import moment from "moment";



type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};

export const contentMapSite = {
  titlePage: "Relação dos gestores de contratos vigentes ",
  description:
    "   ",
};

function Screen({
  handler: { columns, data, loading },
}: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();
  const ITEMS_PER_PAGE = 50;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1); // Volta para página 1 ao buscar
  };

  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredData = data.filter(
    (item) =>
      item?.n_contrato?.toLowerCase().includes(searchTerm) ||
      item?.gestor?.toLowerCase().includes(searchTerm)
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    const aValue = a[key]?.toString().toLowerCase() ?? "";
    const bValue = b[key]?.toString().toLowerCase() ?? "";

    if (aValue < bValue) return direction === "asc" ? -1 : 1;
    if (aValue > bValue) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "dados_gestores_contratos.json");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ContainerBasic title={title} description={description}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p="15px"
        rounded="md"
        maxWidth="100%"
        borderRadius="18px"
        mb="15px"
      >
        <Stack direction={{ base: "column", md: "row" }} spacing={4} alignItems="center" mb={4}>
          <Button
            width="180px"
            fontSize="20px"
            textColor="white"
            bgColor={colors.transparenciaBlack}
            _hover={{ bgColor: colors.primaryDefault80p }}
            height="40px"
            borderRadius="8px"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          >
            <CsvDownload
              filename={"dados_gestores_contratos.csv"}
              data={data}
              style={{
                width: "100%",
                height: "100%",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "20px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              CSV
            </CsvDownload>
          </Button>

          <Button
            width="180px"
            fontSize="20px"
            textColor="white"
            bgColor={colors.transparenciaBlack}
            _hover={{ bgColor: colors.primaryDefault80p }}
            height="40px"
            borderRadius="8px"
            onClick={() => exportToJSON(data)}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          >
            JSON
          </Button>

          <input
            type="text"
            placeholder="Buscar por contrato ou gestor..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              padding: "8px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "100%",
              maxWidth: "300px",
            }}
          />
        </Stack>
<Text fontSize={accessibility?.fonts?.regular} mb="10px">
                Última atualização: <strong>01/05/2025</strong>
              </Text>
        <Table my="20px">
          <Thead>
            <Tr bg={colors.transparenciaBlack} color="white">
              {["secretaria", "n_contrato", "contratada", "objeto", "data_inicio", "data_fim", "status", "gestor", "cargo"].map((col) => (
                <Th
                  key={col}
                  color="white"
                  onClick={() => requestSort(col)}
                  cursor="pointer"
                  _hover={{ textDecoration: "underline" }}
                >
                  {col.replace("_", " ").toUpperCase()}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody fontSize="12px">
            {paginatedData.map((row, index) => (
              <Tr
                key={index}
                bg={index % 2 === 0 ? useColorModeValue("white", "black") : useColorModeValue("#f7f7f7", "gray.700")}
                _hover={{ bg: "#d1d1d1", color: useColorModeValue("black", "white") }}
              >
                <Td>{row.secretaria}</Td>
                <Td cursor="pointer" onClick={() => window.open(`https://dadosabertos.mogidascruzes.sp.gov.br/contratos-atas/detalhes?${row?.n_contrato}`, '_blank')}>{row.n_contrato}</Td>
                <Td>{row.contratada}</Td>
                <Td>{row.objeto}</Td>
                <Td>{row.data_inicio}</Td>
                <Td>{row.data_fim}</Td>
                <Td>{moment(row.data_fim, "DD/MM/YYYY").isAfter(moment(), "day") ? "Vigente" : "Encerrado"}</Td>
                <Td>{row.gestor}</Td>
                <Td>{row.cargo}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <PaginationComponent
          pages={Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Box>
    </ContainerBasic>
  );
}




export default Screen;
