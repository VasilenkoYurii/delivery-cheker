import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { AppBar } from "../AppBar/AppBar";
import { Footer } from "../Footer/Footer";
import { OutletBox } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Suspense>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
