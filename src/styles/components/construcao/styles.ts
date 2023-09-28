import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 10px;
  text-align: center;

  @media (max-width: 1060px) {
    max-width: 900px;

    .title {
      font-size: 1.3rem;
    }
  }

  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;
    cursor: pointer;
  }
`;

export const Row = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  gap: 50px;
  flex-wrap: wrap;

  @media (max-width: 1060px) {
    gap: 25px;
  }
`;

export const Datasheet = styled.div`
  width: 100%;
 height: 700px;
  background-color: ${colors.white};
  border-radius: 20px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);

  .box-top {
    width: 100%;
    height: 76px;
    border-radius: 20px 20px 0px 0px;
    background-color: ${colors.red};
    display: flex;
    align-items: center;
    padding: 0px 20px;
  }

  .box-main {
    padding: 20px;

    .status {
      width: 100%;
      height: 40px;
      background-color: ${colors.green};
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 10px;
    }
    

    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
      gap: 80px;
    }
  }

  .button {
    margin-top: 10px;
    width: 100%;
    background-color: ${colors.red};
  }

  @media (max-width: 1060px) {
    width: 100%;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  margin-top: 40px;
  height: 150px;
 
  background-color: ${colors.white};
  border-radius: 20px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);

  .box-top {
    width: 100%;
    height: 76px;
    border-radius: 20px 20px 0px 0px;
    background-color: ${colors.red};
    display: flex;
    align-items: center;
    padding: 0px 20px;
  }

  .box-main {
    padding-left: 20px;
    padding-top: 5px;

    .status {
      width: 100%;
      height: 40px;
      background-color: ${colors.green};
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 10px;
    }
    

    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 10px;
      gap: 80px;
    }
  }

  .button {
    margin-top: 10px;
    width: 100%;
    background-color: ${colors.red};
  }

  @media (max-width: 1060px) {
    width: 100%;
  }
`;

export const DivImage = styled.div`
  flex: 1 1 500px;
  max-height: 100%;
  .image {
    width: 100%;
    height: 80%;
    border-radius: 20px !important;
    .swiper,
    .swiper-slide,
    img {
      height: 100%;
      border-radius: 20px !important;
    }
  }
`;
