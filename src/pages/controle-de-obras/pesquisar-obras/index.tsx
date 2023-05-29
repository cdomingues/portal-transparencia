import { useEffect, useState } from "react";
import SearchBuildingsScreen from "./screen";
import request from "../../../utils/request";

const SearchBuildingsController = () => {
  const [file, setFile] = useState<any>();

  const getFileOfConstructions = async () => {
    const { data } = await request({
      baseURL:
        "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=2a3f2bc3-551b-434d-89c7-a31da90d7e1f",
    });
  
    if (!data) {
      return;
    }
    return setFile(data);
  };

  const [nameBuilding, setNameBuilding] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [buildingStep, setBuildingStep] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [arrayBuildings, setArrayBuildings] = useState<Array<any>>([]);

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
        item?.nome_da_obra
          ?.toLowerCase()
          ?.includes(nameBuilding?.toLowerCase()) &&
        item?.razao_social_contratada
          ?.toLowerCase()
          ?.includes(companyName?.toLowerCase()) &&
        item?.bairro?.toLowerCase()?.includes(neighborhood?.toLowerCase()) &&
        item?.situacao?.toLowerCase()?.includes(buildingStep?.toLowerCase()) &&
        item?.programa_ppa?.toLowerCase()?.includes(buildingType?.toLowerCase())
    );

    setPage(0);
    setArrayBuildings(filteredValues);
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage - 1);
  };

  const numberOfPages = Math.ceil(arrayBuildings?.length / rowsPerPage);

  useEffect(() => {
    getFileOfConstructions();
  }, []);

  useEffect(() => {
    setArrayBuildings(file?.result?.records);
  }, [file]);

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
