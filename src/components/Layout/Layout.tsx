import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import { AppBar } from "../AppBar/AppBar";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
      <footer>crated by</footer>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
