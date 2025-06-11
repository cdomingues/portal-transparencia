// VLibrasScript.tsx
import { useEffect } from "react";

export default function VLibrasScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.VLibras) {
        // Aguarde um pouco até o DOM estar estável
        setTimeout(() => {
          try {
            new window.VLibras.Widget("https://vlibras.gov.br/app");
          } catch (e) {
            console.error("Erro ao inicializar VLibras.Widget:", e);
          }
        }, 1000); // aguarda 1 segundo
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
