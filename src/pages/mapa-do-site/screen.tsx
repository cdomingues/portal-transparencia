import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import publicRoutes from "../../routes/public";
import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Mapa do site",
  description:
    "Confira aqui as informações sobre o mapa do site da Prefeitura de Mogi das Cruzes ",
};

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const router = useRouter();
  const map = publicRoutes?.map((item: any, index: number) => {
    const itemPath = item?.path?.replace(/\//g, ""); // Remove the "/" character
    const isFirstItem = index === 0;
    const itemTitle = isFirstItem ? "Home" : capitalizeFirstLetter(itemPath);
    const itemOnClick = isFirstItem
      ? () => router.push("/")
      : () => router.push(item?.path);

    return (
      <Stack display="flex" flexDirection="column" key={index}>
        {/* <Box       
m={0}
bg={useColorModeValue("white", "gray.800")}

padding={"15px"}
rounded="md"
overflow="hidden"
maxWidth= "95%"
borderRadius="18px"
marginBottom="15px"
> */}
        <Text
          // direction="row"
          bg={"transparent"}
          color={"gray"}
          p={2}
          borderRadius="md"
          // cursor="pointer"
          _hover={{ bg: "gray.200" }}
          // onClick={() => handleClick(law.link, index)}
          fontSize={accessibility?.fonts?.regular}
          // color="blue"
          onClick={itemOnClick}
          cursor={item?.group?.length > 0 ? "default" : "pointer"}
        >
          | {itemTitle}
        </Text>

        <Stack display="flex" flexDirection="column" paddingLeft="10">
          {item?.group?.map((subItem: any, subIndex: number) => {
            const subItemPath = subItem?.path // Remove the "/" character
            return (
              <Text
              bg={"transparent"}
              color={"gray"}
              p={2}
              borderRadius="md"
              // cursor="pointer"
              _hover={{ bg: "gray.200" }}
              // onClick={() => handleClick(law.link, index)}
              fontSize={accessibility?.fonts?.regular}
              // color="blue"
                key={subIndex}
                onClick={() => router.push(item?.path + "/" +subItem?.path )}
                cursor="pointer"
            
              >
                | {capitalizeFirstLetter(subItemPath)} 
              </Text>
            );
          })}
        </Stack>
        {/* </Box> */}
      </Stack>
    );
  });
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
        <Stack display="flex" flexDirection="column">
           {map}
        </Stack>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
