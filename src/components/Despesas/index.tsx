import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "https://dadosadm.mogidascruzes.sp.gov.br/api/despesas";
const ITEMS_PER_PAGE = 50;

interface Despesa {
  id: string;
  nr_empenho: number;
  descr_fornecedor: string;
  data_movto: string;
  vlr_empenho: string;
}

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Despesa[];
}

function Despesas() {
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [selectedYear, setSelectedYear] = useState("2025");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [selectedYear]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setDespesas([]);

    let allData: Despesa[] = [];
    let page = 1;
    let hasMore = true;

    try {
      while (hasMore) {
        console.log(`Carregando página ${page}...`);
        
        const response = await axios.get<ApiResponse>(API_URL, {
          params: {
            page: page,
            exercicio_empenho: selectedYear,
          },
        });

        const pageResults = response.data.results;
        
        if (pageResults && pageResults.length > 0) {
          allData.push(...pageResults);
          console.log(`Página ${page}: ${pageResults.length} itens`);
          
          // Verifica se há mais páginas
          const totalCount = response.data.count;
          hasMore = allData.length < totalCount;
          page++;
        } else {
          console.log(`Página ${page} sem resultados, parando...`);
          hasMore = false;
        }

        // Pequeno delay para não sobrecarregar a API
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      console.log(`✅ Total carregado: ${allData.length} itens`);
      setDespesas(allData);
      
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      setError("Erro ao carregar os dados. Tente novamente.");
    } finally {
      setLoading(false);
      setCurrentPage(1);
    }
  };

  // Paginação local
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = despesas.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(despesas.length / ITEMS_PER_PAGE);

  // Formatar valor monetário
  const formatCurrency = (value: string) => {
    const number = parseFloat(value);
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number);
  };

  // Formatar data
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  // Funções de navegação
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Despesas Públicas - Mogi das Cruzes</h1>

      {/* Controles */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <label>
          Selecione o ano:
          <select 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </label>

        <button 
          onClick={fetchData} 
          disabled={loading}
          style={{ 
            padding: '5px 15px',
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Carregando...' : 'Buscar Dados'}
        </button>
      </div>

      {/* Estados de loading e erro */}
      {loading && (
        <div style={{ padding: '10px', background: '#e3f2fd', marginBottom: '10px', borderRadius: '4px' }}>
          <p>📥 Carregando todas as páginas... Aguarde.</p>
        </div>
      )}

      {error && (
        <div style={{ padding: '10px', background: '#ffebee', color: '#c62828', marginBottom: '10px', borderRadius: '4px' }}>
          <p>❌ {error}</p>
        </div>
      )}

      {/* Informações do total */}
      {!loading && despesas.length > 0 && (
        <div style={{ marginBottom: '15px', padding: '10px', background: '#f8f9fa', borderRadius: '4px' }}>
          <p>
            <strong>✅ Total carregado:</strong> {despesas.length} despesas |{" "}
            <strong>📄 Mostrando:</strong> {startIndex + 1} - {Math.min(startIndex + ITEMS_PER_PAGE, despesas.length)} |{" "}
            <strong>🔢 Página:</strong> {currentPage} de {totalPages}
          </p>
        </div>
      )}

      {/* TABELA */}
      {!loading && despesas.length > 0 && (
        <div style={{ overflowX: 'auto', border: '1px solid #ddd', borderRadius: '4px' }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Data</th>
                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Fornecedor</th>
                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'right' }}>Valor</th>
                <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>N° Empenho</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={`${item.id}-${index}`} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    {formatDate(item.data_movto)}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    {item.descr_fornecedor}
                  </td>
                  <td style={{ 
                    padding: '10px', 
                    border: '1px solid #ddd', 
                    textAlign: 'right',
                    fontFamily: 'monospace',
                    fontWeight: 'bold'
                  }}>
                    {formatCurrency(item.vlr_empenho)}
                  </td>
                  <td style={{ 
                    padding: '10px', 
                    border: '1px solid #ddd', 
                    textAlign: 'center',
                    fontFamily: 'monospace'
                  }}>
                    {item.nr_empenho}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mensagem quando não há dados */}
      {!loading && despesas.length === 0 && !error && (
        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
          <p>Nenhuma despesa encontrada para o ano selecionado.</p>
        </div>
      )}

      {/* PAGINAÇÃO LOCAL */}
      {totalPages > 1 && !loading && despesas.length > 0 && (
        <div style={{ 
          marginTop: '20px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '15px'
        }}>
          <button
            disabled={currentPage === 1}
            onClick={goToPrevPage}
            style={{
              padding: '8px 16px',
              border: '1px solid #007bff',
              backgroundColor: currentPage === 1 ? '#f8f9fa' : '#007bff',
              color: currentPage === 1 ? '#6c757d' : 'white',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              borderRadius: '4px'
            }}
          >
            ‹ Anterior
          </button>

          <span style={{ margin: '0 10px', minWidth: '120px', textAlign: 'center' }}>
            Página {currentPage} de {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={goToNextPage}
            style={{
              padding: '8px 16px',
              border: '1px solid #007bff',
              backgroundColor: currentPage === totalPages ? '#f8f9fa' : '#007bff',
              color: currentPage === totalPages ? '#6c757d' : 'white',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              borderRadius: '4px'
            }}
          >
            Próxima ›
          </button>
        </div>
      )}
    </div>
  );
}

export default Despesas;