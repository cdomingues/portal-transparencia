import styled from "styled-components";
import colors from "../../styles/colors";

export const SliderContainer = styled.div`
  width: 100%;

  position: relative;
  max-height: 100%;
  //height: 391px;
  .swiper {
    position: relative;
  }
  .swiper-slide {
    width: 100% !important;
    height: 100% !important;
    img {
      object-fit: cover;
      max-width: 100%;
      display: block;
      height: 100%;
      max-height: 100%;
      width: 100%;
    }
  }

  .swiper-pagination {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    margin: 0 auto 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper-pagination-bullet {
      width: 20px;
      height: 4px;
      background: ${colors.grayLight} !important;
      margin: 0 6px;
      border-radius: 4px;
      display: block;
      transition: width 0.4s;
      cursor: pointer;

      &.swiper-pagination-bullet-active {
        background: ${colors.primaryLight} !important;
        width: 28px;
      }
    }
  }
`;
