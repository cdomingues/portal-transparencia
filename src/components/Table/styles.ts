import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const CsvItem = styled.div`
  &:hover {
    background-color: #e2e8f0;
  }
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: start;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  outline: 2px solid transparent;
  outline-offset: 2px;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  -webkit-padding-start: 0.8rem;
  padding-inline-start: 0.8rem;
  -webkit-padding-end: 0.8rem;
  padding-inline-end: 0.8rem;
  transition-property: var(--chakra-transition-property-background);
  transition-duration: var(--chakra-transition-duration-ultra-fast);
  transition-timing-function: var(--chakra-transition-easing-ease-in);
`;


export const DisplayFlex = styled(Flex)`

display: flex;
flex-direction: row;

@media (max-width:624px) {
  flex-direction: column !important;
}
`