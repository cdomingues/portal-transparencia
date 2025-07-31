import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { Box, Button, Input, Select, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import PaginationComponent from "../../../components/PaginationComponent";
import { objetos_licitacao } from "../../../utils/objetos_licitacao";
import { getSituacaoText } from "../../../utils/situacaoLicitacao";
import { getTipoText } from "../../../utils/tipoLicitacao";
import axios from "axios";
import CsvDownload from "react-json-to-csv";
import colors from "../../../styles/colors";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import moneyFormatter from "../../../utils/moneyFormatter";
import moment from "moment";

export interface FolhaPagamento {
idparcalc: number;
  idfunselec: number;
  tipo_folha: string;
  matricula: string;
  nome: string;
  cargo: string;
  situacao: string;
  salariobase: string; // pode ser string se vier assim da API
  dataadmissao: string; // ISO string
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

export const contentContractsAndAtas = {
 titlePage: "Folha de Pagamento",
  description:
    "É dever do Poder Público dar transparência à Folha de Pagamento dos funcionários. Acompanhe aqui o detalhamento dos cargos e salários dos servidores públicos municipais.",}

function Screen() {
  const title = contentContractsAndAtas.titlePage;
  const description = contentContractsAndAtas.description;

  const [folhaPagamento, setFolhaPagamento] = useState<FolhaPagamento[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedLicitacao, setSelectedLicitacao] = useState("");
  const [selectedGestora, setSelectedGestora] = useState("");
  const [selectedSituacao, setSelectedSituacao] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const accessibility = useFontSizeAccessibilityContext();

  useEffect(() => {
    axios.get('https://dadosadm.mogidascruzes.sp.gov.br/api/folha_pagamento?ano=2024&mes=6&nome=domingues')
      .then((res) => {
        setFolhaPagamento(res.data.results); // ou res.data.results, dependendo da estrutura
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro ao carregar os dados: {erro}</p>;

  const clearFilters = () => {
    setSelectedYear("2025");
    setSelectedLicitacao("");
    setSelectedGestora("");
    setSelectedSituacao("");
    setSearchTerm("");
  };

  

  

  const lowerSearchTerm = searchTerm.toLowerCase();

  /* return (
    String(item.numero).toLowerCase().includes(lowerSearchTerm) ||
    String(item.descricao).toLowerCase().includes(lowerSearchTerm) ||
    String(item.dataAbertura).toLowerCase().includes(lowerSearchTerm) ||
    String(item.publicacaoFim).toLowerCase().includes(lowerSearchTerm) ||
    String(item.complemento).toLowerCase().includes(lowerSearchTerm) 
   
  );
});

  const paginatedLicitacoes = filteredLicitacoes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  ); */

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

  

  //const ultimaAtualizacao = dataMaisAtual ? new Date(dataMaisAtual.dataAbertura).toLocaleDateString('pt-BR') : '';


  return (
    <ContainerBasic title={title} description={description}>
        <Text fontWeight='bold' pl='10px' mb='15px'>Para busca de licitações  selecione o ano especificio ou a opção 'Todos os anos' e selecione po tipo de licitação, o órgão ou a situação. Caso prefira escolha o ano e pesquise pelo número  ou a descrição da licitação </Text>
               
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

      <Input
        type="text"
        placeholder="Pesquisar ..."
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
              Última atualização: <strong>05/07/2025</strong>
            </Text>

      <Table overflowX='auto' width='100%' >
  <Thead >
    <Tr  bg={colors.transparenciaBlack}
      color="white"
      p={4}
      fontWeight="bold"
      border={`1px solid ${colors.grayLighter}`}
       
       >
      <Th color="white" >Matricula</Th>
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
  <Tbody fontSize='12px'>
    
    {folhaPagamento.map((row, index) => (
    
    <Tr 
    key={index} 
    bg={index % 2 === 0 ? useColorModeValue("white", "black")  : useColorModeValue("#f7f7f7", "grey.100")} 
    _hover={{ bg: "#d1d1d1", cursor: "pointer" , color: useColorModeValue("black", "white") }}
    color={useColorModeValue("black", "white")}
  >
        <Td>{row.matricula} </Td> 
       <Td>{row.nome} </Td> 
      <Td>{row.cargo}</Td>
       <Td>{row.situacao}</Td>
       <Td>{moment(row.dataadmissao).format('DD/MM/YYYY')}</Td>
       <Td>{moment(row.dataexoneracao).format('DD/MM/YYYY')}</Td>
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

      <PaginationComponent
        pages={Math.ceil(folhaPagamento.length / ITEMS_PER_PAGE)}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </ContainerBasic>
  );
}

export default Screen;

