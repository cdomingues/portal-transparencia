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
import { RowDetails } from "./styles";
import Details from "./components/details";
import ItemsBidding from "./components/itemsBidding";
import Participants from "./components/participants";
import Apliccants from "./components/applicants";
import Files from "./components/files";

const ModalBiddings = ({ isOpen, onClose, bidding }: any) => {
  console.log("bidding", bidding);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"1xl"}>
      <ModalContent style={{ marginLeft: "2%", marginRight: "2%" }}>
        <ModalHeader style={{ backgroundColor: "#185DA6", color: "white" }}>
          Licitação #{bidding?.numero}
        </ModalHeader>
        <ModalCloseButton style={{ color: "white" }} />
        <ModalBody
          style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
        >
          <Tabs style={{ padding: 0, margin: 0 }}>
            <TabList style={{ overflowX: "auto", overflowY: "hidden" }}>
              <Tab style={{ width: 140 }}>Detalhes</Tab>
              <Tab style={{ width: 180 }}>Itens da licitação</Tab>
              <Tab style={{ width: 140 }}>Participantes</Tab>
              <Tab style={{ width: 140 }}>Requisitantes</Tab>
              <Tab style={{ width: 140 }}>Arquivos</Tab>
            </TabList>

            <TabPanels>
              <TabPanel style={{ padding: 0 }}>
                <Details bidding={bidding} />
              </TabPanel>

              <TabPanel style={{ padding: 0 }}>
                <ItemsBidding />
              </TabPanel>

              <TabPanel style={{ padding: 0 }}>
                <Participants />
              </TabPanel>

              <TabPanel style={{ padding: 0 }}>
                <Apliccants />
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

export default ModalBiddings;
