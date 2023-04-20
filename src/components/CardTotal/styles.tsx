import styled from '@emotion/styled';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 1060px) {
    width: 300px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;
