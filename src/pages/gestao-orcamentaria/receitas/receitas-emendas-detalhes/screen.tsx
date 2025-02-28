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
  titlePage: "Receitas - Emendas Parlamentares",
  description:
   "A arrecadação de receitas para o município pode vir de diferentes fontes. As emendas parlamentares, indicadas por Deputados Federais e Estaduais, são uma forma da cidade ter acesso a recursos. Acompanhe nesta página o descritivo das emendas parlamentares recebidas pela Prefeitura de Mogi das Cruzes."
};

function Screen({ id_contrato }: any) {
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  const [emenda, setEmenda] = useState<any[]>([]);
  const [arquivo, setArquivo] = useState<any[]>([]);
  
  const url = "https://dadosadm.mogidascruzes.sp.gov.br/api/lista_emendas";
  const url_files = `https://dadosadm.mogidascruzes.sp.gov.br/api/lista_arquivo_emenda`;

  useEffect(() => {
    if (!id_contrato) return;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          setEmenda(data);
        } else {
          setEmenda([]);
        }
      })
      .catch((error) => console.error("Erro ao buscar contratos:", error));
  }, [id_contrato]);

  useEffect(() => {
    if (!id_contrato) return;
    fetch(url_files) // ✅ Corrigida a URL para arquivos
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          setArquivo(data);
        } else {
          setArquivo([]);
        }
      })
      .catch((error) => console.error("Erro ao buscar arquivos:", error));
  }, [id_contrato]);
  console.log(id_contrato)
  

  const filteredEmendas = emenda.filter (emenda=>emenda.id === id_contrato)
  const filteredArquivos = arquivo.filter( file=>file.id_emenda === id_contrato)
  

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
        <ContainerSearch direction="row"></ContainerSearch>

        <Box>
          {filteredEmendas.length > 0 ? (
            filteredEmendas.map((item) => (
              <Table
                key={item.id_contrato}
                variant="simple"
                size="md"
                width="100%"
                overflow="hidden"
                mb={5}
              >
                <Thead>
                  <Tr>
                    <Th
                      colSpan={2}
                      textAlign="center"
                      bg="#393D6F"
                      color="white"
                      p={4}
                      fontWeight="bold"
                      border="1px solid #393D6F"
                    >
                      DETALHES DA EMENDA
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {[
                    ["Número da Emenda", item.n_emenda],
                    ["Ano", item.ano],
                    ["Trimestre", item.trimestre],
                    ["Esfera",item.esfera_descricao],
                    ["Categoria",item.categoria_descricao],
                    ["Valor Previsto",moneyFormatter(Number(item.valor_previsto_emenda))],
                    ["Objeto", item.objeto],
                    ["Envio Câmara", item.envio_camara],
                    ["Deliberação Câmara", item.deliberacao_camara],
                    ["Publicação Edital", item.publicacao_edital],
                    ["Link de Acesso", item.link_acesso],
                    ["Decisão da Autoridade", item.decisao_autoridade],
                    ["Contrato Assinado", item.contrato_assinado],
                    ["Data do Contrato Assinado", item.data_contrato_assinado],
                    ["Valor Finalizado", item.valor_finalizado],
                    ["CNPJ", item.cnpj],
                    ["Empresa Contratada", item.empresa_contratada],                    
                    ["Descrição do Político", item.desc_politico],
                    ["Partido Político", item.partido_politico],
                    ["Órgão Responsável", item.desc_orgao],
                    ["Descrição da Modalidade", item.desc_modalidade],
                    ["Secretaria", item.secretaria],
                    ["Descrição da Licitação", item.desc_licitacao],
                    ["Informações Gerais", item.informacoes_gerais],
                    
                  ].map(([label, value], index) => (
                    <Tr key={index}>
                      <Td fontWeight="bold" bg="#f2f1f1" p={3} width="30%" border="1px solid #393D6F">
                        {label}
                      </Td>
                      <Td p={3} border="1px solid #393D6F" bg="#eeeeee" width="70%">
                        {value}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            ))
          ) : (
            <p>Nenhum contrato encontrado.</p>
          )}

          {/* TABELA DE ARQUIVOS */}
          {filteredArquivos.length > 0 && (
            <Table variant="simple" size="md" width="100%" overflow="hidden">
              <Thead >
                <Tr textAlign="center"
                    bg="#393D6F"
                    color="white"
                    p={4}
                    fontWeight="bold"
                    border="1px solid #393D6F">
                <Th fontSize='18px' color="white" colSpan={3} textAlign='center'>ARQUIVOS DISPONÍVEIS</Th>
                    
                  
                </Tr>
                <Tr>
                  <Th bg="#f2f1f1" border="1px solid #393D6F">
                    Nome do Arquivo
                  </Th>
                  <Th bg="#f2f1f1" border="1px solid #393D6F">
                    Download
                  </Th>
                  <Th bg="#f2f1f1" border="1px solid #393D6F">
                    Data de inclusão
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredArquivos.map((file) => (
                  <Tr key={file.id}>
                    <Td p={3} border="1px solid #393D6F">
                      {file.nome}
                    </Td>
                    <Td p={3} border="1px solid #393D6F">
                      <Link 
                      href={file.arquivo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      
                      _hover={{ fontWeight: 'bold' }}
                      >
                        Baixar
                      </Link>
                    </Td>
                    <Td p={3} border="1px solid #393D6F">
                      {moment(file.data_inclusao).format('DD/MM/YYYY')}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Box>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
