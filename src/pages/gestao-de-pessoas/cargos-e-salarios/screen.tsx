import {
  Box,
  useColorModeValue,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Stack,
  Icon
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { useFontSizeAccessibilityContext } from '../../../context/fontSizeAccessibility';
import axios from "axios";
import { AiOutlineDownload } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import usePagina from '../../../hooks/usePagina';

type PropsInput = {
  handler: {};
};

function Screen({
  handler: {},
}: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();

  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://dadosadm.mogidascruzes.sp.gov.br/api/cargos_e_salarios')
      .then(response => {
        if (response.data) {
          setDados(response.data);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar os dados da API:', error);
      });
  }, []);
  const {paginaData, loadings, error} = usePagina("37");
  
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
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Text align="justify" color="gray.500" fontSize={accessibility?.fonts?.regular}>
          Informações de Cargos e Salários
        </Text>
        <UnorderedList listStyleType="none" color="gray.500" fontSize={accessibility?.fonts?.regular} pt={"20px"}>
          {Array.isArray(dados) && dados.length > 0 ? (
            dados.sort((a, b) => a.ano - b.ano).map((item: any) => (
              <ListItem key={item.id} maxW="500px" p={4} mb='12px'
              borderRadius="md" 
              //cursor="pointer"
              _hover={{ bg: 'gray.200' }}
              border='1px solid black'>
                <Link href={`https://dadosadm.mogidascruzes.sp.gov.br/${item.arquivo}`} target="_blank"  >
                <div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>
                  <h1>{item.titulo}</h1>
                 
                  </ListItem>
                  </div>
                </Link>
              </ListItem>
            ))
          ) : (
            <Text>Nenhum dado encontrado.</Text>
          )}
        </UnorderedList>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
