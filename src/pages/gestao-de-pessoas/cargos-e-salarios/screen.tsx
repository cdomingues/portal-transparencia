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

type PropsInput = {
  handler: {};
};

export const contentContractsAndAtas = {
  titlePage: "Cargos e salários",
  description: "Conforme previsto no § 6º do Art. 39 da Constituição Federal, com a redação dada pela Emenda Constitucional nº 19/98, torna-se pública a tabela de subsídios, salários e vencimentos dos cargos e empregos públicos, válida a partir de 1ª de março de 2024, em conformidade com o disposto na Lei nº 8.088, de 24 de abril de 2024."
};

function Screen({
  handler: {},
}: PropsInput) {

  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
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

  return (
    <ContainerBasic title={title} description={description}>
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
