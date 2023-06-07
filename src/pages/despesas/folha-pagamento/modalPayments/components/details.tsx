import { RowDetails } from "../../../../../styles/components/folha-pagamento/modal/styles";
import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { TColumn } from "../../../../../styles/components/licitacoes/modal/styles";


const Details = ({ payments, payrollData }: any) => {
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
  
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TColumn>Descrição</TColumn>
            <TColumn>Valor</TColumn>
            <TColumn>Salário Base</TColumn>
          </Tr>
        </Thead>
        <Tbody>
          {payrollData?.map((item: any, index: number) => {
            return (
              <Tr
                key={index}
                style={{
                  backgroundColor:
                    (index + 1) % 2 === 0 ? "#f7f7f7" : "transparent",
                }}
              >
                <Td whiteSpace="break-spaces" className="md">
                  {item?.Descricao}
                </Td>
                <Td whiteSpace="break-spaces" className="md">
                  {item?.Valor}
                </Td>
                <Td whiteSpace="break-spaces">{item?.salariobase}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Details;
