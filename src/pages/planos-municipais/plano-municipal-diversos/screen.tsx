/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import { Box, Icon, Select, Stack, useColorModeValue, Text, Button, Table, Thead, Th, Tr, Tbody, Td } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import TableComponent, { TableColumns } from "../../../components/Table";
import useWindowDimensions from "../../../utils/getWindowSize";
import { isMobile } from "react-device-detect";
//import publicacoes_educacao from '../../../data/publicacoes_educacao.json';
import HTMLReactParser from 'html-react-parser'
import { select } from "d3";
import { AiOutlineDownload } from "react-icons/ai";
import CsvDownload from "react-json-to-csv";
import colors from "../../../styles/colors";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    
  };
};

const publicacoes_educacao = [  
  {
  "id": 990,
  "volume": "Relatório de resultado Educação 2020 a 2021",
  "publicationDate": null,
  "description": "<strong>Relatório de Monitoramento e Avaliação do Plano Municipal de Educação - PME  2020/2021.</strong></p>",
  "src": "https://dados.mogidascruzes.sp.gov.br/dataset/dd14e55e-b605-487b-b189-8bd98331a68d/resource/1cd3f432-d071-42eb-9a02-dd8da0b85d43/download/19.1-relatorio-de-resultado-educacao-2020-a-2021.pdf",
  "cover": null,
  "createdAt": "null",
  "updatedAt": "null",
  "magazineId": 18,
  "order": 10
},
  {
    "id": 989,
    "volume": "Relatório de resultado Educação 2018 a 2019",
    "publicationDate": null,
    "description": "<p>Lei n&ordm; 7.480 de 22 de 2019</p>\r\n<p><strong>Relatório de Monitoramento e Avaliação do Plano Municipal de Educação - PME  2019/2020.</strong></p>",
    "src": "https://dados.mogidascruzes.sp.gov.br/dataset/dd14e55e-b605-487b-b189-8bd98331a68d/resource/e625649a-7abd-469e-b475-cd37d99c930c/download/19.1-relatorio-de-resultado-educacao-2018-a-2019.pdf",
    "cover": null,
    "createdAt": "null",
    "updatedAt": "null",
    "magazineId": 18,
    "order": 10
  },
      {
        "id": 988,
        "volume": "Relatório de resultado Educação 2017 a 2018",
        "publicationDate": null,
        "description": "<p>Lei n&ordm; 7.279, de 22 de 2017</p>\r\n<p><strong>Relatório de Monitoramento e Avaliação do Plano Municipal de Educação - PME  2017/2018.</strong></p>",
        "src": "https://dados.mogidascruzes.sp.gov.br/dataset/dd14e55e-b605-487b-b189-8bd98331a68d/resource/7c5445d3-1888-4eaf-b981-d19acddd78f0/download/19.1-relatorio-de-resultado-educacao-2017-a-2018.pdf",
        "cover": null,
        "createdAt": "null",
        "updatedAt": "null",
        "magazineId": 18,
        "order": 9
      },
      {
        "id": 991,
        "volume": "Plano Municipal de Educação 2025/2026",
        "publicationDate": null,
        "description": "<strong>Processo de construção do Plano Municiapl de Educação - PME Mogi das Cruzes para o biênio 2025/2026.</strong></p>\r\n<p>&nbsp;</p>",
        "src": "https://drive.google.com/file/d/13Y921a4I0XcvseFn6RV7xZjluSEGzeIq/view?usp=sharing",
        "cover": null,
        "createdAt": "null",
        "updatedAt": "null",
        "magazineId": 18,
        "order": 11
      },
      {
        "id": 987,
        "volume": "Plano Municipal de Educação 2023/2024",
        "publicationDate": null,
        "description": "<p style=\"font-weight: 400;\">Lei n&ordm; 7.893, de 12 de janeiro de 2023</p>\r\n<p style=\"font-weight: 400;\"><a style=\"text-decoration: none; color: inherit;\" href=\"https://drive.google.com/file/d/1NsCs3kNnZI3X2DHDRKgD5KxeQ7fuDmue/view?usp=share_link\" target=\"_blank\" rel=\"noopener\"><strong>Aprova o Plano Municipal de Educa&ccedil;&atilde;o - PME de Mogi das Cruzes para o bi&ecirc;nio 2023/2024.</strong></a><br /><br /><br /></p>\r\n<ul>\r\n<a style=\"text-decoration: none;\" href=\"/pages/plano-municipal-de-educacao-2023-2024\" target=\"_blank\" rel=\"noopener\"></a>\r\n</ul>\r\n<p>&nbsp;</p>",
        "src": "https://drive.google.com/file/d/1NsCs3kNnZI3X2DHDRKgD5KxeQ7fuDmue/view?usp=share_link",
        "cover": null,
        "createdAt": "2022-09-23 14:32:00",
        "updatedAt": "2023-01-23 10:32:05",
        "magazineId": 18,
        "order": 8
      },
      {
        "id": 986,
        "volume": "Plano Municipal de Educação 2021/2022",
        "publicationDate": null,
        "description": "<p>Lei n&ordm; 7.831, de 31 de agosto de 2022</p>\r\n<p><strong>Prorroga para o bi&ecirc;nio 2021/2022, a vig&ecirc;ncia do Plano Municipal de Educa&ccedil;&atilde;o, aprovado pela Lei n&ordm; 7480/2019.</strong></p>\r\n<p>&nbsp;</p>",
        "src": "https://drive.google.com/file/d/19j1IM3dle9mfn9Fni2J_8-jhyhMf4CRN/view?usp=sharing",
        "cover": null,
        "createdAt": "2022-09-19 13:34:00",
        "updatedAt": "2022-09-19 13:38:05",
        "magazineId": 18,
        "order": 7
      },
      {
        "id": 154,
        "volume": "Plano Municipal de Educação 2019/2020",
        "publicationDate": null,
        "description": "<p>Lei n&ordm; 7.480, de 10 de Julho de 2019</p>\r\n<p><strong>Aprova o Plano MUnicipal de Educa&ccedil;&atilde;o - PME de Mogi das Cruzes para o bi&ecirc;nio 2019/2020.</strong></p>",
        "src": "https://portal.sme-mogidascruzes.sp.gov.br/storage/uploads/politicas/pme_2019-2020.pdf",
        "cover": null,
        "createdAt": "2019-12-17 17:00:00",
        "updatedAt": "2022-09-19 13:33:20",
        "magazineId": 18,
        "order": 6
      },
      {
        "id": 153,
        "volume": "Plano Municipal de Educação 2017/2018",
        "publicationDate": null,
        "description": "<p>Lei n&ordm; 7.279, de 5 de Maio de 2017</p>\r\n<p><strong>Aprova o Plano MUnicipal de Educa&ccedil;&atilde;o - PME de Mogi das Cruzes para o bi&ecirc;nio 2017/2018.</strong></p>",
        "src": "https://portal.sme-mogidascruzes.sp.gov.br/storage/uploads/politicas/pme_2017-2018.pdf",
        "cover": null,
        "createdAt": "2019-12-17 17:00:00",
        "updatedAt": "2022-09-19 13:35:50",
        "magazineId": 18,
        "order": 5
      },
      {
        "id": 152,
        "volume": "Plano Municipal de Educação 2015/2016",
        "publicationDate": null,
        "description": "<p>Lei n&ordm; 7.039, de 27 de Mar&ccedil;o de 2015</p>\r\n<p><strong>Aprova o Plano MUnicipal de Educa&ccedil;&atilde;o - PME de Mogi das Cruzes para o bi&ecirc;nio 2015/2016.</strong></p>",
        "src": "https://portal.sme-mogidascruzes.sp.gov.br/storage/uploads/politicas/pme_2015-2016.pdf",
        "cover": null,
        "createdAt": "2019-12-17 16:59:00",
        "updatedAt": "2022-09-19 13:36:25",
        "magazineId": 18,
        "order": 4
      },
      {
        "id": 151,
        "volume": "Plano Municipal de Educação 2013/2014",
        "publicationDate": null,
        "description": "<p>Lei n&ordm; 6.758, de 2 de Janeiro de 2013</p>\r\n<p><strong>Aprova o Plano MUnicipal de Educa&ccedil;&atilde;o - PME de Mogi das Cruzes para o bi&ecirc;nio 2013/2014.</strong></p>",
        "src": "https://portal.sme-mogidascruzes.sp.gov.br/storage/uploads/politicas/pme_2013-2014.pdf",
        "cover": null,
        "createdAt": "2019-12-17 16:59:00",
        "updatedAt": "2022-09-19 13:36:48",
        "magazineId": 18,
        "order": 3
      },
      {
        "id": 150,
        "volume": "Plano Municipal de Educação 2011/2012",
        "publicationDate": null,
        "description": "<p>Lei n&ordm; 6.490, de 22 de Dezembro de 2010</p>\r\n<p><strong>Aprova o Plano MUnicipal de Educa&ccedil;&atilde;o - PME de Mogi das Cruzes para o bi&ecirc;nio 2011/2012.</strong></p>",
        "src": "https://portal.sme-mogidascruzes.sp.gov.br/storage/uploads/politicas/pme_2011-2012.pdf",
        "cover": null,
        "createdAt": "2019-12-17 16:59:00",
        "updatedAt": "2022-09-19 13:37:41",
        "magazineId": 18,
        "order": 2
      }
    ]

export const contentOtherInformations = {
  titlePage: "Planos Municipais Diversos",
  description:
    " ",
};

const exportToJSON = (data: any) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", "dados_planos_municipais.json");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



function Screen({
  handler: {
    columns,
    data,
    loading,
    
  },
}: PropsInput) {
  
  const title = contentOtherInformations?.titlePage;
  const description = contentOtherInformations?.description;
  const accessibility = useFontSizeAccessibilityContext();
  const { height, width } = useWindowDimensions();
  const [publicacao,setPublicacao] =useState<string>('');
  
  const selectedPublication = publicacoes_educacao.find(
    (info) => info.volume === publicacao
  );

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
          <Button
                    width="180px"
                    border="0"
                    cursor="pointer"
                    fontSize="20px"
                    textColor="white"
                    bgColor="#1c3c6e"
                    _hover={{ bgColor: "#1c3c6e" }}
                    height="40px"
                    borderRadius="8px"
                    mr="15px"
                    transition="background-color 0.3s ease"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  >
                    <CsvDownload
                      filename={"dados_receitas.csv"}
                      data={data}
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
          
                  <Button
                    width="180px"
                    border="0"
                    cursor="pointer"
                    fontSize="20px"
                    textColor="white"
                    bgColor="#1c3c6e"
                    _hover={{ bgColor: "#1c3c6e" }}
                    height="40px"
                    borderRadius="8px"
                    mr="15px"
                    onClick={() => exportToJSON(data)}
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  >
                    JSON
                  </Button>

                  <Table mt='10px'>
  <Thead >
    <Tr  bg={colors.primaryDefault40p}
      color="white"
      p={4}
      fontWeight="bold"
      border={`1px solid ${colors.primaryDefault40p}`}>
      <Th color="white">Sigla da área gestora</Th>
      <Th color="white">Plano Municipal</Th>
      <Th color="white">Link</Th>
     
    </Tr>
  </Thead>
  <Tbody fontSize='12px'>
    
    {data.map((row, index) => (
    
      <Tr key={row.sigla_area_gestora}>
        <Td>{row.sigla_area_gestora} </Td> 
       <Td>{row.plano_municipal}</Td>
       <Td>  {Array.isArray(row.link_acesso) ? (
    row.link_acesso.map((link: string, index: React.Key | null | undefined) => (
      <div key={index}>
        <a href={link.trim()} target="_blank" rel="noopener noreferrer">
          {link.trim()}
        </a>
      </div>
    ))
  ) : (
    <a href={row.link_acesso} target="_blank" rel="noopener noreferrer">
      {row.link_acesso}
    </a>
  )}</Td>
        
        
       
      </Tr>
    ))}
  </Tbody>
</Table>

       
      
       
       </Box>
    </ContainerBasic>
    
  );
}

export default Screen;