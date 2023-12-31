import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
  flex: 0 0 auto;

  width: 100%;

  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: center;

  box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.75);

  gap: 10px;
`;

export const GitLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fa4a3b;
  transition: color 500ms;

  &:hover {
    color: #98271d;
  }
`;
