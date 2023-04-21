import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .breadcrumb-container {
    width: auto;
    position: absolute;
    top: 176px;
    z-index: 1000;
    margin: 0 auto !important;
    display: flex;
    padding: 20px 20px;
    background-color: ${colors.transparent};

    .breadcrumb {
      margin: 0 auto;
      max-width: 1340px;
      width: 100%;
      padding: 0px 10px;
    }
  }
  @media (max-width: 1060px) {
    .breadcrumb {
      max-width: 900px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colors.transparent};
`;

export const BannerDefault = styled.div`
  width: 100%;
  height: 863px;
  background-image: url("https://images7.alphacoders.com/372/372247.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  .content {
    margin: 0 auto;
    max-width: 1340px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
  }

  @media (max-width: 1060px) {
    .content {
      max-width: 900px;
    }
  }
`;
