import { Stack } from "@chakra-ui/react";
import styled from "styled-components";

export const ContainerSearch = styled(Stack)`
  .button-search {
    width: 10% !important;
  }
  @media (max-width: 576px) {
    .button-search {
      width: 180px !important;
    }
  }
`;
