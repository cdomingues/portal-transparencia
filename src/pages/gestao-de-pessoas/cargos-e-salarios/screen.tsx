import {
  Divider,
  useDisclosure,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Text,
  Select,
  UnorderedList,
  ListItem,
  Link
} from "@chakra-ui/react";
import React, { useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";
import  {useFontSizeAccessibilityContext} from '../../../context/fontSizeAccessibility'
import { isMobile } from "react-device-detect";
import { FaDownload } from "react-icons/fa";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    year: number;
    years: Number[];
    setYear: any;
    handleByYear: any;
  };
};
export const contentContractsAndAtas = {
  titlePage: "Cargos e salários",
  description:"Conforme previsto no § 6º do Art. 39 da Constituição Federal, com a redação dada pela Emenda Constitucional nº 19/98, torna-se público a tabela de subsídios, salários e vencimentos dos cargos e empregos públicos, válida a partir de 1ª de março de 2023, em conformidade com o disposto na Lei nº 7.917, de 20 de abril de 2023.",
}
function Screen({
  handler: { columns, data, loading },
}: PropsInput) {
  const [contract, setContract] = useState<any>(null);
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const accessibility = useFontSizeAccessibilityContext()

  const handleOpenModal = (item: any) => {
    onOpen();
    setContract(item?.row?.values);
  };

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
    
      
        <Text maxW="45%" align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>
        <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>
                          <Link href="https://wwwtrans.mogidascruzes.sp.gov.br//docs/tabela_salarios_2023.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2023</ListItem ></div></Link>
                          <Link href="https://wwwtrans.mogidascruzes.sp.gov.br//docs/tabela_salarios_03-2022.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2022</ListItem ></div></Link>
                          <Link href="https://wwwtrans.mogidascruzes.sp.gov.br//docs/tabela-2020.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2020</ListItem ></div></Link>
                          <Link href="https://wwwtrans.mogidascruzes.sp.gov.br//docs/tabela-2019-v2.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2019</ListItem ></div></Link>
                          <Link href="https://wwwtrans.mogidascruzes.sp.gov.br//docs/tabela-2018-v2.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2018</ListItem ></div></Link>
                          <Link href="https://wwwtrans.mogidascruzes.sp.gov.br//docs/tabela_salarios_2017.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2017</ListItem ></div></Link>
                          <Link href="https://wwwtrans.mogidascruzes.sp.gov.br//docs/tabela_salarios_2016.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2016</ListItem ></div></Link>   
                          
                        </UnorderedList>
        </Text>
      

      
      
    
    

    <Divider borderWidth="2px" mt="10" mb="10" />
    
    </Box>
  </ContainerBasic>
  );
}

export default Screen;
