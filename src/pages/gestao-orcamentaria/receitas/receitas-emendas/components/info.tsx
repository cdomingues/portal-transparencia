import moneyFormatter from "../../../../../utils/moneyFormatter";
import { RowDetails } from "./styles";

const Info = ({ data }: any) => {
  return (
    <>
      <RowDetails>
        <div className="left">Informações gerais:</div>
        <div className="right">{data?.informacoes_gerais}</div>
      </RowDetails>

    </>
  );
};

export default Info;
