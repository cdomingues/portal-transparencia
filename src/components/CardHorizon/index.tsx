/* eslint-disable @next/next/no-img-element */
import {
  Flex,
  Box,
  useColorModeValue,
  Text,
  Center,
  Square,
  Stack,
} from "@chakra-ui/react";
import { IconRight } from "react-day-picker";
import { isMobile } from "react-device-detect";
import { BiBell } from "react-icons/bi";
import Image from "next/image";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import seta from "../../assets/images/icones/Icones_Home Portal Transparencia__botao abre.svg";

import Diretriz_orcamentaria from "../../assets/images/icones/diretriz_orcamentaria.svg";

interface CardHorizonProps {
  title: string;
  imageURL: string;
  description: string;
  link: string;
  backgroundColor: string;
}

const CardHorizon: React.FC<CardHorizonProps> = ({
  title,
  imageURL,
  description,
  link,
  
}) => {
  const accessibility = useFontSizeAccessibilityContext();
  const transformedImageURL = `${imageURL}.src`;

  return (
    <a href={link} target="_self" rel="noopener noreferrer">
      <Stack
        display={"flex"}
        flexDirection={"row"}
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        border={"1px"}
        borderColor={useColorModeValue("lightgray", "white")}
        rounded="md"
        overflow="hidden"
        width="320px"
        height="85px"
        borderRadius="18px"
        marginBottom={isMobile ? "0px" : "0px"}
        marginStart={isMobile ? 0 : 10 }
      >
        <Stack
          width={"25%"}
          height="100%"
          backgroundColor={useColorModeValue("rgb(205, 67, 83)", "gray.800")}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={imageURL}
            alt="icone"
            width={60}
            height={60}
            style={{ filter: "grayscale(100%) brightness(3)" }}
          />
        </Stack>

        <Stack
          width={"50%"}
          height="80%"
          paddingLeft={4}
     
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize={accessibility?.fonts?.regular}
         
            color={useColorModeValue("black", "white")}
            justifyContent="left"
            alignItems="initial"
          >
            {title}
          </Text>
        </Stack>
        <Stack
          width={"25%"}
          height="80%"
          display="flex"
          
        padding={0}
          justifyContent="center"
          alignItems="center"
        >
          <Image src={seta} alt="icone" width={30} height={30} />
        </Stack>
      </Stack>
    </a>
  );
};

CardHorizon.defaultProps = {
  title: "Default Title",
  imageURL: Diretriz_orcamentaria, // Use the imported SVG as the default image
  description: "Default Description",
  link: "#",
  
};

export default CardHorizon;
