import * as Style from "./styles";

import { BsTree } from "react-icons/bs";
import { ReactNode, useEffect, useState } from "react";
import colors from "../../styles/colors";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { Img, Text } from "@chakra-ui/react";

type CardTotalProps = {
  imageURL?: string;
  value?: string;
  description?: string;
};

const CardTotal = ({
  imageURL,
  //value = "10",
  description = "teste",
}: CardTotalProps) => {
  const accessibility = useFontSizeAccessibilityContext();


  return (
    <Style.Container>

      
      <Img
              src={imageURL}
              alt="icone"
              width={60}
              height={60}
              style={{ filter: "grayscale(100%) brightness(3)" }}
              
                          
            />

     
      <Text fontSize={accessibility?.fonts?.regular} color={colors.white} marginTop={15}>
        {description}
      </Text>
    </Style.Container>
  );
};

export default CardTotal;
