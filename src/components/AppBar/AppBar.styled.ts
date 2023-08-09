import styled from "@emotion/styled";

export const AppBarContainer = styled.div`
  padding: 10px 15px 10px 15px;
  display: flex;
  justify-content: space-around;

  box-shadow: 8px 0px 13px 0px rgba(0, 0, 0, 0.75);
  background-color: #fa4a3b;

  @media screen and (min-width: 768px) {
    justify-content: space-around;
    padding: 15px 30px 15px 30px;
  }
`;

export const Container = styled.div`
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
