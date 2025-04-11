import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Select,
  Box,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import PaginationComponent from "../../../components/PaginationComponent";
import colors from "../../../styles/colors";
import CsvDownload from "react-json-to-csv";
import moneyFormatter from "../../../utils/moneyFormatter";

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/lista_diaria";

export interface Diarias {
  id: string;
  ano: number;
  mes: string;
  rgf: string;
  nome: string;
  total_r: string;
  destino: string;
  motivo_deslocamento: string;
  periodo_permanencia: string;
  periodo_minutos: string;
  inteira: number;
  meia: number;
}
const exportToJSON = (data: any) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", "dados_receitas.json");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
function Screen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2025);
  const [data, setData] = useState<Diarias[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Diarias; direction: "asc" | "desc" } | null>(null);

  const ITEMS_PER_PAGE = 50;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear]);

  const filteredData = data.filter((item) => !selectedYear || item.ano === selectedYear);

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    
    const aValue = a[key];
    const bValue = b[key];

    if (aValue < bValue) return direction === "asc" ? -1 : 1;
    if (aValue > bValue) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const paginated = sortedData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const requestSort = (key: keyof Diarias) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <Box>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
      <Select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))} maxWidth='200px'>
        <option value="">Todos os anos</option>
        {[...new Set(data.map((item) => item.ano))].sort((a, b) => b - a).map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </Select>
      <Button
                width="180px"
                border="0"
                cursor="pointer"
                fontSize="20px"
                textColor="white"
                bgColor={colors.primaryDefault40p}
                _hover={{ bgColor: colors.primaryDefault80p }}
                height="40px"
                borderRadius="8px"
                mr="15px"
                transition="background-color 0.3s ease"
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
              >
                <CsvDownload
                  filename={"dados_diarias.csv"}
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
                border="0"
                cursor="pointer"
                fontSize="20px"
                textColor="white"
                bgColor={colors.primaryDefault40p}
                 _hover={{ bgColor: colors.primaryDefault80p }}
                height="40px"
                borderRadius="8px"
                mr="15px"
                onClick={() => exportToJSON(data)}
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
              >
                JSON
              </Button>
              </Stack>
      <Table mt="12px">
        <Thead>
          <Tr bg={colors.primaryDefault40p} color="white">
            {[
              { key: "ano", label: "Ano" },
              { key: "mes", label: "Mês" },
              { key: "rgf", label: "RGF" },
              { key: "nome", label: "Nome" },
              { key: "total_r", label: "Valor" },
              { key: "destino", label: "Destino" },
              { key: "motivo_deslocamento", label: "Motivo" },
              { key: "periodo_permanencia", label: "Período" },
              { key: "inteira", label: "Inteira" },
              { key: "meia", label: "Meia" },
            ].map(({ key, label }) => (
              <Th key={key} color="white" onClick={() => requestSort(key as keyof Diarias)} cursor="pointer">
                {label} {sortConfig?.key === key ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody fontSize="12px">
          {paginated.map((row, index) => (
            <Tr key={row.id}
            bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
               _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("white", "black") }}
               color={useColorModeValue("black", "white")}
            >
              <Td>{row.ano}</Td>
              <Td>{row.mes}</Td>
              <Td>{row.rgf}</Td>
              <Td>{row.nome}</Td>
              <Td>{moneyFormatter(Number(row.total_r))}</Td>
              <Td>{row.destino}</Td>
              <Td>{row.motivo_deslocamento}</Td>
              <Td>
  {(() => {
    const value = row.periodo_permanencia;

    if (typeof value === "string" && value.startsWith("1900-01")) {
      return value.slice(-8); // Retorna apenas "HH:mm:ss"
    }

    return value ;
  })()}   h
</Td>
              <Td>{row.inteira}</Td>
              <Td>{row.meia}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <PaginationComponent pages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </Box>
  );
}

export default Screen;
