import React, { useEffect, useMemo, useState } from "react";
import * as Style from "./styles";
import BuildingSteps from "./BuildingStep";
import BuildingValues from "./BuildingValues";
import axios from "axios";

const BubbleGroups = ({
  viewOption,
  setConstructionSelected,
  nameOrDescriptionConstruction,
  directionConstruction,
}: any) => {
  const [file, setFile] = useState<any>();

  const getFileOfConstructions = async () => {
    const { data } = await axios.get(
      `https://dados.mogidascruzes.sp.gov.br//api/3/action/datastore_search?resource_id=c23921f1-9d90-44b1-b710-02233f9d47c5`
    );

    if (!data) {
      return;
    }
    return setFile(data);
  };

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

  useEffect(() => {
    getFileOfConstructions();
  }, []);

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
