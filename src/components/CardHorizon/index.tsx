import { Flex, Box, useColorModeValue, Text, Center, Square, Stack } from "@chakra-ui/react";
import { IconRight } from "react-day-picker";
import { isMobile } from "react-device-detect";
import { BiBell } from "react-icons/bi";
import Image from 'next/image';
import {useFontSizeAccessibilityContext} from '../../context/fontSizeAccessibility'

import Diretriz_orcamentaria from "../../assets/images/icones/diretriz_orcamentaria.svg"

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
  backgroundColor,
}) => {
  const accessibility = useFontSizeAccessibilityContext();
  return (
    
    <a href={link} target="_self" rel="noopener noreferrer">
      <Flex 
      m={0}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="2xl"
      padding={"15px"}
      border={'1px'}
      borderColor={useColorModeValue("transparent", "white")}
      rounded="md"
      overflow="hidden"
      width="320px"
      height="85px"
      borderRadius="18px"
      marginBottom={isMobile?"0px": "15px"} 
      >
        <Center width={'30%'}   style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: backgroundColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
         <Image src={imageURL} alt="icone" width={40} height={40}/>
        </Center>
        <Square maxWidth={'70%'}>
          <Text fontSize={accessibility?.fonts?.regular}  paddingLeft={5} color={useColorModeValue("black", "white")}>{title}</Text>
        </Square>
      </Flex>
    </a>
  );
}

CardHorizon.defaultProps = {
  title: "Default Title",
  imageURL: Diretriz_orcamentaria, // Use the imported SVG as the default image
  description: "Default Description",
  link: "#",
  backgroundColor: "transparent"
}

export default CardHorizon;
