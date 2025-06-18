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
import { format } from "path";
import ContainerBasic from "../../../components/Container/Basic";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import DetalheDiaria from "../../../components/DetalheDiaria";

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
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", "dados_diarias.json");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
export const receitasDesc = {
  titlePage: "Diárias de Viagens",
  description:
   <>
   O pagamento de diárias a servidores públicos em atividades externas é regulamentado pelo Decreto Municipal nº 15.136/2015. Os valores pagos são calculados com base nas Unidades Fiscais do Município vigentes. Para consultar os valores,  <Link href='https://www.mogidascruzes.sp.gov.br/pagina/secretaria-de-financas/ufm-unidade-fiscal-do-municipio'><strong>clique aqui</strong></Link></>,
};
function Screen() {

   const title = receitasDesc.titlePage;
    const description = receitasDesc.description;
    
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState<number | "all">(2025);
  const [diarias, setDiarias] = useState<Diarias[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Diarias; direction: "asc" | "desc" } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const acc = useFontSizeAccessibilityContext()

  useEffect(() => {
    fetchData();
  }, [selectedYear]);

  const fetchData = async () => {
    setIsLoading(true);
    let allResults: Diarias[] = [];
    let page = 1;
    let hasMore = true;

    try {
      while (hasMore) {
        const url = selectedYear === "all" 
          ? `${API_URL}?page=${page}`
          : `${API_URL}?ano=${selectedYear}&page=${page}`;
        
        const response = await axios.get(url);
        
        if (response.data.results && response.data.results.length > 0) {
          allResults = [...allResults, ...response.data.results];
        }

        hasMore = response.data.next !== null;
        page++;
        
        // Pequeno delay para evitar sobrecarregar a API
        await new Promise(resolve => setTimeout(resolve, 0));
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setIsLoading(false);
    }

    setDiarias(allResults);
    setCurrentPage(1);
  };

  const filteredData = diarias.filter((item) =>
    searchTerm
      ? item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(item.rgf).includes(searchTerm)
      : true
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;

    const aValue = a[key];
    const bValue = b[key];

    if (aValue < bValue) return direction === "asc" ? -1 : 1;
    if (aValue > bValue) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const requestSort = (key: keyof Diarias) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
const formatHoras = (tempo: string | number) => {
  const num = typeof tempo === "string" ? parseFloat(tempo) : tempo;
  const horas = Math.floor(num);
  const minutos = Math.round((num - horas) * 60);
  return `${horas}h ${minutos}min`;
};
  return (
   <ContainerBasic title={title} description={description}>
     <Box>
      <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={4}>
        {/* Campo de busca */}
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

        {/* Seletor de ano */}
        <Select
          border={`1px solid ${colors.transparenciaCinza}`}
          _focus={{ border: `1px solid ${colors.transparenciaCinza}` }}
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value === "all" ? "all" : Number(e.target.value))}
          maxWidth="200px"
        >
          <option value="all">Todos os anos</option>
          <option value={2025}>2025</option>
          <option value={2024}>2024</option>
          <option value={2023}>2023</option>
        </Select>

        {/* Botões de exportação */}
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
            filename={"dados_diarias.csv"}
            data={diarias}
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
          onClick={() => exportToJSON(diarias)}
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
        >
          JSON
        </Button>
      </Stack>
      <Text fontSize={acc?.fonts?.regular} mb="10px" ml='15px'>
              Última atualização: <strong>10/05/2025</strong>
            </Text>

      {isLoading ? (
        <Box textAlign="center" py={10}>Carregando dados...</Box>
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
                  { key: "detalhes", label: "Cargo" },
                  { key: "secretaria", label: "Secretaria" },
                   { key: "lotacao", label: "Lotação" },
                  
                ].map(({ key, label }) => (
                  <Th
                    key={key}
                    color="white"
                    onClick={() => requestSort(key as keyof Diarias)}
                    cursor="pointer"
                  >
                    {label} {sortConfig?.key === key ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody fontSize="12px">
              {paginatedData.map((row, index) => (
                <Tr
                  key={index} 
                     bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
                     _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("black", "white") }}
                     color={useColorModeValue("black", "white")}
                >
                  <Td>{row.rgf}</Td>
                  <Td>{row.nome}</Td>
                  <Td>{row.tipo}</Td>
                  <Td>{moment(row.data).format('DD/MM/YYYY')}</Td>
                  <Td>{row.ano}</Td>
                  <Td>{row.mes}</Td>
                  <Td>{row.hora_saida}</Td>
                  <Td>{row.hora_chegada}</Td>
                  <Td>{formatHoras(row.tempo_total)}</Td>
                  <Td>{moneyFormatter(Number(row.valor_diaria))}</Td>
                  <Td>{row.destino}</Td>
                  <Td>{row.justificativa}</Td>
                  
      <DetalheDiaria
        rgf={row.rgf}
        ano={row.ano}
        mes={row.mes}
      />
   
                </Tr>
              ))}
            </Tbody>
          </Table>
          <PaginationComponent 
            pages={totalPages} 
            setCurrentPage={setCurrentPage} 
            currentPage={currentPage} 
          />
        </>
      )}
    </Box>
   </ContainerBasic>
  );
}

export default Screen;