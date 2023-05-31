import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ListTabs, ModalContainer, Panel, RowDetails, TabItem } from "./styles";
import Details from "./components/details";
import ItemsBidding from "./components/itemsBidding";
import Participants from "./components/participants";
import Apliccants from "./components/applicants";
import Files from "./components/files";

const ModalBiddings = ({ isOpen, onClose, bidding, details }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"1xl"}>
      <ModalContainer>
        <ModalHeader style={{ backgroundColor: "#185DA6", color: "white" }}>
          Licitação #{bidding?.numero}
        </ModalHeader>
        <ModalCloseButton style={{ color: "white" }} />
        <ModalBody
          style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
        >
          <Tabs style={{ padding: 0, margin: 0 }}>
            <ListTabs>
              <TabItem>Detalhes</TabItem>
              {/* <TabItem>Itens da licitação</TabItem>
              <TabItem>Participantes</TabItem>
              <TabItem>Requisitantes</TabItem> */}
              <TabItem>Arquivos</TabItem>
            </ListTabs>

            <TabPanels>
              <Panel>
                <Details bidding={bidding} />
              </Panel>

              {/* <Panel>
                <ItemsBidding details={details}/>
              </Panel>

              <Panel>
                <Participants />
              </Panel>

              <Panel>
                <Apliccants />
              </Panel> */}

              <Panel>
                <Files  details={details} />
              </Panel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
};

export default ModalBiddings;
