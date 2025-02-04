import {
  Button,
  Divider,
  Heading,
  Select,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
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

import DadosAbertos from "../../../components/DadosAbertos";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import moneyFormatter from "../../../utils/moneyFormatter";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    
  };
};

export const contentAdvertisements = {
  titlePage: "Dívida Ativa",
  description: "A divulgação da lista da dívida ativa realizada pela Prefeitura de Mogi das Cruzes é uma medida fundamental cujo propósito é reforçar a transparência das finanças municipais e promover a responsabilidade fiscal.",
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
  const accessibility = useFontSizeAccessibilityContext();

  const chartConfig = {
    direction: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "40%",
    marginRight: isMobile ? "0" : "10%",
    marginLeft: isMobile ? "0" : "5%",
    fontSize: isMobile ? "medium" : "larger",
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
      <Text
                align={isMobile ? "justify" : "left"}
                
                fontSize={accessibility?.fonts?.regular}
                mt="20px"
              >
              <Text mb={4}>
        A Lista de Devedores está regulamentada pela <Link fontWeight='bold' href="http://normas.receita.fazenda.gov.br/sijut2consulta/link.action?visao=anotado&idAto=120969" color="red" isExternal>
        Portaria PGFN n. 636, de 9 de janeiro de 2020
        </Link>, e alterações posteriores.
      </Text>
      <Text mb={4}>
        A PGFN é responsável pelas informações sobre as naturezas das dívidas de FGTS, Tributário - Previdenciário, Tributário - Demais débitos, Não Tributário - Multa Trabalhista, Não Tributário - Multa Eleitoral, Não Tributário - Multa Criminal e Não Tributários - Demais débitos. Para exclusão do nome ou correção de quaisquer destes dados, o devedor deverá apresentar o requerimento próprio no portal{' '}
        <Link fontWeight='bold' href="https://www.regularize.pgfn.gov.br/" color="red" isExternal>
          REGULARIZE
        </Link>
        . As informações sobre os serviços da PGFN estão disponíveis no  <Link  fontWeight='bold'href="https://www.gov.br/pgfn" color="red" isExternal>
        site da PGFN
        </Link>, em "Serviços e Orientações", na opção  <Link fontWeight='bold' href="https://www.gov.br/pgfn/pt-br/servicos/orientacoes-contribuintes" color="red" isExternal>
        "Orientações de Serviços aos Contribuintes"
        </Link>.
      </Text>
      <Text mb={4}>
        Para as informações sobre as naturezas das dívidas de Autarquias/Fundações Federais, Estados/Distrito Federal e Municípios, são os respectivos entes os responsáveis pelas informações. Para exclusão do nome ou correção de quaisquer destes dados, o devedor deverá entrar em contato com o ente responsável pela informação.
      </Text>
      <Text mb={4}>
        A exclusão automática do nome do devedor em decorrência de pagamento ou garantia integral da dívida ou de suspensão da exigibilidade do crédito pode demorar até 7 dias, no caso de débito com a PGFN, com Autarquias ou Fundações Públicas, Estados, Distrito Federal e/ou Município, ou 75 dias, em se tratando de débito junto ao FGTS. Esse é o tempo necessário para que a informação seja processada pelos sistemas da PGFN.
      </Text>
      <Text mb={4}>
        As informações divulgadas nesta lista não substituem e nem prejudicam os efeitos das informações constantes nas certidões de regularidade fiscal emitidas pela PGFN, pelos Estados, Distrito Federal e/ou Municípios.
      </Text>
      <Text mb={4}>
        Para uma pesquisa completa com as informações de todos devedores da PGFN e a respectiva situação dos débitos, indicamos a utilização dos{' '}
        <Link fontWeight='bold' href="https://www.pgfn.gov.br/portal/dadosabertos" color="red" isExternal>
          Dados Abertos da PGFN
        </Link>
        . Já para consultar quais devedores estão cumprindo com o compromisso de pagar as prestações das negociações formalizadas perante a PGFN, você pode recorrer ao{' '}
        <Link fontWeight='bold' href="https://www.pgfn.gov.br/portal/painelnegociacoes" color="red" isExternal>
          Painel das Negociações
        </Link>.
      </Text>
      <Text mb={4}>
        Se você identificou alguma fraude fiscal cometida por devedores da PGFN, denuncie no{' '}
        <Link fontWeight='bold' href="https://www.pgfn.gov.br/portal/canaldenuncia" color="red" isExternal>
          Canal de Denúncias Patrimoniais
        </Link>
        . A denúncia pode ser feita anonimamente ou de maneira identificada.
      </Text>
      Fonte das informações  <Link fontWeight='bold' href="https://www.listadevedores.pgfn.gov.br/" color="red" isExternal>Lista de Devedores da PGFN</Link>
                
              </Text>
       <TableComponent loading={loading} columns={columns} data={data} />
    <DadosAbertos data={data} />
      
      </Box>
    </ContainerBasic>
    
  );
}

export default Screen;
