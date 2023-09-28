import styled from "styled-components";
import { Heading1Medium } from "../../../styles/text";
import colors from "../../../styles/colors";

export const Banner = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  background-image: url("https://www.mogidascruzes.sp.gov.br/public/site/imagens/6/2023071817355164b6f7a743553.jpg");
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
    flex-direction: row;
    padding: 0px 10px;
  }

  .banner-bottom {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 35px 0px;
    align-self: auto;
    
   
    .chip-banner {
      display: flex;
      flex-direction: row;
      background-color: ${colors.grayDark70p};
      width: 150px;
      height: 30px;
      border-radius: 30px;
      padding-left: 5px;
      padding-right: 5px;
      gap: 8px;
      //align-items: center;
    
      

      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .banner-bottom {
        flex-direction: column;
        align-items: flex-start; /* Ajuste conforme necessário */
        justify-content: flex-start; /* Ajuste conforme necessário */
    }
}

  @media (max-width: 1650px) {
    height: 240px;
    .content {
      max-width: 900px;
    }
  }

  @media (max-width: 400px) {
    .banner-bottom {
     display: flex;
    }
  }

  @media (max-width: 530px) {
    height: 280px;
  }

  @media (max-width: 1000px) {
    height: 420px;
    .chip-banner {
      gap: 40px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: fixed;
    }
  }

`;

export const BannerTotals = styled.div`
  width: 100%;
  height: 240px;
  background-image: url("https://images8.alphacoders.com/368/368165.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  .gradient-image {
    background: linear-gradient(
      180deg,
      ${colors.primaryDefault} 0%,
      ${colors.primaryDark} 50%,
      ${colors.primaryDark} 100%
    );
    width: 100%;
    height: 100%;
    opacity: 0.66;
  }

  .content {
    margin: -260px auto 0px auto;
    padding-top: 50px;
    max-width: 1340px;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    gap: 30px;
    z-index: 1000;
    position: relative;
  }

  @media (max-width: 1650px) {
    .content {
      max-width: 900px;
    }
  }

  @media (max-width: 760px) {
    .content {
      max-height: 50px;
      align-items: center;
    }
  }

  @media (max-width: 1230px) {
    height: 920px;

    .content {
      margin: -920px auto 0px auto;
      flex-direction: column;
      height: 920px;
      align-items: center;
      gap: 0px;
    }
  }
`;

export const ContainerBigTransformations = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;

  @media (max-width: 1060px) {
    max-width: 900px;
  }
`;

export const ContainerCardsTransformations = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;

  .align-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    gap: 25px;
  }

  @media (max-width: 1275px) {
    .align-cards {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 980px) {
    .align-cards {
      grid-template-columns: 1fr;
    }
  }
`;

export const Heading = styled(Heading1Medium)`
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  color: ${colors.primaryDark};

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;