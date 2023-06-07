// import { RowDetails } from "../../../../../styles/components/folha-pagamento/modal/styles";
// import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
// import { TColumn } from "../../../../../styles/components/licitacoes/modal/styles";


// const Details = ({ payments, payrollData }: any) => {
//   return (
//     <div style={{ overflowX: "auto" }} >
//       <RowDetails>
//         <div className="column">
//           <div className="title">Nome:</div>
//           <div className="value">{payments?.nome}</div>
//         </div>

//         <div className="column">
//           <div className="title">Cargo:</div>
//           <div className="value">{payments?.cargo}</div>
//         </div>
//       </RowDetails>

//       <RowDetails style={{ backgroundColor: "transparent" }}>
//         <div className="column">
//           <div className="title">Situacao:</div>
//           <div className="value">{payments?.situacao}</div>
//         </div>

//         <div className="column">
//           <div className="title">Salário Base:</div>
//           <div className="value">{payments?.salariobase}</div>
//         </div>

//         <div className="column">
//           <div className="title">Secretaria:</div>
//           <div className="value">{payments?.secretaria}</div>
//         </div>
//       </RowDetails>

//       <RowDetails>
//         <div className="column">
//           <div className="title">Data de Admissao:</div>
//           <div className="value">{payments?.dataadmissao}</div>
//         </div>
//       </RowDetails>
//       <br />
//       <br />
  
//     <TableContainer>
//       <Table variant="simple" style={{ overflowX: "auto" }}>
//         <Thead>
//           <Tr>
//             <TColumn>Descrição</TColumn>
//             <TColumn>Valor</TColumn>
//             <TColumn>Salário Base</TColumn>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {payrollData?.map((item: any, index: number) => {
//             return (
//               <Tr
//                 key={index}
//                 style={{
//                   backgroundColor:
//                     (index + 1) % 2 === 0 ? "#f7f7f7" : "transparent",
//                 }}
//               >
//                   <Td whiteSpace="break-spaces" >
//                   {item?.Descricao}
//                 </Td>
//                 <Td whiteSpace="break-spaces" className="md">
//                   {item?.Descricao}
//                 </Td>
//                 <Td whiteSpace="break-spaces" className="md">
//                   {item?.Valor}
//                 </Td>
//                 <Td whiteSpace="break-spaces">{item?.salariobase}</Td>
//               </Tr>
//             );
//           })}
//         </Tbody>
//       </Table>
//     </TableContainer>
//     </div>
//   );
// };

// export default Details;


import { RowDetails } from "../../../../../styles/components/folha-pagamento/modal/styles";
import { Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { TColumn } from "../../../../../styles/components/licitacoes/modal/styles";

const Details = ({ payments, payrollData }: any) => {
        const formatCurrency = (value: number) => {
          return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
        };

        const sortedPayrollData = [...payrollData].sort((a, b) => {
          // Convert salariobase to string
          const aBase = a.salariobase === 0 ? "Não" : "Sim";
          const bBase = b.salariobase === 0 ? "Não" : "Sim";
          // Sort by salariobase ("Sim" before "Não")
          if (aBase < bBase) return 1;
          if (aBase > bBase) return -1;
          // If salariobase is the same, sort by Valor (desc)
          return b.Valor - a.Valor;
        });

        return (
          <div style={{ overflowX: "auto" }} >
        <RowDetails style={{ fontSize: "sm" }}>
          <div className="column" style={{ fontSize: "sm" }}>
            <div className="title" style={{ fontSize: "sm" }}>Nome:</div>
            <div className="value" style={{ fontSize: "sm" }}>{payments?.nome}</div>
          </div>

          <div className="column" style={{ fontSize: "sm" }}>
            <div className="title" style={{ fontSize: "sm" }}>Cargo:</div>
            <div className="value" style={{ fontSize: "sm" }}>{payments?.cargo}</div>
          </div>
        </RowDetails>

        <RowDetails style={{ backgroundColor: "transparent", fontSize: "sm" }}>  
          <div className="column" style={{ fontSize: "sm" }}>
            <div className="title" style={{ fontSize: "sm" }}>Situacao:</div>
            <div className="value" style={{ fontSize: "sm" }}>{payments?.situacao}</div>
          </div>

          <div className="column" style={{ fontSize: "sm" }}>
            <div className="title" style={{ fontSize: "sm" }}>Salário Base:</div>
            <div className="value" style={{ fontSize: "sm" }}>{formatCurrency(payments?.salariobase)}</div>
          </div>

          <div className="column" style={{ fontSize: "sm" }}>
            <div className="title" style={{ fontSize: "sm" }}>Secretaria:</div>
            <div className="value" style={{ fontSize: "sm" }}>{payments?.secretaria}</div>
          </div>
        </RowDetails>

        <RowDetails style={{ fontSize: "sm" }}>
          <div className="column" style={{ fontSize: "sm" }}>
            <div className="title" style={{ fontSize: "sm" }}>Data de Admissao:</div>
            <div className="value" style={{ fontSize: "sm" }}>{payments?.dataadmissao}</div>
          </div>
        </RowDetails>

      <br />
      <br />
  
      <TableContainer>
        <Table variant="simple" style={{ overflowX: "auto" }}>
          <Thead>
            <Tr>
              <TColumn>Descrição</TColumn>
              <TColumn>Valor</TColumn>
              <TColumn>Salário Base</TColumn>
            </Tr>
          </Thead>
          <Tbody>
          {sortedPayrollData.map((item: any, index: number) => {
              return (
                <Tr
                  key={index}
                  style={{
                    backgroundColor:
                      (index + 1) % 2 === 0 ? "#f7f7f7" : "transparent",
                  }}
                >
                  <Td whiteSpace="break-spaces" fontSize="small">
                    {item?.Descricao}
                  </Td>
                  <Td whiteSpace="break-spaces" className="md" fontSize="small">
                    {formatCurrency(item?.Valor)}
                  </Td>
                  <Td whiteSpace="break-spaces" className="md" fontSize="small">
                    {item?.salariobase === 0 ? "Não" : "Sim"}
                  </Td>
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
