import { RowDetails } from "../styles";

const Details = ({ bidding }: any) => {
  return (
    <>
      <RowDetails>
        <div className="left">Modalidade:</div>
        <div className="right">{bidding?.modalidade}</div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="left">Processo:</div>
        <div className="right">{bidding?.integracao}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Objeto:</div>
        <div className="right">{bidding?.objeto}</div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="left">Data de publicação:</div>
        <div className="right">{bidding?.datapublicacao}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Data de abertura:</div>
        <div className="right">{bidding?.dataabertura}</div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="left">Vencimento:</div>
        <div className="right">{bidding?.datavencimento}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Meio de publicação:</div>
        <div className="right">{bidding?.veiculopublicacao}</div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="left">Situação:</div>
        <div className="right"></div>
      </RowDetails>

      <RowDetails>
        <div className="left">Edital:</div>
        <div className="right"></div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="left">Ata:</div>
        <div className="right"></div>
      </RowDetails>

      <RowDetails>
        <div className="left">Data do resultado:</div>
        <div className="right"></div>
      </RowDetails>
    </>
  );
};

export default Details;
