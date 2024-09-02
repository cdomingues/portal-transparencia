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
import Liquidacoes from "./components/liquidacoes";
import ItensEmpenho from "./components/itens_empenho";
import Pagamentos from "./components/pagamentos";

const ModalContracts = ({ isOpen, onClose, contract }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
      <ModalContainer>
        <ModalHeader style={{ backgroundColor: "#185DA6", color: "white" }}>
          Empenho {contract?.nr_empenho} / {contract?.exercicio_empenho} 
        </ModalHeader>
        <ModalCloseButton style={{ color: "white" }} />
        <ModalBody
          style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}
        >
          <Tabs style={{ padding: 0, margin: 0 }}>
            <ListTabs>
              <TabItem>Detalhes</TabItem>

              <TabItem>Prestação de Contas</TabItem>
              <TabItem>Liquidacoes</TabItem>
              <TabItem>Itens Empenho</TabItem>
              <TabItem>Pagamentos</TabItem>
            </ListTabs>

            <TabPanels>
              <Panel>
                <Details contract={contract} />
              </Panel>
              

              <Panel>
              <Files contract={contract}/>
              </Panel>

              <Panel>
              <Liquidacoes contract={contract}/>
              </Panel>

              <Panel>
                <ItensEmpenho contract={contract} />
              </Panel>

              <Panel>
                <Pagamentos contract={contract} />
              </Panel>


            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
};

export default ModalContracts;
