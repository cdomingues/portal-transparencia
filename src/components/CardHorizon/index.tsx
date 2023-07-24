import { Flex, Box, Image, useColorModeValue, Text, Textarea, useMediaQuery, Center, Square, Stack } from "@chakra-ui/react";
import { IconRight } from "react-day-picker";
import { isMobile } from "react-device-detect";
import { BiBell } from "react-icons/bi";

interface CardHorizonProps {
  title: string;
  imageURL: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  backgroundColor: string;
}

const CardHorizon: React.FC<CardHorizonProps> = ({
  title,
  imageURL,
  description,
  link,
  icon,
  backgroundColor,
}) => {
  return (
    <a href={link} target="_self" rel="noopener noreferrer">
      <Flex 
      m={0}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="2xl"
      padding={"15px"}
      rounded="md"
      overflow="hidden"
      width="350px"
      height="85px"
      borderRadius="18px"
      marginBottom="15px"
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
          {icon}
        </Center>
        <Square maxWidth={'70%'}>
          <Text paddingLeft={5} color={useColorModeValue("black", "white")}>{title}</Text>
        </Square>
      </Flex>
    </a>
  );
}

CardHorizon.defaultProps = {
  title: "Default Title",
  imageURL: "https://default-url.com",
  description: "Default Description",
  link: "#",
  icon: <BiBell style={{ fontSize: "30px", color: "white" }} />,
  backgroundColor: "blue"
}

export default CardHorizon;
