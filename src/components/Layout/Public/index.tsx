import React from "react";
import publicRoutes from "../../../routes/public";
import Footer from "./Footer";
import SideBar from "./SideBar";

type Props = {
  children?: React.ReactNode;
};

function PublicLayout({ children }: Props) {
  return (
    <>
      <SideBar routes={publicRoutes}>{children}</SideBar>
      <Footer />
    </>
  );
}

export default PublicLayout;
