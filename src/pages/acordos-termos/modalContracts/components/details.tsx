import { useState } from "react";
import { RowDetails } from "../../../../styles/components/contratos-atas/modal/styles";

const Details = ({ termo }: any) => {
  const files = termo?.arquivos || [];
  return (
    <div style={{ overflowX: "auto" }}>
      <RowDetails>
        <div className="column">
          <div className="title">Processo:</div>
          <div className="value">{termo?.processo}</div>
        </div>

        <div className="column">
          <div className="title">Data Inicio:</div>
          <div className="value">{termo?.data_inicio}</div>
        </div>

        <div className="column">
          <div className="title">Data Fim:</div>
          <div className="value">{termo?.data_fim}</div>
        </div>
      </RowDetails>
      <RowDetails>
        <div className="column">
       
        </div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Assunto:</div>
          <div className="value">{termo?.assunto}</div>
        </div>

        
      </RowDetails>

      

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Valor Inicial:</div>
          <div className="value">{termo?.valor_inicial}</div>
        </div>

        <div className="column">
          <div className="title">Secretaria Responsável:</div>
          <div className="value">{termo?.secretaria_responsavel}</div>
        </div>

        <div className="column">
        <div className="title">Interessado:</div>
          <div className="value">{termo?.interessado}</div>
        </div>
      </RowDetails>

      

     
    </div>
  );
};

export default Details;
