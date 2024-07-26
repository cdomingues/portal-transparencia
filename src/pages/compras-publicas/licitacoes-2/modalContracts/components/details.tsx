import { RowDetails } from "../../../../../styles/components/contratos-atas/modal/styles";
const getSituacaoText = (situacao: string | undefined) => {
  switch (situacao) {
    case 'P':
      return 'Publicada';
    case 'S':
      return 'Suspensa';
    default:
      return 'Desconhecida'; // Valor padrão para quando situacao não é reconhecida
  }
};

const getTipoText = (tipo: number | undefined) => {
  switch (tipo) {
    case 2:
      return 'Pregão Presencial';
    case 3:
      return 'Tomada de Preços';
    case 4:
      return 'Concorrência';
    case 5:
      return 'Leilão';
    case 7:
      return 'Chamada Pública';
    case 8:
      return 'Chamamento Público';
    case 9:
      return 'Pré-Qualificação';
    case 10:
      return 'Convite';
    case 11:
      return 'Dispensa/Inexigibilidade';
    case 12:
      return 'Chamamento Público - Saúde';
    case 13:
      return 'Chamamento Público - Esportes';
    case 14:
      return 'Chamamento Público - Verde e Meio Ambiente';
    case 15:
      return 'Chamada Pública - Saúde';
    case 16:
      return 'Chamamento Público - Educação';
    case 17:
      return 'Pregão Eletrônico';
    case 18:
      return 'Credenciamento';
    case 20:
      return 'Audiência Pública - Saúde';
    case 21:
      return 'CONCURSO';
    case 27:
      return 'PROCESSO SELETIVO';
    default:
      return 'Desconhecido'; // Valor padrão para quando tipo não é reconhecido
  }
};


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
          <div className="value">{getSituacaoText(contract?.situacao)}</div>
        </div>

        <div className="column">
          <div className="title">Tipo:</div>
          <div className="value">{getTipoText(contract?.id_tipolicitacao)}</div>
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
          <div className="value">{contract?.objeto}</div>
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
