import * as Style from "./styles";
import * as Text from "../../../styles/text";
import Bubble from "../../Bubble";
import { useEffect, useMemo } from "react";
import colors from "../../../styles/colors";

const BuildingValues = ({ setConstructionSelected, filteredValues }: any) => {

  const translatorColor = (value: string) => {
    const translator: {[key:string]: string} = {
      '2006 - SANEAMENTO AMBIENTAL': colors.randomColors.green,
      '2004 - INFRAESTRUTURA': colors.randomColors.blue,
      '2000 - MOGI EFICIENTE': colors.green,
      '3100 - SAÚDE': colors.randomColors.blueLight,
      '3003 - ESPORTE': colors.randomColors.orangeLight,
      '2007 - MOBILIDADE URBANA': colors.randomColors.red,
      '3004 - SEGURANÇA': colors.randomColors.yellow,
      '2001 - CIDADE INTELIGENTE': colors.black,
      '1001 - PRIMEIROS PASSOS': colors.grayDark
    };

    return translator[value] ? translator[value] : colors.graySemiMedium;
  };

  const ONE_THOUSAND = 100000;
  const FIVE_THOUSAND = 100000;
  const ONE_MILLION = 1000000;
  const TEEN_MILLION = 10000000;

  let buildingsMoreOneThousand = useMemo(
    () =>
      filteredValues
        ?.filter(
          (item: any) =>
            Number(item.valor_contrato) > ONE_THOUSAND &&
            Number(item.valor_contrato) < FIVE_THOUSAND
        )
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsMoreFiveHundredThousand = useMemo(
    () =>
      filteredValues
        ?.filter(
          (item: any) =>
            Number(item.valor_contrato) > FIVE_THOUSAND &&
            Number(item.valor_contrato) < ONE_MILLION
        )
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsMoreThanOneMillion = useMemo(
    () =>
      filteredValues
        ?.filter(
          (item: any) =>
            Number(item.valor_contrato) > ONE_MILLION &&
            Number(item.valor_contrato) < TEEN_MILLION
        )
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsMoreThanTeenMillion = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => Number(item.valor_contrato) > TEEN_MILLION)
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  useEffect(() => {}, [filteredValues]);
  return (
    <Style.StepContainer>
      <div className="box-step">
        <Text.Heading4Bold>+ 100 mil</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsMoreOneThousand?.length !== 0 && (
            <Bubble
              buildingsData={buildingsMoreOneThousand}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-one-more-thousand"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>+ 500 mil</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsMoreFiveHundredThousand?.length !== 0 && (
            <Bubble
              buildingsData={buildingsMoreFiveHundredThousand}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-five-thousand"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>+ 1 milhão</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsMoreThanOneMillion?.length !== 0 && (
            <Bubble
              buildingsData={buildingsMoreThanOneMillion}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-one-million"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>+ 10 milhões</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsMoreThanTeenMillion?.length !== 0 && (
            <Bubble
              buildingsData={buildingsMoreThanTeenMillion}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-five-million"
            />
          )}
        </div>
      </div>
    </Style.StepContainer>
  );
};

export default BuildingValues;
