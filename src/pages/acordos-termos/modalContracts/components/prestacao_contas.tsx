import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { RowDetails } from "../../../../styles/components/contratos-atas/modal/styles";
import { useEffect, useState } from "react";

interface PrestacaoContasItem {
  id: number;
  arquivo: string;
  acordo_id: number;
}

interface Arquivo {
  id: number;
  arquivo: string;
  acordo_id: number;
}

interface Acordo {
  id: number;
  arquivos: Arquivo[];
}

const PrestacaoContas = ({ termo }: { termo: Acordo }) => {
  const [data, setData] = useState<PrestacaoContasItem[]>([]);
  console.log("Termo recebido:", termo);

  useEffect(() => {
    const fetchAllPages = async () => {
      let allResults: PrestacaoContasItem[] = [];
      let nextPage = "https://dadosadm.mogidascruzes.sp.gov.br/api/prestacao_contas";

      try {
        while (nextPage) {
          const response = await fetch(nextPage);
          if (!response.ok) {
            throw new Error("Falha ao carregar os dados");
          }

          const pageData = await response.json();
          allResults = [...allResults, ...pageData.results];
          nextPage = pageData.next; // Atualiza o link para a próxima página
        }

        console.log("Dados recebidos:", allResults);
        setData(allResults);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };

    fetchAllPages();
  }, []);

  // Filtrar os itens de prestação de contas com base no id do termo
  const arquivosFiltrados = data.filter((item) => item.acordo_id === termo.id);

  return (
    <div style={{ overflowX: "auto" }}>
      <RowDetails>
        {arquivosFiltrados.length > 0 ? (
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Td>ID</Td>
                  <Td>Link para Download</Td>
                </Tr>
              </Thead>
              <Tbody>
                {arquivosFiltrados.map((arquivo) => (
                  <Tr key={arquivo.id}>
                    <Td>{arquivo.id}</Td>
                    <Td>
                      <a href={arquivo.arquivo} target="_blank" rel="noopener noreferrer">
                        Baixar Arquivo
                      </a>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <p>Nenhum arquivo encontrado para este termo.</p>
        )}
      </RowDetails>
    </div>
  );
};

export default PrestacaoContas;
