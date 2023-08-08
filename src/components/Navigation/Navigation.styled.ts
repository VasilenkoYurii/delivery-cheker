import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  gap: 15px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  color: black;

  transition: all 0.5s ease;

  &.active {
    color: white;

    &:hover {
      color: white;
    }
  }

  &:hover {
    color: #e9e9e9;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
