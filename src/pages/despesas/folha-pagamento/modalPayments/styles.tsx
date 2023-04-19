import { ModalContent, Tab, TabList, TabPanel, Th } from "@chakra-ui/react";
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

  @media (max-width: 800px) {
    flex-direction: column;

    .column {
      min-width: auto !important;
      padding: 7px;
      .title {
        min-width: auto !important;
      }
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
