import { RowDetails } from "../../../../../styles/components/licitacoes/modal/styles";

const Details = ({ bidding }: any) => {
  return (
    <>
      <RowDetails>
        <div className="left">Orgão:</div>
        <div className="right">{bidding?.orgao}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Situação:</div>
        <div className="right">{bidding?.situacao}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Tipo:</div>
        <div className="right">{bidding?.tipo}</div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="left">Data de abertura:</div>
        <div className="right">{bidding?.dataAbertura}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Publicação Início:</div>
        <div className="right">{bidding?.publicacaoInicio}</div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="left">Publicação Fim:</div>
        <div className="right">{bidding?.publicacaoFim}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Descrição:</div>
        <div className="right">{bidding?.descricao}</div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="left">Objeto:</div>
        <div className="right">{bidding?.objeto}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Complemento:</div>
        <div className="right">{bidding?.complemento}</div>
      </RowDetails>
    </>
  );
};

export default Details;
