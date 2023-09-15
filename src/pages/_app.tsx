import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import PublicLayout from "../components/Layout/Public";
import PublicHome from "../components/Layout/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider, useCookies } from "react-cookie";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import theme from "../themes";
import Vlibras from "vlibras-nextjs";
import { FontSizeAccessibilityWrapper } from "../context/fontSizeAccessibility";
import TagManager from "react-gtm-module";
import { isMobile } from "react-device-detect";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);
  const [cookies, setCookie] = useCookies(["refreshed"]);
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize({ gtmId: "<GTM-MKJGG2Q>" });
    setLoaded(true);
  }, []);

  const ComponenteLayout =
    router.pathname === "/" && !isMobile ? PublicHome : PublicLayout;

  return (
    <ChakraProvider theme={theme}>
      <FontSizeAccessibilityWrapper>
        <CookiesProvider>
          {loaded && (
            <ComponenteLayout>
              <Vlibras forceOnload={true} />
              <Vlibras />
              <Component {...pageProps} />
            </ComponenteLayout>
          )}
        </CookiesProvider>
      </FontSizeAccessibilityWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
