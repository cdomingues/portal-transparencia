import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../../components/Container/Basic";
import { ContainerSearch } from "../../../../styles/components/contratos-atas/styles";
import moment from "moment";
import moneyFormatter from "../../../../utils/moneyFormatter";

export const contentContractsAndAtas = {
  titlePage: "Contratos",
  description:
    "Nesta página, confira as informações sobre contratos e atas celebrados pela Prefeitura de Mogi das Cruzes com prestadores de serviço. Pesquise por número, modalidade, processo, valor, fornecedor, objeto, entre outros itens. ",
};

function Screen() {
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  const [despesa, setDespesa] = useState<any>(null);
  const [contrato, setContrato] = useState<any[]>([]);
  const [arquivo, setArquivo] = useState<any[]>([]);
  
  

  useEffect(() => {
    // Recuperando os dados da despesa armazenados no sessionStorage
    const despesaData = sessionStorage.getItem("selectedDespesa");

    if (despesaData) {
      // Convertendo os dados armazenados de volta para objeto
      setDespesa(JSON.parse(despesaData));
    } else {
      // Caso não haja dados armazenados
      console.log("Nenhuma despesa selecionada.");
    }
  }, []);

  if (!despesa) {
    return <div>Carregando detalhes...</div>;
  }

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
        <div>
      <h1>Detalhes da Despesa</h1>
      <p><strong>Empenho:</strong> {despesa.nr_empenho} / {despesa.exercicio_empenho}</p>
      <p><strong>Fornecedor:</strong> {despesa.descr_fornecedor}</p>
      <p><strong>Descrição:</strong> {despesa.descr_funcional}</p>
      <p><strong>Valor empenho:</strong> {despesa.vlr_empenho}</p>
      <p><strong>Unidade Orçamentária:</strong> {despesa.unid_orcam}</p>
    </div>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
