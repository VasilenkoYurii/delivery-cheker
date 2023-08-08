import styled from "@emotion/styled";

export const Container = styled.div`
  width: 320px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
