import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Icon,
  Link,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import Chart from "../../../components/Chart"
import ContainerBasic from "../../../components/Container/Basic";
import  {useFontSizeAccessibilityContext} from '../../../context/fontSizeAccessibility'
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../components/Table";
import { AiOutlineDownload } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

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
  titlePage: "Convênios e Transferências Recebidos",
  description: "Divulgação da lista de Convênios e Transferências recebidos pela Prefeitura de Mogi das Cruzes é uma medida fundamental cujo propósito é reforçar a transparência das finanças municipais e promover a responsabilidade fiscal.",
}

function Screen({
  handler: {
    columns,
    data,
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

  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
  };
  const accessibility = useFontSizeAccessibilityContext()

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
      <Stack direction="row">
        <Stack minW={86} width="25%">
          
        </Stack>
        <Stack minW={50} width="10%" justifyContent="flex-end">
        <Box display="flex" alignContent="center" flexDirection={isMobile ?  "column" : "column"}>
      
      
        </Box>
        
    

          
         
        
       
      
        </Stack>
        
      </Stack>
      
      <Divider borderWidth="2px" mt="10" mb="10" />
      <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>

                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/85f445d0-4a89-48b4-89a4-1acaabb536d6/Cronologica_jan_23.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}> Cronológica Janeiro de 2023</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/0c9e235a-0a42-447b-b15a-e866566627d3/Cronologica_Fev_2023.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Cronológica Fevereiro de 2023</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/ebc802ae-cad3-4eae-a86a-be925af16846/cronologica_marco_2023.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Cronológica Março de 2023</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/c256018c-b2ed-4349-a49a-e0e468eaae56/Cronologica_Abril_2023.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Cronológica Abril de 2023</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/f1d85288-1607-459b-8f1c-74c5ec2c5707/Cronologica_maio_23.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Cronológica Maio de 2023</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/157dabe2-5b9d-4905-b22d-1ce77d7b09df/Cronologica_Junho_2023.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Cronológica Junho de 2023</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/cf9db2be-8e8a-4f8c-8727-38f68fce00e3/Cronologica_Julho_2023.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Cronológica Julho de 2023</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/47c686ab-20e7-4ec3-8e25-c6d60a9bf1a3/Cronologica_Agosto_2023.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Cronológica Agosto de 2023</ListItem ></div></Link>
                          
                          
                        </UnorderedList>
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
