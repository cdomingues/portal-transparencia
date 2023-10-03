import { Box, Text, useColorModeValue, Image } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility"

type PropsInput = {
  titulo: string;
  descricao: string;
  link: string;
  foto: string;
  data_noticia: string;
};

function DisplayNews({
  titulo,
  descricao,
  link,
  foto,
  data_noticia,
}: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Box
        key={titulo}
        display="flex"
        justifyContent="flex-start"
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        borderRadius="18px"
        marginBottom="15px"
        _hover={{ bg:useColorModeValue("white", "gray.800")}}
      >
        <Box
        >
          <Text
          color={"black.500"} fontSize={accessibility?.fonts?.regular}
            // color={useColorModeValue("gray.700", "white")}
            // fontSize="medium"
            // fontFamily="body"
            padding="5%"
            maxWidth={'90%'}
            textAlign={'justify'}
            flex="1"
          >
            {titulo}
          </Text>
          <Text
            color={useColorModeValue("gray.700", "white")}
            fontSize={accessibility?.fonts?.small}
            fontFamily="body"
            padding="5%"
            maxWidth={'90%'}
            textAlign={'justify'}
            flex="end"
          >
            {descricao}
          </Text>

          <Box display="flex" alignItems="left" flexDirection="column">
            <Text
              color="gray.500"
              fontSize={accessibility?.fonts.regular}
              width={'90%'}
              maxWidth={'90%'}
              paddingBottom="10px"
              paddingLeft="5%"
            >
              {data_noticia}
            </Text>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              paddingBottom="0px"
            >
              <Image maxWidth="380px" alt="image" objectFit="cover" src={foto}></Image>
            </Box>
          </Box>
        </Box>
      </Box>
    </a>
  );
}

export default DisplayNews;
