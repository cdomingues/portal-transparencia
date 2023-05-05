import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import axios from "axios";
import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ptBR } from "date-fns/locale";
import moment from "moment";
import { baseUrl } from "../../../config";
import { getScheduleMayor } from "../../../calls/agenda/agenda";

type PropsInput = {
  handler: any;
};

type Meeting = {
  data: string;
  hora_inicio: string;
  hora_termino: string;
  id: string;
  local: string;
  nome: string;
  rank: number;
  _id: number;
  Detalhes: string;
};

function Screen({ handler }: PropsInput) {
  const [selected, setSelected] = useState<Date>();
  const [schedule, setSchedule] = useState<Array<Meeting>>([]);

  const handleGetOpenSchedule = async () => {
    const { data } = await axios.get(
      "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=abf2e6db-bd7d-49de-a504-483eb95cb744&q=Claudio"
    );

    if (!data) {
      return;
    }

    return setSchedule(data?.result?.records);
  };

  useEffect(() => {
    handleGetOpenSchedule();
  }, []);

  const filteredValues = schedule?.filter(
    (item: Meeting) =>
      item?.data === String(moment(selected).format("YYYY-MM-DDTHH:mm:ss"))
  );

  const title = "Agenda Aberta";
  const description =
    "Conforme previsto na Lei Municipal 7.653/2021 e no Decreto 21.006/22, todo cidadão pode ter acesso à agenda de compromissos oficiais das autoridades do Executivo de Mogi das Cruzes. Esta é mais uma medida de promoção da integridade no setor público.";

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

  return (
    <ContainerBasic title={title} description={description}>
      <Stack direction="column">
        <Heading mb={2} fontSize="2xl" color="text.dark">
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
            <Heading mb={2} fontSize="1xl" color="text.dark">
              {getDay} de {getMonth} de {getYear}
            </Heading>
            <Divider width="100%" height={"1px"} backgroundColor="red" />
            {!filteredValues || filteredValues.length == 0 ? (
              <Heading mb={2} fontSize="1xl" color="red">
                Nessa data não possui nada agendado!
              </Heading>
            ) : (
              filteredValues?.map((item: Meeting, index: any) => {
                let getHours = item?.hora_inicio?.split(":");

                return (
                  <>
                    <Stack direction="column">
                      <Heading
                        mb={1}
                        fontSize="small"
                        color="red"
                        marginTop={2}
                      >
                        {getHours?.[0]}:{getHours?.[1]}
                      </Heading>
                      <Heading
                        fontSize="small"
                        color="text.dark"
                        style={{ margin: 0 }}
                      >
                        {item?.Detalhes}
                      </Heading>
                      <Text
                        fontSize="small"
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
            minW={350}
            direction="column"
            backgroundColor="white"
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
    </ContainerBasic>
  );
}

export default Screen;
