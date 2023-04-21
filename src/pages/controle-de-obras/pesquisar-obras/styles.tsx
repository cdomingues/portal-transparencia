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

  .bottom {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${colors.grayMedium};
  padding: 15px 0px;
  gap: 20px;

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primaryDefault};
    height: 40px;
    min-width: 140px !important;
    border-radius: 10px;
  }

  .input {
    flex: 1;
  }

  .select-neighborhood,
  .select {
    min-width: 140px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    align-items: center;
  }

  .button-default {
    width: 150px;
    height: 100%;
  }

  @media (max-width: 1060px) {
    flex-direction: column;

    .row {
      width: 100%;
    }

    .select-neighborhood,
    .select {
      min-width: 140px;
    }

    .button-default {
      width: 100%;
      height: 100%;
    }

    .input {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    .row {
      grid-template-columns: 1fr;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  min-height: 210px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  margin: 20px 0px;

  display: flex;
  flex-direction: row;
  gap: 15px;

  .left {
    width: 300px;
    height: 100% !important;
    border-radius: 20px;

    .image {
      width: 100%;
      height: 100% !important;
      border-radius: 20px;
      .swiper,
      .swiper-slide,
      img {
        height: 100% !important;
        border-radius: 20px !important;
      }
    }
  }

  .right {
    flex: 1;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    .row {
      display: flex;
      flex-direction: row;
      gap: 10px;
      .item {
        flex: 1;
      }
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;

    .left {
      width: 100%;
      height: 280px;
    }
  }

  @media (max-width: 550px) {
    .row {
      flex-direction: column !important;

      .item {
        width: 100%;
      }
    }
  }
`;
