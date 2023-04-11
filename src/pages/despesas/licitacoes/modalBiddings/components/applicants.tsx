import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { TColumn } from "../styles";

const Apliccants = () => {
  const mockTable = [
    {
      group: "002.007.014.000.000 - DEPTº DE ALIMENTAÇÃO ESCOLAR",
      item: "Dotação/Ficha - 205 Reserva Orçamentária - 1265/2023 Valor - R$ 545753,70",
      quantity: "3/2023",
    },
    {
      group: "002.007.014.000.000 - DEPTº DE ALIMENTAÇÃO ESCOLAR",
      item: "Dotação/Ficha - 205 Reserva Orçamentária - 1265/2023 Valor - R$ 545753,70",
      quantity: "3/2023",
    },
    {
      group: "002.007.014.000.000 - DEPTº DE ALIMENTAÇÃO ESCOLAR",
      item: "Dotação/Ficha - 205 Reserva Orçamentária - 1265/2023 Valor - R$ 545753,70",
      quantity: "3/2023",
    },
  ];

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TColumn>Unidade Orçamentária</TColumn>
            <TColumn>Dados contábeis</TColumn>
            <TColumn>Requisição Nº</TColumn>
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
                <Td>{item?.group}</Td>
                <Td>{item?.item}</Td>
                <Td>{item?.quantity}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Apliccants;
