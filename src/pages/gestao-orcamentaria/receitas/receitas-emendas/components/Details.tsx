import moneyFormatter from "../../../../../utils/moneyFormatter";
import { RowDetails } from "./styles";

const Details = ({ data }: any) => {
  return (
    <>
      <RowDetails>
        <div className="left">Modalidade:</div>
        <div className="right">{data?.modalidade}</div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="left">Função:</div>
        <div className="right">{data?.funcao_governo}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Envio Câmara:</div>
        <div className="right">{data?.envio_camara}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Deliberação Câmara:</div>
        <div className="right">{data?.deliberacao_camara}</div>
      </RowDetails>

      <RowDetails style={{ backgroundColor: "transparent" }}>
        <div className="left">Secrêtaria:</div>
        <div className="right">{data?.secretaria_resp}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Meio de publicação:</div>
        <div className="right">{data?.veiculopublicacao}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Situação:</div>
        <div className="right">{data?.situacao}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Publicação Edital:</div>
        <div className="right">{data?.publicacao_edital}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Link de acesso:</div>
        <div className="right">{data?.link_acesso}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Decisão Autoridade:</div>
        <div className="right">{data?.decisao_autoridade}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Contrato Assinado:</div>
        <div className="right">{data?.contrato_assinado}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Valor Finalizado:</div>
        <div className="right">{moneyFormatter(data?.valor_finalizado)}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">Empresa Contratada:</div>
        <div className="right">{data?.empresa_contratada}</div>
      </RowDetails>

      <RowDetails>
        <div className="left">CNPJ:</div>
        <div className="right">{data?.cnpj}</div>
      </RowDetails>
    </>
  );
};

export default Details;
