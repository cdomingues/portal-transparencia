import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const Container: any = styled.div`
  width: 100%;
  min-height: 560px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: row;

  @media (max-width: 1170px) {
    flex-direction: column;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primaryDefault};
    height: 40px;
    border-radius: 10px;
  }
`;

export const Left = styled.div`
  flex: 3;
  min-width: 880px;
  border-radius: 20px;
  margin-right: 20px;
  background-color: gray;
  background-image: url("https://images7.alphacoders.com/372/372247.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .div-separator-mobile {
    width: 100%;
    height: 360px;
    display: none;
  }

  @media (max-width: 1360px) {
    min-width: 700px;
  }

  @media (max-width: 1170px) {
    margin-right: 0px;
    min-width: 200px;
    min-height: 680px !important;
    align-items: center;
    justify-content: flex-end;

    background-size: 100% 360px;
    background-repeat: no-repeat;
    background-position: top;

    .div-separator-mobile {
      display: block;
    }
  }

  @media (max-width: 584px) {
    background-size: 600px 500px;
    object-fit: contain;
  }
`;

export const DescriptionBackground = styled.div`
  background: linear-gradient(
    180deg,
    ${colors.primaryDark} 100%,
    ${colors.primaryDark} 50%,
    ${colors.primaryDefault} 0%
  );
  width: 300px;
  height: 100%;
  opacity: 0.7;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 1170px) {
    display: none;
  }
`;

export const DescriptionBar = styled.div`
  width: 300px;
  height: 560px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;

  .text {
    color: ${colors.white};
  }

  .bottom {
    flex: 1;
    display: flex;
    align-items: flex-end;
  }

  .button-secondary {
    width: 100%;
    background-color: ${colors.primaryDefault};
  }

  @media (max-width: 1170px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${colors.primaryDefault};
    position: relative;

    .button-secondary {
      width: 100%;
      background-color: ${colors.primaryDark};
    }
  }
`;

export const Right = styled.div`
  flex: 1;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding: 20px 10px;
  justify-content: space-between;

  .button {
    opacity: 0.85;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 1170px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;

    .text {
      font-size: 1rem;
    }
  }
`;
