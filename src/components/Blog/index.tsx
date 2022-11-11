import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Divider,
} from "@chakra-ui/react";
import icon from "../../assets/images/icon.png";

type PropsInput = {
  title: string;
  description: string;
  link: string;
  image: string;
  date: string;
};

export default function BlogComponent({
  title,
  description,
  link,
  image,
  date,
}: PropsInput) {
  return (
    <Center width="100%" py={6}>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="2xl"
        rounded="md"
        p={6}
        overflow="hidden"
        cursor="pointer"
        maxWidth="80%"
        onClick={() => window.open(link, "_blank")}
      >
        <Box bg="gray.100" mt={-6} mx={-6} mb={9} pos="relative">
          <Image alt="image" objectFit="cover" src={image} />
        </Box>
        <Stack>
          <Text
            color={useColorModeValue("gray.700", "white")}
            fontSize="smaller"
            fontFamily="body"
          >
            {title}
          </Text>
          {/* <Text color="gray.500">{description}</Text> */}
          <Divider width="100%" height={"10px"} />
          <Stack direction="row" spacing={4} align="center">
            <Avatar
              borderColor="gray.300"
              alignSelf="center"
              borderWidth={1}
              src={icon.src}
            />
            <Stack direction="column" spacing={0} fontSize="sm">
              <Text fontSize="smaller" fontWeight={600}>
                Prefeitura Mogi das Cruzes
              </Text>
              <Text color="gray.500" fontSize="smaller">
                {date}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
