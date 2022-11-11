import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Text,
  Textarea,
} from "@chakra-ui/react";

function Card({
  title,
  imageURL,
  description,
  link,
}: {
  title: string;
  imageURL: string;
  description: string;
  link: string;
}) {
  return (
    <Flex p={50} alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        // position="relative"
        width="500px"
      >
        <Image src={imageURL} alt={`Picture of ${title}`} roundedTop="lg" />
        <Box p="1" height="250px">
          <Flex mt="1" direction="column" alignContent="center" width="100%">
            <Textarea
              textAlign="left"
              overflow="auto"
              outline="none"
              boxShadow="none"
              resize="none"
              border="none"
              fontSize="md"
              fontWeight="550"
              contentEditable="false"
              backgroundColor="transparent"
              value={title}
              _selection={{ border: "none" }}
            />
            <Textarea
              contentEditable="false"
              overflow="auto"
              outline="none"
              boxShadow="none"
              resize="none"
              border="none"
              fontSize="smaller"
              value={description}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Card;
