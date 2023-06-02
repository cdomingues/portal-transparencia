import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { TColumn } from "../../../../../styles/components/contratos-e-atas/modal/styles";

const Participants = () => {
  const mockTable = [
    {
      group: "COMERCIO DE GAS MALUF LTDA",
      item: "71.907.950/0001-42",
      quantity: "49.920,00",
      value: "Sim",
      winner: "---",
    },
    {
      group: "COMERCIO DE GAS MALUF LTDA",
      item: "71.907.950/0001-42",
      quantity: "49.920,00",
      value: "Sim",
      winner: "---",
    },
    {
      group: "COMERCIO DE GAS MALUF LTDA",
      item: "71.907.950/0001-42",
      quantity: "49.920,00",
      value: "Sim",
      winner: "---",
    },
    {
      group: "COMERCIO DE GAS MALUF LTDA",
      item: "71.907.950/0001-42",
      quantity: "49.920,00",
      value: "Sim",
      winner: "---",
    },
    {
      group: "COMERCIO DE GAS MALUF LTDA",
      item: "71.907.950/0001-42",
      quantity: "49.920,00",
      value: "Sim",
      winner: "---",
    },
    {
      group: "COMERCIO DE GAS MALUF LTDA",
      item: "71.907.950/0001-42",
      quantity: "49.920,00",
      value: "Sim",
      winner: "---",
    },
    {
      group: "COMERCIO DE GAS MALUF LTDA",
      item: "71.907.950/0001-42",
      quantity: "49.920,00",
      value: "Sim",
      winner: "---",
    },
  ];

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TColumn>Grupo</TColumn>
            <TColumn>Item</TColumn>
            <TColumn>R$</TColumn>
            <TColumn>Vencedor</TColumn>
            <TColumn>Contrato</TColumn>
          </Tr>
        </Thead>
        <Tbody>
          {mockTable?.map((item: any, index: number) => {
            return (
              <Tr
                key={index}
                style={{
                  backgroundColor:
                    (index + 1) % 2 === 0 ? "#f7f7f7" : "transparent",
                }}
              >
                <Td whiteSpace="break-spaces" className="sm">
                  {item?.group}
                </Td>
                <Td whiteSpace="break-spaces" className="md">
                  {item?.item}
                </Td>
                <Td>{item?.quantity}</Td>
                <Td>{item?.value}</Td>
                <Td>{item?.winner}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Participants;
