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
  width: 60%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  .box-step {
    padding: 5px;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    min-height: 400px;
    max-height: 650px;
    
    .svg-bubble {
      width: 400px;
      height: 400px;
      // background-color: blue; // Adicionado para visualizar o container
    }
  }
  

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const StepContainerNeighbordhoods = styled.div`
  width: 80%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;

  .box-step-neighbordhoods {
    padding: 10px;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    max-height: 240px;
    .svg-bubble {
      width: 100%;
      height: 240px;
      // background-color: blue; // Adicionado para visualizar o container
    }
  }

  @media (max-width: 1670px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1360px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
