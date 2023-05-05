import * as Style from "./styles";
import * as Text from "../../../styles/text";
import Bubble from "../../Bubble";
import { useEffect, useMemo } from "react";
import colors from "../../../styles/colors";

const BuildingValues = ({ setConstructionSelected, filteredValues }: any) => {
  const translatorColor: any = {
    Escuelas: colors.randomColors.blue,
    "Espacio Público": colors.green,
    Vivienda: colors.red,
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
            Number(item.Valor_inicial) > ONE_THOUSAND &&
            Number(item.Valor_inicial) < FIVE_THOUSAND
        )
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor[item?.Categoria],
          };
        }),
    [filteredValues]
  );

  let buildingsMoreFiveHundredThousand = useMemo(
    () =>
      filteredValues
        ?.filter(
          (item: any) =>
            Number(item.Valor_inicial) > FIVE_THOUSAND &&
            Number(item.Valor_inicial) < ONE_MILLION
        )
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor[item?.Categoria],
          };
        }),
    [filteredValues]
  );

  let buildingsMoreThanOneMillion = useMemo(
    () =>
      filteredValues
        ?.filter(
          (item: any) =>
            Number(item.Valor_inicial) > ONE_MILLION &&
            Number(item.Valor_inicial) < TEEN_MILLION
        )
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor[item?.Categoria],
          };
        }),
    [filteredValues]
  );

  let buildingsMoreThanTeenMillion = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => Number(item.Valor_inicial) > TEEN_MILLION)
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor[item?.Categoria],
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
