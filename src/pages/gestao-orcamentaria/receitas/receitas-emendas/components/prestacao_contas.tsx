import { useEffect, useState } from "react";
import { RowDetails } from "../../../../../styles/components/contratos-atas/modal/styles";

interface PrestacaoContasItem {
  id: number;
  arquivo: string;
  id_emenda: number;
  nome: string;
  n_emenda: number;
}

const PrestacaoContas = ({ data }: any) => {
  const [data2, setData2] = useState<PrestacaoContasItem[]>([]);

  useEffect(() => {
    const fetchArquivosPrestacaoContas = async () => {
      try {
        const response = await fetch(
          `https://dadosadm.mogidascruzes.sp.gov.br/api/lista_arquivo_emenda?id_emenda=${data.n_emenda}`
        );
        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }
        const result = await response.json();
        console.log("Dados recebidos:", result); // Verifique os dados recebidos no console
        setData2(result.results || []);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };

    if (data && data.id) {
      fetchArquivosPrestacaoContas();
    }
  }, [data]);

  console.log("Dados filtrados:", data)
  // Filtrar os itens de prestação de contas com base no id do termo
  const arquivosFiltrados = data2.filter((item) => item.n_emenda === data.n_emenda);

  //console.log("Dados filtrados:", arquivosFiltrados)

  return (
    <div style={{ overflowX: "auto" }}>
      {arquivosFiltrados.length > 0 ? (
        arquivosFiltrados.map((arquivo) => (
          <RowDetails key={arquivo.id}>
            <div style={{ marginBottom: "10px" }}>
              <div className="row">
                <div className="value" style={{ marginLeft: "10px" }}>
                  {arquivo.arquivo.split("/").pop()} -{" "}
                  <a
                    href={arquivo.arquivo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#185DA6",
                      fontWeight: "normal",
                      textDecoration: "none",
                      marginLeft: "5px",
                    }}
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </RowDetails>
        ))
      ) : (
        <p>Nenhum arquivo de prestação de contas encontrado para esta emenda.</p>
      )}
    </div>
  );
};

export default PrestacaoContas;
