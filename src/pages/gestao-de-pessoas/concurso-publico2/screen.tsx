import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import Chart from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../components/Table";
import concursos_dataset from '../../../../data/concursos.json';
import {Concurso} from '../../../types'; 
import ConcursoCard from '../../../components/CardConcursos'; 


type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    chart: any;
    chartYear: any;
    years: Number[];
    setYear: any;
    year: number;
    handleByYear: any;
  };
};

export const contentAdvertisements = {
  titlePage: "Concurso Público",
  description: "Informações sobre os atos dos concursos públicos e processos seletivos: vagas efetivamente preenchidas, lista de aprovados com as classificações, fila de espera/cadastro reserva e validade do concurso.",
}

function Screen({
  
  handler: {
    columns,
    
    loading,
    chart,
    chartYear,
    setYear,
    year,
    years,
    handleByYear,
  },
}: PropsInput) {
  const title = contentAdvertisements?.titlePage;
  const description = contentAdvertisements?.description;
  const [data, setData] = useState<Concurso[]>([]);

  useEffect(() => {
    // Caminho para o seu arquivo JSON local
    const jsonFilePath = '../../../../data/concursos.json';

    // Fetch dos dados do arquivo JSON
    fetch(jsonFilePath)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Erro ao carregar dados:', error));
  }, []);


  return (
    <ContainerBasic title={title} description={description}>
   
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
      
     

      <Divider borderWidth="2px" mt="10" mb="10" />

      <div>
      <h1>Concursos</h1>
      
      {data.map((concurso, index) => (  
        <ConcursoCard key={index} {...concurso} />
      ))}
    </div>
      
      
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
