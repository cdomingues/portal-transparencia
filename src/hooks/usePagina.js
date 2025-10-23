// hooks/usePagina.js
import { useState, useEffect } from "react";

export default function usePagina(numero) {
  const [paginaData, setPaginaData] = useState(null);
  const [loadings, setLoadings] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPagina() {
      if (!numero) return;
      setLoadings(true);

      try {
        const response = await fetch(
          `https://dadosadm.mogidascruzes.sp.gov.br/api/paginas/?numero=${numero}`
        );
        if (!response.ok) throw new Error("Erro ao buscar dados da página");

        const data = await response.json();
        const pagina = Array.isArray(data) ? data[0] : data?.results?.[0];

        if (pagina) {
          setPaginaData({
            titulo: pagina.titulo || "Página sem título",
            descricao: pagina.descricao || "",
            conteudo: pagina.conteudo || "",
          });
        } else {
          setPaginaData(null);
        }
      } catch (err) {
        console.error("Erro ao carregar página:", err);
        setError(err);
      } finally {
        setLoadings(false);
      }
    }

    fetchPagina();
  }, [numero]);

  return { paginaData, loadings, error };
}
