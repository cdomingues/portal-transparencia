
import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";
import Chart from "../../../components/Chart";
import ContainerBasic from "../../../components/Container/Basic";
import {
  GraphWrapper,
  MultipleGraphWrapper,
} from "../../../components/GraphWrapper";
import { MultiAxisChart } from "../../../components/MultiAxisChart";
import TableComponent, { TableColumns } from "../../../components/Table";
//import Video from "../../../components/Videos";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  
  };
};
const link_externo = <Link href='http://leismunicipa.is/0qsku' target="blank" style={{ color: "#db334f" }}> 
            
            Decreto Municipal nº 15.136/2015
 
</Link>
export const contentAdvertisements = {
  titlePage: "Diárias",
  description: <>Informações sobre o nome e o cargo/função do beneficiário, além do número de diárias usufruídas por afastamento, período de afastamento, motivo do afastamento e local de destino, em conformidade com a relação de valores padrão de diárias dentro do Estado, fora do Estado e fora do país, prevista no  {link_externo}
  </>
}

function Screen({
  handler: {
    columns,
    data,
    loading,
   
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

  const url_video = "https://www.youtube.com/embed/oxEi5mS-Mrg";
  const titulo = "O QUE SÃO AS SEIS MEDIDAS?"; 

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
      <TableComponent loading={loading} columns={columns} data={data} />
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
