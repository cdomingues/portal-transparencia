import {
  Button,
  Text,
  Box,
  useColorModeValue,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CsvDownload from "react-json-to-csv";
import ContainerBasic from "../../../components/Container/Basic";
import PaginationComponent from "../../../components/PaginationComponent";
import terceirizados from "./terceirizados.json";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import colors from "../../../styles/colors";

export interface Cargos {
  descricao: string;
  horas_semanais: string;
}

const ITEMS_PER_PAGE = 50;

export const contentTransportationTickets = {
  titlePage: "Terceirizados",
  description:
    "Listagem dos funcionários terceirizados da Prefeitura Municipal de Mogi das Cruzes.",
};

function Screen() {
  const title = contentTransportationTickets?.titlePage;
  const description = contentTransportationTickets?.description;

  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<keyof typeof terceirizados[0] | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortedData, setSortedData] = useState([...terceirizados]);
  const [searchTerm, setSearchTerm] = useState("");

  const accessibility = useFontSizeAccessibilityContext();

  useEffect(() => {
    if (!sortColumn) {
      setSortedData([...terceirizados]);
      return;
    }

    const sorted = [...terceirizados].sort((a, b) => {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortDirection === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      if (typeof valueA === "number" && typeof valueB === "number") {
        return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
      }

      return 0;
    });

    setSortedData(sorted);
  }, [sortColumn, sortDirection]);

  const handleSort = (column: keyof typeof terceirizados[0]) => {
    if (sortColumn === column) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredData = sortedData.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      (item.funcionario ?? "").toLowerCase().includes(term) ||
      (item.funcao_atividade ?? "").toLowerCase().includes(term) ||
      (item.empresa ?? "").toLowerCase().includes(term)
    );
  });

  const paginated = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const exportToJSON = (terceirizados: any) => {
    const blob = new Blob([JSON.stringify(terceirizados, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "dados_cargas_horaria.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <Button
          width="180px"
          fontSize="20px"
          textColor="white"
          bgColor={colors.transparenciaBlack}
          _hover={{ bgColor: colors.primaryDefault80p }}
          height="40px"
          borderRadius="8px"
          mr="15px"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        >
          <CsvDownload
            filename={"dados_terceirizados.csv"}
            data={terceirizados}
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
          mr="15px"
          onClick={() => exportToJSON(terceirizados)}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        >
          JSON
        </Button>

        <Text fontSize={accessibility?.fonts?.regular} my="10px" ml="15px">
          Última atualização: <strong>10/05/2025</strong>
        </Text>

        {/* Campo de busca */}
        <Box mb="10px">
          <input
            type="text"
            placeholder="Buscar por funcionário, função e empresa..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            style={{
              width: "30%",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px"
            }}
          />
        </Box>

        <Table mt="12px">
          <Thead>
            <Tr bg={colors.transparenciaBlack} color="white" p={4} fontWeight="bold">
              <Th color="white" onClick={() => handleSort("funcionario")} cursor="pointer">
                Funcionário {sortColumn === "funcionario" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
              </Th>
              <Th color="white" onClick={() => handleSort("funcao_atividade")} cursor="pointer">
                Função / Atividade {sortColumn === "funcao_atividade" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
              </Th>
              <Th color="white" onClick={() => handleSort("empresa")} cursor="pointer">
                Empresa {sortColumn === "empresa" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
              </Th>
              <Th color="white" onClick={() => handleSort("cnpj")} cursor="pointer">
                CNPJ {sortColumn === "cnpj" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
              </Th>
              <Th color="white" onClick={() => handleSort("contrato")} cursor="pointer">
                Contrato {sortColumn === "contrato" ? (sortDirection === "asc" ? "▲" : "▼") : ""}
              </Th>
            </Tr>
          </Thead>
          <Tbody fontSize="12px">
            {paginated.map((row, index) => (
              <Tr
                key={index}
                bg={index % 2 === 0 ? useColorModeValue("white", "black") : useColorModeValue("#f7f7f7", "grey.100")}
                _hover={{ bg: "#d1d1d1", cursor: "pointer", color: useColorModeValue("black", "white") }}
                color={useColorModeValue("black", "white")}
              >
                <Td>{row.funcionario}</Td>
                <Td>{row.funcao_atividade}</Td>
                <Td>{row.empresa}</Td>
                <Td>{row.cnpj}</Td>
                <Td
                  onClick={() =>
                    window.open(`https://dadosabertos.mogidascruzes.sp.gov.br/contratos-atas/detalhes?C${row?.contrato}`, '_blank')
                  }
                >
                  {row.contrato}
                </Td>
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
