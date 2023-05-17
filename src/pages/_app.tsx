import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import PublicLayout from "../components/Layout/Public";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider, useCookies } from "react-cookie";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import theme from "../themes";
import { FontSizeAccessibilityWrapper } from "../context/fontSizeAccessibility";

function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);
  const [cookies, setCookie] = useCookies(["refreshed"]);
  const router = useRouter();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <FontSizeAccessibilityWrapper>
        <CookiesProvider>
          {loaded && (
            <PublicLayout>
              <Component {...pageProps} />
            </PublicLayout>
          )}
        </CookiesProvider>
      </FontSizeAccessibilityWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
