import styled from "@emotion/styled";
import colors from "../../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  min-height: 440px;
  background-color: ${colors.footer};
  margin-top: 40px;

  .top {
    margin: 0 auto;
    max-width: 1340px;

    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 300px;
    gap: 20px;
  }

  .column {
    flex: 1;
    padding-top: 70px;
    padding-left: 10px;
    padding-right: 10px;

    .address {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 10px;
      gap: 6px;
    }

    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 10px;
      gap: 20px;
    }
  }

  .link {
    margin-top: 10px;

    &:hover {
      font-weight: 600;
    }
  }

  .bottom {
    margin: 0 auto;
    max-width: 1340px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 300px;
    gap: 20px;
    border-top: 1px solid ${colors.white};
  }

  @media (max-width: 1060px) {
    .top {
      flex-direction: column;
      gap: 0px;
      margin-bottom: 50px;
      max-width: 900px;
    }
    .bottom {
      flex-direction: column;
      gap: 0px;
      max-width: 900px;
      .image {
        margin-left: -24px;
      }
    }
  }
`;
