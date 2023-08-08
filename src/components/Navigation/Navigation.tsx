import { Nav, NavLinkStyled } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Nav>
      <NavLinkStyled to="/">Перевірити ТТН</NavLinkStyled>
      <NavLinkStyled to="/offices">Список відділень</NavLinkStyled>
    </Nav>
  );
};
