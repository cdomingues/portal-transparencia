import { RowDetails } from "../../../../../styles/components/contratos-atas/modal/styles";


const Details = ({ contract }: any) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <RowDetails>
        <div className="column">
          <div className="title">Orgão:</div>
          <div className="value">{contract?.gestora}</div>
        </div>

        <div className="column">
          <div className="title">Situação:</div>
          <div className="value">{contract?.situacao}</div>
        </div>

        <div className="column">
          <div className="title">Tipo:</div>
          <div className="value">{contract?.id_tipolicitacao}</div>
        </div>

       
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>

      <div className="column">
          <div className="title">Descrição:</div>
          <div className="value">{contract?.descricao}</div>
        </div>


       

        

       
      </RowDetails>

      <RowDetails>
        <div className="column">
          <div className="title">Data de Abertura:</div>
          <div className="value">{contract?.dataAbertura}</div>
        </div>

        <div className="column">
          <div className="title">Início da publicação:</div>
          <div className="value">{contract?.publicacaoInicio}</div>
        </div>

        <div className="column">
          <div className="title">Fim  da publicação:</div>
          <div className="value">{contract?.publicacaoFim}</div>
        </div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Complemento:</div>
          <div className="value">{contract?.complemento}</div>
        </div>

       
      </RowDetails>

      

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="column">
          <div className="title">Objeto:</div>
          <div className="value">{contract?.id_objeto}</div>
        </div>
      </RowDetails>

     
      <RowDetails>
        <div className="column">
         
        </div>
      </RowDetails>
     
        
      
    </div>
   
  );
};

export default Details;
