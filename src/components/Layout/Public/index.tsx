import React from "react";
import publicRoutes from "../../../routes/public";
import Footer from "./Footer";
import SideBar from "./SideBar";
import VLibras from "vlibras-nextjs";

type Props = {
  children?: React.ReactNode;
};

function PublicLayout({ children }: Props) {
  return (
    <>
      <VLibras forceOnload />
      <SideBar routes={publicRoutes}>{children}</SideBar>
      <Footer />
    </>
  );
}

export default PublicLayout;
