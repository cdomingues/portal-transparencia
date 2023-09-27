/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import {
  Flex,
  Box,
  useColorModeValue,
  Text,
  Center,
  Square,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Button,
  background,
} from "@chakra-ui/react";
import { IconRight } from "react-day-picker";
import { isMobile } from "react-device-detect";
import { BiBell } from "react-icons/bi";
import Image from "next/image";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import seta from "../../assets/images/icones/Icones_Home Portal Transparencia__botao abre.svg";
import hBottom from "../../assets/images/Icones_Home_Portal_Transparencia__botao_circulo.svg";

import Diretriz_orcamentaria from "../../assets/images/icones/diretriz_orcamentaria.svg";

interface Link {
  label: string;
  url: string;
}

interface CardHorizonProps {
  title: string;
  imageURL: string;
  description: string;
  link: string;
  backgroundColor: string;
  showExtraLinks?: boolean;
  extraLinks?: Link[];
}

const CardHorizon: React.FC<CardHorizonProps> = ({
  title,
  imageURL,
  description,
  link,
  showExtraLinks,
  extraLinks,
}) => {
  const accessibility = useFontSizeAccessibilityContext();

  const CardClickHandler = () => {
    if (showExtraLinks !== true) {
      window.location.href = link;
    }
  };

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Stack
          as="button"
          onClick={CardClickHandler}
          display={"flex"}
          flexDirection={"row"}
          m={0}
          bg={useColorModeValue("white", "gray.800")}
          border={"1px"}
          borderColor={useColorModeValue("lightgray", "white")}
          rounded="md"
          overflow="hidden"
          width={isMobile ? "100%" : "320px"} // Ajuste para dispositivos móveis
          height="85px"
          borderRadius="18px"
          
        
          justifyContent={isMobile ? "center" : "flex-start"} // Alinhamento centralizado para mobile
          alignItems={isMobile ? "center" : "flex-start"} // Alinhamento vertical centralizado para mobile
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
            justifyContent="center" // Inicia o conteúdo à esquerda
            alignItems="left" // Centraliza verticalmente
            flexDirection="column" // Isso garante que o conteúdo é disposto verticalmente
          >
            <Text
              fontSize={accessibility?.fonts?.regular}
              color={useColorModeValue("black", "white")}
              textAlign="left" // Adicionado para garantir alinhamento à esquerda
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
            {showExtraLinks === true && (
              <Image src={seta} alt="icone" width={30} height={30} />
            )}
          </Stack>
        </Stack>
      </PopoverTrigger>
      {showExtraLinks === true && (
        <PopoverContent>
          {/* <PopoverArrow /> */}
          <PopoverBody
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            {extraLinks?.map((linkItem, index) => (
              <a
                href={linkItem.url}
                style={{ width: "100%", display: "block" }}
              >
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    borderRadius: "15px",
                    textAlign: "right",
                    whiteSpace: "normal",
                    overflow: "auto",

                    margin: "5px",
                    border: "1px solid lightgray", // Adiciona a borda inferior
                    padding: "10px", // Espaço entre o texto e a borda
                  }}
                >
                  {linkItem.label}
                  <Image
                    src={hBottom}
                    alt="icone"
                    width={30}
                    height={30}
                    style={{
                      marginLeft: "10px",
                    }}
                  />
                </div>
              </a>
            ))}
          </PopoverBody>
        </PopoverContent>
      )}
    </Popover>
  );
};

CardHorizon.defaultProps = {
  title: "Default Title",
  imageURL: Diretriz_orcamentaria,
  description: "Default Description",
  link: "#",
  showExtraLinks: false,
};

export default CardHorizon;
