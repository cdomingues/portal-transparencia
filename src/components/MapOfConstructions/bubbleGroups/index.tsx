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
    const response = await fetch("https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=2a3f2bc3-551b-434d-89c7-a31da90d7e1f", {
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g"
      }
    });
    
    const data = await response.json();
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
