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
import { ListTabs, ModalContainer, Panel, TabItem } from "../../../styles/components/contratos-atas/modal/styles";

const ModalContracts = ({ isOpen, onClose, termo }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
      <ModalContainer>
        <ModalHeader style={{ backgroundColor: "#185DA6", color: "white" }}>
          TC {termo?.tc} 
        </ModalHeader>
        <ModalCloseButton style={{ color: "white" }} />
        <ModalBody
          style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
        >
          <Tabs style={{ padding: 0, margin: 0 }} >
            <ListTabs>
              <TabItem>Detalhes</TabItem>

              <TabItem >Arquivos</TabItem>
            </ListTabs>

            <TabPanels>
              <Panel>
                <Details termo={termo} />
              </Panel>

              <Panel>
                <Files termo={termo}/>
              </Panel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
};

export default ModalContracts;
