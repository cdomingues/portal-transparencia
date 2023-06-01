import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { TColumn } from "../../../../../styles/components/licitacoes/modal/styles";

const ItemsBidding = ({details}:any) => {
  const mockTable = [
    {
      group: "1.11.03 - GASES ENGARRAFADOS",
      item: "1.11.03.0001-5 - GAS LIQUEFEITO DE PETROLEO 13 KG",
      quantity: "20",
      value: "104,00",
      winner: "COMERCIO DE GAS MALUF LTDA",
    },
    {
      group: "1.11.03 - GASES ENGARRAFADOS",
      item: "1.11.03.0001-5 - GAS LIQUEFEITO DE PETROLEO 13 KG",
      quantity: "20",
      value: "104,00",
      winner: "COMERCIO DE GAS MALUF LTDA",
    },
    {
      group: "1.11.03 - GASES ENGARRAFADOS",
      item: "1.11.03.0001-5 - GAS LIQUEFEITO DE PETROLEO 13 KG",
      quantity: "20",
      value: "104,00",
      winner: "COMERCIO DE GAS MALUF LTDA",
    },
  ];

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TColumn>Grupo</TColumn>
            <TColumn>Item</TColumn>
            <TColumn>Qtd</TColumn>
            <TColumn>R$</TColumn>
            <TColumn>Vencedor</TColumn>
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
                <Td whiteSpace="break-spaces" className="sm">
                  {item?.item}
                </Td>
                <Td>{item?.quantity}</Td>
                <Td>{item?.value}</Td>
                <Td whiteSpace="break-spaces" className="sm">
                  {item?.winner}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ItemsBidding;
