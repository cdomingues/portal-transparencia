import React, { useEffect, useMemo } from "react";
import * as Style from "./styles";
import BuildingSteps from "./BuildingStep";
import BuildingValues from "./BuildingValues";
import { useFileCSVContext } from "../../../context/fileCsv";

const BubbleGroups = ({
  viewOption,
  setConstructionSelected,
  nameOrDescriptionConstruction,
  directionConstruction,
}: any) => {
  const file = useFileCSVContext();

  const filteredNameValues = useMemo(
    () =>
      file?.result?.records.filter((item: any) =>
        item?.endereco
          ?.toLowerCase()
          .includes(nameOrDescriptionConstruction.toLowerCase())
      ),
    [nameOrDescriptionConstruction]
  );

  const filteredDescriptionValues = useMemo(
    () =>
      file?.result?.records.filter((item: any) =>
        item?.endereco
          ?.toLowerCase()
          .includes(nameOrDescriptionConstruction.toLowerCase())
      ),
    [nameOrDescriptionConstruction]
  );

  const filteredDirectionValues = useMemo(
    () =>
      file?.result?.records.filter((item: any) =>
        item?.endereco
          ?.toLowerCase()
          .includes(directionConstruction.toLowerCase())
      ),
    [directionConstruction]
  );

  const filteredValues =
    filteredNameValues ||
    filteredDescriptionValues ||
    filteredDirectionValues ||
    file?.result?.records;

  useEffect(() => {}, [filteredValues]);

  const translator: any = {
    neighborhood: (
      <BuildingSteps
        setConstructionSelected={setConstructionSelected}
        filteredValues={filteredValues}
      />
    ),
    values: (
      <BuildingValues
        setConstructionSelected={setConstructionSelected}
        filteredValues={filteredValues}
      />
    ),
    steps: (
      <BuildingSteps
        setConstructionSelected={setConstructionSelected}
        filteredValues={filteredValues}
      />
    ),
    highlights: (
      <BuildingSteps
        setConstructionSelected={setConstructionSelected}
        filteredValues={filteredValues}
      />
    ),
  };

  return (
    <Style.BubbleGroups>
      <div className="content">{translator[viewOption]}</div>
    </Style.BubbleGroups>
  );
};

export default BubbleGroups;
