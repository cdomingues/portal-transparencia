import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: ${colors.transparent};
  /* max-width: 1340px; */
  margin: 0 auto;
  padding: 20px 10px;

  .icon-marker {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${colors.randomColors.red};

    &:hover {
      cursor: pointer;
      width: 16px !important;
      height: 16px !important;
      border-radius: 8px;
      opacity: 0.8;
    }
  }

  .public-place {
    background-color: ${colors.randomColors.orange} !important;
  }

  .mobility {
    background-color: ${colors.randomColors.orangeLight}!important;
  }

  .education {
    background-color: ${colors.randomColors.green}!important;
  }

  .work {
    background-color: ${colors.randomColors.yellow}!important;
  }

  .safe {
    background-color: ${colors.randomColors.ciano}!important;
  }

  .integration {
    background-color: ${colors.randomColors.blueLight}!important;
  }

  .health {
    background-color: ${colors.randomColors.blue}!important;
  }

  .culture {
    background-color: ${colors.randomColors.purple}!important;
  }

  .inovation {
    background-color: ${colors.black}!important;
  }

  .map-style {
    width: 100%;
    height: 600px;
  }

  .map-one-marker-style {
    width: 100%;
    height: 150px;
  }

  @media (max-width: 1060px) {
    .map-style {
      height: 600px;
    }
  }
`;

export const Search = styled.div`
  width: 270px;
  height: auto;
  position: relative;
  z-index: 1000;
  background-color: ${colors.white};
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 20px;
  padding: 20px;
  margin-left: 45px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  @media (max-width: 1060px) {
    width: 100%;
    height: auto;
    position: relative;
    border: none;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    border-radius: 0px;
    padding: 0px;
    left: 0px;
    box-shadow: none;
    margin-bottom: 10px;
  }

  .input {
    width: 100%;
    font-family: "Helvetica Now Display Regular", sans-serif;
  }
`;

export const Options = styled.div`
  width: 270px;
  height: auto;
  background-color: ${colors.white};
  margin-top: 45px;
  margin-bottom: -510px;
  margin-left: 45px;
  z-index: 10000;
  position: relative;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 20px;

  .buttons {
    display: grid;
    grid-template-columns: 80px 80px;
    gap: 10px;
    justify-content: center;
    border-radius: 10px !important;
  }

  .button-text {
    color: ${colors.white};
  }

  @media (max-width: 1060px) {
    width: 100%;
    height: auto;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
    box-shadow: none;
    padding: 0px;

    .buttons {
      display: grid;
      grid-template-columns: 80px 80px 80px 80px 80px;
      gap: 10px;
      justify-content: flex-start;
    }
  }

  @media (max-width: 500px) {
    .buttons {
      grid-template-columns: 80px 80px 80px 80px;
      .button-text {
        font-size: 0.6rem;
      }
    }
  }

  @media (max-width: 409px) {
    .buttons {
      grid-template-columns: 80px 80px 80px;
      .button-text {
        font-size: 0.6rem;
      }
    }
  }
`;

export const RoundedButton: any = styled.div`
  width: 80px;
  height: 70px;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const ConstructionSelected = styled.div`
  width: 300px;
  min-height: 400px;
  background-color: ${colors.white};
  z-index: 10000;
  position: absolute;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  right: 15px;
  top: 850px;
  display: flex;
  flex-direction: column;

  .top {
    width: 100%;
    height: 150px;
    background-image: url("https://images7.alphacoders.com/372/372247.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 15px;
    display: flex;
    justify-content: flex-end;
  }

  .content {
    flex: 1;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;

    .title-and-icon {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    .status {
      width: 100%;
      height: 40px;
      background-color: ${colors.green};
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 10px;
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.primaryDefault};
      height: 40px;
    }
  }

  @media (max-width: 1060px) {
    top: 1850px;
  }
`;
