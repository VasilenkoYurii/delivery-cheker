import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import { AppBar } from "../AppBar/AppBar";
import { OutletBox, FooterStyled } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
      {/* <FooterStyled>
        <p>Crated by</p>

        <a href=""> VasilenkoYuri</a>
      </FooterStyled> */}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
