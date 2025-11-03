import Script from "next/script";
import React from "react";

const GA_TRACKING_ID = "G-Y9KGMEV8MY";

const Analytics = () => (
  <>
    {/* Script externo do Google Analytics */}
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      strategy="afterInteractive"
    />

    {/* Script de inicialização */}
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>
);

export default Analytics;
