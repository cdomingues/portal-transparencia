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
        maxW="445px"
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="2xl"
        rounded="md"
        p={6}
        overflow="hidden"
        maxWidth="90%"
        cursor="pointer"
        onClick={() => window.open(link, "_blank")}
      >
        <Box h="210px" bg="gray.100" mt={-6} mx={-6} mb={9} pos="relative">
          <Image alt="image" objectFit="cover" src={image} />
        </Box>
        <Stack height="200px">
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize="large"
            fontFamily="body"
          >
            {title}
          </Heading>
          <Text color="gray.500">{description}</Text>
        </Stack>
        <Stack mt={6} direction="row" spacing={4} align="center">
          <Avatar
            borderColor="gray.300"
            alignSelf="center"
            borderWidth={1}
            src={icon.src}
          />
          <Stack direction="column" spacing={0} fontSize="sm">
            <Text fontWeight={600}>Prefeitura Mogi das Cruzes</Text>
            <Text color="gray.500">{date}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
