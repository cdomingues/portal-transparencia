import * as Style from "./styles";
import * as Text from "../../../styles/text";
import Bubble from "../../Bubble";
import { useEffect, useMemo } from "react";
import colors from "../../../styles/colors";

const BuildingSteps = ({ setConstructionSelected, filteredValues }: any) => {
  const translatorColor: any = {
    Escuelas: colors.randomColors.blue,
    "Espacio Público": colors.green,
    Vivienda: colors.red,
  };

  let buildingsStopped = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.Status === "Parada")
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor[item?.Categoria],
          };
        }),
    [filteredValues]
  );

  let buildingsUnderConstruction = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.Status === "Em Construção")
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor[item?.Categoria],
          };
        }),
    [filteredValues]
  );

  let buildingsFinished = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.Status === "Finalizada")
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor[item?.Categoria],
          };
        }),
    [filteredValues]
  );

  let buildingsOpened = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.Status === "Aberto")
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
        <Text.Heading4Bold>Parada</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsStopped?.length !== 0 && (
            <Bubble
              buildingsData={buildingsStopped}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-stopped"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>Em construção</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsUnderConstruction?.length !== 0 && (
            <Bubble
              buildingsData={buildingsUnderConstruction}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-under-construction"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>Finalizada</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsFinished?.length !== 0 && (
            <Bubble
              buildingsData={buildingsFinished}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-finished"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>Abertura de ofertas</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsOpened?.length !== 0 && (
            <Bubble
              buildingsData={buildingsOpened}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-opened"
            />
          )}
        </div>
      </div>
    </Style.StepContainer>
  );
};

export default BuildingSteps;
