import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { TColumn } from "../../../../../styles/components/licitacoes/modal/styles";
import axios from "axios";
import { baseUrl } from "../../../../../config";

const Files = ({ details }: any) => {
  const handleDownload = async (value: string) => {
    const splited = value?.split('/');
    const fileName = splited[splited?.length - 1];
  
    const { data } = await axios.get(`${baseUrl}/api/download/${fileName}`, {
      responseType: 'arraybuffer',
    });
     
  
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
  
    window.URL.revokeObjectURL(url);
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {/* <TColumn>Data</TColumn> */}
            <TColumn>Descrição</TColumn>
            {/* <TColumn></TColumn> */}
          </Tr>
        </Thead>
        <Tbody>
          {details?.map((item: any, index: number) => {
            return (
              <Tr
                key={index}
                style={{
                  backgroundColor:
                    (index + 1) % 2 === 0 ? "#f7f7f7" : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleDownload(item?.href)}
              >
                <Td>{item?.content}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Files;
