import {
  Button,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Input
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../../components/Container/Basic";
import { ContainerSearch } from "../../../../styles/components/contratos-atas/styles";
import PaginationComponent from "../../../../components/PaginationComponent";
import CsvDownload from "react-json-to-csv";
import colors from "../../../../styles/colors";

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

export const contentContractsAndAtas = {
  titlePage: "Despesas",
  description:
    "Para que a cidade possa continuar se desenvolvendo e os serviços possam permanecer funcionando e melhorando, a Prefeitura precisa realizar despesas das mais diversas, assim como investimentos. Aqui você pode conferir as informações das despesas públicas gerais empenhadas, liquidadas e pagas, entendendo os valores direcionados para cada programa. ",
};

function Screen({
  handler: { data, loading, handleByYear, year },
}: PropsInput) {
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const ITEMS_PER_PAGE = 30;

  const despesaFiltradas = data
    .filter((item) => Number(item.exercicio_empenho) === year)
    .filter((item) =>
      item.nr_empenho?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descr_funcional?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.acao?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descr_fornecedor?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id_empenho?.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const paginatedContratos = despesaFiltradas.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(despesaFiltradas.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1); // Volta para página 1 ao mudar o ano
  }, [year]);

  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "dados_contratos.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ContainerBasic title={title} description={description}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        padding="15px"
        borderRadius="18px"
        marginBottom="15px"
      >
        <ContainerSearch>
          <Stack
            width="50%"
            flexDir="row"
            sx={{
              "@media (max-width: 900px)": {
                flexDir: "column",
              },
            }}
          >
            {/* Select para mudar o ano */}
            <Select
              value={year}
              onChange={(e) => handleByYear(Number(e.target.value))}
              placeholder="Selecione o ano"
              borderRadius="8px"
              height="40px"
              mb="10px"
              width="180px"
            >
              {[2025, 2024, 2023, 2022, 2021, 2020].map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </Select>

            <Button
              width="180px"
              fontSize="20px"
              textColor="white"
              bgColor={colors.primaryDefault40p}
              _hover={{ bgColor: colors.primaryDefault80p }}
              height="40px"
              borderRadius="8px"
              mr="15px"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
            >
              <CsvDownload
                filename={"dados_despesas.csv"}
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
        </ContainerSearch>

        <Input
          type="text"
          placeholder="Pesquisar contratos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          borderRadius="8px"
          height="40px"
          width="40%"
          mb="10px"
        />

        {paginatedContratos.map((row) => (
          <Box
            key={row.id}
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
              border: `2px solid ${colors.primaryDefault40p}`,
            }}
            onClick={() => {
              sessionStorage.setItem("selectedDespesa", JSON.stringify(row));
              window.open(`detalhes?${row.nr_empenho}-${row.exercicio_empenho}`, "_blank");
            }}
          >
            <Text
              fontWeight="bold"
              fontSize="lg"
              color={colors.primaryDefault40p}
              borderBottom={`2px solid ${colors.primaryDefault40p}`}
              pb="5px"
              mb="8px"
            >
              Empenho: {row.nr_empenho} / {row.exercicio_empenho}
            </Text>
            <Text><strong>Fornecedor:</strong> {row.descr_fornecedor}</Text>
            <Text><strong>Descrição:</strong> {row.descr_funcional}</Text>
            <Text><strong>Valor empenho:</strong> {row.vlr_empenho}</Text>
            <Text><strong>Unidade Orçamentária:</strong> {row.unid_orcam}</Text>
            <Text><strong>Vínculo:</strong> {row.vinculo}</Text>
          </Box>
        ))}

        <PaginationComponent
          pages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;

