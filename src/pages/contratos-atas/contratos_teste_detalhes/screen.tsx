import {
  Button,
  Divider,
  Select,
  Stack,
  Text,
  useDisclosure,
  Box,
  useColorModeValue
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";
import ModalContracts from "./modalContracts";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";


export const contentContractsAndAtas = {
  titlePage: "Contratos",
  description:
    "Nesta página, confira as informações sobre contratos e atas celebrados pela Prefeitura de Mogi das Cruzes com prestadores de serviço. Pesquise por número, modalidade, processo, valor, fornecedor, objeto, entre outros itens. ",
};
function Screen({id_contrato}: any) {
  
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  const [contrato, setContrato] = useState<any[]>([]);
  const url = `https://dadosadm.mogidascruzes.sp.gov.br/api/contratos_atas?id_contrato=${id_contrato}`

  useEffect(() => {
    if (!id_contrato) return;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results && Array.isArray(data.results)) {
        setContrato(data.results); // 🔹 Acessa 'results' corretamente
      } else {
        setContrato([]); // 🔹 Se não houver resultados, mantém um array vazio
      }
    })
    .catch((error) => console.error("Erro ao buscar contratos:", error));
}, [id_contrato])

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
      <ContainerSearch direction="row">
        
       
      </ContainerSearch>

      <Box>
          <strong>Detalhes do Contrato</strong>

          <ul>
            {contrato.length > 0 ? (
              contrato.map((item) => (
                <li key={item.id}>{item.id}</li> // 🔹 Usa <li> dentro de <ul>
              ))
            ) : (
              <p>Nenhum contrato encontrado.</p>
            )}
          </ul>
        </Box>
      </Box>
     
    </ContainerBasic>
  );
}

export default Screen;