import { FaGithub } from "react-icons/fa";
import { FooterStyled, GitLink } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <p>Crated by</p>

      <GitLink href="https://github.com/VasilenkoYurii">
        <FaGithub /> VasilenkoYuri
      </GitLink>
    </FooterStyled>
  );
};
