import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../../components/Container/Basic";
import publicRoutes from "../../../../routes/public";
import { Box, Img, Input, Link, Select, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../../context/fontSizeAccessibility";
import { ContainerSearch } from "../../../../styles/components/contratos-atas/styles";
import PaginationComponent from "../../../../components/PaginationComponent";


type PropsInput = {
  handler: {};
};

export interface Emenda {
  
  id: string;
  n_emenda: number;
  ano: number;
  trimestre: string | null;
  esfera_descricao: string;
  categoria_descricao: string;
  valor_previsto_emenda: string;
  valor_realizado: string | null;
  objeto: string;
  envio_camara: string | null;
  deliberacao_camara: string | null;
  publicacao_edital: string | null;
  link_acesso: string | null;
  decisao_autoridade: string | null;
  contrato_assinado: string | null;
  data_contrato_assinado: string | null;
  valor_finalizado: string | null;
  cnpj: string | null;
  empresa_contratada: string | null;
  informacoes_gerais: string;
  desc_politico: string;
  partido_politico: string;
  desc_orgao: string;
  secretaria: string;
  desc_licitacao: string | null;
}


export const contentMapSite = {
  titlePage: "Receitas - Emendas Parlamentares",
  description:
   "A arrecadação de receitas para o município pode vir de diferentes fontes. As emendas parlamentares, indicadas por Deputados Federais e Estaduais, são uma forma da cidade ter acesso a recursos. Acompanhe nesta página o descritivo das emendas parlamentares recebidas pela Prefeitura de Mogi das Cruzes."
};



function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();
  const [emendas, setEmendas] = useState<Emenda[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | undefined>(2024)

  const ITEMS_PER_PAGE = 20;

  const filteredEmendas = emendas.filter((item) => {
    if (selectedYear) {
      return item.ano === selectedYear; // Filtra pelo campo "ano"
    }
    return true; // Se nenhum ano for selecionado, mostra todos os contratos
  }).filter((item) =>
    String(item.n_emenda).toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.objeto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc_politico.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedEmendas = filteredEmendas.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredEmendas.length / ITEMS_PER_PAGE);
  console.log(filteredEmendas.length )
  const handlePageClick = (data: { selected: number }) => {
    const newPage = Math.max(1, Math.min(data.selected + 1, totalPages));
    setCurrentPage(newPage);
  };

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchEmendas = async () => {
      try {
        const response = await fetch('https://dadosadm.mogidascruzes.sp.gov.br/api/lista_emendas');
        const data = await response.json();
        setEmendas(data);
      } catch (error) {
        console.error('Erro ao buscar as emendas:', error);
      }
    };

    fetchEmendas();
  }, []);

useEffect(() => {
    setCurrentPage(1); // Reseta a página para 1 ao mudar o ano
  }, [selectedYear]);

  const years = [...new Set(emendas.map((item) => item.ano))].sort((a, b) => b - a);

    
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

      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        
        borderRadius="18px"
        marginBottom="15px"
      >
     {paginatedEmendas.map((emenda) => (
        <Box
          key={emenda.id}
          border="2px solid #c62227"
          p="10px"
          borderRadius="12px"
          mb="10px"
          _hover={{ border: "2px solid #c62227", transition: "0.3s" }}
          onClick={() => window.location.href = `receitas-emendas-detalhes?${emenda.id}`}
          cursor="pointer"
        >
          <Text fontWeight="bold" borderBottom="1px solid #393D6F">
            Número da Emenda: {emenda.n_emenda}
          </Text>
          <Text>Autor: {emenda.desc_politico || 'Não informado'}</Text>
          <Text>Ano: {emenda.ano}</Text>
          <Text>Descrição: {emenda.objeto}</Text>
        </Box>
      ))}

<Box
       
       as="ul" // Garante que Box se comporte como <ul>
       display="flex"
       justifyContent="space-around"
       
       alignItems="center"
       flexWrap="wrap"
       gap="10px"
       mt="20px"
       p="15px"
       listStyleType="none"
       fontWeight="bold"
       fontSize="lg"
       overflowX="auto"
      // whiteSpace="nowrap"
       maxW="100%"
       sx={{
         "& li": {
           display: "inline-block", // Garante que os itens fiquem em linha
           marginLeft: '10px',
           padding: "8px 15px",
           cursor: "pointer",
           textDecoration: "none",
           borderRadius: "5px",
           backgroundColor: "#f0f0f0",
           transition: "background-color 0.3s, color 0.3s",
         },
         "& li:hover": {
           backgroundColor: "##0089C",
           color: "white",
           gap: '10px'
         },
         "& .active": {
           fontWeight: "bold",
           backgroundColor: "#393D6F",
           color: "white",
         },
       }}
     >
   
     </Box>
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
