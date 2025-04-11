import React, { ReactNode } from "react";
import { Box, Stack } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { Container } from "./styles";
import { Size, useWindowSize } from "../../../hooks/useWindowSize";

type PropsInput = {
  children: ReactNode;
  aSide?: ReactNode;
};

function ContainerWithAside({ children, aSide }: PropsInput) {




  return (
   <h1>2</h1>
  );
}

export default ContainerWithAside;
