import { useColorModeValue, Box, Text, } from "@chakra-ui/react";
import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import usePagina from '../../../hooks/usePagina';

import img001 from '../../../assets/images/plano-integridade/001.png';
import img002 from '../../../assets/images/plano-integridade/002.png';
import img003 from '../../../assets/images/plano-integridade/003.png';

const dados = [
  {
    id: 1,
    titulo: 'Código de Conduta',
    img: img001,
    url: 'https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/1d1d8f92-d659-4ece-a2d0-458b0002e20b/Codigo_de_Conduta___Cartaz_A3.pdf'
  },
  {
    id: 2,
    titulo: 'Relação com fornecedores',
    img: img002,
    url: 'https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/1d1d8f92-d659-4ece-a2d0-458b0002e20b/Relacao_com_Fornecedor___Cartaz_A3.pdf'
  },
  {
    id: 3,
    titulo: 'Brindes e presentes',
    img: img003,
    url: 'https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/1d1d8f92-d659-4ece-a2d0-458b0002e20b/Canal_de_Denuncias___Cartaz_A3.pdf'
  }
]
function Screen() {
  
  const {paginaData, loadings, error} = usePagina("94");
  
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
        <Box display="flex" flexWrap="wrap" gap={4}>
  {dados.map((item) => (
    <Box
      key={item.id}
      as="a"
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ transform: "scale(1.03)", transition: "0.2s" }}
      maxW="250px"
      border={1}
      borderColor={useColorModeValue("gray.200", "gray.600")}
    >
      <img
        src={item.img.src}
        alt={item.titulo}
        width={250}
        style={{
          borderRadius: "12px",
          display: "block",
        }}
      />
      <Box p={2} textAlign="center" fontWeight="bold" fontSize="l">
        {item.titulo}
      </Box>
    </Box>
  ))}
</Box>
     
      </Box>
    </ContainerBasic>
  );
}

export default Screen;

