import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Button, Divider, Img, Input, Link, Select, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";
import PaginationComponent from "../../../components/PaginationComponent";



type PropsInput = {
  handler: {
   };
};

export interface Licitacoes {
  id: number;
  id_tipolicitacao: number;
  id_objeto: number;
  numero: number;
  ano: number;
  dataAbertura: string;
  publicacaoInicio: Date;
  publicacaoFim: Date;
  descricao: string;
  complemento: string;
  bloqueada: boolean;
  repeticao: number;
  suspesa: boolean;
  gestora: string;
  situação: string;

}

export const contentContractsAndAtas = {
  titlePage: "Licitações",
  description:
    "São disponibilizados no site da Prefeitura os editais de licitação de concorrência, tomada de preço e pregões para aquisição de bens e serviços, para acesso de qualquer interessado. ",
};
function Screen({
  handler,
}: PropsInput) {
 // const [contract, setContract] = useState<any>(null);
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  const [licitacoes, setLicitacoes] = useState<Licitacoes[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2025)

  const ITEMS_PER_PAGE = 50;

  const filteredLicitacoes = (licitacoes || []).filter(item => 
    selectedYear ? item.ano === selectedYear : true
  ).filter(item => 
    String(item.numero).toLowerCase().includes(searchTerm.toLowerCase())
  );

    const paginatedLicitacoes = filteredLicitacoes.slice(
      (currentPage -1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );

    const totalPages = Math.ceil(filteredLicitacoes.length / ITEMS_PER_PAGE)
    console.log(filteredLicitacoes)

    useEffect(() => {
      const fetchAllLicitacoes = async () => {
        let allLicitacoes: Licitacoes[] = [];
        let page = 1;
        let hasNextPage = true;
    
        try {
          while (hasNextPage) {
            console.log(`Buscando página ${page}...`); // DEBUG
    
            const response = await fetch(`https://dadosadm.mogidascruzes.sp.gov.br/api/licitacoes/?page=${page}`);
            const data = await response.json();
    
            if (data.results && Array.isArray(data.results)) {
              allLicitacoes = [...allLicitacoes, ...data.results];
            } else {
              console.error("Formato inesperado da resposta da API:", data);
              break;
            }
    
            if (data.next) {
              page++;
            } else {
              hasNextPage = false;
            }
          }
    
          console.log("Total de licitações carregadas:", allLicitacoes.length); // DEBUG
          setLicitacoes(allLicitacoes);
        } catch (error) {
          console.error("Erro ao buscar as licitações:", error);
          setLicitacoes([]);
        }
      };
    
      fetchAllLicitacoes();
    }, []);
    
    
  
  useEffect(() => {
      setCurrentPage(1); // Reseta a página para 1 ao mudar o ano
    }, [selectedYear]);
  
    const years = [...new Set(licitacoes.map((item) => item.ano))].sort((a, b) => b - a);

   
    console.log(years)

  return (
    <ContainerBasic title={title} description={description}>
           <ContainerSearch direction="row">
                           <Stack minW={86} width="25%">
                             {/* Select para Filtrar por Ano */}
                             <Select
                               value={selectedYear}
                               onChange={(e) => setSelectedYear(Number(e.target.value))}
                               placeholder="Todos os anos"
                               borderRadius="8px"
                               height="40px"
                               mb="10px"
                             >
                               {years.map((year) => (
                                 <option key={year} value={year}>
                                   {year}
                                 </option>
                               ))}
                             </Select>
                           </Stack>
                           <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
                         </ContainerSearch>
           
                             <Input
                                   type="text"
                                   placeholder="Pesquisar emendas..."
                                   value={searchTerm}
                                   onChange={(e) => setSearchTerm(e.target.value)}
                                   borderRadius="8px"
                                   height="40px"
                                   pr="40px" // Adiciona espaço para o ícone à direita
                                   width="40%"
                                   mb="10px"
                                   
                                 />
                                 
                                         {paginatedLicitacoes.map((row) => (
                                           <Box
                                             key={row.id}
                                             border="2px solid red"
                                             p="10px"
                                             borderRadius="12px"
                                             mb="10px"
                                             onClick={() => window.location.href = `contratos_teste_detalhes?${row.id}`}
                                             _hover={{ border: "3px solid red", transition: "0.3s" }}
                                             
                                             cursor='pointer'
                                           >
                                             
                                             <Text fontWeight="bold" borderBottom='1.5px solid red'>{row.numero} /{row.ano}</Text>
                                             
                                             <Text>Data Início: {row.dataAbertura} </Text>
                                             <Text>Descrição: {row.descricao}</Text>
                                            
                                           </Box>
                                         ))}
    </ContainerBasic>
  );
}

export default Screen;