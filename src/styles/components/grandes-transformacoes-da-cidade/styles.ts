import styled from "styled-components";
import colors from "../../../styles/colors";

export const Description = styled.div`
  margin: 0 auto;
  max-width: 1340px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 10px;

  @media (max-width: 1060px) {
    max-width: 900px;
  }
`;
