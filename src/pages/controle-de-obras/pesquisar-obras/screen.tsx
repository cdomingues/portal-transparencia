import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import {
  Box,  Text,  useColorModeValue, Button,  Flex,  Input,  Stack,  Select,  Link,} from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import colors from "../../../styles/colors";
import CsvDownload from "react-json-to-csv";
import PaginationComponent from "../../../components/PaginationComponent";
import moneyFormatter from "../../../utils/moneyFormatter";
import ItensEmpenho from "../../gestao-orcamentaria/despesas/adiantamentos/modalContracts/components/itens_empenho";
import usePagina from '../../../hooks/usePagina';

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/listaobras/";
const ITEMS_PER_PAGE = 50;

const exportToJSON = (data: any) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.setAttribute("href", URL.createObjectURL(blob));
  link.setAttribute("download", "obras.json");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function Screen() {
  const accessibility = useFontSizeAccessibilityContext();
  
  const [dados, setDados] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
 

  const [filtroBairro, setFiltroBairro] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");
  const date = new Date();
  const dia = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const ano = date.getFullYear();
  const dataFormatada = `${dia}/${mes}/${ano}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        const filtrados = result.filter(
          (item: any) => item.tipo === "Tipo:OBRA" && item.status !== "07 - OBRA RESCINDIDA"
        );
        setDados(filtrados);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  const bairrosUnicos = [...new Set(dados.map((item) => item.bairro).filter(Boolean))].sort();
  const tiposUnicos = [...new Set(dados.map((item) => item.categoria).filter(Boolean))].sort();
  const statusUnicos = [...new Set(dados.map((item) => item.status).filter(Boolean))].sort();

  const obrasFiltradas = dados.filter((item) => {
    const busca = searchTerm
      ? item?.id_contrato?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item?.bairro?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item?.nome_da_obra?.toLowerCase().includes(searchTerm.toLowerCase()) 
      : true;

    const bairroValido = filtroBairro ? item.bairro === filtroBairro : true;
    const tipoValido = filtroTipo ? item.categoria === filtroTipo : true;
    const statusValido = filtroStatus ? item.status === filtroStatus : true;

    return busca && bairroValido && tipoValido && statusValido;
  });

  const obrasPaginadas = obrasFiltradas.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const calcularValorTotal = (obra: any) => {
    return obra.valorexecutado_set?.reduce(
      (total: number, atual: any) => total + parseFloat(atual.valor || 0),
      0
    ) || 0;
  };

 

  // To use this function, call calculatePercentualExecutado(obra) where 'obra' is the relevant item.

  const {paginaData, loadings, error} = usePagina("69");
    
      if (loadings) {
            return <Text>Carregando conteúdo...</Text>;
          }
        
         if (error) {
          return <Text>Erro ao carregar página: {(error as Error).message}</Text>;
        }
        
          if (!paginaData) {
            return <Text>Página não encontrada</Text>;
          }
        
          const { titulo: titlePage, descricao: description, conteudo } = paginaData;

  return (
    <ContainerBasic title={titlePage} description={description}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        padding="15px"
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Text mb={4}>
          Abaixo estão listadas as obras públicas da cidade com informações sobre categoria, tipo, status e valores executados.
        </Text>

        <Flex direction="column" gap={4} mb={4}>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Select
              placeholder="Filtrar por bairro"
              value={filtroBairro}
              onChange={(e) => setFiltroBairro(e.target.value)}
              borderRadius="8px"
              width="200px"
            >
              {bairrosUnicos.map((bairro, idx) => (
                <option key={idx} value={bairro}>
                  {bairro}
                </option>
              ))}
            </Select>

            <Select
              placeholder="Filtrar por categoria"
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value)}
              borderRadius="8px"
              width="200px"
            >
              {tiposUnicos.map((tipo, idx) => (
                <option key={idx} value={tipo} >
                  {tipo.replace("Categoria:", "")}
                </option>
              ))}
            </Select>

            <Select
              placeholder="Filtrar por status"
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value)}
              borderRadius="8px"
              width="200px"
            >
              {statusUnicos.map((status, idx) => (
                <option key={idx} value={status}>
                  {status.split('-')[1]}
                </option>
              ))}
            </Select>

            <Button
              onClick={() => {
                setFiltroBairro("");
                setFiltroTipo("");
                setFiltroStatus("");
                setSearchTerm("");
              }}
              borderRadius="8px"
              bgColor="gray.500"
              color="white"
              _hover={{ bgColor: "gray.600" }}
            >
              Limpar Filtros
            </Button>
          </Stack>

          <Flex justify="space-between" align="center">
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                width="180px"
                fontSize="16px"
                color="white"
                bgColor={colors.transparenciaBlack}
                _hover={{ bgColor: colors.primaryDefault80p }}
                borderRadius="8px"
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
              >
                <CsvDownload
                  filename={"obras.csv"}
                  data={obrasFiltradas.map((obra) => ({
                    tipo: obra.tipo,
                    categoria: obra.categoria,
                    status: obra.status,
                    valor_total_executado: calcularValorTotal(obra).toFixed(2),
                  }))}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "none",
                    border: "none",
                    color: "white",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  CSV
                </CsvDownload>
              </Button>

              <Button
                width="180px"
                fontSize="16px"
                color="white"
                bgColor={colors.transparenciaBlack}
                _hover={{ bgColor: colors.primaryDefault80p }}
                borderRadius="8px"
                onClick={() => exportToJSON(obrasFiltradas)}
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
              >
                JSON
              </Button>
                <Input
              placeholder="Pesquisar por obras ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              borderRadius="8px"
              width="300px"
              height="40px"
            />
            </Stack>

          
          </Flex>
          {conteudo && (
                 <Box
                   dangerouslySetInnerHTML={{ __html: conteudo }}
                   sx={{
                     p: { mb: 2, textAlign: "justify" },
                     
                   }}
                 />
               )}
        </Flex>

       
            {obrasPaginadas.map((obra, idx) => (
              <Box
                key={obra.id || idx}
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
                          onClick={() =>{
                            sessionStorage.setItem("selectedDespesa", JSON.stringify(obra));
                            window.open( `detalhes?${obra.id}`, '_blank')}}
              >
                <Text><strong>Contrato: </strong>{(obra.id_contrato).split("C")[1]}</Text>
                <Text><strong>Obra: </strong>{obra.nome_da_obra}</Text>
                <Text><strong>Bairro: </strong>{obra.bairro}</Text>
                <Text><strong>Categoria:</strong>{obra.categoria?.replace("Categoria:", "")}</Text>
                <Text><strong>Status: </strong>{(obra.status).split('-')[1]}</Text>
                <Text> <strong>Valor da obra: </strong>{moneyFormatter(obra.valor_total_aditamento_reajuste_contrato)}  </Text>
              </Box>
            ))}
        

        <PaginationComponent
          pages={Math.ceil(obrasFiltradas.length / ITEMS_PER_PAGE)}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
