import { Flex, Box, Image, useColorModeValue, Text, Textarea, useMediaQuery, Center, Square, Icon, Stack } from "@chakra-ui/react";
import { IconRight } from "react-day-picker";
import { isMobile } from "react-device-detect";
import { BiBell } from "react-icons/bi";

function CardHorizon({
  title,
  imageURL,
  description,
  link,
  icon,
}: {
  title: string;
  imageURL: string;
  description: string;
  link: string;
  icon: string;
}) {

  return (
    <a href={link} target="_self" rel="noopener noreferrer">
      <Flex 
      m={0}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="2xl"
      padding={"15px"}
      rounded="md"
      overflow="hidden"
      maxWidth="100%"
      borderRadius="18px"
      marginBottom="15px"
      >
        <Center w='30%'>
        <Flex as={icon} fontSize='3xl' color={useColorModeValue("black", "white")} />
        </Center>
        <Square w='70%'>
          <Text color={useColorModeValue("black", "white")}>{title}</Text>
        </Square>
      </Flex>
    </a>
  );
}

export default CardHorizon;
