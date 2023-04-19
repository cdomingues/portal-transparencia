import { Tab, TabList, TabPanel, Th } from "@chakra-ui/react";
import styled from "styled-components";
import { ModalContent } from "@chakra-ui/react";

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

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 5px;
    .left {
      width: auto;
      justify-content: flex-start;
    }
    .right {
      padding-left: 0px;
    }
  }
`;

export const TColumn = styled(Th)`
  font-size: 12px !important;
  color: #99a2b1 !important;
  text-transform: capitalize !important;
`;

export const ModalContainer = styled(ModalContent)`
  margin-left: 250px;
  margin-right: 2%;
  margin-top: 10% !important;

  @media (max-width: 1010px) {
    margin-left: 2%;
  }

  @media (max-width: 760px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const ListTabs = styled(TabList)`
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 576px) {
    flex-direction: column !important;
  }
`;

export const TabItem = styled(Tab)`
  width: 140px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Panel = styled(TabPanel)`
  padding: 0;
  overflow-y: auto;
  max-height: 500px;

  .sm {
    min-width: 180px !important;
  }

  .md {
    min-width: 240px !important;
  }

  .lg {
    min-width: 300px !important;
  }

  .xl {
    min-width: 340px !important;
  }

  @media (max-height: 670px) {
    max-height: 300px !important;
  }
`;
