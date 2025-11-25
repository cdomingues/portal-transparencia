import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import loadinggif from '../../../assets/images/Loading_icon.gif'
import {
  Box,
  Button,
  Input,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Spinner,
  Image
} from "@chakra-ui/react";
import PaginationComponent from "../../../components/PaginationComponent";
import axios from "axios";
import CsvDownload from "react-json-to-csv";
import colors from "../../../styles/colors";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import moneyFormatter from "../../../utils/moneyFormatter";
import moment from "moment";
import ModalPayments from './modalPayments'
import usePagina from '../../../hooks/usePagina';

export interface FolhaPagamento {
  idparcalc: number;
  idfunselec: number;
  tipo_folha: string;
  matricula: string;
  nome: string;
  cargo: string;
  situacao: string;
  salariobase: string;
  dataadmissao: string;
  dataexoneracao: string | null;
  tipocontrato: string;
  secretaria: string;
  localtrabalho: string;
  ano: number;
  mes: number;
  bruto: string;
  desconto: string;
  liquido: string;
  idug: number;
}

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/folha_pagamento";
const ITEMS_PER_PAGE = 50;

function Screen() {
   const currentDate = new Date();
  const defaultYear =
    currentDate.getMonth() === 0
      ? currentDate.getFullYear() - 1
      : currentDate.getFullYear();
  const defaultMonth = currentDate.getMonth() === 0 ? 12 : currentDate.getMonth();

  const [folhaPagamento, setFolhaPagamento] = useState<FolhaPagamento[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const [selectedMonth, setSelectedMonth] = useState(String(defaultMonth));
  const [matricula, setMatricula] = useState("");
  const [cargo, setCargo] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDetails, setSelectedDetails] = useState<any>(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [dots,setDots] = useState("")
  const [selectedHeader, setSelectedHeader] = useState<{
  nome: string;
  matricula: string;
  cargo: string;
  secretaria: string;
  ano: number;
  mes: number;
} | null>(null);

  const accessibility = useFontSizeAccessibilityContext();

  const fetchData = async () => {
    setCarregando(true);
    setErro(null);
    setFolhaPagamento([]);

    const filters: any = {};
    if (selectedYear) filters.ano = selectedYear;
    if (selectedMonth !== "") filters.mes = selectedMonth;
    if (searchTerm) filters.nome = searchTerm;
    if (matricula) filters.matricula = matricula;
    if (cargo) filters.cargo = cargo;

    let page = 1;
    let hasMore = true;
    let allFolha: FolhaPagamento[] = [];

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
          allFolha = [...allFolha, ...results];
          page++;
        } else {
          hasMore = false;
        }
      } catch (error: any) {
        console.error("Erro ao buscar dados", error);
        setErro(error.message || "Erro desconhecido");
        hasMore = false;
      }
    }

     

    setFolhaPagamento(allFolha);
    setCurrentPage(1);
    setCarregando(false);
  };

  const clearFilters = () => {
    setSelectedYear(defaultYear);
    setSelectedMonth(String(defaultMonth));
    setSearchTerm("");
    setMatricula("");
    setCargo("");
    setFolhaPagamento([]);
    setCurrentPage(1);
  };

  const handleOpenModal = async (idfunselec: number,
  nome: string,
  matricula: string,
  cargo: string,
  secretaria: string,
  ano: number,
  mes: number) => {
  setModalLoading(true);
  setSelectedDetails(null);
  setSelectedHeader({ nome, matricula, cargo, secretaria, ano, mes });
  onOpen();
  try {
    const res = await axios.get(`https://dadosadm.mogidascruzes.sp.gov.br/api/detalhe_folha?idfunselec=${idfunselec}`);
    setSelectedDetails(res.data);
  } catch (error) {
    setSelectedDetails({ error: "Erro ao buscar detalhes." });
  } finally {
    setModalLoading(false);
  }
};

  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "dados_folha_pagamento.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const paginatedData = folhaPagamento.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(()=>{
    if(carregando){
      const interval = setInterval(()=>{
        setDots((prev)=> (prev.length < 3 ? prev + "." : ""));
      }, 500);
      return () =>clearInterval(interval);
    } else {
      setDots("");
    }
  }, [carregando])

  
  const {paginaData, loadings, error} = usePagina("35");
  
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
                                              a: {
                                                color: "blue.600",
                                                fontWeight: "bold",
                                                textDecoration: "underline",
                                              },
                                            }}
                                          />
                                        )} 

      <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={4}>
        <Select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))} width="150px">
          <option value="">Todos os anos</option>
          {[...Array(2025 - 2002 + 1)].map((_, i) => {
            const year = 2025 - i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </Select>

        <Select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} width="120px">
          <option value="">Todos os meses</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Select>

        <Input placeholder="Nome" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} width="200px" />
        <Input placeholder="Matrícula" value={matricula} onChange={(e) => setMatricula(e.target.value)} width="150px" />
        <Input placeholder="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} width="200px" />
        <Button onClick={fetchData}>Buscar</Button>
        <Button onClick={clearFilters}>Limpar</Button>
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
            filename={"dados_folha_pagamento.csv"}
            data={folhaPagamento}
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
          onClick={() => exportToJSON(folhaPagamento)}
        >
          JSON
        </Button>
      </Stack>

      <Text fontSize={accessibility?.fonts?.regular} mb="10px" ml="5px">
        Última atualização: <strong>05/10/2025</strong>
      </Text>

      {carregando ? (
        <Box display='flex' py={10} justifyContent='center'>
          <Image width={200} src={loadinggif.src} />
        </Box>
      ) : folhaPagamento.length === 0 ? (
        <Text ml="10px">Nenhum resultado encontrado. Ajuste os filtros e clique em "Buscar".</Text>
      ) : (
        <>
          <Table overflowX="auto" width="100%">
            <Thead>
              <Tr bg={colors.transparenciaBlack}>
                <Th color="white">Matricula</Th>
                <Th color="white">Nome</Th>
                <Th color="white">Cargo</Th>
                <Th color="white">Situação</Th>
                <Th color="white">Data de admissão</Th>
                <Th color="white">Data de exoneração</Th>
                <Th color="white">Tipo contrato</Th>
                <Th color="white">Secretaria</Th>
                <Th color="white">Local de trabalho</Th>
                <Th color="white">Ano</Th>
                <Th color="white">Mês</Th>
                <Th color="white">Salario Base</Th>
                <Th color="white">Valor bruto</Th>
                <Th color="white">Valor líquido</Th>
                <Th color="white">Total descontos</Th>
              </Tr>
            </Thead>
            <Tbody fontSize="12px">
              {paginatedData
             .map((row, index) => (
                <Tr
                  key={index}
                  bg={
                    index % 2 === 0
                      ? useColorModeValue("white", "black")
                      : useColorModeValue("#f7f7f7", "grey.100")
                  }
                  _hover={{
                    bg: "#d1d1d1",
                    cursor: "pointer",
                    color: useColorModeValue("black", "white"),
                  }}
                  onClick={() => handleOpenModal(row.idfunselec,
          row.nome,
          row.matricula,
          row.cargo,
          row.secretaria,
          row.ano,
          row.mes,)}
                >
                  <Td>{row.matricula}</Td>
                  <Td>{row.nome}</Td>
                  <Td>{row.cargo}</Td>
                  <Td>{row.situacao}</Td>
                  <Td>{moment(row.dataadmissao).format("DD/MM/YYYY")}</Td>
                  <Td>{row.dataexoneracao ? moment(row.dataexoneracao).format("DD/MM/YYYY") : "-"}</Td>
                  <Td>{row.tipocontrato}</Td>
                  <Td>{row.secretaria}</Td>
                  <Td>{row.localtrabalho}</Td>
                  <Td>{row.ano}</Td>
                  <Td>{row.mes}</Td>
                  <Td>{moneyFormatter(Number(row.salariobase))}</Td>
                  <Td>{moneyFormatter(Number(row.bruto))}</Td>
                  <Td>{moneyFormatter(Number(row.liquido))}</Td>
                  <Td>{moneyFormatter(Number(row.bruto) - Number(row.liquido))}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
<Modal isOpen={isOpen} onClose={onClose} size="4xl" >
  <ModalOverlay />
  <ModalContent border= '2px solid black' pb='18px'>
    <ModalHeader fontWeight={"bold"}>DETALHES DA FOLHA</ModalHeader>
    <ModalCloseButton />
    <ModalBody >
      {modalLoading ? (
        <Spinner />
      ) : selectedDetails?.error ? (
        <Text color="red.500">{selectedDetails.error}</Text>
      ) : selectedDetails?.results?.length > 0 ? (
        <>
          {/* Cabeçalho com dados do servidor selecionado */}
          {selectedHeader && (
            <Box mb={4}>
              <Text><strong>Nome:</strong> {selectedHeader.nome}</Text>
              <Text><strong>Matrícula:</strong> {selectedHeader.matricula}</Text>
              <Text><strong>Cargo:</strong> {selectedHeader.cargo}</Text>
               <Text><strong>Secretaria:</strong> {selectedHeader.secretaria}</Text>
              <Text><strong>Mês/Ano:</strong> {selectedHeader.mes}/{selectedHeader.ano}</Text>
            </Box>
          )}

          {/* Tabela de verbas */}
          <Box overflowX="auto" mt={4}>
            <Table style={{ width: "100%", borderCollapse: "collapse" }}>
              <Thead>
                <Tr>
                  <Th style={{ border: "1px solid #ccc", padding: "8px" }}>Código</Th>
                  <Th style={{ border: "1px solid #ccc", padding: "8px" }}>Descrição</Th>
                  <Th style={{ border: "1px solid #ccc", padding: "8px" }}>Tipo</Th>
                  <Th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "right" }}>Valor</Th>
                </Tr>
              </Thead>
             <Tbody>
  {(() => {
    const results = [...selectedDetails.results];

    // normaliza para maiúsculo e sem plural
    const isDesconto = (tipo: string) =>
      tipo?.toUpperCase().startsWith("DESCONTO");

    // separa descontos e não descontos
    const descontos = results.filter((item: any) => isDesconto(item.tipoVerba));
    const outros = results.filter((item: any) => !isDesconto(item.tipoVerba));

    // lista de códigos especiais
    const codigosEspeciais = [187, 170, 184, 181, 178];

    // descontos especiais
    const descontosEspeciais = descontos.filter((item: any) =>
      codigosEspeciais.includes(Number(item.codverba))
    );

    // descontos que não são especiais
    const descontosOutros = descontos.filter(
      (item: any) => !codigosEspeciais.includes(Number(item.codverba))
    );

    const somaOutrosDescontos = descontosOutros.reduce(
      (acc: number, item: any) => acc + parseFloat(item.valorverba),
      0
    );

    // lista final
    const finalList = [
      ...outros,
      ...descontosEspeciais,
      ...(somaOutrosDescontos !== 0
        ? [
            {
              codverba: "-",
              desnoverba: "OUTROS DESCONTOS",
              tipoVerba: "Descontos",
              valorverba: somaOutrosDescontos,
            },
          ]
        : []),
    ];

    return finalList
      .sort((b: any, a: any) => a.tipoVerba.localeCompare(b.tipoVerba))
      .map((item: any, index: number) => (
        <Tr key={index}>
          <Td style={{ border: "1px solid #ccc", padding: "8px" }}>
            {item.codverba}
          </Td>
          <Td style={{ border: "1px solid #ccc", padding: "8px" }}>
            {item.desnoverba}
          </Td>
          <Td style={{ border: "1px solid #ccc", padding: "8px" }}>
            {item.tipoVerba}
          </Td>
          <Td
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              textAlign: "right",
            }}
          >
            R${" "}
            {parseFloat(item.valorverba).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Td>
        </Tr>
      ));
  })()}
</Tbody>

            </Table>
          </Box>
        </>
      ) : (
        <Text>Nenhum detalhe encontrado.</Text>
      )}
    </ModalBody>
  </ModalContent>
</Modal>


          <PaginationComponent
            pages={Math.ceil(folhaPagamento.length / ITEMS_PER_PAGE)}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </ContainerBasic>
  );
}

export default Screen;
