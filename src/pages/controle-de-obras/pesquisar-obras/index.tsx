import { useState } from "react";
import SearchBuildingsScreen from "./screen";
import { useFileCSVContext } from "../../../context/fileCsv";

const SearchBuildingsController = () => {
  const file = useFileCSVContext();
  const [nameBuilding, setNameBuilding] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [buildingStep, setBuildingStep] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [arrayBuildings, setArrayBuildings] = useState<Array<any>>(
    file?.result?.records
  );

  const handleChangeSelectNeighborhood = (event: any) => {
    setNeighborhood(event.target.value as string);
  };

  const handleChangeSelectBuildingStep = (event: any) => {
    setBuildingStep(event.target.value as string);
  };

  const handleChangeSelectBuildingType = (event: any) => {
    setBuildingType(event.target.value as string);
  };

  const handleFilterBuildings = () => {
    let filteredValues = file?.result?.records?.filter(
      (item: any) =>
        item?.Nome?.toLowerCase()?.includes(nameBuilding?.toLowerCase()) &&
        item?.empresa_contratada
          ?.toLowerCase()
          ?.includes(companyName?.toLowerCase()) &&
        item?.bairro?.toLowerCase()?.includes(neighborhood?.toLowerCase()) &&
        item?.Status?.toLowerCase()?.includes(buildingStep?.toLowerCase()) &&
        item?.Categoria?.toLowerCase()?.includes(buildingType?.toLowerCase())
    );

    setPage(0);
    setArrayBuildings(filteredValues);
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage - 1);
  };

  const numberOfPages = Math.ceil(arrayBuildings.length / rowsPerPage);

  const handlers: any = {
    arrayBuildings,
    nameBuilding,
    setNameBuilding,
    companyName,
    setCompanyName,
    handleChangeSelectNeighborhood,
    neighborhood,
    handleChangeSelectBuildingStep,
    buildingStep,
    handleChangeSelectBuildingType,
    buildingType,
    handleFilterBuildings,
    page,
    rowsPerPage,
    numberOfPages,
    handleChangePage,
  };

  return <SearchBuildingsScreen handlers={handlers} />;
};

export default SearchBuildingsController;
