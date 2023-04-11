import { Th } from "@chakra-ui/react";
import styled from "styled-components";

export const RowDetails = styled.div`
  width: 100%;
  min-height: 42px;

  display: flex;
  flex-direction: row;
  background-color: #f7f7f7;
  .left {
    width: 200px;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    color: #99a2b1;
    font-weight: 700;
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
`;

export const TColumn = styled(Th)`
  font-size: 12px !important;
  color: #99a2b1 !important;
  text-transform: capitalize !important;
`;
