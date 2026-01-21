import {
  Button,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ContainerBasic from "../../../../components/Container/Basic";
import CsvDownload from "react-json-to-csv";
import PaginationComponent from "../../../../components/PaginationComponent";
import colors from "../../../../styles/colors";
import moment from "moment";
import usePagina from "../../../../hooks/usePagina";

type PropsInput = {
  handler: {
    columns: any;
    data: Array<any>;
    loading: boolean;
    year: number;
    years: Number[];
    setYear: any;
    handleByYear: any;
    data2: Array<any>;
    setData2: any;
    arquivosColumns: any;
  };
};

type PublicidadeItem = {
  ano: number;
  competencia: string;
  campanha: string;
  veiculo_divulgacao: string;
  tipo_servico: string;
  agencia_contratada: string;
  valor_total_veiculacao: number;
};

function Screen({
  handler: { columns, data = [], loading, handleByYear, setYear, year, data2, setData2, arquivosColumns },
}: PropsInput) {
  // --- Estados despesas (primeira tabela)
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2026);

  // --- Estados publicidade (segunda tabela)
  const [gastos, setGastos] = useState<PublicidadeItem[]>([]);
  const [currentPagePublicidade, setCurrentPagePublicidade] = useState(1);
  const [searchTermPublicidade, setSearchTermPublicidade] = useState("");
  const [selectedYearPublicidade, setSelectedYearPublicidade] = useState<number | undefined>();
  const [veiculosPorEmpenho, setVeiculosPorEmpenho] = useState<{ [key: string]: any }>({});
  const { paginaData, loadings, error } = usePagina("4");

  const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/gastos_publicidade";
  const ITEMS_PER_PAGE = 50;

  // formatação monetária
  const moneyFormatter = useCallback((value: number) => {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
  }, []);

  // buscar gastos publicidade (único fetch)
  useEffect(() => {
    let mounted = true;
    const fetchGastosPublicidade = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Erro ao buscar dados de gastos com publicidade");
        const json = await response.json();
        if (!mounted) return;
        // se a API retornar um objeto com results, trate adequadamente
        const payload = Array.isArray(json) ? json : json.results ?? [];
        setGastos(payload);
      } catch (err) {
        console.error("Erro ao buscar dados de gastos com publicidade:", err);
      }
    };
    fetchGastosPublicidade();
    return () => {
      mounted = false;
    };
  }, []);

  // fetch de arquivo_publicidade por empenho
  const fetchArquivoPublicidade = useCallback(async (nr_empenho: string | number, exercicio_empenho: number) => {
    const chave = `${nr_empenho}/${exercicio_empenho}`;
    // se já existe, não refaz
    if (veiculosPorEmpenho[chave]) return;

    try {
      const response = await fetch(
        `https://dadosadm.mogidascruzes.sp.gov.br/api/arquivo_publicidade?nr_empenho=${nr_empenho}&exercicio_empenho=${exercicio_empenho}`
      );
      if (!response.ok) throw new Error("Erro ao buscar arquivo_publicidade");
      const jsonData = await response.json();
      setVeiculosPorEmpenho((prev) => ({ ...prev, [chave]: jsonData }));
    } catch (err) {
      console.error("Erro ao buscar arquivo_publicidade:", err);
      setVeiculosPorEmpenho((prev) => ({ ...prev, [chave]: "Erro ao carregar" }));
    }
  }, [veiculosPorEmpenho]);

  // util: extrair veículos únicos da resposta da API de arquivo_publicidade
  const extractUniqueVehicles = useCallback((resp: any) => {
    if (!resp) return [];
    // algumas respostas podem ser array direto ou objeto com results
    const results = Array.isArray(resp) ? resp : resp.results ?? [];
    if (!Array.isArray(results)) return [];
    const allVehicles = results
      .map((r: any) => r.veiculo ?? r.veiculo_divulgacao ?? "")
      .filter((v: string) => typeof v === "string" && v.trim() !== "");
    return [...new Set(allVehicles)];
  }, []);

  // --- Filtragem / paginação / ordenação com useMemo para performance
  const despesaFiltradas = useMemo(() => {
    if (!Array.isArray(data)) return [];
    const lowerSearch = (searchTerm || "").toLowerCase();
    return data
      .filter((item) => {
        if (selectedYear) return Number(item.exercicio_empenho) === selectedYear;
        return true;
      })
      .filter((item) => {
        // protege contra campos nulos/undefined
        const nr = item.nr_empenho?.toString?.() ?? "";
        const descr_func = item.descr_funcional ?? "";
        const acao = item.acao ?? "";
        const fornecedor = item.descr_fornecedor ?? "";
        const idEmp = item.id_empenho ?? "";
        const vinc = item.vinculo ?? "";
        return (
          nr.toLowerCase().includes(lowerSearch) ||
          descr_func.toLowerCase().includes(lowerSearch) ||
          acao.toLowerCase().includes(lowerSearch) ||
          fornecedor.toLowerCase().includes(lowerSearch) ||
          idEmp.toLowerCase().includes(lowerSearch) ||
          vinc.toLowerCase().includes(lowerSearch)
        );
      });
  }, [data, selectedYear, searchTerm]);

  const paginatedContratos = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const slice = despesaFiltradas.slice(start, start + ITEMS_PER_PAGE);
    // ordena por nr_empenho numericamente (defensivo)
    return slice.sort((a, b) => Number(a.nr_empenho) - Number(b.nr_empenho));
  }, [despesaFiltradas, currentPage]);

  const totalPages = Math.max(1, Math.ceil(despesaFiltradas.length / ITEMS_PER_PAGE));

  // publicidade
  const publicidadeFiltrada = useMemo(() => {
    if (!Array.isArray(gastos)) return [];
    const lowerSearch = (searchTermPublicidade || "").toLowerCase();
    return gastos
      .filter((item) => {
        if (selectedYearPublicidade) return Number(item.ano) === selectedYearPublicidade;
        return true;
      })
      .filter((item) => {
        const camp = item.campanha ?? "";
        const veic = item.veiculo_divulgacao ?? "";
        const tipo = item.tipo_servico ?? "";
        const agen = item.agencia_contratada ?? "";
        return (
          camp.toLowerCase().includes(lowerSearch) ||
          veic.toLowerCase().includes(lowerSearch) ||
          tipo.toLowerCase().includes(lowerSearch) ||
          agen.toLowerCase().includes(lowerSearch)
        );
      });
  }, [gastos, selectedYearPublicidade, searchTermPublicidade]);

  const paginatedPublicidade = useMemo(() => {
    const start = (currentPagePublicidade - 1) * ITEMS_PER_PAGE;
    const slice = publicidadeFiltrada.slice(start, start + ITEMS_PER_PAGE);
    // ordenar por ano e competencia (defensivo)
    return slice.sort((a, b) => {
      const anoDiff = (a.ano ?? 0) - (b.ano ?? 0);
      if (anoDiff !== 0) return anoDiff;
      const timeA = a.competencia ? new Date(a.competencia).getTime() : 0;
      const timeB = b.competencia ? new Date(b.competencia).getTime() : 0;
      return timeA - timeB;
    });
  }, [publicidadeFiltrada, currentPagePublicidade]);

  const totalPagesPublicidade = Math.max(1, Math.ceil(publicidadeFiltrada.length / ITEMS_PER_PAGE));

  // reset páginas quando filtros mudam
  useEffect(() => setCurrentPage(1), [selectedYear, searchTerm]);
  useEffect(() => setCurrentPagePublicidade(1), [selectedYearPublicidade, searchTermPublicidade]);

  // --- obter última atualização de `data` de forma segura
  const ultimaAtualizacao = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return "";
    const valid = data.filter((d) => d && d.updated_at);
    if (valid.length === 0) return "";
    const maisRecente = valid.reduce((maisRecente, item) => {
      const dataItem = new Date(item.updated_at).getTime();
      const dataMais = new Date(maisRecente.updated_at).getTime();
      return dataItem > dataMais ? item : maisRecente;
    }, valid[0]);
    return maisRecente ? new Date(maisRecente.updated_at).toLocaleDateString("pt-BR") : "";
  }, [data]);

  // --- Efeito único para buscar arquivos de publicidade para os empenhos exibidos nesta página
  useEffect(() => {
    // busca para todos os empenhos listados na página atual que ainda não existam no estado
    if (!Array.isArray(paginatedContratos) || paginatedContratos.length === 0) return;

    paginatedContratos.forEach((row) => {
      const nr = row.nr_empenho ?? row.numero ?? row.id_empenho ?? "";
      const exercicio = Number(row.exercicio_empenho ?? row.exercicio ?? 0);
      const chave = `${nr}/${exercicio}`;
      if (!veiculosPorEmpenho[chave]) {
        // chama fetch (não await para permitir paralelismo)
        fetchArquivoPublicidade(nr, exercicio);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginatedContratos]); // depende de paginatedContratos; fetchArquivoPublicidade depende de veiculosPorEmpenho mas evitamos loop incluindo apenas paginatedContratos

  // --- helpers export
  const exportToJSON = (payload: any, filename: string) => {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // anos disponíveis
  const years = useMemo(() => {
    if (!Array.isArray(data)) return [];
    const uniq = Array.from(new Set(data.map((d) => Number(d.exercicio_empenho ?? d.exercicio ?? 0))).values()).filter(Boolean);
    return uniq.sort((a, b) => b - a);
  }, [data]);

  const yearsPublicidade = useMemo(() => {
    if (!Array.isArray(gastos)) return [];
    const uniq = Array.from(new Set(gastos.map((g) => Number(g.ano ?? 0))));
    return uniq.sort((a, b) => b - a);
  }, [gastos]);

  // paginação control handlers (compat com seu PaginationComponent)
  const handlePageClick = (dataClick: { selected: number }) => {
    const newPage = Math.max(1, Math.min(dataClick.selected + 1, totalPages));
    setCurrentPage(newPage);
  };

  const handlePageClickPublicidade = (dataClick: { selected: number }) => {
    const newPage = Math.max(1, Math.min(dataClick.selected + 1, totalPagesPublicidade));
    setCurrentPagePublicidade(newPage);
  };

  // proteção para paginaData
  if (loadings) return <Text>Carregando conteúdo...</Text>;
  if (error) return <Text>Erro ao carregar página: {(error as Error).message}</Text>;
  if (!paginaData) return <Text>Página não encontrada</Text>;

  const { titulo: titlePage, descricao: description } = paginaData;

  return (
    <ContainerBasic title={titlePage} description={description}>
      {/* Primeira seção: Despesas */}
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
        <Text fontSize="xl" fontWeight="bold" mb="15px" color={colors.transparenciaBlack}>
          Despesas com Publicidade
        </Text>

        <Stack direction={{ base: "column", md: "row" }} spacing={4} mb="10px">
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value) || undefined)}
            placeholder="Todos os anos"
            borderRadius="8px"
            height="40px"
            width="180px"
          >
            
          {[...Array(2026 - 2009+ 1)].map((_, i) => (
    <option key={i} value={2026 - i}>
      {2026 - i}
    </option>
  ))}
          </Select>

          <Button
            width="180px"
            border="0"
            cursor="pointer"
            fontSize="16px"
            color="white"
            bgColor={colors.transparenciaBlack}
            _hover={{ bgColor: colors.primaryDefault80p }}
            height="40px"
            borderRadius="8px"
          >
            <CsvDownload filename={"dados_despesas.csv"} data={data} style={{ background: "none", border: "none", color: "white" }}>
              CSV
            </CsvDownload>
          </Button>

          <Button
            width="180px"
            border="0"
            cursor="pointer"
            fontSize="16px"
            color="white"
            bgColor={colors.transparenciaBlack}
            _hover={{ bgColor: colors.primaryDefault80p }}
            height="40px"
            borderRadius="8px"
            onClick={() => exportToJSON(data, "dados_despesas.json")}
          >
            JSON
          </Button>
        </Stack>

        <Input
          type="text"
          placeholder="Pesquisar ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          borderRadius="8px"
          height="40px"
          pr="40px"
          width={{ base: "100%", md: "40%" }}
          mb="10px"
        />

        <Text fontSize="md" mb="10px">
          Última atualização: <strong>{ultimaAtualizacao}</strong>
        </Text>

       {(!paginatedContratos || paginatedContratos.length === 0) ? (
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
) : (
  paginatedContratos.map((row: any) => {
    const nr = row.nr_empenho ?? row.numero ?? "";
    const exercicio = Number(row.exercicio_empenho ?? row.exercicio ?? 0);
    const chave = `${nr}/${exercicio}`;
    const veiculosData = veiculosPorEmpenho[chave];
    let veiculosDisplay = "Carregando...";

    if (veiculosData && typeof veiculosData === "object") {
      const veicUnicos = extractUniqueVehicles(veiculosData);
      veiculosDisplay = veicUnicos.length > 0 ? veicUnicos.join(", ") : "Não informado";
    } else if (typeof veiculosData === "string") {
      veiculosDisplay = veiculosData;
    }

    const keyForRow = row.id ?? row.id_empenho ?? chave;

    return (
      <Box
        key={keyForRow}
        border="2px solid transparent"
        p="12px"
        borderRadius="16px"
        mb="12px"
        bg={useColorModeValue("white", "black")}
        boxShadow="lg"
        transition="0.3s"
        cursor="pointer"
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.01)",
          border: `2px solid ${colors.transparenciaBlack}`,
        }}
        onClick={() => {
          try {
            sessionStorage.setItem("selectedDespesa", JSON.stringify(row));
          } catch (e) {}
          if (row.id_empenho) {
            const parts = row.id_empenho.split("/");
            window.open(
              `detalhes2?Exercicio_Empenho=${parts[1]}&nr_empenho=${parts[0]}`,
              "_blank"
            );
          }
        }}
      >
        <Text
          fontWeight="bold"
          fontSize="lg"
          color={colors.transparenciaBlack}
          borderBottom={`2px solid ${colors.transparenciaBlack}`}
          pb="5px"
          mb="8px"
        >
          Empenho: {nr} / {exercicio}
        </Text>

        <Text><strong>Fornecedor:</strong> {row.descr_fornecedor ?? "—"}</Text>
        <Text><strong>Descrição:</strong> {row.descr_funcional ?? "—"}</Text>
        <Text><strong>Valor empenho:</strong> {row.vlr_empenho ?? "—"}</Text>
        <Text><strong>Unidade Orçamentária:</strong> {row.unid_orcam ?? "—"}</Text>
        <Text><strong>Vínculo:</strong> {row.vinculo ?? "—"}</Text>
        <Text><strong>Veículo(s):</strong> {veiculosDisplay}</Text>
      </Box>
    );
  })
)}

        <PaginationComponent pages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </Box>

      {/* Segunda seção: Gastos com Publicidade */}
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
        <Text fontSize="xl" fontWeight="bold" mb="15px" color={colors.transparenciaBlack}>
          Gastos com Publicidade
        </Text>

        <Stack direction={{ base: "column", md: "row" }} spacing={4} mb="10px">
          <Select
            value={selectedYearPublicidade}
            onChange={(e) => setSelectedYearPublicidade(Number(e.target.value) || undefined)}
            placeholder="Todos os anos"
            borderRadius="8px"
            height="40px"
            width="180px"
          >
            {yearsPublicidade.length > 0 ? (
              yearsPublicidade.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))
            ) : (
              // fallback estático
              <>
                <option key={2022} value={2022}>
                  2022
                </option>
                <option key={2023} value={2023}>
                  2023
                </option>
                <option key={2024} value={2024}>
                  2024
                </option>
              </>
            )}
          </Select>

          <Input
            type="text"
            placeholder="Pesquisar ..."
            value={searchTermPublicidade}
            onChange={(e) => setSearchTermPublicidade(e.target.value)}
            borderRadius="8px"
            height="40px"
            width="250px"
          />

          <Button
            width="180px"
            border="0"
            cursor="pointer"
            fontSize="16px"
            color="white"
            bgColor={colors.transparenciaBlack}
            _hover={{ bgColor: colors.primaryDefault80p }}
            height="40px"
            borderRadius="8px"
          >
            <CsvDownload filename={"dados_gastos_publicidade.csv"} data={gastos} style={{ background: "none", border: "none", color: "white" }}>
              CSV
            </CsvDownload>
          </Button>

          <Button
            width="180px"
            border="0"
            cursor="pointer"
            fontSize="16px"
            color="white"
            bgColor={colors.transparenciaBlack}
            _hover={{ bgColor: colors.primaryDefault80p }}
            height="40px"
            borderRadius="8px"
            onClick={() => exportToJSON(gastos, "dados_gastos_publicidade.json")}
          >
            JSON
          </Button>
        </Stack>

        <Text fontSize="md" mb="10px">
          Última atualização: <strong>02/07/2025</strong>
        </Text>

        <Table>
          <Thead>
            <Tr bg={colors.transparenciaBlack} color="white" p={4} fontWeight="bold" border={`1px solid ${colors.transparenciaBlack}`}>
              <Th color="white">Ano</Th>
              <Th color="white">Mês</Th>
              <Th color="white">Campanha</Th>
              <Th color="white">Veiculo de divulgação</Th>
              <Th color="white">Tipo de serviço</Th>
              <Th color="white">Agência contratada</Th>
              <Th color="white">Data</Th>
              <Th color="white">Valor total veiculação</Th>
            </Tr>
          </Thead>
          <Tbody fontSize="12px">
            {paginatedPublicidade
              .filter((item) => (item.ano ?? 0) < 2025)
              .map((row: any, index: number) => (
                <Tr
                  key={row.id ?? `${row.ano}-${index}`}
                  bg={index % 2 === 0 ? useColorModeValue("white", "black") : useColorModeValue("#f7f7f7", "gray.100")}
                  _hover={{ bg: "#d1d1d1", cursor: "pointer", color: useColorModeValue("black", "white") }}
                >
                  <Td>{row.ano ?? "—"}</Td>
                  <Td>{row.competencia ? new Date(row.competencia).getMonth() + 1 : "—"}</Td>
                  <Td>{row.campanha ?? "—"}</Td>
                  <Td>{row.veiculo_divulgacao ?? "—"}</Td>
                  <Td>{row.tipo_servico ?? "—"}</Td>
                  <Td>{row.agencia_contratada ?? "—"}</Td>
                  <Td>{row.competencia ? moment(row.competencia).format("DD/MM/YYYY") : "—"}</Td>
                  <Td>{moneyFormatter(Number(row.valor_total_veiculacao ?? 0))}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>

        <PaginationComponent pages={totalPagesPublicidade} setCurrentPage={setCurrentPagePublicidade} currentPage={currentPagePublicidade} />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
