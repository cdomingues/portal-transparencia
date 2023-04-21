import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const Container: any = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 496px;

  border-radius: 20px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .top {
    flex: 1;
    background-image: url(${({ source }: any) => source});
    background-size: cover;
    background-position: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .bottom {
    width: 100%;
    height: 206px;
    background-color: ${colors.primaryDefault};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 20px;
  }
`;
