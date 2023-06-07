import { RowDetails } from "../../../../../styles/components/folha-pagamento/modal/styles";

const Details = ({ payments }: any) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <RowDetails>
        <div className="column">
          <div className="title">Nome:</div>
          <div className="value">{payments?.nome}</div>
        </div>

        <div className="column">
          <div className="title">Cargo:</div>
          <div className="value">{payments?.cargo}</div>
        </div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Situacao:</div>
          <div className="value">{payments?.situacao}</div>
        </div>

        <div className="column">
          <div className="title">Salário Base:</div>
          <div className="value">{payments?.salariobase}</div>
        </div>

        <div className="column">
          <div className="title">Secretaria:</div>
          <div className="value">{payments?.secretaria}</div>
        </div>
      </RowDetails>

      <RowDetails>
        <div className="column">
          <div className="title">Data de Admissao:</div>
          <div className="value">{payments?.dataadmissao}</div>
        </div>
      </RowDetails>
    </div>
  );
};

export default Details;
