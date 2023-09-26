import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  width: '1080';
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .breadcrumb-container {
    width: auto;
    position: absolute;
    top: 90px;
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
  height: 350px;
  background-image: url("https://dados.mogidascruzes.sp.gov.br/dataset/8e668745-1f91-4e64-a541-4f4a81898cac/resource/ca13f2b3-a4b2-485c-899a-4bb2f2c4c97c/download/imagens-para-site_topo-home.png");
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
