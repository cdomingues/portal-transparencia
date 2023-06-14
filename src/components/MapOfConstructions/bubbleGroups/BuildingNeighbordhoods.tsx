import * as Style from "./styles";
import * as Text from "../../../styles/text";
import Bubble from "../../Bubble";
import { useEffect, useMemo } from "react";
import colors from "../../../styles/colors";

const BuildingNeighbordhoods = ({ setConstructionSelected, filteredValues }: any) => {
    console.log('o que vem', filteredValues)
  const translatorColor = (value: string) => {
    const translator: { [key: string]: string } = {
      "2006 - SANEAMENTO AMBIENTAL": colors.randomColors.green,
      "2004 - INFRAESTRUTURA": colors.randomColors.blue,
      "2000 - MOGI EFICIENTE": colors.green,
      "3100 - SAÚDE": colors.randomColors.blueLight,
      "3003 - ESPORTE": colors.randomColors.orangeLight,
      "2007 - MOBILIDADE URBANA": colors.randomColors.red,
      "3004 - SEGURANÇA": colors.randomColors.yellow,
      "2001 - CIDADE INTELIGENTE": colors.black,
      "1001 - PRIMEIROS PASSOS": colors.grayDark,
    };

    return translator[value] ? translator[value] : colors.graySemiMedium;
  };

  let buildingsStopped = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.situacao === "INICIADO")
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
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
            color: translatorColor(item?.programa_ppa),
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
            color: translatorColor(item?.programa_ppa),
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

export default BuildingNeighbordhoods;
