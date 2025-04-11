import {
  Button,
  Divider,
  Select,
  Stack,
  Text,
  useDisclosure,
  Box,
  useColorModeValue
} from "@chakra-ui/react";
import React, { useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";
import ModalContracts from "./modalContracts";
import { ContainerSearch } from "../../../styles/components/contratos-atas/styles";
import PaginationComponent from "../../../components/PaginationComponent";

import CsvDownload from "react-json-to-csv";
import colors from "../../../styles/colors";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    year: number;
    years: Number[];
    setYear: any;
    handleByYear: any;
    data2: Array<any>;
    setData2: any;
    arquivosColumns: TableColumns;
    
  };
};
export const contentContractsAndAtas = {
  titlePage: "Convênios",
  description:
    "A divulgação da lista de Convênios e Transferências repasses realizados pela Prefeitura de Mogi das Cruzes é uma medida fundamental cujo propósito é reforçar a transparência das finanças municipais e promover a responsabilidade fiscal. ",
};
function Screen({
  handler: { columns, data, loading, handleByYear, setYear, year, years,data2, setData2,arquivosColumns },
}: PropsInput) {
  const [contract, setContract] = useState<any>(null);
  const title = contentContractsAndAtas?.titlePage;
  const description = contentContractsAndAtas?.description;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConvenios = data.filter((item)=>
    item.id_contrato.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.fornecedor.toLowerCase().includes(searchTerm.toLowerCase())
)



  
  const exportToJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
  
    link.setAttribute("href", url);
    link.setAttribute("download", "dados_contratos.json");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  const { isOpen, onOpen, onClose } = useDisclosure();

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
       <ContainerSearch  >
          <Stack minW={86} width="50%" flexDir='row'
          sx={{
            "@media (max-width: 900px)": {
              flexDir:'column'
            },
          }}
          >
           
<Button
  width="180px"
  border="0"
  cursor="pointer"
  fontSize="20px"
  textColor="white"
  bgColor={colors.primaryDefault40p}
  _hover={{ bgColor: colors.primaryDefault80p }}
  height="40px"
  borderRadius="8px"
  mr="15px"
  transition="background-color 0.3s ease"
  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
  
>
  <CsvDownload
    filename={"dados_convenios.csv"}
    data={filteredConvenios}
    style={{
      width: "100%",
      height: "100%",
      background: "none",
      border: "none",
      color: "white",
      fontSize: "20px",
      textAlign: "center",
      cursor: "pointer",
    }}
  >
    CSV
  </CsvDownload>
</Button>

<Button width='180px' border='0' cursor='pointer' fontSize='20px' textColor='white' 
    bgColor={colors.primaryDefault40p}
    _hover={{
      bgColor: colors.primaryDefault80p,  // Cor de fundo ao passar o mouse
    }}
    height='40px' borderRadius='8px' mr='15px'onClick={() => exportToJSON(filteredConvenios)}
    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
    
    >JSON</Button>
   


          </Stack>
          <Stack minW={50} justifyContent="flex-end" className="button-search"></Stack>
        </ContainerSearch>

      <Divider borderWidth="2px" mt="10" mb="10" />
      
      {filteredConvenios.map((row) => (
               <Box
                 key={row.id_contrato}
                 border="2px solid transparent"
                  p="12px"
                  borderRadius="16px"
                  mb="12px"
                  bg={useColorModeValue("white", "black")}
                  boxShadow="lg"
                  transition="0.3s"
                  _hover={{
                    boxShadow: "xl",
                    transform: "scale(1.01)",
                    border: `2px solid ${colors.primaryDefault40p}`,
                  }}
                  cursor="pointer"
                  onClick={() => window.location.href = `detalhes?${row.id_contrato}`}
                      
                      >
                 
                 <Text fontWeight="bold" borderBottom={`1.5px solid ${colors.primaryDefault40p} `}>{row.id_contrato}</Text>
                 <Text>Empresa contratada: {row.fornecedor}</Text>
                 <Text>Data Início: {row.data_inicio} - Data Fim: {row.data_termino}</Text>
                 <Text>Descrição: {row.descricao}</Text>
                
               </Box>
             ))}
      </Box>
    </ContainerBasic>
  );
}

export default Screen;