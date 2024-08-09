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
  description:"Conforme previsto no § 6º do Art. 39 da Constituição Federal, com a redação dada pela Emenda Constitucional nº 19/98, torna-se pública a tabela de subsídios, salários e vencimentos dos cargos e empregos públicos, válida a partir de 1ª de março de 2024, em conformidade com o disposto na Lei nº 8.088, de 24 de abril de 2024.",
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
    
      
        <Text align= {"justify" }
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>
        <UnorderedList listStyleType="none" 
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}>

                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/af3a4bf2-2fbf-4a37-a8a1-5bfc2a055bc6/tabela_salarios_2024.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2024</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/c262fe95-1b02-4026-a25e-de93868327e3/tabela-2024.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2024</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/d727dfa3-5a56-4020-9da8-c5d4de95f581/tabela_salarios_2023.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2023</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/34efc664-64da-49cb-923d-49e6e23a0659/tabela_salarios_03-2022.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2022</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/c14272ec-c691-446b-9b70-a54d63bcd9a8/tabela-2021.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2021</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/d4c6b711-818c-4067-a94f-05e1a9570a17/tabela-2020.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2020</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/126fd09b-7a9a-4616-80b3-f20c0cdd8bd4/tabela-2019-v2.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2019</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/64e0e802-8883-4007-9634-f40dc9712067/tabela-2018-v2.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2018</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/6d547ce2-49e1-4767-b939-84888564ecd5/tabela_salarios_2017.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2017</ListItem ></div></Link>
                          <Link href="https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/b7363925-e6a4-45ce-8a62-ee70b0fad128/tabela_salarios_2016.pdf" target="_blank"><div style={{ display: 'flex', alignItems: 'center' }}> <FaDownload style={{ marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' }} /> <ListItem className="list-group-item"  pb={2}>  Tabela de vencimentos, salários e subsídios 2016</ListItem ></div></Link>   
                          
                        </UnorderedList>
        </Text>
      

      
      
    
    

    <Divider borderWidth="2px" mt="10" mb="10" />
    
    </Box>
  </ContainerBasic>
  );
}

export default Screen;
