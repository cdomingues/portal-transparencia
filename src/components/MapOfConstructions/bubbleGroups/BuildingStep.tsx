import * as Style from "./styles";
import * as Text from "../../../styles/text";
import Bubble from "../../Bubble";
import { useEffect, useMemo } from "react";
import colors from "../../../styles/colors";

const BuildingSteps = ({ setConstructionSelected, filteredValues }: any) => {

  const translatorSituationColor: any = {
    INICIADO: colors.primaryDefault,
    CONCLUÍDO: colors.green,
    RESCINDIDO: colors.red,
  };

  let buildingsStopped = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.situacao === "INICIADO")
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorSituationColor[item?.situacao],
          };
        }),
    [filteredValues]
  );

  let buildingsUnderConstruction = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.situacao === "RESCINDIDO")
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorSituationColor[item?.situacao],
          };
        }),
    [filteredValues]
  );

  let buildingsFinished = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.situacao === "CONCLUÍDO")
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorSituationColor[item?.situacao],
          };
        }),
    [filteredValues]
  );



  return (
    <Style.StepContainer>
      <div className="box-step">
        <Text.Heading4Bold>INICIADO</Text.Heading4Bold>
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
        <Text.Heading4Bold>RESCINDIDO</Text.Heading4Bold>
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
        <Text.Heading4Bold>CONCLUÍDO</Text.Heading4Bold>
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
 
    </Style.StepContainer>
  );
};

export default BuildingSteps;
