import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { TColumn } from "../../../../../styles/components/folha-pagamento/modal/styles";

const Files = () => {
  const mockTable = [
    {
      group: "VENCIMENTO",
      item: "2.737,06",
    },
    {
      group: "AD.PERICULOSIDADE GUARDA",
      item: "821,12",
    },
    {
      group: "DIF.AD.PERICULOSIDADE",
      item: "465,30",
    },
  ];

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TColumn>Descrição</TColumn>
            <TColumn>Valor</TColumn>
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
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Files;
