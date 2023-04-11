import { Th } from "@chakra-ui/react";
import styled from "styled-components";

export const RowDetails = styled.div`
  width: auto !important;
  min-height: 42px;

  display: flex;
  flex-direction: row;
  background-color: #f7f7f7;

  .column {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    min-width: 250px;

    .title {
      color: #99a2b1;
      font-weight: 700;
      min-width: 140px;
      display: flex;
      justify-content: flex-end;
    }
    .value {
    }
  }

  @media (max-width: 576px) {
    width: 800px !important;
  }
`;

export const TColumn = styled(Th)`
  font-size: 12px !important;
  color: #99a2b1 !important;
  text-transform: capitalize !important;
`;
