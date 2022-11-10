import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import PublicLayout from "../components/Layout/Public";
import theme from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {loaded && (
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      )}
    </ChakraProvider>
  );
}

export default MyApp;
