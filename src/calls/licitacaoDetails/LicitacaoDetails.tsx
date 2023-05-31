import React, { useEffect, useState } from 'react';

interface Licitacao {
  numero: string;
  modalidade: string;
  processo: string;
  objeto: string;
  dataPublicacao: string;
  dataAbertura: string;
  vencimento: string;
  meioPublicacao: string;
  situacao: string;
  edital: string;
  ata: string;
  dataResultado: string;
  itens: {
    grupo: string;
    item: string;
    qtd: number;
    valor: string;
    vencedor: string;
  }[];
  participantes: {
    fornecedor: string;
    cpfcnpj: string;
    valor: string;
    vencedor: string;
    contrato: string;
  }[];
  arquivos: {
    data: string;
    descricao: string;
    link: string;
  }[];
}

const LicitacaoDetails: React.FC = () => {
  const [licitacao, setLicitacao] = useState<Licitacao | null>(null);

  useEffect(() => {
    // Restante do código para buscar e atualizar a licitação

  }, []);

  if (!licitacao) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>Licitação #{licitacao.numero}</h2>
      <p>Modalidade: {licitacao.modalidade}</p>
      <p>Processo: {licitacao.processo}</p>
      <p>Objeto: {licitacao.objeto}</p>
      <p>Data de Publicação: {licitacao.dataPublicacao}</p>
      <p>Data de Abertura: {licitacao.dataAbertura}</p>
      <p>Vencimento: {licitacao.vencimento}</p>
      <p>Meio de Publicação: {licitacao.meioPublicacao}</p>
      <p>Situação: {licitacao.situacao}</p>
      <p>Edital: {licitacao.edital}</p>
      <p>Ata: {licitacao.ata}</p>
      <p>Data do Resultado: {licitacao.dataResultado}</p>

      {/* Renderize os itens da licitação */}
      <h3>Itens da Licitação</h3>
      <table>
        <thead>
          <tr>
            <th>Grupo</th>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Vencedor</th>
          </tr>
        </thead>
        <tbody>
          {licitacao.itens.map((item, index) => (
            <tr key={index}>
              <td>{item.grupo}</td>
              <td>{item.item}</td>
              <td>{item.qtd}</td>
              <td>{item.valor}</td>
              <td>{item.vencedor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Renderize os participantes da licitação */}
      <h3>Participantes</h3>
      <table>
        <thead>
          <tr>
            <th>Fornecedor</th>
            <th>CPF/CNPJ</th>
            <th>Valor</th>
            <th>Vencedor</th>
            <th>Contrato</th>
          </tr>
        </thead>
        <tbody>
          {licitacao.participantes.map((participante, index) => (
            <tr key={index}>
              <td>{participante.fornecedor}</td>
              <td>{participante.cpfcnpj}</td>
              <td>{participante.valor}</td>
              <td>{participante.vencedor}</td>
              <td>{participante.contrato}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Renderize os arquivos da licitação */}
      <h3>Arquivos</h3>
      <ul>
        {licitacao.arquivos.map((arquivo, index) => (
          <li key={index}>
            <p>Data: {arquivo.data}</p>
            <p>Descrição: {arquivo.descricao}</p>
            <a href={arquivo.link} target="_blank" rel="noopener noreferrer">Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LicitacaoDetails;