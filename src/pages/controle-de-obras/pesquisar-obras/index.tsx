import { useEffect, useState } from "react";
import SearchBuildingsScreen from "./screen";


const SearchBuildingsController = () => {
  const [file, setFile] = useState<any>();



 

  const getFileOfConstructions = async () => {
    const response = await fetch(
      //"http://192.168.1.118/api/3/action/datastore_search?resource_id=03146785-57db-4207-8924-85c492e8b9a8",
      "http://192.168.1.118/api/3/action/datastore_search?resource_id=40d91f19-c371-4aaa-b6ba-7fd2427df05c",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
      }
    );

    const data = await response.json();
    
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
        item?.bairro_desc?.toLowerCase()?.includes(neighborhood?.toLowerCase()) &&
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