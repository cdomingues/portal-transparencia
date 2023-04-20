import * as Style from "./styles";
import * as Text from "../../styles/text";

import { BsTree } from "react-icons/bs";
import { ReactNode, useEffect, useState } from "react";
import colors from "../../styles/colors";

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

      <Text.Heading1Regular fontSize={3} color={colors.white} marginTop={15}>
        {valueCounting}
      </Text.Heading1Regular>

      <Text.Heading2Regular fontSize={1.3} color={colors.white} marginTop={15}>
        {description}
      </Text.Heading2Regular>
    </Style.Container>
  );
};

export default CardTotal;
