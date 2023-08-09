import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { FaGithub } from "react-icons/fa";

import { AppBar } from "../AppBar/AppBar";
import { OutletBox, FooterStyled, GitLink } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
      <FooterStyled>
        <p>Crated by</p>

        <GitLink href="https://github.com/VasilenkoYurii">
          <FaGithub /> VasilenkoYuri
        </GitLink>
      </FooterStyled>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
