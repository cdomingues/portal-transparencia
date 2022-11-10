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
      <Stack direction="row" width={hasAside ? "100%" : "100%"}>
        <Box width="100%">{children}</Box>
        {hasAside && (
          <Box bg="white" width="600px" maxWidth="600px" height="100%">
            {aSide}
          </Box>
        )}
      </Stack>
    </Container>
  );
}

export default ContainerWithAside;
