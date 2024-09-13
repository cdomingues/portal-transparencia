import React, { useState } from "react";
import ContainerBasic from "../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../components/Table";
import { Box, Button, Link, useColorModeValue, Text, Select, Stack, Icon} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import  {useFontSizeAccessibilityContext} from '../../context/fontSizeAccessibility';
import colors from "../../styles/colors";
import ButtonDownload from "../../components/Button_download";
import { AiOutlineDownload } from "react-icons/ai";
import HTMLReactParser from "html-react-parser";

const filesDownload =[
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/bf2b0511-b258-446e-b5c0-5c4e5ab84eb9/patrimonio_1990-1998.csv", "titulo": "Lista patrimonio 1990 - 1998"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/81189d3c-a47e-413a-8fe9-c238cfdbca77/patrimonio_1999.csv", "titulo": "Lista patrimonio 1999"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/abca25d4-6707-4568-874b-45e8c601a175/patrimonio_2000.csv", "titulo": "Lista patrimonio 2000"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/84ddfc96-9115-44e1-aeb5-b8089858ac0f/patrimonio_2001.csv", "titulo": "Lista patrimonio 2001"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/371e1d38-82ee-4c01-93d6-7927dd3c940a/patrimonio_2002.csv", "titulo": "Lista patrimonio 2002"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/09d809e6-86e1-4243-83c5-d4183bffa7cf/patrimonio_2003.csv", "titulo": "Lista patrimonio 2003"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/ad83c9c4-e09d-49bf-8de3-f09d6e268b99/patrimonio_2004.csv", "titulo": "Lista patrimonio 2004"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/bfb69ef7-3225-4364-a384-6411acc01db6/patrimonio_2005.csv", "titulo": "Lista patrimonio 2005"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/a5e00ed7-0bbd-429e-900b-efa91e894588/patrimonio_2006.csv", "titulo": "Lista patrimonio 2006"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/1176d430-7608-471e-8fd6-94ccc6596ba3/patrimonio_2007.csv", "titulo": "Lista patrimonio 2007"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/665addce-d8c5-4d50-af9a-995a1f61761d/patrimonio_2008.csv", "titulo": "Lista patrimonio 2008"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/5778109a-db6d-4fd5-a3a9-0312ccb70bca/patrimonio_2009.csv", "titulo": "Lista patrimonio 2009"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/372a3636-ba45-49a3-aab1-efb209836403/patrimonio_2010.csv", "titulo": "Lista patrimonio 2010"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/aad670f9-60d9-458a-8e27-7e0dbc343f89/patrimonio_2011.csv", "titulo": "Lista patrimonio 2011"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/c4ee906b-ca9b-476e-a97e-426cebcf90fb/patrimonio_2012.csv", "titulo": "Lista patrimonio 2012"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/b599f184-dcc8-44a1-9b6c-a4e85c683196/patrimonio_2013.csv", "titulo": "Lista patrimonio 2013"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/70773408-4928-491a-8564-7747b6e23e65/patrimonio_2014.csv", "titulo": "Lista patrimonio 2014"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/95905149-4286-4dab-adc8-4e1af85e2e4b/patrimonio_2015.csv", "titulo": "Lista patrimonio 2015"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/e3c69254-b8cb-4099-8598-68586dfc945c/patrimonio_2016.csv", "titulo": "Lista patrimonio 2016"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/1a23626e-48c2-4e4e-b489-5cb1bb8bb821/patrimonio_2017.csv", "titulo": "Lista patrimonio 2017"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/205943ac-9159-4a68-b4dd-5b4bc6a1247c/patrimonio_2018.csv", "titulo": "Lista patrimonio 2018"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/97d0144f-3e3e-4b20-b6c0-6e41bbfd20de/patrimonio_2019.csv", "titulo": "Lista patrimonio 2019"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/c9ab3528-97e3-411c-be59-67a396836c32/patrimonio_2020.csv", "titulo": "Lista patrimonio 2020"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/41c13b2a-9057-43a2-aeef-9af362b0ed06/patrimonio_2021.csv", "titulo": "Lista patrimonio 2021"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/4e4823b7-9ea0-467d-945d-ee3dc0e435a8/patrimonio_2022.csv", "titulo": "Lista patrimonio 2022"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/9a9484c5-b0ac-4ff0-ab45-9cb88e5e55f3/patrimonio_2023.csv", "titulo": "Lista patrimonio 2023"},
  {"url": "https://dadosadm.mogidascruzes.sp.gov.br/media/arquivos/2ea524ce-8dc9-474b-9f9b-97ac7c02cdec/patrimonio_2024.csv", "titulo": "Lista patrimonio 2024"}
]

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};
export const contentPatrimony = {
  titlePage:  "Patrimônio",
  description: "Confira aqui as informações sobre o Patrimônio Mobiliário da Prefeitura de Mogi das Cruzes",
}
function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = contentPatrimony?.titlePage;
  const description = contentPatrimony?.description;
  const accessibility = useFontSizeAccessibilityContext()
  const [titleFile,setTitleFile] = useState<string>('')
  
  const selectedFileDownlaod = filesDownload.find(
    (info) => info.titulo === titleFile
  );
    

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
       
      <TableComponent loading={loading} columns={columns} data={data} />

      <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mt="5px"
              >Base de dados com itens registrados a partir de 01/01/2023. <br/>Para acessar anos anteriores selecione a lista de Patrimônio referente a cada ano para download:</Text>

      <Text
                align={isMobile ? "justify" : "left"}
                color="gray.500"
                fontSize={accessibility?.fonts?.regular}
                mt="5px"
              > </Text><br/>

      <Select 
      minW={90}
      width="45%"
      bg={useColorModeValue("white", "gray.800")  }   
      fontSize={accessibility?.fonts?.regular}  
      onChange={ev => setTitleFile(ev.target.value  )}   
      fontFamily={"sans-serif"}  

      >
        <option value="">Selecione</option>
      {filesDownload.map((info)=>(
        <option value={info.titulo}>{info.titulo}</option>
      ))}
    </Select>

    {selectedFileDownlaod && (

          
<div>
  <a href={selectedFileDownlaod.url} target="_blank">
   <Stack
   marginTop={5}
direction="row"

color={ 'gray'}
p={2}
borderRadius="md"
cursor="pointer"
_hover={{ bg: 'gray.200' }}
//onClick={() => handleClick(law.link, index)}
>
<Icon as={AiOutlineDownload} />

<Text fontSize={accessibility?.fonts?.medium}>{HTMLReactParser(selectedFileDownlaod.titulo)}</Text>

</Stack></a>
</div>
)}
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
