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
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ptBR } from "date-fns/locale";
import moment from "moment";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import { isMobile } from "react-device-detect";
//import Video from "../../../components/Videos";

type PropsInput = {
  handler: any;
};

type Meeting = {
  nome: string;
  _id: number;
  id: string;
  created_at: string;
  updated_at: string;
  tipo_compromisso: null | string;
  data_compromisso: string;
  descricao_breve: string;
  local: string;
  detalhe: string;
  pessoa: string;
  cargo: string;
  rank: number;
  fim_compromisso: string;
};

export const contentMayorAgenda = {
  titlePage: "Agenda Aberta",
  description:
    "Conforme previsto na Lei Municipal n° 7.653/2021 e no Decreto n° 21.006/22, todo cidadão pode ter acesso à agenda de compromissos oficiais das autoridades do Executivo de Mogi das Cruzes. Esta é mais uma medida de promoção da integridade no setor público.",
};

function Screen({ handler }: PropsInput) {
  const [selected, setSelected] = useState<Date>();
  const [schedule, setSchedule] = useState<Array<Meeting>>([]);

  useEffect(() => {
    // Função para buscar os dados das duas APIs e combinar os resultados
    const fetchSchedules = async () => {
      try {
        const [data1, data2] = await Promise.all([
          fetch('https://dadosadm.mogidascruzes.sp.gov.br/api/pessoas/99c579da-595e-439f-a105-e59ef3cd4e1a/').then(response => response.json()),
          fetch('https://dadosadm.mogidascruzes.sp.gov.br/api/pessoas/d22ba2d3-d29f-4104-973c-341074bf1149/').then(response => response.json()),
        ]);

        // Combinando os resultados das duas APIs
        const combinedSchedule = [
          ...data1.agenda_set,
          ...data2.agenda_set,
        ];
        
        setSchedule(combinedSchedule);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchSchedules();
  }, []); 

  const filteredValues = schedule
    ?.filter((item: Meeting) => {
      const timeWithSubtraction = moment(item?.data_compromisso);
      const isSameDate = timeWithSubtraction.format("YYYY-MM-DD") === String(moment(selected).format("YYYY-MM-DD"));
      const isNotFutureDate = timeWithSubtraction.isSameOrBefore(moment(), 'day');
      return isSameDate && isNotFutureDate;
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
  const url_video = "https://www.youtube.com/embed/K7_TUkedcGA?si=iPxaKODtZnboQT-_";
  const titulo = "O QUE SÃO AS SEIS MEDIDAS?"; 

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
            AGENDA DO CHEFE DE GABINETE 
          </Heading>

          <Text
            fontSize={accessibility?.fonts?.large}
            color="text.dark"
            style={{ margin: 0 }}
          >
           
          </Text>

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
                filteredValues?.map((item: Meeting, index: any) => {
                  const timeWithSubtraction = moment(item?.data_compromisso);
                  const getHours = timeWithSubtraction.format("HH:mm").split(":");

                  const timeWithSubtraction2 = moment(item?.fim_compromisso);
                  const getHours2 = timeWithSubtraction2.format("HH:mm").split(":");

                  return (
                    <>
                      <Stack direction="column">
                        <Heading
                          mb={1}
                          fontSize={accessibility?.fonts?.medium}
                          color="red"
                          marginTop={2}
                        >
                         Hora Início: {getHours?.[0]}:{getHours?.[1]} {item?.fim_compromisso ? ` - Hora fim: ${getHours2?.[0]}:${getHours2?.[1]}` : ''}
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
                                      fontSize={accessibility?.fonts?.medium}
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
                footer={null}
                locale={ptBR}
                fromYear={2023}
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
