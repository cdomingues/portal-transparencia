import * as Style from "./styles";

import { BsTree } from "react-icons/bs";
import { ReactNode, useEffect, useState } from "react";
import colors from "../../styles/colors";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";
import { Text } from "@chakra-ui/react";

type CardTotalProps = {
  icon?: ReactNode;
  value?: string;
  description?: string;
};

const CardTotal = ({
  icon,
  value = "10",
  description = "teste",
}: CardTotalProps) => {
  const accessibility = useFontSizeAccessibilityContext();
  const [valueCounting, setValueConting] = useState("");

  function formatNumber(value: number): string {
    return value.toLocaleString("pt-BR");
  }

  function increment(i: number, max: number) {
    if (i > max) return;
    setTimeout(function () {
      setValueConting(formatNumber(Number(Math.round(i))));
      increment(i + max / 100, max);
    }, 20);
  }

  useEffect(() => {
    increment(0, Number(value.replaceAll(".", "")));
  }, []);

  return (
    <Style.Container>
      {icon ? icon : <BsTree color={colors.white} fontSize={60} />}

      <Text fontSize={accessibility?.fonts?.moreUltraLarge} color={colors.white} marginTop={15}>
        {valueCounting}
      </Text>

      <Text fontSize={accessibility?.fonts?.regular} color={colors.white} marginTop={15}>
        {description}
      </Text>
    </Style.Container>
  );
};

export default CardTotal;