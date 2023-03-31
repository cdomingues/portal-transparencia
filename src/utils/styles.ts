import styled from "styled-components";
import { devices } from "./device";

export const ChartContainer = styled.div`
  width: 100px;

  // TODO: Refactor this
  @media (min-width: 2560px) {
    width: 750px;
  }

  @media ${devices.desktop} {
    width: 750px;
  }

  @media ${devices.laptopL} {
    width: 500px;
  }

  @media ${devices.laptop} {
    width: 430px;
  }

  @media ${devices.tablet} {
    width: 450px;
  }

  @media ${devices.mobileL} {
    width: 350px;
  }

  @media ${devices.mobileM} {
    width: 300px;
  }

  @media ${devices.mobileS} {
    width: 250px;
  }
`;
