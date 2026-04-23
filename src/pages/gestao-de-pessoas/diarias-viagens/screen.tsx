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
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import PaginationComponent from "../../../components/PaginationComponent";
import colors from "../../../styles/colors";
import CsvDownload from "react-json-to-csv";
import moneyFormatter from "../../../utils/moneyFormatter";
import moment from "moment";
import ContainerBasic from "../../../components/Container/Basic";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { servidores } from "../../../utils/servidores"; 
import usePagina from "../../../hooks/usePagina";

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/diaria_atualizada";
const ITEMS_PER_PAGE = 50;

export interface Diarias {
  id: number;
  rgf: number;
  nome: string;
  tipo: string;
  data: string; 
  ano: number;
  mes: number;
  ufm: string;
  hora_saida: string;
  hora_chegada: string;
  tempo_total: string;
  valor_diaria: string;
  destino: string;
  justificativa: string;
}

const exportToJSON = (data: any) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "dados_diarias.json";
  link.click();
};

function Screen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState<number | "all">(2026);
  const [diarias, setDiarias] = useState<Diarias[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Diarias; direction: "asc" | "desc" } | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const acc = useFontSizeAccessibilityContext();

  useEffect(() => {
    fetchData();
  }, [selectedYear]);

  // ------------------- BUSCA TODAS AS PÁGINAS DA API -------------------
  const fetchData = async () => {
    setIsLoading(true);
    let allResults: Diarias[] = [];
    let page = 1;
    let hasMore = true;

    try {
      while (hasMore) {
        const url =
          selectedYear === "all"
            ? `${API_URL}?page=${page}`
            : `${API_URL}?ano=${selectedYear}&page=${page}`;

        const response = await axios.get(url);

        if (response.data.results?.length > 0) {
          allResults = [...allResults, ...response.data.results];
        }

        hasMore = response.data.next !== null;
        page++;

        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }

    setDiarias(allResults);
    setCurrentPage(1);
    setIsLoading(false);
  };

  // ------------------- FILTRO -------------------
  const filteredData = diarias.filter((item) => {
    if (!searchTerm) return true;
    return (
      item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.rgf).includes(searchTerm)
    );
  });

  // ------------------- ORDENAR GLOBALMENTE -------------------
  const sortedData = [...filteredData].sort((a, b) => {
    const anoA = Number(a.ano), anoB = Number(b.ano);
    const mesA = Number(a.mes), mesB = Number(b.mes);

    // Ordenação padrão
    if (!sortConfig) {
      if (anoB !== anoA) return anoB - anoA; 
      return mesB - mesA;
    }

    const { key, direction } = sortConfig;
    const aValue = a[key];
    const bValue = b[key];

    // Comparação numérica
    const na = Number(aValue);
    const nb = Number(bValue);

    if (!isNaN(na) && !isNaN(nb)) {
      if (na < nb) return direction === "asc" ? -1 : 1;
      if (na > nb) return direction === "asc" ? 1 : -1;
      return 0;
    }

    // Comparação string
    const result = String(aValue).localeCompare(String(bValue), "pt-BR", {
      sensitivity: "base",
    });

    return direction === "asc" ? result : -result;
  });

  // Enriquecer com servidores ANTES da paginação
  const mappedData = sortedData.map((row) => {
    const info = servidores.find((s) => String(s.matricula) === String(row.rgf));
    return {
      ...row,
      cargo: info?.cargo || "",
      secretaria: info?.secretaria || "",
      lotacao: info?.localtrabalho || "",
    };
  });

  // Paginação
  const paginatedData = mappedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(mappedData.length / ITEMS_PER_PAGE);

  // ------------------- CLICK NO HEADER -------------------
  const requestSort = (key: keyof Diarias) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Formatador de horas
  const formatHoras = (tempo: string | number) => {
    const num = typeof tempo === "string" ? parseFloat(tempo) : tempo;
    const h = Math.floor(num);
    const m = Math.round((num - h) * 60);
    return `${h}h ${m}min`;
  };

  // Conteúdo da página "Diárias"
  const { paginaData, loadings, error } = usePagina("39");

  if (loadings) return <Text>Carregando conteúdo...</Text>;
  if (error) return <Text>Erro ao carregar página</Text>;
  if (!paginaData) return <Text>Página não encontrada</Text>;

  const { titulo: titlePage, descricao: description } = paginaData;

  return (
    <ContainerBasic title={titlePage} description={description}>
      <Box>
        {/* ------------------- BARRA DE FILTROS ------------------- */}
        <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={4}>
          <InputGroup maxWidth="400px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Buscar por nome ou RGF"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          <Select
            border={`1px solid ${colors.transparenciaCinza}`}
            value={selectedYear}
            onChange={(e) =>
              setSelectedYear(e.target.value === "all" ? "all" : Number(e.target.value))
            }
            maxWidth="200px"
          >
            <option value="all">Todos os anos</option>
             <option value={2026}>2026</option>
            <option value={2025}>2025</option>
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
          </Select>

          <Button
            width="180px"
            bgColor={colors.transparenciaBlack}
            color="white"
            _hover={{ bgColor: colors.primaryDefault80p }}
          >
            <CsvDownload
              filename={"dados_diarias.csv"}
              data={diarias}
              style={{ width: "100%", height: "100%", background: "none", border: "none" }}
            >
              CSV
            </CsvDownload>
          </Button>

          <Button
            width="180px"
            bgColor={colors.transparenciaBlack}
            color="white"
            _hover={{ bgColor: colors.primaryDefault80p }}
            onClick={() => exportToJSON(diarias)}
          >
            JSON
          </Button>
        </Stack>

        <Text fontSize={acc?.fonts?.regular} mb="10px" ml="15px">
          Última atualização: <strong>10/02/2026</strong>
        </Text>

        {/* ------------------- TABELA ------------------- */}
       {isLoading ? (
  <Box textAlign="center" py={10}>
    Carregando dados...
  </Box>
) : (
  <>
    <Table mt="12px">
      <Thead>
        <Tr bg={colors.transparenciaBlack} color="white">
          {[
            { key: "rgf", label: "RGF" },
            { key: "nome", label: "Nome" },
            { key: "tipo", label: "Tipo" },
            { key: "data", label: "Data" },
            { key: "ano", label: "Ano" },
            { key: "mes", label: "Mês" },
            { key: "hora_saida", label: "Hora da saída" },
            { key: "hora_chegada", label: "Hora da chegada" },
            { key: "tempo_total", label: "Tempo total" },
            { key: "valor_diaria", label: "Valor diária" },
            { key: "destino", label: "Destino" },
            { key: "justificativa", label: "Justificativa" },
            { key: "cargo", label: "Cargo" },
            { key: "secretaria", label: "Secretaria" },
            { key: "lotacao", label: "Lotação" },
          ].map(({ key, label }) => (
            <Th
              key={key}
              color="white"
              cursor="pointer"
              onClick={() => requestSort(key as keyof Diarias)}
            >
              {label}{" "}
              {sortConfig?.key === key
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : ""}
            </Th>
          ))}
        </Tr>
      </Thead>

      <Tbody fontSize="12px">
        {paginatedData.length === 0 ? (
          <Tr>
            <Td colSpan={15} textAlign="center" py={8}>
             <Box
                 width="100%"
                     textAlign="center"
                     padding="40px"
                     bg={useColorModeValue("gray.50", "gray.700")}
                     borderRadius="12px"
                     border="1px solid"
                     borderColor="gray.300"
                     mb='15px'
               >
                 <Text fontSize="lg" fontWeight="bold">
                       Dados não encontrados para o período selecionado
                     </Text>
               </Box>
            </Td>
          </Tr>
        ) : (
          paginatedData.map((row) => (
            <Tr
              key={row.id}
              bg={useColorModeValue("white", "#f7f7f7")}
              _hover={{
                bg: "#d1d1d1",
                cursor: "pointer",
                color: useColorModeValue("black", "white"),
              }}
            >
              <Td>{row.rgf}</Td>
              <Td>{row.nome}</Td>
              <Td>{row.tipo}</Td>
              <Td>{moment(row.data).format("DD/MM/YYYY")}</Td>
              <Td>{row.ano}</Td>
              <Td>{row.mes}</Td>
              <Td>{row.hora_saida}</Td>
              <Td>{row.hora_chegada}</Td>
              <Td>{formatHoras(row.tempo_total)}</Td>
              <Td>{moneyFormatter(Number(row.valor_diaria))}</Td>
              <Td>{row.destino}</Td>
              <Td>{row.justificativa}</Td>
              <Td>{row.cargo}</Td>
              <Td>{row.secretaria}</Td>
              <Td>{row.lotacao}</Td>
            </Tr>
          ))
        )}
      </Tbody>
    </Table>

    {paginatedData.length > 0 && (
      <PaginationComponent
        pages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    )}
  </>
)}

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
