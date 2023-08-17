import React, { ReactNode } from "react";
import { Box, Stack } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { Container } from "./styles";
import Vlibras from 'vlibras-nextjs';
import { Size, useWindowSize } from "../../../hooks/useWindowSize";

type PropsInput = {
  children: ReactNode;
  aSide?: ReactNode;
};

function ContainerWithAside({ children, aSide }: PropsInput) {
  const size: Size = useWindowSize();
  let hasAside = true;
  if (isMobile) {
    hasAside = false;
  }

  if (size.width <= 768) {
    hasAside = false;
  }

  return (
    <Container>
      <Vlibras/>
      <Stack direction="row" width={hasAside ? "100%" : "100%"}>

        <Stack flex={1}>{children}</Stack>
        <Stack flex={1}>{aSide}</Stack>
      </Stack>
    </Container>
  );
}

export default ContainerWithAside;
