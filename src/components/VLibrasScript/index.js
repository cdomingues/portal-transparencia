// components/VLibras.js
"use client";

import Script from "next/script";

export default function VLibras() {
  return (
    <>
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.VLibras) {
            new window.VLibras.Widget("https://vlibras.gov.br/app");
          }
        }}
      />
    </>
  );
}
