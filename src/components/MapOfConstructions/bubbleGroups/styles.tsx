import styled from "styled-components";
import colors from "../../../styles/colors";

export const BubbleGroups = styled.div`
  width: 100%;
  min-height: 900px;
  padding-left: 330px;

  .content {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1060px) {
    padding-left: 0px;
  }
`;

export const StepContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  .box-step {
    padding: 10px 20px;
    background-color: ${colors.grayLight};
    display: flex;
    flex-direction: column;
    min-height: 400px;
    .svg-bubble {
      width: 100%;
      height: 400px;
    }
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
