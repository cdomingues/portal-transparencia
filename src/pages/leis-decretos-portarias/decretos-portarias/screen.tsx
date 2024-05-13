import React, { useEffect, useRef, useState } from "react";
import ContainerBasic from "../../../components/Container/Basic";
import publicRoutes from "../../../routes/public";
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { color } from "highcharts";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";

type PropsInput = {
  handler: {};
};

export const contentMapSite = {
  titlePage: "Decretos e Portarias",
  description:
    " ",
};





function Screen({ handler }: PropsInput) {
  const accessibility = useFontSizeAccessibilityContext();
  const title = contentMapSite?.titlePage;
  const description = contentMapSite?.description;
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <ContainerBasic title={title} description={description}>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        
        borderRadius="18px"
        marginBottom="15px"
      >
        
        <iframe src="https://ged-new.mogidascruzes.sp.gov.br/laserfiche/Login.aspx?db=PMMC" width="100%" height="600" ></iframe>
        
        {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Pop-up Content</h2>
            <p>This is a simple pop-up message.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      </Box>
    </ContainerBasic>
  );
}

export default Screen;
