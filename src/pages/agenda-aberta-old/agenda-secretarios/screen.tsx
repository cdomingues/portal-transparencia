import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import axios from "axios";
import {
  Divider,
  Heading,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ptBR } from "date-fns/locale";
import moment from "moment";
import { baseUrl } from "../../../config";
import { getScheduleMayor } from "../../../calls/agenda/agenda";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { isMobile } from "react-device-detect";


type PropsInput = {
  handler: any;
};

interface Cargo {
  cargo: string;
  nome: string;
}

type Meeting = {
  nome: any;
  id: string;
  pessoa: string;
  created_at: string;
  updated_at: string;
  data_compromisso: string;
  descricao_breve: string;
  local: string;
  detalhe: string;
  tipo_compromisso: string;
  cargo: any;
  fim_compromisso: string;
};

export const contentMayorAgenda = {
  titlePage: "Agenda Aberta",
  description:
    "Conforme previsto na Lei Municipal n° 7.653/2021 e no Decreto n° 21.006/22, todo cidadão pode ter acesso à agenda de compromissos oficiais das autoridades do Executivo de Mogi das Cruzes. Esta é mais uma medida de promoção da integridade no setor público.",
};

function Screen({ handler }: PropsInput) {
  const excludedList = [
    "MOGI DAS CRUZES",
    "MOGI DAS CRUZES | SEPLAG",
    "Prefeito",
    "Prefeito",
    "Diretor do Departamento de Defesa Civil",
    "Co-Prefeita",
    "AGENDA CULTURAL",
    "AGENDA PARTICIPAÇÃO SOCIAL",
    "Caio Cunha",
    "Priscila Yamagami",
    "Pedro Rodrigues Miranda Neto",
    "Secretário Municipal de Transparência e Dados Abertos - inativo",
    "Severino Netto",
    "Toriel Angelo Mota Sardinha",
    "Marcos Torres.",
    
  ];

  const [selected, setSelected] = useState<Date>();
  const [schedule, setSchedule] = useState<Array<Meeting>>([]);
  const [selectedCargo, setSelectedCargo] = useState<string>("");
  const [apiCargos, setApiCargos] = useState<Cargo[]>([]);
  const [nextPage, setNextPage] = useState<number | null>(1);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data) {
        return;
      }

      const fetchedSchedule = data.results || [];
      setSchedule((prevSchedule) => [...prevSchedule, ...fetchedSchedule]);

      if (data.next !== null) {
        setNextPage((prevPage) => (prevPage !== null ? prevPage + 1 : null));
      } else {
        setNextPage(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (nextPage !== null) {
      const apiUrl = `https://dadosadm.mogidascruzes.sp.gov.br/api/agendas/?page=${nextPage}`;
      fetchData(apiUrl);
    }
  }, [nextPage]);

  useEffect(() => {
    const fetchCargosFromApi = async () => {
      try {
        const response = await axios.get(
          "https://dadosadm.mogidascruzes.sp.gov.br/api/pessoas/"
        );
        const data = response.data;

        const fetchedCargos =
          data.results?.map((item: any) => ({
            cargo: item.cargo,
            nome: item.nome,
          })) || [];

        setApiCargos(fetchedCargos);
      } catch (error) {
        console.error("Error fetching cargos from API:", error);
      }
    };

    fetchCargosFromApi();
  }, []);

  const filteredValues = schedule
    ?.filter((item: Meeting) => {
      const timeWithSubtraction = moment(item?.data_compromisso).subtract(
        1,
        "hours"
      );
      const isSameDate =
        timeWithSubtraction.format("YYYY-MM-DD") ===
        String(moment(selected).format("YYYY-MM-DD"));
      const isNotPrefeitoOrCoPrefeita =
        item?.cargo !== "Prefeito" && item?.cargo !== "Co-Prefeita";
      const isSameCargo =
        selectedCargo === "" ||
        selectedCargo === item?.nome ||
        (selectedCargo === "Secretário Municipal de Desenvolvimento Econômico e Inovação" &&
          item.cargo === "Chefe de Gabinete do Prefeito");
      const isNotFutureDate = timeWithSubtraction.isSameOrBefore(moment(), "day");

      return (
        isSameDate && isNotPrefeitoOrCoPrefeita && isSameCargo && isNotFutureDate
      );
    })
    .flatMap((item: Meeting) => {
      // Duplicate if cargo is "Chefe de Gabinete do Prefeito"
      if (item.cargo === "Secretário Municipal de Transparência e Dados Abertos") {
        return [
          item,
          {
            ...item,
            cargo: "Secretário Municipal de Planejamento e Gestão Estratégica",
          },
        ];
      }
      return [item];
    })
    .map((item: Meeting) => {
      if (item.cargo === "Chefe de Gabinete do Prefeito" &&
          selectedCargo === "Secretário Municipal de Desenvolvimento Econômico e Inovação") {
        return { ...item, cargo: "Secretário Municipal de Desenvolvimento Econômico e Inovação" };
      }
      return item;
    })
    .sort((a: Meeting, b: Meeting) => {
      const aHours = moment(a?.data_compromisso).format("HH:mm");
      const bHours = moment(b?.data_compromisso).format("HH:mm");
      return aHours > bHours ? 1 : -1;
    });

  const title = contentMayorAgenda?.titlePage;
  const description = contentMayorAgenda?.description;

  const dateSelected = moment(selected).format("LL");
  const translatorMonth: any = {
    January: "Janeiro",
    February: "Fevereiro",
    March: "Março",
    April: "Abril",
    May: "Maio",
    June: "Junho",
    July: "Julho",
    August: "Agosto",
    September: "Setembro",
    October: "Outubro",
    November: "Novembro",
    December: "Dezembro",
  };

  let getDateArray = dateSelected?.split(",");
  let getMonth = translatorMonth[getDateArray?.[0]?.split(" ")?.[0]];
  let getDay = getDateArray?.[0]?.split(" ")?.[1];
  let getYear = getDateArray?.[1]?.split(" ")?.[1];
  const accessibility = useFontSizeAccessibilityContext();
  

  return (
    <ContainerBasic title={title} description={description}>
     
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        padding={"10px"}
        rounded="md"
        overflow="visible"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Stack direction="column">
          <Heading
            mb={2}
            fontSize={accessibility?.fonts?.ultraLarge}
            color="text.dark"
          >
            AGENDA DOS SECRETARIOS
          </Heading>
          <Text>Selecione o Cargo</Text>
          <Select
            minW={90}
            width="45%"
            bg={useColorModeValue("white", "gray.800")}
            value={selectedCargo}
            onChange={(event) => setSelectedCargo(event.target.value)}
          >
            <option value="">Todos os Cargos</option>
            <option value="Pedro Ivo">Diretor Superintendente do IPREM</option>
            <option value="Nídia Fátima Cristóforo">Secretária Adjunta da Secretaria de Urbanismo</option>
            <option value="Mariane Prestes da Silva Pena">Secretária Adjunta de Educação</option>
            <option value="Jéssica Cristina da Silva">Secretária Adjunta de Planejamento e Gestão Estratégica</option>
            <option value="Cristiane Ayres Contri">Secretária Adjunta de Transparência e Dados Abertos</option>
            <option value="Adriana Ferreira dos Santos">Secretária Municipal de Assistência Social</option>
            <option value="Claudinéli Moreira Ramos">Secretária Municipal de Cultura</option>
            <option value="Marilu Felipe dos Santos Beranger">Secretária Municipal de Educação</option>
            <option value="Ionara Amélia Fernandes">Secretária Municipal de Meio Ambiente e Proteção Animal</option>
            <option value="Miriam Carrasco Benites da Silva">Secretária Municipal de Mobilidade Urbana</option>
            <option value="Marcelo Silvério">Secretário Adjunto de Assuntos Jurídicos</option>
            <option value="Claudemir de Menezes">Secretário Adjunto de Desenvolvimento Econômico e Inovação</option>
            <option value="Paulo Cardozo de Mello Boccuzzi">Secretário Adjunto de Esportes e Lazer</option>
            <option value="Eric Welson de Andrade">Secretário Adjunto de Gestão Pública</option>
            <option value="Rubens Pedro">Secretário Adjunto de Governo</option>
            <option value="Joaquim Lopes da Silva Junior">Secretário Adjunto de Infraestrutura Urbana</option>
            <option value="Felipe Monteiro de Almeida">Secretário Municipal de Agricultura e Abastecimento</option>
            <option value="Felipe Rocha Magalhães">Secretário Municipal de Assuntos Jurídicos</option>
            <option value="Gabriel Bastianelli">Secretário Municipal de Desenvolvimento Economico e Inovação</option>
            <option value="Gustavo Carvalho Nogueira">Secretário Municipal de Esportes e Lazer</option>
            <option value="Ricardo Abílio Rossi Cardoso">Secretário Municipal de Finanças</option>
            <option value="Jony M. R. Santos">Secretário Municipal de Gestão Pública</option>
            <option value="Carlos Lothar Kautza">Secretário Municipal de Habitação Social e Regularização Fundiária</option>
            <option value="Alessandro Silveira">Secretário Municipal de Infraestrutura Urbana</option>
            <option value="Marcos Torres">Secretário Municipal de Planejamento e Gestão Estratégica</option>
            <option value="William Harada">Secretário Municipal de Saúde</option>
            <option value="Augusto Cesar Barbosa">Secretário Municipal de Segurança</option>
            <option value="Marcos Torres">Secretário Municipal de Transparência e Dados Abertos</option>
            <option value="Claudio Marcelo de Faria Rodrigues">Secretário Municipal de Urbanismo</option>


          </Select>

          <Stack direction="row" flexWrap="wrap-reverse">
            <Stack
              flex={1}
              minWidth={270}
              direction="column"
              marginRight="20px"
              maxHeight={500}
              overflowY="auto"
            >
              <Heading
                mb={2}
                fontSize={accessibility?.fonts?.regular}
                color="text.dark"
              >
                {getDay} de {getMonth} de {getYear}
              </Heading>
              <Divider width="100%" height={"1px"} backgroundColor="red" />
              {!filteredValues || filteredValues?.length == 0 ? (
                <Heading
                  mb={2}
                  fontSize={accessibility?.fonts?.regular}
                  color="red"
                >
                  Nessa data não possui nada agendado!
                </Heading>
              ) : (
                filteredValues?.map((item: Meeting) => {
                  const timeWithSubtraction = moment(item?.data_compromisso);
                  const getHours = timeWithSubtraction
                    .format("HH:mm")
                    .split(":");

                  const timeWithSubtraction2 = moment(item?.fim_compromisso);
                  const getHours2 = timeWithSubtraction2
                    .format("HH:mm")
                    .split(":");

                  return (
                    <>
                      <Stack direction="column">
                        <Heading
                          mb={1}
                          fontSize={accessibility?.fonts?.medium}
                          color="red"
                          marginTop={2}
                        >
                          Hora Início: {getHours?.[0]}:{getHours?.[1]}{" "}
                          {item?.fim_compromisso
                            ? ` - Hora fim: ${getHours2?.[0]}:${getHours2?.[1]}`
                            : ""}
                        </Heading>
                        <Heading
                          fontSize={accessibility?.fonts?.medium}
                          color="text.dark"
                          style={{ margin: 0 }}
                        >
                          {item?.descricao_breve}
                        </Heading>
                        <Text
                          fontSize={accessibility?.fonts?.medium}
                          color="text.dark"
                          style={{ margin: 0 }}
                        >
                          {item?.local}
                        </Text>
                        <Text
                          fontSize={accessibility?.fonts?.medium}
                          color="text.dark"
                          style={{ margin: 0 }}
                        >
                            {selectedCargo === "Gabriel Bastianelli" 
          ? "Secretário Municipal de Desenvolvimento Econômico" 
          : item?.cargo}
                        </Text>
                        <Text
                          fontSize={accessibility?.fonts?.medium}
                          color="text.dark"
                          style={{ margin: 0 }}
                        >
                          {item?.nome}
                        </Text>

                        <>
                          {item?.detalhe ? (
                            <Accordion allowMultiple>
                              <AccordionItem>
                                <h2>
                                  <AccordionButton>
                                    <Heading
                                      mb={1}
                                      fontSize={
                                        accessibility?.fonts?.medium
                                      }
                                      color="red"
                                      marginTop={2}
                                    >
                                      Detalhes:
                                    </Heading>
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                  <Text
                                    fontSize={accessibility?.fonts?.medium}
                                    color="text.dark"
                                    style={{ margin: 0 }}
                                  >
                                    {item?.detalhe}
                                  </Text>
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion>
                          ) : null}
                        </>
                        <div style={{ marginTop: 8 }}></div>
                        <Divider
                          width="100%"
                          height={"1px"}
                          backgroundColor="#d7d7d7"
                        />
                      </Stack>
                    </>
                  );
                })
              )}
            </Stack>
            <Stack
              minW={300}
              maxW={isMobile ? "90%" : "100%"}
              direction="column"
              backgroundColor={useColorModeValue("white", "gray.800")}
              borderRadius={10}
              boxShadow="0px 1px 2px rgba(0, 0, 0, 0.3),
            0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
              maxH={350}
              style={{ marginBottom: 30 }}
            >
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                locale={ptBR}
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
