import { useState } from "react";
import { RowDetails } from "../../../../../../styles/components/contratos-atas/modal/styles";

const Details = ({ contract }: any) => {
  const files = contract?.arquivos || [];
  return (
    <div style={{ overflowX: "auto" }}>
      <RowDetails>
       

        <div className="column">
          <div className="title">Tipo de Empenho:</div>
          <div className="value">{contract?.tipo_empenho}</div>
        </div>


        <div className="column">
          <div className="title">Favorecido:</div>
          <div className="value">{contract?.descr_fornecedor}</div>
        </div>

        
        <div className="column">
          <div className="title">Valor do Empenho:</div>
          <div className="value">{contract?.vlr_empenho}</div>
        </div>
      </RowDetails>
      <RowDetails>
        <div className="column">
       
        </div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Unidade Orçamentária:</div>
          <div className="value">{contract?.unid_orcam}</div>
        </div>

        <div className="column">
          <div className="title">Funcional Programática:</div>
          <div className="value">{contract?.class_funcional} - {contract?.descr_funcional}</div>
        </div>

       

        
      </RowDetails>
      

      

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Função:</div>
          <div className="value">{contract?.funcao}</div>
        </div>

        <div className="column">
          <div className="title">Subfunção:</div>
          <div className="value">{contract?.subfuncao}</div>
        </div>

       
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Programa:</div>
          <div className="value">{contract?.programa}</div>
        </div>

        <div className="column">
          <div className="title">Fonte Recurso:</div>
          <div className="value">{contract?.vinculo}</div>
        </div>

       
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Natureza de Despesa:</div>
          <div className="value">{contract?.programa}</div>
        </div>

        <div className="column">
          <div className="title">Fonte Recurso:</div>
          <div className="value">{contract?.elemento} - {contract?.subelemento}</div>
        </div>

       
      </RowDetails>

      

     
    </div>
  );
};

export default Details;
