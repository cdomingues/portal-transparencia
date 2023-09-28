import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
   /*  width: 50px;
    text-align: center;
    justify-content: center;
    align-items: center; */
    display: none;;
    
  }
`;
