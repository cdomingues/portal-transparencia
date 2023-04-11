import { RowDetails } from "../styles";

const Details = ({ payments }: any) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <RowDetails>
        <div className="column">
          <div className="title">servidor:</div>
          <div className="value">{payments?.modalidade}</div>
        </div>

        <div className="column">
          <div className="title">Competência:</div>
          <div className="value">{payments?.situacao}</div>
        </div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Total Bruto:</div>
          <div className="value">{payments?.datainicio}</div>
        </div>

        <div className="column">
          <div className="title">Total Líquido:</div>
          <div className="value">{payments?.datatermino}</div>
        </div>

        <div className="column">
          <div className="title">Descontos:</div>
          <div className="value">{payments?.processo}</div>
        </div>
      </RowDetails>

      <RowDetails>
        <div className="column">
          <div className="title">Cargo:</div>
          <div className="value">{payments?.licitacao}</div>
        </div>
      </RowDetails>
    </div>
  );
};

export default Details;
