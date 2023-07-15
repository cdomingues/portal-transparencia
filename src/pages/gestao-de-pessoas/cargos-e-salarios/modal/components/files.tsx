import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { TColumn } from "../../../../../styles/components/publicacoes/modal/styles";

const Files = () => {
  const mockTable = [
    {
      group: "10/02/23",
      item: "1. AVISO DE LICITAÇÃO",
      quantity: "Download",
    },
    {
      group: "10/02/23",
      item: "1. AVISO DE LICITAÇÃO",
      quantity: "Download",
    },
    {
      group: "10/02/23",
      item: "1. AVISO DE LICITAÇÃO",
      quantity: "Download",
    },
  ];

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TColumn>Data</TColumn>
            <TColumn>Descrição</TColumn>
            <TColumn></TColumn>
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

export default Files;
