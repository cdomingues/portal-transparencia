import React from "react";
import publicRoutes from "../../../routes/public";
import Footer from "./Footer";
import SideBar from "./SideBar";
import VLibras from  '@djpfs/react-vlibras'
import ModalPopup from "../../Modal";
import {useEffect} from 'react'
import Header from "./Header";

import VLibrasScript from "../../VLibrasScript";

type Props = {
  children?: React.ReactNode;
};

function PublicLayout({ children }: Props) {
  
  return (
    <>
        <VLibras  />  
      {/* <VLibrasScript />*/}
       <Header />
      <SideBar routes={publicRoutes}>{children}</SideBar>
     
      <Footer />
    </>
  );
}

export default PublicLayout;
