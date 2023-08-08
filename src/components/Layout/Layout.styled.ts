import styled from "@emotion/styled";

export const OutletBox = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1 0 auto;

  width: 100%;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }
`;

export const FooterStyled = styled.footer`
  flex: 0 0 auto;

  width: 100%;

  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: center;

  box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.75);
`;
