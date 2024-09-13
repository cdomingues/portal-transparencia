import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ListTabs, ModalContainer, Panel, RowDetails, TabItem } from "./styles";
import Details from "./Details";
import Info from "./info";

const ModalDetails = ({ isOpen, onClose, data }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"1xl"}>
      <ModalContainer>
        <ModalHeader style={{ backgroundColor: "#185DA6", color: "white" }}>
          Emenda Parlamentar #{data?.n_emenda}
        </ModalHeader>
        <ModalCloseButton style={{ color: "white" }} />
        <ModalBody
          style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
        >
          <Tabs style={{ padding: 0, margin: 0 }}>
            <ListTabs>
              <TabItem>Detalhes</TabItem>
              <TabItem>Informações</TabItem>
            </ListTabs>

            <TabPanels>
              <Panel>
                <Details data={data} />
                
              </Panel>
              <Panel>
              <Info data={data} />
              </Panel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
};

export default ModalDetails;
