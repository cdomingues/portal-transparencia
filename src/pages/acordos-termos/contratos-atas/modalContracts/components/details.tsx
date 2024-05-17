import { RowDetails } from "../../../../../styles/components/contratos-atas/modal/styles";

const Details = ({ contract }: any) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <RowDetails>
        <div className="column">
          <div className="title">Modalidade:</div>
          <div className="value">{contract?.modalidade}</div>
        </div>

        <div className="column">
          <div className="title">Número:</div>
          <div className="value">{contract?.numero}</div>
        </div>

        <div className="column">
          <div className="title">Situação:</div>
          <div className="value">{contract?.situacao}</div>
        </div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Início:</div>
          <div className="value">{contract?.datainicio}</div>
        </div>

        <div className="column">
          <div className="title">Término:</div>
          <div className="value">{contract?.datatermino}</div>
        </div>

        <div className="column">
          <div className="title">Processo Nº:</div>
          <div className="value">{contract?.processo}</div>
        </div>
      </RowDetails>

      <RowDetails>
        <div className="column">
          <div className="title">Licitação:</div>
          <div className="value">{contract?.licitacao}</div>
        </div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Valor Total:</div>
          <div className="value">{contract?.valor}</div>
        </div>

        <div className="column">
          <div className="title">Valor Aditado:</div>
          <div className="value">{contract?.valorAditado}</div>
        </div>

        <div className="column">
          <div className="title">Aditivos:</div>
          <div className="value">{contract?.modalidade}</div>
        </div>
      </RowDetails>

      <RowDetails>
        <div className="column">
          <div className="title">Fornecedor:</div>
          <div className="value">{contract?.fornecedor}</div>
        </div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Objeto:</div>
          <div className="value">{contract?.objeto}</div>
        </div>
      </RowDetails>

      <RowDetails>
        <div className="column">
          <div className="title">Grupo:</div>
          <div className="value">{contract?.grupo}</div>
        </div>
      </RowDetails>
      <RowDetails>
        <div className="column">
          <div className="title">Arquivo:</div>
          <div className="value">{contract?.grupo}</div>
        </div>
      </RowDetails>
    </div>
  );
};

export default Details;
