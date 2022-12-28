import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import PublicLayout from "../components/Layout/Public";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider, useCookies } from "react-cookie";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import theme from "../themes";
import moment from "moment";

function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);
  const [cookies, setCookie] = useCookies(["refreshed"]);
  const router = useRouter();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <CookiesProvider>
        {loaded && (
          <PublicLayout>
            <Component {...pageProps} />
          </PublicLayout>
        )}
      </CookiesProvider>
    </ChakraProvider>
  );
}

export default MyApp;
