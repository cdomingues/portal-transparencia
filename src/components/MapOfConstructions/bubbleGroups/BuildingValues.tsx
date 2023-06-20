import * as Style from "./styles";
import * as Text from "../../../styles/text";
import Bubble from "../../Bubble";
import { useEffect, useMemo } from "react";
import colors from "../../../styles/colors";

const BuildingValues = ({ setConstructionSelected, filteredValues }: any) => {

  const translatorColor = (value: string) => {
    const translator: {[key:string]: string} = {
      '2006 - SANEAMENTO AMBIENTAL': colors.programColors.green,
      '2004 - INFRAESTRUTURA': colors.programColors.purple,
      '2000 - MOGI EFICIENTE': colors.programColors.pink,
      '3100 - SAÚDE': colors.programColors.blueLight,
      '3003 - ESPORTE': colors.programColors.red,
      '2007 - MOBILIDADE URBANA': colors.programColors.orange,
      '3004 - SEGURANÇA': colors.programColors.blue,
      '2001 - CIDADE INTELIGENTE': colors.programColors.greeLight,
      '1001 - PRIMEIROS PASSOS': colors.programColors.yellow,
    };

    return translator[value] ? translator[value] : colors.graySemiMedium;
  };

  const ONE_THOUSAND = 100000;
  const FIVE_THOUSAND = 500000;
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
        <Text.Heading4Bold>Obras até 500 Mil Reais</Text.Heading4Bold>
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
        <Text.Heading4Bold>Obras acima de 500 Mil Reais</Text.Heading4Bold>
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
        <Text.Heading4Bold>Obras acima de 1 Milhão de Reais</Text.Heading4Bold>
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
        <Text.Heading4Bold>Obras acima de 10 milhões</Text.Heading4Bold>
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
