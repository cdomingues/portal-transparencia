import { Link, Select, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ContainerBasic from "../../components/Container/Basic";

type PropsInput = {
  handler: {};
};

function Screen({ handler }: PropsInput) {
  const title = "LEI DE ACESSO À INFORMAÇÃO";
  const description = "";
  return (
    <ContainerBasic title={title} description={description}>
      <Stack style={{ width: "45%" }}>
        <Text>
          A{" "}
          <Link
            textDecoration="underline"
            href="http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm"
            target="_blank"
          >
            Lei nº 12.527/2011
          </Link>{" "}
          regulamenta o direito constitucional de acesso às informações
          públicas. Ela entrou em vigor em 16 de maio de 2012 e criou mecanismos
          que possibilitam, a qualquer pessoa, física ou jurídica, sem
          necessidade de apresentar motivo, o recebimento de informações
          públicas dos órgãos e entidades. A lei vale para os três Poderes da
          União, Estados, Distrito Federal e Municípios, inclusive aos Tribunais
          de Conta e Ministério Público. Entidades privadas sem fins lucrativos
          também são obrigadas a dar publicidade a informações referentes ao
          recebimento e à destinação dos recursos públicos por elas recebidos.
        </Text>
      </Stack>
    </ContainerBasic>
  );
}

export default Screen;
