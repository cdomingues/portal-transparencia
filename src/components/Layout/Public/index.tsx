import React from "react";
import publicRoutes from "../../../routes/public";
import Footer from "./Footer";
import SideBar from "./SideBar";
import VLibras from "@djpfs/react-vlibras";
import ModalPopup from "../../Modal";
import {useEffect} from 'react'
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

function PublicLayout({ children }: Props) {
  
  return (
    <>
       <VLibras forceOnload={true} /> 
       <Header />
      <SideBar routes={publicRoutes}>{children}</SideBar>
     
      <Footer />
    </>
  );
}

export default PublicLayout;
