import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { Box, Button, Input, Select, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import PaginationComponent from "../../../components/PaginationComponent";
import { objetos_licitacao } from "../../../utils/objetos_licitacao";
import { getSituacaoText } from "../../../utils/situacaoLicitacao";
import { getTipoText } from "../../../utils/tipoLicitacao";
import axios from "axios";
import CsvDownload from "react-json-to-csv";
import colors from "../../../styles/colors";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import usePagina from '../../../hooks/usePagina';

export interface Licitacoes {
  id: number;
  id_tipolicitacao: number;
  id_objeto: number;
  numero: number;
  ano: number;
  descricao: string;
  gestora: string;
  situacao: string;
  publicacaoFim: string;
  dataAbertura: string;
  complemento: string;
  bloqueada: boolean;

}

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/licitacoes/";
const ITEMS_PER_PAGE = 50;


function Screen() {
   const [licitacoes, setLicitacoes] = useState<Licitacoes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedLicitacao, setSelectedLicitacao] = useState("");
  const [selectedGestora, setSelectedGestora] = useState("");
  const [selectedSituacao, setSelectedSituacao] = useState("");

  const accessibility = useFontSizeAccessibilityContext();

  useEffect(() => {
    fetchData();
  }, [selectedYear, selectedLicitacao, selectedGestora, selectedSituacao]);

  const fetchData = async () => {
    setLicitacoes([]);
    let allLicitacoes: Licitacoes[] = [];
    let page = 1;
    let hasMore = true;


    const filters: any = {};
    if (selectedYear !== "Todos") filters.ano = selectedYear;
    if (selectedLicitacao) filters.id_tipolicitacao = selectedLicitacao;
    if (selectedGestora) filters.gestora = selectedGestora;
    if (selectedSituacao) filters.situacao = selectedSituacao;

    while (hasMore) {
      try {
        const response = await axios.get(API_URL, {
          params: {
            page,
            ...filters,
          },
        });

        const results = response.data.results;
        if (results && results.length > 0) {
          allLicitacoes = [...allLicitacoes, ...results];
          page++;
        } else {
          hasMore = false;
        }
      } catch (error) {
        console.error("Erro ao buscar dados", error);
        hasMore = false;
      }
    }

    setLicitacoes(allLicitacoes);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedYear("2025");
    setSelectedLicitacao("");
    setSelectedGestora("");
    setSelectedSituacao("");
    setSearchTerm("");
  };

  const filteredLicitacoes = licitacoes.filter((item) => {
    if(item.bloqueada === true) return false;
  if (!searchTerm) return true;

  

  const lowerSearchTerm = searchTerm.toLowerCase();

  return (
    String(item.numero).toLowerCase().includes(lowerSearchTerm) ||
    String(item.descricao).toLowerCase().includes(lowerSearchTerm) ||
    String(item.dataAbertura).toLowerCase().includes(lowerSearchTerm) ||
    String(item.publicacaoFim).toLowerCase().includes(lowerSearchTerm) ||
    String(item.complemento).toLowerCase().includes(lowerSearchTerm) 
   
  );
});
const sortedLicitacoes = [...filteredLicitacoes].sort((a, b) => a.numero - b.numero);

  const paginatedLicitacoes = sortedLicitacoes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "dados_licitacoes.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const dataMaisAtual = licitacoes.reduce((maisRecente, item) => {
    const dataItem = new Date(item.dataAbertura);
    const dataAtualMaisRecente = new Date(maisRecente.dataAbertura);
    return dataItem > dataAtualMaisRecente ? item : maisRecente;
  }, licitacoes[0]);

  const ultimaAtualizacao = dataMaisAtual ? new Date(dataMaisAtual.dataAbertura).toLocaleDateString('pt-BR') : '';

const {paginaData, loadings, error} = usePagina("25");

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
         {conteudo && (
        <Box
          dangerouslySetInnerHTML={{ __html: conteudo }}
          sx={{
            p: { mb: 2, textAlign: "justify" },
            
          }}
        />
      )} 

      <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={4}>
        <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}  width="200px"   border={`1px solid ${colors.transparenciaBlack}`}
                      _focus={{
                        borderColor: colors.transparenciaBlack, // nova cor da borda ao focar
                        boxShadow:'none',
                        //backgroundColor: colors.primaryDefault40p // cor de fundo ao focar (exemplo)
                      }}>
          <option value="Todos">Todos os anos</option>
            {[...Array(2025 - 2012 + 1)].map((_, i) => {
              const year = 2025 - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
        </Select>

        <Select
         width="200px"
          placeholder="Tipo Licitação"
          value={selectedLicitacao}
          onChange={(e) => setSelectedLicitacao(e.target.value)}
            border={`1px solid ${colors.transparenciaBlack}`}
            _focus={{
              borderColor: colors.transparenciaBlack, // nova cor da borda ao focar
              boxShadow:'none',
              //backgroundColor: colors.primaryDefault40p // cor de fundo ao focar (exemplo)
            }}
        >
          <option value="20">Audiência Pública - Saúde</option>
          <option value="7">Chamada Pública</option>
          <option value="15">Chamada Pública - Saúde</option>
          <option value="8">Chamamento Público</option>
          <option value="16">Chamamento Público - Educação</option>
          <option value="13">Chamamento Público - Esportes</option>
          <option value="12">Chamamento Público - Saúde</option>
          <option value="14">Chamamento Público - Verde e Meio Ambiente</option>
          <option value="4">Concorrência</option>
          <option value="29">Concorrência Eletrônica</option>
          <option value="21">Concurso</option>
          <option value="10">Convite</option>
          <option value="11">Credenciamento</option>
          <option value="30">Dispensa Eletrônica</option>
          <option value="11">Dispensa/Inexigibilidade</option>
          <option value="5">Leilão</option>
          <option value="17">Pregão Eletrônico</option>
          <option value="2">Pregão Presencial</option>
          <option value="9">Pré-Qualificação</option>
          <option value="27">Processo seletivo</option>
          <option value="31">Seleção simplificada</option>
          <option value="3">Tomada de Preços</option>
          </Select>

        <Select
          placeholder="Órgão"
          value={selectedGestora}
          onChange={(e) => setSelectedGestora(e.target.value)}
           width="200px"
             border={`1px solid ${colors.transparenciaBlack}`}
            _focus={{
            borderColor: colors.transparenciaBlack, // nova cor da borda ao focar
            boxShadow:'none',
            //backgroundColor: colors.primaryDefault40p // cor de fundo ao focar (exemplo)
            }}
        >
          <option value="IPREM">IPREM</option>
          <option value="PMMC">PMMC</option>
          <option value="SEMAE">SEMAE</option>
        </Select>

        <Select
          placeholder="Situação"
          value={selectedSituacao}
          onChange={(e) => setSelectedSituacao(e.target.value)}
           width="200px"
           border={`1px solid ${colors.transparenciaBlack}`}
           _focus={{
           borderColor: colors.transparenciaBlack, // nova cor da borda ao focar
           boxShadow:'none',
           //backgroundColor: colors.primaryDefault40p // cor de fundo ao focar (exemplo)
           }}
        >
         
          <option value="C">Concluida</option>
          <option value="S">Suspensa</option>
          <option value="P">Publicada</option>
          <option value="U">Republicada</option>
          <option value="E">Em andamento</option>
          <option value="R">Revogada</option>
        </Select>

        <Button
          width="180px"
          fontSize="20px"
          textColor="white"
          bgColor={colors.transparenciaBlack}
          _hover={{ bgColor: colors.primaryDefault80p }}
          height="40px"
          borderRadius="8px"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          onClick={clearFilters}
        >
          Limpar Filtros
        </Button>

      </Stack>
      <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={4}>
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
            filename={"dados_contratos.csv"}
            data={licitacoes}
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
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
          onClick={() => exportToJSON(licitacoes)}
        >
          JSON
        </Button>

       </Stack>

      <Input
        type="text"
        placeholder="Pesquisar licitação..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        borderRadius="8px"
        height="40px"
        width="100%"
        my="10px"
        border={`1px solid ${colors.transparenciaBlack}`}
        _focus={{
        borderColor: colors.transparenciaBlack, // nova cor da borda ao focar
        boxShadow:'none',
        //backgroundColor: colors.primaryDefault40p // cor de fundo ao focar (exemplo)
        }}
      />

       <Text fontSize={accessibility?.fonts?.regular} mb="10px" ml='5px'>
              Última atualização: <strong>{ultimaAtualizacao}</strong>
            </Text>

      {paginatedLicitacoes
        .sort((a, b) => a.numero - b.numero)
        .map((row) => (
          <Box
            key={row.id}
            border="2px solid transparent"
            p="12px"
            borderRadius="16px"
            mb="12px"
            bg={useColorModeValue("white", "black")}
            boxShadow="lg"
            transition="0.3s"
            onClick={() => (window.location.href = `licitacoes_detalhes?${row.id}`, '_blank')}
            _hover={{
              boxShadow: "xl",
              transform: "scale(1.01)",
              border: `2px solid ${colors.transparenciaBlack}`,
            }}
            cursor="pointer"
          >
            <Text
              fontWeight="bold"
              fontSize="lg"
              color={colors.transparenciaBlack}
              borderBottom={`2px solid ${colors.transparenciaBlack}`}
              pb="5px"
              mb="8px"
            >
              {row.numero} / {row.ano} - {row.gestora}
            </Text>
            <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
              <strong>SITUAÇÃO: </strong>
              {getSituacaoText(row.situacao)}
            </Text>
            <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
              <strong>TIPO:</strong> {getTipoText(row.id_tipolicitacao)}
            </Text>
            <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
              <strong>DESCRIÇÃO:</strong> {row.descricao}
            </Text>
            <Text fontSize="md" color={useColorModeValue("gray.700", "white")}>
              <strong>OBJETO:</strong>{" "}
              {objetos_licitacao.find((objeto) => objeto.id_objeto === row.id_objeto)?.descricao ||
                "Descrição não encontrada"}
            </Text>
          </Box>
        ))}

      <PaginationComponent
        pages={Math.ceil(filteredLicitacoes.length / ITEMS_PER_PAGE)}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </ContainerBasic>
  );
}

export default Screen;

