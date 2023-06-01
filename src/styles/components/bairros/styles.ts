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

export const Card = styled.div`
  flex: 1 1 250px;
  height: 350px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  .top {
    width: 100%;
    height: 220px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-image: url("https://images7.alphacoders.com/372/372247.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .bottom {
    width: 100%;
    height: 130px;
    background-color: ${colors.primaryDark};
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
  }
`;
