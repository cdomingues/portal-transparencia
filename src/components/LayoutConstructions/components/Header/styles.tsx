import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    max-width: 1340px;
    height: 80px;
    margin: 0 auto;
  }

  @media (max-width: 1060px) {
    .content {
      max-width: 900px;
    }
  }
`;

export const Left = styled.div`
  flex: 1;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Right = styled.div`
  flex: 1;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.5;
    }
  }
`;
