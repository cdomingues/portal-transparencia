import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Mapa do site",
  description:
    "Confira aqui as informações sobre o mapa do site da Prefeitura de Mogi das Cruzes",
};

function Screen({ handler }: PropsInput) {
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();
  const map = publicRoutes?.map((item: any, index: number) => {
    return (
      <Stack display="flex" flexDirection="column" key={index}>
        <Text onClick={() => router.push(item?.path)}>•{item?.path}</Text>
        <Stack display="flex" flexDirection="column" paddingLeft="10">
          {item?.group?.map((subItem: any, index: number) => (
            <Text
              key={index}
              onClick={() => router.push(item?.path + subItem?.path)}
            >
              •{subItem?.path}
            </Text>
          ))}
        </Stack>
      </Stack>
    );
  });
  return (
    <ContainerBasic title={title} description={description}>
      <Stack display="flex" flexDirection="column">
        {map}
      </Stack>
    </ContainerBasic>
  );
}

export default Screen;
