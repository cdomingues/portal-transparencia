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
} from "@chakra-ui/react";
import Details from "./components/details";

import Files from "./components/files";

const ModalPayments = ({ isOpen, onClose, payments }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
      <ModalContent style={{ marginLeft: "2%", marginRight: "2%" }}>
        <ModalHeader style={{ backgroundColor: "#185DA6", color: "white" }}>
          Contrato Nº {payments?.numero}
        </ModalHeader>
        <ModalCloseButton style={{ color: "white" }} />
        <ModalBody
          style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
        >
          <Tabs style={{ padding: 0, margin: 0 }}>
            <TabList style={{ overflowX: "auto", overflowY: "hidden" }}>
              <Tab style={{ width: 140 }}>Detalhes</Tab>

              <Tab style={{ width: 140 }}>Arquivos</Tab>
            </TabList>

            <TabPanels>
              <TabPanel
                style={{
                  padding: 0,
                }}
              >
                <Details payments={payments} />
              </TabPanel>

              <TabPanel style={{ padding: 0 }}>
                <Files />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalPayments;
