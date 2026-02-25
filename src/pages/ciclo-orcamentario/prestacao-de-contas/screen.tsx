import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import usePagina from '../../../hooks/usePagina';

type Arquivo = {
  ano: any;
  pk: string;
  nome: string;
  area?: string | null;
  descricao: string;
  file: string;
  created_at: string;
  tipo: number;
  cadastro: string;
};

type PropsInput = {
  handler: {};
};
function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const router = useRouter();
  const apiUrl = "https://dadosadm.mogidascruzes.sp.gov.br"
   const [arquivos, setArquivos] = useState<Arquivo[]>([]);
    const [nextPage, setNextPage] = useState<number | null>(1);

  const fetchData = async () => {
      let currentPage = 1; // Começa na página inicial
      let hasMorePages = true;
    
      try {
        while (hasMorePages) {
          const response = await fetch(
            `${apiUrl}/api/arquivos/?page=${currentPage}&file_type=18`
          );
    
          if (!response.ok) {
            console.error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            break;
          }
    
          const data = await response.json();
    console.log(data)
          // Filtrar os resultados conforme o ano selecionado
         const filteredResults = data.results.filter(
  (arquivo: { area: string }) =>
    arquivo.area === "c76e23ef-16e5-494f-a25b-43a37b84470a"
);
    
          // Atualizar estado com novos dados
          setArquivos((prevArquivos: any) => [...prevArquivos, ...filteredResults]);
    
          // Verifica se há mais páginas
          if (data.next) {
            currentPage++; // Incrementa a página para a próxima iteração
          } else {
            hasMorePages = false; // Encerra o loop quando não houver próxima página
          }
        }
    
        // Reseta o estado da página para evitar reexecuções
        setNextPage(null);
      } catch (error) {
        console.error("Erro ao obter os arquivos:", error);
      }
    };
    
    useEffect(() => {
      if (nextPage !== null) {
        fetchData();
      }
    }, [nextPage]);

    const {paginaData, loadings, error} = usePagina("58");
    
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
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        
        borderRadius="18px"
        marginBottom="15px"
      >
        <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SECRETARIA MUNICIPAL DE EDUCAÇÃO   
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Quadrimestral <br/>
                PREVISÃO LEGAL: Lei organica do Município - Art. 202 - § 2º <br/>
                Para mais informações acessar: <br/><Link href="https://portal.sme-mogidascruzes.sp.gov.br/paginas/prestacao-de-contas" target="blank" style={{ color: "#db334f" }} >https://portal.sme-mogidascruzes.sp.gov.br/paginas/prestacao-de-contas</Link> <br/> 
                </Text>

                <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SECRETARIA MUNICIPAL DE SAÚDE    
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Quadrimestral  <br/>
                PREVISÃO LEGAL: <Link  href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/lcp%20141-2012?OpenDocument" target="blank" style={{ color: "#db334f" }}>LEI COMPLEMENTAR Nº 141, DE 13 DE JANEIRO DE 2012 (Art. 23; Art. 34; Art. 37)</Link>  <br/>
                Para mais informações, acessar:  <br/>
                <Link href="https://www.mogidascruzes.sp.gov.br/public/site/doc/2023092917280865173358127fa.pdf" target="blank" style={{ color: "#db334f" }} >Audiência do 2º Quadrimestre 23</Link><br/>
                <Link href="https://www.mogidascruzes.sp.gov.br/public/site/doc/20231027130854653bd286802bd.pdf" target="blank" style={{ color: "#db334f" }} >Audiência do 2º Quadrimestre 23 - Ata Conselho</Link> <br/>
                
                 </Text>

                 <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SECRETARIA MUNICIPAL DE PLANEJAMENTO E GESTÃO ESTRATÉGICA  
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Anual <br/>
                PREVISÃO LEGAL: <Link  href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/lcp%20101-2000?OpenDocument" target="blank" style={{ color: "#db334f" }}>LEI COMPLEMENTAR Nº 101, DE 4 DE MAIO DE 2000 </Link>  <br/>
                Para mais informações, acessar:   <br/>
                <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/8e841f1c-8e81-40d3-9a7b-30d3538ef0ef/Audi%C3%AAncia_LDO_2022.pdf" target="blank" style={{ color: "#db334f" }} >Audiência LDO 2022</Link> <br/>
                <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/ba84d075-89e3-4ad7-900d-62836f7c9169/Audi%C3%AAncia_LOA_2022.pdf" target="blank" style={{ color: "#db334f" }} >Audiência LOA 2022</Link> <br/>
                <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/e4667cee-95f9-47b7-a367-f2a55de8fd5d/Audi%C3%AAncia_LOA_2023.pdf" target="blank" style={{ color: "#db334f" }} >Audiência LOA 2023</Link> <br/>
                <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/d0d857e5-6ba6-40c0-81c9-cdf332dd5d38/Audi%C3%AAncia_PPA_2022-2025.pdf" target="blank" style={{ color: "#db334f" }} >Audiência PPA 2022-2025</Link> <br/>
                 </Text>

                 <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SECRETARIA MUNICIPAL DE ASSISTÊNCIA SOCIAL    
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Quadrimestral <br/>
                PREVISÃO LEGAL: Lei n° 7.943, de 7 de julho de 2023 (Art. 17) <br/>
                Para mais informações, acessar:  <br/>
                <Link href="https://www.canva.com/design/DAFsZMKFaLE/SMxRQVszZo3IhZSBQMKH2A/view?utm_content=DAFsZMKFaLE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="blank" style={{ color: "#db334f" }} >CANVA Secretaria de Assistência Social </Link>
                <br/>
               
                 </Text>

                 <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
              >
                SECRETARIA MUNICIPAL DE FINANÇAS  
                  
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Quadrimestral  <br/>
                PREVISÃO LEGAL: <Link  href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/lcp%20101-2000?OpenDocument" target="blank" style={{ color: "#db334f" }}>LEI COMPLEMENTAR Nº 101, DE 4 DE MAIO DE 2000 (Art. 8; Art. 56) </Link>  <br/>
                Para mais informações, acessar:   <br/>
              {arquivos
               .slice()
              .sort((a, b) => a.nome.localeCompare(b.nome))
              .map((arquivo) => (
  <div key={arquivo.pk}>
    <Link
      href={`${apiUrl}${arquivo.file}`}
      download
      target="_blank"
      style={{ color: "#db334f" }}
    >
      {arquivo.nome}
    </Link>
  </div>
))}


                
                 </Text>

        <Text
                align={isMobile ? "justify" : "left"}
                fontWeight="700"
                fontSize={accessibility?.fonts?.regular}
                
              >
                SECRETARIA MUNICIPAL DE CULTURA    
                
                
              </Text>
        <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mb={4}
              >
                PERIODICIDADE: Anual <br/>
PREVISÃO LEGAL: (Lei Orgânica Municipal) <br/>
Para mais informações, acessar <br/>
<Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/87c6ee8d-57e6-40ff-a902-cdc93e8083df/Audi%C3%AAncia_-_2021-2022.pdf" target="blank" style={{ color: "#db334f" }} >PRESTAÇÃO DE CONTAS SECULT - 2021 - 2022</Link> <br/>
<Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/f8a8ed45-e928-451d-a21b-155fbb85879b/prestacao_contas_cultura_2022_2023.pdf" target="blank" style={{ color: "#db334f" }} >PRESTAÇÃO DE CONTAS SECULT - 2022 - 2023</Link> <br/>
<Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/fd3e712f-0ca8-48e2-968a-4068c3f2b3db/prestacao_contas_secult_2023.pdf" target="blank" style={{ color: "#db334f" }} >PRESTAÇÃO DE CONTAS SECULT - 2023 - 2024</Link> <br/>               
                 </Text>

                


                 

                 

                 

               


                 

                 
        


      </Box>
    </ContainerBasic>
  );
}

export default Screen;
