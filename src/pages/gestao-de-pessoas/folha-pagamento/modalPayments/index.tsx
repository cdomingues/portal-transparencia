// import {
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalHeader,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
// } from "@chakra-ui/react";
// import Details from "./components/details";

// import Files from "./components/files";
// import { ListTabs, ModalContainer, Panel, TabItem } from "../../../../styles/components/folha-pagamento/modal/styles";

// const ModalPayments = ({ isOpen, onClose, payments }: any) => {
//   return (
//     <Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
//       <ModalContainer>
//         <ModalHeader style={{ backgroundColor: "#185DA6", color: "white" }}>
//           Matrícula Nº {payments?.matricula}
//         </ModalHeader>
//         <ModalCloseButton style={{ color: "white" }} />
//         <ModalBody
//           style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
//         >
//           <Tabs style={{ padding: 0, margin: 0 }}>
//             <ListTabs>
//               <TabItem>Detalhes</TabItem>

//               {/* <TabItem>Arquivos</TabItem> */}
//             </ListTabs>

//             <TabPanels>
//               <Panel>
//                 <Details payments={payments} />
//                 console.log(payments)
//               </Panel>

//               {/* <Panel>
//                 <Files />
//               </Panel> */}
//             </TabPanels>
//           </Tabs>
//         </ModalBody>
//       </ModalContainer>
//     </Modal>
//   );
// };

// export default ModalPayments;


import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue
} from "@chakra-ui/react";
import Details from "./components/details";

import Files from "./components/files";
import { ListTabs, ModalContainer, Panel, TabItem } from "../../../../styles/components/folha-pagamento/modal/styles";

import { getPayrollData } from "../../../../calls/expenses/payrolldata"

const ModalPayments = ({ isOpen, onClose, payments }: any) => {

  // Define a state to hold the payroll data
  const [payrollData, setPayrollData] = useState<any>([]);

  useEffect(() => {
    // Call the function here and store the returned data in the state
    const fetchData = async () => {
      const result = await getPayrollData(payments?.ano, payments?.mes, payments?.matricula);
      console.log("Result", result)

      setPayrollData(result.payrollData);
    };

  if(payments){
    fetchData();
  }

  }, [payments]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"5xl"} >
      <ModalContainer borderColor={"gray.800"} bg={useColorModeValue("white", "gray.800")}>
        <ModalHeader bg="transparent">
          Matrícula Nº {payments?.matricula}
        </ModalHeader>
        <ModalCloseButton style={{ color: "gray" }} />
        <ModalBody
        bg={useColorModeValue("white", "gray.800")}
          style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
        >
          <Tabs bg={useColorModeValue("white", "gray.800")} style={{ padding: 0, margin: 0 }}>
            <ListTabs bg={useColorModeValue("white", "gray.800")}>
              <TabItem>Detalhes</TabItem>

              {/* <TabItem>Arquivos</TabItem> */}
            </ListTabs >

            <TabPanels bg={useColorModeValue("white", "gray.800")}>
              <Panel bg={useColorModeValue("white", "gray.800")}>
                <Details bg={useColorModeValue("white", "gray.800")} payments={payments} payrollData={payrollData} /> {/* Pass payrollData as a prop */}
              </Panel>

              {/* <Panel>
                <Files />
              </Panel> */}
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
};

export default ModalPayments;

