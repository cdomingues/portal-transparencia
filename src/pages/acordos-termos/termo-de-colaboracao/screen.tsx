import React from "react";
import ContainerBasic from "../../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../../components/Table";
import { Box, useColorModeValue } from "@chakra-ui/react";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
  };
};

function Screen({ handler: { columns, data, loading } }: PropsInput) {
  const title = "Termo de Colaboração";
  const description = "Esse termo é regido pela Lei nº 13.019/2014, conhecida como a Lei do Marco Regulatório das Organizações da Sociedade Civil (MROSC). O termo de parceria é uma modalidade específica de contrato administrativo que tem como objetivo estabelecer os termos, condições, obrigações e responsabilidades das partes envolvidas em uma parceria para a execução de atividades ou projetos de interesse público. Esse tipo de instrumento é mais comumente utilizado em áreas como assistência social, saúde, educação,cultura, esporte e meio ambiente, onde a atuação conjunta entre o poder público e organizações da sociedade civil é relevante";
  return (
    <ContainerBasic title={title} description={description}>
            <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
      <TableComponent loading={loading} columns={columns} data={data} />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;