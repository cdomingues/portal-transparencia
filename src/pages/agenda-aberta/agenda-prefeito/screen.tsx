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

type Meeting = {
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
};

export const contentMayorAgenda = {
  titlePage: "Agenda Aberta",
  description:
    "Conforme previsto na Lei Municipal n° 7.653/2021 e no Decreto n° 21.006/22, todo cidadão pode ter acesso à agenda de compromissos oficiais das autoridades do Executivo de Mogi das Cruzes. Esta é mais uma medida de promoção da integridade no setor público.",
};

function Screen({ handler }: PropsInput) {
  const [selected, setSelected] = useState<Date>();
  const [schedule, setSchedule] = useState<Array<Meeting>>([]);

  

  const handleGetOpenSchedule = async () => {
    const response = await fetch(
      "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=e6ee12e9-2fec-4d91-acac-36b36bd179c2&q=Caio%20Cunha",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
      }
    );

    const data = await response.json();

    if (!data) {
      return;
    }

    return setSchedule(data?.result?.records);
  };

  useEffect(() => {
    handleGetOpenSchedule();
  }, []);

  const filteredValues = schedule
  ?.filter((item: Meeting) => {
    // Linha modificada abaixo
    const timeWithSubtraction = moment(item?.data_compromisso).subtract(3, 'hours');
    return timeWithSubtraction.format("YYYY-MM-DD") === String(moment(selected).format("YYYY-MM-DD"));
  })
  // Uma linha depois para contexto
  .sort((a: Meeting, b: Meeting) => {
    // Linha modificada abaixo
    const aHours = moment(a?.data_compromisso).subtract(3, 'hours').format("HH:mm");
    // Linha modificada abaixo
    const bHours = moment(b?.data_compromisso).subtract(3, 'hours').format("HH:mm");
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
            AGENDA DO PREFEITO
          </Heading>

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
                  const timeWithSubtraction = moment(item?.data_compromisso).subtract(3, 'hours');
                  const getHours = timeWithSubtraction.format("HH:mm").split(":");
                  

                  return (
                    <>
                      <Stack direction="column">
                        <Heading
                          mb={1}
                          fontSize={accessibility?.fonts?.medium}
                          color="red"
                          marginTop={2}
                        >
                          {getHours?.[0]}:{getHours?.[1]}
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
              style={{ marginBottom: 30}}
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
