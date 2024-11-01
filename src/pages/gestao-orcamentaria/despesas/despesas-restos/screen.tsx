import { Button, Divider, Select, Stack, Text, Box, useColorModeValue, UnorderedList, Link, ListItem } from "@chakra-ui/react";
import React from "react";
import Chart from "../../../../components/Chart";
import ContainerBasic from "../../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../../components/Table";
import { FaDownload } from "react-icons/fa";
import { useFontSizeAccessibilityContext } from "../../../../context/fontSizeAccessibility";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    chart: any;
    years: Number[];
    setYear: any;
    year: number;
    handleByYear: any;
  };
};

export const contentExpensesRemains = {
  titlePage: "Despesas - Restos a pagar",
  description: "Os restos a pagar são as despesas com compromisso de serem utilizadas dentro do orçamento, mas que não foram pagas até o final do exercício. Confira aqui as informações sobre as despesas empenhadas, liquidadas e pagas relativas a essa natureza. ",
}

function Screen({
  handler: {
    columns,
    data,
    loading,
    chart,
    setYear,
    year,
    years,
    handleByYear,
  },
}: PropsInput) {
  const title = contentExpensesRemains?.titlePage;
  const description = contentExpensesRemains?.description;
  const accessibility = useFontSizeAccessibilityContext();
  return (
    <ContainerBasic title={title} description={description}>
       <Box
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          
          padding={"15px"}
          rounded="md"
          overflow="hidden"
          maxWidth="100%"
          borderRadius="18px"
          marginBottom="15px"
        >
    
      </Box>
      
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
         
          <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>

                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/5d885797-2dbf-4265-839e-e8cb4b1e2360/Restos_a_Pagar_-_2021.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>Restos a pagar 2021</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/94fc544e-0fc8-48f9-927a-fabcccbf4249/Restos_a_Pagar_-_2022.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>Restos a pagar 2022</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/3c8a1018-ae2a-4ac9-8183-a55c725cc456/Restos_a_Pagar_-_2023.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>Restos a pagar 2023</ListItem ></div></Link>
                          
                        </UnorderedList>

    
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
