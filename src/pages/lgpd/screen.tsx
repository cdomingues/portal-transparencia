import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Link,
  AccordionItem,
  Accordion,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import ContainerBasic from "../../components/Container/Basic";
import moment from "moment";
import usePagina from "../../hooks/usePagina";

interface Painel {
  id: string;
  created_at: string;
  updated_at: string;
  titulo: string;
  descricao: string;
  numero_pagina: string;
}

interface Treinamento {
  id: string;
  data: string;
  horario: string;
  titulo: string;
  local: string;
  publico: string;
  vagas: string | null;
  ementa: string;
  material: string;
}

function HomeScreen() {
  const accessibility = useFontSizeAccessibilityContext();

  const [paineis, setPaineis] = useState<Painel[]>([]);
  const [treinamentos, setTreinamentos] = useState<Treinamento[]>([]);

  // ✅ Agora usamos o hook customizado
  const { paginaData, loadings, error } = usePagina("72");

  // Busca painéis
  useEffect(() => {
    async function fetchPaineis() {
      try {
        const response = await fetch(
          "https://dadosadm.mogidascruzes.sp.gov.br/api/paineis/"
        );
        if (!response.ok) throw new Error("Erro ao buscar painéis");
        const data = await response.json();

        const ordenado = data.sort(
          (a: Painel, b: Painel) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
        setPaineis(ordenado);
      } catch (error) {
        console.error("Erro ao carregar painéis:", error);
      }
    }
    fetchPaineis();
  }, []);

  // Busca treinamentos
  useEffect(() => {
    async function fetchTreinamentos() {
      try {
        const response = await fetch(
          "https://dadosadm.mogidascruzes.sp.gov.br/api/treinamentos/"
        );
        if (!response.ok) throw new Error("Erro ao buscar treinamentos");
        const data = await response.json();
        setTreinamentos(data);
      } catch (error) {
        console.error("Erro ao carregar treinamentos:", error);
      }
    }
    fetchTreinamentos();
  }, []);

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
        p={4}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        mb="15px"
      >
        {conteudo && (
          <Box
            dangerouslySetInnerHTML={{ __html: conteudo }}
            sx={{
              p: { mb: 2, textAlign: "justify" },
              a: {
                color: "blue.600",
                fontWeight: "bold",
                textDecoration: "underline",
              },
            }}
          />
        )}

        {/* Accordion Painéis */}
        <Accordion allowToggle borderRadius={4} mt="15px">
          {paineis
            .filter(
              (p) => p.numero_pagina === "33cf53e1-42bb-42ae-a6eb-cd8c9dc4b91f"
            )
            .map((painel) => (
              <AccordionItem
                key={painel.id}
                border="1px solid"
                borderRadius="15px"
                mb="15px"
              >
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="center"
                      fontWeight="bold"
                      fontSize="lg"
                    >
                      {painel.titulo}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel m={4} p={4}>
                  <Box
                    dangerouslySetInnerHTML={{ __html: painel.descricao }}
                    sx={{
                      p: { mb: 2, textAlign: "justify" },
                      a: { color: "green.600", textDecoration: "underline" },
                    }}
                  />
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>

        {/* Accordion Treinamentos */}
        <Accordion allowToggle borderRadius={4} mt="15px">
          <AccordionItem border="1px solid" borderRadius="15px" mb="15px">
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  CAPACITAÇÃO E CONSCIENTIZAÇÃO
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel m={4} p={4}>
              <Flex flexDirection="column">
                <Box textAlign="center" fontWeight="bold" fontSize="2xl">
                  AGENDA DE TREINAMENTOS
                </Box>

                {treinamentos.map((treino) => (
                  <Box
                    key={treino.id}
                    borderWidth="1px"
                    borderRadius="2xl"
                    p={6}
                    shadow="md"
                    bg="white"
                    mt={2}
                  >
                    <Heading size="md" mb={2}>
                      {moment(treino.data).format("DD/MM/YYYY")} -{" "}
                      {treino.titulo}
                    </Heading>
                    <Divider mb={3} />
                    <Text>
                      <strong>📍 Local:</strong> {treino.local}
                    </Text>
                    <Text>
                      <strong>🕘 Horário:</strong> {treino.horario}
                    </Text>
                    <Text>
                      <strong>👥 Público-alvo:</strong> {treino.publico}
                    </Text>
                    {treino.vagas && (
                      <Text>
                        <strong>🪑 Vagas:</strong> {treino.vagas}
                      </Text>
                    )}
                    <Box mt={4}>
                      <Text fontWeight="bold">Ementa:</Text>
                      <Text textAlign="justify">{treino.ementa}</Text>
                      <Text>
                        <strong>Material:</strong>{" "}
                        <Link href={`https://dadosadm.mogidascruzes.sp.gov.br/${treino.material}`} target="_blank">
                          {treino.material
    ? decodeURIComponent((treino.material as string).split("/").pop()!)
    : "Sem arquivo"}
                        </Link>
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </ContainerBasic>
  );
}

export default HomeScreen;
