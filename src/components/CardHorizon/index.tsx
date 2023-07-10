import { Flex, Box, Image, useColorModeValue, Text, Textarea, useMediaQuery } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

function CardHorizon({
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
    <a href="https://www.uol.com.br" target="_self" rel="noopener noreferrer">
      {/* Usar o elemento "a" para redirecionar para uma URL externa */}
      <Flex
       
        alignItems="center"
        direction={isMobile ? "column" : "row"}
        justifyContent="center"
        w={isMobile ? '100%' : '300px'}
        flexDirection={"row"}
      >
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          width={isMobile ? "100%" : "350px"}
          flexDirection={"row"}
        >
          <Image maxWidth='100px' src={imageURL} alt={`Picture of ${title}`} roundedTop="lg" />
          <Box p="1" >
            <Flex mt="1" direction="column" alignContent="center" width="100%">
              <Textarea
              height={'10px'}
                textAlign="left"
                overflow="auto"
                outline="none"
                boxShadow="none"
                resize="none"
                border="none"
                fontSize="md"
                fontWeight="550"
                value={title}
                _selection={{ border: "none" }}
              />
              {/* <Textarea
               height={'10px'}
                contentEditable="false"
                overflow="auto"
                outline="none"
                boxShadow="none"
                resize="none"
                border="none"
                fontSize="smaller"
                value={description}
              /> */}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </a>
  );
}

export default CardHorizon;
