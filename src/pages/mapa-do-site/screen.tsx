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

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Screen({ handler }: PropsInput) {
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();
  const map = publicRoutes?.map((item: any, index: number) => {
    const itemPath = item?.path?.replace(/\//g, ""); // Remove the "/" character
    const isFirstItem = index === 0;
    const itemTitle = isFirstItem ? "Home" : capitalizeFirstLetter(itemPath);
    const itemOnClick = isFirstItem ? () => router.push("/") : () => router.push(item?.path);

    return (
      <Stack display="flex" flexDirection="column" key={index}>
        <Text
          color="blue"
          onClick={itemOnClick}
          cursor={item?.group?.length > 0 ? "default" : "pointer"}
        >
          | {itemTitle}
        </Text>
        <Stack display="flex" flexDirection="column" paddingLeft="10">
          {item?.group?.map((subItem: any, subIndex: number) => {
            const subItemPath = subItem?.path?.replace(/\//g, ""); // Remove the "/" character
            return (
              <Text
                key={subIndex}
                onClick={() => router.push(item?.path + subItem?.path)}
                cursor="pointer"
                color="blue"
              >
                | {capitalizeFirstLetter(subItemPath)}
              </Text>
            );
          })}
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
